import headerImg from '../assets/img/header-img.jpg'

export default function Banner() {
  return (
    <section id="top" className="pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-5 max-w-2xl">
            I help organisations pass their audits and catch real attacks.
          </h1>
          <p className="font-serif text-xl md:text-[1.4rem] leading-snug text-ink/85 mb-5 max-w-xl">
            Prem Basnet &middot; Cybersecurity Manager and ISO 27001:2022 Lead Auditor, working in
            GRC, IS audit and SIEM &amp; CSOC operations.
          </p>
          <p className="text-[17px] text-muted max-w-xl mb-7">
            Ten years across IS audit, GRC, penetration testing and cloud security on AWS and Azure.
            These days I run SIEM and CSOC operations, and I&apos;ve led ISO 27001 certification and
            surveillance audits for clients across Nepal and Europe.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/Prem-Basnet-CV.pdf" download
              className="px-5 py-2.5 bg-accent text-white no-underline hover:bg-accent-dark transition-colors">
              Download CV
            </a>
            <a href="mailto:basnetprem524@gmail.com" className="underline underline-offset-4 decoration-rule hover:decoration-ink">Email me</a>
            <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:decoration-ink">LinkedIn</a>
            <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:decoration-ink">GitHub</a>
          </div>
        </div>

        <img
          src={headerImg}
          alt="Prem Basnet"
          width="420"
          fetchPriority="high"
          className="w-full max-w-sm md:ml-auto border border-rule"
        />
      </div>
    </section>
  )
}
