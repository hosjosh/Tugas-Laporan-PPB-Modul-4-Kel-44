import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/resep/:id" element={<RecipeDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}