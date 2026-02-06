import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Social media bar - mirrors the registrar social-section #grey-bg */}
      <div className="bg-[#58595B]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 py-4">
          <Link
            href="https://www.facebook.com/WesternUniversity"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="transition-opacity hover:opacity-80"
          >
            <img
              alt="Western on Facebook"
              className="h-8 w-8"
              height={32}
              width={32}
              src="https://www.uwo.ca/web_standards/img/social/svg/facebook.svg"
            />
          </Link>
          <Link
            href="https://instagram.com/westernuniversity"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="transition-opacity hover:opacity-80"
          >
            <img
              alt="Instagram icon"
              className="h-8 w-8"
              height={32}
              width={32}
              src="https://www.uwo.ca/web_standards/img/social/svg/instagram.svg"
            />
          </Link>
          <Link
            href="https://www.youtube.com/user/westernuniversity"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="transition-opacity hover:opacity-80"
          >
            <img
              alt="Western on YouTube"
              className="h-8 w-8"
              height={32}
              width={32}
              src="https://www.uwo.ca/web_standards/img/social/svg/youtube1.svg"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/school/166689/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="transition-opacity hover:opacity-80"
          >
            <img
              alt="LinkedIn icon"
              className="h-8 w-8"
              height={32}
              width={32}
              src="https://www.uwo.ca/web_standards/img/social/svg/linkedin.svg"
            />
          </Link>
          <Link
            href="https://weibo.com/westerninternational"
            target="_blank"
            rel="noopener noreferrer"
            title="Weibo"
            className="transition-opacity hover:opacity-80"
          >
            <img
              alt="Weibo icon"
              className="h-8 w-8"
              height={32}
              width={32}
              src="https://www.uwo.ca/web_standards/img/social/svg/weibo.svg"
            />
          </Link>
        </div>
      </div>

      {/* Main footer content - mirrors the registrar #footer .contact-content */}
      <div className="bg-western-purple text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Contact info - mirrors grid_5 */}
            <div>
              <p className="text-sm text-white/60">
                {"© 1878 - "}
                {currentYear} Western University
              </p>
              <div className="mt-4 text-sm leading-relaxed text-white/80">
                <Link
                  href="https://registrar.uwo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:underline"
                >
                  Office of the Registrar
                </Link>
                <br />
                1151 Richmond Street
                <br />
                London, Ontario, Canada, N6A 3K7
                <br />
                Tel: 519 661 2100
              </div>
              <div className="mt-4 flex flex-wrap gap-x-2 text-xs text-white/60">
                <Link
                  href="https://www.uwo.ca/vpfinance/legalcounsel/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Privacy
                </Link>
                <span aria-hidden="true">|</span>
                <Link
                  href="https://www.communications.uwo.ca/web_design/standards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Web Standards
                </Link>
                <span aria-hidden="true">|</span>
                <Link
                  href="https://www.uwo.ca/terms-of-use.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Terms of Use
                </Link>
                <span aria-hidden="true">|</span>
                <Link
                  href="https://accessibility.uwo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Accessibility
                </Link>
              </div>
            </div>

            {/* Key Topics - mirrors grid_2 footernavtitles */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-white">
                Key Topics:
              </h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link
                  href="https://registrar.uwo.ca/services/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="https://registrar.uwo.ca/academics/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Academics
                </Link>
                <Link
                  href="https://registrar.uwo.ca/student_finances/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Student Finances
                </Link>
                <Link
                  href="https://registrar.uwo.ca/resources/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Resources
                </Link>
                <Link
                  href="https://registrar.uwo.ca/admissions/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Admissions
                </Link>
                <Link
                  href="https://registrar.uwo.ca/features/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Features
                </Link>
              </nav>
            </div>

            {/* Popular Resources - mirrors grid_2 */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-white">
                Popular Resources:
              </h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link
                  href="https://registrar.uwo.ca/features/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  {"Features/News"}
                </Link>
                <Link
                  href="https://registrar.uwo.ca/ministry_notices.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Ministry Notices
                </Link>
                <Link
                  href="https://registrar.uwo.ca/accessibility_at_western.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Accessibility at Western
                </Link>
                <Link
                  href="https://registrar.uwo.ca/faculty_academic_counselling.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Faculty Academic Counselling
                </Link>
              </nav>
            </div>

            {/* Social media + Western crest - mirrors social-media div + footer-logos */}
            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/WesternUniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    alt="Western on Facebook"
                    className="h-6 w-6"
                    height={24}
                    width={24}
                    src="https://www.uwo.ca/web_standards/img/social/svg/facebook.svg"
                  />
                </Link>
                <Link
                  href="https://instagram.com/westernuniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    alt="Instagram icon"
                    className="h-6 w-6"
                    height={24}
                    width={24}
                    src="https://www.uwo.ca/web_standards/img/social/svg/instagram.svg"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/user/westernuniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    alt="Western on YouTube"
                    className="h-6 w-6"
                    height={24}
                    width={24}
                    src="https://www.uwo.ca/web_standards/img/social/svg/youtube1.svg"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/school/166689/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    alt="LinkedIn icon"
                    className="h-6 w-6"
                    height={24}
                    width={24}
                    src="https://www.uwo.ca/web_standards/img/social/svg/linkedin.svg"
                  />
                </Link>
                <Link
                  href="https://weibo.com/westerninternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Weibo"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    alt="Weibo icon"
                    className="h-6 w-6"
                    height={24}
                    width={24}
                    src="https://www.uwo.ca/web_standards/img/social/svg/weibo.svg"
                  />
                </Link>
              </div>
              <Link
                href="https://www.uwo.ca"
                target="_blank"
                rel="noopener noreferrer"
                title="Western Home Page"
              >
                <img
                  alt="Western University Crest"
                  src="https://www.uwo.ca/img/homepage/2017/logo-western-crest-ftr.svg"
                  className="w-20"
                  width={80}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
