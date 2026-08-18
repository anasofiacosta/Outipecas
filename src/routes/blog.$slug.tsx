import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "O renascimento do Terracota em interiores minimalistas — Aura & Matiz" },
      { name: "description", content: "O terracota volta a ser protagonista nos projetos de interior mais sofisticados, trazendo calor e humanidade a espaços de linhas puras." },
      { property: "og:title", content: "O renascimento do Terracota em interiores minimalistas — Aura & Matiz" },
      { property: "og:description", content: "O terracota volta a ser protagonista nos projetos de interior mais sofisticados." },
      { property: "og:url", content: "/blog/renascimento-terracota" },
    ],
    links: [
      { rel: "canonical", href: "/blog/renascimento-terracota" },
    ],
  }),
  component: BlogArticlePage,
});

const relatedArticles = [
  {
    title: "Proteção e Invisibilidade: A ciência dos novos vernizes",
    img: "/images/blog-2.jpg",
    date: "28 Março 2024",
    cat: "Técnica",
  },
  {
    title: "A psicologia das cores escuras em espaços de repouso",
    img: "/images/blog-3.jpg",
    date: "10 Fevereiro 2024",
    cat: "Estilo",
  },
  {
    title: "Cal tradicional versus tintas modernas",
    img: "/images/hero-main.jpg",
    date: "22 Janeiro 2024",
    cat: "Técnica",
  },
];

