import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ChecklistItemProps {
  id: string;
  text: string;
  checked: boolean;
  onToggle: (id: string) => void;
}

const ChecklistItem = ({ id, text, checked, onToggle }: ChecklistItemProps) => {
  return (
    <motion.label
      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted/50"
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
          checked
            ? 'bg-success border-success'
            : 'border-muted-foreground/30 hover:border-primary'
        }`}
        animate={checked ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.2 }}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <Check className="w-4 h-4 text-success-foreground" />
          </motion.div>
        )}
      </motion.div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
        className="sr-only"
      />
      <span className={`text-sm transition-colors ${
        checked ? 'text-muted-foreground line-through' : 'text-foreground'
      }`}>
        {text}
      </span>
    </motion.label>
  );
};

export default ChecklistItem;
