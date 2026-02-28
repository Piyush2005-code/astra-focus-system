import { motion } from "framer-motion";
import { Brain, BookOpen, Coffee, Dumbbell } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = 4; // Friday (0-indexed)

interface ScheduleEvent {
  time: string;
  title: string;
  duration: string;
  type: "deep" | "light" | "break" | "exercise";
  load: number; // 0-1
}

const events: ScheduleEvent[] = [
  { time: "8:00", title: "Morning Review", duration: "30m", type: "light", load: 0.3 },
  { time: "8:30", title: "Deep Work: Thesis Chapter 4", duration: "2h", type: "deep", load: 0.9 },
  { time: "10:30", title: "Break & Movement", duration: "15m", type: "break", load: 0.1 },
  { time: "10:45", title: "Research Reading", duration: "1h 30m", type: "deep", load: 0.75 },
  { time: "12:15", title: "Lunch", duration: "45m", type: "break", load: 0.05 },
  { time: "1:00", title: "Email & Admin", duration: "45m", type: "light", load: 0.35 },
  { time: "1:45", title: "Study Group Session", duration: "1h", type: "light", load: 0.5 },
  { time: "2:45", title: "Exercise", duration: "45m", type: "exercise", load: 0.2 },
];

const typeConfig = {
  deep: { bg: "bg-sage/10", border: "border-sage/20", icon: Brain, color: "text-primary" },
  light: { bg: "bg-astra-blue-light/50", border: "border-astra-blue/10", icon: BookOpen, color: "text-astra-blue" },
  break: { bg: "bg-warm-gray-light/60", border: "border-warm-gray/10", icon: Coffee, color: "text-warm-gray" },
  exercise: { bg: "bg-sage-light/50", border: "border-sage/10", icon: Dumbbell, color: "text-health-hrv" },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const SchedulePlanner = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-14 pb-4">
        <p className="text-caption mb-1">PLAN</p>
        <h1 className="text-display">Schedule</h1>
      </div>

      {/* Day selector */}
      <div className="px-5 mb-5">
        <div className="flex gap-1.5">
          {days.map((day, i) => (
            <motion.button
              key={day}
              whileTap={{ scale: 0.92 }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                i === today
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {day}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Cognitive load bar */}
      <div className="px-5 mb-5">
        <div className="glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption">Cognitive Load</span>
            <span className="text-xs font-semibold text-primary">Moderate</span>
          </div>
          <div className="h-2 rounded-full bg-sage-light overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(var(--sage)), hsl(var(--blue)))",
              }}
              initial={{ width: 0 }}
              animate={{ width: "62%" }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[9px] text-muted-foreground">Low</span>
            <span className="text-[9px] text-muted-foreground">High</span>
          </div>
        </div>
      </div>

      {/* Events */}
      <motion.div className="px-5 space-y-2" variants={container} initial="hidden" animate="show">
        {events.map((event, i) => {
          const config = typeConfig[event.type];
          const Icon = config.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              className={`flex items-start gap-3 p-4 rounded-xl border ${config.bg} ${config.border}`}
            >
              <div className="mt-0.5">
                <Icon size={16} className={config.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-headline text-sm">{event.title}</span>
                  <span className="text-caption">{event.duration}</span>
                </div>
                <span className="text-caption">{event.time}</span>
              </div>
              {event.type === "deep" && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[9px] font-medium text-primary">Deep Focus</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SchedulePlanner;
