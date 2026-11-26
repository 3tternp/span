import Section from './Section.jsx'

// Add a `url` (Credly badge, issuer verification page, credential PDF, ...) to any
// entry and its card becomes a "Verify" link that opens in a new tab.
const certifications = [
  { name: 'ISO 27001:2022 Lead Auditor',              issuer: 'PECB / BSI',            category: 'Information Security Management'  },
  { name: 'CRTP – Certified Red Team Professional',   issuer: 'Altered Security',      category: 'Offensive Security / Red Teaming' },
  { name: '(ISC)² CC',                                issuer: '(ISC)²',                category: 'Security Fundamentals'            },
  { name: 'CNSS: Certified Network Security Specialist',issuer:'ICSI, United Kingdom',  category: 'Network Security'                 },
  { name: 'AWS Security Fundamentals',                 issuer: 'Amazon Web Services',  category: 'Cloud Security'                   },
  { name: 'API Security for PCI Compliance',           issuer: 'API Security Academy', category: 'API Security & Compliance'        },
  { name: 'API Penetration Testing',                   issuer: 'API University',       category: 'Offensive Security'               },
  { name: 'Ransomware Uncover Specialist',             issuer: 'ICTTF',                category: 'Threat Intelligence & Malware'    },
  { name: 'EC-Council Certified Security Analyst (ECSA)', issuer: 'EC-Council',        category: 'Penetration Testing'              },
]

function Badge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export default function Certifications() {
  return (
    <Section id="certifications" label="Credentials" title="Certifications"
      intro="Certifications in security management, offensive security, cloud and compliance.">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map(c => {
          const inner = (
            <>
              <span className="shrink-0 w-11 h-11 rounded-xl grid place-items-center text-accent border border-rule bg-paper/40"><Badge /></span>
              <span className="min-w-0">
                <span className="block font-medium leading-snug mb-1">{c.name}</span>
                <span className="block font-mono text-[12px] text-accent mb-0.5">{c.issuer}</span>
                <span className="block text-[13px] text-muted">{c.category}</span>
                {c.url && <span className="block font-mono text-[12px] mt-2 text-defense">verify credential &nearr;</span>}
              </span>
            </>
          )
          return (
            <li key={c.name} className="contents">
              {c.url
                ? <a href={c.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`Verify ${c.name} (opens in a new tab)`}
                    className="glass flex items-start gap-4 p-5 no-underline">{inner}</a>
                : <div className="glass flex items-start gap-4 p-5">{inner}</div>}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
