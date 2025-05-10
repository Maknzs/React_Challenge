// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPostList from "./components/jsx/BlogPostList";
// import "./App.css"; NOT CURRENTLY IN USE

const sampleData = [
  {
    id: "1",
    title: "Getting Started with React",
    summary: "Learn the basics of React and build your first application.",
    date: "2023-01-01",
    url: "/posts/1",
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    summary:
      "Dive into useState, useEffect, and custom hooks to level up your React skills.",
    date: "2023-01-15",
    url: "/posts/2",
  },
  {
    id: "3",
    title: "React Router Deep Dive",
    summary: "Master routing and navigation in single-page React apps.",
    date: "2023-02-05",
    url: "/posts/3",
  },
  {
    id: "4",
    title: "Building Forms in React",
    summary: "Techniques for managing form state, validation, and submission.",
    date: "2023-02-20",
    url: "/posts/4",
  },
  {
    id: "5",
    title: "State Management with Redux",
    summary: "Understand the Redux pattern and how to integrate it with React.",
    date: "2023-03-10",
    url: "/posts/5",
  },
  {
    id: "6",
    title: "Optimizing React Performance",
    summary: "Tips and tools to make your React apps run faster and smoother.",
    date: "2023-03-25",
    url: "/posts/6",
  },
  {
    id: "7",
    title: "Deploying React Applications",
    summary:
      "Learn various deployment strategies including Vercel, Netlify, and traditional hosting.",
    date: "2023-04-05",
    url: "/posts/7",
  },
  {
    id: "8",
    title: "Testing React Components",
    summary:
      "Use tools like Jest and React Testing Library to write robust tests.",
    date: "2023-04-20",
    url: "/posts/8",
  },
  {
    id: "9",
    title: "Using Context API in React",
    summary: "Simplify state sharing with the React Context API.",
    date: "2023-05-01",
    url: "/posts/9",
  },
  {
    id: "10",
    title: "React and TypeScript",
    summary:
      "Combine TypeScript with React for better developer experience and type safety.",
    date: "2023-05-15",
    url: "/posts/10",
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogPostList posts={sampleData} />} />
    </Routes>
  );
}

export default App;
