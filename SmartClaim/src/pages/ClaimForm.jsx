import UploadCard from "../components/UploadCard";

function ClaimForm({ submitClaim }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted");

    if (submitClaim) {
      submitClaim();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "900px",
          maxWidth: "95%",
          background: "#1e293b",
          borderRadius: "15px",
          padding: "30px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>🛡 SmartClaim</h1>

        <p style={{ textAlign: "center", color: "#cbd5e1" }}>
          Submit Insurance Claim
        </p>

        <form onSubmit={handleSubmit}>
          <hr />

          {/* Customer Information */}
          <h2>👤 Customer Information</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label>Customer Name</label>
              <input
                type="text"
                placeholder="Enter customer name"
                required
              />
            </div>

            <div>
              <label>Customer ID</label>
              <input
                type="text"
                placeholder="Enter customer ID"
                required
              />
            </div>
          </div>

          <div>
            <label>Policy Number</label>
            <input
              type="text"
              placeholder="Enter policy number"
              required
            />
          </div>

          <hr />

          {/* Accident Details */}
          <h2>📍 Accident Details</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label>Location of Accident</label>
              <input
                type="text"
                placeholder="Enter accident location"
                required
              />
            </div>

            <div>
              <label>Date & Time</label>
              <input
                type="datetime-local"
                required
              />
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Describe what happened..."
              required
            />
          </div>

          <hr />

          {/* Claim Details */}
          <h2>💰 Claim Details</h2>

          <label>Claim Amount (₹)</label>

          <input
            type="number"
            placeholder="Enter claim amount"
            min="1"
            required
          />

          <hr />

          {/* Supporting Documents */}
          <h2>📎 Supporting Documents</h2>

          <UploadCard
            title="📷 Damage Images"
            accept="image/*"
          />

          <UploadCard
            title="📄 Repair Bill"
            accept=".pdf,image/*"
          />

          <UploadCard
            title="🎥 Accident Video"
            accept="video/*"
          />

          <button
            type="submit"
            style={{
              marginTop: "25px",
            }}
          >
            🚀 Submit Claim
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClaimForm;