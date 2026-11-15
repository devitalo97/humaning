import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, BookOpen, Briefcase, ArrowRight, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import luizRicardoPhoto from "@/assets/luiz-ricardo.jpg";

export interface CredentialItemProps {
    icon: React.ElementType;
    text: string;
}

export function AboutPreviewSection() {
    const credentials: CredentialItemProps[] = [
        { icon: GraduationCap, text: "Administrador de Empresas – CRA/ES 30449" },
        { icon: Award, text: "MBA em Gestão Empresarial – FGV" },
        { icon: Award, text: "MBA em Gestão Comercial e Marketing – FGV" },
        { icon: BookOpen, text: "Mestrando em Psicologia Organizacional – Must University" },
    ];

    return (
        <section className="py-20 bg-muted/15 border-y border-border/30">
            <div className="container px-4 mx-auto space-y-14">
                {/* Header & Link to /about */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-3xl space-y-3 border-l-4 border-secondary pl-5">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            Sobre a Humaning • Quem Está por Trás
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Desenvolvimento humano com{" "}
                            <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">
                                conhecimento e experiência.
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground pt-2">
                            A <strong className="text-foreground">Humaning Capacitações e Palestras</strong> é uma empresa especializada no desenvolvimento de pessoas, lideranças e equipes, com atuação em organizações públicas e privadas.
                        </p>
                    </div>
                    <Button asChild variant="outline" size="lg" className="shrink-0">
                        <Link to="/about">
                            Ver Página Sobre Completa
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>

                {/* Main Bio Card (PDF Page 3) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-card rounded-3xl overflow-hidden border border-border/40 shadow-xs grid grid-cols-1 lg:grid-cols-12"
                >
                    <div className="lg:col-span-4 min-h-[380px] lg:min-h-full relative overflow-hidden group">
                        <img
                            src={luizRicardoPhoto}
                            alt="Luiz Ricardo Pereira de Souza — Capacitador da Humaning"
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/40 to-transparent flex items-end p-6">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider mb-2">
                                    Capacitador
                                </span>
                                <h3 className="text-2xl font-bold text-primary-foreground">
                                    Luiz Ricardo Pereira de Souza
                                </h3>
                                <p className="text-sm text-accent font-medium">
                                    Especialista em Gestão de Perfil Comportamental
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between space-y-8">
                        <div className="space-y-6">
                            <div className="p-5 rounded-2xl bg-primary text-primary-foreground border-r-8 border-secondary">
                                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
                                    Luiz Ricardo Pereira de Souza
                                </h3>
                                <p className="text-secondary italic font-medium">
                                    Capacitador • 25 anos de experiência em liderança, atendimento e desenvolvimento humano
                                </p>
                            </div>

                            <ul className="divide-y divide-border/30">
                                {credentials.map((cred) => (
                                    <li key={cred.text} className="py-3.5 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                                            <cred.icon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <span className="border-l-2 border-secondary pl-3 font-semibold text-card-foreground">
                                            {cred.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-muted/20 border border-border/30 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center shrink-0 mt-1">
                                <Briefcase className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="text-base italic text-foreground border-l-4 border-secondary pl-4 leading-relaxed">
                                Trajetória profissional com experiência em grandes empresas do Espírito Santo, como a <strong>Rádio Nova Onda FM</strong>, a <strong>Rede Gazeta</strong> e a <strong>Findes</strong>, reunindo vivência no ambiente corporativo e atuação no desenvolvimento de pessoas.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Behavioral Market Stats Preview from /about */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-7 rounded-2xl bg-primary text-primary-foreground border border-border flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                            <TrendingUp className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-1">87%</div>
                            <p className="text-primary-foreground/95 font-medium">
                                das organizações demitem profissionais em razão de suas atitudes e comportamento (Revista Você SA).
                            </p>
                        </div>
                    </div>

                    <div className="p-7 rounded-2xl bg-card border border-border/40 flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                            <Users className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">20%</div>
                            <p className="text-muted-foreground font-medium">
                                apenas das pessoas acreditam que seus cargos permitem executar no dia a dia o que fazem de melhor (Instituto Gallup).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
