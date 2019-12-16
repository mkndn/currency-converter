import { GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { fetchRates, ratesLoader } from './api/actions';
import CurrencyRateType from './api/types/currency-rate';

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
                base: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (root, args) => ratesLoader.load(`/latest?base=${args.base}`)
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType
})

export default schema;
