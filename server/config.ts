

const env: string = process.env.NODE_ENV; // 'dev' or 'test'

const development: any = {
    app: {
        env: 'development',
        api_base: 'https://api.exchangeratesapi.io',
        port: parseInt(process.env.DEV_APP_PORT || '3000')
    },

};
const test: any = {
    app: {
        env: 'test',
        api_base: 'https://api.exchangeratesapi.io',
        port: parseInt(process.env.TEST_APP_PORT || '3000')
    },

};

const staging: any = {
    app: {
        env: 'staging',
        api_base: 'https://api.exchangeratesapi.io',
        port: parseInt(process.env.TEST_APP_PORT || '8080')
    },
}

const production = {
    app: {
        env: 'production',
        api_base: 'https://api.exchangeratesapi.io',
        port: parseInt(process.env.TEST_APP_PORT || '8080')
    },
}

const config: any = {
    development,
    test,
    staging,
    production
};

export default config[env];