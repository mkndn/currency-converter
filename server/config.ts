import merge from 'lodash/merge';
import path from 'path'

const port = parseInt(process.env.PORT || '3000', 10);
const env: string = process.env.NODE_ENV || 'production';
const config = require(path.join(__dirname, '/config.json'));

const defaultConfig: any = config["default"];
const envConfig: any = config[env];

const appConfig: any = merge(defaultConfig, envConfig);
//appConfig.port = port;
//appConfig.env = env;

export default appConfig;
