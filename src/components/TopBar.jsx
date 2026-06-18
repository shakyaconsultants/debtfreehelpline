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
            <FiMapPin aria-hidden /> 13 Wilton Place, Basingstoke, Hampshire, RG21 7UD

          </span>
        </div>
        <div className="topbar__right">
          <a href="mailto:info@debtfreehelpline.org.uk" className="topbar__item topbar__email topbar__hide-sm">
            <FiMail aria-hidden />
            info@debtfreehelpline.org.uk
          </a>
          <a href="tel:01915004548" className="topbar__item topbar__phone">
            <FiPhone aria-hidden /> 0191 500 4548
          </a>
        </div>
      </div>
    </div>
  );
}
