import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

function Contact({
  goToHome,
  goToFeatures,
  goToAbout,
  goToContact,
  goToLogin,
}) {
  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      <Navbar
        goToHome={goToHome}
        goToFeatures={goToFeatures}
        goToAbout={goToAbout}
        goToContact={goToContact}
        goToLogin={goToLogin}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          paddingTop: "120px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "50px",
          }}
        >
          We'd love to hear from you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* Left Side */}
          <div>
            <div style={cardStyle}>
              <Mail color="#3b82f6" />
              <div>
                <h3>Email</h3>
                <p>smartclaimai@gmail.com</p>
              </div>
            </div>

            <div style={cardStyle}>
              <Phone color="#22c55e" />
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div style={cardStyle}>
              <MapPin color="#f59e0b" />
              <div>
                <h3>Location</h3>
                <p>Amrita Vishwa Vidyapeetham, Amritapuri</p>
              </div>
            </div>

            <div style={cardStyle}>
              <Globe color="#06b6d4" />
              <div>
                <h3>Website</h3>
                <p>www.smartclaim.ai</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h2>Send a Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={inputStyle}
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "15px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;