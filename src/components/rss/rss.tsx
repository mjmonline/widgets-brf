import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Rss() {
  return (
    <Card id="cleanup-day">
      <CardHeader>
        <CardTitle>Städdag</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="mb-4">
          Höstens städdag hålls lördag 4 oktober. Vi samlas kl. 11.00 vid
          utegrillen och avslutar med korvgrillning.
        </p>
        <p className="mb-4">
          Anmäl gärna ert deltagande till{" "}
          <span className="text-blue-500">styrelsen@brflovisedal5.se</span>
        </p>
        <h3 className="font-bold text-lg mb-4">Uppställd container</h3>
        <p>
          Den 3–6 oktober står en container vid 167:an för skrymmande avfall som
          inte ryms i vanlig sophantering. Släng inte kemikalier, elektronik,
          farligt avfall, däck, tryckimpregnerat trä, vitvaror eller
          hushållssopor, då detta orsakar stora merkostnader.
        </p>
        <p>Trevlig söndag och en fin start på hösten!</p>
      </CardContent>
    </Card>
  );
}
