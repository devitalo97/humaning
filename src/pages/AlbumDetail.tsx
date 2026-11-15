import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, MapPin, Calendar, ZoomIn, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAlbumById } from "@/services/galleryService";
import { type Album } from "@/types/gallery";

export function AlbumDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState<Album | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            if (!id) {
                setLoading(false);
                navigate("/galeria");
                return;
            }
            try {
                const data = await getAlbumById(id);
                if (!data) {
                    navigate("/galeria");
                    return;
                }
                setAlbum(data);
            } catch (error) {
                console.error("Failed to fetch album", error);
                navigate("/galeria");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id, navigate]);

    if (loading) {
        return (
            <div
                role="status"
                aria-live="polite"
                className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-background"
            >
                <Loader2 className="w-8 h-8 animate-spin text-primary" aria-hidden="true" />
                <p className="text-muted-foreground">Carregando álbum...</p>
            </div>
        );
    }

    if (!album) return null;

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header / Hero */}
            <div className="bg-muted/20 border-b border-border/30">
                <div className="container mx-auto px-4 py-12">
                    <Button variant="ghost" asChild className="mb-6">
                        <Link to="/galeria" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                            Voltar para Galeria
                        </Link>
                    </Button>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wider mb-4">
                            <span className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                                <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {album.location}
                            </span>
                            <span className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1 rounded-full">
                                <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> {album.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{album.title}</h1>
                        <p className="text-lg text-muted-foreground">{album.description}</p>
                    </div>
                </div>
            </div>

            {/* Masonry Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {album.assets.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="break-inside-avoid"
                        >
                            <motion.button
                                type="button"
                                layoutId={`image-${index}`}
                                aria-label={`Ampliar foto ${index + 1} de ${album.title}`}
                                className="relative block w-full group rounded-xl overflow-hidden cursor-zoom-in bg-muted/30 border border-border/30 focus-visible:ring-2 focus-visible:ring-ring"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Foto ${index + 1} de ${album.title}`}
                                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="p-3 rounded-full bg-secondary text-secondary-foreground shadow-md">
                                        <ZoomIn className="w-6 h-6" aria-hidden="true" />
                                    </span>
                                </div>
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Visualização ampliada da foto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-xs p-4 md:p-10"
                    >
                        <motion.button
                            type="button"
                            aria-label="Fechar visualização"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4 inline-flex items-center justify-center min-h-11 min-w-11 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-accent p-2 z-50 shadow-lg"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" aria-hidden="true" />
                        </motion.button>

                        <motion.div
                            layoutId={selectedImage === album.assets.find(img => img === selectedImage) ? undefined : "modal-image"}
                            className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl border border-border"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Foto do evento em tamanho ampliado"
                                className="max-w-full max-h-[85vh] object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
