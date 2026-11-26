export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[14px] text-muted">
        <p>&copy; {new Date().getFullYear()} Prem Basnet</p>
        <p className="flex gap-5">
          <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          <a href="mailto:basnetprem524@gmail.com" className="hover:text-ink">Email</a>
          <a href="/Prem-Basnet-CV.pdf" download className="hover:text-ink">CV</a>
        </p>
      </div>
    </footer>
  )
}
