import { Award, Users, Target, BookOpen, CheckCircle, TrendingUp, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { COMPANY_INFO, FOUNDER } from '@/constants'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Sobre a Humaning
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nossa Missão e Valores
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Guiados por princípios de humanização e respeito, buscamos transformar vidas através do autoconhecimento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="relative">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Nossa Missão</CardTitle>
                <CardDescription className="text-lg">
                  {COMPANY_INFO.mission}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {COMPANY_INFO.values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Methodology */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tecnologia e Metodologia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Utilizamos ferramentas cientificamente validadas para garantir resultados precisos e confiáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>CIS Assessment</CardTitle>
                <CardDescription>
                  Software de inteligência comportamental com validação acadêmica da UFC
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>99% de Precisão</CardTitle>
                <CardDescription>
                  Coeficiente alpha de Cronbach garante confiabilidade nas análises
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Abordagem Prática</CardTitle>
                <CardDescription>
                  Metodologia aplicada com resultados imediatos e mensuráveis
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Nosso Fundador
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Liderança especializada com vasta experiência em comportamento organizacional.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">{FOUNDER.name}</h3>
                      <p className="text-lg text-muted-foreground">{FOUNDER.role}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {FOUNDER.bio}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Experiência</h4>
                          <p className="text-sm text-muted-foreground">{FOUNDER.experience}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <GraduationCap className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Formação</h4>
                          <ul className="text-sm text-muted-foreground">
                            {FOUNDER.credentials.map((credential, index) => (
                              <li key={index}>• {credential}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">LR</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Luiz Ricardo</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nosso Impacto
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Números que demonstram a transformação que promovemos nas organizações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.400+</div>
              <div className="text-sm text-muted-foreground">Pessoas Impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Transforme sua Equipe Hoje
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Junte-se às empresas que já transformaram suas equipes com a metodologia Humaning.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contato">
                    Quero Transformar minha Equipe
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/programa">
                    Conhecer o Programa
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}