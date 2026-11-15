import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Brain, Target, Users, Zap, MessageCircle, Ear } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.svg";

export function HomePage() {
    const benefits = [
        { icon: Brain, title: "Entender medos e motivações", description: "Descubra o que realmente impulsiona suas decisões." },
        { icon: Users, title: "Relacionamentos Harmônicos", description: "Construa conexões mais fortes e saudáveis." },
        { icon: Target, title: "Perfis Comportamentais", description: "Compreenda as diferenças de personalidade." },
        { icon: Zap, title: "Desempenho Profissional", description: "Maximize seu potencial no ambiente de trabalho." },
        { icon: MessageCircle, title: "Comunicação Eficiente", description: "Seja entendido com clareza e objetividade." },
        { icon: Ear, title: "Evitar Ruídos", description: "Elimine falhas na comunicação interpessoal." },
    ];

    const testimonials = [
        { name: "André Cavalcante", role: "Engenheiro", text: "Consegui me entender e buscar aperfeiçoamento." },
        { name: "Neres José", role: "Radialista", text: "Forneceu uma visão clara das minhas forças e fraquezas." },
        { name: "Ítalo de Souza", role: "Desenvolvedor", text: "A devolutiva e o relatório foram precisos." },
    ];

    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-background">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary border border-border shadow-md"
                        >
                            <img
                                src={logoWhite}
                                alt="Logo Humaning"
                                width={52}
                                height={48}
                                className="h-12 w-auto object-contain"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
                        >
                            Quanto mais você se{" "}
                            <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">
                                conhece
                            </span>
                            , mais você{" "}
                            <span className="inline-block bg-primary text-secondary px-3 py-0.5 rounded-lg">
                                cresce
                            </span>
                            .
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground"
                        >
                            Descubra seu perfil comportamental e transforme sua vida pessoal e profissional.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button asChild size="lg" className="text-lg px-8 h-14">
                                <Link to="/training">
                                    Conheça nossos serviços <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
                {/* Abstract Background Element */}
                <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl -z-10 pointer-events-none"
                />
            </section>

            {/* Benefits Section */}
            <section className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Por que investir em autoconhecimento?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Benefícios tangíveis que você alcançará com nossa metodologia.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border/40 hover:border-primary hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary text-secondary flex items-center justify-center mb-4">
                                <benefit.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-card-foreground">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="bg-muted/20 py-20 border-y border-border/30">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-foreground">O que os participantes dizem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-card p-8 rounded-2xl shadow-xs border border-border/40"
                            >
                                <div
                                    className="inline-flex gap-1 mb-4 px-3 py-1.5 rounded-full bg-primary text-secondary"
                                    role="img"
                                    aria-label="Avaliação: 5 de 5 estrelas"
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                                    ))}
                                </div>
                                <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                                <div>
                                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container px-4 mx-auto text-center">
                <div className="relative overflow-hidden bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 border border-border shadow-lg">
                    <img
                        src={logoWhite}
                        alt=""
                        aria-hidden="true"
                        className="absolute -right-10 -bottom-10 w-64 h-auto opacity-5 pointer-events-none select-none"
                    />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                            Pronto para dar o próximo passo?
                        </h2>
                        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Participe do nosso programa "Entender para Atender" e revolucione seus resultados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto focus-visible:ring-accent">
                                <Link to="/training">Ver Treinamentos</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto bg-accent text-accent-foreground border-accent hover:bg-accent/90 focus-visible:ring-secondary"
                            >
                                Fale Conosco
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
