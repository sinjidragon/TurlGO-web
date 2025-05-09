export interface Pet {
  animalNo: string
  name: string
  age: string
  species: string
  breed: string
  sex: string
  bodyWeight: number
  entranceDate: string
  adoptionStatus: string
  temporaryProtectionStatus: string
  introductionVideoUrl: string
  introductionContent: string
  temporaryProtectionContent: string
  photoUrls: string[]
  calculatedData?: string
}

export interface PetListItem {
  animalNo: string
  name: string
  age: string
  species: string
  photoUrls: string[]
}

export interface ApiResponse<T> {
  status: number
  state: string
  message: string
  data: T
}

export interface PetsResponse extends ApiResponse<PetListItem[]> {}
export interface PetResponse extends ApiResponse<Pet> {}
