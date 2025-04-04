import { useMutation } from '@tanstack/react-query'
import { client } from './api'
import type {
  SignUpRequest,
  LoginRequest,
  RefreshTokenRequest,
  ApiResponse,
  TokenResponse,
} from '@/types/auth'

interface AuthError {
  message: string
  status: number
}

export const useSignUp = () => {
  return useMutation<ApiResponse, AuthError, SignUpRequest>({
    mutationFn: async (data) => {
      const response = await client.post('/auth/sign-up', data)
      return {
        state: true,
        message: 'Success',
        data: response,
      }
    },
  })
}

export const useLogin = () => {
  return useMutation<ApiResponse<TokenResponse>, AuthError, LoginRequest>({
    mutationFn: async (data) => {
      const response = await client.post('/auth/login', data)
      const { accessToken, refreshToken } = response.data
      
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      
      return {
        state: true,
        message: 'Success',
        data: response.data,
      }
    },
  })
}

export const useRefreshToken = () => {
  return useMutation<ApiResponse<TokenResponse>, AuthError, RefreshTokenRequest>({
    mutationFn: async (data) => {
      const response = await client.post('/auth/refresh', data)
      return {
        state: true,
        message: 'Success',
        data: response.data,
      }
    },
  })
}

export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
