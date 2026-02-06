import { GraduationCap } from "lucide-react"

export function Header() {
  return (
    <header className="bg-western-purple text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8" />
          <div>
            <h1 className="text-lg font-bold leading-tight">Western University</h1>
            <p className="text-sm text-white/80">Office of the Registrar</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="https://registrar.uwo.ca/services/index.html" className="text-white/80 transition-colors hover:text-white">
            Services
          </a>
          <a href="https://registrar.uwo.ca/academics/index.html" className="text-white/80 transition-colors hover:text-white">
            Academics
          </a>
          <a href="https://registrar.uwo.ca/student_finances/index.html" className="text-white/80 transition-colors hover:text-white">
            Student Finances
          </a>
          <a href="https://registrar.uwo.ca/admissions/index.html" className="text-white/80 transition-colors hover:text-white">
            Admissions
          </a>
        </nav>
      </div>
    </header>
  )
}
