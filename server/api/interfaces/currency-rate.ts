import { Rates } from './rates';
import { TimePeriod } from './time-period';

export interface CurrencyRate {
  base: string;
  date: Date;
  rates: Rates;
  period?: TimePeriod;
}
