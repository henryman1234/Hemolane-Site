import { div } from "framer-motion/client";
import React, { useState } from "react";
import "./sass/App.scss";
import Navbar from "./components/navbar/Navbar";


function App () {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSecton, setIsActiveSection] = useState(false)

  return (
    <div  className="page">
      <div className="page-wrapper">
        <Navbar/>
        <main>
        <div>Bonsoir les gens</div>
        <div>Bonjour les gens</div>
        </main>

      </div>
    
    </div>
  )
}

export  default App