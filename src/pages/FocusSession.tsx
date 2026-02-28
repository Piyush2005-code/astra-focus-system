import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";

const FocusSession = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes] = useState(25);
  const [seconds] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col pb-24">
      <div className="px-5 pt-14 pb-4">
        <p className="text-caption mb-1">FOCUS MODE</p>
        <h1 className="text-display">Deep Work</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5 -mt-10">
        {/* Breathing circle behind timer */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-sage/10"
            animate={isRunning ? {
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.5, 0.3],
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-52 h-52 rounded-full bg-sage/8"
            animate={isRunning ? {
              scale: [1, 1.08, 1],
              opacity: [0.2, 0.35, 0.2],
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Timer */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              className="text-6xl font-light tracking-tight text-foreground tabular-nums"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </motion.span>
            <span className="text-caption mt-2">
              {isRunning ? "Focus in progress" : "Ready to begin"}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-6">
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
            onClick={() => {}}
          >
            <RotateCcw size={16} className="text-muted-foreground" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.02 }}
            className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg"
            onClick={() => setIsRunning(!isRunning)}
            style={{
              boxShadow: "0 8px 30px -8px hsl(var(--sage) / 0.4)",
            }}
          >
            <AnimatePresence mode="wait">
              {isRunning ? (
                <motion.div key="pause" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                  <Pause size={28} className="text-primary-foreground" />
                </motion.div>
              ) : (
                <motion.div key="play" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                  <Play size={28} className="text-primary-foreground ml-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <div className="w-10 h-10" /> {/* Spacer for symmetry */}
        </div>

        {/* Session type selector */}
        <div className="mt-10 flex gap-2">
          {["25 min", "50 min", "90 min"].map((dur, i) => (
            <motion.button
              key={dur}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 ${
                i === 0
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {dur}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusSession;
