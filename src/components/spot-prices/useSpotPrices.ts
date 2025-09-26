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

export function useSpotPrices(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const { data, error, isLoading } = useSWR<SpotPricesData>(
    `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_SE3.json`,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
