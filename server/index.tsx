import express from 'express';
import next from 'next';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import path from 'path';
import * as bodyParser from 'body-parser';
import * as config from './config';

const dev = (config as any).env !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

let root = {
  hello: () => {
    return 'Hello world';
  }
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: false }));

    server.use(bodyParser.json());

    server.use((req: any, res: any, next: any) => {
      res.header('Access-Control-Allow-Origin', 'localhost');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
    });

    server.use('/public', express.static(path.join(__dirname, '/public')));

    server.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
      })
    );

    server.all('*', (req: any, res: any) => {
      return handler(req, res);
    });

    //appConfig.port
    server.listen(3000, () => {
      // tslint:disable-next-line:no-console
      console.log(`Express listening to port ${JSON.stringify(config)}`);
    });
  })
  .catch(ex => {
    console.log('Error: ', ex);
    process.exit(1);
  });
