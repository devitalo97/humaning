import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Presentation,
    Users,
    FileBarChart2,
    GraduationCap,
    HeartPulse,
    Landmark,
    Briefcase,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export interface SolutionItemProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export function SolutionsAndSecretariasSection() {
    const solutions: SolutionItemProps[] = [
        {
            icon: Presentation,
            title: "Palestras e encontros de sensibilização",
            description:
                "Reflexões que promovem a comunicação efetiva, a liderança, o relacionamento interpessoal e a responsabilidade individual.",
        },
        {
            icon: Users,
            title: "Workshops e capacitações práticas",
            description:
                "Atividades estruturadas que estimulam o autoconhecimento, a colaboração e o desenvolvimento de competências profissionais.",
        },
        {
            icon: FileBarChart2,
            title: "Programas de desenvolvimento e análise comportamental",
            description:
                "Aplicação de ferramentas como o CIS Assessment, relatórios e orientações que apoiam a gestão de pessoas e o alinhamento das equipes.",
        },
    ];

    const secretarias: SolutionItemProps[] = [
        {
            icon: GraduationCap,
            title: "Educação",
            description:
                "Desenvolvimento de diretores, coordenadores, pedagogos e equipes administrativas, com foco em comunicação, liderança e relações profissionais.",
        },
        {
            icon: HeartPulse,
            title: "Saúde",
            description:
                "Capacitação de coordenadores, profissionais de saúde e equipes de atendimento, com ênfase na comunicação, no relacionamento interpessoal e na qualidade do acolhimento.",
        },
        {
            icon: Landmark,
            title: "Gestão municipal",
            description:
                "Desenvolvimento de secretários, gestores e servidores, com foco em liderança, alinhamento das equipes, gestão de conflitos e responsabilidade profissional.",
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto space-y-20">
                {/* Part 1: Soluções (PDF Page 4) */}
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                Nossas Soluções • Preview de Treinamentos
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                Soluções para desenvolver pessoas e fortalecer a{" "}
                                <span className="inline-block bg-secondary text-secondary-foreground px-3 py-0.5 rounded-xl mt-1">
                                    gestão pública e privada.
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground italic">
                                Programas estruturados de acordo com as necessidades de cada instituição, combinando conhecimento, experiências práticas e ferramentas de análise comportamental.
                            </p>
                        </div>
                        <Button asChild size="lg" className="shrink-0">
                            <Link to="/training">
                                Ver Página de Treinamentos
                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((sol, idx) => (
                            <motion.div
                                key={sol.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.08 }}
                                className="p-8 rounded-3xl bg-card border border-border/40 hover:border-primary shadow-xs flex flex-col justify-between"
                            >
                                <div className="space-y-5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-secondary flex items-center justify-center">
                                        <sol.icon className="h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold text-card-foreground border-l-4 border-secondary pl-3">
                                        {sol.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">{sol.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* 2 Flagship Programs from /training */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-primary text-primary-foreground border border-border space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase">
                                <Briefcase className="h-3.5 w-3.5" aria-hidden="true" /> Programa Principal
                            </div>
                            <h3 className="text-2xl font-bold text-primary-foreground">Entender para Atender</h3>
                            <p className="text-primary-foreground/90 leading-relaxed">
                                Focado em <strong>Vendas, Atendimento ao Cidadão e Liderança</strong>. Permite identificar perfis comportamentais e adaptar a comunicação com eficácia imediata.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium text-accent">
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-secondary" aria-hidden="true" /> Liderança situacional
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-secondary" aria-hidden="true" /> Excelência no atendimento
                                </span>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-muted/20 border border-border/40 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase">
                                <Users className="h-3.5 w-3.5" aria-hidden="true" /> Programa Principal
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Entender para Conectar</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Focado em <strong className="text-foreground">Relacionamento, Clima Organizacional e Empatia</strong>. Ferramentas práticas para reduzir ruídos, gerir conflitos e integrar equipes.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2 text-sm font-semibold text-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" /> Gestão de conflitos
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" /> Comunicação não-violenta
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Aplicado à Realidade de Cada Secretaria (PDF Page 5) */}
                <div className="pt-4 border-t border-border/30 space-y-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-5 space-y-5">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                Desenvolvimento de pessoas aplicado à realidade de{" "}
                                <span className="inline-block bg-secondary text-secondary-foreground px-3 py-0.5 rounded-xl mt-1">
                                    cada secretaria.
                                </span>
                            </h3>
                            <div className="h-1.5 w-20 bg-secondary rounded-full" aria-hidden="true" />
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Cada área da administração pública possui desafios específicos. Por isso, nossos programas são estruturados considerando as características das equipes, as responsabilidades de seus profissionais e as necessidades de cada instituição.
                            </p>
                        </div>

                        <div className="lg:col-span-7 space-y-4">
                            {secretarias.map((sec) => (
                                <div
                                    key={sec.title}
                                    className="p-6 rounded-2xl bg-card border border-border/40 hover:border-primary transition-all flex flex-col sm:flex-row items-start gap-5"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-secondary flex items-center justify-center shrink-0">
                                        <sec.icon className="h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <div className="border-l-4 border-secondary pl-4 space-y-1.5">
                                        <h4 className="text-xl font-bold text-card-foreground">{sec.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{sec.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 md:p-8 rounded-2xl bg-primary text-primary-foreground border border-border">
                        <p className="text-lg md:text-xl italic font-medium border-l-4 border-secondary pl-5 text-primary-foreground">
                            "Diferentes áreas, um objetivo comum: fortalecer as pessoas que fazem o serviço público e as organizações acontecerem."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
