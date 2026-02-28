import { motion } from "framer-motion";

const FocusHeatmap = () => {
  // 7 days x 12 time blocks (6am-6pm, 1h each)
  const hours = ["6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = [
    [0.2, 0.3, 0.7, 0.9, 0.95, 0.8, 0.6, 0.3, 0.5, 0.7, 0.4, 0.2],
    [0.1, 0.4, 0.8, 0.85, 0.9, 0.75, 0.5, 0.4, 0.6, 0.65, 0.3, 0.1],
    [0.3, 0.5, 0.75, 0.92, 0.88, 0.7, 0.55, 0.35, 0.55, 0.6, 0.35, 0.15],
    [0.15, 0.35, 0.65, 0.8, 0.85, 0.78, 0.6, 0.45, 0.7, 0.75, 0.4, 0.2],
    [0.2, 0.45, 0.7, 0.88, 0.92, 0.82, 0.55, 0.3, 0.45, 0.5, 0.25, 0.1],
    [0.4, 0.5, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.1, 0.1, 0.1],
    [0.35, 0.45, 0.55, 0.45, 0.35, 0.25, 0.15, 0.1, 0.1, 0.1, 0.05, 0.05],
  ];

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        <div className="w-8" />
        {hours.map((h) => (
          <div key={h} className="flex-1 text-center text-[9px] font-medium text-muted-foreground">
            {h}
          </div>
        ))}
      </div>
      {days.map((day, i) => (
        <div key={day} className="flex gap-1 items-center">
          <span className="w-8 text-[10px] font-medium text-muted-foreground">{day}</span>
          {data[i].map((val, j) => (
            <motion.div
              key={j}
              className="flex-1 aspect-square rounded-[4px]"
              style={{
                backgroundColor: `hsl(var(--sage) / ${val * 0.85 + 0.05})`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i * 12 + j) * 0.008, duration: 0.3 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FocusHeatmap;
