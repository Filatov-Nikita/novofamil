import Service from './server';

const api = new Service('https://novoufim.yes-idea.ru', {
  apiPath: 'api/v2',
  timeout: 30000,
});

export default api;
