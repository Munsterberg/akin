import app from './app';
import {logger} from './util';
import {thinky} from './db';

const PORT = process.env.PORT || 3000;

thinky.dbReady().then(() => {
  logger.info('DB is ready!');
  app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
  });
});

process.on('uncaughtException', err => logger.error('uncaught exception:', err));
process.on('unhandledRejection', error => logger.error('unhandled rejection:', error));
