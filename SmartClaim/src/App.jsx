import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClaimForm from "./pages/ClaimForm";
import Processing from "./pages/Processing";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {/* Login */}
      {page === "login" && (
        <Login
          goToHome={() => setPage("home")}
          goToRegister={() => setPage("register")}
        />
      )}

      {/* Register */}
      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
        />
      )}

      {/* Home */}
      {page === "home" && (
        <Home
          goToHome={() => setPage("home")}
          goToClaim={() => setPage("claim")}
          goToLogin={() => setPage("login")}
          goToFeatures={() => setPage("features")}
          goToAbout={() => setPage("about")}
          goToContact={() => setPage("contact")}
        />
      )}

      {/* Features */}
      {page === "features" && (
        <Features
          goToHome={() => setPage("home")}
          goToFeatures={() => setPage("features")}
          goToAbout={() => setPage("about")}
          goToContact={() => setPage("contact")}
          goToLogin={() => setPage("login")}
        />
      )}

      {/* About */}
      {page === "about" && (
        <About
          goToHome={() => setPage("home")}
          goToFeatures={() => setPage("features")}
          goToAbout={() => setPage("about")}
          goToContact={() => setPage("contact")}
          goToLogin={() => setPage("login")}
        />
      )}

      {/* Contact */}
      {page === "contact" && (
        <Contact
          goToHome={() => setPage("home")}
          goToFeatures={() => setPage("features")}
          goToAbout={() => setPage("about")}
          goToContact={() => setPage("contact")}
          goToLogin={() => setPage("login")}
        />
      )}

      {/* Claim Form */}
      {page === "claim" && (
        <ClaimForm
          submitClaim={() => setPage("processing")}
        />
      )}

      {/* Processing */}
      {page === "processing" && (
        <Processing
          goToDashboard={() => setPage("dashboard")}
        />
      )}

      {/* Dashboard */}
      {page === "dashboard" && (
        <Dashboard />
      )}
    </>
  );
}

export default App;