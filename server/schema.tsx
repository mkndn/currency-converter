import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import CurrencyRateType from './api/types/currency-rate';
import { fetchAllRates, ratesLoader } from './api/actions';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '',

    fields: () => ({
        latestRates: {
            type: CurrencyRateType,
            resolve: fetchAllRates
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
            args: {
                bases: { type: GraphQLString }
            },
            resolve: (root, args) => ratesLoader.load(`/latest?symbols=${args.bases}`)
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType
})

export default schema;
