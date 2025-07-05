import Container from "../container/layout";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { quickLinks, socialLinks } from "./FooterItems";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-16">
      {/* Main Footer Content */}
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Food App</h2>
              <p className="text-gray-200 text-sm">
                Delivering happiness with every bite. Experience the taste of
                excellence.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="hover:text-white/80 transition-colors duration-300 
                             transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-white transition-colors duration-300 
                               inline-block transform hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-300" />
                  <Link
                    href="tel:+11234560090"
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    +1 (123) 456-0090
                  </Link>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-300" />
                  <Link
                    href="mailto:hello@example.com"
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    hello@example.com
                  </Link>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  <span className="text-gray-200">
                    123 Business Avenue,
                    <br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="text-gray-200">
                  <span className="font-medium">Mon - Fri:</span> 9AM - 10PM
                </li>
                <li className="text-gray-200">
                  <span className="font-medium">Saturday:</span> 10AM - 11PM
                </li>
                <li className="text-gray-200">
                  <span className="font-medium">Sunday:</span> 10AM - 9PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
            <p>
              © {currentYear} Next.js Full-Stack Food App. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
