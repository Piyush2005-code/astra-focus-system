import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Flower2 } from "lucide-react";

const categories = ["Mindfulness", "Body Scan", "Breathing", "Gratitude"];
const durations = [5, 10, 15, 20];

const MeditationScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(1);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-14 pb-4">
        <p className="text-caption mb-1">MINDFULNESS</p>
        <h1 className="text-display">Meditate</h1>
      </div>

      <div className="px-5 space-y-6">
        {/* Ambient visual */}
        <motion.div
          className="relative h-48 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, hsl(var(--sage-light)), hsl(var(--meditation-light)), hsl(var(--blue-light)))" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-meditation/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-sage/15"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <Flower2 size={32} className="absolute text-meditation/40" />
        </motion.div>

        {/* Category chips */}
        <div>
          <p className="text-label mb-3">PRACTICE</p>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(i)}
                className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === i
                    ? "bg-meditation/15 text-meditation border border-meditation/20"
                    : "bg-muted text-muted-foreground border border-transparent"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Duration selector */}
        <div>
          <p className="text-label mb-3">DURATION</p>
          <div className="flex gap-3">
            {durations.map((dur, i) => (
              <motion.button
                key={dur}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDuration(i)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedDuration === i
                    ? "bg-meditation/12 text-meditation border border-meditation/15"
                    : "bg-muted text-muted-foreground border border-transparent"
                }`}
              >
                {dur}m
              </motion.button>
            ))}
          </div>
        </div>

        {/* Start button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-medium text-base flex items-center justify-center gap-2"
          style={{ boxShadow: "0 8px 24px -8px hsl(var(--sage) / 0.35)" }}
        >
          <Play size={18} />
          Begin Session
        </motion.button>

        {/* Recent reflection */}
        <motion.div
          className="glass-card p-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className="text-label mb-2">LAST REFLECTION</p>
          <p className="text-body text-muted-foreground italic leading-relaxed">
            "I noticed my mind was quieter today. The breathing exercise helped me feel present before starting work."
          </p>
          <p className="text-caption mt-2">Yesterday, 8:12 AM</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MeditationScreen;
