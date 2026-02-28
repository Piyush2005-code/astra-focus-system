import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Habit {
  name: string;
  streak: number;
  target: number;
  completedToday: boolean;
  weekProgress: boolean[]; // last 7 days
}

const habits: Habit[] = [
  { name: "Morning Meditation", streak: 12, target: 30, completedToday: true, weekProgress: [true, true, true, false, true, true, true] },
  { name: "Deep Work Block", streak: 8, target: 21, completedToday: true, weekProgress: [true, true, false, true, true, true, true] },
  { name: "Exercise", streak: 5, target: 14, completedToday: false, weekProgress: [true, false, true, true, true, false, false] },
  { name: "Journal Reflection", streak: 3, target: 14, completedToday: false, weekProgress: [false, true, true, false, true, false, false] },
  { name: "Screen-Free Evening", streak: 6, target: 21, completedToday: true, weekProgress: [true, true, false, true, true, true, true] },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const HabitsModule = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-14 pb-4">
        <p className="text-caption mb-1">CONSISTENCY</p>
        <h1 className="text-display">Habits</h1>
      </div>

      {/* Summary */}
      <div className="px-5 mb-5">
        <div className="glass-card p-5 flex items-center gap-5">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold text-foreground">3/5</span>
            <span className="text-caption">Done Today</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold text-primary">12</span>
            <span className="text-caption">Best Streak</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold text-astra-blue">78%</span>
            <span className="text-caption">This Week</span>
          </div>
        </div>
      </div>

      {/* Habits list */}
      <motion.div className="px-5 space-y-3" variants={container} initial="hidden" animate="show">
        {habits.map((habit, i) => (
          <motion.div key={i} variants={item} className="glass-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                    habit.completedToday
                      ? "bg-primary border-primary"
                      : "border-border"
                  }`}
                >
                  {habit.completedToday && <Check size={14} className="text-primary-foreground" />}
                </motion.button>
                <span className={`text-headline text-sm ${habit.completedToday ? "" : "text-muted-foreground"}`}>
                  {habit.name}
                </span>
              </div>
              <span className="text-caption">{habit.streak} day streak</span>
            </div>

            {/* Progress bar */}
            <div className="mb-2">
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary/70"
                  initial={{ width: 0 }}
                  animate={{ width: `${(habit.streak / habit.target) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-muted-foreground">{habit.streak} days</span>
                <span className="text-[9px] text-muted-foreground">{habit.target} day goal</span>
              </div>
            </div>

            {/* Week dots */}
            <div className="flex gap-1.5 justify-center">
              {habit.weekProgress.map((done, j) => (
                <div
                  key={j}
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-medium ${
                    done
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {["M", "T", "W", "T", "F", "S", "S"][j]}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HabitsModule;
