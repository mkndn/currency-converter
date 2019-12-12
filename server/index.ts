const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { schema } = require('schema');


let root = {
    hello: () => {
        return 'Hello world';
    }
}

app.get('/', (req, res) => {
    res.send('Express started');
});

app.listen(4000, () => {
    //tslint:disable-next-line:no-console
    console.log('Express listening to port 4000')
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));