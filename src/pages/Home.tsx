import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Video from '@/components/edu/video'
import { usePets } from '@/services/petService'
import PetCard from '@/components/adoption/PetCard'
import catImage from '@/assets/cat2.png'

const Home = () => {
  const { data: petsData } = usePets()

  return (
    <Container>
      <Banner>
        <BannerContent>
          <BannerTitle>반려동물 테스트</BannerTitle>
          <BannerDescription>
            나에게 맞는 반려동물을 찾아보세요
          </BannerDescription>
          <BannerButton to="/test">테스트 하러가기</BannerButton>
        </BannerContent>
        <BannerImagePlaceholder>
          <BannerImage src={catImage} alt="반려동물 테스트" />
        </BannerImagePlaceholder>
      </Banner>

      <Section>
        <SectionHeader>
          <SectionTitle>입양</SectionTitle>
          <ViewMoreButton to="/adoption">더보기</ViewMoreButton>
        </SectionHeader>
        {petsData && (
          <PreviewList>
            {petsData.data.slice(0, 3).map((pet) => (
              <PreviewItem key={pet.animalNo}>
                <PetCard pet={pet} />
              </PreviewItem>
            ))}
          </PreviewList>
        )}
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>교육</SectionTitle>
          <ViewMoreButton to="/education">더보기</ViewMoreButton>
        </SectionHeader>
        <VideoContainer>
          <Video />
        </VideoContainer>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FEF2C5;
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 3rem;
  margin-bottom: 4rem;
  height: 260px;
  position: relative;
  overflow: hidden;
`

const BannerContent = styled.div`
  color: #333;
  flex: 1;
`

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: 1rem;
`

const BannerDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`

const BannerButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: #333;
  border-radius: 2rem;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const BannerImagePlaceholder = styled.div`
  position: absolute;
  right: 2rem;
  bottom: -60px;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 2rem;
`

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

const Section = styled.section`
  margin-bottom: 4rem;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
`

const ViewMoreButton = styled(Link)`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const PreviewList = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
`

const PreviewItem = styled.div`
  flex: 0 0 calc(33.333% - 1.33rem);
  min-width: 280px;
`

const VideoContainer = styled.div`
  max-width: 700px;
  transform: scale(0.74);
  transform-origin: top left;
`

export default Home
