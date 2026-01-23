import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Brain, Target, Users, Zap, MessageCircle, Ear } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                            Quanto mais você se <span className="text-primary">conhece</span>, mais você <span className="text-secondary">cresce</span>.
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
                            <Button size="lg" className="text-lg px-8 h-14">
                                Conheça nossos serviços <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
                {/* Abstract Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
            </section>

            {/* Benefits Section */}
            <section className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Por que investir em autoconhecimento?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Benefícios tangíveis que você alcançará com nossa metodologia.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="bg-muted/30 py-20">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">O que os participantes dizem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background p-8 rounded-2xl shadow-sm border"
                            >
                                <div className="flex gap-1 mb-4 text-secondary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container px-4 mx-auto text-center">
                <div className="bg-primary/5 rounded-3xl p-12 md:p-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para dar o próximo passo?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Participe do nosso programa "Entender para Atender" e revolucione seus resultados.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/training">
                            <Button size="lg" className="w-full sm:w-auto">Ver Treinamentos</Button>
                        </Link>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">Fale Conosco</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
