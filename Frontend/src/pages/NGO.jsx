import './NGO.css'
import NGOAnalytics from './NGOAnalytics';

const ngos = [
  {
    name: 'All India Women\'s Association',
    city: 'Pan-India',
    services: ['Legal aid', 'Counseling', 'Shelter', 'Training programs'],
    contact: 'Multiple offices across India',
    description: 'One of the oldest women\'s organizations providing comprehensive support.'
  },
  {
    name: 'Jagori',
    city: 'Delhi & NCR',
    services: ['Crisis intervention', 'Legal assistance', 'Counseling', 'Safety planning'],
    contact: 'www.jagori.org',
    description: 'Specializes in violence against women prevention and response.'
  },
  {
    name: 'Sakhi',
    city: 'Delhi',
    services: ['Shelter', 'Legal support', 'Counseling', 'Community programs'],
    contact: '011-4141-6060',
    description: 'Women\'s resource center and shelter for survivors of domestic violence.'
  },
  {
    name: 'SNEHA',
    city: 'Mumbai',
    services: ['Telephonic support', 'Community programs', 'Legal aid', 'Rehabilitation'],
    contact: '9152987821 (iCall)',
    description: 'Works against domestic violence and supports survivors.'
  },
  {
    name: 'Astitva',
    city: 'Pune',
    services: ['Legal consultation', 'Counseling', 'Shelter', 'Training'],
    contact: 'Local office: 020-2441-2200',
    description: 'Supports women facing violence and discrimination.'
  },
  {
    name: 'Udyam',
    city: 'Bangalore',
    services: ['Career support', 'Skill development', 'Legal aid', 'Counseling'],
    contact: 'www.udyam-india.org',
    description: 'Empowers women through education and employment opportunities.'
  },
  {
    name: 'CREA',
    city: 'Pan-India',
    services: ['Rights awareness', 'Legal support', 'Training', 'Research'],
    contact: 'www.creaworld.org',
    description: 'Promotes human rights and sexuality-based justice.'
  },
  {
    name: 'Help A Child',
    city: 'Multiple Cities',
    services: ['Child welfare', 'Anti-trafficking', 'Community support', 'Legal aid'],
    contact: 'Various cities',
    description: 'Works to protect and support vulnerable children and women.'
  }
]

