
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
                navigate("/galeria"); // Redirect on error
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Carregando álbum...</p>
            </div>
        );
    }

    if (!album) return null;

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header / Hero */}
            <div className="bg-muted/30 border-b">
                <div className="container mx-auto px-4 py-12">
                    <Button variant="ghost" asChild className="mb-6 hover:bg-transparent pl-0 text-muted-foreground hover:text-foreground">
                        <Link to="/galeria" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Galeria
                        </Link>
                    </Button>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-4 text-sm text-primary font-medium uppercase tracking-wider mb-4">
                            <span className="flex items-center gap-1 bg-background px-3 py-1 rounded-full border">
                                <MapPin className="w-3 h-3" /> {album.category}
                            </span>
                            <span className="flex items-center gap-1 bg-background px-3 py-1 rounded-full border">
                                <Calendar className="w-3 h-3" /> {album.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{album.title}</h1>
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
                            <motion.div
                                layoutId={`image - ${index} `}
                                className="relative group rounded-xl overflow-hidden cursor-zoom-in bg-muted"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Photo ${index + 1} from ${album.title} `}
                                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            layoutId={selectedImage === album.assets.find(img => img === selectedImage) ? undefined : "modal-image"}
                            // Note: strictly matching layoutId is tricky with basic strings, avoiding complex matching for now to ensure stability
                            className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Full View"
                                className="max-w-full max-h-[85vh] object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
