'use client';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const Home = () => {

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage)) && window.matchMedia('(prefer-color-scheme:dark)').matches) {
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  },[])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = ""
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setDarkMode = {setDarkMode}/>
      <Header/>
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode}/>
      <Work isDarkMode={isDarkMode}/>
      <Contact/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}

export default Home