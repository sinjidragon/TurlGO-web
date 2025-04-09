import { useMutation } from '@tanstack/react-query'
import api from './api'
import type {
  SignUpRequest,
  LoginRequest,
  RefreshTokenRequest,
  ApiResponse,
  TokenResponse,
} from '@/types/auth'

// API 에러 관리
interface AuthError {
  message: string
  status: number
}

// API 에러 생성 함수임
const createAuthError = (message: string, status: number): AuthError => ({
  message,
  status,
})

// 회원가입 Hook
// @tanstack/react-query의 useMutation 사용해서 서버통신 관리
export const useSignUp = () => {
  return useMutation<ApiResponse, AuthError, SignUpRequest>({
    mutationFn: async (data) => {
      try {
        const response = await api.post('/auth/sign-up', data)
        return response.data
      } catch (error: any) {
        if (error.response?.status === 409) {
          throw createAuthError('이미 사용 중인 이메일 또는 아이디입니다.', 409)
        }
        throw createAuthError('회원가입 오류가 발생했습니다.', error.response?.status || 500)
      }
    },
  })
}

// 이메일 인증 요청 Hook
export const useSendVerification = () => {
  return useMutation<ApiResponse, AuthError, { email: string }>({
    mutationFn: async (data) => {
      try {
        const response = await api.post('/auth/sendmail', data)
        return response.data
      } catch (error: any) {
        throw createAuthError(
          '인증 메일 발송 오류가 발생했습니다.',
          error.response?.status || 500
        )
      }
    },
  })
}

// 이메일 인증 확인 Hook
export const useVerifyEmail = () => {
  return useMutation<ApiResponse, AuthError, { email: string; verifyCode: string }>({
    mutationFn: async (data) => {
      try {
        const response = await api.post('/auth/verify', data)
        return response.data
      } catch (error: any) {
        if (error.response?.status === 400) {
          throw createAuthError('잘못된 인증번호입니다.', 400)
        }
        throw createAuthError(
          '인증번호 확인 중 오류가 발생했습니다.',
          error.response?.status || 500
        )
      }
    },
  })
}

// 로그인 Hook
// 로그인 성공 시 토큰을 localStorage에 저장함
export const useLogin = () => {
  return useMutation<ApiResponse<TokenResponse>, AuthError, LoginRequest>({
    mutationFn: async (data) => {
      try {
        const response = await api.post('/auth/login', data)
        const { accessToken, refreshToken } = response.data.data
        
        // 토큰을 localStorage에 저장함
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        
        return response.data
      } catch (error: any) {
        if (error.response?.status === 401) {
          throw createAuthError('아이디 또는 비밀번호가 일치하지 않습니다.', 401)
        }
        throw createAuthError('로그인 중 오류가 발생했습니다.', error.response?.status || 500)
      }
    },
  })
}

// 토큰 갱신 Hook
export const useRefreshToken = () => {
  return useMutation<ApiResponse<TokenResponse>, AuthError, RefreshTokenRequest>({
    mutationFn: async (data) => {
      try {
        const response = await api.post('/auth/refresh', data)
        return response.data
      } catch (error: any) {
        throw createAuthError('토큰 갱신 중 오류가 발생했습니다.', error.response?.status || 500)
      }
    },
  })
}

// 로그아웃 함수
// localStorage에서 토큰을 제거함
export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
