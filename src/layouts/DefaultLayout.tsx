import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
                        className="flex items-center space-x-2 rounded-md focus-visible:outline-secondary"
                    >
                        <span className="text-2xl font-bold tracking-tight text-primary-foreground">
                            Human<span className="text-secondary">ing</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav aria-label="Navegação principal" className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/"
                            className="text-sm font-medium text-primary-foreground transition-colors hover:text-secondary focus-visible:outline-secondary py-2 px-1 rounded-xs"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm font-medium text-primary-foreground transition-colors hover:text-secondary focus-visible:outline-secondary py-2 px-1 rounded-xs"
                        >
                            Sobre
                        </Link>
                        <Link
                            to="/training"
                            className="text-sm font-medium text-primary-foreground transition-colors hover:text-secondary focus-visible:outline-secondary py-2 px-1 rounded-xs"
                        >
                            Treinamentos
                        </Link>
                        <Link
                            to="/galeria"
                            className="text-sm font-medium text-primary-foreground transition-colors hover:text-secondary focus-visible:outline-secondary py-2 px-1 rounded-xs"
                        >
                            Galeria
                        </Link>
                        <Button variant="secondary" className="focus-visible:ring-accent">
                            Fale Conosco
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle (WCAG 2.2 AA 2.5.8 Target Size >= 44x44px) */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
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
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium py-2 px-2 rounded-md text-primary-foreground hover:bg-muted/20 hover:text-secondary focus-visible:outline-secondary"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium py-2 px-2 rounded-md text-primary-foreground hover:bg-muted/20 hover:text-secondary focus-visible:outline-secondary"
                            >
                                Sobre
                            </Link>
                            <Link
                                to="/training"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium py-2 px-2 rounded-md text-primary-foreground hover:bg-muted/20 hover:text-secondary focus-visible:outline-secondary"
                            >
                                Treinamentos
                            </Link>
                            <Link
                                to="/galeria"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium py-2 px-2 rounded-md text-primary-foreground hover:bg-muted/20 hover:text-secondary focus-visible:outline-secondary"
                            >
                                Galeria
                            </Link>
                            <Button variant="secondary" className="w-full">
                                Fale Conosco
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
                            <h3 className="text-lg font-bold text-primary-foreground">
                                Human<span className="text-secondary">ing</span>
                            </h3>
                            <p className="text-sm text-primary-foreground/90 leading-relaxed">
                                Desenvolvendo pessoas e transformando resultados através do autoconhecimento.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-secondary">Links Rápidos</h4>
                            <ul className="space-y-2 text-sm text-primary-foreground/90">
                                <li>
                                    <Link to="/" className="hover:text-accent focus-visible:outline-secondary inline-block py-1">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-accent focus-visible:outline-secondary inline-block py-1">
                                        Sobre
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/training" className="hover:text-accent focus-visible:outline-secondary inline-block py-1">
                                        Treinamentos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/galeria" className="hover:text-accent focus-visible:outline-secondary inline-block py-1">
                                        Galeria
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-secondary">Contato</h4>
                            <ul className="space-y-2 text-sm text-primary-foreground/90">
                                <li>contato@humaning.com.br</li>
                                <li>(11) 99999-9999</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-secondary">Redes Sociais</h4>
                            <div className="flex space-x-4 text-sm text-accent">
                                <span>@humaning</span>
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
