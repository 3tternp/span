const facts = [
  { label: 'Right now',    value: 'Manager, SIEM & CSOC at Vairav Technology and Cyber Universe Europe' },
  { label: 'Certified',    value: 'ISO 27001:2022 Lead Auditor, ECSA, CRTP, (ISC)² CC' },
  { label: 'Works with',   value: 'AWS, Azure, ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, NIST' },
  { label: 'Availability', value: 'Open to remote roles and consulting. Based in Kathmandu, Nepal' },
]

export default function Glance() {
  return (
    <section aria-label="At a glance" className="border-t border-rule bg-tint">
      <dl className="max-w-6xl mx-auto px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
        {facts.map(f => (
          <div key={f.label}>
            <dt className="text-[13px] uppercase tracking-wider text-muted mb-1">{f.label}</dt>
            <dd className="text-[15px] leading-snug">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
