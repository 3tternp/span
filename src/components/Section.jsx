export default function Section({ id, label, title, intro, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
          <div className="section-label">&gt;&nbsp;{label}</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight gradient-text pb-1">{title}</h2>
          {intro && <p className="mt-4 text-muted max-w-2xl mx-auto">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
