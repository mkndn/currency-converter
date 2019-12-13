import { GraphQLObjectType, GraphQLList } from 'graphql';
import RateType from './rate';
import DateTime from '../scalars/date';

const HistoryRateType = new GraphQLObjectType({
  name: 'HistoryRateType',
  description: '',

  fields: () => ({
    historyDate: { type: DateTime },
    rateList: { type: GraphQLList(RateType) }
  })

});

export default HistoryRateType;