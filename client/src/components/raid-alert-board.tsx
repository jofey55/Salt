import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, AlertTriangle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RaidReport {
  id: number;
  location: string;
  time: string;
  description: string;
  verified: boolean;
}

const initialReports: RaidReport[] = [
  {
    id: 1,
    location: "Lake Street & Hiawatha Ave",
    time: "2 hours ago",
    description: "Unmarked SUV seen idling near the intersection. Two officers visible.",
    verified: false,
  },
  {
    id: 2,
    location: "Cedar-Riverside Area",
    time: "Yesterday, 4:00 PM",
    description: "ICE agents confirmed entering apartment complex.",
    verified: true,
  }
];

export function RaidAlertBoard() {
  const [reports, setReports] = useState<RaidReport[]>(initialReports);
  const [newLocation, setNewLocation] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLocation || !newDescription) return;

    const newReport: RaidReport = {
      id: Date.now(),
      location: newLocation,
      time: "Just now",
      description: newDescription,
      verified: false,
    };

    setReports([newReport, ...reports]);
    setNewLocation("");
    setNewDescription("");
    
    toast({
      title: "Report Submitted",
      description: "Your report has been added to the community board anonymously.",
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Alert Board */}
      <Card className="border-destructive/20 shadow-lg">
        <CardHeader className="bg-destructive/5 border-b border-destructive/10">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Recent Activity Alerts
            </CardTitle>
            <Badge variant="outline" className="animate-pulse border-destructive text-destructive">
              Live Updates
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 max-h-[400px] overflow-y-auto">
          <div className="divide-y">
            {reports.map((report) => (
              <div key={report.id} className="p-4 hover:bg-muted/20 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    {report.location}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {report.time}
                  </span>
                </div>
                <p className="text-sm text-foreground/90 mb-2">{report.description}</p>
                {report.verified && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 h-5 text-[10px]">
                    Verified Report
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Form */}
      <Card>
        <CardHeader>
          <CardTitle>Report ICE Activity</CardTitle>
          <p className="text-sm text-muted-foreground">
            Submissions are <span className="font-bold text-primary">anonymous</span>. Do not include personal names.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input 
                placeholder="e.g. Karmel Mall, Lake St..." 
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">What did you see?</label>
              <Input 
                placeholder="Describe vehicles, uniforms, or activity..." 
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-destructive hover:bg-destructive/90 font-bold">
              <Send className="w-4 h-4 mr-2" /> Post Alert Anonymously
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
