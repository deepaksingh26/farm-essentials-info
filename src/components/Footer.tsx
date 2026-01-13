import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/products/file_000000007df471fd89fae42a5650e573.png";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative container-custom py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5">
            <Link
              to="/"
              className="flex items-center gap-4 group"
            >
              <img
                src={logo}
                alt="Varinda Solutions company logo"
                className="w-16 h-16 rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="leading-tight">
                <span className="block font-heading font-bold text-lg tracking-wide">
                  Varinda Solutions
                </span>
                <span className="block text-sm text-primary-foreground/70">
                  Agriculture & Farm Essentials
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
              Your trusted partner for quality agricultural inputs. Serving
              farmers with genuine seeds, fertilizers, and crop protection since
              2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-8 h-0.5 bg-primary-foreground/40" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="relative text-primary-foreground/80 transition-colors hover:text-primary-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary-foreground after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 relative inline-block">
              Our Products
              <span className="absolute left-0 -bottom-1 w-8 h-0.5 bg-primary-foreground/40" />
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {[
                "Seeds",
                "Fertilizers",
                "Pesticides",
                "Crop Nutrition",
                "Farm Tools",
              ].map((item) => (
                <li
                  key={item}
                  className="transition-transform duration-200 hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-1 w-8 h-0.5 bg-primary-foreground/40" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-primary-foreground/80">
                  +91 91315 95022
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-primary-foreground/80">
                  info.varindasolutions@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-primary-foreground/80">
                  Badmer, Rajasthan – 344024
                  <br />
                  District Headquarters: Barmer
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm space-y-2">
          <p>
            © {new Date().getFullYear()} Varinda Solutions. All rights reserved.
          </p>
          <p>Trusted by farmers across India</p>
          <p className="text-xs">
            Developed by{" "}
            <a
              href="https://onlinejaoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-primary-foreground transition-colors"
            >
              Online Jaoo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
