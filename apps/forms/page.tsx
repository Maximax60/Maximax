export default function FormsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">U.S. Government Forms</h1>
      <p className="text-sm text-neutral-300 mb-4">
        Lis pi gwo fòm ou ka bezwen: Unemployment, SNAP (Food Stamps), Medicaid,
        Section 8 / HUD, SSI, ak fòm imigrasyon prensipal yo.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="border border-neutral-800 rounded-2xl p-4">
          <h2 className="font-semibold mb-2">Immigration (USCIS)</h2>
          <ul className="text-neutral-300 space-y-1 text-xs">
            <li>• N-400 – Naturalization</li>
            <li>• I-130 – Petisyon fanmi</li>
            <li>• I-765 – Work Permit</li>
            <li>• I-821 – TPS</li>
          </ul>
        </div>
        <div className="border border-neutral-800 rounded-2xl p-4">
          <h2 className="font-semibold mb-2">Benefits & Housing</h2>
          <ul className="text-neutral-300 space-y-1 text-xs">
            <li>• SNAP / Food Stamps</li>
            <li>• Medicaid / Medicare</li>
            <li>• Section 8 / HUD</li>
            <li>• Unemployment</li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-xs text-neutral-400">
        Pita, chak fòm ap gen bouton pou telechaje PDF oswa ranpli ak MAXIMAX dirèkteman.
      </p>
    </div>
  );
}
