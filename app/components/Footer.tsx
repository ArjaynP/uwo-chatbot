export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#4F2683] text-white mt-auto">
      <div className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Contact Info - 5 columns */}
            <div className="md:col-span-5 text-xs leading-relaxed">
              <p className="font-bold mb-3">© 1878 - {currentYear} Western University</p>
              <p className="mb-3">
                <a href="#" className="hover:underline">Office of the Registrar</a><br/>
                1151 Richmond Street<br/>
                London, Ontario, Canada, N6A 3K7<br/>
                Tel: 519 661 2100
              </p>
              <p>
                <a href="https://www.uwo.ca/vpfinance/legalcounsel/privacy/" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy</a>
                {' | '}
                <a href="https://www.communications.uwo.ca/web_design/standards/" target="_blank" rel="noopener noreferrer" className="hover:underline">Web Standards</a>
                {' | '}
                <a href="https://www.uwo.ca/terms-of-use.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Use</a>
                {' | '}
                <a href="https://accessibility.uwo.ca/" target="_blank" rel="noopener noreferrer" className="hover:underline">Accessibility</a>
              </p>
            </div>

            {/* Key Topics - 2 columns */}
            <div className="md:col-span-2 text-xs leading-relaxed">
              <p className="font-bold mb-3">Key Topics:</p>
              <div className="space-y-1">
                <div><a href="#" className="hover:underline">Services</a></div>
                <div><a href="#" className="hover:underline">Academics</a></div>
                <div><a href="#" className="hover:underline">Student Finances</a></div>
                <div><a href="#" className="hover:underline">Resources</a></div>
                <div><a href="#" className="hover:underline">Admissions</a></div>
                <div><a href="#" className="hover:underline">Features</a></div>
              </div>
            </div>

            {/* Popular Resources - 2 columns */}
            <div className="md:col-span-2 text-xs leading-relaxed">
              <p className="font-bold mb-3">Popular Resources:</p>
              <div className="space-y-1">
                <div><a href="#" className="hover:underline">Features/News</a></div>
                <div><a href="#" className="hover:underline">Ministry Notices</a></div>
                <div><a href="#" className="hover:underline">Accessibility at Western</a></div>
                <div><a href="#" className="hover:underline">Faculty Academic Counselling</a></div>
              </div>
            </div>

            {/* Social Media & Logo - 3 columns */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end gap-6">
              <div className="flex gap-2">
                <a 
                  href="https://www.facebook.com/WesternUniversity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Facebook"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://www.uwo.ca/web_standards/img/social/svg/facebook.svg" 
                    alt="Western on Facebook" 
                    className="w-8 h-8"
                  />
                </a>
                <a 
                  href="https://instagram.com/westernuniversity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Instagram"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://www.uwo.ca/web_standards/img/social/svg/instagram.svg" 
                    alt="Instagram icon" 
                    className="w-8 h-8"
                  />
                </a>
                <a 
                  href="https://www.youtube.com/user/westernuniversity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="YouTube"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://www.uwo.ca/web_standards/img/social/svg/youtube1.svg" 
                    alt="Western on YouTube" 
                    className="w-8 h-8"
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/school/166689/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://www.uwo.ca/web_standards/img/social/svg/linkedin.svg" 
                    alt="LinkedIn icon" 
                    className="w-8 h-8"
                  />
                </a>
                <a 
                  href="https://weibo.com/westerninternational" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Weibo"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://www.uwo.ca/web_standards/img/social/svg/weibo.svg" 
                    alt="Weibo icon" 
                    className="w-8 h-8"
                  />
                </a>
              </div>
              <a 
                href="https://www.uwo.ca" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Western Home Page"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://www.uwo.ca/img/homepage/2017/logo-western-crest-ftr.svg" 
                  alt="Western University Crest" 
                  className="w-20 h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
