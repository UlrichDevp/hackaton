import { Shield, Heart, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo + Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg">
                SecureHer
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Renforcer la sécurité numérique des femmes et filles à travers
              l'éducation et la sensibilisation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Accueil
              </Link>
              <Link to="/evaluation" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Évaluation
              </Link>
              <Link to="/parcours" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Parcours Pédagogique
              </Link>
              <Link to="/quiz" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Quiz Interactifs
              </Link>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h4 className="font-heading font-bold mb-4">Nous contacter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Retrouvez-nous sur nos réseaux sociaux :
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
