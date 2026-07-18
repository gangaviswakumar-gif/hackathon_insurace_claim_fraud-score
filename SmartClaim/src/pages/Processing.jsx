import { useEffect } from "react";
import { Loader2 } from "lucide-react";

function Processing({ goToDashboard }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (goToDashboard) {
        goToDashboard();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [goToDashboard]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          width: "700px",
          textAlign: "center",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
        }}
      >
        <Loader2
          size={70}
          className="spin"
          color="#3b82f6"
        />

        <h1 style={{ marginTop: "20px" }}>
          🛡 SmartClaim AI
        </h1>

        <h2 style={{ color: "#3b82f6" }}>
          Processing Your Claim...
        </h2>

        <div
          style={{
            textAlign: "left",
            marginTop: "30px",
            lineHeight: "35px",
            fontSize: "16px",
          }}
        >
          ✅ Reading Customer Information<br />
          ✅ Verifying Policy Details<br />
          ✅ Analyzing Uploaded Images<br />
          ✅ Extracting Repair Bill<br />
          ✅ Running Fraud Detection<br />
          ✅ Calculating Estimated Claim
        </div>

        <progress
          value="80"
          max="100"
          style={{
            width: "100%",
            marginTop: "30px",
            height: "18px",
          }}
        />

        <p
          style={{
            marginTop: "15px",
            color: "#cbd5e1",
          }}
        >
          Please wait while our AI analyzes your claim...
        </p>
      </div>
    </div>
  );
}

export default Processing;