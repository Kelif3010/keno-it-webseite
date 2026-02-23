import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle, ArrowRight, AlertTriangle, ShieldCheck, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ── Quiz ─────────────────────────────────────────────────────────────────────

const quizQuestions = [
  {
    id: "backup",
    question: "Haben Sie ein automatisches Backup, das außerhalb Ihres Büros gespeichert wird?",
  },
  {
    id: "mfa",
    question: "Nutzen alle Mitarbeiter Zwei-Faktor-Authentifizierung (MFA)?",
  },
  {
    id: "updates",
    question: "Werden Ihre Geräte automatisch mit Sicherheitsupdates versorgt?",
  },
  {
    id: "downtime",
    question: "Wissen Sie, wie lange Ihr Betrieb nach einem Totalausfall ohne IT arbeiten kann?",
  },
];

type QuizAnswer = "ja" | "nein" | "weiss_nicht";

// ── Contact form services ────────────────────────────────────────────────────

const services = [
  { id: "helpdesk", label: "Sofort-Hilfe per Fernwartung" },
  { id: "onboarding", label: "Onboarding & Geräteverwaltung" },
  { id: "security", label: "IT-Sicherheit & MFA" },
  { id: "maintenance", label: "Proaktive Wartung" },
];

// ── Props ────────────────────────────────────────────────────────────────────

interface ItCheckDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ── Component ────────────────────────────────────────────────────────────────

type Step = "quiz" | "result" | "form" | "submitted";

