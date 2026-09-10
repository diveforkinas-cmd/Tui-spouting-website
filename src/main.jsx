import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, CheckCircle2, ChevronDown, Facebook, Instagram,
  Mail, Menu, Phone, ShieldCheck, Star, X, MapPin, Wrench
} from "lucide-react";
import "./styles.css";

const services = [
  { title: "New Spouting", text: "Quality new guttering systems designed to suit your roofline and keep rainwater moving safely.", icon: "01" },
  { title: "Spouting Repairs", text: "Leaks, rust, loose brackets and damaged sections repaired properly to extend the life of your system.", icon: "02" },
  { title: "Downpipes", text: "New and replacement downpipes to improve water flow and protect your home from runoff.", icon: "03" },
  { title: "Internal to External", text: "Practical internal-to-external gutter conversions to improve drainage and reduce maintenance.", icon: "04" }
];

const areas = ["North Shore", "West Auckland", "Central Auckland", "East Auckland", "South Auckland", "Rodney"];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Tui Spouting home">
      <span className="logo-mark">T</span>
      <span><strong>TUI</strong><small>SPOUTING</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top">
      <header className="header">
        <div className="container nav">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["Services", "Why Tui", "Gallery", "Areas", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-phone" href="tel:+64210000000"><Phone size={16}/> Call for a quote</a>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> Auckland spouting specialists</div>
              <h1>Rainwater handled.<br/><em>Done properly.</em></h1>
              <p className="hero-text">Professional spouting, guttering and downpipe work for homes and businesses across Auckland.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Get a free quote <ArrowRight size={18}/></a>
                <a className="btn btn-ghost" href="tel:+64210000000"><Phone size={18}/> 021 000 0000</a>
              </div>
              <div className="trust-row">
                <span><CheckCircle2 size={17}/> Quality workmanship</span>
                <span><CheckCircle2 size={17}/> Reliable service</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-top"><span>01</span><span>BUILT FOR NZ WEATHER</span></div>
              <div className="bird-art" aria-hidden="true">T</div>
              <div className="hero-card-bottom">
                <strong>Protect your home</strong>
                <span>From roofline to ground.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="container strip-inner">
            <span><ShieldCheck size={19}/> Professional workmanship</span>
            <span><Wrench size={19}/> Repairs & new installs</span>
            <span><MapPin size={19}/> Auckland-wide service</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow"><span></span> What we do</div><h2>Spouting that works<br/><em>when it matters.</em></h2></div>
              <p>From a small leak to a complete new system, Tui Spouting provides practical solutions built around your property.</p>
            </div>
            <div className="service-grid">
              {services.map((s) => (
                <article className="service-card" key={s.title}>
                  <span className="service-number">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a href="#contact">Ask about this service <ArrowRight size={16}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section" id="why-tui">
          <div className="container split">
            <div>
              <div className="eyebrow light"><span></span> Why Tui Spouting</div>
              <h2>A clean job.<br/><em>A solid result.</em></h2>
              <p className="large-copy">We focus on the details that matter: correct falls, secure fixings, tidy joins and reliable water flow.</p>
              <div className="check-list">
                {["Straightforward advice", "Quality materials", "Tidy, professional finish", "Clear quotes before work begins"].map(x => (
                  <div key={x}><CheckCircle2 size={20}/>{x}</div>
                ))}
              </div>
            </div>
            <div className="stats-card">
              <div className="stat"><strong>Auckland</strong><span>Service area</span></div>
              <div className="stat"><strong>Free</strong><span>Quote enquiries</span></div>
              <div className="stat"><strong>100%</strong><span>Focus on the finish</span></div>
              <div className="quote-mini"><Star size={18} fill="currentColor"/><p>“Professional, practical and built to last.”</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="section-head compact">
              <div><div className="eyebrow"><span></span> Our work</div><h2>Recent projects</h2></div>
              <p>Replace these placeholders with your own job photos for the finished site.</p>
            </div>
            <div className="gallery-grid">
              {["New spouting installation", "Roofline & fascia", "Downpipe installation", "Repair & replacement"].map((title, i) => (
                <div className="gallery-item" key={title}>
                  <div className={`photo-placeholder p${i+1}`}><span>PHOTO {String(i+1).padStart(2,"0")}</span></div>
                  <div className="gallery-caption"><strong>{title}</strong><span>Auckland</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="area-section" id="areas">
          <div className="container area-inner">
            <div>
              <div className="eyebrow light"><span></span> Where we work</div>
              <h2>Auckland<br/><em>and beyond.</em></h2>
            </div>
            <div className="area-list">
              {areas.map(a => <span key={a}><MapPin size={15}/>{a}</span>)}
              <p>Not sure if we cover your area? Get in touch and ask.</p>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-wrap">
            <div><div className="eyebrow"><span></span> Questions</div><h2>Good to know.</h2></div>
            <div className="faq">
              {[
                ["Do you provide free quotes?", "Yes. Send through your details and what you need done, and we can arrange a quote."],
                ["Do you do repairs as well as new spouting?", "Yes. We can help with leaks, damaged sections, brackets, downpipes and other guttering issues."],
                ["What areas do you cover?", "We service Auckland, including North Shore, Rodney and surrounding areas. Contact us if you are unsure."],
                ["Can you replace internal spouting with an external system?", "Yes. Internal-to-external gutter conversions are one of the services we can discuss for suitable properties."]
              ].map(([q,a], i) => (
                <div className="faq-item" key={q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown className={openFaq === i ? "rotated":""}/></button>
                  {openFaq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow light"><span></span> Get in touch</div>
              <h2>Let's sort your<br/><em>spouting.</em></h2>
              <p>Tell us what you need and we'll get back to you about the next step.</p>
              <div className="contact-details">
                <a href="tel:+64210000000"><Phone/> <span><small>Call or text</small>021 000 0000</span></a>
                <a href="mailto:hello@tuispouting.co.nz"><Mail/> <span><small>Email</small>hello@tuispouting.co.nz</span></a>
              </div>
              <div className="socials">
                <a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="Instagram"><Instagram/></a>
              </div>
            </div>
            <form className="contact-form" name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="quote"/>
              <p className="hidden"><label>Don't fill this out: <input name="bot-field"/></label></p>
              <label>Name<input required name="name" placeholder="Your name"/></label>
              <label>Phone<input required name="phone" placeholder="021 123 4567"/></label>
              <label>Email<input type="email" name="email" placeholder="you@example.com"/></label>
              <label>What do you need help with?<textarea name="message" rows="4" placeholder="New spouting, repair, downpipes..."></textarea></label>
              <button className="btn btn-primary" type="submit">Request a quote <ArrowRight size={18}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <Logo/>
          <p>© {new Date().getFullYear()} Tui Spouting. Auckland, New Zealand.</p>
          <div><a href="#services">Services</a><a href="#contact">Contact</a></div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);