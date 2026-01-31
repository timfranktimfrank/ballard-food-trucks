# Running Ballard Food Trucks App Locally

## Prerequisites
- **Node.js** (v16 or higher) - Download from https://nodejs.org
- **VS Code** - Download from https://code.visualstudio.com

## Step-by-Step Setup

### 1. Create a new React app
Open your terminal/command prompt and run:

```bash
npx create-react-app ballard-food-trucks
cd ballard-food-trucks
```

This creates a new React project with all dependencies installed.

### 2. Replace the default app
- Copy the `ballard-food-trucks.jsx` file I created
- Rename it to `App.jsx` (or keep it as is)
- Put it in the `src/` folder, replacing the existing `src/App.js`

### 3. Update `src/index.js`
Open `src/index.js` and make sure it imports your App:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';  // or './ballard-food-trucks.jsx' if you kept that name

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 4. Start the development server
In your terminal, run:

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## Important Notes

### API Key Issue
The app uses the Anthropic API to generate food truck predictions. The API calls in the code currently work in Claude.ai because authentication is handled automatically.

**When running locally, you have two options:**

#### Option A: Get an Anthropic API Key (for full AI functionality)
1. Go to https://console.anthropic.com
2. Sign up and get an API key
3. Add your API key to the fetch call in the app:

```javascript
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY_HERE",  // Add this line
    "anthropic-version": "2023-06-01"  // Add this line
  },
  body: JSON.stringify({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1200,
    messages: [{ role: "user", content: prompt }],
  }),
});
```

**Security warning:** Never commit API keys to public repositories. Use environment variables:
- Create a `.env` file in your project root
- Add: `REACT_APP_ANTHROPIC_API_KEY=your_key_here`
- Update code: `"x-api-key": process.env.REACT_APP_ANTHROPIC_API_KEY`
- Add `.env` to your `.gitignore`

#### Option B: Use Static Data (no API calls needed)
Replace the AI fetch with hardcoded truck data. I can help you create a simpler version without AI if you prefer.

## VS Code Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets** - Fast React snippets
- **Prettier** - Code formatter
- **ESLint** - JavaScript linter

## Common Issues

### "Module not found" errors
Run: `npm install`

### Port 3000 already in use
The terminal will ask if you want to use a different port. Say yes, or:
```bash
PORT=3001 npm start
```

### Styling looks broken
Make sure the `@import` line for Google Fonts in the `<style>` tag is working. If not, add this to `public/index.html` in the `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `build/` folder that you can deploy to:
- **Netlify** (drag & drop the build folder)
- **Vercel** (connect your GitHub repo)
- **GitHub Pages**
- Any static hosting service

---

Need help with any of these steps? Let me know!
