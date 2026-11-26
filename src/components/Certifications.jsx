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

export default function Certifications() {
  return (
    <Section id="certifications" title="Credentials" tint
      intro="Certifications in security management, offensive security, cloud and compliance.">
      <ul className="divide-y divide-rule border-y border-rule">
        {certifications.map(c => (
          <li key={c.name} className="py-4 grid md:grid-cols-[1fr_auto] gap-x-8 gap-y-0.5">
            <span className="font-medium">
              {c.url
                ? <a href={c.url} target="_blank" rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-rule hover:decoration-ink">{c.name}</a>
                : c.name}
            </span>
            <span className="text-[14px] text-muted">{c.issuer}</span>
            <span className="text-[14px] text-muted md:col-span-2">{c.category}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
