# Backend (FastAPI)

This is a small FastAPI backend for Project1.

Endpoints:
- GET / -> status message
- GET /health -> plain text OK
- GET /support -> returns { email }
- GET /contact -> redirects to mailto:support

Run locally:

1. Create a virtual environment: python -m venv .venv
2. Activate it: .venv\Scripts\Activate.ps1 (PowerShell) or .venv\Scripts\activate
3. Install deps: pip install -r requirements.txt
4. Start: uvicorn app:app --reload --port 5000
# Project Backend

Minimal Express backend for Project1.

Endpoints:
- GET / -> status message
- GET /health -> { status: 'ok' }
- GET /support -> { email: 'vvedanth72@gmail.com' }
- POST /contact -> accepts JSON { name, email, message }

Run:

```powershell
cd backend
npm install
npm start
```
