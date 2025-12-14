import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Siren, 
  ShieldAlert, 
  Megaphone, 
  Handshake, 
  GraduationCap, 
  Landmark, 
  HeartHandshake, 
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const icons = {
  Siren,
  ShieldAlert,
  Megaphone,
  Handshake,
  GraduationCap,
  Landmark,
  HeartHandshake,
  Users
};

interface StrategyCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  compact?: boolean;
}

export function StrategyCard({ id, title, description, icon, compact = false }: StrategyCardProps) {
  const Icon = icons[icon as keyof typeof icons] || Users;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card h-full flex flex-col">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/5 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-bold font-serif leading-tight group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
      {!compact && (
        <CardFooter className="pt-0">
          <Link href={`/strategies#strategy-${id}`}>
            <Button variant="ghost" className="p-0 h-auto font-medium hover:bg-transparent hover:text-primary hover:underline">
              Learn tactics <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
