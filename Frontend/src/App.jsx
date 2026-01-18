import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Emergency from './pages/Emergency'
import FileComplaint from './pages/FileComplaint'
import RightsHub from './pages/RightsHub'
import NGO from './pages/NGO'
import Government from './pages/Government'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/file-complaint" element={<FileComplaint />} />
            <Route path="/rights-hub" element={<RightsHub />} />
            <Route path="/ngo" element={<NGO />} />
            <Route path="/government" element={<Government />} />
             <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; 2026 SafeVoice - A Platform for Women's Safety & Empowerment</p>
            <p className="footer-tagline">Built with compassion. Designed with purpose. Dedicated to justice.</p>
            <p>Made by Riya Jindal &hearts;</p>
            <div className="footer-help">
              <p>In Crisis? Call <strong>1800-180-1111</strong> (Women Helpline - 24/7)</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
