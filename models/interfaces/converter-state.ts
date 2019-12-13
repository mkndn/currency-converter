import { SelectItem } from './select-item';
import { RateConfig } from './rate-config';

export interface ConverterState {
  fromLanguageOptions: Array<SelectItem>;
  toLanguageOptions: Array<SelectItem>;
  fromCode: string;
  toCode: string;
  fromCodeValue: number;
  toCodeValue: number;
  formattedCodeValue: number;
  rateConfig: RateConfig;
  inverseRateConfig: RateConfig;
}
