import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target } from "lucide-react";

const ReflectiveNudge = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-sm glass-card p-5 border border-border/50 shadow-lg"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ boxShadow: "0 12px 40px -12px hsl(var(--shadow-soft) / 0.5)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-sage-light flex items-center justify-center">
                  <Target size={14} className="text-primary" />
                </div>
                <span className="text-caption">GENTLE NUDGE</span>
              </div>
              <button onClick={() => setVisible(false)} className="text-muted-foreground">
                <X size={16} />
              </button>
            </div>

            <p className="text-body leading-relaxed mb-4">
              You opened Instagram. Is this helping your goal of{" "}
              <span className="font-medium text-foreground">preparing for finals</span>?
            </p>

            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisible(false)}
                className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium"
              >
                Return to Focus
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisible(false)}
                className="flex-1 py-2.5 rounded-xl bg-muted text-muted-foreground text-xs font-medium"
              >
                5 Min Break
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReflectiveNudge;
