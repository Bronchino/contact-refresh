import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Info */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-4">Dott. Claudio Rossi</h3>
          <p className="text-sm text-background/70 leading-relaxed">
            Specialista in Ostetricia e Ginecologia. Dirigente Medico presso l'AOOR Villa Sofia Cervello di Palermo.
          </p>
        </div>

        {/* Navigazione */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">Navigazione</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/" className="hover:text-background transition-colors">Home</Link></li>
            <li><Link to="/chi-sono" className="hover:text-background transition-colors">Chi sono</Link></li>
            <li><Link to="/servizi" className="hover:text-background transition-colors">Servizi</Link></li>
            <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
            <li><Link to="/contatti" className="hover:text-background transition-colors">Contatti</Link></li>
          </ul>
        </div>

        {/* Articoli */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">Articoli</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/blog/prima-visita-ginecologica" className="hover:text-background transition-colors">Prima visita ginecologica</Link></li>
            <li><Link to="/blog/chirurgia-laparoscopica" className="hover:text-background transition-colors">Chirurgia laparoscopica</Link></li>
            <li><Link to="/blog/screening-prenatale" className="hover:text-background transition-colors">Screening prenatale</Link></li>
            <li><Link to="/blog/infertilita" className="hover:text-background transition-colors">Infertilità di coppia</Link></li>
            <li><Link to="/blog/gravidanza-extrauterina" className="hover:text-background transition-colors">Gravidanza extrauterina</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4">Contatti</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Via Marchese Ugo 56, Palermo</span>
            </li>
            <li>
              <a href="tel:0915558609" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                091 555 8609
              </a>
            </li>
            <li>
              <a href="mailto:claudio.rossi@me.com" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                claudio.rossi@me.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/50">
        <p>© {new Date().getFullYear()} Dott. Claudio Rossi — Tutti i diritti riservati</p>
        <p className="mt-1">Contenuti a scopo informativo e non sostitutivi del parere medico.</p>
        <p className="mt-1">P.IVA 06746840823 — Iscritto all'Ordine dei Medici di Palermo n. 11575</p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link>
          <span className="text-background/30">|</span>
          <Link to="/cookie-policy" className="hover:text-background transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
