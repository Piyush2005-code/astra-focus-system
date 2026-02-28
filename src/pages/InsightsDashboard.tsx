import { motion } from "framer-motion";
import AttentionRing from "../components/AttentionRing";
import FocusHeatmap from "../components/FocusHeatmap";
import FocusGarden from "../components/FocusGarden";
import { Moon, Heart, Flame, TrendingUp, Brain } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const InsightsDashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-14 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="text-caption mb-1">FRIDAY, FEB 28</p>
          <h1 className="text-display">Insights</h1>
        </motion.div>
      </div>

      <motion.div className="px-5 space-y-4" variants={container} initial="hidden" animate="show">
        {/* Attention + Flow Score */}
        <motion.div variants={item} className="glass-card p-5 flex items-center gap-6">
          <AttentionRing score={78} />
          <div className="flex-1 space-y-3">
            <div>
              <p className="text-caption">Flow Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-foreground">6.4</span>
                <span className="text-caption">/10</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-sage-light overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "64%" }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </div>
            <div>
              <p className="text-caption">Deep Work Today</p>
              <span className="text-lg font-semibold text-foreground">3h 24m</span>
            </div>
          </div>
        </motion.div>

        {/* Focus Heatmap */}
        <motion.div variants={item} className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-headline">Focus Heatmap</h2>
            <span className="text-caption">This Week</span>
          </div>
          <FocusHeatmap />
        </motion.div>

        {/* Focus Garden */}
        <motion.div variants={item} className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-headline">Focus Garden</h2>
            <span className="text-[11px] font-medium text-primary">Week 9</span>
          </div>
          <FocusGarden level={2} />
          <p className="text-caption text-center mt-3">Keep focusing to grow your garden</p>
        </motion.div>

        {/* Health Summary */}
        <motion.div variants={item} className="glass-card p-5">
          <h2 className="text-headline mb-4">Health</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-astra-blue-light/50">
              <Moon size={18} className="text-health-sleep" />
              <span className="text-lg font-semibold text-foreground">7.2h</span>
              <span className="text-caption">Sleep</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-sage-light/50">
              <Heart size={18} className="text-health-hrv" />
              <span className="text-lg font-semibold text-foreground">48ms</span>
              <span className="text-caption">HRV</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-warm-gray-light/50">
              <Flame size={18} className="text-health-activity" />
              <span className="text-lg font-semibold text-foreground">340</span>
              <span className="text-caption">Calories</span>
            </div>
          </div>
        </motion.div>

        {/* Workload Forecast */}
        <motion.div variants={item} className="glass-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-astra-blue" />
            <h2 className="text-headline">Workload Forecast</h2>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {[0.4, 0.6, 0.85, 0.7, 0.9, 0.5, 0.3].map((val, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md"
                style={{
                  backgroundColor:
                    val > 0.8 ? "hsl(var(--health-activity) / 0.6)" :
                    val > 0.6 ? "hsl(var(--blue) / 0.5)" :
                    "hsl(var(--sage) / 0.4)",
                }}
                initial={{ height: 0 }}
                animate={{ height: `${val * 100}%` }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="flex-1 text-center text-[9px] font-medium text-muted-foreground">
                {d}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 p-2.5 rounded-lg bg-sage-light/40">
            <Brain size={14} className="text-primary" />
            <p className="text-xs text-muted-foreground">
              Wednesday has the highest cognitive demand. Consider lighter tasks in the afternoon.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InsightsDashboard;
