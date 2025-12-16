import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Download, Shield, Phone, MessageSquare } from "lucide-react";
import kyrImage from "@assets/kyrpass_cropped.png";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Resources() {
  return (
    <Layout>
      <div className="bg-destructive text-destructive-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Know Your Rights</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            You have constitutional rights regardless of your immigration status. Be prepared.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="gap-2 border-white/40 hover:bg-white/10 text-white" asChild>
              <a href="tel:6124492341">
                <Phone className="w-4 h-4" /> Call 612-449-2341
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">If ICE Comes to Your Door</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Do Not Open the Door</h3>
                  <p className="text-muted-foreground">ICE cannot enter without a warrant signed by a judge. Ask them to slide it under the door.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Remain Silent</h3>
                  <p className="text-muted-foreground">You have the right to remain silent. Say "I choose to remain silent" and ask for a lawyer.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Do Not Sign Anything</h3>
                  <p className="text-muted-foreground">Do not sign any documents without speaking to a lawyer first.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-primary">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Report It Immediately</h3>
                  <p className="text-muted-foreground">Call the community hotline to activate rapid response support.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
               <h3 className="font-bold text-xl mb-4">Additional Rights & Resources</h3>
               <ul className="space-y-3">
                 <li>
                   <a href="https://www.ilcm.org/immigration-resources/know-your-rights/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                     <Shield className="w-4 h-4" /> Immigrant Law Center of MN Factsheets
                   </a>
                 </li>
                 <li>
                   <a href="https://www.aclu-mn.org/en/issues/immigrants-rights" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                     <Shield className="w-4 h-4" /> ACLU Minnesota - Know Your Rights
                   </a>
                 </li>
                 <li>
                   <a href="https://www.vlnmn.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                     <Shield className="w-4 h-4" /> Volunteer Lawyers Network
                   </a>
                 </li>
               </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900">
               <img src={kyrImage} alt="Know Your Rights Mobile Pass" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mt-20">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">Community Resources</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-emerald-50 border-emerald-100">
               <CardContent className="pt-6">
                 <MessageSquare className="w-8 h-8 text-emerald-600 mb-4" />
                 <h3 className="font-bold text-lg mb-2">WhatsApp Alerts</h3>
                 <p className="text-sm text-muted-foreground mb-4">Join the verified community alert channel for real-time updates.</p>
                 <Button variant="link" className="p-0 h-auto text-emerald-700" asChild>
                   <a href="https://chat.whatsapp.com/DCkKgQ1frZNGTRYznYB4Jk" target="_blank" rel="noopener noreferrer">Join Channel &rarr;</a>
                 </Button>
               </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-100">
               <CardContent className="pt-6">
                 <Phone className="w-8 h-8 text-amber-600 mb-4" />
                 <h3 className="font-bold text-lg mb-2">Emergency Plan</h3>
                 <p className="text-sm text-muted-foreground mb-4">Download the family preparedness checklist.</p>
                 <Link href="/resources/emergency-plan">
                   <Button variant="link" className="p-0 h-auto text-amber-700">View Checklist &rarr;</Button>
                 </Link>
               </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
