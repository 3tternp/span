import headerImg from '../assets/img/header-img.jpg'

export default function Banner() {
  return (
    <section id="top" className="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <p className="text-muted mb-4">Kathmandu, Nepal · open to remote work and consulting</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
            Prem Basnet
          </h1>
          <p className="font-serif text-2xl md:text-3xl leading-snug text-ink/85 mb-6 max-w-xl">
            Cybersecurity manager working in GRC, IS audit, and SIEM &amp; CSOC operations.
          </p>
          <p className="text-lg text-muted max-w-xl mb-8">
            I&apos;m an ISO 27001:2022 Lead Auditor with ten years of experience in IS audit, GRC,
            penetration testing and cloud security on AWS and Azure. These days I run SIEM and CSOC
            operations, and I work with ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, NIST and COBIT.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/Prem-Basnet-CV.pdf" download
              className="px-5 py-2.5 bg-accent text-white no-underline hover:bg-accent-dark transition-colors">
              Download CV
            </a>
            <a href="#contact" className="underline underline-offset-4 decoration-rule hover:decoration-ink">Get in touch</a>
            <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:decoration-ink">LinkedIn</a>
            <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:decoration-ink">GitHub</a>
          </div>
        </div>

        <img
          src={headerImg}
          alt="Prem Basnet"
          width="500" height="625"
          fetchPriority="high"
          className="w-full max-w-sm lg:ml-auto aspect-[4/5] object-cover object-top border border-rule"
        />
      </div>
    </section>
  )
}
