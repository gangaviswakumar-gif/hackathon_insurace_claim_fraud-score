function UploadCard({ title, accept }) {
  return (
    <div
      style={{
        border: "2px dashed #3b82f6",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center",
        background: "#0f172a",
        marginBottom: "20px",
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Drag & Drop files here
      </p>

      <input
        type="file"
        accept={accept}
        style={{ marginBottom: "15px" }}
      />

      <br />

      <button
        type="button"
        style={{
          width: "200px",
          marginTop: "10px",
        }}
      >
        Browse Files
      </button>
    </div>
  );
}

export default UploadCard;