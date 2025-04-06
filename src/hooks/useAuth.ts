import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useLogin as useLoginMutation, useSignUp } from '@/services/auth'
import { setAuthTokens } from '@/utils/auth'
import type { ApiResponse, TokenResponse } from '@/types/auth'

export const useLogin = () => {
  const navigate = useNavigate()
  const loginMutation = useLoginMutation()

  return useMutation<ApiResponse<TokenResponse>>({
    ...loginMutation,
    onSuccess: (response) => {
      setAuthTokens(response.data)
      navigate('/home')
    },
  })
}

export const useRegister = () => {
  const navigate = useNavigate()
  const signUpMutation = useSignUp()

  return useMutation<ApiResponse<TokenResponse>>({
    ...signUpMutation,
    onSuccess: (response) => {
      setAuthTokens(response.data)
      navigate('/home')
    },
  })
}

export const useLogout = () => {
  const navigate = useNavigate()

  return () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }
}
