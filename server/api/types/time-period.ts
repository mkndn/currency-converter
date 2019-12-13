import { GraphQLObjectType } from 'graphql';
import DateTime from '../scalars/date';


const TimePeriodType = new GraphQLObjectType({
  name: "TimePeriodType",
  description: '',

  fields: () => ({
    startAt: { type: DateTime },
    endAt: { type: DateTime }
  })
})

export default TimePeriodType;