import hashlib
import os
import shutil

import streamlit as st
import ollama
from langchain_text_splitters import CharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_core.documents import Document

APP_TITLE = "Ask Jayanth AI"
DOCS_FOLDER = "profile_docs"
OLLAMA_MODEL = "llama3.2"

st.set_page_config(page_title=APP_TITLE, page_icon="🤖", layout="centered")
st.title(APP_TITLE)
st.write("Recruiters can ask questions about my experience, skills, projects, tools, and background.")

STRICT_SYSTEM_PROMPT = """
You are Jayanth's resume/profile assistant.
Answer ONLY using the provided context.
Do not guess, assume, or invent experience.
If the answer is not present in the context, say exactly:
"I don't have that information in Jayanth's profile."
Keep answers professional, concise, and recruiter-friendly.
"""


def get_profile_files_hash():
    hasher = hashlib.sha256()
    if not os.path.exists(DOCS_FOLDER):
        return hasher.hexdigest()

    for filename in sorted(os.listdir(DOCS_FOLDER)):
        if filename.endswith(".txt"):
            file_path = os.path.join(DOCS_FOLDER, filename)
            with open(file_path, "rb") as file:
                hasher.update(filename.encode("utf-8"))
                hasher.update(file.read())

    return hasher.hexdigest()


def load_profile_documents():
    documents = []

    if not os.path.exists(DOCS_FOLDER):
        os.makedirs(DOCS_FOLDER)

    for filename in sorted(os.listdir(DOCS_FOLDER)):
        if filename.endswith(".txt"):
            file_path = os.path.join(DOCS_FOLDER, filename)
            with open(file_path, "r", encoding="utf-8") as file:
                text = file.read().strip()
                if text:
                    documents.append(Document(page_content=text, metadata={"source": filename}))

    return documents


@st.cache_resource(show_spinner="Loading profile knowledge base...")
def create_vector_db(profile_hash):
    documents = load_profile_documents()

    if not documents:
        return None

    if os.path.exists(".chromadb_cache"):
        shutil.rmtree(".chromadb_cache", ignore_errors=True)

    splitter = CharacterTextSplitter(chunk_size=800, chunk_overlap=120)
    chunks = splitter.split_documents(documents)

    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vector_db = Chroma.from_documents(chunks, embeddings, persist_directory=".chromadb_cache")

    return vector_db


profile_hash = get_profile_files_hash()
vector_db = create_vector_db(profile_hash)

if vector_db is None:
    st.warning("No profile data found. Add your information inside the profile_docs folder as .txt files.")
    st.stop()

with st.sidebar:
    st.header("Suggested Questions")
    st.write("What is Jayanth's AI/ML experience?")
    st.write("What tools and technologies has Jayanth worked with?")
    st.write("Tell me about Jayanth's RAG project.")
    st.write("What is Jayanth's work authorization?")
    st.write("Summarize Jayanth's recent experience.")
    st.divider()
    st.caption("Update profile_docs/*.txt, then restart the app to refresh answers.")

question = st.text_input("Ask a recruiter-style question:")

if question:
    with st.spinner("Searching Jayanth's profile..."):
        profile_hash = get_profile_files_hash()
        vector_db = create_vector_db(profile_hash)
        retrieved_docs = vector_db.similarity_search(question, k=4)
        context = "\n\n".join(
            [f"Source: {doc.metadata.get('source', 'profile')}\n{doc.page_content}" for doc in retrieved_docs]
        )

        final_prompt = f"""
{STRICT_SYSTEM_PROMPT}

Context:
{context}

Question:
{question}

Answer:
"""

        try:
            response = ollama.chat(
                model=OLLAMA_MODEL,
                messages=[{"role": "user", "content": final_prompt}],
            )
            answer = response["message"]["content"]
            st.subheader("Answer")
            st.write(answer)

            with st.expander("View retrieved profile context"):
                st.write(context)

        except Exception as error:
            st.error("Could not connect to Ollama. Make sure Ollama is installed and running.")
            st.code("ollama pull llama3.2")
            st.code("streamlit run app.py")
            st.caption(str(error))
