import "../styles/Pages.css";

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Welcome to <span className="brand">HK-BRAND</span></h1>
        <p>
          We provide top-notch services to help you grow your business.
          From branding and design to marketing and strategy — we deliver results.
        </p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Brand Identity</h2>
          <p>Create a memorable logo and style that speaks for your business.</p>
        </div>
        <div className="feature-card">
          <h2>Marketing</h2>
          <p>Reach more people with targeted and effective campaigns.</p>
        </div>
        <div className="feature-card">
          <h2>Strategy</h2>
          <p>Innovative plans that push your business to the next level.</p>
        </div>
      </section>
    </div>
  );
}
