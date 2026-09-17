import React, { useState } from "react";
import "./App.css";

const services = [
  { title: "Internal Gutter Conversions", text: "Convert problematic internal gutters to a modern external gutter system designed to manage rainwater more reliably." },
  { title: "Gutters", text: "New gutter installations, replacements and repairs for homes across Auckland." },
  { title: "Downpipes", text: "Practical downpipe solutions to help move rainwater safely away from your home." },
];

function App() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const subject = encodeURIComponent("Tui Spouting Quote Request");
    const body = encodeURIComponent(`Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nEmail: ${form.get("email")}\nAddress: ${form.get("address")}\n\nProject details:\n${form.get("message")}`);
    window.location.href = `mailto:tuispouting@outlook.co.nz?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <div className="site">
      <header className="navbar">
        <nav className="nav-left"><a href="#home" className="active">Home</a><a href="#services">Services</a><a href="#projects">Projects</a></nav>
        <a href="#home" className="logo" aria-label="Tui Spouting home"><img src="/tui-spouting-logo-transparent.png" alt="Tui Spouting" /></a>
        <nav className="nav-right"><a href="#quote">Get a Quote</a></nav>
      </header>
      <section id="home" className="hero"><div className="hero-content"><p className="eyebrow">AUCKLAND GUTTER SPECIALISTS</p><h1>Protect your home from<span>internal gutter problems.</span></h1><p className="hero-text">Tui Spouting specialises in internal-to-external gutter conversions, gutters and downpipes for homes across Auckland.</p><div className="buttons"><a href="#quote" className="button primary">Get a Free Quote</a><a href="#services" className="button secondary">Our Services <span>→</span></a></div></div></section>
      <section className="intro"><p className="eyebrow">INTERNAL GUTTER CONVERSION SPECIALIST</p><h2>Make your guttering work for your home.</h2><p>Internal gutters can be difficult to inspect and can cause serious water problems when they leak. Tui Spouting can discuss options for converting your internal gutter to an external system.</p><a href="#quote" className="text-link">Talk to Tui Spouting →</a></section>
      <section id="services" className="section"><div className="section-heading"><p className="eyebrow">WHAT WE DO</p><h2>Gutter solutions built around your home.</h2></div><div className="service-grid">{services.map(service=><article className="service-card" key={service.title}><div className="card-icon">⌁</div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>
      <section className="process"><div><p className="eyebrow">THE PROCESS</p><h2>Simple. Professional. Straightforward.</h2></div><div className="steps"><div><span>01</span><h3>Get in touch</h3><p>Tell us about your guttering project.</p></div><div><span>02</span><h3>Free competitive quote</h3><p>We assess the work and provide a quote.</p></div><div><span>03</span><h3>Get it sorted</h3><p>We complete the work with a professional finish.</p></div></div></section>
      <section id="projects" className="section projects"><div className="section-heading"><p className="eyebrow">RECENT PROJECTS</p><h2>See what we've been working on.</h2><p>Project photos will be added here. Check back soon to see recent Tui Spouting work.</p></div><div className="project-placeholder"><h3>Projects coming soon</h3><p>Add your completed project photos here later.</p></div></section>
      <section id="quote" className="quote-section"><div className="quote-info"><p className="eyebrow">FREE COMPETITIVE QUOTES</p><h2>Let's talk about your guttering.</h2><p>Need an internal gutter converted, or need new gutters or downpipes? Send through your details and we'll get back to you.</p><div className="contact-details"><a href="tel:02108682167">📞 021 086 82167</a><a href="mailto:tuispouting@outlook.co.nz">✉ tuispouting@outlook.co.nz</a><span>📍 Auckland</span></div></div><form className="quote-form" onSubmit={handleSubmit}><label>Your name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required placeholder="021..." /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Property address<input name="address" placeholder="Auckland address" /></label><label>Tell us about the job<textarea name="message" required rows="5" placeholder="What guttering work do you need?" /></label><button type="submit" className="button primary">Request Free Quote</button>{sent&&<p className="form-note">Your email app should now open with your quote request.</p>}</form></section>
      <footer><div className="footer-logo"><strong>Tui Spouting</strong><span>Internal Gutter Conversion Specialist</span></div><div className="footer-contact"><a href="tel:02108682167">021 086 82167</a><a href="mailto:tuispouting@outlook.co.nz">tuispouting@outlook.co.nz</a></div><p>© {new Date().getFullYear()} Tui Spouting · Auckland</p></footer>
    </div>
  );
}
export default App;
