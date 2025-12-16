import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function PrintableEmergencyPlan() {
  return (
    <div className="bg-white min-h-screen p-8 text-black print:p-0 font-sans">
      <div className="max-w-4xl mx-auto border-2 border-black p-8 print:border-0">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-1">Minnesota Family Emergency Plan</h1>
            <p className="text-sm uppercase tracking-widest font-bold text-gray-600">Somali Americans Legal Taskforce Against ICE</p>
          </div>
          <Button onClick={() => window.print()} className="print:hidden">
            <Printer className="mr-2 h-4 w-4" /> Print Plan
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
           <div className="border border-black p-4 bg-gray-50">
             <h3 className="font-bold text-lg mb-2">SALT Hotline (24/7)</h3>
             <p className="text-3xl font-mono font-bold">619-720-0084</p>
             <p className="text-sm mt-1">Call immediately if you see ICE or are detained.</p>
           </div>
           <div className="border border-black p-4">
             <h3 className="font-bold text-lg mb-2">My A-Number</h3>
             <div className="h-10 border-b-2 border-black border-dashed"></div>
             <p className="text-sm mt-1 italic">Keep this number memorized.</p>
           </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold bg-black text-white px-2 py-1 mb-4">1. Emergency Contacts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-300 p-3 rounded">
                <p className="font-bold text-sm">Immigration Lawyer:</p>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
              </div>
              <div className="border border-gray-300 p-3 rounded">
                <p className="font-bold text-sm">Trusted Friend (Has Keys):</p>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
              </div>
              <div className="border border-gray-300 p-3 rounded">
                <p className="font-bold text-sm">Childcare Provider:</p>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
              </div>
              <div className="border border-gray-300 p-3 rounded">
                <p className="font-bold text-sm">Consulate Number:</p>
                <div className="h-6 border-b border-gray-300 mt-2"></div>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Other Helpful MN Numbers:</strong></p>
              <ul className="grid grid-cols-2 gap-2 mt-1">
                <li>• Immigrant Law Center of MN: 1-800-223-1368</li>
                <li>• Volunteer Lawyers Network: 612-752-6677</li>
                <li>• MN Day One Crisis Line: 1-866-223-1111</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold bg-black text-white px-2 py-1 mb-4">2. Care for Children (DOPA)</h2>
            <div className="border p-4">
               <p className="mb-2"><strong>Designation of Parental Agent (DOPA):</strong> In Minnesota, you can designate another adult to care for your children for up to 1 year without going to court.</p>
               <div className="grid grid-cols-2 gap-4 mt-4">
                 <div>
                   <p className="font-bold text-sm">Designated Caregiver Name:</p>
                   <div className="h-8 border-b border-black border-dashed"></div>
                 </div>
                 <div>
                   <p className="font-bold text-sm">Phone Number:</p>
                   <div className="h-8 border-b border-black border-dashed"></div>
                 </div>
               </div>
               <p className="text-xs mt-2 italic">* Ensure this person has copies of your children's birth certificates and medical records.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold bg-black text-white px-2 py-1 mb-4">3. Important Documents Checklist</h2>
            <p className="mb-2 text-sm">Keep these in a safe folder. Tell your emergency contact where it is.</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Passports / ID Cards</label>
              <label className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Birth Certificates (Children)</label>
              <label className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Marriage Certificate</label>
              <label className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Medical Records</label>
              <label className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Car Titles / Deeds</label>
              <label className="flex items-center gap-2"><div className="w-4 h-4 border border-black"></div> Tax Returns (Last 3 Years)</label>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold bg-black text-white px-2 py-1 mb-4">4. If You Are Detained</h2>
            <ul className="list-decimal list-inside space-y-1 text-sm font-medium">
              <li>Do not sign anything without a lawyer.</li>
              <li>Tell ICE immediately if you have medical issues or need to care for children.</li>
              <li>Locate family members using the <strong>ICE Detainee Locator</strong> (requires A-Number).</li>
              <li>Sherburne County Jail (Common ICE facility in MN): <strong>763-765-3800</strong></li>
            </ul>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t-4 border-black text-center">
          <h3 className="text-2xl font-black mb-2">KNOW YOUR RIGHTS</h3>
          <p className="text-lg">DO NOT OPEN THE DOOR • REMAIN SILENT • ASK FOR A LAWYER</p>
        </div>
      </div>
    </div>
  );
}
