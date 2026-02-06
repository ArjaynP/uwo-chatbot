import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-western-purple text-white" id="footer">
      <div className="contact-content mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
          {/* Contact info - grid_5 */}
          <div className="md:col-span-4">
            <p className="copyright text-sm font-bold mb-4">
              © 1878 - {currentYear} Western University
            </p>
            <p className="footercontact text-sm leading-relaxed">
              Office of the Registrar
              <br />
              1151 Richmond Street
              <br />
              London, Ontario, Canada, N6A 3K7
              <br />
              Tel: 519 661 2100
              <br />
              <Link
                href="https://www.uwo.ca/vpfinance/legalcounsel/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Privacy
              </Link>{" "}
              |{" "}
              <Link
                href="https://www.communications.uwo.ca/web_design/standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Web Standards
              </Link>{" "}
              |{" "}
              <Link
                href="https://www.uwo.ca/terms-of-use.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Terms of Use
              </Link>{" "}
              |{" "}
              <Link
                href="https://accessibility.uwo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Accessibility
              </Link>
            </p>
          </div>

          {/* Key Topics - grid_2 */}
          <div className="md:col-span-2">
            <p className="font-bold text-sm mb-3">Key Topics:</p>
            <div className="flex flex-col gap-1 text-sm">
              <Link href="services/index.html" className="text-white hover:underline">
                Services
              </Link>
              <Link href="academics/index.html" className="text-white hover:underline">
                Academics
              </Link>
              <Link href="student_finances/index.html" className="text-white hover:underline">
                Student Finances
              </Link>
              <Link href="resources/index.html" className="text-white hover:underline">
                Resources
              </Link>
              <Link href="admissions/index.html" className="text-white hover:underline">
                Admissions
              </Link>
              <Link href="features/index.html" className="text-white hover:underline">
                Features
              </Link>
            </div>
          </div>

          {/* Popular Resources - grid_2 */}
          <div className="md:col-span-3">
            <p className="font-bold text-sm mb-3">Popular Resources:</p>
            <div className="flex flex-col gap-1 text-sm">
              <Link href="features/index.html" className="text-white hover:underline">
                Features/News
              </Link>
              <Link href="ministry_notices.html" className="text-white hover:underline">
                Ministry Notices
              </Link>
              <Link href="accessibility_at_western.html" className="text-white hover:underline">
                Accessibility at Western
              </Link>
              <Link href="faculty_academic_counselling.html" className="text-white hover:underline">
                Faculty Academic Counselling
              </Link>
            </div>
          </div>

          {/* Social media - grid_3 */}
          <div className="social-media md:col-span-3 flex flex-col items-end gap-4">
            <div id="social-media-links" className="flex gap-3">
              <Link
                href="https://www.facebook.com/WesternUniversity"
                rel="noopener noreferrer"
                target="_blank"
                title="Facebook"
                className="hover:opacity-80"
              >
                <img
                  alt="Western on Facebook"
                  className="social-icon w-8 h-8"
                  height={32}
                  src="https://www.uwo.ca/web_standards/img/social/svg/facebook.svg"
                  width={32}
                />
              </Link>
              <Link
                href="https://instagram.com/westernuniversity"
                rel="noopener noreferrer"
                target="_blank"
                title="Instagram"
                className="hover:opacity-80"
              >
                <img
                  alt="Instagram icon"
                  className="social-icon w-8 h-8"
                  height={32}
                  src="https://www.uwo.ca/web_standards/img/social/svg/instagram.svg"
                  width={32}
                />
              </Link>
              <Link
                href="https://www.youtube.com/user/westernuniversity"
                rel="noopener noreferrer"
                target="_blank"
                title="YouTube"
                className="hover:opacity-80"
              >
                <img
                  alt="Western on YouTube"
                  className="social-icon w-8 h-8"
                  height={32}
                  src="https://www.uwo.ca/web_standards/img/social/svg/youtube1.svg"
                  width={32}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/school/166689/"
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
                className="hover:opacity-80"
              >
                <img
                  alt="LinkedIn icon"
                  className="social-icon w-8 h-8"
                  height={32}
                  src="https://www.uwo.ca/web_standards/img/social/svg/linkedin.svg"
                  width={32}
                />
              </Link>
              <Link
                href="https://weibo.com/westerninternational"
                rel="noopener noreferrer"
                target="_blank"
                title="Weibo"
                className="hover:opacity-80"
              >
                <img
                  alt="Weibo icon"
                  className="social-icon w-8 h-8"
                  height={32}
                  src="https://www.uwo.ca/web_standards/img/social/svg/weibo.svg"
                  width={32}
                />
              </Link>
            </div>
            <div className="footer-logos">
              <Link
                href="https://www.uwo.ca"
                rel="noopener"
                target="_blank"
                title="Western Home Page"
              >
                <img
                  alt="Western University Crest"
                  src="https://www.uwo.ca/img/homepage/2017/logo-western-crest-ftr.svg"
                  className="w-20 h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
