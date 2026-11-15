import hashlib
import shutil
from pathlib import Path
from typing import List

import ollama
import streamlit as st
from langchain_core.documents import Document
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import CharacterTextSplitter

APP_TITLE = "JR AI Resume"
DOCS_FOLDER = Path("profile_docs")
OLLAMA_MODEL = "llama3.2"
VECTOR_DB_PATH = Path(".chromadb_cache")
CONTACT_EMAIL = "jayanth.ruddaraju@gmail.com"
LINKEDIN_URL = "https://linkedin.com/in/jayanth-ruddaraju"
RESUME_FILE = Path("resume.pdf")
NAV_PAGES = ["Home", "Experience", "Projects", "Skills", "Chatbot", "Resume", "Contact"]
SUGGESTED_QUESTIONS = [
    "What are Jayanth’s current roles and responsibilities?",
    "What AI/ML projects has he worked on?",
    "What is his experience with RAG and LangChain?",
    "Is he available for full-time roles?",
    "What technologies does he use?",
    "Why is he a good fit for this role?",
    "Summarize his resume in 5 bullet points.",
    "What is his work authorization?",
]

STRICT_SYSTEM_PROMPT = """You are Jayanth's resume/profile assistant.
Answer ONLY using the provided context.
Keep answers positive, professional, and recruiter-friendly.
If asked about skills, technologies, or candidate fit, emphasize relevant experience and strengths from the context.
If a requested skill or technology is not directly present, look for a closely related skill or technology in the context and explain how that related experience applies.
If there is no direct or closely related experience in the context, respond exactly: "I don’t have that information in Jayanth’s profile. Please contact him directly for more details."
Do not mention weaknesses, short tenure, or lack of experience unless the context explicitly says so."""

CSS = """
<style>
body { background-color: #f3f7ff; }
main .block-container { padding-top: 1rem; padding-left: 2rem; padding-right: 2rem; }
.stButton>button { border-radius: 14px; }
.hero-card, .profile-card, .info-card, .experience-card, .chat-panel, .context-panel { border-radius: 24px; background: #ffffff; box-shadow: 0 18px 60px rgba(16, 60, 125, 0.08); padding: 24px; }
.hero-title { font-size: 3rem; font-weight: 800; line-height: 1.05; margin: 0; }
.hero-subtitle { font-size: 1.05rem; color: #475569; margin-top: 1rem; }
.cta-button { display: inline-block; background-color: #1d4ed8; color: white; border-radius: 14px; padding: 14px 26px; text-decoration: none; font-weight: 700; margin-right: 10px; }
.cta-secondary { display: inline-block; background-color: #eef2ff; color: #1d4ed8; border-radius: 14px; padding: 14px 26px; text-decoration: none; font-weight: 700; }
.badge { display: inline-block; background: #eff6ff; color: #1d4ed8; border-radius: 999px; padding: 8px 14px; margin: 4px 4px 4px 0; font-size: 0.85rem; }
.suggested-chip { display: inline-block; background: #eff6ff; color: #1d4ed8; border-radius: 999px; padding: 12px 18px; margin: 6px 6px 6px 0; font-weight: 600; cursor: pointer; }
.card-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
.small-text { color: #64748b; }
.chat-box { background: #f8fafc; border-radius: 18px; padding: 18px; }
</style>
"""


def initialize_session_state() -> None:
    if "page" not in st.session_state:
        st.session_state.page = "Home"
    if "chat_history" not in st.session_state:
        st.session_state.chat_history = []
    if "pending_question" not in st.session_state:
        st.session_state.pending_question = ""


def get_profile_files_hash() -> str:
    digest = hashlib.sha256()
    for file_path in sorted(DOCS_FOLDER.glob("*.txt")):
        digest.update(file_path.name.encode("utf-8"))
        digest.update(file_path.read_bytes())
    return digest.hexdigest()


def load_profile_documents() -> List[Document]:
    documents: List[Document] = []
    DOCS_FOLDER.mkdir(exist_ok=True)
    for file_path in sorted(DOCS_FOLDER.glob("*.txt")):
        text = file_path.read_text(encoding="utf-8").strip()
        if text:
            documents.append(Document(page_content=text, metadata={"source": file_path.name}))
    return documents


