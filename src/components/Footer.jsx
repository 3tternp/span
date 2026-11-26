export default function Footer() {
  return (
    <footer className="mt-8 border-t border-rule py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="team-rule" />
          <p className="font-mono text-[12px] text-muted">&copy; {new Date().getFullYear()} Prem Basnet &middot; red + blue = purple</p>
        </div>
        <p className="flex gap-5 text-[14px] text-muted">
          <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
          <a href="mailto:basnetprem524@gmail.com" className="hover:text-accent">Email</a>
          <a href="/Prem-Basnet-CV.pdf" download className="hover:text-accent">CV</a>
        </p>
      </div>
    </footer>
  )
}
