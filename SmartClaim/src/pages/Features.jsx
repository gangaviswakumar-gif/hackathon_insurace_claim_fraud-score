import { Brain, ShieldCheck, FileSearch, Clock } from "lucide-react";

function Features({ goToHome }) {
  const features = [
    {
      icon: <Brain size={40} color="#3b82f6" />,
      title: "AI Damage Assessment",
      description:
        "Analyze uploaded accident images using AI to estimate repair costs.",
    },
    {
      icon: <ShieldCheck size={40} color="#22c55e" />,
      title: "Fraud Detection",
      description:
        "Identify suspicious claims using intelligent fraud detection models.",
    },
    {
      icon: <FileSearch size={40} color="#f59e0b" />,
      title: "Document Verification",
      description:
        "Automatically verify bills, invoices, and policy documents.",
    },
    {
      icon: <Clock size={40} color="#a855f7" />,
      title: "Instant Claim Processing",
      description:
        "Reduce claim approval time from days to just a few minutes.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "120px 60px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "15px",
        }}
      >
        Features
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "60px",
        }}
      >
        Everything SmartClaim AI offers
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            {feature.icon}

            <h2>{feature.title}</h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.6",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <button
          onClick={goToHome}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Features;