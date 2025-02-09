const config = require('./config');
const app = require('./app');

const server = app.listen(config.port, () => {
  console.log(`Server running in ${config.environment} mode on port ${config.port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});