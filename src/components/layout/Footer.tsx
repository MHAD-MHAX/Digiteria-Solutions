import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';


import Logo from "../layout/Images/Logo.jpg"

const Footer = () => {
  const links = {
    links: [
      { name: 'Careers', path: '/about-us/careers' },
      { name: 'Patient Info', path: 'https://patient.info/' },
      { name: 'Contracts Repository', path: '/contracts-repository' },
      { name: 'Modern Slavery Act', path: '/modern-slavery-act' },
      { name: 'Supplier Code of Conduct', path: '/supplier-code-of-conduct' },
      { name: 'Tax strategy', path: '/tax-strategy' },
    ],
    contact: [
      { name: 'Get in touch', path: 'https://clouder-nu.vercel.app/' },
  
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Cookies Policy', path: '/cookie-policy' },
      { name: 'Terms of Use', path: '/terms-of-use' },
      { name: 'Terms & Conditions', path: '/terms-conditions' },
      { name: 'Compliance', path: '/compliance' },
    ],
  };

  return (
    <footer className="bg-[#1D2A44] text-white pt-12 pb-6">
      <div className="container ">
        {/* Newsletter Signup Section */}
        <div className="mb-12 pb-8 border-b border-optum-blue-light/30">
  <div className="flex flex-col items-center text-center">
    <h3 className="text-2xl mb-4">Sign up for our monthly newsletter.</h3>
    
    <div className="max-w-md w-full flex flex-col sm:flex-row gap-3 justify-center">
      <div className="flex-grow">
        <input
          type="email"
          placeholder="Your email address*"
          className="w-full px-4 py-3 rounded-full bg-white text-optum-blue focus:outline-none"
        />
      </div>
      <button className="bg-optum-red hover:bg-optum-red/90 text-white px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap">
        Subscribe
      </button>
    </div>
    
    <div className="mt-3 flex items-center gap-2 justify-center">
      <input type="checkbox" id="privacy-policy" className="rounded" />
      <label htmlFor="privacy-policy" className="text-sm">
        I have read and agree to the{' '}
        <Link to="/privacy-policy" className="underline">
          privacy policy
        </Link>
        *
      </label>
    </div>
  </div>
</div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo */}
          <div className="md:col-span-3">
            <Link to="/">
              <img
                src={Logo}
                alt="Optum Logo"
                className="h-13"
              />
            </Link>
          </div>


          {/* Contact Info */}
          <div className="md:col-span-3 pt-10">
            <h5 className="font-sans-bold text-lg mb-4">Contact us</h5>
            <ul className="space-y-1">
              {links.contact.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-optum-teal transition-colors py-1 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="md:col-span-3 pt-10 ">
            <h5 className="font-sans-bold text-lg mb-4">Find us</h5>
            <address className="not-italic text-sm mb-4">
              15 ijumu street,
              <br />
              GRA,ilorin
              <br />
              Kwara State 
            </address>
  
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-optum-blue-light/30 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.instagram.com/digiteriasolutions?igsh=MXFhOW85ZmFnb3pvMg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-optum-teal transition-colors"
            >
              <FaInstagram size={22} />
            </a>
        
          </div>

          {/* Copyright */}
          <p className="text-sm">© 2025 Optum. All rights reserved.</p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end mt-6 md:mt-0">
            {links.legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm hover:text-optum-teal transition-colors px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
