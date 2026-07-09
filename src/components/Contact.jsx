import "../styles/Contact.css";
import contactData from "../data/contactData";
import { memo } from "react";

function Contact() {

  return (

    <section className="contact-section" id="contact">

      {/* LEFT */}

      <div className="contact-left">

        <span className="contact-tag">
          CONTACT
        </span>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <p>

          I'm currently looking for Full Stack Developer opportunities.
          Whether you have an internship, full-time role, freelance
          project or just want to connect, I'd love to hear from you.

        </p>

        <div className="status">

          <div className="status-dot"></div>

          <span className="status-text">
            Available for Work
          </span>

        </div>

      </div>

      {/* RIGHT */}

      <div className="contact-right">

        {

          contactData.map((item)=>{

            const Icon = item.icon;

            return(

              <a

                key={item.id}

                href={item.link}

                target="_blank"

                rel="noopener noreferrer"

                className="contact-card"

              >

                <div className="contact-icon">

                  <Icon/>

                </div>

                <div className="contact-details">

                  <h4>

                    {item.title}

                  </h4>

                  <p>

                    {item.value}

                  </p>

                </div>

              </a>

            )

          })

        }

      </div>

    </section>

  );

}

export default memo(Contact);