@st.cache_resource(show_spinner="Building knowledge base...")
def create_vector_db(profile_hash: str) -> Chroma | None:
    documents = load_profile_documents()
    if not documents:
        return None

    if VECTOR_DB_PATH.exists():
        shutil.rmtree(VECTOR_DB_PATH, ignore_errors=True)

    splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=150)
    chunks = splitter.split_documents(documents)
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    return Chroma.from_documents(chunks, embeddings, persist_directory=str(VECTOR_DB_PATH))


def build_prompt(question: str, context: str) -> str:
    return f"""{STRICT_SYSTEM_PROMPT}

Context:
{context}

Question: {question}
Answer:"""


def ask_agent(question: str) -> str:
    vector_db = create_vector_db(get_profile_files_hash())
    if vector_db is None:
        return "I don’t have that information in Jayanth’s profile. Please contact him directly for more details."

    retrieved_docs = vector_db.similarity_search(question, k=3)
    context = "\n\n".join(
        [f"Source: {doc.metadata.get('source', 'profile')}\n{doc.page_content}" for doc in retrieved_docs]
    )
    prompt = build_prompt(question, context)

    response_text = ""
    stream = ollama.chat(model=OLLAMA_MODEL, messages=[{"role": "user", "content": prompt}], stream=True)
    for chunk in stream:
        response_text += chunk["message"]["content"]
    return response_text.strip()


def render_navbar() -> None:
    st.markdown(CSS, unsafe_allow_html=True)
    logo_col, nav_col, cta_col = st.columns([1, 3, 1])
    with logo_col:
        st.markdown("<div style='font-size:1.25rem; font-weight:800; color:#1d4ed8;'>JR AI Resume</div>", unsafe_allow_html=True)
    with nav_col:
        nav_buttons = st.columns(len(NAV_PAGES))
        for idx, page in enumerate(NAV_PAGES):
            with nav_buttons[idx]:
                if st.button(page, key=f"nav_{page}"):
                    st.session_state.page = page
    with cta_col:
        if st.button("Ask the AI", key="nav_ask_ai"):
            st.session_state.page = "Chatbot"
    st.markdown("---")


def render_header() -> None:
    render_navbar()


