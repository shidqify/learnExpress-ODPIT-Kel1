const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  transports: [
    new transports.Console(),
    // new transports.File({ filename: 'app.log' }) // optional
  ],
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      const isHttpLog = message.match(/^(GET|POST|PUT|DELETE|PATCH|OPTIONS)\s/);

      return isHttpLog
        ? `[${timestamp}] ${message}`                      // No level for Morgan logs
        : `[${timestamp}] ${level.toUpperCase()}: ${message}`; // Default
    })
  ),
});

module.exports = logger;
