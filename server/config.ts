import merge from 'lodash/merge';

const port = parseInt(process.env.PORT || '3000', 10);
const env: string = process.env.NODE_ENV || 'production';
const config = require('./config.json');

const defaultConfig: any = config.default;
const envConfig: any = config[env];

const appConfig: any = merge(defaultConfig, envConfig);
appConfig.port = port;
appConfig.env = env;

export default appConfig;
