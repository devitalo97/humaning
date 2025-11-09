import Link from 'next/link'
import { Mail, Linkedin, Instagram, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO, CONTACT_INFO, NAVIGATION_ITEMS } from '@/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <span className="text-sm font-bold">H</span>
              </div>
              <span className="font-bold text-lg">Humaning</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Análise de Perfil Comportamental</li>
              <li>Treinamentos em Comunicação</li>
              <li>Desenvolvimento de Liderança</li>
              <li>Capacitação em Vendas</li>
              <li>Programa Entender para Atender</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@humaning.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(27) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Espírito Santo, Brasil</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Humaning. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}