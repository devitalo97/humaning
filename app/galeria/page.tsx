import Link from 'next/link'
import { ArrowRight, Camera, Video, MapPin, Calendar, Play, Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TRAINING_PROJECTS } from '@/constants'

export default function GaleriaPage() {
  // Mock gallery items - in a real app, these would come from a database or CMS
  const galleryItems = [
    {
      id: '1',
      type: 'image' as const,
      title: 'Workshop Boa Esperança',
      location: 'Boa Esperança/ES',
      date: '2024',
      category: 'Workshop'
    },
    {
      id: '2',
      type: 'image' as const,
      title: 'Treinamento Pinheiros',
      location: 'Pinheiros/ES',
      date: '2024',
      category: 'Treinamento'
    },
    {
      id: '3',
      type: 'video' as const,
      title: 'Depoimentos Colatina',
      location: 'Colatina/ES',
      date: '2023',
      category: 'Depoimentos'
    },
    {
      id: '4',
      type: 'image' as const,
      title: 'Equipes em Ação',
      location: 'Vitória/ES',
      date: '2024',
      category: 'Dinâmica'
    },
    {
      id: '5',
      type: 'video' as const,
      title: 'Resultados Alcançados',
      location: 'Serra/ES',
      date: '2024',
      category: 'Resultados'
    },
    {
      id: '6',
      type: 'image' as const,
      title: 'Certificação',
      location: 'Cariacica/ES',
      date: '2023',
      category: 'Conclusão'
    },
    {
      id: '7',
      type: 'image' as const,
      title: 'Dinâmica de Grupo',
      location: 'Vila Velha/ES',
      date: '2024',
      category: 'Dinâmica'
    },
    {
      id: '8',
      type: 'video' as const,
      title: 'Entrevista Fundador',
      location: 'Studio Online',
      date: '2024',
      category: 'Entrevista'
    },
    {
      id: '9',
      type: 'image' as const,
      title: 'Turma de Lideranças',
      location: 'Guarapari/ES',
      date: '2023',
      category: 'Liderança'
    }
  ]

  const categories = ['Todos', 'Workshop', 'Treinamento', 'Depoimentos', 'Dinâmica', 'Resultados', 'Conclusão', 'Entrevista', 'Liderança']

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Galeria de Transformações
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Acompanhe através de fotos e vídeos o impacto real de nossos treinamentos
              na vida de profissionais e empresas por todo o Espírito Santo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contato">
                  Quero Participar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/treinamentos">
                  Ver Projetos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">{galleryItems.length}+</div>
              <div className="text-sm text-muted-foreground">Mídias Capturadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">{TRAINING_PROJECTS.length}</div>
              <div className="text-sm text-muted-foreground">Cidades Atendidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-muted-foreground">Transformação Real</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Todos' ? 'default' : 'outline'}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video bg-muted">
                  {/* Placeholder for image/video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    {item.type === 'video' ? (
                      <div className="text-center">
                        <Play className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Vídeo</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Camera className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Foto</p>
                      </div>
                    )}
                  </div>

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      {item.type === 'video' ? <Play className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase">
                        {item.type === 'video' ? 'Vídeo' : 'Foto'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Destaque do Mês
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Assista aos resultados impressionantes alcançados por nossos clientes.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors cursor-pointer">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Transformação Completa - Caso de Sucesso</h3>
                    <p className="text-muted-foreground">Empresa Municipal de Boa Esperança</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-muted-foreground">Funcionários Capacitados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-muted-foreground">Melhoria no Atendimento</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-muted-foreground">Meses de Transformação</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Siga Nossas Transformações
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Acompanhe o dia a dia de nossos treinamentos no Instagram.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="relative aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-pink-600" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="https://instagram.com/humaning" target="_blank" rel="noopener noreferrer">
                Ver no Instagram
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Faça Parte da Nossa História
              </h2>
              <p className="text-lg mb-8 opacity-90">
                O próximo capítulo da transformação pode ser o da sua empresa.
                Registramos cada sucesso para inspirar novas jornadas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contato">
                    Quero Ser o Próximo Destaque
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/sobre">
                    Conhecer Nossa História
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

// Instagram icon component
function Instagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9997 11.5702C16.1231 13.5301 15.281 15.4449 13.8497 16.7315C12.4184 18.018 10.551 18.5345 8.69866 18.1246C6.84632 17.7147 5.34491 16.4269 4.60345 14.6582C3.86199 12.8895 4.01167 10.8668 5.00977 9.2307C6.00788 7.59462 7.735 6.57236 9.63878 6.51535C11.5426 6.45834 13.3216 7.37301 14.4093 8.9442C15.497 10.5154 15.765 12.5315 15.128 14.3402"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 6.5H17.51"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}