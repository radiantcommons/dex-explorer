import { OhlcData } from 'lightweight-charts';

export type CandleApiResponse = OhlcData[] | { error: string };

export interface DbCandle {
  close: number;
  direct_volume: number;
  high: number;
  low: number;
  open: number;
  swap_volume: number;
  start_time: Date;
}