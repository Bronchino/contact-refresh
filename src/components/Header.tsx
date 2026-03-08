import { useState, useEffect } from "react";
import { Phone, FileText, Menu, X, Mail } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logoCr from "@/assets/logo-cr.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Servizi", href: "/servizi" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={logoCr}
              alt="Dott. Claudio Rossi"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <NavLink
                key={href}
                to={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground hover:text-accent"
                }`}
                activeClassName="!text-accent font-semibold"
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Area Referti */}
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                scrolled
                  ? "border-border text-foreground hover:border-primary hover:text-primary"
                  : "border-primary-foreground/40 text-primary-foreground hover:border-accent hover:text-accent"
              }`}
            >
              <FileText className="w-4 h-4" />
              Area Referti
            </a>

            {/* Phone */}
            <a
              href="tel:0915558609"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              <Phone className="w-4 h-4" />
              091 5558609
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                  aria-label="Apri menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-card">
                <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
                <nav className="flex flex-col gap-1 mt-8">
                  {navLinks.map(({ label, href }) => (
                    <NavLink
                      key={href}
                      to={href}
                      className="text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-secondary transition-colors font-medium"
                      activeClassName="!text-accent bg-secondary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">Accesso Area Referti</span>
                  </a>
                  <a
                    href="tel:0915558609"
                    className="flex items-center gap-3 text-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">091 5558609</span>
                  </a>
                  <a
                    href="mailto:claudio.rossi@me.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">claudio.rossi@me.com</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
