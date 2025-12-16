import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function PrintableEmergencyPlan() {
  return (
    <div className="bg-white min-h-screen p-8 text-black print:p-0">
      <div className="max-w-3xl mx-auto border-2 border-black p-8 print:border-0">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">Family Emergency Preparedness Plan</h1>
            <p className="text-sm uppercase tracking-widest font-bold text-gray-600">Somali Americans Legal Taskforce Against ICE</p>
          </div>
          <Button onClick={() => window.print()} className="print:hidden">
            <Printer className="mr-2 h-4 w-4" /> Print Plan
          </Button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">1. Important Documents</h2>
            <p className="mb-2 italic">Keep these in a safe, accessible place (folder or binder).</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Passports / ID Cards</li>
              <li>Birth Certificates (for all children)</li>
              <li>Marriage Certificate</li>
              <li>Medical Records & Prescriptions</li>
              <li>A-Numbers (Alien Registration Numbers)</li>
              <li>Immigration Court Documents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">2. Emergency Contacts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-300 p-4 rounded">
                <p className="font-bold">Immigration Lawyer:</p>
                <div className="h-8 border-b border-gray-300 mt-2"></div>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <p className="font-bold">Trusted Friend/Family (with keys):</p>
                <div className="h-8 border-b border-gray-300 mt-2"></div>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <p className="font-bold">Childcare Provider:</p>
                <div className="h-8 border-b border-gray-300 mt-2"></div>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <p className="font-bold">SALT Hotline:</p>
                <p className="text-lg font-mono mt-2">619-720-0084</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">3. Childcare Plan</h2>
            <div className="space-y-4">
              <p>If parents are detained, who will care for the children?</p>
              <div className="border p-4 bg-gray-50">
                <p className="font-bold">Primary Caregiver:</p>
                <div className="border-b border-black border-dashed my-2"></div>
                <p className="text-sm">Make sure this person has a copy of a "Power of Attorney" for childcare.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">4. Financial Security</h2>
            <ul className="list-checkbox space-y-2 ml-4">
              <li className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Someone trusted knows where money/savings are kept.</li>
              <li className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Someone trusted can access bank accounts if needed.</li>
              <li className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Utility bills are set to auto-pay or can be paid by others.</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-black text-center text-sm">
          <p className="font-bold">IF ICE COMES TO YOUR DOOR:</p>
          <p>DO NOT OPEN THE DOOR • REMAIN SILENT • DO NOT SIGN ANYTHING • CALL 619-720-0084</p>
        </div>
      </div>
    </div>
  );
}
