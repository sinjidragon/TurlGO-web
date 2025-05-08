import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Pet, PetResponse, PetsResponse } from '@/types/pet'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const getPets = async (type?: string): Promise<PetsResponse> => {
  const token = localStorage.getItem('accessToken')
  if (!token) {
    throw new Error('로그인이 필요합니다.')
  }

  try {
    const response = await axiosInstance.get<PetsResponse>('/animal', {
      params: { type }
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.')
    }
    console.error('Failed to fetch pets:', error)
    throw error
  }
}

export const usePets = (type?: string) => {
  return useQuery({
    queryKey: ['pets', type],
    queryFn: () => getPets(type),
  })
}

export const getPet = async (animalNo: string): Promise<Pet> => {
  const token = localStorage.getItem('accessToken')
  if (!token) {
    throw new Error('로그인이 필요합니다.')
  }

  try {
    const response = await axiosInstance.get<PetResponse>(`/animal/${animalNo}`)
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.')
    }
    console.error(`Failed to fetch pet ${animalNo}:`, error)
    throw error
  }
}

export const usePet = (animalNo: string) => {
  return useQuery({
    queryKey: ['pet', animalNo],
    queryFn: () => getPet(animalNo),
    enabled: !!animalNo,
  })
}
