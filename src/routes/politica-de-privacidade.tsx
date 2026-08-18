import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Aura & Matiz" },
      { name: "description", content: "Política de Privacidade da Aura & Matiz. Saiba como tratamos e protegemos os seus dados pessoais." },
      { property: "og:title", content: "Política de Privacidade — Aura & Matiz" },
      { property: "og:description", content: "Política de Privacidade da Aura & Matiz." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [
      { rel: "canonical", href: "/politica-de-privacidade" },
    ],
  }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Legal</span>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8 text-balance">
            Política de <em>Privacidade</em>
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().getFullYear()}
          </p>
        </motion.div>

        <div className="space-y-12">
          <Section title="1. Identificação do Responsável">
            <p>A Aura &amp; Matiz, Lda., com sede na Rua da Estética Cromática, 102, 4000-000 Porto, Portugal, é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste website.</p>
          </Section>

          <Section title="2. Dados Recolhidos">
            <p>Recolhemos os seguintes dados pessoais quando preenche o nosso formulário de contacto:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>Nome e apelido</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
              <li>Nome da empresa (opcional)</li>
              <li>Conteúdo da mensagem</li>
            </ul>
          </Section>

          <Section title="3. Finalidade do Tratamento">
            <p>Os seus dados pessoais são tratados exclusivamente para as seguintes finalidades:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>Resposta a pedidos de informação e orçamentos</li>
              <li>Contacto comercial relacionado com os seus projetos</li>
              <li>Envio de newsletters (mediante consentimento explícito)</li>
              <li>Melhoria contínua dos nossos serviços</li>
            </ul>
          </Section>

          <Section title="4. Base Legal">
            <p>O tratamento dos seus dados baseia-se no consentimento expresso que concede ao submeter o formulário de contacto, bem como no interesse legítimo da Aura &amp; Matiz em responder aos seus pedidos.</p>
          </Section>

          <Section title="5. Conservação dos Dados">
            <p>Os seus dados pessoais serão conservados pelo período estritamente necessário à prossecução das finalidades referidas, até um máximo de 2 anos após o último contacto.</p>
          </Section>

          <Section title="6. Direitos do Titular">
            <p>Em qualquer momento, tem o direito de:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>Aceder aos seus dados pessoais</li>
              <li>Solicitar a retificação ou atualização dos seus dados</li>
              <li>Solicitar a eliminação dos seus dados</li>
              <li>Opor-se ao tratamento ou solicitar a limitação do mesmo</li>
              <li>Retirar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-4">Para exercer estes direitos, contacte-nos através do email contacto@auramatiz.pt.</p>
          </Section>

          <Section title="7. Segurança">
            <p>Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          </Section>

          <Section title="8. Cookies">
            <p>Este website utiliza cookies essenciais para o seu funcionamento. Não utilizamos cookies de rastreamento de terceiros nem perfilamento automático.</p>
          </Section>

          <Section title="9. Alterações">
            <p>Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. As alterações serão publicadas nesta página com a data da última atualização.</p>
          </Section>

          <Section title="10. Contacto">
            <p>Para questões relacionadas com a privacidade dos seus dados, contacte-nos através de:</p>
            <p className="mt-4 text-muted-foreground">Email: contacto@auramatiz.pt<br />Telefone: +351 220 000 000</p>
          </Section>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-foreground/5 pb-12">
      <h2 className="font-display text-2xl mb-6 text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
