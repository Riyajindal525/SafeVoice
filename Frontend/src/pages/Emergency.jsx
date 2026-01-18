import { Phone, AlertCircle, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import './Emergency.css'

const emergencyNumbers = [
  {
    name: 'Police Emergency',
    number: '100',
    description: 'Immediate police assistance for any emergency',
    color: '#ef4444'
  },
  {
    name: 'Women Helpline',
    number: '1800-180-1111',
    description: 'National helpline for women in distress (24/7, toll-free)',
    color: '#d946a6'
  },
  {
    name: 'Cyber Crime Helpline',
    number: '1930',
    description: 'Report cyber harassment and online abuse',
    color: '#8b5cf6'
  },
  {
    name: 'Domestic Violence',
    number: '100',
    description: 'Police assistance for domestic violence cases',
    color: '#f59e0b'
  },
  {
    name: 'AASRA (Suicide)',
    number: '9820466726',
    description: 'Emotional support and suicide prevention',
    color: '#10b981'
  },
  {
    name: 'iCall (Mental Health)',
    number: '9152987821',
    description: '24/7 mental health and emotional support',
    color: '#06b6d4'
  }
]

export default function Emergency() {
  const [copiedNumber, setCopiedNumber] = useState(null)

  const copyToClipboard = (number) => {
    navigator.clipboard.writeText(number)
    setCopiedNumber(number)
    setTimeout(() => setCopiedNumber(null), 2000)
  }

  return (
    <div className="emergency">
      <div className="warning-banner">
        <AlertCircle size={32} />
        <div>
          <h2>If you are in immediate danger:</h2>
          <p>Call 100 (Police) or 1800-180-1111 (Women Helpline) immediately. This is a safe platform for support and information.</p>
        </div>
      </div>

      <div className="container">
        <div className="emergency-header">
          <h1>Emergency Help & Helpline Numbers</h1>
          <p>Quick access to emergency services and support lines. Available 24/7 for women in crisis.</p>
        </div>

        <div className="emergency-grid">
          {emergencyNumbers.map((service, index) => (
            <div key={index} className="emergency-card" style={{ borderColor: service.color }}>
              <div className="card-header">
                <h3>{service.name}</h3>
                <Phone size={20} color={service.color} />
              </div>
              <p className="card-description">{service.description}</p>
              <div className="number-section">
                <a href={`tel:${service.number.replace(/\D/g, '')}`} className="btn btn-primary btn-full emergency-btn">
                  Call {service.number}
                </a>
                <button
                  className={`btn btn-outline btn-copy ${copiedNumber === service.number ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(service.number)}
                >
                  {copiedNumber === service.number ? (
                    <>
                      <Check size={16} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="tips-section">
          <h2>What to Do in a Crisis</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-number">1</div>
              <h4>Stay Safe First</h4>
              <p>If you're in immediate danger, leave the location and go to a safe place (police station, hospital, friend's house).</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">2</div>
              <h4>Call for Help</h4>
              <p>Use any of the emergency numbers provided above. Be clear about your situation and location.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">3</div>
              <h4>Document Evidence</h4>
              <p>If possible, take photos/videos of injuries or damage. Keep a record of incidents (dates, times, witnesses).</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">4</div>
              <h4>Seek Medical Help</h4>
              <p>Visit a hospital for medical examination and documentation. This creates legal records for future proceedings.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">5</div>
              <h4>File a Complaint</h4>
              <p>Contact police to file an FIR. You can also use our platform to prepare a detailed complaint.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">6</div>
              <h4>Reach Out for Support</h4>
              <p>Contact NGOs or counselors. Emotional support is important during and after a crisis.</p>
            </div>
          </div>
        </div>

        <div className="resources-section">
          <h2>Additional Resources</h2>
          <div className="resources-list">
            <div className="resource-item">
              <h4>National Commission for Women (NCW)</h4>
              <p>Email: <a href="mailto:ncw@nic.in">ncw@nic.in</a></p>
              <p>Website: <a href="https://ncw.gov.in" target="_blank" rel="noopener noreferrer">www.ncw.gov.in</a></p>
            </div>
            <div className="resource-item">
              <h4>Cyber Crime Portal</h4>
              <p>Report online abuse and harassment: <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></p>
            </div>
            <div className="resource-item">
              <h4>Legal Aid Services</h4>
              <p>Free legal aid is available for women who cannot afford lawyers. Contact your district bar association.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