const ItCheckDialog = ({ open, onOpenChange }: ItCheckDialogProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>("quiz");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, QuizAnswer>>({});
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    employees: "",
    devices: "",
    selectedServices: [] as string[],
    currentSetup: "",
    message: "",
  });

  const handleQuizAnswer = (questionId: string, answer: QuizAnswer) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const allAnswered = quizQuestions.every((q) => quizAnswers[q.id]);

  const issueCount = Object.values(quizAnswers).filter(
    (a) => a === "nein" || a === "weiss_nicht"
  ).length;

  const getResult = () => {
    if (issueCount === 0)
      return {
        icon: ShieldCheck,
        color: "text-green-500",
        bg: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
        title: "Ihre IT ist gut aufgestellt!",
        desc: "Sie haben alle 4 Fragen positiv beantwortet. Trotzdem lohnt sich ein kurzes Gespräch – gemeinsam finden wir Potenziale, die Sie noch nicht kennen.",
      };
    if (issueCount <= 2)
      return {
        icon: AlertCircle,
        color: "text-amber-500",
        bg: "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800",
        title: `${issueCount} Bereich${issueCount > 1 ? "e" : ""} mit Optimierungspotenzial`,
        desc: "Kein Grund zur Panik – aber Handlungsbedarf ist da. Im IT-Check zeigen wir Ihnen, wie Sie diese Lücken schnell und kostengünstig schließen.",
      };
    return {
      icon: AlertTriangle,
      color: "text-red-500",
      bg: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
      title: `${issueCount} kritische Sicherheitslücken gefunden`,
      desc: "Ihre IT-Infrastruktur hat dringenden Handlungsbedarf. Jeder Tag ohne Maßnahme ist ein Risiko für Ihren Betrieb. Lassen Sie uns jetzt sprechen.",
    };
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((s) => s !== serviceId)
        : [...prev.selectedServices, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.company.trim() || !formData.contact.trim() || !formData.email.trim()) {
      toast({
        title: "Bitte füllen Sie die Pflichtfelder aus",
        description: "Firma, Ansprechpartner und E-Mail sind erforderlich.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Ungültige E-Mail-Adresse",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    // For now, just show success (later: send to backend)
    setStep("submitted");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep("quiz");
      setQuizAnswers({});
      setFormData({
        company: "",
        contact: "",
        email: "",
        phone: "",
        employees: "",
        devices: "",
        selectedServices: [],
        currentSetup: "",
        message: "",
      });
    }, 300);
  };

  const result = getResult();
  const ResultIcon = result.icon;

  // ── Progress indicator ───────────────────────────────────────────────────
  const stepIndex = { quiz: 1, result: 2, form: 3, submitted: 3 }[step];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* ── Success ───────────────────────────────────────────────────── */}
        {step === "submitted" && (
          <div className="py-12 text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Vielen Dank!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
              Wir freuen uns darauf, Ihre IT kennenzulernen!
            </p>
            <Button variant="secondary" onClick={handleClose} className="mt-4">
              Schließen
            </Button>
          </div>
        )}

        {/* ── Quiz ──────────────────────────────────────────────────────── */}
        {step === "quiz" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Schritt 1 von 3</span>
              </div>
              <DialogTitle className="text-2xl font-extrabold">
                Ihr kostenloser IT-Sicherheits-Check
              </DialogTitle>
              <DialogDescription className="text-base">
                4 kurze Fragen – und Sie sehen sofort, wo Ihr größtes Risiko liegt.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {quizQuestions.map((q, i) => (
                <div key={q.id} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    <span className="text-secondary mr-2">{i + 1}.</span>
                    {q.question}
                  </p>
                  <div className="flex gap-2">
                    {(["ja", "nein", "weiss_nicht"] as QuizAnswer[]).map((answer) => (
                      <button
                        key={answer}
                        onClick={() => handleQuizAnswer(q.id, answer)}
                        className={`flex-1 rounded-lg border py-2 text-sm font-medium transition-all ${
                          quizAnswers[q.id] === answer
                            ? answer === "ja"
                              ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700"
                              : answer === "nein"
                              ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 dark:border-red-600"
                              : "border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-600"
                            : "border-border bg-background text-muted-foreground hover:border-secondary hover:text-secondary"
                        }`}
                      >
                        {answer === "ja" ? "Ja" : answer === "nein" ? "Nein" : "Weiß nicht"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full font-semibold mt-2"
              disabled={!allAnswered}
              onClick={() => setStep("result")}
            >
              Ergebnis anzeigen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {/* ── Result ────────────────────────────────────────────────────── */}
        {step === "result" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Schritt 2 von 3</span>
              </div>
              <DialogTitle className="text-2xl font-extrabold">
                Ihr IT-Check Ergebnis
              </DialogTitle>
            </DialogHeader>

            <div className={`mt-4 rounded-xl border p-6 ${result.bg}`}>
              <div className="flex items-start gap-4">
                <ResultIcon className={`h-8 w-8 shrink-0 mt-0.5 ${result.color}`} />
                <div>
                  <h3 className="font-bold text-foreground text-lg">{result.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{result.desc}</p>
                </div>
              </div>
            </div>

            {/* Per-question summary */}
            <div className="mt-4 space-y-2">
              {quizQuestions.map((q) => {
                const answer = quizAnswers[q.id];
                const isOk = answer === "ja";
                return (
                  <div key={q.id} className="flex items-center gap-3 text-sm">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${isOk ? "bg-green-500" : "bg-red-400"}`} />
                    <span className={isOk ? "text-muted-foreground" : "text-foreground font-medium"}>
                      {q.question}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={() => setStep("quiz")} className="flex-1">
                Zurück
              </Button>
              <Button variant="secondary" size="lg" className="flex-1 font-semibold" onClick={() => setStep("form")}>
                Jetzt IT-Check vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        )}

        {/* ── Contact Form ──────────────────────────────────────────────── */}
        {step === "form" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Schritt 3 von 3</span>
              </div>
              <DialogTitle className="text-2xl font-extrabold">
                Kontaktdaten & Termin
              </DialogTitle>
              <DialogDescription className="text-base">
                Wir melden uns innerhalb von 24 Stunden für einen kostenlosen 15-Minuten-Termin.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Company & Contact */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  Kontaktdaten
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma *</Label>
                    <Input
                      id="company"
                      placeholder="Mustermann GmbH"
                      maxLength={100}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Ansprechpartner *</Label>
                    <Input
                      id="contact"
                      placeholder="Max Mustermann"
                      maxLength={100}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="max@firma.de"
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+49 123 456 789"
                      maxLength={30}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Company Size */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  Unternehmensgröße
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Anzahl Mitarbeiter</Label>
                    <Select
                      value={formData.employees}
                      onValueChange={(val) => setFormData({ ...formData, employees: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1–5 Mitarbeiter</SelectItem>
                        <SelectItem value="6-15">6–15 Mitarbeiter</SelectItem>
                        <SelectItem value="16-30">16–30 Mitarbeiter</SelectItem>
                        <SelectItem value="31-50">31–50 Mitarbeiter</SelectItem>
                        <SelectItem value="50+">Über 50 Mitarbeiter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Anzahl Geräte (PCs, Laptops, Server)</Label>
                    <Select
                      value={formData.devices}
                      onValueChange={(val) => setFormData({ ...formData, devices: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1–5 Geräte</SelectItem>
                        <SelectItem value="6-15">6–15 Geräte</SelectItem>
                        <SelectItem value="16-30">16–30 Geräte</SelectItem>
                        <SelectItem value="31-50">31–50 Geräte</SelectItem>
                        <SelectItem value="50+">Über 50 Geräte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  Welche Leistungen interessieren Sie?
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center gap-3 rounded-lg border border-border p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <Checkbox
                        checked={formData.selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <span className="text-sm font-medium text-foreground">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Current Setup & Message */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  Ihre aktuelle Situation
                </h4>
                <div className="space-y-2">
                  <Label htmlFor="currentSetup">Wie ist Ihre IT aktuell aufgestellt?</Label>
                  <Textarea
                    id="currentSetup"
                    placeholder="z. B. Wir haben einen kleinen Server, 10 Laptops, nutzen Gmail..."
                    maxLength={1000}
                    rows={3}
                    value={formData.currentSetup}
                    onChange={(e) => setFormData({ ...formData, currentSetup: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Gibt es etwas, das Sie besonders beschäftigt?</Label>
                  <Textarea
                    id="message"
                    placeholder="z. B. Wir hatten kürzlich einen Virenbefall, unser Backup ist veraltet..."
                    maxLength={1000}
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep("result")} className="flex-1">
                  Zurück
                </Button>
                <Button type="submit" variant="secondary" size="lg" className="flex-1 font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  Anfrage absenden
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Ihre Daten werden vertraulich behandelt und nur zur Kontaktaufnahme verwendet.
              </p>
            </form>
          </>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default ItCheckDialog;
