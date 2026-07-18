function Register({ goToLogin }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          🛡 SmartClaim AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "25px",
          }}
        >
          Create Your Account
        </p>

        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" placeholder="example@email.com" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <button
          style={{ marginTop: "25px" }}
          onClick={goToLogin}
        >
          Create Account
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?
          <span
            style={{
              color: "#3b82f6",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={goToLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;