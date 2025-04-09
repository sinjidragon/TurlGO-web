import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Pet } from '@/types/pet'

interface Props {
  pet: Pet
}

const Card = styled(Link)`
  display: block;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  transition: transform 0.2s ease;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    transform: translateY(-4px);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
`

const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 8px;
`

const Info = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 8px;
`

const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: ${props => props.theme.borderRadius.small};
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  font-weight: ${props => props.theme.typography.fontWeights.medium};
`

const PetCard = ({ pet }: Props) => {
  const { id, name, breed, age, gender, imageUrl } = pet

  return (
    <Card to={`/pet/${id}`}>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Content>
        <Name>{name}</Name>
        <Info>
          <Tag>{breed}</Tag>
          <span>•</span>
          <span>{age}살</span>
          <span>•</span>
          <span>{gender === 'MALE' ? '남아' : '여아'}</span>
        </Info>
      </Content>
    </Card>
  )
}

export default PetCard
