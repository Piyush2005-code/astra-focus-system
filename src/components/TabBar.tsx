import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Target, Flower2, Calendar, Repeat } from "lucide-react";

const tabs = [
  { path: "/", icon: BarChart3, label: "Insights" },
  { path: "/focus", icon: Target, label: "Focus" },
  { path: "/meditate", icon: Flower2, label: "Meditate" },
  { path: "/schedule", icon: Calendar, label: "Schedule" },
  { path: "/habits", icon: Repeat, label: "Habits" },
];

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="tab-bar">
      <div className="flex items-center justify-around px-2 pt-2 pb-1">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl bg-sage/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                size={22}
                strokeWidth={isActive ? 2 : 1.5}
                className={isActive ? "text-primary" : "text-muted-foreground"}
              />
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TabBar;
