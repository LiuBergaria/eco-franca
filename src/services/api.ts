import { Platform } from 'react-native';

import axios from 'axios';

const api = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.0.93:3000'
      : 'http://localhost:3000',
  validateStatus: () => true,
  timeout: 30000,
});

if (__DEV__) {
  function sleep(ms = 2000): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  api.interceptors.response.use(async (response) => {
    await sleep();

    return response;
  });
}

export default api;
