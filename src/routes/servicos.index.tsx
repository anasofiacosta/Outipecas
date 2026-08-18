import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Palette, Wrench, Factory, Paintbrush, Shield, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços — Aura & Matiz" },
      { name: "description", content: "Descubra os serviços da Aura & Matiz: consultoria de cor, apoio técnico, soluções industriais, pintura decorativa e formação profissional." },
      { property: "og:title", content: "Serviços — Aura & Matiz" },
      { property: "og:description", content: "Consultoria de cor, apoio técnico, soluções industriais, pintura decorativa e formação profissional." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [
      { rel: "canonical", href: "/servicos" },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    icon: Palette,
    title: "Consultoria de Cor",
    slug: "consultoria-de-cor",
    desc: "Análise cromática profissional para harmonização de ambientes residenciais e comerciais, com estudo de luz natural e preferências pessoais.",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Apoio Técnico",
    slug: null,
    desc: "Visitas à obra e especificação de produtos para garantir a durabilidade e o acabamento perfeito em cada superfície.",
    featured: false,
  },
  {
    icon: Factory,
    title: "Soluções Industriais",
    slug: null,
    desc: "Acabamentos de alta performance para pavimentos, superfícies metálicas e ambientes com tráfego intenso ou condições extremas.",
    featured: false,
  },
  {
    icon: Paintbrush,
    title: "Pintura Decorativa",
    slug: null,
    desc: "Técnicas especiais de acabamento decorativo: estuque veneziano, cal tradicional, efeitos metálicos e texturas tridimensionais.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Tratamento de Superfícies",
    slug: null,
    desc: "Preparação profissional de substratos: hidrofugação, impermeabilização, nivelamento e correção de humidades.",
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Formação Profissional",
    slug: null,
    desc: "Workshops e cursos especializados para aplicadores, arquitetos e decoradores nas nossas instalações.",
    featured: false,
  },
];

function ServicosPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Especialização</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl text-balance">
            Serviços que <em>elevam</em>.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Do estudo cromático ao acompanhamento em obra, oferecemos um ecossistema completo de serviços para arquitetos, decoradores e particulares exigentes.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const Card = (
              <div className={`group h-full p-8 border transition-all duration-500 ${
                service.slug
                  ? "bg-background border-foreground/5 hover:border-accent/40 cursor-pointer"
                  : "bg-background border-foreground/5 opacity-80"
              }`}>
                <div className="size-12 rounded-full border border-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-2xl mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                {service.slug ? (
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-semibold group-hover:text-accent text-foreground">
                    <span>Saber Mais</span>
                    <div className="w-8 h-px bg-current" />
                  </div>
                ) : (
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground opacity-50">
                    Brevemente
                  </span>
                )}
              </div>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {service.slug ? (
                  <Link to="/servicos/$slug" params={{ slug: service.slug }}>
                    {Card}
                  </Link>
                ) : (
                  Card
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary/30 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ContactForm
            title="Solicite um Serviço"
            subtitle="Conte-nos sobre o seu projeto e ajudá-lo-emos a escolher o serviço ideal."
          />
        </div>
      </section>
    </div>
  );
}
