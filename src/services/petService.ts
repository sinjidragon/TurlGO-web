import type { Pet, PetsResponse, PetType } from '@/types/pet'

const dummyPets: Pet[] = [
  {
    id: 1,
    name: '멍멍이',
    breed: '골든 리트리버',
    age: '2살',
    image: '',
    type: 'DOG',
    matchRate: 95,
  },
  {
    id: 2,
    name: '야옹이',
    breed: '러시안 블루',
    age: '1살',
    image: '',
    type: 'CAT',
    matchRate: 88,
  },
]

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
  // 서버 완성되면 아래걸로 ㄱ
  // const response = await api.get<PetsResponse>('/pets', { params: { type } })
  // return response.data

  // 더미 데이터 반환
  return dummyPetService.getPets(type)
}
