# 🍳 Chef Mistral

**Chef Mistral** is a fun, AI-powered web app that helps you turn the ingredients you have on hand into delicious recipes instantly. Built with HTML, CSS, and React, this project was my first real-world application while learning frontend development — a great way to practice what I’ve learned over just a few days!

🎬 **Demo Video of running app:** [Watch the demo](https://github.com/up33anas/Chef-Mistral/blob/main/chef.mp4)
🌐 **Live App:** [Try it online](https://chef-mistral-snowy.vercel.app)

---

## 🤔 Why “Chef Mistral”?

The app uses the **Hugging Face Mistral API** to generate recipes. The AI acts as the “chef” behind the scenes, transforming your ingredients into personalized recipes — hence the name!

---

## ✨ Features

- Add the ingredients you have on hand.
- Instantly generate an AI-powered recipe with:
  - Recipe name
  - Ingredients list
  - Step-by-step instructions
  - Estimated cooking time
- Save time, reduce food waste, and make cooking more fun and stress-free.

---

## ⚙️ Tech Stack & Highlights

- **Frontend:** HTML, CSS, JavaScript, React + Vite
- **State Management:** React Hooks
- **AI Integration:** Hugging Face Mistral API
- **UI Features:** Responsive design, live ingredient preview, dynamic recipe generation

---

## 📝 Lessons Learned

- Controlled inputs and form validation in React.
- Making **async API calls** with proper error handling.
- Creating an **interactive UI** that responds instantly to user actions.

---

## 📂 Project Structure

```
src/
├── api/        # API calls to Hugging Face
├── components/ # Reusable React components
├── pages/      # Main pages
├── services/   # API helper functions
├── App.tsx     # Main app component
└── main.tsx    # App entry point

public/
├── index.html  # HTML entry point
└── assets/     # Images, icons, placeholders
```

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/up33anas/chef-mistral.git
cd chef-mistral
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Add your Hugging Face API key in a `.env` file:

```
VITE_HF_API_KEY=your_hf_api_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---
