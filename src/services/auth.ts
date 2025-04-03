import { api } from './api'
import type {
  SignUpRequest,
  LoginRequest,
  RefreshTokenRequest,
  ApiResponse,
  TokenResponse,
} from '@/types/auth'

export const authService = {
  async signUp(data: SignUpRequest): Promise<ApiResponse> {
    const response = await api.post<ApiResponse>('/auth/sign-up', data)
    return response.data
  },

  async login(data: LoginRequest): Promise<ApiResponse<TokenResponse>> {
    const response = await api.post<ApiResponse<TokenResponse>>('/auth/login', data)
    const { accessToken, refreshToken } = response.data.data
    
    // Store tokens
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    
    return response.data
  },

  async refresh(data: RefreshTokenRequest): Promise<ApiResponse<TokenResponse>> {
    const response = await api.post<ApiResponse<TokenResponse>>('/auth/refresh', data)
    return response.data
  },

  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  },
}
