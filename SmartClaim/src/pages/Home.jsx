import { Shield, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

function Home({
  goToHome,
  goToClaim,
  goToLogin,
  goToFeatures,
  goToAbout,
  goToContact,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* Navbar */}
      <Navbar
        goToHome={goToHome}
        goToLogin={goToLogin}
        goToFeatures={goToFeatures}
        goToAbout={goToAbout}
        goToContact={goToContact}
      />

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: "80px",
          paddingLeft: "40px",
          paddingRight: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <Shield size={70} color="#3b82f6" />

          <h1
            style={{
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            SmartClaim AI
          </h1>

          <h2
            style={{
              color: "#94a3b8",
              fontWeight: "400",
              marginBottom: "30px",
            }}
          >
            AI Powered Insurance Claim Assistant
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
              marginBottom: "40px",
              lineHeight: "1.6",
            }}
          >
            Upload documents, detect fraud, assess damages, and process
            insurance claims instantly.
          </p>

          <button
            onClick={goToClaim}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "18px 40px",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            File New Claim
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;