import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Rss() {
  return (
    <Card id="cleanup-day">
      <CardHeader>
        <CardTitle>Garagestädning, onsdag 22 oktober</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="mb-4">
          Onsdag 22 oktober kl 09:00 och 16:00 kommer garaget att våtsopas.
          Viktigt att <span className="font-bold">alla fordon</span> är borta ur
          garaget!
        </p>
        <p className="mb-4">
          Om du är bortrest under den tiden så ordna med att en granne eller vän
          flyttar din bil, MC eller moped. Allt skall bort.
        </p>
        <hr className="mb-4" />
        <p className="mb-4">
          Wednesday, October 22nd at 09:00 and 16:00 the garage will be wet
          swept. It is important that{" "}
          <span className="font-bold">all vehicles</span> are out of the garage!
        </p>
        <p className="mb-4">
          If you are away during that time, arrange for a neighbor or friend to
          move your car, motorcycle or moped. Everything must be removed.
        </p>
      </CardContent>
    </Card>
  );
}
