import styled from '@emotion/styled'
import { Pet } from '@/types/pet'

interface PetCardProps {
  pet: Pet
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={pet.image} alt={pet.name} />
        <MatchBadge>{pet.matchRate}% 매칭</MatchBadge>
      </ImageWrapper>
      <Info>
        <Name>{pet.name}</Name>
        <Details>{`${pet.breed} · ${pet.age}`}</Details>
      </Info>
    </Card>
  )
}

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`

const ImageWrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const MatchBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background-color: rgba(255, 107, 107, 0.9);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`

const Info = styled.div`
  padding: 1rem;
`

const Name = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
`

const Details = styled.p`
  margin: 0.5rem 0 0;
  color: #666;
  font-size: 0.9rem;
`

export default PetCard
