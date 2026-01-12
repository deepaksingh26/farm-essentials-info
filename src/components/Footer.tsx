import { Link } from "react-router-dom";
import {Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/products/file_000000007df471fd89fae42a5650e573.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
             <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
            {/* <span className="font-heading font-bold text-lg md:text-xl text-foreground">
              KrishiMart
            </span> */}
          </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for quality agricultural inputs. Serving farmers with genuine seeds, fertilizers, and crop protection since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Seeds</li>
              <li>Fertilizers</li>
              <li>Pesticides</li>
              <li>Crop Nutrition</li>
              <li>Farm Tools</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
            <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 91315 95022</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info.krishimart@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Badmer, Rajasthan - 344024<br />
                  District Headquarters: Barmer
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} KrishiMart. All rights reserved.</p>
          <p className="mt-1">Trusted by farmers across India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
