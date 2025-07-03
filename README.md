# 🎬 Movie Feedback App

A simple React application that allows users to submit and view feedback for movies. It demonstrates the use of React hooks, form handling, local storage, and routing using **React Router**.

---

## 🚀 Features

- Submit feedback for a movie
- View a list of all submitted feedback
- Persist data using `localStorage`
- Navigate between pages using `react-router-dom`

---

## 🧱 Tech Stack

- React (with hooks: `useState`, `useEffect`)
- React Router DOM (for page navigation)
- LocalStorage (for simple data persistence)

---

## 📂 File Structure

src/
├── components/
│ ├── MovieFeedback.js # Feedback form component
│ └── ViewFeedback.js # Review list display
├── context/
│ └── FeedbackContext.js # Optional context API (not used in this version)
├── App.js # Routing and layout
└── index.js # App entry point


---

## 🧪 How It Works

### 1. **MovieFeedback Component**
- Form input for name, movie selection, rating, and comments
- On submit:
  - Saves data to `localStorage`
  - Redirects to `/reviews`

### 2. **ViewFeedback Component**
- Fetches data from `localStorage`
- Renders list of reviews (or message if empty)

