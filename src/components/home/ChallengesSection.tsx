import { motion } from "framer-motion";
import { MessageSquareWarning, Users, Handshake, Brain, Target, Zap, MessageCircle, Ear, HeartHandshake } from "lucide-react";

export interface ChallengeItemProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export function ChallengesSection() {
    const coreChallenges: ChallengeItemProps[] = [
        {
            icon: MessageSquareWarning,
            title: "Comunicação",
            description: "Ruídos, informações desencontradas e dificuldades de alinhamento.",
        },
        {
            icon: Users,
            title: "Liderança",
            description: "Gestores que precisam conduzir pessoas, administrar conflitos e desenvolver equipes.",
        },
        {
            icon: Handshake,
            title: "Relações interpessoais",
            description: "Diferentes comportamentos, expectativas e formas de trabalhar no mesmo ambiente.",
        },
    ];

    const competencies: ChallengeItemProps[] = [
        { icon: Brain, title: "Entender medos e motivações", description: "Descubra o que realmente impulsiona decisões individuais e coletivas." },
        { icon: HeartHandshake, title: "Relacionamentos Harmônicos", description: "Construa conexões mais fortes, respeitosas e colaborativas." },
        { icon: Target, title: "Perfis Comportamentais", description: "Compreenda na prática as diferenças de personalidade da equipe." },
        { icon: Zap, title: "Desempenho Profissional", description: "Aloque talentos estrategicamente e maximize o potencial no trabalho." },
        { icon: MessageCircle, title: "Comunicação Eficiente", description: "Transmita orientações com clareza, empatia e objetividade." },
        { icon: Ear, title: "Redução de Ruídos", description: "Elimine falhas de comunicação entre setores e secretarias." },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto space-y-16">
                {/* Main Split: PDF Page 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Os resultados da gestão também dependem{" "}
                            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-0.5 rounded-xl mt-1">
                                das pessoas.
                            </span>
                        </h2>
                        <div className="h-1.5 w-24 bg-secondary rounded-full" aria-hidden="true" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Uma gestão pública e organizacional eficiente exige mais do que processos bem estruturados. Exige profissionais que se comuniquem com clareza, lideranças preparadas e equipes capazes de trabalhar de forma integrada.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-muted/15 border border-border/40 space-y-8"
                    >
                        <div className="border-l-4 border-secondary pl-4">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                Três desafios presentes no cotidiano das equipes
                            </h3>
                        </div>

                        <div className="divide-y divide-border/30">
                            {coreChallenges.map((item) => (
                                <div key={item.title} className="py-5 first:pt-0 last:pb-0 flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center shrink-0 mt-0.5">
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Callout Banner from PDF Page 2 */}
                <div className="p-6 md:p-8 rounded-2xl bg-primary text-primary-foreground border border-border shadow-xs">
                    <p className="text-lg md:text-xl italic font-medium border-l-4 border-secondary pl-5 text-primary-foreground">
                        "Fortalecer essas competências é um passo importante para melhorar as relações de trabalho e a qualidade do serviço prestado à população."
                    </p>
                </div>

                {/* 6 Behavioral Benefits Grid */}
                <div className="pt-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Benefícios diretos do autoconhecimento nas equipes
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Resultados práticos alcançados quando gestores e servidores compreendem seus perfis comportamentais.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {competencies.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.06 }}
                                className="p-6 rounded-2xl bg-card border border-border/40 hover:border-primary transition-all"
                            >
                                <div className="w-11 h-11 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center mb-4">
                                    <benefit.icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h4 className="text-lg font-bold mb-1.5 text-card-foreground">{benefit.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
