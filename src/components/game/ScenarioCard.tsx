import { motion } from "framer-motion";
import { MessageCircle, Mail, Facebook, AlertTriangle, Smartphone, Link2 } from "lucide-react";
import { Question } from "@/data/questions";

interface ScenarioCardProps {
  question: Question;
}

const typeConfig = {
  sms: {
    icon: Smartphone,
    label: "SMS",
    bgClass: "bg-success/10",
    textClass: "text-success",
  },
  whatsapp: {
    icon: MessageCircle,
    label: "WhatsApp",
    bgClass: "bg-success/10",
    textClass: "text-success",
  },
  email: {
    icon: Mail,
    label: "Email",
    bgClass: "bg-primary/10",
    textClass: "text-primary",
  },
  facebook: {
    icon: Facebook,
    label: "Facebook",
    bgClass: "bg-primary/10",
    textClass: "text-primary",
  },
  link: {
    icon: Link2,
    label: "Lien suspect",
    bgClass: "bg-warning/10",
    textClass: "text-warning",
  },
};

export const ScenarioCard = ({ question }: ScenarioCardProps) => {
  const config = typeConfig[question.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden"
    >
      {/* Header */}
      <div className="bg-muted/50 px-5 py-3 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full ${config.bgClass} flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${config.textClass}`} />
          </div>
          <span className="font-semibold text-foreground">{config.label}</span>
        </div>
        <div className="flex items-center gap-1 text-accent">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-xs font-medium">Attention</span>
        </div>
      </div>

      {/* Message content */}
      <div className="p-5">
        {question.sender && (
          <p className="text-sm text-muted-foreground mb-2">
            De : <span className="font-medium text-foreground">{question.sender}</span>
          </p>
        )}
        <div className="bg-muted/30 rounded-xl p-4 border border-border">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {question.message}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
