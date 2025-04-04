export interface SignUpRequest {
  username: string
  email: string
  password: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface TokenResponse {
  accessToken: string
  refreshToken: string
}

export interface ApiResponse<T = unknown> {
  state: boolean
  message: string
  data: T
}
