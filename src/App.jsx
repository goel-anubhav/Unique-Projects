import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageLayout from "./components/PageLayout/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-layout" element={<PageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
