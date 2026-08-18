import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { CheckCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos/$slug")({
  head: () => ({
    meta: [
      { title: "Consultoria de Cor — Aura & Matiz" },
      { name: "description", content: "Serviço de consultoria de cor da Aura & Matiz. Análise cromática profissional para harmonização de ambientes." },
      { property: "og:title", content: "Consultoria de Cor — Aura & Matiz" },
      { property: "og:description", content: "Análise cromática profissional para harmonização de ambientes." },
      { property: "og:url", content: "/servicos/consultoria-de-cor" },
    ],
    links: [
      { rel: "canonical", href: "/servicos/consultoria-de-cor" },
    ],
  }),
  component: ServicoDetailPage,
});

function ServicoDetailPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] mb-24 overflow-hidden">
        <img
          src="/images/service-consultoria.jpg"
          alt="Consultoria de Cor — Aura & Matiz"
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
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold mb-4 block">Serviço Premium</span>
              <h1 className="font-display text-5xl md:text-7xl text-background mb-4">Consultoria de Cor</h1>
              <p className="text-background/80 max-w-xl">Análise cromática profissional para harmonização de ambientes residenciais e comerciais.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Description */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl mb-8 italic">A arte de harmonizar espaços</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  A cor não é apenas uma questão de gosto pessoal — é ciência, psicologia e arquitetura. A nossa consultoria de cor vai muito além de apresentar um catálogo de amostras. Analisamos a luz natural do seu espaço, a orientação solar, os materiais existentes e o estilo arquitetónico para criar paletas coesas e atemporais.
                </p>
                <p>
                  Cada sessão é conduzida por um especialista com formação em design de interiores e cromoterapia, garantindo recomendações que transcendem modas passageiras e respeitam a identidade do edifício.
                </p>
              </div>
            </div>
            <div className="bg-secondary/30 p-10">
              <h3 className="font-display text-2xl mb-6">O que inclui</h3>
              <ul className="space-y-4">
                {[
                  "Análise da luz natural e orientação solar",
                  "Estudo de contrastes e complementariedades",
                  "Apresentação de paletas personalizadas",
                  "Amostras em tamanho real para teste",
                  "Relatório técnico completo",
                  "Acompanhamento até à aplicação final",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-24 py-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl mb-12 text-center italic">Benefícios</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { title: "Economia", desc: "Evite erros caros de aplicação e retrabalho com decisões informadas desde o início." },
                { title: "Harmonia", desc: "Garanta coesão cromática entre todos os ambientes do seu projeto." },
                { title: "Valorização", desc: "Cores bem escolhidas aumentam o valor percebido e real do imóvel." },
                { title: "Bem-estar", desc: "A cor certa influencia diretamente o humor, a produtividade e o descanso." },
              ].map((b) => (
                <div key={b.title}>
                  <h4 className="font-display text-lg mb-3">{b.title}</h4>
                  <p className="text-sm text-background/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Processo de trabalho</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Reunião no espaço para avaliar luz, materiais e objetivos." },
              { step: "02", title: "Pesquisa", desc: "Desenvolvimento de paletas e estudos de combinações." },
              { step: "03", title: "Apresentação", desc: "Sessão de apresentação com amostras em tamanho real." },
              { step: "04", title: "Acompanhamento", desc: "Acompanhamento durante a aplicação para ajustes finos." },
            ].map((s) => (
              <div key={s.step} className="border-t-2 border-accent pt-6">
                <span className="font-mono text-2xl text-accent italic mb-4 block">{s.step}</span>
                <h4 className="font-display text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Resultados esperados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Espaços coesos", desc: "Cada divisão comunica com as outras através de uma narrativa cromática consistente, criando fluidez visual." },
              { title: "Ambientes atemporais", desc: "Paletas que resistem ao teste do tempo, evitando a necessidade de renovações prematuras." },
              { title: "Experiências sensoriais", desc: "Cores que convidam ao toque e ao repouso, transformando paredes em elementos de bem-estar." },
              { title: "Projetos memoráveis", desc: "Identidade visual única que diferencia o seu projeto no mercado residencial ou comercial." },
            ].map((r) => (
              <div key={r.title} className="flex gap-4 items-start">
                <ArrowRight className="size-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg mb-2">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="font-display text-3xl mb-12">Perguntas frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Quanto tempo dura uma sessão de consultoria?", a: "A sessão inicial no local demora cerca de 2 horas. O processo completo, incluindo pesquisa e apresentação, estende-se por 1 a 2 semanas." },
              { q: "É necessário ter o projeto já definido?", a: "Não. A consultoria pode acontecer em qualquer fase, desde o projeto arquitetónico até à fase de decoração final." },
              { q: "A consultoria inclui a escolha de materiais?", a: "Sim, a nossa recomendação abrange não só a cor mas também o tipo de acabamento ideal para cada superfície." },
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
              <h3 className="font-display text-4xl mb-6 italic">Pronto para transformar o seu espaço?</h3>
              <p className="text-background/70 mb-8 leading-relaxed">
                Marque a sua consultoria de cor e descubra o poder transformador da escolha certa. A primeira sessão de diagnóstico é gratuita.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-gold rounded-full" />
                  <span className="text-sm">Primeira sessão gratuita</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-gold rounded-full" />
                  <span className="text-sm">Relatório técnico incluído</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-2 bg-brand-gold rounded-full" />
                  <span className="text-sm">Acompanhamento até à obra</span>
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
