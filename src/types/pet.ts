export type PetType = 'DOG' | 'CAT'

export interface Pet {
  id: number
  name: string
  breed: string
  age: string
  image: string
  type: PetType
  matchRate: number
}

export interface PetsResponse {
  state: boolean
  message: string
  data: Pet[]
}

//전부 임시임 서버 나오면 수정
