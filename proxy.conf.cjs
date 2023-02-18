const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8200/',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
