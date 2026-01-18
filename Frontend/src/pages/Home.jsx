import { Link } from 'react-router-dom'
import { Heart, Shield, MessageCircle, Phone } from 'lucide-react'
import heroImage from "../assets/Hero-image.jpg";

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your voice matters. Your safety matters. </h1>
          <p className="hero-subtitle">
            A safe, supportive platform where women can find help, knowledge, and resources.
            {/* Your voice matters. Your safety matters. */}
          </p>
          <div className="hero-buttons">
            <Link to="/emergency" className="btn btn-error">
              <Phone size={20} /> Emergency Help
            </Link>
            <Link to="/file-complaint" className="btn btn-primary">
              <MessageCircle size={20} /> File a Complaint
            </Link>
            <Link to="/rights-hub" className="btn btn-secondary">
              <Shield size={20} /> Know Your Rights
            </Link>
          </div>
        </div>
        {/* <div className="hero-image">
  <img
    src={heroImage}
    alt="Women Safety Illustration"
    className="hero-img"
  />
</div> */}

      </section>

      <section className="features">
        <div className="container">
          <h2>How We Help</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚨</div>
              <h3>Emergency Support</h3>
              <p>Instant access to emergency helpline numbers and immediate assistance when you need it most.</p>
              <Link to="/emergency" className="feature-link">Learn More →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Anonymous Complaints</h3>
              <p>Report incidents safely and anonymously. Receive guidance on next steps and legal actions.</p>
              <Link to="/file-complaint" className="feature-link">File a Complaint →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3>Legal Rights Hub</h3>
              <p>Comprehensive information about your legal rights in simple, easy-to-understand language.</p>
              <Link to="/rights-hub" className="feature-link">Explore Rights →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>NGO Support</h3>
              <p>Connect with trusted NGOs and organizations that provide legal, emotional, and social support.</p>
              <Link to="/ngo" className="feature-link">Find NGOs →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏛️</div>
              <h3>Government Resources</h3>
              <p>Direct links to official government portals, NCW, and legal resources designed for women.</p>
              <Link to="/government" className="feature-link">Explore Resources →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety Assurance</h3>
              <p>Your data is secure, private, and protected. We prioritize your safety and confidentiality.</p>
              <Link to="/privacy" className="feature-link">Privacy Policy →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Commitment</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>🔒 Privacy First</h4>
              <p>Your data is yours. We never share or misuse your information.</p>
            </div>
            <div className="value-item">
              <h4>💚 Empathy & Support</h4>
              <p>Built with care for women who need help and guidance.</p>
            </div>
            <div className="value-item">
              <h4>⚡ Easy Access</h4>
              <p>Simple, intuitive interface that doesn't require technical knowledge.</p>
            </div>
            <div className="value-item">
              <h4>🌐 Community Driven</h4>
              <p>A student-led initiative focused on nation building and women empowerment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Need Immediate Help?</h2>
          <p>If you or someone you know is in danger, click below for emergency support.</p>
          <Link to="/emergency" className="btn btn-error btn-large">
            Get Emergency Help Now
          </Link>
        </div>
      </section>
    </div>
  )
}
