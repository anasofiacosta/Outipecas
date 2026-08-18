import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="py-20 px-6 border-t border-foreground/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-foreground flex items-center justify-center">
                <div className="size-3 border border-background rotate-45" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight uppercase">
                Aura &amp; Matiz
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Excelência em revestimentos e pigmentos. Transformando a arquitetura portuguesa com precisão e alma.
            </p>
            <p className="text-sm text-muted-foreground">
              Rua da Estética Cromática, 102<br />
              4000-000 Porto, Portugal
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-semibold text-foreground">+351 220 000 000</p>
              <p className="text-xs uppercase tracking-widest font-semibold text-foreground">contacto@auramatiz.pt</p>
            </div>
            <div className="flex gap-4">
              <div className="size-8 rounded-full border border-foreground/10 flex items-center justify-center text-[10px] font-mono text-muted-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                IG
              </div>
              <div className="size-8 rounded-full border border-foreground/10 flex items-center justify-center text-[10px] font-mono text-muted-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                FB
              </div>
              <div className="size-8 rounded-full border border-foreground/10 flex items-center justify-center text-[10px] font-mono text-muted-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                LI
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h6 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 text-foreground">Explorar</h6>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/marcas" className="hover:text-accent transition-colors">Produtos</Link></li>
              <li><Link to="/marcas" className="hover:text-accent transition-colors">Marcas</Link></li>
              <li><Link to="/servicos" className="hover:text-accent transition-colors">Serviços</Link></li>
              <li><Link to="/inspiracao" className="hover:text-accent transition-colors">Inspiração</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h6 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 text-foreground">Empresa</h6>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contactos" className="hover:text-accent transition-colors">Contactos</Link></li>
              <li><Link to="/faqs" className="hover:text-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h6 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 text-foreground">Newsletter</h6>
            <p className="text-sm text-muted-foreground mb-6">Subscreva para receber novidades sobre coleções e guias técnicos.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu e-mail"
                className="flex-1 bg-transparent border-b border-foreground/10 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="px-6 py-2 text-[10px] uppercase tracking-widest font-semibold border border-foreground hover:bg-foreground hover:text-background transition-all italic"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-6">
          <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Aura &amp; Matiz. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
            <Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">Privacidade</Link>
            <Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">Termos</Link>
            <Link to="/faqs" className="hover:text-accent transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
