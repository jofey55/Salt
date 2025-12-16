import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/community_protection_and_unity_abstract_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Community Unity" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      </div>

      <div className="container relative z-10 px-4 py-20 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 text-destructive-foreground border border-destructive/30 text-sm font-medium animate-in fade-in slide-in-from-bottom-3">
            <ShieldAlert className="w-4 h-4" />
            <span>Emergency Community Response Active</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-tight">
            SALT: <span className="text-blue-200 block md:inline text-3xl md:text-5xl mt-2 md:mt-0">Somali Americans Legal Taskforce</span>
            <span className="block text-destructive text-3xl md:text-5xl mt-2 font-black">Against ICE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
            Solidarity • Advocacy
            <br className="my-2"/>
            Minnesota's central coordinating body for community defense, legal protection, and long-term advocacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/resources">
              <Button size="lg" variant="destructive" className="text-lg px-8 py-6 h-auto shadow-xl hover:scale-105 transition-transform">
                Know Your Rights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/strategies">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Our Strategies
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side visual element - could be stats or rapid access cards */}
        <div className="hidden md:block relative">
          <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Urgent Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="bg-destructive/20 p-2 rounded-full">
                  <ShieldAlert className="w-5 h-5 text-destructive-foreground" />
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-blue-200 transition-colors">Report a Raid</h4>
                  <p className="text-sm opacity-70">Immediate steps if you see ICE.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-destructive/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
