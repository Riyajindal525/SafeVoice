import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './RightsHub.css'

const rightsCategories = [
  {
    title: 'Fundamental Rights',
    icon: '⚖️',
    rights: [
      {
        heading: 'Right to Equality',
        content: 'Articles 14-18 of the Constitution guarantee equality before law, prohibition of discrimination, and equal opportunities.'
      },
      {
        heading: 'Right to Freedom',
        content: 'Freedom of speech, expression, assembly, association, and movement. This includes freedom to practice any religion.'
      },
      {
        heading: 'Right to Constitutional Remedies',
        content: 'You can approach courts if your rights are violated. Writs like habeas corpus can be filed for immediate relief.'
      }
    ]
  },
  {
    title: 'Safety & Protection Laws',
    icon: '🛡️',
    rights: [
      {
        heading: 'Protection of Women from Domestic Violence Act, 2005',
        content: 'Provides protection orders, residence orders, and monetary relief for women in domestic violence situations.'
      },
      {
        heading: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
        content: 'Every workplace must have an Internal Complaints Committee (ICC). Harassment complaints must be investigated within 90 days.'
      },
      {
        heading: 'Indecent Representation of Women Act, 1986',
        content: 'Makes it illegal to depict women in vulgar or indecent manner in advertisements, publications, or any form of media.'
      },
      {
        heading: 'Dowry Prohibition Act, 1961',
        content: 'Dowry is illegal. Both giving and taking dowry is punishable by imprisonment up to 5 years and fine.'
      }
    ]
  },
  {
    title: 'Workplace Rights',
    icon: '💼',
    rights: [
      {
        heading: 'Equal Remuneration Act, 1976',
        content: 'Women must receive equal pay for equal work. Employers cannot discriminate based on gender in wages.'
      },
      {
        heading: 'Maternity Benefit Act, 1961',
        content: 'Women are entitled to 26 weeks paid maternity leave. Medical and cash benefits are provided during maternity.'
      },
      {
        heading: 'Sexual Harassment & POSH Committee',
        content: 'Mandatory complaints committee in organizations with 10+ employees. Internal redressal mechanism must exist.'
      },
      {
        heading: 'Right to Work with Dignity',
        content: 'Every woman has the right to work in a safe environment free from harassment, discrimination, or abuse.'
      }
    ]
  },
  {
    title: 'Marriage & Family Rights',
    icon: '👨‍👩‍👧',
    rights: [
      {
        heading: 'Prohibition of Child Marriage Act, 2006',
        content: 'Child marriage (before 18) is illegal. Exceptions allowed only for girls 16+ with parental/court consent.'
      },
      {
        heading: 'Maintenance Rights (CrPC Section 125)',
        content: 'Wives and daughters can claim maintenance from husband/father. Applicable to both Hindu and Muslim law.'
      },
      {
        heading: 'Succession and Inheritance Rights',
        content: 'Women have equal succession rights in property, ancestral property, and family wealth in most states.'
      },
      {
        heading: 'Divorce Rights',
        content: 'Women can file for divorce on grounds of cruelty, adultery, desertion, and obtain alimony and custody.'
      }
    ]
  },
  {
    title: 'Cyber & Digital Safety Rights',
    icon: '🔐',
    rights: [
      {
        heading: 'Information Technology Act, 2000',
        content: 'Cyberstalking, online harassment, and sharing intimate photos without consent are punishable by imprisonment.'
      },
      {
        heading: 'Right to Report Cyber Abuse',
        content: 'Report at cybercrime.gov.in or call 1930. Online harassment is a cognizable offense.'
      },
      {
        heading: 'Protection Against Non-Consensual Intimate Images',
        content: 'Sharing intimate photos/videos without consent is illegal and can lead to imprisonment up to 3 years.'
      },
      {
        heading: 'Right to Privacy Online',
        content: 'Your digital data and privacy are protected. Unauthorized access to accounts/messages is illegal.'
      }
    ]
  },
  {
    title: 'Emergency & Legal Rights',
    icon: '🚨',
    rights: [
      {
        heading: 'Zero FIR',
        content: 'You can file an FIR at any police station, even outside your jurisdiction. Police cannot refuse to file FIR.'
      },
      {
        heading: 'Right to Legal Aid',
        content: 'Free legal aid is available if you cannot afford a lawyer. Contact legal aid centers in your district.'
      },
      {
        heading: 'Victim Compensation',
        content: 'States must provide compensation to victims of crime. Relief is available through Victim Compensation Schemes.'
      },
      {
        heading: 'Right to File Anonymous Complaint',
        content: 'You can file complaints anonymously. Identity protection can be maintained if needed during proceedings.'
      }
    ]
  }
]

function AccordionItem({ category, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-icon">{category.icon}</span>
        <span className="accordion-title">{category.title}</span>
        <ChevronDown className={`chevron ${isOpen ? 'open' : ''}`} size={20} />
      </button>
      {isOpen && (
        <div className="accordion-content">
          {category.rights.map((right, idx) => (
            <div key={idx} className="right-item">
              <h4>{right.heading}</h4>
              <p>{right.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function RightsHub() {
  return (
    <div className="rights-hub">
      <div className="container">
        <div className="hub-header">
          <h1>Women's Rights Knowledge Hub</h1>
          <p>Understand your legal rights in India. This hub explains your fundamental rights in simple, easy-to-understand language.</p>
        </div>

        <div className="hub-intro">
          <div className="intro-card">
            <h3>Why Know Your Rights?</h3>
            <p>Knowledge is power. Understanding your rights helps you protect yourself, take action when needed, and fight for justice.</p>
          </div>
          <div className="intro-card">
            <h3>What You'll Learn</h3>
            <p>From fundamental constitutional rights to specific protection laws, employment rights, and digital safety - everything explained simply.</p>
          </div>
          <div className="intro-card">
            <h3>Take Action</h3>
            <p>Use this knowledge to file complaints, seek legal aid, and access government support systems designed to protect you.</p>
          </div>
        </div>

        <div className="rights-container">
          <div className="accordion">
            {rightsCategories.map((category, index) => (
              <AccordionItem key={index} category={category} index={index} />
            ))}
          </div>
        </div>

        <div className="resources-cta">
          <h2>Need More Information?</h2>
          <p>For detailed legal information and official sources, visit:</p>
          <div className="cta-links">
            <a href="https://ncw.gov.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              National Commission for Women
            </a>
            <a href="https://www.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Supreme Court of India
            </a>
            <a href="https://nalsa.gov.in/legal-aid/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Legal Aid Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
