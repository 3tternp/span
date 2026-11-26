export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="border-t border-rule py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[220px_1fr] gap-6 md:gap-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h2>
          {intro && <p className="mt-3 text-[15px] text-muted max-w-xs">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
