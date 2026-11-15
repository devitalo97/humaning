import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getAlbums } from '@/services/galleryService';
import { PORTFOLIO_EVENTS } from '@/data/portfolioData';
import type { Album } from '@/types/gallery';
import { Camera, MapPin, Users, ArrowRight, Images, Sparkles, Calendar } from 'lucide-react';

export interface GalleryPreviewSectionProps {
  className?: string;
}

export const GalleryPreviewSection: React.FC<GalleryPreviewSectionProps> = ({
  className = '',
}) => {
  const [liveAlbums, setLiveAlbums] = useState<Album[]>([]);

  useEffect(() => {
    let isMounted = true;
    getAlbums()
      .then((albums) => {
        if (isMounted && Array.isArray(albums)) setLiveAlbums(albums.slice(0, 3));
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      aria-labelledby="gallery-preview-heading"
      className={`py-20 bg-accent/25 text-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho com Preview da Página Galeria */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-secondary font-bold text-xs uppercase tracking-wider mb-4">
              <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Prévia da Página Galeria • Portfólio em Ação</span>
            </div>
            <h2 id="gallery-preview-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Nossa atuação na prática.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Registros de capacitações realizadas com lideranças e equipes de instituições públicas e privadas, em programas voltados à comunicação, liderança e desenvolvimento de pessoas.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shrink-0 shadow-md">
            <Link to="/galeria" className="inline-flex items-center gap-2">
              <Images className="h-5 w-5 text-secondary" aria-hidden="true" />
              <span>Acessar Galeria Completa</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Grid dos 5 Eventos Documentados nas Páginas 9, 10 e 11 do PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PORTFOLIO_EVENTS.map((event, idx) => {
            const isFeatured = idx === 0;
            return (
              <article
                key={event.id}
                className={`rounded-2xl p-6 border-2 shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-2 bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border/40 hover:border-primary'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isFeatured ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-secondary'
                      }`}
                    >
                      {event.sector}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold ${isFeatured ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}>
                      <MapPin className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>
                  <h3 className={`text-xl font-extrabold mb-1.5 leading-snug ${isFeatured ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {event.title}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isFeatured ? 'text-secondary' : 'text-primary'}`}>
                    {event.program}
                  </p>
                  <p className={`text-sm leading-relaxed mb-5 ${isFeatured ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}>
                    {event.description}
                  </p>
                </div>
                <div
                  className={`pt-4 border-t flex items-center justify-between gap-2 text-xs font-bold ${
                    isFeatured ? 'border-primary-foreground/15 text-primary-foreground/90' : 'border-border/30 text-muted-foreground'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-secondary shrink-0" aria-hidden="true" />
                    {event.audience}
                  </span>
                  <Link
                    to="/galeria"
                    className={`inline-flex items-center gap-1 font-extrabold underline-offset-4 hover:underline shrink-0 ${
                      isFeatured ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    <span>Ver fotos</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Álbuns dinâmicos da Galeria (quando disponíveis) */}
        {liveAlbums.length > 0 && (
          <div className="mb-10 pt-8 border-t border-border/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Álbuns Recentes na Galeria Digital</span>
              </h3>
              <Link to="/galeria" className="text-sm font-extrabold text-primary hover:underline inline-flex items-center gap-1">
                <span>Ver todos os álbuns</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {liveAlbums.map((album) => (
                <Link
                  key={album.id}
                  to={`/galeria/${album.id}`}
                  className="group bg-background rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="aspect-video w-full bg-primary/10 overflow-hidden relative">
                    <img src={album.coverImage} alt={album.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">{album.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{album.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/20 text-xs font-bold text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {album.date}
                      </span>
                      <span className="text-primary font-extrabold">Abrir álbum →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Callout Página 11 do PDF */}
        <div className="rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <p className="font-extrabold text-sm md:text-base text-center sm:text-left">
            “Experiências que fortalecem a gestão pública e o desenvolvimento de lideranças.”
          </p>
          <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shrink-0">
            <Link to="/galeria">Explorar Galeria de Fotos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default GalleryPreviewSection;
