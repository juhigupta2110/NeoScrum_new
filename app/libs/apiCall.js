import axios from 'axios';

const baseUrl = 'https://468cd57d6dcf.ngrok.io/';

const signUpUrl = baseUrl + 'register';
const signInUrl = baseUrl + 'DeveloperSignin';
const getUsersUrl = baseUrl + 'GetAllRecievers';
const giveFeedbackUrl = baseUrl + 'addFeadback';

export const apiService = {
  signUp: (requestBody, callBack, method, isSecure) => {
    request(signUpUrl, requestBody, callBack, method, isSecure);
  },
  signIn: (requestBody, callBack, method, isSecure) => {
    request(signInUrl, requestBody, callBack, method, isSecure);
  },
  getUsers: (requestBody, callBack, method, isSecure) => {
    request(getUsersUrl, requestBody, callBack, method, isSecure);
  },
  giveFeedback: (requestBody, callBack, method, isSecure) => {
    request(giveFeedbackUrl, requestBody, callBack, method, isSecure);
  },
};

const request = (url, body, callBack, method, isSecure = false) => {
  axios({
    method,
    url,
    data: body,
  })
    .then((res) => {
      callBack(res);
    })
    .catch((e) => {
      callBack(e);
    });
};
