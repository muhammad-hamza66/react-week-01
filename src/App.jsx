import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import "./styles/App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  let PageComponent;
  switch (currentPage) {
    case "about":
      PageComponent = <About />;
      break;
    case "services":
      PageComponent = <Services />;
      break;
    case "blogs":
      PageComponent = <Blogs />;
      break;
    case "contact":
      PageComponent = <Contact />;
      break;
    default:
      PageComponent = <Home />;
  }

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="content">{PageComponent}</main>
      <Footer />
    </>
  );
}
