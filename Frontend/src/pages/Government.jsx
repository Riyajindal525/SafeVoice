import { ExternalLink } from 'lucide-react'
import './Government.css'

const portals = [
  {
    title: 'National Commission for Women (NCW)',
    description: 'Official government body that investigates complaints of gender-based discrimination and violence against women.',
    website: 'https://ncw.gov.in',
    contact: 'ncw@nic.in',
    services: ['File complaints online', 'Legal information', 'Grievance redressal', 'Research & advocacy']
  },
  {
    title: 'Cyber Crime Portal',
    description: 'Report online abuse, cyberstalking, and digital harassment to central authorities.',
    website: 'https://cybercrime.gov.in',
    contact: '1930 (toll-free)',
    services: ['Report cyber crimes', 'Track complaints', 'Legal guidance', 'Evidence preservation']
  },
  {
    title: 'Police Emergency',
    description: 'Direct access to emergency police services for immediate assistance.',
    website: 'https://112.gov.in/',
    contact: '100',
    services: ['Emergency response', 'FIR filing', 'Immediate assistance', 'Crime reporting']
  },
  {
    title: 'Legal Services Authority',
    description: 'Provides free legal aid and assistance to women who cannot afford legal services.',
    website: 'https://nalsa.gov.in/',
    contact: 'District Bar Association',
    services: ['Free legal advice', 'Case representation', 'Legal documents', 'Court fees waiver']
  },
  {
    title: 'E-Courts Portal',
    description: 'Track your legal cases online and access court information across India.',
    website: 'https://ecourts.gov.in/ecourts_home/',
    contact: 'Court office',
    services: ['Case status tracking', 'Document filing', 'Court orders', 'Hearing schedules']
  },
  {
    title: 'Women Helpline',
    description: '24/7 toll-free helpline for women in distress providing support and guidance.',
    website: 'https://ncwwomenhelpline.ncw.gov.in/',
    contact: '1800-180-1111 (24/7)',
    services: ['Emergency support', 'Counseling', 'Resource information', 'Crisis intervention']
  }
]

const stepByStep = [
  {
    number: '1',
    title: 'Assess Your Situation',
    content: 'Determine which government body is appropriate for your complaint: Police for crimes, NCW for discrimination, Cyber Crime for online abuse.'
  },
  {
    number: '2',
    title: 'Gather Documentation',
    content: 'Collect evidence: photos, messages, witness names, medical reports, FIR copy if filed with police.'
  },
  {
    number: '3',
    title: 'File Your Complaint',
    content: 'Use online portals or visit in person. Get acknowledgment and complaint reference number. Keep copies for tracking.'
  },
  {
    number: '4',
    title: 'Track Progress',
    content: 'Use complaint numbers to track status on government portals. Follow up regularly via email or phone.'
  },
  {
    number: '5',
    title: 'Seek Legal Help',
    content: 'Contact legal aid for free assistance. A lawyer can help ensure your case is properly presented.'
  },
  {
    number: '6',
    title: 'Appeal if Needed',
    content: 'If unsatisfied with the outcome, you can appeal through proper legal channels or file with higher authorities.'
  }
]

