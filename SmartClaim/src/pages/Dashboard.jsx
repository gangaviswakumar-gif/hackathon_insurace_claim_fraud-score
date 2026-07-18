function Dashboard() {
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
        }}
      >
        <h1>🛡 SmartClaim AI Report</h1>

        <h2 style={{ color: "#22c55e" }}>
          Claim Approved
        </h2>

        <p>Estimated Repair Cost: ₹58,700</p>

        <p>Fraud Risk: Low (12%)</p>

        <p>AI Confidence: 98.7%</p>
      </div>
    </div>
  );
}

export default Dashboard;