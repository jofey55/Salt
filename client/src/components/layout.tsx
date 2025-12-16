import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import saltLogo from "@assets/IMG_20251214_132732_1765747694479.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/strategies", label: "Strategies" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Get Involved" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src={saltLogo} alt="SALT Logo" className="h-12 w-auto rounded-md" />
            <div className="flex flex-col">
              <span className="font-serif font-black text-2xl tracking-tighter leading-none text-primary">SALT</span>
              <span className="text-[0.65rem] font-bold tracking-widest text-primary/80 uppercase">
                SOMALI AMERICANS LEGAL TASKFORCE
              </span>
              <span className="text-[0.6rem] font-black tracking-widest text-destructive uppercase leading-none mt-0.5">
                Against ICE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/resources">
              <Button size="sm" variant="destructive" className="font-bold" asChild>
                <span>Rapid Response</span>
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Content */}
        {isOpen && (
          <div className="md:hidden border-t bg-background p-4 space-y-4 animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium py-2 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/resources">
              <Button className="w-full" variant="destructive" asChild>
                <span>Rapid Response</span>
              </Button>
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground py-12 mt-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <img src={saltLogo} alt="SALT Logo" className="h-10 w-auto bg-white/10 rounded p-1" />
               <div>
                 <h3 className="font-serif text-xl font-bold leading-none">SALT</h3>
                 <p className="text-[0.6rem] tracking-wider opacity-80 uppercase block">
                   SOMALI AMERICANS LEGAL TASKFORCE
                 </p>
                 <p className="text-[0.55rem] font-bold tracking-wider text-red-300 uppercase block mt-0.5">
                   Against ICE
                 </p>
               </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Building power, protecting our community, and shaping the future of Somali Americans in Minnesota.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/strategies">Our 8 Strategies</Link></li>
              <li><Link href="/resources">Know Your Rights</Link></li>
              <li><Link href="/about">Governance Structure</Link></li>
              <li><Link href="/contact">Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Emergency Contact</h4>
            <p className="text-sm text-primary-foreground/80 mb-2">
              If you witness ICE activity:
            </p>
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded text-center">
              <p className="font-bold text-lg text-white">Call the Hotline</p>
              <a href="tel:6197200084" className="text-2xl font-mono mt-1 hover:underline block">619-720-0084</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/60">
          © 2025 Somali American Leadership Table. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
