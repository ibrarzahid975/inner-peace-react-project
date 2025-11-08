import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Practices from "./components/Practices";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Practices />
      <Resources />
      <Contact />
      <Footer />
    </>
  )
}

export default App
