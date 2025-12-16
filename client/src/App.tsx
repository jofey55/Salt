import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Strategies from "@/pages/strategies";
import About from "@/pages/about";
import Resources from "@/pages/resources";
import Contact from "@/pages/contact";
import PrintableEmergencyPlan from "@/pages/printable-emergency-plan";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/strategies" component={Strategies} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/emergency-plan" component={PrintableEmergencyPlan} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
