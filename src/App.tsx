import { SpotPrices } from "./components/spot-prices/spot-prices";
import { Parking } from "./components/parking/parking";
import { Rss } from "./components/rss/rss";

function App() {
  return (
    <div className="flex flex-col gap-4 bg-amber-100">
      <SpotPrices />
      <Parking />
      <Rss />
    </div>
  );
}

export default App;
