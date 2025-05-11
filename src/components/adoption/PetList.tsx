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
  gap: 2.5rem;
  padding: 2rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const Message = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 2rem 0;
`

const EmptyMessage = styled(Message)`
  color: #FF69B4;
  padding: 2rem;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #FFB6C1;
  box-shadow: 0 5px 15px rgba(255, 182, 193, 0.1);
  position: relative;

  &:before {
    content: '😿';
    position: absolute;
    left: 50%;
    top: -1.5rem;
    transform: translateX(-50%);
    font-size: 2rem;
  }
`



export default PetList
