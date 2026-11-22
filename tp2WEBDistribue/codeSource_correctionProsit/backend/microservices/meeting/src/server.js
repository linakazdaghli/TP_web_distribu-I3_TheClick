const app = require('./app');

const PORT = process.env.PORT || 8083;
const { Eureka } = require('eureka-js-client');
const EUREKA_HOST = process.env.EUREKA_HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`meeting microservice running on http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/swagger-ui`);
  client.start((error) => {
    console.log(error || 'Enregistré dans Eureka');
  });
});
const client = new Eureka({
  instance: {
    app: 'MEETING',
    instanceId: `meeting:${PORT}`,
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: { $: PORT, '@enabled': true },
    vipAddress: 'meeting',
    statusPageUrl: `http://localhost:${PORT}/info`,

    healthCheckUrl: `http://localhost:${PORT}/health`,
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: EUREKA_HOST,
    port: 8761,
    servicePath: '/eureka/apps/',
  },
});