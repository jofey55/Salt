import { Layout } from "@/components/layout";
import { governance } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCog, Scale } from "lucide-react";
import backgroundTexture from "@assets/generated_images/subtle_texture_for_background.png";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url(${backgroundTexture})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About SALT</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            The central governing and coordinating body responsible for protecting and empowering the Somali American community in Minnesota.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Core Functions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Build & Secure Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Ensuring capacity for response through funding, legal infrastructure, volunteer networks, and partnerships.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Provide Strategic Direction</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                     Setting unified strategy for crisis response, media narratives, political advocacy, and community engagement.
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Create Connection & Alignment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Coordinating mosques, community centers, and allies to create unity and long-term influence.
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Governance Structure</h2>
              <div className="space-y-8">
                {/* Executive */}
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <UserCog className="w-5 h-5 text-primary" />
                    {governance.executive.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Meets: {governance.executive.meeting}</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {governance.executive.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Full Table */}
                <div className="border-l-4 border-blue-400 pl-6 py-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    {governance.fullTable.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Meets: {governance.fullTable.meeting}</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {governance.fullTable.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Advisors */}
                <div className="border-l-4 border-slate-300 pl-6 py-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Scale className="w-5 h-5 text-slate-500" />
                    {governance.advisors.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Meets: {governance.advisors.meeting}</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {governance.advisors.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Our Partners</h3>
              <p className="text-sm text-muted-foreground mb-6">
                We work alongside trusted institutions to build a safer Minnesota.
              </p>
              <div className="space-y-4">
                 <div className="p-3 bg-muted/50 rounded text-center text-sm font-medium">Citizens Academy</div>
                 <div className="p-3 bg-muted/50 rounded text-center text-sm font-medium">Muslim Power Hub</div>
                 <div className="p-3 bg-muted/50 rounded text-center text-sm font-medium">Faith in Minnesota</div>
                 <div className="p-3 bg-muted/50 rounded text-center text-sm font-medium">ISAIAH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
