import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, AlertTriangle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";

interface RaidReport {
  id: number;
  location: string;
  description: string;
  verified: boolean;
  createdAt: Date;
}

export function RaidAlertBoard() {
  const [newLocation, setNewLocation] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: reports = [] } = useQuery<RaidReport[]>({
    queryKey: ["raid-reports"],
    queryFn: async () => {
      const res = await fetch("/api/raid-reports");
      if (!res.ok) throw new Error("Failed to fetch reports");
      return res.json();
    },
  });

  const createReportMutation = useMutation({
    mutationFn: async (data: { location: string; description: string }) => {
      const res = await fetch("/api/raid-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit report");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["raid-reports"] });
      setNewLocation("");
      setNewDescription("");
      toast({
        title: "Report Submitted",
        description: "Your report has been added to the community board anonymously.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit report. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLocation || !newDescription) return;
    createReportMutation.mutate({ location: newLocation, description: newDescription });
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
            {reports.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                No reports yet. Submit the first one to help the community.
              </div>
            ) : (
              reports.map((report) => (
                <div key={report.id} className="p-4 hover:bg-muted/20 transition-colors" data-testid={`raid-report-${report.id}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1.5 font-bold text-sm">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      {report.location}
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {formatDistanceToNow(new Date(report.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/90 mb-2">{report.description}</p>
                  {report.verified && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 h-5 text-[10px]">
                      Verified Report
                    </Badge>
                  )}
                </div>
              ))
            )}
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
                data-testid="input-raid-location"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">What did you see?</label>
              <Input 
                placeholder="Describe vehicles, uniforms, or activity..." 
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                data-testid="input-raid-description"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-destructive hover:bg-destructive/90 font-bold"
              disabled={createReportMutation.isPending}
              data-testid="button-submit-raid-report"
            >
              <Send className="w-4 h-4 mr-2" /> 
              {createReportMutation.isPending ? "Submitting..." : "Post Alert Anonymously"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
