import { useState } from "react";
import { contactData } from "../model/contactModel";
import { contactController } from "../controllers/contactController";

const initialForm = {
  fullName: "",
  agencyName: "",
  email: "",
  phone: "",
  supportNeeded: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = contactController.validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      contactController.focusFirstError(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const result = await contactController.submitForm(formData);

      setStatus(result.message);
      setFormData(initialForm);
    } catch {
      setStatus(
        "We could not submit your request. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-layout">

          {/* LEFT SIDE */}
          <div className="contact-info reveal-up">
            <span className="section-label">Let's connect</span>

            <h2>Ready to Automate Your Agency's Growth</h2>

            <p>
              Whether you need dedicated quote preparation for your Farmers
              Insurance agency, specialized real estate backend support, or
              comprehensive data entry — our team is ready to step in.
            </p>

            <p>
              Reach out today and let's build a custom operational plan for
              your business.
            </p>

            {/* CONTACT DETAILS */}
            <div className="contact-detail-list">
              {contactData.details.map((detail) => (
                <div className="contact-detail" key={detail.label}>
                  <span className="contact-detail-icon">
                    {detail.icon}
                  </span>

                  <div>
                    <small>{detail.label}</small>

                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      <strong>{detail.value}</strong>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-links">
              <h3>Connect with us</h3>

              <div className="social-buttons">
                <a
                  href="https://linkedin.com/company/tritoxtechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin-btn"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.facebook.com/tritoxtechnologiespvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn facebook-btn"
                >
                  Facebook
                </a>
                 <a
                  href="https://www.youtube.com/channel/UCSNWER1_9vWJGz3UqTH4-0g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn facebook-btn"
                >
                  YouTube
                </a>
                 <a
                  href="https://www.instagram.com/tritoxtechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn facebook-btn"
                >
                  Instagram
                  
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="form-card reveal-right">
            <div className="form-header">
              <span className="section-label">
                Request a consultation
              </span>

              <h2>Tell us how we can support your agency.</h2>

              <p>
                Complete the form and our team will contact you.
              </p>
            </div>

            {status && (
              <div className="form-status" role="status">
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">

                <FormField
                  label="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  placeholder="Your full name"
                />

                <FormField
                  label="Agency name"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  error={errors.agencyName}
                  placeholder="Your agency name"
                />

                <FormField
                  label="Business email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="name@agency.com"
                />

                <FormField
                  label="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+1 (000) 000-0000"
                />

                {/* SUPPORT SELECT */}
                <div className="form-field full-field">
                  <label htmlFor="supportNeeded">
                    What support do you need? <span>*</span>
                  </label>

                  <select
                    id="supportNeeded"
                    name="supportNeeded"
                    value={formData.supportNeeded}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.supportNeeded)}
                  >
                    <option value="">Select a service</option>

                    <option value="quote-preparation">
                      Comprehensive quote preparation
                    </option>

                    <option value="crm-management">
                      Agency management and CRM
                    </option>

                    <option value="daily-operations">
                      Day-to-day operational support
                    </option>

                    <option value="multiple-services">
                      Multiple services
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>

                  {errors.supportNeeded && (
                    <small className="field-error">
                      {errors.supportNeeded}
                    </small>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="form-field full-field">
                  <label htmlFor="message">
                    Tell us about your agency <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What tasks or workflows would you like help with?"
                    aria-invalid={Boolean(errors.message)}
                  />

                  {errors.message && (
                    <small className="field-error">
                      {errors.message}
                    </small>
                  )}
                </div>
              </div>

              {/* FORM FOOTER */}
              <div className="form-footer">
                <p>
                  Your information is treated as confidential and used only
                  to respond to your enquiry.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send My Request"}

                  {!isSubmitting && <span>→</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* REASSURANCE SECTION */}
      <section className="reassurance-section">
        <div className="container">
          <div className="reassurance-card">

            <div className="reassurance-icon">
              ✓
            </div>

            <div>
              <h2>
                {contactData.reassurance?.title ||
                  "Your business is in safe hands"}
              </h2>

              <p>
                {contactData.reassurance?.description ||
                  "We provide reliable and confidential operational support designed to help your business grow."}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}


/* FORM FIELD COMPONENT */
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
      />

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}
    </div>
  );
}