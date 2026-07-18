import { Shield } from "lucide-react";

function Navbar({
  goToHome = () => {},
  goToLogin = () => {},
  goToFeatures = () => {},
  goToAbout = () => {},
  goToContact = () => {},
}) {
  const navItemStyle = {
    cursor: "pointer",
    color: "#cbd5e1",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div
        onClick={goToHome}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "white",
          cursor: "pointer",
        }}
      >
        <Shield size={32} color="#3b82f6" />
        SmartClaim AI
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
          fontSize: "17px",
        }}
      >
        <span
          style={navItemStyle}
          onClick={goToHome}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
        >
          Home
        </span>

        <span
          style={navItemStyle}
          onClick={goToFeatures}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
        >
          Features
        </span>

        <span
          style={navItemStyle}
          onClick={goToAbout}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
        >
          About
        </span>

        <span
          style={navItemStyle}
          onClick={goToContact}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
        >
          Contact
        </span>

        <button
          onClick={goToLogin}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
          onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;