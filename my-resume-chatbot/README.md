# Ask Jayanth AI - Personal Resume Chatbot

A simple personal RAG chatbot for recruiters. It answers only from your verified profile documents inside `profile_docs/`.

## What to install

### 1. Install Python
Install Python 3.10 or 3.11 from the official Python website.

During installation on Windows, check:

```bash
Add Python to PATH
```

Check installation:

```bash
python --version
pip --version
```

### 2. Install VS Code
Install Visual Studio Code and open this project folder in it.

### 3. Install Ollama
Install Ollama from the official Ollama website.

After installing, open a terminal and run:

```bash
ollama pull llama3.2
```

Check that it works:

```bash
ollama run llama3.2
```

Type `/bye` to exit.

## How to run this project

Open this folder in terminal:

```bash
cd my-resume-chatbot
```

Create virtual environment:

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

Install Python packages:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
streamlit run app.py
```

## Where to add your data

Add your verified information in these files:

```text
profile_docs/resume.txt
profile_docs/skills.txt
profile_docs/projects.txt
profile_docs/experience.txt
profile_docs/work_authorization.txt
```

Keep the information factual. The chatbot will answer only from these files.

After editing the files, stop the app and run again:

```bash
streamlit run app.py
```

## How to prevent hallucinations

This prototype uses a strict prompt:

```text
Answer only using the provided context. If the answer is not present, say: I don't have that information in Jayanth's profile.
```

Do not add fake skills, fake job titles, fake dates, or fake project details in the profile files.

## Best recruiter questions to test

```text
What is Jayanth's AI/ML experience?
What tools and technologies has Jayanth worked with?
Tell me about Jayanth's RAG project.
What is Jayanth's work authorization?
What projects has Jayanth built?
What cloud platforms does Jayanth know?
```

## Resume bullet

```text
AI Resume Chatbot | Python, Streamlit, Ollama, ChromaDB, RAG
Built a personal AI chatbot that allows recruiters to ask questions about my resume, projects, skills, and experience. Used retrieval-augmented generation with a local open-source LLM and strict context-based prompting to reduce hallucinations and ensure answers are grounded only in verified profile documents.
```
