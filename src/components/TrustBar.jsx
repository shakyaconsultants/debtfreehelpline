import { FiShield, FiAward, FiLock, FiUsers, FiStar } from "react-icons/fi";
import "./TrustBar.css";

const ITEMS = [
  { icon: FiShield, label: "FCA-aware service" },
  { icon: FiAward, label: "Licensed Insolvency Practitioners" },
  { icon: FiLock, label: "100% confidential" },
  { icon: FiUsers, label: "12,000+ helped since 2013" },
  { icon: FiStar, label: "4.9★ Trustpilot rated" },
];

export default function TrustBar() {
  return (
    <section className="trustbar" aria-label="Accreditations and trust">
      <div className="container trustbar__inner">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div className="trustbar__item" key={label}>
            <Icon aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
