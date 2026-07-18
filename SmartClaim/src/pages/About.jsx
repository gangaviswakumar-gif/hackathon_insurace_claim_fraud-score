import Navbar from "../components/Navbar";
import { Shield, Brain, FileSearch, ShieldCheck } from "lucide-react";

function About({
  goToHome,
  goToFeatures,
  goToAbout,
  goToContact,
  goToLogin,
}) {
  const cardStyle = {
    background: "#1e293b",
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center",
    color: "white",
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
          paddingTop: "120px",
          maxWidth: "1100px",
          margin: "auto",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <Shield size={70} color="#3b82f6" />
          <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>
            About SmartClaim AI
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              lineHeight: "1.7",
            }}
          >
            SmartClaim AI is an intelligent insurance claim assistant that
            automates claim submission, damage assessment, fraud detection,
            and document verification using Artificial Intelligence.
          </p>
        </div>

        {/* Mission */}
        <div
          style={{
            background: "#1e293b",
            padding: "35px",
            borderRadius: "15px",
            marginBottom: "50px",
          }}
        >
          <h2 style={{ color: "#3b82f6" }}>🎯 Our Mission</h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Our mission is to simplify insurance claim processing by reducing
            paperwork, minimizing fraud, and providing faster claim approvals
            through AI-powered automation.
          </p>
        </div>

        {/* Technology Cards */}
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Technologies Used
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: "25px",
            marginBottom: "60px",
          }}
        >
          <div style={cardStyle}>
            <Brain size={45} color="#3b82f6" />
            <h3>Artificial Intelligence</h3>
            <p>Automates claim assessment and decision making.</p>
          </div>

          <div style={cardStyle}>
            <FileSearch size={45} color="#22c55e" />
            <h3>OCR</h3>
            <p>Extracts important information from bills and documents.</p>
          </div>

          <div style={cardStyle}>
            <ShieldCheck size={45} color="#f59e0b" />
            <h3>Fraud Detection</h3>
            <p>Identifies suspicious claims using intelligent models.</p>
          </div>

          <div style={cardStyle}>
            <Shield size={45} color="#8b5cf6" />
            <h3>Secure Platform</h3>
            <p>Ensures safe and reliable handling of user data.</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          style={{
            background: "#1e293b",
            padding: "35px",
            borderRadius: "15px",
            marginBottom: "50px",
          }}
        >
          <h2 style={{ color: "#3b82f6" }}>🛠 Tech Stack</h2>

          <ul
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "2",
            }}
          >
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Python (AI Models)</li>
            <li>Machine Learning</li>
            <li>OCR Technology</li>
            <li>Computer Vision</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            paddingBottom: "50px",
            color: "#94a3b8",
          }}
        >
          <h3>SmartClaim AI</h3>
          <p>Making Insurance Claims Faster, Smarter and More Secure.</p>
        </div>
      </div>
    </div>
  );
}

export default About;