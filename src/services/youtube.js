import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  timeout: 30000,
});

export const createNewStreaming = async token => {
  try {
    if (token) {
      const formData = {};
      formData.snippet = {
        title: 'Live Streaming from Hentube Stream App',
        description: 'Live Streaming from Hentube Stream App',
      };
      formData.cdn = {
        frameRate: '30fps',
        ingestionType: 'rtmp',
        resolution: '1080p',
      };
      instance.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
      return instance
        .post('/liveStreams?part=snippet%2Ccdn', formData)
        .then(response => response.data)
        .catch(error => error);
    }
    return null;
  } catch (error) {
    return null;
  }
};
