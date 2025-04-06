import type { TokenResponse } from '@/types/auth'

export const setAuthTokens = (tokens: TokenResponse) => {
  localStorage.setItem('accessToken', tokens.accessToken)
  localStorage.setItem('refreshToken', tokens.refreshToken)
}

export const clearAuthTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export const getAuthTokens = () => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  return { accessToken, refreshToken }
}

export const isAuthenticated = () => {
  return !!localStorage.getItem('accessToken')
}
