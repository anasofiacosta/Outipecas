import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/inspiracao")({
  head: () => ({
    meta: [
      { title: "Inspiração — Aura & Matiz" },
      { name: "description", content: "Galeria de projetos e ambientes inspiradores com tintas, vernizes e acabamentos premium. Descubra a magia da cor e textura." },
      { property: "og:title", content: "Inspiração — Aura & Matiz" },
      { property: "og:description", content: "Galeria de projetos e ambientes inspiradores com tintas e acabamentos premium." },
      { property: "og:url", content: "/inspiracao" },
    ],
    links: [
      { rel: "canonical", href: "/inspiracao" },
    ],
  }),
  component: InspiracaoPage,
});

const projects = [
  { img: "/images/hero-main.jpg", title: "Casa de Família, Porto", tag: "Interiores", desc: "Paredes em lime wash terracotta com acabamento fosco acetinado em ambiente de sala de estar minimalista." },
  { img: "/images/inspiration-1.jpg", title: "Apartamento Chiado, Lisboa", tag: "Interiores", desc: "Textura de cal tradicional com pigmentos naturais em dormitório principal com luz natural abundante." },
  { img: "/images/inspiration-2.jpg", title: "Quinta do Douro", tag: "Exteriores", desc: "Fachada em estuque mineral com proteção hidrofugante premium, integrada na paisagem vinícola." },
  { img: "/images/blog-1.jpg", title: "Restaurante Conceito, Braga", tag: "Comerciais", desc: "Acabamento decorativo metálico em tons de ouro envelhecido para ambiente gastronómico de luxo." },
  { img: "/images/blog-2.jpg", title: "Casa de Campo, Alentejo", tag: "Interiores", desc: "Verniz à base de água em carvalho centenário, preservando a alma natural da madeira." },
  { img: "/images/blog-3.jpg", title: "Escritório de Arquitetura, Porto", tag: "Comerciais", desc: "Parede em microcimento com tonalidade antracite e acabamento satinado para escritório contemporâneo." },
];

function InspiracaoPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Portfólio</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl text-balance">
            Inspiração em <em>profundidade</em>.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Explore como a luz interage com as nossas texturas em projetos reais. Cada superfície conta uma história.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent">{project.tag}</span>
              <h3 className="font-display text-xl mt-2 mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="font-display text-3xl mb-6">Tem um projeto em mente?</h3>
          <p className="text-muted-foreground mb-10">Fale connosco e descubra como podemos ajudar a materializar a sua visão.</p>
          <Link
            to="/contactos"
            className="inline-block px-10 py-5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-all"
          >
            Falar Connosco
          </Link>
        </div>
      </section>
    </div>
  );
}
