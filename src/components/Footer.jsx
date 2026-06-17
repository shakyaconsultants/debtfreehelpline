import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import "./Footer.css";

const QUICK_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#how", label: "How It Works" },
  { href: "#solutions", label: "Debt Solutions" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const SOLUTION_LINKS = [
  "IVA — Individual Voluntary Arrangement",
  "Debt Management Programme",
  "DRO — Debt Relief Order",
  "Trust Deed (Scotland)",
  "Guidance on Bankruptcy",
  "Consolidation Loan Advice",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#top" className="footer__logo-row">
            <img src={logo} alt="Debt Free Helpline logo" />
            <span>
              <strong>Debt Free Helpline</strong>
              <small>Trusted UK Debt Help · Since 2013</small>
            </span>
          </a>
          <p>
            We support people and households throughout the UK in discovering a realistic,
            step-by-step way out of debt. Straightforward guidance, thoughtful support, and
            long-term financial peace of mind.
          </p>
          <div className="footer__contact">
            <a href="tel:01915004548">
              <FiPhone aria-hidden /> 0191 500 4548
            </a>
            <a href="mailto:info@debtfreehelpline.org.uk">
              <FiMail aria-hidden /> info@debtfreehelpline.org.uk
            </a>
            <span>
              <FiMapPin aria-hidden /> 13 Wilton Place, Basingstoke, Hampshire, RG21 7UD

            </span>
          </div>
          <div className="footer__social" aria-label="Social media">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Debt Relief Options</h4>
          <ul>
            {SOLUTION_LINKS.map((l) => (
              <li key={l}>
                <a href="#solutions">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Free Support &amp; Guidance</h4>
          <ul>
            <li><a href="https://www.stepchange.org" target="_blank" rel="noreferrer">StepChange Charity for Debt</a></li>
            <li><a href="https://www.nationaldebtline.org" target="_blank" rel="noreferrer">National Debtline Helpline</a></li>
            <li><a href="https://www.citizensadvice.org.uk" target="_blank" rel="noreferrer">Citizens Advice Bureau</a></li>
            <li><a href="https://www.moneyhelper.org.uk" target="_blank" rel="noreferrer">MoneyHelper — UK Government</a></li>
            <li><a href="https://www.gov.uk/options-for-paying-off-your-debts" target="_blank" rel="noreferrer">Gov.uk — Debt Repayment Options</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__legal">
          <h5>Important Notice</h5>
          <p>
            Debt Free Helpline offers complimentary, private debt guidance. We may connect clients
            with an authorised Insolvency Practitioner who charges for establishing and overseeing
            a formal solution such as an Individual Voluntary Arrangement (IVA). Every fee is
            explained in writing before you commit to anything.
          </p>
          <p>
            No-cost debt support is also offered by registered charities including StepChange,
            National Debtline and Citizens Advice. For further help with money management and free
            debt guidance, visit{" "}
            <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noreferrer">
              MoneyHelper
            </a>
            , an independent service created to assist people with their finances.
          </p>
          <p>
            Taking up a formal debt arrangement can affect your credit file and future borrowing.
            Whenever relevant, we will also talk through suitable alternatives such as a Debt
            Management Plan (DMP).
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} Debt Free Helpline Ltd. All rights reserved. Registered in
            England &amp; Wales. Registered Office: 13 Wilton Place, Basingstoke, Hampshire, RG21 7UD
.
          </p>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Complaints</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
