// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
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