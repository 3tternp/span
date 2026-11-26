import Section from './Section.jsx'

const field =
  'w-full px-3 py-2.5 bg-field/80 border border-rule rounded-lg focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_25%,transparent)]'

export default function Contact() {
  return (
    <Section id="contact" label="Get in touch" title="Let's work together"
      intro="Hiring, or have a security or compliance requirement? Email is the quickest way to reach me.">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
        <dl className="glass p-6 space-y-5 self-start">
          <div className="font-mono text-[12px] text-muted" aria-hidden="true">
            <span className="text-defense">prem@purple-team</span>:~$ contact --info
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-1">Email</dt>
            <dd><a href="mailto:basnetprem524@gmail.com" className="underline underline-offset-4 decoration-rule hover:decoration-accent">basnetprem524@gmail.com</a></dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-1">Phone</dt>
            <dd><a href="tel:+9779861375054" className="underline underline-offset-4 decoration-rule hover:decoration-accent">+977-9861375054</a></dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-1">Location</dt>
            <dd>Anamnagar, Kathmandu, Nepal</dd>
          </div>
        </dl>

        <form action="https://formsubmit.co/basnetprem524@gmail.com" method="POST" className="glass p-6 md:p-8 space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://basnetprem.com.np/thank-you.html" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New message from basnetprem.com.np" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block text-[14px] text-muted">First name
              <input type="text" name="First Name" autoComplete="given-name" required className={`${field} mt-1 text-ink`} />
            </label>
            <label className="block text-[14px] text-muted">Last name
              <input type="text" name="Last Name" autoComplete="family-name" required className={`${field} mt-1 text-ink`} />
            </label>
            <label className="block text-[14px] text-muted">Email
              <input type="email" name="Email" autoComplete="email" required className={`${field} mt-1 text-ink`} />
            </label>
            <label className="block text-[14px] text-muted">Phone (optional)
              <input type="tel" name="Phone" autoComplete="tel" className={`${field} mt-1 text-ink`} />
            </label>
          </div>
          <label className="block text-[14px] text-muted">Message
            <textarea rows={6} name="Message" required className={`${field} mt-1 text-ink resize-y`} />
          </label>
          <button type="submit"
            className="btn-glow px-7 py-3 rounded-full font-semibold">
            Send message
          </button>
        </form>
      </div>
    </Section>
  )
}
