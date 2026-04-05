// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://sensibolt-api.onrender.com',
  apiEndpoints: {
    auth: '/api/auth',
    login: '/api/auth/signin',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    validateToken: '/api/auth/validate',
    refreshToken: '/api/auth/refresh',
    profile: '/api/auth/profile'
  },
  timeout: 30000,
  retryAttempts: 3,
  retryDelay: 1000
};