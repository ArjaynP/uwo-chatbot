export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#4F2683] text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section - Contact Info */}
          <div className="text-xs leading-relaxed flex-shrink-0">
            <p className="font-bold mb-2">© 1878 - {currentYear} Western University</p>
            <p>Office of the Registrar</p>
            <p>1151 Richmond Street</p>
            <p>London, Ontario, Canada, N6A 3K7</p>
            <p className="mb-3">Tel: 519 661 2100</p>
            <div className="flex flex-wrap gap-1 items-center">
              <a href="#" className="hover:underline">Privacy</a>
              <span className="mx-1">|</span>
              <a href="#" className="hover:underline">Web Standards</a>
              <span className="mx-1">|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span className="mx-1">|</span>
              <a href="#" className="hover:underline">Accessibility</a>
            </div>
          </div>

          {/* Key Topics */}
          <div className="text-xs leading-relaxed flex-shrink-0">
            <p className="font-bold mb-2">Key Topics:</p>
            <div className="space-y-1">
              <div><a href="#" className="hover:underline">Services</a></div>
              <div><a href="#" className="hover:underline">Academics</a></div>
              <div><a href="#" className="hover:underline">Student Finances</a></div>
              <div><a href="#" className="hover:underline">Resources</a></div>
              <div><a href="#" className="hover:underline">Admissions</a></div>
              <div><a href="#" className="hover:underline">Features</a></div>
            </div>
          </div>

          {/* Popular Resources */}
          <div className="text-xs leading-relaxed flex-shrink-0">
            <p className="font-bold mb-2">Popular Resources:</p>
            <div className="space-y-1">
              <div><a href="#" className="hover:underline">Features/News</a></div>
              <div><a href="#" className="hover:underline">Ministry Notices</a></div>
              <div><a href="#" className="hover:underline">Accessibility at Western</a></div>
              <div><a href="#" className="hover:underline">Faculty Academic Counselling</a></div>
            </div>
          </div>

          {/* Social Media & Logo */}
          <div className="flex flex-col items-end gap-4 ml-auto">
            <div className="flex gap-2">
              <a href="#" aria-label="Facebook" className="w-7 h-7 bg-[#3b5998] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-7 h-7 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-7 h-7 bg-[#FF0000] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-7 h-7 bg-[#0077B5] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Weibo" className="w-7 h-7 bg-[#E6162D] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.609-2.759 5.049-6.739 5.443zm8.864-12.656c-.427-.115-.688-.177-.473-.641.467-.998.515-1.857.015-2.471-.937-1.143-3.499-1.082-6.448.164 0 0-.927.4-.689-.326.459-1.439.389-2.644-.256-3.342-1.456-1.577-5.331-.06-8.658 3.387C.559 7.029-.766 9.754.249 12.262c1.88 4.643 7.637 7.647 13.498 7.647 8.716 0 14.521-5.074 14.521-9.104 0-2.439-2.052-3.821-3.574-4.308-.477-.152-.395-.364-.059-.468.615-.195 2.106-.524 2.106-.524 1.075-.214 1.486.095 1.656.443.226.465-.111 1.636-1.142 3.026-.337.455-.042.623.386.463 1.043-.396 2.963-1.516 3.069-3.373.088-1.553-1.194-2.664-3.574-3.376z"/>
                </svg>
              </a>
            </div>
            <img 
              src="/western-logo.png" 
              alt="Western University" 
              className="h-16 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-16 h-16 bg-white rounded-sm p-1 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="10" y="10" width="180" height="180" fill="#4F2683" rx="5"/>
                <text x="100" y="120" fontSize="90" fill="white" textAnchor="middle" fontFamily="serif" fontWeight="bold">W</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
