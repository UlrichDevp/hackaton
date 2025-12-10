import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/evaluation", label: "Évaluation" },
  { href: "/parcours", label: "Parcours" },
  { href: "/quiz", label: "Quiz" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-hover transition-smooth">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1  w-full justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-smooth",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
      
          <div className="md:flex items-center gap-2 hidden">
            <Button  size="sm" asChild variant="hero-outline">
              <Link to="/signin">Connexion</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/signup">Inscription</Link>
            </Button>
          </div>
        </div>
           
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-smooth",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="hero-outline" size="sm" asChild onClick={() => setIsOpen(false)}>
                <Link to="/signin">Connexion</Link>
              </Button>
              <Button variant="hero" size="sm" asChild onClick={() => setIsOpen(false)}>
                <Link to="/signup">Insciption</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
