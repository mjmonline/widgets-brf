import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const parkingSpacesAvailable = {
  charging: 4,
  regular: 1,
};

function FreeSpotsDisplay({ title, count }: { title: string; count: number }) {
  return (
    <div>
      <h2 className="text-xl">{title}</h2>
      {count > 0 ? (
        <p className="text-2xl font-bold">{count} Lediga</p>
      ) : (
        <p>Inga lediga</p>
      )}
    </div>
  );
}

export function Parking() {
  return (
    <Card id="parking">
      <CardHeader>
        <CardTitle>Lediga parkeringsplatser</CardTitle>
        <CardDescription>
          Aktuell tillgänglighet för parkering i garaget.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 relative flex-1 ">
        <FreeSpotsDisplay
          title="Laddplatser"
          count={parkingSpacesAvailable.charging}
        />
        <FreeSpotsDisplay
          title="Vanliga parkeringsplatser"
          count={parkingSpacesAvailable.regular}
        />
        <img
          src="./parking.png"
          alt="Parkering"
          className="w-40 h-auto absolute bottom-0 right-4"
        />
      </CardContent>
    </Card>
  );
}
