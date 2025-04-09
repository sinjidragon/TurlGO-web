export type PetType = 'DOG' | 'CAT'
export type Gender = 'MALE' | 'FEMALE'

export interface Pet {
  id: number
  name: string
  breed: string
  age: number
  gender: Gender
  imageUrl: string
  description?: string
  type: PetType
  matchRate: number
}

export interface PetsResponse {
  state: boolean
  message: string
  data: Pet[]
}

//전부 임시임 서버 나오면 수정
