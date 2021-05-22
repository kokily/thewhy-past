import https from 'https';
import http from 'http';
import fs from 'fs';
import { createConnection, getConnectionOptions } from 'typeorm';
import app from './app';

const bootstrap = async () => {
  const connectionOptions = await getConnectionOptions();

  const configurations = {
    production: { ssl: true, port: 443, hostname: 'thewhy.kr' },
    development: { ssl: false, port: 4000, hostname: 'localhost' },
  };
  const environment = process.env.NODE_ENV || 'production';
  const config = configurations[environment];

  let server;

  if (config.ssl) {
    server = https.createServer(
      {
        key: fs.readFileSync(`${process.env.SSL_KEY}`),
        cert: fs.readFileSync(`${process.env.SSL_CERT}`),
      },
      app.callback()
    );
  } else {
    server = http.createServer(app.callback());
  }

  await createConnection(connectionOptions)
    .then(() => {
      server.listen(config.port, () => {
        console.log(
          `Server on http${config.ssl ? 's' : ''}://${config.hostname}:${
            config.port
          }`
        );
      });
    })
    .catch((err) => console.error(err));
};

bootstrap();
