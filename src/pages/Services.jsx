import "../styles/Pages.css";

export default function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="service-grid">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>Modern and responsive websites built for your needs.</p>
        </div>
        <div className="service-card">
          <h2>Digital Marketing</h2>
          <p>Grow your audience and reach more customers online.</p>
        </div>
        <div className="service-card">
          <h2>Brand Strategy</h2>
          <p>Crafting a unique brand identity for your business.</p>
        </div>
      </div>
    </div>
  );
}
