import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="contact" style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h2>Contact Us</h2>

      <div style={{ marginBottom: 40 }}>
        <h3>Contact Details</h3>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:theiventhiran@example.com">theiventhiran@example.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
        <p>
          <strong>Location:</strong> Tamil Nadu, India
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/TheivaGit" target="_blank" rel="noreferrer">
            github.com/TheivaGit
          </a>
        </p>
      </div>

      <div>
        <h3>Send us a Message</h3>
        {submitted ? (
          <div
            style={{
              padding: 15,
              backgroundColor: "#d4edda",
              color: "#155724",
              borderRadius: 5,
              textAlign: "center",
            }}
          >
            ✅ Thank you! Your message has been sent successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
                fontSize: 14,
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
                fontSize: 14,
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
                fontSize: 14,
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
                fontSize: 14,
                fontFamily: "Arial, sans-serif",
              }}
            />
            <button
              type="submit"
              style={{
                padding: 12,
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;