import { Rate } from './rate';

export interface HistoryRate {
  historyDate: Date;
  rateList: Array<Rate>;
}
