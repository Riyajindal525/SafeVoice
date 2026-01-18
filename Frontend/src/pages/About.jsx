import { Heart, Shield, Users, Zap } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-hero">
          <h1>About SafeVoice</h1>
          <p>Empowering women with knowledge, resources, and support.</p>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                SafeVoice is a comprehensive digital platform built with the mission to help women feel safe, supported, and informed.
                We believe that every woman deserves access to knowledge about her rights, immediate support when needed, and pathways to justice.
              </p>
              <p>
                Our platform bridges the gap between awareness and action by providing:
              </p>
              <ul>
                <li>Immediate access to emergency helplines and support</li>
                <li>Safe, anonymous complaint filing assistance</li>
                <li>Comprehensive knowledge about legal rights</li>
                <li>Direct connections to government resources</li>
                <li>Directory of trusted NGOs and organizations</li>
              </ul>
            </div>
            <div className="mission-values">
              <div className="value">
                <Heart size={32} />
                <h4>Empathy</h4>
                <p>We understand trauma and approach every interaction with compassion.</p>
              </div>
              <div className="value">
                <Shield size={32} />
                <h4>Privacy</h4>
                <p>Your data is sacred. We protect your identity and information fiercely.</p>
              </div>
              <div className="value">
                <Zap size={32} />
                <h4>Accessibility</h4>
                <p>Simple interface requiring no technical knowledge. Available to all.</p>
              </div>
              <div className="value">
                <Users size={32} />
                <h4>Community</h4>
                <p>We connect you with support networks and organizations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="who-section">
          <h2>Who We Are</h2>
          <p>SafeVoice is a student-led initiative focused on nation-building and social impact. We are developers, designers, and advocates who believe in the power of technology to create positive change.</p>
          <p>Founded on the principles of empathy and justice, we work tirelessly to ensure that no woman is left without support, resources, or hope.</p>
        </div>

        <div className="features-section">
          <h2>What Makes Us Different</h2>
          <div className="features-list">
            <div className="feature">
              <h4>🔒 Privacy-First Design</h4>
              <p>Anonymous reporting options. Your identity is protected. No unnecessary data collection.</p>
            </div>
            <div className="feature">
              <h4>⚖️ Legal Accuracy</h4>
              <p>All information is based on current Indian laws and legal frameworks. Complaint formats align with government standards.</p>
            </div>
            <div className="feature">
              <h4>🌐 Comprehensive Resources</h4>
              <p>From emergency numbers to legal rights, government portals to NGOs - everything in one place.</p>
            </div>
            <div className="feature">
              <h4>💬 Non-Judgmental Support</h4>
              <p>We listen without judgment. Your voice matters, and your experience is valid.</p>
            </div>
            <div className="feature">
              <h4>🚀 Easy to Use</h4>
              <p>No technical knowledge required. Intuitive design accessible on mobile, tablet, and desktop.</p>
            </div>
            <div className="feature">
              <h4>🤝 Human-Centered</h4>
              <p>Built with input from survivors, lawyers, and organizations working on women's safety.</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Resources Compiled</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Confidential Processing</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Helpline Access</div>
            </div>
            <div className="stat">
              <div className="stat-number">Pan-India</div>
              <div className="stat-label">Support Network</div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Principles</h2>
          <div className="principles">
            <div className="principle">
              <h4>Respect & Dignity</h4>
              <p>Every woman is treated with respect and dignity. No judgment. No discrimination.</p>
            </div>
            <div className="principle">
              <h4>Justice & Empowerment</h4>
              <p>We empower women to take action and seek justice. Knowledge is power.</p>
            </div>
            <div className="principle">
              <h4>Accessibility</h4>
              <p>Our platform is free and accessible to all women, regardless of education, language, or socioeconomic status.</p>
            </div>
            <div className="principle">
              <h4>Accountability</h4>
              <p>We hold ourselves accountable for providing accurate, helpful, and ethical service.</p>
            </div>
            <div className="principle">
              <h4>Collaboration</h4>
              <p>We work with governments, NGOs, legal experts, and communities to create lasting change.</p>
            </div>
            <div className="principle">
              <h4>Continuous Improvement</h4>
              <p>We listen to feedback and continuously improve our services to serve you better.</p>
            </div>
          </div>
        </div>

        <div className="vision-section">
          <h2>Our Vision</h2>
          <p>
            A world where every woman has access to knowledge about her rights, immediate support when facing danger,
            and clear pathways to justice. A future where women are safe, heard, and empowered to shape their own destinies.
          </p>
        </div>

        {/* <div className="contact-section">
          <h2>Get in Touch</h2>
          <p>Have feedback? Want to partner with us? Reach out!</p>
          <div className="contact-info">
            <p>Email: <strong>support@safevoice.org</strong></p>
            <p>Emergency: <strong>1800-180-1111</strong></p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
