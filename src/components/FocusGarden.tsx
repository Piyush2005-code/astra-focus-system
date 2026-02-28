import { motion } from "framer-motion";

const stages = [
  { height: "20%", opacity: 0.25, label: "Seed" },
  { height: "40%", opacity: 0.4, label: "Sprout" },
  { height: "60%", opacity: 0.6, label: "Growth" },
  { height: "80%", opacity: 0.8, label: "Bloom" },
];

const FocusGarden = ({ level = 2 }: { level?: number }) => {
  return (
    <div className="flex items-end justify-around h-28 px-4">
      {stages.map((stage, i) => {
        const isActive = i <= level;
        return (
          <div key={i} className="flex flex-col items-center gap-1">
            <motion.div
              className="w-4 rounded-full"
              style={{
                backgroundColor: isActive
                  ? `hsl(var(--sage) / ${stage.opacity + 0.2})`
                  : `hsl(var(--sage) / 0.1)`,
              }}
              initial={{ height: 0 }}
              animate={{ height: isActive ? stage.height : "10%" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <span className="text-[9px] font-medium text-muted-foreground">{stage.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FocusGarden;