export default function Government() {
  return (
    <div className="government">
      <div className="container">
        <div className="gov-header">
          <h1>Government Support & Official Portals</h1>
          <p>Direct access to official Indian government resources and portals designed to help and protect women.</p>
        </div>

        <div className="info-banner">
          <h3>Important to Know</h3>
          <p>SafeVoice helps you prepare and understand your options. Government agencies have the official authority to investigate and take action. We assist in connecting you to these resources.</p>
        </div>

        <div className="portals-section">
          <h2>Official Government Portals</h2>
          <div className="portals-grid">
            {portals.map((portal, index) => (
              <div key={index} className="portal-card">
                <div className="portal-header">
                  <h3>{portal.title}</h3>
                </div>
                <p className="portal-description">{portal.description}</p>
                <div className="portal-services">
                  <strong>Services:</strong>
                  <ul>
                    {portal.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="portal-contact">
                  <div className="contact-item">
                    <strong>Contact:</strong>
                    <p>{portal.contact}</p>
                  </div>
                  <a href={portal.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                    <ExternalLink size={14} /> Visit Portal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ncw-section">
          <h2>What is the National Commission for Women (NCW)?</h2>
          <div className="ncw-content">
            <div className="ncw-text">
              <p>The National Commission for Women is a statutory body constituted to investigate matters relating to women's rights and gender-based discrimination in India.</p>
              <h4>They Handle Cases Involving:</h4>
              <ul>
                <li>Gender discrimination and inequality</li>
                <li>Sexual harassment and assault</li>
                <li>Workplace harassment (POSH violations)</li>
                <li>Family law disputes</li>
                <li>Human trafficking</li>
                <li>Police negligence in handling women's cases</li>
                <li>Media misrepresentation of women</li>
              </ul>
              <h4>How to File a Complaint with NCW:</h4>
              <ol>
                <li>Visit www.ncw.gov.in</li>
                <li>Click on "File a Complaint"</li>
                <li>Fill the online form with details</li>
                <li>Attach supporting documents</li>
                <li>Submit and get reference number</li>
                <li>Track status online using reference number</li>
              </ol>
            </div>
            <div className="ncw-sidebar">
              <div className="info-box">
                <h4>Quick Facts</h4>
                <ul>
                  <li>FREE service</li>
                  <li>Available 24/7 for complaints</li>
                  <li>Confidential processing</li>
                  <li>No need for lawyer</li>
                  <li>Formal investigation</li>
                  <li>Recommendations to authorities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="process-section">
          <h2>Step-by-Step Process for Filing with Government</h2>
          <div className="steps-container">
            {stepByStep.map((step) => (
              <div key={step.number} className="step">
                <div className="step-circle">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rights-section">
          <h2>Your Rights During the Process</h2>
          <div className="rights-grid">
            <div className="right-box">
              <h4>Right to Confidentiality</h4>
              <p>Your identity can be protected during proceedings if needed. Anonymous complaints are accepted.</p>
            </div>
            <div className="right-box">
              <h4>Right to Free Legal Aid</h4>
              <p>You don't need to hire a lawyer. Free legal aid is available from government agencies.</p>
            </div>
            <div className="right-box">
              <h4>Right to Appeal</h4>
              <p>If unsatisfied with the outcome, you can appeal to higher authorities or courts.</p>
            </div>
            <div className="right-box">
              <h4>Right to Compensation</h4>
              <p>You can claim victim compensation from the state under Victim Compensation Schemes.</p>
            </div>
            <div className="right-box">
              <h4>Right to Speedy Justice</h4>
              <p>Cases involving women's safety have priority. Time limits are strict for investigations and trial.</p>
            </div>
            <div className="right-box">
              <h4>Right to Representation</h4>
              <p>You have the right to have someone (advocate, family member) represent you.</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do I need to be physically present to file a complaint?</h4>
              <p>Many portals now accept online complaints. However, for FIR with police, you may need to visit in person or can file through online portals in some states.</p>
            </div>
            <div className="faq-item">
              <h4>How long does it take for investigation?</h4>
              <p>For online crimes, investigation should start within 1 week. For other matters, NCW typically initiates investigation within 14 days.</p>
            </div>
            <div className="faq-item">
              <h4>Can I file multiple complaints?</h4>
              <p>Yes. You can file with police (FIR), NCW, and other agencies simultaneously. Each has different mandates.</p>
            </div>
            <div className="faq-item">
              <h4>What if my complaint is rejected?</h4>
              <p>You have the right to appeal. If police refuse FIR, you can file with higher authorities or approach courts through legal aid.</p>
            </div>
            <div className="faq-item">
              <h4>Is it too late to file if incident happened long ago?</h4>
              <p>Most cases have no time limit. Even if years have passed, you can file complaints through NCW or approach courts.</p>
            </div>
            <div className="faq-item">
              <h4>What happens after investigation?</h4>
              <p>If evidence is found, case goes to court for trial. NCW makes recommendations to authorities. You can monitor progress through case tracking.</p>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <h3>Important Disclaimer</h3>
          <p>This page provides information to help you access government resources. SafeVoice is not a government body and cannot guarantee investigation or action. Only official government agencies have the authority to investigate and take legal action.</p>
        </div>
      </div>
    </div>
  )
}
