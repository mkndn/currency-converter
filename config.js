const env = process.env.NODE_ENV || "development";

const configs = {
  development: {
    api: "http://localhost:3000"
  },
  production: {
    api: "https://sb-currency-converter.herokuapp.com"
  }
}[env];

export default configs;
