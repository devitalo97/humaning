import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";


export function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <div className="flex flex-col gap-0 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-muted/20 overflow-hidden">
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                            Humaning: <span className="text-primary">Entender</span> para <span className="text-secondary">Respeitar</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light">
                            Uma abordagem humanizada para descobrir potenciais e transformar ambientes de trabalho.
                        </p>
                    </motion.div>
                </div>
                {/* Subtle Background Decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
            </section>

            {/* Mission Section */}
            <section className="py-20 container px-4 mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground">Nossa Missão</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A <span className="font-semibold text-primary">Humaning</span> é uma empresa especializada em análise de perfil comportamental.
                            Nosso objetivo é ajudar pessoas a descobrirem seus pontos fortes e áreas de melhoria para alcançar seu potencial máximo.
                            Com uma equipe experiente, oferecemos uma abordagem personalizada baseada em dados comportamentais.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 relative">
                            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
                            <blockquote className="text-xl font-medium text-foreground italic relative z-10 pt-8 pl-4">
                                "Quando entendemos as diferenças entre os membros da equipe, como suas personalidades e habilidades,
                                podemos respeitar opiniões e trabalhar juntos de forma mais eficaz."
                            </blockquote>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Bio Section */}
            <section className="py-20 bg-muted/10">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-3xl overflow-hidden shadow-sm border flex flex-col lg:flex-row"
                    >
                        <div className="lg:w-1/3 h-[400px] lg:h-auto relative overflow-hidden group">
                            <img
                                src="https://placehold.co/400x500"
                                alt="Luiz Ricardo Pereira de Souza"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold">Luiz Ricardo</h3>
                                    <p className="text-white/80">Especialista em Comportamento</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-foreground">Quem está por trás</h3>
                                <div className="h-1 w-20 bg-secondary rounded-full" />
                            </div>

                            <div className="prose prose-lg text-muted-foreground">
                                <p>
                                    Profissional com 25 anos de experiência no mercado de vendas e atendimento.
                                    Graduado em Administração com MBAs pela FGV em Gestão Comercial, Marketing e Gestão Empresarial.
                                </p>
                                <p>
                                    Especialista em Gestão de Perfil Comportamental, Hipnoterapia e Coaching Integral Sistêmico.
                                    Suas principais características são o foco em resultados, a objetividade e um olhar sistêmico voltado para as pessoas.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-4">
                                {["Gestão Comportamental", "Coaching Integral", "Marketing", "Vendas"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm font-medium rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary p-8 rounded-2xl text-primary-foreground relative overflow-hidden"
                    >
                        <TrendingUp className="h-12 w-12 mb-4 opacity-80" />
                        <div className="text-5xl md:text-6xl font-bold mb-4">87%</div>
                        <p className="text-lg md:text-xl font-medium opacity-90">
                            das organizações demitem profissionais em razão de suas atitudes e comportamento.
                        </p>
                        <div className="mt-4 text-sm opacity-70">Fonte: Revista Você SA</div>
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card border p-8 rounded-2xl relative overflow-hidden shadow-xs"
                    >
                        <Users className="h-12 w-12 mb-4 text-secondary" />
                        <div className="text-5xl md:text-6xl font-bold mb-4 text-foreground">20%</div>
                        <p className="text-lg md:text-xl font-medium text-muted-foreground">
                            apenas das pessoas acreditam que seus empregos dão oportunidade de executar o que fazem de melhor.
                        </p>
                        <div className="mt-4 text-sm text-muted-foreground opacity-70">Fonte: Instituto Gallup</div>
                    </motion.div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 mx-auto text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center justify-center p-3 type-icon bg-background rounded-full shadow-sm mb-4">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold">Metodologia CIS Assessment</h2>
                        <p className="text-lg text-muted-foreground">
                            Utilizamos uma das ferramentas mais completas e precisas do mercado, com <span className="font-bold text-primary">99% de precisão</span> na análise de perfil.
                            Nossa metodologia foca não apenas no diagnóstico, mas na aplicação prática do autoconhecimento para gerar produtividade e felicidade no ambiente profissional.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 container px-4 mx-auto">
                <div className="bg-foreground text-background rounded-3xl p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                    <div className="max-w-xl mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4 text-white">Quer levar essa metodologia para sua empresa?</h2>
                        <p className="text-gray-300 text-lg">
                            Transforme a cultura da sua organização e potencialize seus resultados.
                        </p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg w-full md:w-auto">
                            Fale com um Especialista <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
