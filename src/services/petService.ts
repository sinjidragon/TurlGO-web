import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Pet, ApiResponse } from '@/types/pet'

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
})


export const dummyPetService = {
  async getPets(type?: PetType): Promise<PetsResponse> {
    const filteredPets = type ? dummyPets.filter(pet => pet.type === type) : dummyPets
    return {
      state: true,
      message: 'Success',
      data: filteredPets,
    }
  }
}

export const getPets = async (type?: PetType): Promise<PetsResponse> => {
  try {
    const response = await axiosInstance.get<PetsResponse>('/pets', { params: { type } })
    return response.data
  } catch (error) {
    console.error('Failed to fetch pets:', error)
    throw error
  }
}

export const usePets = () => {
  return useQuery({
    queryKey: ['pets'],
    queryFn: getPets,
  })
}

export const usePet = (animalNo: string) => {
  return useQuery({
    queryKey: ['pet', animalNo],
    queryFn: () => getPet(animalNo),
  })
}

export const getPet = async (animalNo: string): Promise<Pet> => {
  try {
    const response = await axiosInstance.get<ApiResponse<Pet>>(`/animals/${animalNo}`)
    return response.data.data
  } catch (error) {
    console.error(`Failed to fetch pet ${animalNo}:`, error)
    throw error
  }
}
