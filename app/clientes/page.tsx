import Link from 'next/link'
import { Building2, Users, Award, CheckCircle, ArrowRight, Briefcase, Landmark, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { COMPANY_INFO } from '@/constants'

export default function ClientesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Clientes que Confiam na Humaning
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {COMPANY_INFO.impact} de profissionais transformados em mais de 15 cidades.
              Orgãos governamentais e empresas privadas confiam em nossa metodologia para desenvolver suas equipes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contato">
                  Junte-se aos Nossos Clientes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/programa">
                  Conhecer Nossos Programas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Showcase */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Empresas e Orgãos Parceiros
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Algumas das organizações que já transformaram suas equipes com nossos programas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Governmental Sector */}
            <div className="col-span-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                  <Landmark className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-semibold">Setor Governamental</span>
                </div>
              </div>
            </div>

            {/* Government Client Logos */}
            {[
              { name: 'Prefeitura de Colatina', sector: 'government' },
              { name: 'Prefeitura de Vitória', sector: 'government' },
              { name: 'Secretaria de Educação do ES', sector: 'government' },
              { name: 'Prefeitura de Serra', sector: 'government' },
              { name: 'Secretaria de Saúde', sector: 'government' },
              { name: 'Prefeitura de Cariacica', sector: 'government' },
              { name: 'Assembleia Legislativa', sector: 'government' },
              { name: 'Tribunal de Justiça', sector: 'government' },
              { name: 'Prefeitura de Vila Velha', sector: 'government' },
              { name: 'Secretaria de Administração', sector: 'government' },
              { name: 'Prefeitura de Guarapari', sector: 'government' },
              { name: 'Governo do Estado', sector: 'government' }
            ].map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{client.name}</p>
                </div>
              </div>
            ))}

            {/* Private Sector */}
            <div className="col-span-full mt-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                  <Briefcase className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">Setor Privado</span>
                </div>
              </div>
            </div>

            {/* Private Client Logos */}
            {[
              { name: 'Grupo Boticário', sector: 'private' },
              { name: 'Vale S.A.', sector: 'private' },
              { name: 'ArcelorMittal', sector: 'private' },
              { name: 'Petrobras', sector: 'private' },
              { name: 'Samarco', sector: 'private' },
              { name: 'ArcelorMittal', sector: 'private' },
              { name: 'Vale', sector: 'private' },
              { name: 'Tupy', sector: 'private' },
              { name: 'Suzano', sector: 'private' },
              { name: 'Eucatex', sector: 'private' },
              { name: 'Localhost Tech', sector: 'private' },
              { name: 'StartUp Hub ES', sector: 'private' }
            ].map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Histórias de Sucesso
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Conheça como transformamos organizações de diferentes setores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Government Success Story */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Landmark className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Governo
                  </span>
                </div>
                <CardTitle>Prefeitura de Colatina</CardTitle>
                <CardDescription>
                  Transformação completa da equipe municipal através do programa "Entender para Atender"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-xs text-muted-foreground">Melhoria no atendimento</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">50+</div>
                      <div className="text-xs text-muted-foreground">Funcionários capacitados</div>
                    </div>
                  </div>

                  <blockquote className="text-sm text-muted-foreground italic">
                    "O programa transformou completamente a forma como nossa equipe atende o cidadão. O retorno foi imediato e visível."
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="text-sm font-semibold">Secretário de Administração</div>
                      <div className="text-xs text-muted-foreground">Prefeitura de Colatina</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Private Success Story */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    Privado
                  </span>
                </div>
                <CardTitle>Varejo Local</CardTitle>
                <CardDescription>
                  Aumento de 30% nas vendas após implementação do programa comportamental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">30%</div>
                      <div className="text-xs text-muted-foreground">Aumento em vendas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-xs text-muted-foreground">Satisfação</div>
                    </div>
                  </div>

                  <blockquote className="text-sm text-muted-foreground italic">
                    "Entender o perfil do cliente mudou completamente nossa abordagem de vendas. Resultados impressionantes!"
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="text-sm font-semibold">Gerente de Loja</div>
                      <div className="text-xs text-muted-foreground">Rede Varejista</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industry Success Story */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    Indústria
                  </span>
                </div>
                <CardTitle>Indústria Metalúrgica</CardTitle>
                <CardDescription>
                  Redução de conflitos e aumento de produtividade na linha de produção
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">60%</div>
                      <div className="text-xs text-muted-foreground">Redução de conflitos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">25%</div>
                      <div className="text-xs text-muted-foreground">Aumento de produtividade</div>
                    </div>
                  </div>

                  <blockquote className="text-sm text-muted-foreground italic">
                    "A comunicação entre equipes melhorou drasticamente. O ambiente de trabalho está muito mais colaborativo."
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="text-sm font-semibold">HR Manager</div>
                      <div className="text-xs text-muted-foreground">Indústria</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nosso Impacto nos Setores
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Números que comprovam nossa eficácia em diferentes organizações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Landmark className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">Setor Governamental</CardTitle>
                </div>
                <CardDescription>
                  Transformando o serviço público através da análise comportamental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prefeituras atendidas</span>
                    <span className="font-bold text-blue-600">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Servidores capacitados</span>
                    <span className="font-bold text-green-600">2.500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Secretarias parceiras</span>
                    <span className="font-bold text-purple-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Satisfação</span>
                    <span className="font-bold text-orange-600">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">Setor Privado</CardTitle>
                </div>
                <CardDescription>
                  Impulsionando resultados em empresas de todos os portes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Empresas clientes</span>
                    <span className="font-bold text-blue-600">35+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Colaboradores capacitados</span>
                    <span className="font-bold text-green-600">1.900+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Setores atendidos</span>
                    <span className="font-bold text-purple-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ROI médio</span>
                    <span className="font-bold text-orange-600">320%</span>
                  </div>
                </div>
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
              O que Dizem Nossos Clientes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Depoimentos reais de líderes que transformaram suas equipes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "A metodologia da Humaning superou todas as expectativas. A transformação na nossa equipe foi visível desde o primeiro módulo."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full"></div>
                    <div>
                      <div className="font-semibold">Diretor {i}</div>
                      <div className="text-sm text-muted-foreground">
                        {i <= 3 ? 'Setor Governamental' : 'Setor Privado'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tipos de Parceria
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Adaptamos nossos programas para diferentes necessidades organizacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Programas Corporativos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Soluções personalizadas para empresas de todos os portes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Landmark className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Contratos Governamentais</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Atendimento às exigências e processos do setor público
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Workshops Abertos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Programas para profissionais de diferentes empresas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Consultoria Continuada</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Acompanhamento e suporte pós-treinamento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Junte-se às Empresas que Transformam com a Humaning
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Seja você do setor público ou privado, temos a solução ideal para sua equipe.
                Descubra por que mais de {COMPANY_INFO.impact} profissionais já confiam em nossa metodologia.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contato">
                    Solicitar Proposta Personalizada
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/treinamentos">
                    Ver Casos de Sucesso
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