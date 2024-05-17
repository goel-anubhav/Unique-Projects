import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageLayout from "./components/PageLayout/PageLayout";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-layout" element={<PageLayout />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
