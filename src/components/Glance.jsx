const facts = [
  { label: 'Right now',    value: 'Manager, SIEM & CSOC at Vairav Technology and Cyber Universe Europe' },
  { label: 'Certified',    value: 'ISO 27001:2022 Lead Auditor, ECSA, CRTP, (ISC)² CC' },
  { label: 'Works with',   value: 'AWS, Azure, ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, NIST' },
  { label: 'Availability', value: 'Open to remote roles and consulting. Based in Kathmandu, Nepal' },
]

export default function Glance() {
  return (
    <section aria-label="At a glance" className="px-6">
      <dl className="glass max-w-6xl mx-auto p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
        {facts.map(f => (
          <div key={f.label}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-1.5">{f.label}</dt>
            <dd className="text-[15px] leading-snug">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
