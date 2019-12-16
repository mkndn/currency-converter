import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLResolveInfo } from 'graphql';
import _get from 'lodash/get';


const RateType = new GraphQLObjectType({
  name: 'RateType',
  description: '',

  fields: () => ({
    currencyCode: {
      type: GraphQLString,
      resolve: (source: any, args: any, context: any, info: GraphQLResolveInfo) => {
        console.log('source: ', source);
        return source;
      }
    },
    currencyValue: {
      type: GraphQLFloat,
      resolve: (source: any, args: any, context: any, info: GraphQLResolveInfo) => {
        console.log('source: ', source);
        return source;
      }
    }
  })
})

export default RateType;