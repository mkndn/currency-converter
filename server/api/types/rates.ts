import { GraphQLObjectType, GraphQLList } from 'graphql';
import RateType from './rate';
import HistoryRateType from './history-rate';

const RatesType = new GraphQLObjectType({
  name: 'RatesType',
  description: '',

  fields: () => ({
    rateList: { type: GraphQLList(RateType) },
    historyRateList: { type: GraphQLList(HistoryRateType) }
  })
})

export default RatesType;