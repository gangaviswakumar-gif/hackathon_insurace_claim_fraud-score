function Login({ goToHome, goToRegister }) {
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
          width: "420px",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 25px rgba(0,0,0,.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          🛡 SmartClaim AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Sign in to continue
        </p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ marginBottom: "20px" }}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />

        <button
          style={{ marginTop: "30px" }}
          onClick={goToHome}
        >
          Sign In
        </button>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#94a3b8",
          }}
        >
          Don't have an account?{" "}
          <span
  style={{
    color: "#3b82f6",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  }}
  onClick={() => {
    console.log("Sign Up clicked");
    goToRegister();
  }}
>
  Sign Up
</span>
        </p>
      </div>
    </div>
  );
}

export default Login;