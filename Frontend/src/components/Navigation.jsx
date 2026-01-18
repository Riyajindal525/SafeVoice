import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogIn, LogOut, UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation(); // 🔑 rerender on route change

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔑 Check auth state whenever route changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    setIsAuth(!!token);
    setUser(savedUser ? JSON.parse(savedUser) : null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
    navigate("/login");
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/emergency", label: "Emergency Help" },
    { path: "/file-complaint", label: "File Complaint" },
    { path: "/rights-hub", label: "Rights Hub" },
    { path: "/ngo", label: "NGOs" },
    { path: "/government", label: "Government Support" },
    { path: "/about", label: "About" },
    { path: "/privacy", label: "Privacy" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SafeVoice
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* 🔐 AUTH LINKS */}
          {!isAuth ? (
            <>
              <li className="nav-item auth">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item auth">
                <Link to="/signup" className="nav-link">
                   Signup
                </Link>
              </li>
            </>
          ) : (
            <>
              <li  className="nav-item nav-link"><p>Hi, {user?.name}!</p></li>
              <li className="nav-item auth">
                <p className="nav-link" onClick={handleLogout}>
                  Logout
                </p>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}