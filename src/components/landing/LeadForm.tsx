import { useState } from "react";
import { z } from "zod";
import { Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/sheets";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20, "WhatsApp muito longo")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números"),
});

type LeadFormProps = {
  variant?: "light" | "dark";
  ctaLabel?: string;
  id?: string;
};

const LeadForm = ({ variant = "light", ctaLabel = "QUERO ACESSAR AGORA", id }: LeadFormProps) => {
  const [values, setValues] = useState({ name: "", email: "", whatsapp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const isDark = variant === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await submitLead(result.data);
      window.top!.location.href = "https://portoeperottoni.com.br/obrigado/";
    } catch (err) {
      console.error("[Lead submit error]", err);
      toast.error("Não foi possível enviar agora.", {
        description: "Tente novamente em instantes.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = isDark
    ? "bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
    : "";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`w-full max-w-md space-y-3 rounded-xl p-6 ${
        isDark ? "bg-white/5 backdrop-blur border border-white/10" : "bg-card shadow-card border border-border"
      }`}
    >
      <div>
        <Input
          aria-label="Nome"
          placeholder="Seu nome completo"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          maxLength={100}
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>
      <div>
        <Input
          type="email"
          aria-label="E-mail"
          placeholder="Seu melhor e-mail"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          maxLength={255}
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <Input
          type="tel"
          aria-label="WhatsApp"
          placeholder="WhatsApp com DDD"
          value={values.whatsapp}
          onChange={(e) => setValues({ ...values, whatsapp: e.target.value })}
          maxLength={20}
          className={inputClass}
        />
        {errors.whatsapp && <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>}
      </div>
      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold tracking-wide shadow-elegant"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : ctaLabel}
      </Button>
      <p
        className={`flex items-center justify-center gap-1.5 text-xs ${
          isDark ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        <Lock className="h-3 w-3" /> Acesso com vagas limitadas.
      </p>
    </form>
  );
};

export default LeadForm;
