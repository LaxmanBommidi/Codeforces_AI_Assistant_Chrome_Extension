# Codeforces Hint Assistant

Codeforces Hint Assistant is a Chrome Extension that provides AI-generated progressive hints for Codeforces problems without revealing the complete solution.

## Features

- 🤖 AI-generated hints for Codeforces problems
- 📄 Automatically detects the current problem
- 💡 Generates 3 progressive hints
- 🎯 Helps users think instead of revealing the solution
- ⚡ Lightweight Chrome Extension with Shadow DOM UI

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Chrome Extension (Manifest V3)

### Backend
- Node.js
- Express.js
- TypeScript
- Gemini API

## How It Works

1. Open a Codeforces problem.
2. Click the floating AI button.
3. Click **Generate AI Hints**.
4. The extension sends the problem details to the backend.
5. Gemini generates three progressive hints.
6. Click **Hint 1**, **Hint 2**, or **Hint 3** to view them.

## API

```
POST /api/hints
```

Request

```json
{
  "problem": {
    "title": "...",
    "statement": "...",
    "input": "...",
    "output": "...",
    "timeLimit": "...",
    "memoryLimit": "..."
  }
}
```

Response

```json
{
  "hint1": "...",
  "hint2": "...",
  "hint3": "..."
}
```

## Installation

### Frontend

```bash
cd codeforces-ai-assistant
npm install
npm run build
```

Load the generated `dist` folder as an unpacked extension in Chrome.

### Backend

```bash
cd server

npm install

npm run dev
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=3000
```
