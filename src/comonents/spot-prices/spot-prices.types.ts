type HourData = {
  EUR_per_kWh: number;
  EXR: number;
  SEK_per_kWh: number;
  time_end: string;
  time_start: string;
};

export type SpotPricesData = HourData[];
