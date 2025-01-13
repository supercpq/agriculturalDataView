import { apiGet, apiPost } from '@/utils/http';

export function getUserInfo() {
  return apiGet('/user/info');
}

export function getPubKey() {
  return apiGet('/user/pubkey');
}

export function login(data: any) {
  return apiPost('/user/login', {}, data);
}
