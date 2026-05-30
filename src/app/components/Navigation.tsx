import { Link, useLocation } from 'react-router';
import { Menu, X, Download } from 'lucide-react'; // Added Download icon
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Removed the resume path from the loop so it can be custom-styled outside it
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            Ana Boset
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors font-medium text-sm ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Custom Styled Download CV Button for Desktop (Matching image_6656c8.png) */}
            <a
              href="/resume.pdf" // Make sure your resume file is placed inside the 'public/' directory as 'resume.pdf'
              download="Ana_Boset_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl shadow-sm hover:shadow transition-all duration-200 text-sm"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Styled Download Option for Mobile Viewports */}
              <div className="pt-2 border-t border-gray-100 px-3">
                <a
                  href="/resume.pdf"
                  download="Ana_Boset_CV.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-xl text-sm"
                >
                  <Download className="size-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}