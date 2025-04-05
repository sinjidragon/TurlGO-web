import styled from '@emotion/styled'
import PetCard from './PetCard'
import type { Pet } from '@/types/pet'

interface PetListProps {
  pets: Pet[]
}

const PetList = ({ pets }: PetListProps) => {
  if (pets.length === 0) {
    return <EmptyMessage>등록된 동물이 없습니다.</EmptyMessage>
  }

  return (
    <Container>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`

const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin: 2rem 0;
`

export default PetList
