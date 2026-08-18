import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Perguntas Frequentes — Aura & Matiz" },
      { name: "description", content: "Respostas às perguntas mais frequentes sobre tintas, vernizes, acabamentos e os nossos serviços." },
      { property: "og:title", content: "FAQs — Perguntas Frequentes — Aura & Matiz" },
      { property: "og:description", content: "Respostas às perguntas mais frequentes sobre tintas, vernizes e acabamentos." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [
      { rel: "canonical", href: "/faqs" },
    ],
  }),
  component: FAQsPage,
});

const faqs = [
  {
    cat: "Tintas & Produtos",
    items: [
      { q: "Como escolher a tinta ideal para o meu projeto?", a: "A nossa consultoria de cor analisa a luz natural, o estilo arquitetónico e as preferências pessoais para recomendar a gama perfeita. Agende uma sessão gratuita no nosso showroom." },
      { q: "As tintas são ecológicas?", a: "Sim, todas as gamas premium possuem certificação de baixo VOC e respeitam as normas ambientais mais exigentes da União Europeia." },
      { q: "Qual a diferença entre tintas à base de água e solvente?", a: "As tintas à base de água secam mais rápido, têm menos odor e são mais fáceis de limpar. As à base de solvente oferecem maior durabilidade em superfícies exteriores expostas." },
      { q: "Posso obter amostras antes de comprar?", a: "Claro. Fornecemos amostras de 100ml das nossas gamas premium para teste em ambiente real. Contacte-nos para pedir as suas." },
    ],
  },
  {
    cat: "Serviços",
    items: [
      { q: "Oferecem apoio técnico durante a obra?", a: "Com certeza. O nosso serviço de apoio técnico inclui visitas ao local para garantir uma aplicação impecável e resolver qualquer dúvida em tempo real." },
      { q: "O que inclui a consultoria de cor?", a: "A consultoria inclui análise do espaço, estudo da luz natural, apresentação de paletas personalizadas e acompanhamento até à aplicação final." },
      { q: "Realizam formações para aplicadores?", a: "Sim, organizamos workshops regulares para profissionais nas nossas instalações do Porto e Lisboa. Consulte o calendário no blog." },
      { q: "Qual o prazo de resposta a um pedido de orçamento?", a: "Orçamentos simples são respondidos em 24 horas. Projetos complexos com visita ao local podem demorar até 3 dias úteis." },
    ],
  },
  {
    cat: "Entrega & Garantia",
    items: [
      { q: "Fazem entregas em todo o país?", a: "Sim, entregamos em Portugal continental e ilhas. Para encomendas superiores a 500€, a entrega é gratuita." },
      { q: "Qual a garantia dos produtos?", a: "Todos os produtos têm garantia do fabricante de 2 a 10 anos, conforme a gama. Acabamentos aplicados pelo nosso serviço têm garantia de 5 anos." },
      { q: "Posso devolver produtos não abertos?", a: "Sim, aceitamos devoluções de produtos selados até 14 dias após a compra, conforme a legislação portuguesa." },
      { q: "Como devo armazenar tintas e vernizes?", a: "Mantenha os produtos num local fresco, seco e protegido da luz solar directa. A temperatura ideal é entre 10ºC e 25ºC." },
    ],
  },
];

function FAQsPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Ajuda</span>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8 text-balance">
            Perguntas <em>Frequentes</em>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Respostas às questões mais comuns sobre os nossos produtos, serviços e processos.
          </p>
        </motion.div>

        <div className="space-y-16">
          {faqs.map((section) => (
            <div key={section.cat}>
              <h2 className="font-display text-2xl mb-8 text-foreground">{section.cat}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.cat}-${i}`}
                    className="border border-foreground/5 bg-card px-6"
                  >
                    <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center py-16 bg-secondary/30">
          <h3 className="font-display text-2xl mb-4">Não encontrou a sua pergunta?</h3>
          <p className="text-muted-foreground mb-8">Estamos disponíveis para esclarecer qualquer dúvida.</p>
          <Link
            to="/contactos"
            className="inline-block px-10 py-5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-all"
          >
            Contactar Agora
          </Link>
        </div>
      </section>
    </div>
  );
}
