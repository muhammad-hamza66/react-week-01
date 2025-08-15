import "../styles/Navbar.css";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => setCurrentPage("home")}>
          HK-BRAND
        </div>
        <div className="navbar-links">
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("about")}>About</button>
          <button onClick={() => setCurrentPage("services")}>Services</button>
          <button onClick={() => setCurrentPage("blogs")}>Blogs</button>
          <button onClick={() => setCurrentPage("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
}
