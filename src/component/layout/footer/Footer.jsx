import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Section 1: About Us */}
          <div>
            <h4 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">About Us</h4>
            <p className="text-sm">
              We are committed to serving the public with transparency, integrity, and efficiency. Our mission is to provide accessible and reliable services to all citizens.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/news" className="hover:underline">News & Updates</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div>
            <h4 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <a href="mailto:info@govwebsite.com" className="hover:underline">info@govwebsite.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarker />
                <span>123 Government Street, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter Subscription */}
          <div>
            <h4 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">Subscribe</h4>
            <p className="text-sm mb-4">
              Stay updated with the latest news and announcements from the government.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-yellow-400 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-yellow-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-yellow-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="text-white hover:text-yellow-400 transition-colors">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="text-center border-t border-white pt-6">
          <p>&copy; {new Date().getFullYear()} Government Website. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{' '}
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a> |{' '}
            <a href="/accessibility" className="hover:underline">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;