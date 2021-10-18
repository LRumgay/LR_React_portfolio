import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Project from "./components/Project"


export default function app () {
  return (
    <main>
      <Navbar />
      <Project />
      <Footer />
    </main>
  );
}