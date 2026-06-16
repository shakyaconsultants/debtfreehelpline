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
  "Individual Voluntary Arrangement (IVA)",
  "Debt Management Plan",
  "Debt Relief Order",
  "Scottish Trust Deed",
  "Bankruptcy Advice",
  "Loan Consolidation",
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
            We help individuals and families across the United Kingdom find a clear, achievable
            path out of debt. Honest advice, personal care, and lasting financial freedom.
          </p>
          <div className="footer__contact">
            <a href="tel:03330916630">
              <FiPhone aria-hidden /> 0333 091 6630
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
          <h4>Debt Solutions</h4>
          <ul>
            {SOLUTION_LINKS.map((l) => (
              <li key={l}>
                <a href="#solutions">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Free Help &amp; Resources</h4>
          <ul>
            <li><a href="https://www.stepchange.org" target="_blank" rel="noreferrer">StepChange Debt Charity</a></li>
            <li><a href="https://www.nationaldebtline.org" target="_blank" rel="noreferrer">National Debtline</a></li>
            <li><a href="https://www.citizensadvice.org.uk" target="_blank" rel="noreferrer">Citizens Advice</a></li>
            <li><a href="https://www.moneyhelper.org.uk" target="_blank" rel="noreferrer">MoneyHelper (HM Government)</a></li>
            <li><a href="https://www.gov.uk/options-for-paying-off-your-debts" target="_blank" rel="noreferrer">Gov.uk Debt Options</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__legal">
          <h5>Important Information</h5>
          <p>
            Debt Free Helpline provides free, confidential debt advice. We may refer
            clients to a licensed Insolvency Practitioner who will charge fees for setting up and
            managing a formal debt solution such as an Individual Voluntary Arrangement (IVA).
            All fees are clearly disclosed in writing before any agreement is entered into.
          </p>
          <p>
            Free debt advice is also available from registered charities such as StepChange,
            National Debtline and Citizens Advice. To find out more about managing your money
            and getting free debt advice, visit{" "}
            <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noreferrer">
              MoneyHelper
            </a>
            , an independent service set up to help people manage their money.
          </p>
          <p>
            Entering a formal debt solution may impact your credit rating and ability to obtain
            credit in the future. Where appropriate, suitable alternatives such as a Debt
            Management Plan (DMP) will always be discussed.
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
