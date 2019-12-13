import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import appConfig from './config';
import CurrencyRateType from './api/types/currency-rate';
import { fetchRates, ratesLoader } from './api/actions';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '',

    fields: () => ({
        latestRates: {
            type: CurrencyRateType,
            resolve: fetchRates
        },
        ratesByBase: {
            type: CurrencyRateType,
            args: {
                base: { type: GraphQLString }
            },
            resolve: (root, args) => ratesLoader.load(`/latest?base=${args.base}`)
        },
        ratesByMultiBase: {
            type: new GraphQLList(CurrencyRateType),
            resolve: (root, args) => 
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType
})

export default schema;
