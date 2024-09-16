// import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
console.log(process.env);
const bootstrap = async () => {
  // await initMongoDB();
  startServer();
};

bootstrap();