def render_home() -> None:
    hero_left, hero_right = st.columns([2, 1], gap="large")
    with hero_left:
        st.markdown("<div class='hero-card'>", unsafe_allow_html=True)
        st.markdown("<div class='hero-title'>Meet Jayanth through an AI Resume Chatbot</div>", unsafe_allow_html=True)
        st.markdown("<div class='hero-subtitle'>Ask anything about Jayanth’s experience, skills, projects, work authorization, or role fit — get verified answers instantly with source-backed insights.</div>", unsafe_allow_html=True)
        st.markdown("<div style='margin-top:24px;'>"
                    f"<a class='cta-button' href='#chatbot'>Start Chat</a>"
                    f"<a class='cta-secondary' href='{RESUME_FILE}'>View Resume</a>"
                    "</div>", unsafe_allow_html=True)
        st.markdown("</div>", unsafe_allow_html=True)
        st.markdown("<div style='display:flex; gap:12px; flex-wrap:wrap; margin-top:24px;'>"
                    "<div class='info-card'>Verified Answers</div>"
                    "<div class='info-card'>Up-to-date</div>"
                    "<div class='info-card'>Private & Secure</div>"
                    "</div>", unsafe_allow_html=True)
    with hero_right:
        st.markdown("<div class='profile-card'>", unsafe_allow_html=True)
        st.markdown("<div style='display:flex; justify-content:space-between; align-items:center;'>"
                    "<div><strong>Jayanth Ruddaraju</strong><br><span class='small-text'>AI/ML Engineer</span></div>"
                    "<div style='width:72px; height:72px; border-radius:18px; background:#e0e7ff; display:flex; align-items:center; justify-content:center; color:#1d4ed8; font-weight:800;'>JR</div>"
                    "</div>", unsafe_allow_html=True)
        st.markdown("<div style='margin-top:16px; color:#475569;'>Maryland, USA</div>", unsafe_allow_html=True)
        st.markdown("<div style='margin-top:16px; display:grid; gap:8px;'>"
                    "<span><strong>Work Authorization:</strong> OPT / GC-EAD</span>"
                    "<span><strong>Open to:</strong> Full-time / Contract roles</span>"
                    "</div>", unsafe_allow_html=True)
        st.markdown("<div style='margin-top:16px; font-weight:700;'>Key Skills</div>", unsafe_allow_html=True)
        skills = ["Python", "Java", "SQL", "React", "Spring Boot", "ML", "RAG", "LangChain", "Azure", "Docker"]
        skill_badges = "".join([f"<span class='badge'>{skill}</span>" for skill in skills])
        st.markdown(skill_badges, unsafe_allow_html=True)
        st.markdown("<div style='margin-top:22px; display:grid; gap:10px;'>"
                    f"<a class='cta-secondary' href='{RESUME_FILE}'>Download Resume</a>"
                    f"<a class='cta-secondary' href='{LINKEDIN_URL}' target='_blank'>LinkedIn</a>"
                    f"<a class='cta-secondary' href='mailto:{CONTACT_EMAIL}'>Email Me</a>"
                    "</div>", unsafe_allow_html=True)
        st.markdown("</div>", unsafe_allow_html=True)

    st.markdown("---")
    st.markdown("### Why recruiters love this")
    layout_cols = st.columns(4)
    cards = [
        ("Ask natural questions", "Have real conversations in plain English—just like talking to Jayanth."),
        ("Instant resume insights", "Get quick, accurate answers about experience, skills, projects, and more."),
        ("Verified source answers", "All responses come from Jayanth’s resume, experience, skills, and projects files."),
        ("Contact in one click", "Connect with Jayanth via email or LinkedIn instantly."),
    ]
    for col, (title, desc) in zip(layout_cols, cards):
        with col:
            st.markdown(f"<div class='info-card'><strong>{title}</strong><br><span class='small-text'>{desc}</span></div>", unsafe_allow_html=True)

    st.markdown("---")
    st.markdown("### Experience Snapshot")
    exp_cols = st.columns(2)
    with exp_cols[0]:
        st.markdown("<div class='experience-card'><strong>Software Engineer – Machine Learning</strong><br>Uber<br><span class='small-text'>Dec 2022 – Present | San Francisco, CA</span><ul><li>Built ML models for pricing, ETA, and demand forecasting.</li><li>Developed production pipelines with Python, PySpark, and Airflow on AWS.</li><li>Improved prediction accuracy and deployment reliability.</li></ul><div style='margin-top:12px;'><span class='badge'>Python</span><span class='badge'>Spark</span><span class='badge'>Airflow</span><span class='badge'>Docker</span><span class='badge'>PyTorch</span></div></div>", unsafe_allow_html=True)
    with exp_cols[1]:
        st.markdown("<div class='experience-card'><strong>Data Scientist</strong><br>Dell Technologies<br><span class='small-text'>Jul 2021 – Dec 2022 | Round Rock, TX</span><ul><li>Built NLP and computer vision solutions for support automation.</li><li>Implemented RAG-based document search for enterprise knowledge.</li><li>Created reports and dashboards using SQL and Python.</li></ul><div style='margin-top:12px;'><span class='badge'>Python</span><span class='badge'>SQL</span><span class='badge'>NLP</span><span class='badge'>RAG</span><span class='badge'>LangChain</span></div></div>", unsafe_allow_html=True)

    st.markdown("---")
    st.markdown("### Featured Questions")
    q_cols = st.columns(2)
    for idx, question in enumerate(SUGGESTED_QUESTIONS):
        with q_cols[idx % 2]:
            if st.button(question, key=f"suggested_{idx}"):
                st.session_state.pending_question = question
            st.markdown(f"<span class='suggested-chip'>{question}</span>", unsafe_allow_html=True)

    st.markdown("---")
    st.markdown("### How it works")
    how_cols = st.columns(3)
    steps = [
        ("Ask", "Ask recruiter-style questions about Jayanth’s experience, skills, projects, or role fit."),
        ("Understand", "The assistant provides accurate answers using only verified profile documents."),
        ("Connect", "Reach out via email or LinkedIn when you want to move forward."),
    ]
    for col, (title, desc) in zip(how_cols, steps):
        with col:
            st.markdown(f"<div class='info-card'><strong>{title}</strong><br><span class='small-text'>{desc}</span></div>", unsafe_allow_html=True)

    st.markdown("---")
    st.markdown(f"<div class='info-card' style='text-align:center;'><strong>Have questions? Let the AI answer for you.</strong><br><span class='small-text'>Ask about Jayanth’s experience, skills, or projects.</span><br><a class='cta-button' href='#chatbot'>Start Chat Now</a> <a class='cta-secondary' href='{RESUME_FILE}'>Download Resume</a></div>", unsafe_allow_html=True)


