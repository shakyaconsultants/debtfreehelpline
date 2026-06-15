import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <span className="topbar__item">
            <FiClock aria-hidden /> Mon–Fri 9am – 7pm 
          </span>
          <span className="topbar__item topbar__hide-md">
            <FiMapPin aria-hidden /> 21 Garlick Hill, London EC4V 2AU
          </span>
        </div>
        <div className="topbar__right">
          <a href="mailto:info@debtresolutionfederation.org.uk" className="topbar__item">
            <FiMail aria-hidden />debthelp@debtresolutionfederation.org.uk,  info@debtresolutionfederation.org.uk
          </a>
          <a href="tel:03330916630" className="topbar__item topbar__phone">
            <FiPhone aria-hidden /> 0333 091 6630
          </a>
        </div>
      </div>
    </div>
  );
}
