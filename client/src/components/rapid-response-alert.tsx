import { AlertCircle } from "lucide-react";

export function RapidResponseAlert() {
  return (
    <div className="bg-destructive text-destructive-foreground px-4 py-3 shadow-md relative z-40">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium text-center">
        <AlertCircle className="w-5 h-5 shrink-0 animate-pulse" />
        <p>
          Need urgent legal help? Call the Rapid Response Hotline: <a href="tel:6124492341" className="font-bold underline hover:text-white">612-449-2341</a>
        </p>
      </div>
    </div>
  );
}
