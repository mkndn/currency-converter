import { GraphQLScalarType } from 'graphql';
import { Kind, ValueNode } from 'graphql/language';


const DateTime = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom Date scalar type',

    parseValue: (value: any) => {
        return new Date(value);
    },

    serialize: (value: Date) => {
        return value.getTime();
    },

    parseLiteral: (ast: ValueNode) => {
        if (Kind.INT == ast.kind) {
            return new Date(ast.value);
        }
        return null;
    }
})

export default DateTime;