import { motion } from "framer-motion";
import { Building2, Landmark, Briefcase, Users, ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function TrainingPage() {
    const [activeTab, setActiveTab] = useState<"private" | "public">("private");

    const portfolioItems = [
        {
            city: "Boa Esperança/ES",
            type: "Setor Público",
            desc: "Capacitação para equipe municipal.",
            year: "2024",
            icon: Landmark,
            badgeClass: "bg-accent text-accent-foreground",
        },
        {
            city: "Pinheiros/ES",
            type: "Setor Público",
            desc: "Desenvolvimento de lideranças.",
            year: "2024",
            icon: Landmark,
            badgeClass: "bg-accent text-accent-foreground",
        },
        {
            city: "Colatina/ES",
            type: "Setor Privado",
            desc: "Treinamento em vendas e atendimento.",
            year: "2023",
            icon: Briefcase,
            badgeClass: "bg-secondary text-secondary-foreground",
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-background">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
                        >
                            Capacitação que{" "}
                            <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">
                                Gera
                            </span>{" "}
                            <span className="inline-block bg-primary text-secondary px-3 py-0.5 rounded-lg">
                                Resultados
                            </span>{" "}
                            Reais
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-muted-foreground"
                        >
                            Metodologia comprovada para transformar equipes no setor privado e na gestão pública.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button size="lg" className="text-lg px-8 h-14">
                                Solicitar Proposta <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
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

            {/* 2. Os Programas Principais */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Pilares de Programas</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Programas estruturados para resolver as dores mais comuns das organizações modernas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Program 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-8 md:p-12 shadow-xs hover:border-primary hover:shadow-md transition-all"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-primary"
                            >
                                <Briefcase className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary text-secondary flex items-center justify-center mb-6">
                                    <Briefcase className="w-7 h-7" aria-hidden="true" />
                                </div>
                                <h3 className="text-2xl font-bold text-card-foreground">Entender para Atender</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Focado em <strong className="text-foreground">Vendas, Atendimento e Liderança</strong>. Nossa metodologia dissecada para transformar o atendimento através da análise comportamental, permitindo que sua equipe identifique perfis e adapte a comunicação instantaneamente.
                                </p>
                                <ul className="space-y-3 pt-4 text-card-foreground">
                                    <li className="flex items-center text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                                        Fechamento de vendas complexas
                                    </li>
                                    <li className="flex items-center text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                                        Liderança situacional
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Program 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-8 md:p-12 shadow-xs hover:border-primary hover:shadow-md transition-all"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-primary"
                            >
                                <Users className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center mb-6">
                                    <Users className="w-7 h-7" aria-hidden="true" />
                                </div>
                                <h3 className="text-2xl font-bold text-card-foreground">Entender para se Conectar</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Focado em <strong className="text-foreground">Relacionamento, Clima Organizacional e Empatia</strong>. Ferramentas práticas para reduzir ruídos de comunicação, resolver conflitos internos e criar conexões verdadeiras entre colaboradores.
                                </p>
                                <ul className="space-y-3 pt-4 text-card-foreground">
                                    <li className="flex items-center text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                                        Gestão de conflitos
                                    </li>
                                    <li className="flex items-center text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0" aria-hidden="true" />
                                        Comunicação não-violenta
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Seção de Aplicabilidade (Tabs/Toggle) */}
            <section className="py-24 bg-muted/20 border-y border-border/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Onde Atuamos</h2>
                        <div
                            role="tablist"
                            aria-label="Segmentos de atuação"
                            className="inline-flex rounded-full p-1.5 bg-primary/10 border border-border/40"
                        >
                            <button
                                type="button"
                                role="tab"
                                id="tab-private"
                                aria-selected={activeTab === "private"}
                                aria-controls="panel-private"
                                onClick={() => setActiveTab("private")}
                                className={cn(
                                    "px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 flex items-center min-h-11",
                                    activeTab === "private"
                                        ? "bg-primary text-primary-foreground shadow-xs"
                                        : "text-foreground hover:bg-primary/10"
                                )}
                            >
                                <Building2 className="w-4 h-4 mr-2" aria-hidden="true" />
                                Empresas Privadas
                            </button>
                            <button
                                type="button"
                                role="tab"
                                id="tab-public"
                                aria-selected={activeTab === "public"}
                                aria-controls="panel-public"
                                onClick={() => setActiveTab("public")}
                                className={cn(
                                    "px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 flex items-center min-h-11",
                                    activeTab === "public"
                                        ? "bg-primary text-primary-foreground shadow-xs"
                                        : "text-foreground hover:bg-primary/10"
                                )}
                            >
                                <Landmark className="w-4 h-4 mr-2" aria-hidden="true" />
                                Setor Público
                            </button>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            key={activeTab}
                            role="tabpanel"
                            id={activeTab === "private" ? "panel-private" : "panel-public"}
                            aria-labelledby={activeTab === "private" ? "tab-private" : "tab-public"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-card border border-border/40 rounded-3xl p-8 md:p-12 shadow-xs"
                        >
                            {activeTab === "private" ? (
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-secondary text-secondary-foreground">
                                            <Building2 className="w-8 h-8" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-card-foreground">Para Empresas Privadas</h3>
                                        <p className="text-lg text-muted-foreground">
                                            "Potencialize seus resultados comerciais e crie equipes de alta performance que vestem a camisa da empresa."
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                "Aumento de vendas e conversão",
                                                "Retenção de talentos estratégicos",
                                                "Melhoria na cultura organizacional",
                                                "Lucratividade sustentável",
                                            ].map((item) => (
                                                <li key={item} className="flex items-center text-muted-foreground font-medium">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-primary mr-3 shrink-0" aria-hidden="true" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl bg-primary text-primary-foreground flex items-center justify-center border border-border">
                                        <div className="text-center p-6">
                                            <Trophy className="w-16 h-16 text-secondary mx-auto mb-4" aria-hidden="true" />
                                            <p className="text-base font-semibold text-primary-foreground">
                                                Alta Performance Corporativa
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-accent text-accent-foreground">
                                            <Landmark className="w-8 h-8" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-card-foreground">Para Setor Público</h3>
                                        <p className="text-lg text-muted-foreground">
                                            "Melhore a qualidade do serviço público com treinamentos que sensibilizam servidores e modernizam a gestão municipal."
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                "Atendimento humanizado ao cidadão",
                                                "Eficiência e desburocratização",
                                                "Integração entre secretarias",
                                                "Valorização do servidor público",
                                            ].map((item) => (
                                                <li key={item} className="flex items-center text-muted-foreground font-medium">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-primary mr-3 shrink-0" aria-hidden="true" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl bg-accent/25 flex items-center justify-center border border-dashed border-border">
                                        <div className="text-center p-6">
                                            <Users className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
                                            <p className="text-base font-semibold text-foreground">
                                                Serviço Público de Excelência
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Portfólio de Projetos */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
                        Histórias de Transformação
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={item.city}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl border border-border/40 bg-card hover:border-primary transition-colors"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn("p-3 rounded-xl", item.badgeClass)}>
                                        <item.icon className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                                        {item.year}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-card-foreground">{item.city}</h3>
                                <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                                    {item.type}
                                </p>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Final */}
            <section className="py-20 bg-primary text-primary-foreground border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                            "Não importa o tamanho da sua organização. Se tem pessoas, nós temos a solução."
                        </h2>
                        <div className="flex justify-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="w-full md:w-auto h-14 text-lg px-8 shadow-lg hover:shadow-xl transition-all focus-visible:ring-accent"
                            >
                                Falar no WhatsApp
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
