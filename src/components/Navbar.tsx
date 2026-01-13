import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "../assets/products/file_000000007df471fd89fae42a5650e573.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Optimized Scroll Handler with smoother threshold
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/40 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- BRANDING --- */}
          <Link 
            to="/" 
            className="flex items-center gap-4 group select-none"
            aria-label="Varinda Solutions Home"
          >
            <div className="relative overflow-hidden rounded-full">
              <img
                src={logo}
                alt="Varinda Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle shine effect on logo hover */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-tight text-foreground uppercase transition-colors duration-300 group-hover:text-primary">
                Varinda Solutions
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] text-muted-foreground font-medium uppercase group-hover:text-foreground/80 transition-colors">
                Agriculture & Farm
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 group overflow-hidden",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* The Magic Underline Animation */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ease-out rounded-full",
                      isActive ? "w-8" : "w-0 group-hover:w-full opacity-50"
                    )} 
                  />
                  
                  {/* Subtle Background Hover Fade */}
                  <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md -z-0" />
                </Link>
              );
            })}
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50 hover:bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={cn(
                    "absolute transition-all duration-300 ease-in-out transform", 
                    isOpen ? "rotate-180 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
                )}>
                    <Menu className="w-7 h-7" />
                </span>
                <span className={cn(
                    "absolute transition-all duration-300 ease-in-out transform", 
                    isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-50"
                )}>
                    <X className="w-7 h-7" />
                </span>
            </div>
          </Button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={cn(
          "fixed inset-0 top-[70px] bg-background/95 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-2 h-full overflow-y-auto">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                // Staggered Animation Delay for "Waterfall" effect
                style={{ transitionDelay: `${isOpen ? index * 75 : 0}ms` }}
                className={cn(
                  "group flex items-center justify-between px-6 py-5 rounded-2xl text-xl font-medium transition-all duration-500 transform",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
                  isActive 
                    ? "bg-primary/10 text-primary translate-x-2" 
                    : "text-muted-foreground hover:bg-muted/50 hover:translate-x-2"
                )}
              >
                <span>{link.name}</span>
                {/* Mobile Chevron Icon */}
                <span className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    isActive ? "bg-primary" : "bg-transparent group-hover:bg-primary/30"
                )} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
