import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl shadow-xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-base font-semibold text-foreground">
                Utilizziamo i cookie
              </h3>
              <button
                onClick={handleReject}
                className="text-muted-foreground hover:text-foreground transition-colors sm:hidden"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare la tua esperienza.
              Puoi accettare o rifiutare i cookie non essenziali.{" "}
              <Link to="/cookie-policy" className="underline hover:text-foreground transition-colors">
                Scopri di più
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <Button onClick={handleAccept} size="sm" className="text-sm">
                Accetta tutti
              </Button>
              <Button onClick={handleReject} variant="outline" size="sm" className="text-sm">
                Solo necessari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
