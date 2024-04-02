import app from './app';
import dbConnectionPromise from './src/databaseConnection';
import config from './src/config';

console.log(`Starting application on port ${config.SERVER_PORT}`);

dbConnectionPromise.then(() => {
    console.log('Connected to MongoDB');

    app.listen(config.SERVER_PORT, () => {
        console.log(`app listening on port ${config.SERVER_PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
