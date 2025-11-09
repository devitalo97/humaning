import Link from 'next/link'
import { ArrowRight, MapPin, Calendar, CheckCircle, Users, Award, Building, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { TRAINING_PROJECTS, COMPANY_INFO } from '@/constants'

export default function TreinamentosPage() {
  const completedProjects = TRAINING_PROJECTS.filter(project => project.status === 'completed')

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800'
      case 'upcoming':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Finalizado'
      case 'ongoing':
        return 'Em Andamento'
      case 'upcoming':
        return 'Agendado'
      default:
        return status
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Treinamentos Realizados
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Conheça os projetos de transformação que já realizamos em diversas empresas
              e instituições. {COMPANY_INFO.impact} de impacto positivo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contato">
                  Quero um Treinamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/galeria">
                  Ver Fotos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">{TRAINING_PROJECTS.length}+</div>
              <div className="text-sm text-muted-foreground">Projetos Realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">{COMPANY_INFO.impact}</div>
              <div className="text-sm text-muted-foreground">Pessoas Capacitadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-muted-foreground">Cidades Atendidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Projetos de Destaque
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alguns dos nossos trabalhos mais recentes e impactantes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {completedProjects.slice(0, 6).map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.description && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tipos de Treinamentos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Oferecemos programas especializados para diferentes necessidades organizacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Para Empresas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Treinamentos corporativos personalizados para equipes de todos os portes
                </p>
                <Button variant="outline" size="sm">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Setor Público</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Programas especializados para secretarias e órgãos governamentais
                </p>
                <Button variant="outline" size="sm">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Workshops Abertos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Treinamentos abertos para profissionais de diferentes empresas
                </p>
                <Button variant="outline" size="sm">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Projects Accordion */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Todos os Projetos
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Histórico completo de treinamentos realizados.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {completedProjects.map((project) => (
                <AccordionItem key={project.id} value={project.id} className="border rounded-lg p-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full mr-4">
                      <div className="text-left">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                          <Calendar className="h-4 w-4 ml-4 mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(project.status)}`}>
                        {getStatusText(project.status)}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-4">
                      {project.description && (
                        <p className="text-muted-foreground">{project.description}</p>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Participantes
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Equipes de vendas, atendimento e liderança
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Duração
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            10 horas de imersão
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="font-semibold mb-2">Resultados Alcançados</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Melhoria na comunicação interna e externa
                            </span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Aumento da satisfação dos clientes
                            </span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Fortalecimento do trabalho em equipe
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              O que Dizem Nossos Clientes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Depoimentos reais de transformações organizacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Prefeitura Municipal",
                role: "Secretário de Administração",
                text: "O treinamento transformou nossa equipe. A comunicação melhorou 100% e os resultados são visíveis no atendimento ao cidadão."
              },
              {
                company: "Varejo Local",
                role: "Gerente de Loja",
                text: "Nossas vendas aumentaram 30% após o programa. A equipe entendeu a importância de entender o perfil do cliente."
              },
              {
                company: "Indústria",
                role: "RH Manager",
                text: "O programa Entender para Atender foi essencial para nosso desenvolvimento de lideranças. Altamente recomendado!"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-4 w-4 bg-yellow-400 rounded-full" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full"></div>
                    <div>
                      <div className="font-semibold">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Transforme sua Equipe Também
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Junte-se às empresas que já colheram os frutos de equipes mais comunicativas e produtivas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contato">
                    Quero um Treinamento Personalizado
                    <ArrowRight className="ml-2 h-5 w-5" />
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