import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgbjbko"); // ← deine echte ID
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowConfirmation(true);
      const timer = setTimeout(() => {
        setShowConfirmation(false);
        state.reset(); // Formularstatus zurücksetzen
      }, 4000); // 4 Sekunden anzeigen

      return () => clearTimeout(timer); // Aufräumen
    }
  }, [state.succeeded]);

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Form</h2>

      {showConfirmation ? (
        <p className="contact-success">
          Message sent successfully.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name" className="contact-label">
            Name:
            <input id="name" type="text" name="name" className="contact-input" required />
          </label>
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email" className="contact-label">
            Email:
            <input id="email" type="email" name="email" className="contact-input" required />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="contact-label">
            Message:
            <textarea id="message" name="message" rows="5" className="contact-textarea" required />
          </label>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting} className="contact-button">
            Send
          </button>
        </form>
      )}
    </section>
  );
}
