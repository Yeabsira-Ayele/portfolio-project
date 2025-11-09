import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message, please try again!",
      });
    }
  };

  return (
    <div id="contactme" className="contact-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>

        <input
          required
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />

        <input
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />

        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Comment..."
          rows={15}
        ></textarea>

        <div className="btn-send">
          <button className="fi-btn" type="submit" disabled={formStatus.submitting}>
            Send
          </button>

          <button
            className="se-btn"
            type="button"
            onClick={handleSubmit}
            disabled={formStatus.submitting}
          >
            Resend
          </button>
        </div>

        {formStatus.message && (
          <p
            style={{
              color: formStatus.success ? "green" : "red",
              marginTop: "10px",
            }}
          >
            {formStatus.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
