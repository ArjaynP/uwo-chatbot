export default function Footer() {
  return (
    <footer className="bg-[#4F2683] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Western University</h3>
            <p className="text-sm text-gray-200">
              1151 Richmond St, London, ON N6A 3K7
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a
                href="https://www.uwo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Official Website
              </a>
              <a
                href="https://www.uwo.ca/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="https://www.uwo.ca/contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
            <p className="text-xs text-gray-300">
              © {new Date().getFullYear()} Western University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
