import Link from 'next/link'
import { ArrowRight, Clock, Users, Target, BookOpen, Award, CheckCircle, Star, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MAIN_PROGRAMS, PROGRAM_MODULES, COMPANY_INFO } from '@/constants'

export default function ProgramaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Nossos Programas
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transforme equipes através da análise de perfil comportamental e comunicação eficaz.
              Conheça nossos programas "Entender para Atender" e "Entender para se Conectar".
              Metodologia validada com {COMPANY_INFO.accuracy} de precisão.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contato">
                  Quero Contratar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/galeria">
                  Ver Resultados
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nossos Programas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Duas jornadas completas de transformação comportamental para diferentes necessidades organizacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {MAIN_PROGRAMS.map((program, index) => (
              <Card key={program.id} className={`border-2 shadow-lg ${index === 0 ? 'border-blue-200' : 'border-purple-200'}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${index === 0 ? 'bg-blue-100' : 'bg-purple-100'}`}>
                      <Target className={`h-6 w-6 ${index === 0 ? 'text-blue-600' : 'text-purple-600'}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{program.duration}</span>
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-blue-600" />
                        Público Alvo
                      </h4>
                      <ul className="space-y-2">
                        {program.targetAudience.map((audience, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{audience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-500" />
                        Principais Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {program.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-600" />
                        Entregáveis
                      </h4>
                      <ul className="space-y-2">
                        {program.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <BookOpen className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full" variant={index === 0 ? 'default' : 'outline'}>
                      <Link href="/contato">
                        {index === 0 ? 'Quero Contratar Agora' : 'Saber Mais'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Estrutura do Programa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Três módulos essenciais para uma transformação completa e duradoura.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROGRAM_MODULES.map((module, index) => (
              <Card key={module.id} className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Objetivos</h4>
                    <ul className="space-y-2">
                      {module.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Metodologia Única
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Combinação de tecnologia avançada com abordagem humanizada para resultados excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Diagnóstico</h3>
                <p className="text-sm text-muted-foreground">
                  Análise comportamental precisa e personalizada
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Imersão</h3>
                <p className="text-sm text-muted-foreground">
                  Workshop prático com exercícios reais
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Conteúdo</h3>
                <p className="text-sm text-muted-foreground">
                  Material didático de apoio contínuo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Aplicação prática e mensuração de impacto
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Resultados Comprovados
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empresas que transformaram suas equipes com nosso programa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "O programa Entender para Atender revolucionou a forma como nossa equipe se comunica.
                    O retorno sobre o investimento foi imenso."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full"></div>
                    <div>
                      <div className="font-semibold">Diretor {i}</div>
                      <div className="text-sm text-muted-foreground">Empresa de Tecnologia</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Investimento em Transformação
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  O valor do programa é personalizado de acordo com as necessidades da sua empresa
                  e número de participantes. Entre em contato para uma proposta personalizada.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contato">
                      Solicitar Proposta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Link href="/treinamentos">
                      Ver Cases de Sucesso
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Dúvidas Frequentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tire suas dúvidas sobre o programa Entender para Atender.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "O programa é online ou presencial?",
                a: "Ambas as opções estão disponíveis. Podemos adaptar o formato conforme as necessidades da sua empresa."
              },
              {
                q: "Quantos participantes por turma?",
                a: "Recomendamos turmas de 15-25 participantes para garantir a melhor experiência e interação."
              },
              {
                q: "Existe certificado?",
                a: "Sim, todos os participantes recebem certificado de conclusão do programa."
              },
              {
                q: "Como é feita a medição de resultados?",
                a: "Utilizamos avaliações antes e depois do programa, além de acompanhamento pós-treinamento."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pronto para Transformar sua Equipe?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Agende uma conversa com nossos especialistas e descubra como podemos ajudar sua empresa.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contato">
                  Quero Falar com um Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}