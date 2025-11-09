import Link from 'next/link'
import { ArrowRight, Users, Target, TrendingUp, Award, BookOpen, CheckCircle, Star, Building2, Landmark, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { COMPANY_INFO, MAIN_PROGRAMS, SERVICES_CATEGORIES } from '@/constants'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-humaning opacity-5"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up">
              Transforme sua Equipe com Nossos Programas
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto animate-fade-in-up">
              {COMPANY_INFO.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contato">
                  Quero Contratar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/programa">
                  Conhecer o Programa
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">{COMPANY_INFO.impact}</div>
                <div className="text-lg text-muted-foreground">Pessoas Impactadas</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">{COMPANY_INFO.accuracy}</div>
                <div className="text-lg text-muted-foreground">Precisão na Análise</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-lg text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Como Transformamos sua Equipe
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nossa abordagem combina análise comportamental científica com técnicas práticas para resultados reais.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Análise de Perfil</CardTitle>
                  <CardDescription>
                    Identificamos traços comportamentais individuais para potencializar pontos fortes e desenvolver áreas de melhoria.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Comunicação Eficaz</CardTitle>
                  <CardDescription>
                    Desenvolvemos habilidades de comunicação adaptadas a diferentes perfis comportamentais.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Resultados Medidos</CardTitle>
                  <CardDescription>
                    Aplicação prática das 6 leis da autorresponsabilidade para ambientes colaborativos de alta performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Quem Confia na Humaning
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mais de 50 organizações entre setor público e privado já transformaram suas equipes conosco
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {/* Government Sector Logos */}
            <div className="col-span-full mb-8">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full mb-4">
                  <Landmark className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-semibold text-sm">Setor Governamental</span>
                </div>
              </div>
            </div>

            {['Prefeitura de Vitória', 'Secretaria de Educação', 'Tribunal de Justiça', 'Assembleia Legislativa', 'Secretaria de Saúde', 'Prefeitura de Serra'].map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 text-center">{client}</p>
                </div>
              </div>
            ))}

            {/* Private Sector Logos */}
            <div className="col-span-full mt-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full mb-4">
                  <Briefcase className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold text-sm">Setor Privado</span>
                </div>
              </div>
            </div>

            {['Vale S.A.', 'ArcelorMittal', 'Petrobras', 'Samarco', 'Tupy', 'Localhost Tech'].map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building2 className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 text-center">{client}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/clientes">
                Ver Todos os Clientes e Cases de Sucesso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Program CTA */}
      <section className="py-20 gradient-humaning">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl">
                Nossos Programas de Transformação
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Conheça nossos programas "Entender para Atender" e "Entender para se Conectar".
                Metodologia exclusiva com validação acadêmica e 99% de precisão na análise comportamental.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Relatório Individual</h4>
                    <p className="text-sm text-muted-foreground">Análise completa do seu perfil comportamental</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">10 Horas de Imersão</h4>
                    <p className="text-sm text-muted-foreground">Workshop intensivo ou módulos flexíveis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Material Didático</h4>
                    <p className="text-sm text-muted-foreground">Livro "O Poder da Autorresponsabilidade"</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/programa">
                    Conhecer Nossos Programas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/clientes">
                    Ver Nossos Clientes
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/contato">Solicitar Proposta</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Áreas de Atuação
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Atendemos diversos segmentos com programas especializados para cada necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_CATEGORIES.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white hover:shadow-md transition-shadow">
                <BookOpen className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Depoimentos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Veja o que nossos clientes dizem sobre a transformação em suas equipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="relative">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "O programa transformou completamente a forma como nossa equipe se comunica e colabora."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full"></div>
                    <div>
                      <div className="font-semibold">Cliente {i}</div>
                      <div className="text-sm text-muted-foreground">Empresa parceira</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pronto para Transformar sua Equipe?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contato">
                  Quero Contratar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sobre">Conhecer a Humaning</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}