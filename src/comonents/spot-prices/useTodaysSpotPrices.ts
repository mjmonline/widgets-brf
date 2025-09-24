import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

type HourData = {
  EUR_per_kWh: number;
  EXR: number;
  SEK_per_kWh: number;
  time_end: string;
  time_start: string;
};

export type SpotPricesData = HourData[];

export function useTodaysSpotPrices() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const { data, error, isLoading } = useSWR<SpotPricesData>(
    `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_SE3.json`,
    fetcher
  );
  console.log("🚀 ~ useTodaysSpotPrices ~ data:", data);

  return {
    data,
    isLoading,
    isError: error,
  };
}
