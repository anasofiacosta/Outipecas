import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Aura & Matiz" },
      { name: "description", content: "Conheça a história, missão e valores da Aura & Matiz. Mais de 40 anos de excelência em tintas, vernizes e acabamentos premium." },
      { property: "og:title", content: "Sobre Nós — Aura & Matiz" },
      { property: "og:description", content: "Conheça a história, missão e valores da Aura & Matiz." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [
      { rel: "canonical", href: "/sobre" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">A Nossa Essência</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl text-balance">
            Uma herança de <em>cor</em> e <em>precisão</em>.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Desde 1984, unimos a precisão química à sensibilidade artística para criar superfícies que respiram qualidade.
          </p>
        </motion.div>
      </section>

      {/* Image */}
      <section className="mb-24">
        <img
          src="/images/about-showroom.jpg"
          alt="Showroom Aura & Matiz"
          className="w-full max-h-[60vh] object-cover"
          loading="lazy"
        />
      </section>

      {/* History */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl mb-8 italic">A nossa história</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tudo começou num pequeno armazém no Porto, onde dois irmãos apaixonados pela química das cores decidiram importar os primeiros pigmentos minerais da Europa do Norte. Na época, o mercado português era dominado por produtos industriais de massa — e eles sonhavam com algo diferente: acabamentos que respeitassem a arquitetura tradicional e respondessem às exigências de um design contemporâneo.
              </p>
              <p>
                Ao longo de quatro décadas, a Aura &amp; Matiz cresceu de distribuidor local para referência nacional em acabamentos de luxo. Colaborámos com alguns dos mais prestigiados gabinetes de arquitetura do país, fornecemos materiais para palacetes restaurados e ajudámos a definir o padrão estético de hotéis boutique em Portugal e Espanha.
              </p>
              <p>
                Hoje, continuamos fiéis à nossa origem: curadoria técnica, relação próxima com cada cliente e um compromisso inabalável com a qualidade.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="border-l-2 border-accent pl-6">
              <span className="font-display text-5xl text-accent">1984</span>
              <p className="text-sm text-muted-foreground mt-2">Fundação do primeiro armazém no Porto</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <span className="font-display text-5xl text-accent">1998</span>
              <p className="text-sm text-muted-foreground mt-2">Expansão para Lisboa com showroom próprio</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <span className="font-display text-5xl text-accent">2015</span>
              <p className="text-sm text-muted-foreground mt-2">Lançamento da divisão de consultoria de cor</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <span className="font-display text-5xl text-accent">2024</span>
              <p className="text-sm text-muted-foreground mt-2">Referência nacional com 3 showrooms e equipa de 40 pessoas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4 block">Missão</span>
              <h3 className="font-display text-2xl mb-4">A perfeição como padrão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entregar soluções de acabamento que elevem cada projeto arquitetónico, combinando conhecimento técnico profundo com sensibilidade estética refinada.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4 block">Visão</span>
              <h3 className="font-display text-2xl mb-4">Referência ibérica</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ser reconhecidos como o parceiro preferido de arquitetos e decoradores em Portugal e Espanha, sinónimo de inovação sustentável e excelência artesanal.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4 block">Valores</span>
              <h3 className="font-display text-2xl mb-4">Autenticidade e rigor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transparência nas recomendações, respeito pelos materiais naturais, compromisso com a sustentabilidade e dedicação absoluta ao cliente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4 block">A Equipa</span>
          <h2 className="font-display text-4xl">Quem somos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Rui Sousa", role: "Fundador & CEO", desc: "Químico de formação, visionário de paixão. Define a estratégia e mantém o espírito artesanal vivo." },
            { name: "Catarina Mendes", role: "Diretora de Consultoria", desc: "Especialista em cromoterapia e tendências internacionais. A alma criativa por trás de cada projeto de cor." },
            { name: "Tomás Ferreira", role: "Diretor Técnico", desc: "Engenheiro de materiais com 20 anos de experiência em formulações industriais de alta performance." },
          ].map((person) => (
            <div key={person.name} className="text-center">
              <div className="size-20 bg-secondary/50 rounded-full mx-auto mb-6 flex items-center justify-center font-display text-2xl text-accent italic">
                {person.name.charAt(0)}
              </div>
              <h4 className="font-display text-xl">{person.name}</h4>
              <p className="text-xs uppercase tracking-widest text-accent mb-4">{person.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{person.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl mb-16 text-center italic">Diferenciais técnicos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Pigmentação Pura", desc: "Utilizamos apenas pigmentos de alta densidade que preservam a vivacidade durante décadas." },
              { title: "Testes Climáticos", desc: "Todos os produtos são testados sob sol, sal e humidade extrema durante 24 meses." },
              { title: "Curadoria Seletiva", desc: "Representamos apenas 8 marcas mundiais, selecionadas por qualidade e filosofia." },
              { title: "Suporte Integral", desc: "Do projecto à obra final, acompanhámo-lo em cada decisão técnica." },
            ].map((item) => (
              <div key={item.title} className="border border-background/10 p-8">
                <h4 className="font-display text-xl mb-4">{item.title}</h4>
                <p className="text-sm text-background/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4 block">Processo</span>
            <h2 className="font-display text-4xl mb-8">Acompanhamento ao cliente</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Diagnóstico Inicial", desc: "Reunião no showroom ou no local para entender o projeto, a luz natural e as expectativas estéticas." },
                { step: "02", title: "Proposta Técnica", desc: "Apresentação de amostras, fichas técnicas e orçamento detalhado com cronograma." },
                { step: "03", title: "Acompanhamento em Obra", desc: "Visitas regulares para verificar preparação de superfícies, misturas e aplicação." },
                { step: "04", title: "Entrega & Garantia", desc: "Relatório final de acabamento com garantia estendida e recomendações de manutenção." },
              ].map((s) => (
                <div key={s.step} className="flex gap-6">
                  <span className="font-mono text-2xl text-accent italic shrink-0">{s.step}</span>
                  <div>
                    <h4 className="font-display text-lg mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary/30 p-12">
            <img
              src="/images/service-consultoria.jpg"
              alt="Consultoria de cor em showroom"
              className="w-full aspect-[4/3] object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="font-display text-4xl mb-6">Quer conhecer-nos melhor?</h3>
          <p className="text-muted-foreground mb-10">Visite o nosso showroom no Porto ou marque uma reunião de consultoria.</p>
          <Link
            to="/contactos"
            className="inline-block px-10 py-5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-all"
          >
            Marcar Consulta
          </Link>
        </div>
      </section>
    </div>
  );
}
