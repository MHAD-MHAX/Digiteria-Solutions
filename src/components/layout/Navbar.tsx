import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

import Logo from "../layout/Images/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* Cookie Policy Banner */}
      {isCookieBannerOpen && (
        <div className="bg-white py-4 px-4 shadow-md fixed bottom-0 left-0 right-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-sans-bold mb-2">Cookies Policy</h5>
              <p className="text-sm max-w-3xl">
                We use cookies to give you the best online experience. Some are necessary for our website to work properly, others are optional but help us improve your experience in other ways. Find out more in our{' '}
                <Link to="/privacy-policy" className="text-optum-blue underline">
                  privacy policy
                </Link>.
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                className="btn-primary text-sm"
                onClick={() => setIsCookieBannerOpen(false)}
              >
                Accept cookies
              </button>
              <button
                className="btn-secondary text-sm"
                onClick={() => setIsCookieBannerOpen(false)}
              >
                Manage cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <div className="bg-white py-2 shadow-sm">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            {/* Left: Navigation Links */}
            <ul className="flex space-x-10 w-full justify-start">
              <li>
                <Link
                  to="/about-us"
                  className="py-2 block hover:text-optum-red transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="https://clouder-nu.vercel.app/"
                  className="py-2 block hover:text-optum-red transition-colors"
                >
                  Products
                </a>
              </li>
            </ul>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Optum Logo"
                  className="h-12 rounded-full"  
                />
              </Link>
            </div>

            {/* Right: Hamburger Menu for Mobile */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} aria-label="Open menu" className="p-2">
                <FiMenu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="container mx-auto py-4">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="p-2"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Mobile Nav with Logo in Middle */}
            <nav>
              <ul className="space-y-4 text-center">
                <li>
                  <Link
                    to="/about-us"
                    className="block py-2 text-xl border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img
                      src={Logo}
                      alt="Optum Logo"
                      className="h-10 mx-auto rounded-full"  
                    />
                  </Link>
                </li>

                <li>
                  <a
                    href="https://clouder-nu.vercel.app/"
                    className="block py-2 text-xl border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </a>
                </li>

                <li className="pt-4">
                  <h3 className="text-lg font-sans-bold mb-4">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://x.com/Optum_UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/optumuk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://www.youtube.com/@Optum_UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <FaYoutube size={24} />
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;