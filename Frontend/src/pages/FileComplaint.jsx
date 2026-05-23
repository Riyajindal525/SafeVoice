import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './FileComplaint.css';

const issueTypes = [
  'Sexual Harassment',
  'Domestic Violence',
  'Stalking',
  'Cyber Abuse',
  'Financial Fraud',
  'Workplace Harassment',
  'Child Marriage',
  'Dowry Harassment',
  'Human Trafficking',
  'Anonymous cyber complaint',
  'Other'
];

const complaintPortals = {
  'Sexual Harassment': {
    url: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx',
    guide: [
      'Mention whether incident happened at workplace, home, or public place',
      'Include date, time and details of accused',
      'Attach messages, emails, CCTV or witness details if available'
    ]
  },
  'Domestic Violence': {
    url: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx',
    guide: [
      'Explain relationship with accused (husband, in-laws, etc.)',
      'Mention type of abuse: physical, mental, or economic',
      'Medical reports or neighbour/family witnesses help'
    ]
  },
  'Stalking': {
    url: 'https://cybercrime.gov.in/Webform/Index.aspx',
    guide: [
      'Mention how long the stalking has been happening',
      'Include both online and offline incidents if applicable',
      'Screenshots, call logs or messages are strong evidence'
    ]
  },
  'Cyber Abuse': {
    url: 'https://cybercrime.gov.in/Webform/Crime_ReportAnonymously.aspx',
    guide: [
      'Take screenshots of abusive messages, posts or profiles',
      'Mention platform name (Instagram, WhatsApp, Facebook, etc.)',
      'Do not delete or block evidence before reporting'
    ]
  },
  'Anonymous cyber complaint': {
    url: 'https://cybercrime.gov.in/Webform/Crime_ReportAnonymously.aspx',
    guide: [
      'No personal identity is required',
      'Provide exact URLs, usernames, phone numbers or IDs',
      'Upload screenshots or screen recordings if possible'
    ]
  },
  'Financial Fraud': {
    url: 'https://cybercrime.gov.in/Webform/Index.aspx',
    guide: [
      'Report as soon as possible (within 24 hours is best)',
      'Keep transaction ID, bank name and amount ready',
      'Mention fraud method: UPI scam, OTP fraud, fake call, fake website'
    ]
  },
  'Workplace Harassment': {
    url: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx',
    guide: [
      'Mention company or organization name clearly',
      'Describe behaviour and how frequently it occurred',
      'Emails, HR complaints or colleague witnesses strengthen the case'
    ]
  },
  'Child Marriage': {
    url: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx',
    guide: [
      'Mention age of the child clearly',
      'Provide date and place where marriage is planned or occurred',
      'School record or ID proof helps'
    ]
  },
  'Dowry Harassment': {
    url: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx',
    guide: [
      'Mention dowry demand details clearly',
      'Include names of people involved',
      'Messages, call recordings or witnesses strengthen the case'
    ]
  },
  'Human Trafficking': {
    url: 'https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx',
    guide: [
      'Mention location and people involved if known',
      'Explain how victim was lured, forced, or transported',
      'Any travel agent, employer or contact detail helps'
    ]
  },
  'Other': {
    url: 'https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx',
    guide: [
      'Explain the issue in detail',
      'Mention why other categories do not fit',
      'Add any supporting evidence you have'
    ]
  }
};

export default function FileComplaint() {
  const [issueType, setIssueType] = useState('');
  const [loading, setLoading] = useState(false);

  const selectedPortal = complaintPortals[issueType];

  // Analytics handler (anonymous) using fetch
  const handleAnalytics = async () => {
    if (!issueType) {
      alert('Please select an issue type first.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://safevoice-d56i.onrender.com/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: issueType })
      });

      if (!res.ok) throw new Error('Network response was not ok');

      alert('Thanks! Your category has been counted anonymously.');
    } catch (err) {
      console.error(err);
      alert('Something went wrong while submitting analytics.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-complaint">
      <div className="container">
        {/* Header */}
        <div className="complaint-header">
          <h1>File a Complaint</h1>
          <p>
            Select your issue below. You will be guided to the official
            government portal to file your complaint securely.
          </p>
        </div>

        {/* Form */}
        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="issueType">Type of Issue *</label>
            <select
              id="issueType"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="issue-select"
            >
              <option value="">Select issue type</option>
              {issueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {selectedPortal && (
            <div className="portal-guidance">
              <a
                href={selectedPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portal-btn"
              >
                Proceed to Official Government Form <ExternalLink size={18} />
              </a>

              <button
                onClick={handleAnalytics}
                className="portal-btn analytics-btn"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Count My Category (Optional)'}
              </button>

              <div className="guidance-section">
                <h3>Before You File - Important Tips:</h3>
                <ul className="guidance-list">
                  {selectedPortal.guide.map((item, index) => (
                    <li key={index}>
                      <span className="list-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="info-section">
          <div className="info-card safety">
            <div className="card-icon">🔒</div>
            <h3>Your Safety is Our Priority</h3>
            <p>
              We do not store or submit your complaint data. You remain in full control of your information.
            </p>
          </div>

          <div className="info-card process">
            <div className="card-icon">📋</div>
            <h3>What Happens Next?</h3>
            <p>
              You will fill the complaint directly on the government portal. Keep evidence ready before submission.
            </p>
          </div>

          <div className="info-card legal">
            <div className="card-icon">⚖️</div>
            <h3>Legal Accuracy</h3>
            <p>
              Guidance follows official Indian legal and reporting practices used by NCW and Cyber Crime portals.
            </p>
          </div>

          <div className="info-card help">
            <div className="card-icon">❓</div>
            <h3>Need Immediate Help?</h3>
            <p>
              Call <strong>181</strong> (Women Helpline) or <strong>112</strong> for emergencies. You are not alone.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I file anonymously?</h4>
              <p>Yes! Select "Anonymous cyber complaint" for cyber crimes. Most government portals support anonymous submissions.</p>
            </div>
            <div className="faq-item">
              <h4>What evidence should I attach?</h4>
              <p>Screenshots, emails, messages, call logs, medical reports, or witness details strengthen your case significantly.</p>
            </div>
            <div className="faq-item">
              <h4>How long does investigation take?</h4>
              <p>Cyber crime investigation starts within 1 week. Other complaints take 2-4 weeks for preliminary assessment.</p>
            </div>
            <div className="faq-item">
              <h4>Can I file from anywhere?</h4>
              <p>Yes! These are online portals. You can file from home, office, or anywhere with internet access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
