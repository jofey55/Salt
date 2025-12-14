import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { RapidResponseAlert } from "@/components/rapid-response-alert";
import { StrategyCard } from "@/components/strategy-card";
import { strategies } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import partnerLogos from "@assets/IMG_20251213_202744_1765689144733.png";

export default function Home() {
  return (
    <Layout>
      <RapidResponseAlert />
      <Hero />
      
      {/* Strategies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our 8 Core Strategies
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive framework designed to protect, defend, and empower the Somali American community in Minnesota.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strategy) => (
              <StrategyCard key={strategy.id} {...strategy} compact />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/strategies">
              <Button size="lg" className="font-semibold">
                View Detailed Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              United for Justice & Dignity
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Our Vision:</strong> We envision a Minnesota where the Somali American community is safe, united, respected, and powerful—able to protect its families, shape its own narrative, and lead with dignity.
              </p>
              <p>
                <strong className="text-foreground">Our Mission:</strong> The Somali American Leadership Taskforce builds resources, sets strategy, and creates the connections required to protect our community and advance our collective power.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline">Learn About Our Governance</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-video bg-white rounded-xl shadow-xl p-8 flex items-center justify-center border">
                <img src={partnerLogos} alt="Partner Organizations" className="max-w-full h-auto opacity-90" />
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Stand With Us</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Whether you need help, want to volunteer, or can donate to the legal fund, your involvement strengthens our community shield.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/contact">
               <Button size="lg" variant="secondary" className="font-bold">
                 Volunteer Now
               </Button>
             </Link>
             <Link href="/resources">
                <Button size="lg" variant="destructive" className="font-bold">
                  Get Resources
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
