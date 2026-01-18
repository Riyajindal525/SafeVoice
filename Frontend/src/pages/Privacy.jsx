import './Privacy.css'

export default function Privacy() {
  return (
    <div className="privacy">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy & Disclaimer</h1>
          <p>Your privacy and safety are our top priorities. Read how we handle your data.</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Privacy Assurance</h2>
            <p>
              We are committed to protecting your privacy. SafeVoice is built with privacy-first principles.
              Your data is secure, encrypted, and never shared without your explicit consent.
            </p>
            <div className="highlight-box">
              <strong>Your data belongs to you.</strong> We are stewards, not owners.
            </div>
          </section>

          <section className="privacy-section">
            <h2>What Information Do We Collect?</h2>
            <div className="info-list">
              <div className="info-item">
                <h4>For Anonymous Complaints:</h4>
                <ul>
                  <li>Issue type and description</li>
                  <li>Location/city</li>
                  <li>No personal identification</li>
                </ul>
              </div>
              <div className="info-item">
                <h4>For Non-Anonymous Complaints (Optional):</h4>
                <ul>
                  <li>Email address (only if you choose to share)</li>
                  <li>All information from anonymous complaints</li>
                </ul>
              </div>
              <div className="info-item">
                <h4>Technical Information:</h4>
                <ul>
                  <li>Browser type and version</li>
                  <li>Device type (mobile/desktop)</li>
                  <li>General location (country/state level only)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>How We Protect Your Data</h2>
            <div className="protection-cards">
              <div className="card">
                <h4>🔐 Encryption</h4>
                <p>All data is encrypted in transit and at rest using industry-standard protocols (HTTPS, TLS).</p>
              </div>
              <div className="card">
                <h4>🔒 Secure Storage</h4>
                <p>Data is stored on secure servers with restricted access, regular backups, and disaster recovery.</p>
              </div>
              <div className="card">
                <h4>🛡️ Anonymity Protection</h4>
                <p>Anonymous complaints are truly anonymous. No IP logging or device tracking for anonymous users.</p>
              </div>
              <div className="card">
                <h4>🚫 No Third-Party Sharing</h4>
                <p>We never share your data with third parties without explicit permission, except with legal requirements.</p>
              </div>
              <div className="card">
                <h4>✓ Regular Audits</h4>
                <p>Regular security audits and penetration testing ensure our systems remain secure.</p>
              </div>
              <div className="card">
                <h4>👨‍⚖️ Legal Compliance</h4>
                <p>We comply with Indian data protection laws and international security standards.</p>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <ul className="usage-list">
              <li>To generate formatted complaints for you to file with authorities</li>
              <li>To improve our platform and user experience</li>
              <li>To send you resources and information you've requested</li>
              <li>To comply with legal obligations when required by law enforcement</li>
              <li>To prevent abuse or harmful activities on the platform</li>
            </ul>
            <p className="important-note">
              <strong>We will NEVER:</strong> Sell your data, share with advertisers, send unwanted marketing,
              make your complaint public, or use your information for any purpose beyond what you've agreed to.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <div className="rights-list">
              <div className="right-item">
                <h4>Right to Access</h4>
                <p>You can request a copy of all information we have stored about you.</p>
              </div>
              <div className="right-item">
                <h4>Right to Rectification</h4>
                <p>You can correct any incorrect information we have about you.</p>
              </div>
              <div className="right-item">
                <h4>Right to Deletion</h4>
                <p>You can request permanent deletion of your data (except legally required records).</p>
              </div>
              <div className="right-item">
                <h4>Right to Complaint</h4>
                <p>If you believe your privacy has been violated, you can file a complaint with us or regulatory authorities.</p>
              </div>
            </div>
          </section>

          <section className="privacy-section important">
            <h2>⚠️ Important Disclaimer</h2>
            <p>
              SafeVoice is an informational and assistance platform. Please understand what we are and what we are NOT:
            </p>
            <div className="disclaimer-boxes">
              <div className="disclaimer-box not">
                <h4>We are NOT:</h4>
                <ul>
                  <li>A replacement for police or legal authorities</li>
                  <li>A legal advice service (we provide information only)</li>
                  <li>A government agency with investigative powers</li>
                  <li>A mental health service (though we provide resources)</li>
                  <li>Your lawyer (information ≠ legal representation)</li>
                </ul>
              </div>
              <div className="disclaimer-box are">
                <h4>We ARE:</h4>
                <ul>
                  <li>An information resource hub</li>
                  <li>A complaint preparation assistant</li>
                  <li>A directory of official resources and organizations</li>
                  <li>A bridge to official authorities and support</li>
                  <li>A supporter of women's rights and safety</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>Legal Information Disclaimer</h2>
            <p>
              All legal information provided on this platform is for educational and awareness purposes only.
              It is not a substitute for professional legal advice. While we strive for accuracy, laws change frequently.
            </p>
            <p>
              <strong>Always consult with a qualified lawyer</strong> for specific legal advice about your situation.
              Free legal aid is available through government services and NGOs.
            </p>
          </section>

          <section className="privacy-section">
            <h2>When We May Disclose Information</h2>
            <p>We may disclose your information in these circumstances:</p>
            <ul className="disclosure-list">
              <li>When legally required by court order or law enforcement</li>
              <li>To protect the safety and rights of individuals</li>
              <li>To prevent fraud or criminal activity</li>
              <li>With your explicit written consent</li>
              <li>To comply with government regulations</li>
            </ul>
            <p className="sub-text">
              We will inform you of any legal disclosure unless forbidden by law.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Retention</h2>
            <ul className="retention-list">
              <li><strong>Anonymous complaints:</strong> Retained for 2 years for record-keeping and improvement</li>
              <li><strong>Non-anonymous complaints:</strong> Retained as long as needed to assist you, then securely deleted</li>
              <li><strong>Technical logs:</strong> Retained for 90 days then deleted</li>
              <li><strong>You can request deletion:</strong> Contact us anytime to delete your data</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Third-Party Links</h2>
            <p>
              Our platform links to government portals, NGO websites, and other external resources.
              We are not responsible for their privacy practices. Please review their privacy policies separately.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Security Limitations</h2>
            <p>
              While we implement robust security measures, no system is 100% secure.
              We cannot guarantee absolute security against all possible attacks. However, we are committed to
              addressing any security issues immediately if discovered.
            </p>
            <p>
              <strong>If you discover a security vulnerability, please report it confidentially to:</strong>
              <br/>security@safevoice.org
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>For privacy concerns or to exercise your rights:</p>
            <div className="contact-box">
              <p>📧 Email: <strong>privacy@safevoice.org</strong></p>
              <p>☎️ Phone: <strong>1800-180-1111</strong> (Women Helpline)</p>
              <p>📮 Mail: SafeVoice Platform, India</p>
            </div>
          </section>

          <section className="privacy-section">
            <h2>Policy Updates</h2>
            <p>
              We may update this privacy policy from time to time. The date of last update will be displayed above.
              Continued use of the platform constitutes your acceptance of the updated policy.
            </p>
            <p className="policy-date">Last Updated: January 2026</p>
          </section>

          <div className="final-message">
            <h3>Our Promise to You</h3>
            <p>
              We promise to always put your privacy and safety first. We will never exploit your trust or misuse your data.
              You are not a data point to us - you are a person deserving of dignity, respect, and protection.
            </p>
            <p className="signature">— The SafeVoice Team</p>
          </div>
        </div>
      </div>
    </div>
  )
}
