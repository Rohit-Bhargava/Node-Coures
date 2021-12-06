let redisUrl;
if (process.env.NODE_ENV == 'development') {
  redisUrl = 'redis://127.0.0.1:6379';
};