def render_chatbot() -> None:
    st.markdown("<div id='chatbot'></div>", unsafe_allow_html=True)
    st.markdown("### Chatbot")
    chat_left, chat_right = st.columns([3, 1], gap="large")
    with chat_left:
        st.markdown("<div class='chat-panel'>", unsafe_allow_html=True)
        st.markdown("<div style='display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;'>"
                    "<div><strong>Ask about Jayanth</strong><br><span class='small-text'>AI Resume Assistant</span></div>"
                    "</div>", unsafe_allow_html=True)

        if st.button("New Question", key="new_question_button", use_container_width=True):
            st.session_state.chat_history = []
            st.session_state.pending_question = ""
            st.rerun()

        st.markdown("<div style='margin-top:16px; display:grid; gap:10px;'>", unsafe_allow_html=True)
        for idx, prompt in enumerate(SUGGESTED_QUESTIONS):
            if st.button(prompt, key=f"prompt_{idx}"):
                st.session_state.pending_question = prompt
        st.markdown("</div>", unsafe_allow_html=True)

        for message in st.session_state.chat_history:
            role = "assistant" if message["role"] == "assistant" else "user"
            st.chat_message(role).write(message["content"])

        if st.session_state.pending_question:
            question = st.session_state.pending_question
            st.session_state.pending_question = ""
        else:
            question = st.chat_input("Ask about my experience, projects, skills, availability, or role fit...", key="main_chat_input")

        if question:
            st.session_state.chat_history.append({"role": "user", "content": question})
            with st.spinner("Searching profile and generating answer..."):
                answer = ask_agent(question)
            st.session_state.chat_history.append({"role": "assistant", "content": answer})
            st.chat_message("assistant").write(answer)
            st.markdown(f"<div class='info-card' style='margin-top:18px; text-align:center;'><strong>Interested in speaking with Jayanth?</strong><br><a href='mailto:{CONTACT_EMAIL}'>Email Jayanth</a> · <a href='{LINKEDIN_URL}' target='_blank'>LinkedIn</a></div>", unsafe_allow_html=True)
        st.markdown("</div>", unsafe_allow_html=True)

    with chat_right:
        st.markdown("<div class='context-panel'>", unsafe_allow_html=True)
        st.markdown("<div class='card-title'>Candidate Context</div>", unsafe_allow_html=True)
        st.markdown("<strong>Jayanth Ruddaraju</strong><br><span class='small-text'>AI/ML Engineer</span>", unsafe_allow_html=True)
        st.markdown(f"<div class='small-text' style='margin-top:12px;'>Maryland, USA</div><div class='small-text'>Email: <a href='mailto:{CONTACT_EMAIL}'>{CONTACT_EMAIL}</a></div><div class='small-text'>LinkedIn: <a href='{LINKEDIN_URL}' target='_blank'>LinkedIn</a></div>", unsafe_allow_html=True)
        st.markdown("<div style='margin-top:18px; display:grid; gap:12px;'>"
                    "<div class='info-card'><strong>Experience Highlights</strong><br>3+ years in AI/ML, 10+ projects, strong product delivery focus.</div>"
                    "<div class='info-card'><strong>Top Skills</strong><br>Python, Machine Learning, Deep Learning, RAG, LangChain, NLP, Azure</div>"
                    "</div>", unsafe_allow_html=True)
        st.markdown("</div>", unsafe_allow_html=True)


def render_page() -> None:
    page = st.session_state.page
    if page == "Home":
        render_home()
    elif page == "Experience":
        st.markdown("### Experience")
        st.markdown("This section can show detailed experience pulled from your profile documents.")
    elif page == "Projects":
        st.markdown("### Projects")
        st.markdown("This section can show featured projects pulled from your profile documents.")
    elif page == "Skills":
        st.markdown("### Skills")
        st.markdown("This section can show key skill categories and proficiencies.")
    elif page == "Chatbot":
        render_chatbot()
    elif page == "Resume":
        if RESUME_FILE.exists():
            st.markdown(f"[Download resume]({RESUME_FILE})")
        else:
            st.warning("resume.pdf is not available. Add your PDF to the project root.")
    else:
        st.markdown("### Contact")
        st.markdown(f"Email: [{CONTACT_EMAIL}](mailto:{CONTACT_EMAIL})")
        st.markdown(f"LinkedIn: [{LINKEDIN_URL}]({LINKEDIN_URL})")


def main() -> None:
    initialize_session_state()
    st.set_page_config(page_title=APP_TITLE, page_icon="🤖", layout="wide")
    render_header()
    render_page()


if __name__ == "__main__":
    main()
