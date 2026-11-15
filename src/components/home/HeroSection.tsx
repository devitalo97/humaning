import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Building2, Landmark, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.svg";

export interface HeroMetricItemProps {
    icon: React.ElementType;
    value: string;
    label: string;
    detail: string;
}

export function HeroSection() {
    const metrics: HeroMetricItemProps[] = [
        {
            icon: Users,
            value: "+8.570",
            label: "Profissionais capacitados",
            detail: "Participantes em nossos programas desde 2022",
        },
        {
            icon: Star,
            value: "5,0 ★",
            label: "94 avaliações no Google",
            detail: "Nota máxima no Google Meu Negócio",
        },
        {
            icon: Landmark,
            value: "10+",
            label: "Instituições Públicas",
            detail: "Prefeituras, Câmaras e Secretarias Municipais",
        },
        {
            icon: Building2,
            value: "30+",
            label: "Empresas e Entidades",
            detail: "Organizações privadas e instituições de ensino",
        },
    ];

    return (
        <section className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-background border-b border-border/30">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary text-primary-foreground border border-border shadow-xs"
                    >
                        <img
                            src={logoWhite}
                            alt=""
                            aria-hidden="true"
                            width={24}
                            height={22}
                            className="h-5 w-auto object-contain"
                        />
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">
                            Portfólio Institucional
                        </span>
                        <span className="text-xs md:text-sm text-primary-foreground/90 hidden sm:inline">
                            • Capacitações e Palestras
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
                    >
                        Desenvolvimento Humano para Fortalecer{" "}
                        <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-2xl mt-1">
                            a Gestão Pública
                        </span>{" "}
                        e{" "}
                        <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">
                            Privada
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <p className="text-lg md:text-2xl text-muted-foreground italic border-l-4 border-secondary pl-4 text-left sm:text-center sm:border-l-0 sm:pl-0">
                            Comunicação, liderança e pessoas em alta performance no serviço público e no ambiente corporativo.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 h-14 shadow-md">
                            <Link to="/training">
                                Explorar Soluções e Treinamentos
                                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="w-full sm:w-auto text-base px-8 h-14 shadow-xs"
                        >
                            <a
                                href="https://wa.me/5527999580841"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Award className="mr-2 h-5 w-5" aria-hidden="true" />
                                Solicitar Proposta Institucional
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Key Institutional Impact Strip */}
                <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.08 }}
                            className="p-6 rounded-2xl bg-card border border-border/40 hover:border-primary shadow-xs transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-3xl md:text-4xl font-extrabold text-primary">
                                    {metric.value}
                                </span>
                                <div className="w-11 h-11 rounded-xl bg-primary text-secondary flex items-center justify-center shrink-0">
                                    <metric.icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                            </div>
                            <h2 className="text-base font-bold text-card-foreground mb-1">
                                {metric.label}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-snug">
                                {metric.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-accent/20 rounded-full blur-3xl -z-10 pointer-events-none"
            />
        </section>
    );
}
