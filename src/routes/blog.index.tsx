import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Crónicas da Cor — Aura & Matiz" },
      { name: "description", content: "Explore o nosso blog sobre tintas, vernizes, tendências de cor, técnicas de aplicação e inspiração para projetos de arquitetura." },
      { property: "og:title", content: "Blog — Crónicas da Cor — Aura & Matiz" },
      { property: "og:description", content: "Artigos sobre tintas, vernizes, tendências de cor e inspiração para projetos de arquitetura." },
      { property: "og:url", content: "/blog" },
    ],
    links: [
      { rel: "canonical", href: "/blog" },
    ],
  }),
  component: BlogPage,
});

const articles = [
  {
    slug: "renascimento-terracota",
    title: "O renascimento do Terracota em interiores minimalistas",
    excerpt: "O terracota volta a ser protagonista nos projetos de interior mais sofisticados, trazendo calor e humanidade a espaços de linhas puras.",
    img: "/images/blog-1.jpg",
    date: "15 Abril 2024",
    cat: "Tendências",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: null,
    title: "Proteção e Invisibilidade: A ciência dos novos vernizes à base de água",
    excerpt: "Os vernizes modernos conseguem proteger a madeira sem mascarar a sua beleza natural. Descubra como a nanotecnologia revolucionou este setor.",
    img: "/images/blog-2.jpg",
    date: "28 Março 2024",
    cat: "Técnica",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: null,
    title: "A psicologia das cores escuras em espaços de repouso",
    excerpt: "Paredes em tons profundos criam ambientes de refúgio e intimidade. Saiba como usar o carvão, o índigo e o azeitona no quarto.",
    img: "/images/blog-3.jpg",
    date: "10 Fevereiro 2024",
    cat: "Estilo",
    readTime: "4 min",
    featured: false,
  },
  {
    slug: null,
    title: "Cal tradicional versus tintas modernas: o debate continua",
    excerpt: "Arquitetos de restauro defendem a cal. Designers contemporâneos preferem emulsões. Qual a escolha certa para cada projeto?",
    img: "/images/hero-main.jpg",
    date: "22 Janeiro 2024",
    cat: "Técnica",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: null,
    title: "Tendências de cor para 2024 segundo os principais fabricantes",
    excerpt: "Analisámos as paletas de primavera das marcas premium para antecipar as tonalidades que vão definir o ano.",
    img: "/images/inspiration-1.jpg",
    date: "5 Janeiro 2024",
    cat: "Tendências",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: null,
    title: "Como preparar uma superfície para pintura decorativa",
    excerpt: "A preparação é metade do resultado. Um guia passo a passo para garantir a aderência perfeita de acabamentos especiais.",
    img: "/images/inspiration-2.jpg",
    date: "12 Dezembro 2023",
    cat: "Técnica",
    readTime: "8 min",
    featured: false,
  },
];

const categories = ["Todas", "Tendências", "Técnica", "Estilo"];

function BlogPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todas");

  const filtered = articles.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "Todas" || a.cat === filter;
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
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Journal</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl text-balance">
            Crónicas da <em>Cor</em>.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Reflexões, guias técnicos e inspiração sobre o universo das tintas, vernizes e acabamentos.
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
              placeholder="Pesquisar artigos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-foreground/10 bg-transparent text-sm focus:outline-none focus:border-accent transition-colors w-64 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              {article.slug ? (
                <Link to="/blog/$slug" params={{ slug: article.slug }}>
                  <ArticleCard article={article} />
                </Link>
              ) : (
                <ArticleCard article={article} />
              )}
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>Nenhum artigo encontrado para os critérios selecionados.</p>
          </div>
        )}
      </section>
    </div>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <div>
      <div className="overflow-hidden mb-6">
        <img
          src={article.img}
          alt={article.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
            article.featured ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
          loading="lazy"
        />
      </div>
      <div className="flex gap-4 items-center mb-4">
        <span className="text-[10px] font-mono text-accent">{article.date}</span>
        <span className="size-1 bg-foreground/10 rounded-full" />
        <span className="text-[10px] font-mono uppercase text-muted-foreground">{article.cat}</span>
        <span className="size-1 bg-foreground/10 rounded-full" />
        <span className="text-[10px] font-mono text-muted-foreground">{article.readTime}</span>
      </div>
      {article.slug ? (
        <h3 className="font-display text-xl group-hover:text-accent transition-colors text-foreground leading-tight">
          {article.title}
        </h3>
      ) : (
        <h3 className="font-display text-xl text-muted-foreground leading-tight">
          {article.title}
        </h3>
      )}
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{article.excerpt}</p>
    </div>
  );
}
