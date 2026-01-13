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

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300",
          scrolled
            ? "bg-background/80 md:backdrop-blur-xl border-border/40 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">

            {/* BRAND WITH SHINE EFFECT */}
            <Link
              to="/"
              className="group relative flex items-center gap-4 z-[110]"
            >
              <div className="relative overflow-hidden rounded-full">
                <img
                  src={logo}
                  alt="Varinda Solutions Logo"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-contain"
                />

                {/* Subtle shine effect on hover (desktop only) */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl tracking-tight text-foreground uppercase transition-colors duration-300 group-hover:text-primary">
                  Varinda Solutions
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.25em] text-muted-foreground font-medium uppercase transition-colors group-hover:text-foreground/80">
                  Agriculture & Farm
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full transition-all duration-300",
                        isActive ? "w-6" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* MOBILE TOGGLE */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden z-[110]"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={cn(
          "fixed inset-0 z-[90] md:hidden",
          "transition-transform transition-opacity duration-300 ease-out will-change-transform",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div
          className="
            h-full pt-24 px-4 pb-8
            flex flex-col gap-2
            bg-background
            md:bg-white/35
            md:backdrop-blur-xl
            md:backdrop-saturate-150
            border border-border/40
            shadow-xl
          "
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-6 py-5 rounded-2xl text-xl font-medium",
                  "transition-transform transition-opacity duration-300",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0",
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
