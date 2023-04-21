import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apim.app.franca.sp.gov.br/gateway/unifacef/api-eco-franca',
  validateStatus: () => true,
  timeout: 30000,
});

if (__DEV__) {
  function sleep(ms = 1500): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  api.interceptors.response.use(async (response) => {
    await sleep();

    return response;
  });
}

export default api;
