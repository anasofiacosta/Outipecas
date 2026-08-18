import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/marcas/")({
  head: () => ({
    meta: [
      { title: "Marcas — Aura & Matiz" },
      { name: "description", content: "Descubra as marcas premium de tintas, vernizes e acabamentos representadas pela Aura & Matiz. Curadoria de excelência para arquitetura." },
      { property: "og:title", content: "Marcas — Aura & Matiz" },
      { property: "og:description", content: "Descubra as marcas premium de tintas, vernizes e acabamentos representadas pela Aura & Matiz." },
      { property: "og:url", content: "/marcas" },
    ],
    links: [
      { rel: "canonical", href: "/marcas" },
    ],
  }),
  component: MarcasPage,
});

const brands = [
  {
    name: "Lumière Pigments",
    slug: "lumiere-pigments",
    desc: "Tintas minerais francesas com pigmentação natural de alta profundidade. A referência em acabamentos respiráveis.",
    cat: "Tintas",
    featured: true,
  },
  {
    name: "Verniz Pro",
    slug: null,
    desc: "Soluções técnicas para proteção de madeiras em ambientes marítimos e interiores de luxo.",
    cat: "Vernizes",
    featured: false,
  },
  {
    name: "Nordic Shield",
    slug: null,
    desc: "Acabamentos industriais de alta resistência com certificação ecológica e durabilidade extrema.",
    cat: "Industriais",
    featured: false,
  },
  {
    name: "Sombra & Luz",
    slug: null,
    desc: "Tintas decorativas especiais com efeitos cintilantes e texturas tridimensionais.",
    cat: "Decorativas",
    featured: false,
  },
  {
    name: "Heritage Colors",
    slug: null,
    desc: "Pigmentos históricos fieis às receitas tradicionais de mestres pintores europeus.",
    cat: "Tintas",
    featured: false,
  },
  {
    name: "Fluxo Coatings",
    slug: null,
    desc: "Revestimentos de pavimento autonivelantes com acabamentos em resina epóxi e poliuretano.",
    cat: "Revestimentos",
    featured: false,
  },
];

const categories = ["Todas", "Tintas", "Vernizes", "Industriais", "Decorativas", "Revestimentos"];

function MarcasPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todas");

  const filtered = brands.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "Todas" || b.cat === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Curadoria</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl text-balance">
            Marcas de <em>excelência</em>.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Selecionamos as melhares marcas mundiais de tintas, vernizes e revestimentos para oferecer soluções de acabamento de classe mundial.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[11px] uppercase tracking-widest border transition-all ${
                  filter === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-foreground/10 hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-foreground/10 bg-transparent text-sm focus:outline-none focus:border-accent transition-colors w-64 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {brand.slug ? (
                <Link to="/marcas/$slug" params={{ slug: brand.slug }}>
                  <BrandCard brand={brand} />
                </Link>
              ) : (
                <BrandCard brand={brand} />
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>Nenhuma marca encontrada para os critérios selecionados.</p>
          </div>
        )}
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary/30 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ContactForm
            title="Solicite Informações"
            subtitle="Quer saber mais sobre uma marca específica? Envie-nos uma mensagem."
          />
        </div>
      </section>
    </div>
  );
}

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  return (
    <div className={`group h-full p-10 border transition-all cursor-pointer ${
      brand.slug ? "bg-background border-foreground/5 hover:border-accent/40" : "bg-background border-foreground/5 opacity-80"
    }`}>
      <div className="mb-8">
        <span className="font-display text-2xl font-semibold italic text-foreground">{brand.name}</span>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-widest text-accent mb-4 block">{brand.cat}</span>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">{brand.desc}</p>
      {brand.slug ? (
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
}
