import { buildSchema } from 'graphql';
import appConfig from './config';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

export default schema;
