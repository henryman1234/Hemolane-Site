import { div } from "framer-motion/client";
import React, { useState } from "react";
import "./sass/App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";


function App () {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSecton, setIsActiveSection] = useState(false)

  return (
    <div  className="page" >
    
        <Navbar/>
        <main>
          <Hero/>
        </main>

      </div>
  )
}

export  default App