export default function NGO() {
  return (
    <div className="ngo">
      <div className="container">
        <div className="ngo-header">
          <h1>NGO & Support Organizations</h1>
          <p>Connect with trusted NGOs and organizations that provide legal, emotional, and social support to women in need.</p>
        </div>

        <div className="ngo-info">
          <div className="info-card">
            <h3>Why Contact an NGO?</h3>
            <p>NGOs provide holistic support including legal assistance, emotional counseling, safe shelter, and community resources. They complement government services.</p>
          </div>
          <div className="info-card">
            <h3>How to Find Local NGOs?</h3>
            <p>Search online for "[your city] + women's organization" or contact your district bar association, police station, or hospital for referrals.</p>
          </div>
          <div className="info-card">
            <h3>What Services Do They Offer?</h3>
            <p>Legal consultation, emotional support, safe shelter, safety planning, financial assistance, skill training, and community resources.</p>
          </div>
        </div>

        <div className="ngos-section">
          <h2>Prominent Organizations</h2>
          <div className="ngos-grid">
            {ngos.map((ngo, index) => (
              <div key={index} className="ngo-card">
                <div className="ngo-header-card">
                  <h3>{ngo.name}</h3>
                  <span className="ngo-city">{ngo.city}</span>
                </div>
                <p className="ngo-description">{ngo.description}</p>
                <div className="ngo-services">
                  <strong>Services:</strong>
                  <div className="services-list">
                    {ngo.services.map((service, idx) => (
                      <span key={idx} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>
                <div className="ngo-contact">
                  <strong>Contact:</strong>
                  <p>{ngo.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="how-to-section">
          <h2>How to Approach an NGO</h2>
          <div className="steps">
            <div className="step-item">
              <div className="step-num">1</div>
              <div className="step-content">
                <h4>Identify Your Need</h4>
                <p>Are you looking for legal help, shelter, counseling, or community support?</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">2</div>
              <div className="step-content">
                <h4>Find Relevant Organizations</h4>
                <p>Search for NGOs specializing in your specific issue (domestic violence, sexual harassment, etc.)</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">3</div>
              <div className="step-content">
                <h4>Make First Contact</h4>
                <p>Call, email, or visit. Your initial consultation is usually free and confidential.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">4</div>
              <div className="step-content">
                <h4>Discuss Your Situation</h4>
                <p>Share as much or as little as you're comfortable with. They understand trauma and confidentiality.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">5</div>
              <div className="step-content">
                <h4>Plan Next Steps</h4>
                <p>Together, you'll create a plan of action that works for your specific situation.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">6</div>
              <div className="step-content">
                <h4>Ongoing Support</h4>
                <p>NGOs provide consistent support throughout your journey - legal, emotional, and practical.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="types-section">
          <h2>Types of NGOs & Services</h2>
          <div className="types-grid">
            <div className="type-card">
              <h4>Legal NGOs</h4>
              <p>Provide free legal consultation, case representation, and help with filing complaints. Many have retired judges and advocates.</p>
            </div>
            <div className="type-card">
              <h4>Shelter Homes</h4>
              <p>Safe spaces for women and children fleeing violence. Provide accommodation, counseling, and help with next steps.</p>
            </div>
            <div className="type-card">
              <h4>Counseling Centers</h4>
              <p>Offer emotional support, trauma counseling, and mental health services. Professional therapists guide the healing process.</p>
            </div>
            <div className="type-card">
              <h4>Rights & Advocacy</h4>
              <p>Educate on rights, conduct awareness campaigns, and advocate for policy changes to protect women.</p>
            </div>
            <div className="type-card">
              <h4>Skill & Empowerment</h4>
              <p>Provide training, education, and employment support to help women become economically independent.</p>
            </div>
            <div className="type-card">
              <h4>Anti-Trafficking</h4>
              <p>Work to prevent human trafficking, rescue survivors, and provide rehabilitation and reintegration support.</p>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2>Benefits of Working with NGOs</h2>
          <div className="benefits">
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <p><strong>Free Services:</strong> Most NGOs provide services at no cost or nominal charges.</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <p><strong>Confidentiality:</strong> Your information is kept strictly confidential.</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <p><strong>Holistic Support:</strong> Not just legal, but emotional and social support too.</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <p><strong>Community Connection:</strong> Access to community resources and support networks.</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <p><strong>Expert Guidance:</strong> Trained professionals who understand trauma and women's issues.</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <p><strong>24/7 Support:</strong> Many have helplines available round the clock for emergencies.</p>
            </div>
          </div>
        </div>

        <div className="find-local">
          <h2>Finding Local NGOs in Your City</h2>
          <div className="find-methods">
            <div className="method">
              <h4>Online Search</h4>
              <p>Search "[Your City] + women's NGO" or "[Your City] + women's helpline" on Google.</p>
            </div>
            <div className="method">
              <h4>Police Station</h4>
              <p>Visit or call your local police station. They have lists of registered NGOs.</p>
            </div>
            <div className="method">
              <h4>Hospital</h4>
              <p>Ask at the nearest hospital, especially at women's health centers. They have referral lists.</p>
            </div>
            <div className="method">
              <h4>Bar Association</h4>
              <p>Contact your district bar association. They maintain lists of legal aid organizations.</p>
            </div>
            <div className="method">
              <h4>Helplines</h4>
              <p>Call 1800-180-1111 (Women Helpline). They can refer you to local organizations.</p>
            </div>
            <div className="method">
              <h4>Community Centers</h4>
              <p>Local women's centers, community halls, and libraries have information about NGOs.</p>
            </div>
          </div>
        </div>
        </div>


        

  {/* Analytics Graph */}
  <div className="ngo-analytics-section">
    
    <NGOAnalytics />
  </div>
</div>
    
  )
}
