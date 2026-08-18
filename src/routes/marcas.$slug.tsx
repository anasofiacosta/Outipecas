import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { GallerySlider } from "../components/GallerySlider";
import { CategoryGrid } from "../components/CategoryGrid";


export const Route = createFileRoute("/marcas/$slug")({
  head: () => ({
    meta: [
      { title: "Lumière Pigments — Aura & Matiz" },
      { name: "description", content: "Descubra a Lumière Pigments, marca premium de tintas minerais francesas com pigmentação natural de alta profundidade." },
      { property: "og:title", content: "Lumière Pigments — Aura & Matiz" },
      { property: "og:description", content: "Tintas minerais francesas com pigmentação natural de alta profundidade." },
      { property: "og:url", content: "/marcas/lumiere-pigments" },
    ],
    links: [
      { rel: "canonical", href: "/marcas/lumiere-pigments" },
    ],
  }),
  component: MarcaDetailPage,
});

function MarcaDetailPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] mb-24 overflow-hidden">
        <img
          src="/images/brand-detail.jpg"
          alt="Lumière Pigments — Coleção de tintas minerais"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold mb-4 block">Marca Premium</span>
              <h1 className="font-display text-5xl md:text-7xl text-background mb-4">Lumière Pigments</h1>
              <p className="text-background/80 max-w-xl">Tintas minerais francesas com pigmentação natural de alta profundidade.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl mb-8 italic">A história da marca</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 1972 na Provença, a Lumière Pigments nasceu da paixão de um químico e um pintor decorador que acreditavam que as tintas industriais estavam a perder a alma. Decidiram recuperar as receitas antigas de pigmentos minerais, combinando-as com tecnologia moderna de ligação.
                </p>
                <p>
                  Hoje, a marca é referência mundial em acabamentos respiráveis para interiores históricos e contemporâneos. Cada lote é produzido artesanalmente, com matérias-primas extraídas de pedreiras sustentáveis na Toscana e no sul de França.
                </p>
                <p>
                  A Aura &amp; Matiz é distribuidora exclusiva em Portugal desde 2015, tendo introduzido as gamas Mineral Wash, Clay Finish e Terra Bruta no mercado ibérico.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-6">
                <span className="font-display text-4xl text-accent">1972</span>
                <p className="text-sm text-muted-foreground mt-2">Fundação em Aix-en-Provence</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <span className="font-display text-4xl text-accent">2015</span>
                <p className="text-sm text-muted-foreground mt-2">Parceria exclusiva com Aura &amp; Matiz</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <span className="font-display text-4xl text-accent">40+</span>
                <p className="text-sm text-muted-foreground mt-2">Tonalidades exclusivas no catálogo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Categorias de produtos</h2>
          <CategoryGrid
            categories={[
              {
                title: "Mineral Wash",
                desc: "Tintas minerais de cal tradicional para interiores com respirabilidade total.",
                subcategories: [
                  { label: "Cal Aérea Interior", to: "/marcas" },
                  { label: "Cal Hidráulica", to: "/marcas" },
                  { label: "Primário Mineral", to: "/marcas" },
                  { label: "Velaturas Minerais", to: "/marcas" },
                ],
              },
              {
                title: "Clay Finish",
                desc: "Acabamentos em argila para paredes com profundidade tátil e efeito orgânico.",
                subcategories: [
                  { label: "Argila Fina", to: "/marcas" },
                  { label: "Argila Texturada", to: "/marcas" },
                  { label: "Estuque Marroquino", to: "/marcas" },
                  { label: "Selantes Naturais", to: "/marcas" },
                ],
              },
              {
                title: "Terra Bruta",
                desc: "Pigmentos crus para mistura personalizada com liantes naturais.",
                subcategories: [
                  { label: "Ocres e Terras", to: "/marcas" },
                  { label: "Pigmentos Minerais", to: "/marcas" },
                  { label: "Liantes Naturais", to: "/marcas" },
                  { label: "Kits de Amostras", to: "/servicos" },
                ],
              },
            ]}
          />
        </section>


        {/* Benefits */}
        <section className="mb-24 py-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl mb-12 text-center italic">Benefícios</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { title: "Respirabilidade", desc: "Permite que a parede respire, evitando condensação e fungos." },
                { title: "Cores Vivas", desc: "Pigmentos naturais que não desbotam com a luz solar." },
                { title: "Zero COV", desc: "Sem compostos orgânicos voláteis. Seguro para alérgicos e crianças." },
                { title: "Artesanal", desc: "Produção em lotes pequenos com controlo de qualidade individual." },
              ].map((b) => (
                <div key={b.title}>
                  <h4 className="font-display text-lg mb-3">{b.title}</h4>
                  <p className="text-sm text-background/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Aplicações recomendadas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Interiores Históricos", desc: "Reabilitação de palácios, igrejas e edifícios classificados, respeitando a permeabilidade original das paredes." },
              { title: "Habitação de Luxo", desc: "Apartamentos e moradias contemporâneas onde o cliente valoriza textura e exclusividade." },
              { title: "Hotéis Boutique", desc: "Espaços hoteleiros com design conceitual que exige durabilidade sem sacrificar estética." },
              { title: "Espaços Comerciais", desc: "Restaurantes, galerias e lojas de conceito onde a identidade visual passa pelo acabamento das paredes." },
            ].map((app) => (
              <div key={app.title} className="flex gap-6 items-start">
                <div className="size-2 bg-accent rounded-full mt-2 shrink-0" />
                <div>
                  <h4 className="font-display text-lg mb-2">{app.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Galeria</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <img src="/images/inspiration-1.jpg" alt="Aplicação Lumière Pigments 1" className="w-full aspect-square object-cover rounded-sm" loading="lazy" />
            <img src="/images/inspiration-2.jpg" alt="Aplicação Lumière Pigments 2" className="w-full aspect-square object-cover rounded-sm" loading="lazy" />
            <img src="/images/blog-1.jpg" alt="Aplicação Lumière Pigments 3" className="w-full aspect-square object-cover rounded-sm" loading="lazy" />
          </div>

          <div className="mt-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Mais imagens</span>
            <GallerySlider
              images={[
                { src: "/images/blog-2.jpg", alt: "Parede em Mineral Wash tonalidade areia" },
                { src: "/images/blog-3.jpg", alt: "Detalhe de acabamento Clay Finish" },
                { src: "/images/brand-detail.jpg", alt: "Coleção de tintas Lumière Pigments" },
                { src: "/images/about-showroom.jpg", alt: "Showroom com amostras Lumière Pigments" },
                { src: "/images/service-consultoria.jpg", alt: "Consultoria de cor com pigmentos naturais" },
                { src: "/images/hero-main.jpg", alt: "Interior acabado com pigmentos minerais" },
              ]}
            />
          </div>
        </section>


        {/* FAQ */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Perguntas frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "A Mineral Wash precisa de primer?", a: "Sim, recomendamos o primer mineral da própria gama para garantir aderência e uniformidade de cor." },
              { q: "Qual a durabilidade exterior?", a: "A Clay Finish é recomendada para interiores. Para exteriores, sugerimos a gama Terra Bruta com selante protetor." },
              { q: "Posso misturar tonalidades?", a: "Sim, todas as gamas são miscíveis entre si, permitindo criar tonalidades personalizadas." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-foreground/5 pb-6">
                <h4 className="font-display text-lg mb-2 text-foreground">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA + Contact Form */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-display text-4xl mb-6 italic">Quer conhecer a Lumière?</h3>
              <p className="text-background/70 mb-8 leading-relaxed">
                Solicite amostras, fichas técnicas ou agende uma demonstração no nosso showroom. O nosso equipa terá todo o gosto em apresentar-lhe cada textura ao vivo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-gold rounded-full" />
                  <span className="text-sm">Amostras gratuitas disponíveis</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-gold rounded-full" />
                  <span className="text-sm">Demonstrações agendadas semanalmente</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-gold rounded-full" />
                  <span className="text-sm">Fichas técnicas detalhadas em PDF</span>
                </div>
              </div>
            </div>
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>
    </div>
  );
}
