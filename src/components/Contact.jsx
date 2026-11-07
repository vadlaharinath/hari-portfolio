import { memo, useState } from "react";
import { FaCopy, FaCheck, FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";
import contactData from "../data/contactData";
import "../styles/Contact.css";

function Contact() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getHref = (item) => {
    if (item.link) return item.link;
    if (item.title === "Email") return `mailto:${item.value}`;
    if (item.title === "Mobile") return `tel:${item.value.replace(/\s+/g, "")}`;
    return "#";
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side: Pitch & Availability */}
        <div className="contact-left">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="contact-heading">
            Let's Build Something <br />
            <span className="contact-gradient">Extraordinary</span>
          </h2>

          <p className="contact-description">
            I'm actively seeking Full Stack Developer opportunities, full-time engineering
            roles, and high-impact freelance projects. Whether you need an end-to-end web application built,
            have a freelance contract, or want to discuss a software engineering role, feel free to reach out anytime!
          </p>

          <div className="status-badge-contact">
            <span className="live-dot" />
            <div className="status-info">
              <span className="status-title">Current Status</span>
              <span className="status-sub">Available for Full-Time & Freelance Projects</span>
            </div>
          </div>

          <div className="email-highlight-box">
            <div className="email-box-icon">
              <FaPaperPlane />
            </div>
            <div className="email-box-content">
              <span className="email-label">Direct Email</span>
              <a href="mailto:vadlaharinath22@gmail.com" className="email-link">
                vadlaharinath22@gmail.com
              </a>
            </div>
            <button
              className="copy-btn"
              onClick={(e) => handleCopy("email-box", "vadlaharinath22@gmail.com", e)}
              title="Copy Email"
            >
              {copiedId === "email-box" ? <FaCheck className="copied" /> : <FaCopy />}
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Social & Connect Cards */}
        <div className="contact-right">
          <div className="contact-cards-grid">
            {contactData.map((item) => {
              const Icon = item.icon;
              const href = getHref(item);
              const isCopyable = item.title === "Email" || item.title === "Mobile";

              return (
                <a
                  key={item.id}
                  href={href}
                  target={item.link ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon-wrapper">
                    <Icon />
                  </div>

                  <div className="contact-details">
                    <div className="contact-header-row">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <FaExternalLinkAlt className="card-ext-icon" />
                      ) : (
                        isCopyable && (
                          <button
                            className="card-copy-btn"
                            onClick={(e) => handleCopy(item.id, item.value, e)}
                            title="Copy to clipboard"
                          >
                            {copiedId === item.id ? (
                              <FaCheck className="copied-icon" />
                            ) : (
                              <FaCopy />
                            )}
                          </button>
                        )
                      )}
                    </div>
                    <p>{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="portfolio-footer">
        <p className="footer-copyright">
          © {new Date().getFullYear()} <span className="footer-name">Vadla Harinath</span>. Crafted with modern Full Stack architecture, Three.js 3D & interactive UI.
        </p>
      </footer>
    </section>
  );
}

export default memo(Contact);
