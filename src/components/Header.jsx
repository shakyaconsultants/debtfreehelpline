import { useEffect, useState } from "react";
import { FiMenu, FiX, FiPhone, FiArrowRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import "./Header.css";

const NAV = [
  { href: "#about",     label: "About" },
  { href: "#how",       label: "How It Works" },
  { href: "#solutions", label: "Debt Solutions" },
  { href: "#why",       label: "Why Us" },
  { href: "#faq",       label: "FAQs" },
  { href: "#contact",   label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">

        <a href="#top" className="header__brand" aria-label="Debt Free Helpline home">
          <img src={logo} alt="Debt Free Helpline" className="header__logo" />
        </a>

        <nav className={`header__nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          <a href="tel:01915004548" className="header__phone">
            <span className="header__phone-icon" aria-hidden>
              <FiPhone />
            </span>
            <span className="header__phone-text">
              <small>Free helpline</small>
              <strong>0191 500 4548</strong>
            </span>
          </a>
          <a href="#contact-form" className="btn btn--primary header__btn">
            Ask for help
            <FiArrowRight aria-hidden />
          </a>
          <button
            className="header__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>
    </header>
  );
}