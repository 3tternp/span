import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import contactImg from '../assets/img/contact-img.svg'

const contactDetails = [
  { Icon: Mail,    label: 'Email',    value: 'basnetprem524@gmail.com',    href: 'mailto:basnetprem524@gmail.com' },
  { Icon: Phone,   label: 'Phone',   value: '+977-9861375054',             href: 'tel:+9779861375054'             },
  { Icon: MapPin,  label: 'Location',value: 'Anamnagar, Kathmandu, Nepal', href: null                             },
]

const fadeLeft  = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x:  30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 relative"
      style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(13,25,18,0.93) 100%)' }}
    >
      {/* glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #00FF9D 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4  w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #00B8FF 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left: illustration + contact info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            <img
              src={contactImg}
              alt="Contact Prem Basnet"
              className="w-full max-w-[340px]"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,255,157,0.3))' }}
            />

            <div className="w-full space-y-4">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <div key={label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.09]
                    transition-colors hover:border-accent/30"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                    border border-accent/30"
                    style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.15), rgba(0,184,255,0.15))' }}>
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">{label}</div>
                    {href
                      ? <a href={href} className="text-[14px] text-white/85 hover:text-accent transition-colors no-underline">{value}</a>
                      : <span className="text-[14px] text-white/85">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="section-label mb-4">&gt;&nbsp;Get In Touch</div>
            <h2 className="text-[40px] font-bold gradient-text mb-3">Let&apos;s Work Together</h2>
            <p className="text-muted text-[16px] leading-relaxed mb-8">
              Have a security challenge or compliance requirement? I&apos;d love to hear about it.
            </p>

            <form
              action="https://formsubmit.co/basnetprem524@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://basnetprem.com.np/thank-you.html" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text" name="First Name" placeholder="First Name" required
                  className="w-full px-5 py-4 rounded-xl text-[15px] font-medium text-white
                    bg-white/[0.05] border border-white/20 outline-none tracking-wide
                    placeholder-white/45 transition-all duration-300
                    focus:bg-white/[0.08] focus:border-accent/50 focus:shadow-[0_0_18px_rgba(0,255,157,0.18)]"
                />
                <input
                  type="text" name="Last Name" placeholder="Last Name" required
                  className="w-full px-5 py-4 rounded-xl text-[15px] font-medium text-white
                    bg-white/[0.05] border border-white/20 outline-none tracking-wide
                    placeholder-white/45 transition-all duration-300
                    focus:bg-white/[0.08] focus:border-accent/50 focus:shadow-[0_0_18px_rgba(0,255,157,0.18)]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email" name="Email" placeholder="Email Address" required
                  className="w-full px-5 py-4 rounded-xl text-[15px] font-medium text-white
                    bg-white/[0.05] border border-white/20 outline-none tracking-wide
                    placeholder-white/45 transition-all duration-300
                    focus:bg-white/[0.08] focus:border-accent/50 focus:shadow-[0_0_18px_rgba(0,255,157,0.18)]"
                />
                <input
                  type="tel" name="Phone" placeholder="Phone No."
                  className="w-full px-5 py-4 rounded-xl text-[15px] font-medium text-white
                    bg-white/[0.05] border border-white/20 outline-none tracking-wide
                    placeholder-white/45 transition-all duration-300
                    focus:bg-white/[0.08] focus:border-accent/50 focus:shadow-[0_0_18px_rgba(0,255,157,0.18)]"
                />
              </div>
              <textarea
                rows={6} name="Message" placeholder="Tell me about your project or inquiry..." required
                className="w-full px-5 py-4 rounded-xl text-[15px] font-medium text-white resize-none
                  bg-white/[0.05] border border-white/20 outline-none tracking-wide
                  placeholder-white/45 transition-all duration-300
                  focus:bg-white/[0.08] focus:border-accent/50 focus:shadow-[0_0_18px_rgba(0,255,157,0.18)]"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[16px]
                  text-[#0a0a0a] bg-gradient-to-r from-accent to-accent-2
                  transition-all duration-300 hover:-translate-y-1 mt-2
                  hover:shadow-[0_15px_38px_rgba(0,255,157,0.45)]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
