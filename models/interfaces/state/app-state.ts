import { CurrencyRate } from '../currency-rate';
import { StateCodes } from './state-codes';
import { StateErrors } from './state-errors';
import { StateNavigate } from './state-navigate';
import { StatePageHeader } from './state-page-header';
import { StateCurrency } from './state-currency';
import { StateRates } from './state-rates';

export interface AppState {
  currency: StateCurrency;
  codes: StateCodes;
  errors: StateErrors;
  messages: any;
  navigate: StateNavigate;
  pageheader: StatePageHeader;
  rates: StateRates;
  theme: string;
}
