import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      {/* <User/> */}
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/Feed" element={<Footer />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </>
  );
}

export default App;
