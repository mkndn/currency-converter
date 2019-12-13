import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const RateType = new GraphQLObjectType({
  name: 'RateType',
  description: '',

  fields: () => ({
    currencyCode: { type: GraphQLString },
    currencyValue: { type: GraphQLFloat }
  })
})

export default RateType;