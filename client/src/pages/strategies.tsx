import { Layout } from "@/components/layout";
import { strategies } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Siren, 
  ShieldAlert, 
  Megaphone, 
  Handshake, 
  GraduationCap, 
  Landmark, 
  HeartHandshake, 
  Users
} from "lucide-react";
import backgroundTexture from "@assets/generated_images/subtle_texture_for_background.png";

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

export default function Strategies() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 border-b" style={{ backgroundImage: `url(${backgroundTexture})` }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Strategy Framework</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive 8-point plan to ensure the safety, dignity, and power of our community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {strategies.map((strategy, index) => {
          const Icon = icons[strategy.icon as keyof typeof icons] || Users;
          
          return (
            <div 
              key={strategy.id} 
              id={`strategy-${strategy.id}`}
              className="grid md:grid-cols-12 gap-8 items-start scroll-mt-24"
            >
              {/* Number and Icon */}
              <div className="md:col-span-3 lg:col-span-2 flex flex-col items-center md:items-end text-center md:text-right">
                <div className="text-6xl font-black text-muted-foreground/10 leading-none mb-2">
                  0{strategy.id}
                </div>
                <div className="bg-primary/5 p-4 rounded-2xl text-primary mb-4">
                  <Icon className="w-10 h-10" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-9 lg:col-span-10">
                <Card className="overflow-hidden border-t-4 border-t-primary">
                  <CardHeader className="bg-muted/10 pb-8">
                    <CardTitle className="text-2xl md:text-3xl font-serif font-bold text-primary">
                      {strategy.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground mt-2">
                      {strategy.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                      {/* Tactics */}
                      <div className="p-6 md:p-8">
                        <h4 className="font-bold text-primary mb-4 flex items-center uppercase tracking-wide text-sm">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Key Tactics
                        </h4>
                        <ul className="space-y-3">
                          {strategy.tactics.map((tactic, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="mr-2 text-primary">•</span>
                              {tactic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Volunteer Roles */}
                      <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900/50">
                        <h4 className="font-bold text-primary mb-4 flex items-center uppercase tracking-wide text-sm">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                          Volunteer Roles Needed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {strategy.roles.map((role, i) => (
                            <Badge key={i} variant="secondary" className="px-3 py-1 font-normal text-sm">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
