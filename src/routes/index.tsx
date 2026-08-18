import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura & Matiz — Tintas, Vernizes e Acabamentos Premium" },
      { name: "description", content: "Especialistas em tintas, vernizes e soluções de acabamento premium. Transformamos espaços através de curadoria técnica e acabamentos de luxo." },
      { property: "og:title", content: "Aura & Matiz — Tintas, Vernizes e Acabamentos Premium" },
      { property: "og:description", content: "Especialistas em tintas, vernizes e soluções de acabamento premium. Transformamos espaços através de curadoria técnica e acabamentos de luxo." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-main.jpg"
            alt="Interior moderno com paredes texturizadas em tons quentes"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 border border-background/30 text-[10px] uppercase tracking-[0.3em] text-background mb-6">
              Estúdio de Acabamentos Premium
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-balance text-background mb-8">
              A Ciência da <em className="not-italic font-light">Cor</em>,<br />
              a Arte do <span className="text-brand-gold">Toque</span>.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-background/80 mb-10">
              Especialistas em soluções de alta performance para arquitetura. Do pigmento puro ao acabamento tátil, transformamos superfícies em experiências sensoriais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/marcas"
                className="px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-all"
              >
                Explorar Marcas
              </Link>
              <Link
                to="/sobre"
                className="px-8 py-4 border border-background/30 text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-background hover:text-foreground transition-all"
              >
                Nossa História
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-24 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-pretty">
                Desde 1984, cultivamos o equilíbrio entre a química da durabilidade e a arte da estética.
              </h2>
            </div>
            <div className="md:col-span-5 pb-2">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Aura &amp; Matiz não é apenas uma loja de tintas. Somos curadores de pigmentos e especialistas em proteção de superfícies, dedicados a arquitetos e decoradores que não abdicam da perfeição técnica.
              </p>
              <Link
                to="/sobre"
                className="text-xs font-mono uppercase tracking-widest border-b border-accent/30 pb-1 hover:border-accent transition-all text-foreground"
              >
                Conheça a nossa história &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-12 text-center">
            Parceiros de Excelência
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-foreground/5 border border-foreground/5">
            {["Heritage", "Fluxo", "Nordic", "Sombra", "Technic.01", "Velvet"].map((brand) => (
              <div
                key={brand}
                className="bg-background p-10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              >
                <span className="font-display font-bold text-xl italic text-foreground">{brand}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/marcas"
              className="text-xs uppercase tracking-widest border-b border-foreground/10 pb-1 hover:border-accent transition-all text-muted-foreground"
            >
              Ver todas as marcas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
                Especialização
              </span>
              <h3 className="font-display text-4xl">Soluções que elevam a arquitetura</h3>
            </div>
            <Link
              to="/servicos"
              className="hidden md:block text-[11px] font-medium uppercase tracking-widest text-muted-foreground"
            >
              Todos os Serviços &plus;
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Consultoria de Cor",
                desc: "Análise cromática personalizada para ambientes que respiram harmonia e identidade.",
              },
              {
                num: "02",
                title: "Tratamento de Madeiras",
                desc: "Vernizes de alta resistência que preservam a textura natural e a alma da madeira.",
              },
              {
                num: "03",
                title: "Acabamentos Decorativos",
                desc: "Técnicas ancestrais e contemporâneas para paredes com profundidade única.",
              },
              {
                num: "04",
                title: "Apoio Técnico",
                desc: "Acompanhamento em obra para garantir a aplicação perfeita e duradoura.",
              },
            ].map((service) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: parseInt(service.num) * 0.1 }}
                className="group bg-background p-8 border border-foreground/5 hover:border-accent/40 transition-all duration-500"
              >
                <div className="size-10 bg-accent/5 rounded-full mb-8 flex items-center justify-center text-accent font-mono text-xs italic">
                  {service.num}
                </div>
                <h4 className="font-display text-xl mb-4">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                <div className="h-px w-full bg-foreground/5 group-hover:bg-accent transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-display text-5xl mb-8 leading-tight">
                Inspiração em <em>profundidade</em>
              </h3>
              <p className="text-muted-foreground mb-10 text-pretty">
                Explore como a luz interage com as nossas texturas em projetos reais de renome. Cada superfície conta uma história de pigmento e precisão.
              </p>
              <Link
                to="/inspiracao"
                className="px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-all inline-block"
              >
                Ver Portfólio
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img
                src="/images/inspiration-1.jpg"
                alt="Textura de tinta em parede com luz suave"
                className="w-full aspect-[3/4] object-cover rounded-sm"
                loading="lazy"
              />
              <img
                src="/images/inspiration-2.jpg"
                alt="Sala de estar com paredes verde sage"
                className="w-full aspect-[3/4] object-cover rounded-sm mt-12"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-foreground text-background py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-12">
            {[
              { label: "Sustentabilidade", text: "Certificações ecológicas de baixo VOC em todas as gamas premium." },
              { label: "Durabilidade", text: "Testado sob as condições climáticas mais exigentes do litoral português." },
              { label: "Expertise", text: "Mais de 40 anos a definir o padrão de luxo em acabamentos." },
            ].map((b) => (
              <div key={b.label} className="flex-1">
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent mb-4">{b.label}</div>
                <p className="text-sm text-background/70 font-light italic">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h3 className="font-display text-3xl">Crónicas da Cor</h3>
            <div className="h-px flex-1 mx-12 bg-foreground/5" />
            <span className="font-mono text-xs uppercase text-muted-foreground">Journal</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                img: "/images/blog-1.jpg",
                date: "Abril 2024",
                cat: "Tendências",
                title: "O renascimento do Terracota em interiores minimalistas",
                slug: "renascimento-terracota",
              },
              {
                img: "/images/blog-2.jpg",
                date: "Março 2024",
                cat: "Técnica",
                title: "Proteção e Invisibilidade: A ciência dos novos vernizes à base de água",
                slug: null,
              },
              {
                img: "/images/blog-3.jpg",
                date: "Fevereiro 2024",
                cat: "Estilo",
                title: "A psicologia das cores escuras em espaços de repouso",
                slug: null,
              },
            ].map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                {article.slug ? (
                  <Link to="/blog/$slug" params={{ slug: article.slug }}>
                    <div className="overflow-hidden mb-6">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="overflow-hidden mb-6">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex gap-4 items-center mb-4">
                  <span className="text-[10px] font-mono text-accent">{article.date}</span>
                  <span className="size-1 bg-foreground/10 rounded-full" />
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">{article.cat}</span>
                </div>
                {article.slug ? (
                  <Link to="/blog/$slug" params={{ slug: article.slug }}>
                    <h5 className="text-xl font-display group-hover:text-accent transition-colors text-foreground">
                      {article.title}
                    </h5>
                  </Link>
                ) : (
                  <h5 className="text-xl font-display text-muted-foreground">{article.title}</h5>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Perguntas Frequentes</span>
              <h3 className="font-display text-4xl mb-6">Tudo o que precisa de saber</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Respostas às questões mais comuns sobre os nossos produtos, serviços e processos.
              </p>
              <Link
                to="/faqs"
                className="text-xs uppercase tracking-widest border-b border-foreground/10 pb-1 hover:border-accent transition-all text-foreground"
              >
                Ver todas as FAQs &rarr;
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { q: "Como escolher a tinta ideal para o meu projeto?", a: "A nossa consultoria de cor analisa a luz natural, o estilo arquitetónico e as preferências pessoais para recomendar a gama perfeita." },
                { q: "As tintas são ecológicas?", a: "Sim, todas as gamas premium possuem certificação de baixo VOC e respeitam as normas ambientais mais exigentes." },
                { q: "Oferecem apoio técnico durante a obra?", a: "Com certeza. O nosso serviço inclui visitas ao local para garantir uma aplicação impecável." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-foreground/5 pb-6">
                  <h4 className="font-display text-lg mb-2 text-foreground">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
            Pronto para transformar o seu <em>espaço</em>?
          </h3>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Entre em contacto connosco e descubra como a cor certa pode redefinir completamente a atmosfera do seu projeto.
          </p>
          <Link
            to="/contactos"
            className="inline-block px-10 py-5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-all"
          >
            Falar Connosco
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-secondary/30 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Contacto Rápido</span>
            <h3 className="font-display text-3xl">Envie-nos uma mensagem</h3>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
