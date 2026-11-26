import Section from './Section.jsx'

const field =
  'w-full px-3 py-2.5 bg-white/70 border border-rule rounded-sm focus:border-accent focus:outline-none'

export default function Contact() {
  return (
    <Section id="contact" title="Contact"
      intro="Hiring, or have a security or compliance requirement? Email is the quickest way to reach me.">
      <div className="grid xl:grid-cols-[1fr_1.4fr] gap-12">
        <dl className="space-y-5">
          <div>
            <dt className="text-[14px] text-muted">Email</dt>
            <dd><a href="mailto:basnetprem524@gmail.com" className="underline underline-offset-4 decoration-rule hover:decoration-ink">basnetprem524@gmail.com</a></dd>
          </div>
          <div>
            <dt className="text-[14px] text-muted">Phone</dt>
            <dd><a href="tel:+9779861375054" className="underline underline-offset-4 decoration-rule hover:decoration-ink">+977-9861375054</a></dd>
          </div>
          <div>
            <dt className="text-[14px] text-muted">Location</dt>
            <dd>Anamnagar, Kathmandu, Nepal</dd>
          </div>
        </dl>

        <form action="https://formsubmit.co/basnetprem524@gmail.com" method="POST" className="space-y-4">
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
            className="px-5 py-2.5 bg-accent text-white hover:bg-accent-dark transition-colors">
            Send message
          </button>
        </form>
      </div>
    </Section>
  )
}
