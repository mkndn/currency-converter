import { GraphQLObjectType, GraphQLString } from 'graphql';
import DateTime from '../scalars/date';
import RatesType from './rates';
import TimePeriodType from './time-period';

const CurrencyRateType = new GraphQLObjectType({
  name: 'CurrencyRateType',
  description: '',
  fields: () => ({
    base: { type: GraphQLString },
    date: { type: DateTime },
    rates: { type: RatesType },
    period: { type: TimePeriodType }
  })
})

export default CurrencyRateType;