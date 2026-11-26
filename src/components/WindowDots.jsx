export default function WindowDots() {
  return (
    <span aria-hidden="true" className="flex gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-offense" />
      <span className="w-2.5 h-2.5 rounded-full bg-accent" />
      <span className="w-2.5 h-2.5 rounded-full bg-defense" />
    </span>
  )
}
