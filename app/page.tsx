'use client';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Home