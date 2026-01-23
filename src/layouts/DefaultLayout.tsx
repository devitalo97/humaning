import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function DefaultLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Humaning
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                            Home
                        </Link>
                        <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
                            Sobre
                        </Link>
                        <Link to="/training" className="text-sm font-medium transition-colors hover:text-primary">
                            Treinamentos
                        </Link>
                        <Link to="/galeria" className="text-sm font-medium transition-colors hover:text-primary">
                            Galeria
                        </Link>
                        <Button>Fale Conosco</Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-foreground"
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden border-b bg-background p-4">
                        <nav className="flex flex-col space-y-4">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:text-primary">
                                Home
                            </Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:text-primary">
                                Sobre
                            </Link>
                            <Link to="/training" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:text-primary">
                                Treinamentos
                            </Link>
                            <Link to="/galeria" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:text-primary">
                                Galeria
                            </Link>
                            <Button className="w-full">Fale Conosco</Button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t bg-muted/20">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Humaning</h3>
                            <p className="text-sm text-muted-foreground">
                                Desenvolvendo pessoas e transformando resultados através do autoconhecimento.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Links Rápidos</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                                <li><Link to="/about" className="hover:text-primary">Sobre</Link></li>
                                <li><Link to="/training" className="hover:text-primary">Treinamentos</Link></li>
                                <li><Link to="/galeria" className="hover:text-primary">Galeria</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contato</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>contato@humaning.com.br</li>
                                <li>(11) 99999-9999</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Redes Sociais</h4>
                            <div className="flex space-x-4">
                                {/* Icons would go here */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Humaning. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
