import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  variant?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

export function ContactForm({ variant = "light", title, subtitle }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "",
    mensagem: "",
    rgpd: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isDark = variant === "dark";
  const textColor = isDark ? "text-background" : "text-foreground";
  const mutedColor = isDark ? "text-background/60" : "text-muted-foreground";
  const borderColor = isDark ? "border-background/20" : "border-foreground/10";
  const focusColor = isDark ? "focus:border-brand-gold" : "focus:border-accent";
  const inputBg = isDark ? "bg-transparent" : "bg-transparent";
  const btnBg = isDark ? "bg-background text-foreground hover:bg-brand-gold" : "bg-foreground text-background hover:bg-accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {title && <h3 className={`font-display text-3xl italic ${textColor}`}>{title}</h3>}
      {subtitle && <p className={`text-sm ${mutedColor} leading-relaxed`}>{subtitle}</p>}

      {submitted ? (
        <div className={`p-6 border ${borderColor} ${textColor}`}>
          <p className="font-display text-xl italic">Obrigado pelo seu contacto!</p>
          <p className={`text-sm ${mutedColor} mt-2`}>Responderemos o mais brevemente possível.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={`text-[10px] uppercase tracking-widest ${mutedColor}`}>Nome *</label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className={`w-full ${inputBg} border-b ${borderColor} py-2 focus:outline-none ${focusColor} transition-colors text-sm ${textColor} placeholder:${mutedColor}`}
                placeholder="O seu nome"
              />
            </div>
            <div className="space-y-2">
              <label className={`text-[10px] uppercase tracking-widest ${mutedColor}`}>Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full ${inputBg} border-b ${borderColor} py-2 focus:outline-none ${focusColor} transition-colors text-sm ${textColor} placeholder:${mutedColor}`}
                placeholder="email@empresa.pt"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={`text-[10px] uppercase tracking-widest ${mutedColor}`}>Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={`w-full ${inputBg} border-b ${borderColor} py-2 focus:outline-none ${focusColor} transition-colors text-sm ${textColor} placeholder:${mutedColor}`}
                placeholder="+351 000 000 000"
              />
            </div>
            <div className="space-y-2">
              <label className={`text-[10px] uppercase tracking-widest ${mutedColor}`}>Empresa (opcional)</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full ${inputBg} border-b ${borderColor} py-2 focus:outline-none ${focusColor} transition-colors text-sm ${textColor} placeholder:${mutedColor}`}
                placeholder="Nome da empresa"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className={`text-[10px] uppercase tracking-widest ${mutedColor}`}>Assunto *</label>
            <select
              name="assunto"
              required
              value={formData.assunto}
              onChange={handleChange}
              className={`w-full ${inputBg} border-b ${borderColor} py-2 focus:outline-none ${focusColor} transition-colors text-sm ${textColor} appearance-none`}
            >
              <option value="" disabled className="text-foreground">Selecione...</option>
              <option value="orcamento" className="text-foreground">Orçamento</option>
              <option value="cotacao" className="text-foreground">Cotação para Projecto</option>
              <option value="amostras" className="text-foreground">Amostras de Cor</option>
              <option value="suporte" className="text-foreground">Suporte Técnico</option>
              <option value="outro" className="text-foreground">Outro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className={`text-[10px] uppercase tracking-widest ${mutedColor}`}>Mensagem *</label>
            <textarea
              name="mensagem"
              required
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              className={`w-full ${inputBg} border-b ${borderColor} py-2 focus:outline-none ${focusColor} transition-colors text-sm ${textColor} placeholder:${mutedColor} resize-none`}
              placeholder="Detalhe o seu projeto ou questão..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="rgpd"
              id="rgpd"
              required
              checked={formData.rgpd}
              onChange={handleChange}
              className="mt-1 accent-accent"
            />
            <label htmlFor="rgpd" className={`text-[11px] ${mutedColor} leading-tight`}>
              Aceito o tratamento dos meus dados de acordo com a <a href="/politica-de-privacidade" className="underline hover:text-accent">Política de Privacidade</a> e RGPD.
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-5 text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${btnBg}`}
          >
            Enviar Pedido
          </button>
        </form>
      )}
    </motion.div>
  );
}
