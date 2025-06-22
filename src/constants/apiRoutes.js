const BASE_URL = "http://192.168.18.4:7060";

export const API_URL = `${BASE_URL}/api`;

export const ROUTES = {
  LOGIN: `${API_URL}/auth/login`,
  REGISTER: `${API_URL}/auth/register`,
  USUARIOS: `${API_URL}/usuario`,       // GET e PUT /usuarios/{id}
  REVOKE: `${API_URL}/auth/revoke`,      // POST
};
