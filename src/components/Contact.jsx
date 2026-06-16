import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck, FiLoader } from "react-icons/fi";
import "./Contact.css";

// ─── EmailJS credentials ─────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail / Outlook etc.) → copy the Service ID below
// 3. Create an Email Template using the variable names in this form → copy Template ID
// 4. Go to Account → API Keys → copy your Public Key
const EMAILJS_SERVICE_ID  = "service_n0871bb";
const EMAILJS_TEMPLATE_ID = "template_qun92kg";
const EMAILJS_PUBLIC_KEY  = "fcz52YxDXsbAe9-7K";
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef  = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow">Get In Touch</span>
          <h2>Speak with a UK debt specialist today.</h2>
          <p>
            Take the first step towards a debt-free future. Contact us today for a free, no-obligation
            consultation. Our friendly team will listen carefully, assess your situation, and
            recommend the best course of action for you.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__detail-icon" aria-hidden>
                <FiMapPin />
              </span>
              <div>
                <h4>Visit Our Office</h4>
                <p>13 Wilton Place, Basingstoke, Hampshire, RG21 7UD</p>
              </div>
            </li>
            <li>
              <span className="contact__detail-icon" aria-hidden>
                <FiPhone />
              </span>
              <div>
                <h4>Free Advice Line</h4>
                <p>
                  <a href="tel:03330916630">0333 091 6630</a>
                </p>
              </div>
            </li>
            <li>
              <span className="contact__detail-icon" aria-hidden>
                <FiMail />
              </span>
              <div>
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:info@debtfreehelpline.org.uk">
                    info@debtfreehelpline.org.uk
                  </a>
                </p>
              </div>
            </li>
            <li>
              <span className="contact__detail-icon" aria-hidden>
                <FiClock />
              </span>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  Mon – Fri: 9:00am – 7:00pm
                  <br />
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {status === "success" ? (
            <div className="contact__success" role="status">
              <span className="contact__success-icon" aria-hidden>
                <FiCheck />
              </span>
              <h3>Thank you — message received.</h3>
              <p>
                A member of our friendly UK team will be in touch within one working day. If your
                situation is urgent, please call us on{" "}
                <a href="tel:03330916630">0333 091 6630</a>.
              </p>
            </div>
          ) : (
            <form id="contact-form" ref={formRef} className="contact__form" onSubmit={onSubmit}>
              <h3>Request a free callback</h3>
              <p>Fill in the form and we will call you at a time that suits you.</p>

              {status === "error" && (
                <div className="contact__error-banner">
                  Something went wrong. Please try again or call us on{" "}
                  <a href="tel:03330916630">0333 091 6630</a>.
                </div>
              )}

              {/* Full Name */}
              <label>
                <span>Full Name</span>
                <input name="full_name" type="text" placeholder="Your full name" required />
              </label>

              {/* Mobile Number with UK code */}
              <label>
                <span>Mobile Number</span>
                <div className="contact__phone-row">
                  <span className="contact__phone-code">🇬🇧 +44</span>
                  <input name="mobile" type="tel" placeholder="7XXX XXXXXX" required />
                </div>
              </label>

              {/* Email */}
              <label>
                <span>Email Address</span>
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>

              {/* Total outstanding debts */}
              <label>
                <span>Total Outstanding Debts</span>
                <div className="contact__select-wrap">
                  <select name="total_debt" defaultValue="">
                    <option value="" disabled>Select amount</option>
                    <option>Under £5,000</option>
                    <option>£5,000 – £10,000</option>
                    <option>£10,000 – £20,000</option>
                    <option>£20,000 – £50,000</option>
                    <option>Over £50,000</option>
                  </select>
                </div>
              </label>

              {/* No of creditors + Homeowner/tenant side by side */}
              <div className="contact__row">
                <label>
                  <span>Number of Creditors</span>
                  <div className="contact__select-wrap">
                    <select name="num_creditors" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6 – 10</option>
                      <option>More than 10</option>
                    </select>
                  </div>
                </label>
                <label>
                  <span>Homeowner or Tenant?</span>
                  <div className="contact__select-wrap">
                    <select name="property_status" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>Homeowner</option>
                      <option>Tenant / Renting</option>
                      <option>Living with family</option>
                      <option>Other</option>
                    </select>
                  </div>
                </label>
              </div>

              <label className="contact__check">
                <input type="checkbox" required />
                <span>
                  I agree to be contacted by Debt Free Helpline and have read the{" "}
                  <a href="#footer">privacy policy</a>.
                </span>
              </label>

              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <><FiLoader className="spin" aria-hidden /> Sending…</>
                ) : (
                  <><FiSend aria-hidden /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
