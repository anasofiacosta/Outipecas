import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Aura & Matiz" },
      { name: "description", content: "Contacte a Aura & Matiz. Estúdio no Porto. Orçamentos, consultoria de cor e suporte técnico em menos de 24 horas." },
      { property: "og:title", content: "Contactos — Aura & Matiz" },
      { property: "og:description", content: "Contacte a Aura & Matiz. Estúdio no Porto, aconselhamento técnico e amostras." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contactos — Aura & Matiz" },
      { name: "twitter:description", content: "Contacte a Aura & Matiz. Estúdio no Porto, aconselhamento técnico e amostras." },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: ContactosPage,
});

function ContactosPage() {
  return (
    <div>
      {/* Hero + info + mapa */}
      <section className="bg-background text-foreground pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-8 block">
              Contactos
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl text-balance">
              Falemos sobre o seu próximo <em>acabamento</em>.
            </h1>
          </motion.div>

          <div className="h-px bg-foreground/10 my-16" />

          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Estúdio Porto</p>
              <p className="text-sm">Rua da Estética Cromática, 102</p>
              <p className="text-sm">4000-000 Porto</p>
              <p className="text-sm">Portugal</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Contacto</p>
              <p className="text-sm">
                <a href="tel:+351220000000" className="hover:text-accent transition-colors">+351 220 000 000</a>
              </p>
              <p className="text-sm">
                <a href="mailto:geral@auramatiz.pt" className="hover:text-accent transition-colors">geral@auramatiz.pt</a>
              </p>
              <p className="text-sm">
                <a href="mailto:tecnico@auramatiz.pt" className="hover:text-accent transition-colors">tecnico@auramatiz.pt</a>
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Horário</p>
              <p className="text-sm">Segunda a Sexta</p>
              <p className="text-sm">09h00 — 18h30</p>
              <p className="text-sm">Visitas com marcação</p>
            </div>
          </div>

          <div className="mt-20 aspect-[16/9] w-full overflow-hidden border border-foreground/10">
            <iframe
              title="Mapa — Estúdio Porto"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-8.72%2C41.12%2C-8.54%2C41.19&layer=mapnik"
              className="w-full h-full grayscale opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="bg-background py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6 block">Contacto</span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Envie a sua <em>mensagem</em>.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-10">
              Receba aconselhamento técnico, amostras ou orçamento em menos de 24 horas.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>+351 220 000 000</p>
              <p>geral@auramatiz.pt</p>
              <p>Seg–Sex · 09h00 — 18h30</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
