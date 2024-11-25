import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./page/Navbar";
import Home from "./components/home/home/Home";
import Hemo from "./components/home/Hemo";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main">
        <Hemo />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;