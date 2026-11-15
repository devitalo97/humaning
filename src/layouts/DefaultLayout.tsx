import { Link, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import logoWhite from '@/assets/logo-white.svg';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Sobre' },
  { to: '/training', label: 'Treinamentos' },
  { to: '/galeria', label: 'Galeria' },
] as const;

const WHATSAPP_URL = 'https://wa.me/5527999580841';

export function DefaultLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Skip Link for WCAG 2.2 AA 2.4.1 Bypass Blocks */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-secondary focus:text-secondary-foreground focus:font-semibold focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-primary text-primary-foreground shadow-xs">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            aria-label="Humaning — Página inicial"
            className="flex items-center gap-3 rounded-md focus-visible:outline-secondary"
          >
            <img src={logoWhite} alt="" aria-hidden="true" width={38} height={35} className="h-9 w-auto object-contain" />
            <span className="text-2xl font-bold tracking-tight text-primary-foreground">
              Human<span className="text-secondary">ing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-primary-foreground transition-colors hover:text-secondary focus-visible:outline-secondary py-2 px-1 rounded-xs"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="secondary" className="font-bold focus-visible:ring-accent">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale Conosco pelo WhatsApp (+55 27 99958-0841)"
              >
                Fale Conosco
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle (WCAG 2.2 AA 2.5.8 Target Size >= 44x44px) */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="inline-flex items-center justify-center min-h-11 min-w-11 p-2 rounded-lg text-primary-foreground hover:bg-muted/20 hover:text-secondary focus-visible:outline-secondary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-border bg-primary text-primary-foreground p-4">
            <nav aria-label="Navegação móvel" className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium py-2 px-2 rounded-md text-primary-foreground hover:bg-muted/20 hover:text-secondary focus-visible:outline-secondary"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="secondary" className="w-full font-bold">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fale Conosco pelo WhatsApp (+55 27 99958-0841)"
                >
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" aria-label="Humaning — Página inicial" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-secondary">
                <img src={logoWhite} alt="" aria-hidden="true" width={42} height={39} className="h-10 w-auto object-contain" />
                <span className="text-xl font-bold tracking-tight text-primary-foreground">
                  Human<span className="text-secondary">ing</span>
                </span>
              </Link>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">
                Desenvolvendo pessoas e transformando resultados através do autoconhecimento.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-secondary">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/90">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-accent focus-visible:outline-secondary inline-block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-secondary">Contato</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/90">
                <li>
                  <a href="mailto:comercial@humaning.com.br" className="inline-flex items-center gap-2.5 hover:text-accent focus-visible:outline-secondary py-1 transition-colors">
                    <Mail className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" />
                    <span>comercial@humaning.com.br</span>
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-accent focus-visible:outline-secondary py-1 transition-colors">
                    <Phone className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" />
                    <span>+55 27 999580841</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-secondary">Redes Sociais</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/luizricardo.humane?obrf=OWJwZmFsZTB2YWFm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (@luizricardo.humane)"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-xl bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luiz-ricardo-pereira-de-souza-62634575/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Luiz Ricardo Pereira de Souza"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-xl bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-primary-foreground/85">
            © {new Date().getFullYear()} Humaning. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default DefaultLayout;
