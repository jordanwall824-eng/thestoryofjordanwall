import { useState } from "react";
import "./contact.css";
import instagramLogo from "./instagram.png";
import linkedinLogo from "./linkedin.png";

// Google Apps Script Web App endpoint
const SHEET_ENDPOINT =
  "https://script.google.com/a/macros/aggies.ncat.edu/s/AKfycbxq049NKPvtB7yM9lzguEwqceh5jEqdzOfD49WPjgVEDPbWKmyLI1kAitz033BYqU_r/exec";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors", // avoid CORS preflight / restrictions
        headers: {
          // use a "simple" content-type so browser is happy
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // We can't read the response in no-cors mode, but if no error
      // was thrown, we assume success.
      setFormData({ name: "", email: "", message: "" });
      setShowModal(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Something went wrong while sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contactPage">
        <div className="contactContent">
          {/* Contact Form */}
          <div className="contactFormWrapper">
            <h2 className="contactMe">Let's Connect!</h2>

            <p className="contactIntro">
              Feel free to reach out to me using the form below or through my
              social media profiles. I’ve attached my Instagram and LinkedIn for
              easy access.
            </p>

            <form className="contactForm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting && <span className="spinner" />}
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {submitError && <p className="submitError">{submitError}</p>}
            </form>
          </div>

          {/* Social Boxes */}
          <div className="socialGrid">
            {/* Instagram */}
            <a
              className="socialBox"
              href="https://www.instagram.com/jordanwall.2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="Instagram" />
              <span>Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              className="socialBox"
              href="https://linkedin.com/in/jordanwall8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Thank-you Modal */}
      {showModal && (
        <div className="modalOverlay" onClick={() => setShowModal(false)}>
          <div
            className="modalCard"
            onClick={(e) => e.stopPropagation()} // prevent overlay click
          >
            <p>
              Thank you for taking the time to contact me, I will reach out to
              you soon.
            </p>
            <p className="modalSignature">– Jordan Wall</p>
            <button
              className="modalButton"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;


