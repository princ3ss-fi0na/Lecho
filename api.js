const axios = require('axios');
const { FIVESIM_TOKEN, SERVICE } = require('./config');

const api = axios.create({
  baseURL: 'https://5sim.net/v1',
  headers: {
    Authorization: `Bearer ${FIVESIM_TOKEN}`
  }
});

async function getBalance() {
  const { data } = await api.get('/user/profile');
  return data.balance;
}

async function buyNumber(country) {
  const { data } = await api.get(
    `/user/buy/activation/${country}/any/${SERVICE}`
  );
  return data;
}

async function getActiveNumbers() {
  const { data } = await api.get('/user/active');
  return data;
}

async function getSms(id) {
  const { data } = await api.get(`/user/check/${id}`);
  return data.sms?.slice(-1)[0]?.code || null;
}

async function requestNextSms(id) {
  return api.get(`/user/finish/${id}`);
}

async function finishNumber(id) {
  return api.get(`/user/finish/${id}`);
}

async function cancelNumber(id) {
  return api.get(`/user/cancel/${id}`);
}

module.exports = {
  getBalance,
  buyNumber,
  getActiveNumbers,
  getSms,
  requestNextSms,
  finishNumber,
  cancelNumber
};
