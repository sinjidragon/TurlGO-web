import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

// 토큰 재발급 요청을 위한...
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
// 모든 요청에 Authorization 헤더 추가함
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터하는 코드
// 401 에러 발생 시 토큰 재발급 시도함
api.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig

    // 401 에러이고 토큰 재발급을 시도하지 않은 경우
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // 토큰 재발급 요청
        const refreshToken = localStorage.getItem('refreshToken')
        const response = await api.post('/auth/refresh', { refreshToken })
        
        const { accessToken, refreshToken: newRefreshToken } = response.data
        
        // 새로운 토큰 저장
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', newRefreshToken)

        // 실패했던 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return api(originalRequest)
      } catch (error) {
        // 토큰 재발급 실패 시 로그아웃 처리
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)

export default api
