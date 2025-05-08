import styled from '@emotion/styled'
import PetCard from './PetCard'
import type { PetListItem } from '@/types/pet'

interface Props {
  pets: PetListItem[]
}

const PetList = ({ pets }: Props) => {
  if (pets.length === 0) {
    return <EmptyMessage>등록된 동물이 없습니다.</EmptyMessage>
  }

  return (
    <Container>
      {pets.map((pet: PetListItem) => (
        <PetCard key={pet.animalNo} pet={pet} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
`

const Message = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 2rem 0;
`

const EmptyMessage = styled(Message)`
  color: ${props => props.theme.colors.text.secondary};
`



export default PetList
