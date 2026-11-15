import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAlbums } from "@/services/galleryService";
import { type Album } from "@/types/gallery";

export function GalleryPage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAlbums();
                setAlbums(data);
            } catch (error) {
                console.error("Failed to fetch albums", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section
                ref={ref}
                className="relative h-[40vh] flex items-center justify-center overflow-hidden border-b border-border/30 bg-muted/20"
            >
                <motion.div style={{ opacity, y }} className="text-center z-10 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-foreground"
                    >
                        Galeria de{" "}
                        <span className="inline-block bg-primary text-secondary px-3 py-0.5 rounded-lg">
                            Eventos
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Momentos que transformam. Explore nossos registros de capacitações, workshops e palestras.
                    </motion.p>
                </motion.div>
            </section>

            {/* Albums List */}
            <div className="container mx-auto px-4 py-20 min-h-[50vh]">
                {loading ? (
                    <div
                        role="status"
                        aria-live="polite"
                        className="flex flex-col items-center justify-center h-40 space-y-4"
                    >
                        <Loader2 className="w-8 h-8 animate-spin text-primary" aria-hidden="true" />
                        <p className="text-muted-foreground">Carregando galeria...</p>
                    </div>
                ) : albums.length === 0 ? (
                    <div className="text-center space-y-4">
                        <p className="text-muted-foreground">Nenhum álbum encontrado.</p>
                    </div>
                ) : (
                    <div className="space-y-32">
                        {albums.map((album, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.article
                                    key={album.id}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
                                >
                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg border border-border/40">
                                        <div className="relative aspect-4/3 group cursor-pointer">
                                            <Link to={`/galeria/${album.id}`} className="block w-full h-full">
                                                <img
                                                    src={album.coverImage}
                                                    alt={album.title}
                                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full md:w-1/2 space-y-6">
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wider">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                    <MapPin className="w-4 h-4" aria-hidden="true" /> {album.location}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground">
                                                    <Calendar className="w-4 h-4" aria-hidden="true" /> {album.date}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{album.title}</h2>
                                            <p className="text-muted-foreground text-lg leading-relaxed">
                                                {album.description}
                                            </p>
                                        </div>

                                        <div className="pt-4">
                                            <Button asChild size="lg" className="group">
                                                <Link to={`/galeria/${album.id}`}>
                                                    Ver Fotos do Evento
                                                    <ArrowRight
                                                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