function BlogArticlePage() {
  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[70vh] mb-0 overflow-hidden">
        <img
          src="/images/blog-1.jpg"
          alt="O renascimento do Terracota em interiores minimalistas"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-4 items-center mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold">Tendências</span>
                <span className="size-1 bg-background/50 rounded-full" />
                <span className="text-[10px] font-mono text-background/70">15 Abril 2024</span>
                <span className="size-1 bg-background/50 rounded-full" />
                <span className="text-[10px] font-mono text-background/70">5 min de leitura</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-background leading-tight text-balance">
                O renascimento do Terracota em interiores minimalistas
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose-custom">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Durante décadas, o minimalismo foi sinónimo de branco, cinzento e bege. Mas os interiores mais inspiradores de 2024 contam uma história diferente — uma história de calor, textura e cor. O terracotta está de volta, e não como um aceno nostálgico, mas como uma afirmação contemporânea de identidade e conforto.
          </p>

          <h2 className="font-display text-3xl mb-6 mt-16">A nova era do terracotta</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            O que distingue o terracotta actual da versão dos anos 70 é a sofisticação da aplicação. Em vez de paredes monolíticas e saturadas, os designers de interiores de referência usam o pigmento como um acento — uma parede de destaque numa sala de linhas puras, um nicho de biblioteca que ganha profundidade, ou um tecto abobadado que envolve o espaço num abraço quente.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A nossa gama Terra Bruta foi desenvolvida precisamente para este momento. Os pigmentos são extraídos de argilas provençais e misturados com liantes naturais que permitem a parede respirar. O resultado é uma superfície viva, que muda sutilmente com a luz ao longo do dia — um cinématismo doméstico que nenhuma tinta sintética consegue replicar.
          </p>

          <div className="my-16 py-12 px-8 bg-secondary/30 border-l-4 border-accent">
            <Quote className="size-8 text-accent mb-4" />
            <blockquote className="font-display text-2xl italic leading-snug text-foreground">
              &ldquo;O terracotta não é uma moda. É uma resposta humana à necessidade de conforto em ambientes tecnológicos.&rdquo;
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">— Catarina Mendes, Diretora de Consultoria, Aura &amp; Matiz</p>
          </div>

          <h2 className="font-display text-3xl mb-6">Como usar com confiança</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A chave para integrar o terracotta num ambiente minimalista reside no equilíbrio. Recomendamos combinar o pigmento com materiais brutos — carvalho natural, betão aparente, linho cru e cerâmicas artesanais. A neutralidade destes materiais permite que o terracotta brilhe sem competir.
          </p>

          <div className="my-12">
            <img
              src="/images/inspiration-1.jpg"
              alt="Interior minimalista com parede em terracotta"
              className="w-full aspect-video object-cover rounded-sm"
              loading="lazy"
            />
            <p className="text-[11px] text-muted-foreground mt-3 text-center italic">
              Projecto residencial em Lisboa — parede em Clay Finish, tonalidade Siena
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Para quem tem receio do compromisso de uma parede inteira, existem formas subtis de introduzir o terracotta: um vaso esculpido, uma moldura de porta, um painel de tecelagem na parede do cabeceira. Estes toques de cor funcionam como pontuações visuais num texto de design limpo.
          </p>

          <h2 className="font-display text-3xl mb-6">As tonalidades do momento</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Dentro do espectro terracotta, identificámos três tonalidades que definem 2024:
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <div className="size-3 rounded-full bg-[#C4956A] mt-2 shrink-0" />
              <div>
                <strong className="text-foreground">Siena Clássico</strong>
                <p className="text-sm text-muted-foreground">O tom médio mais versátil. Funciona tanto em salas de estar como em quartos, criando ambiente sem escurecer o espaço.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="size-3 rounded-full bg-[#A0522D] mt-2 shrink-0" />
              <div>
                <strong className="text-foreground">Terracotta Queimado</strong>
                <p className="text-sm text-muted-foreground">Mais profundo e dramático. Ideal para espaços com luz natural abundante que precisam de âncora visual.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="size-3 rounded-full bg-[#E8A87C] mt-2 shrink-0" />
              <div>
                <strong className="text-foreground">Pêssego Mineral</strong>
                <p className="text-sm text-muted-foreground">A versão mais suave e feminina. Perfeita para dormitórios e casas de banho que aspiram a ser santuários de repouso.</p>
              </div>
            </li>
          </ul>

          <h2 className="font-display text-3xl mb-6">Manutenção e durabilidade</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Uma das maiores vantagens das tintas minerais terracotta é a sua durabilidade. Ao contrário das tintas plásticas que descascam com o tempo, o Clay Finish envelhece com elegância. Pequenas imperfeições adicionam carácter, e a cor mantém-se viva durante décadas sem desbotar.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Para limpeza, basta um pano húmido. Não são necessários detergentes agressivos — de facto, a sua ausência é benéfica para a integridade do acabamento. É este respeito pelo material que faz com que os proprietários de casas restauradas no Alentejo nos digam que as suas paredes de cal parecem mais bonitas aos 20 anos do que aos 2.
          </p>

          {/* Inline CTA */}
          <div className="my-16 p-8 bg-foreground text-background text-center">
            <h3 className="font-display text-2xl mb-4">Quer experimentar o terracotta no seu projeto?</h3>
            <p className="text-background/70 text-sm mb-6 max-w-md mx-auto">
              Agende uma consultoria de cor gratuita no nosso showroom e descubra a tonalidade perfeita para o seu espaço.
            </p>
            <Link
              to="/contactos"
              className="inline-block px-8 py-4 bg-background text-foreground text-[11px] uppercase tracking-widest font-semibold hover:bg-accent hover:text-background transition-all"
            >
              Marcar Consulta
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-foreground/5">
        <h2 className="font-display text-2xl mb-12">Artigos relacionados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex gap-4 items-center mb-2">
                <span className="text-[10px] font-mono text-accent">{article.date}</span>
                <span className="size-1 bg-foreground/10 rounded-full" />
                <span className="text-[10px] font-mono uppercase text-muted-foreground">{article.cat}</span>
              </div>
              <h3 className="font-display text-lg text-muted-foreground leading-tight">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary/30 border-t border-foreground/5">
        <div className="max-w-3xl mx-auto px-6">
          <ContactForm
            title="Gostou deste artigo?"
            subtitle="Subscreva a nossa newsletter ou envie-nos uma mensagem para saber mais sobre tendências de cor."
          />
        </div>
      </section>
    </div>
  );
}
