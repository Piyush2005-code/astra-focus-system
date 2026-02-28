import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabBar from "./components/TabBar";
import InsightsDashboard from "./pages/InsightsDashboard";
import FocusSession from "./pages/FocusSession";
import MeditationScreen from "./pages/MeditationScreen";
import SchedulePlanner from "./pages/SchedulePlanner";
import HabitsModule from "./pages/HabitsModule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-md mx-auto relative min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<InsightsDashboard />} />
            <Route path="/focus" element={<FocusSession />} />
            <Route path="/meditate" element={<MeditationScreen />} />
            <Route path="/schedule" element={<SchedulePlanner />} />
            <Route path="/habits" element={<HabitsModule />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <TabBar />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
