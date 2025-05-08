import styled from '@emotion/styled'
import { useNavigate, useParams } from 'react-router-dom'
import { usePet } from '@/services/petService'
import { useState } from 'react'

const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return '';
  const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
}

const getAbsoluteUrl = (url: string) => {
  if (url.startsWith('http')) return url;
  return `https://${url}`;
}

const PetDetailPage = () => {
  const { animalNo } = useParams<{ animalNo: string }>()
  const { data: pet, isLoading, error } = usePet(animalNo || '')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const navigate = useNavigate()

  if (isLoading) {
    return <LoadingMessage>동물 정보를 불러오는 중입니다...</LoadingMessage>
  }

  if (error) {
    return <ErrorMessage>동물 정보를 불러오는데 실패했습니다.</ErrorMessage>
  }

  if (!pet) {
    return <ErrorMessage>동물을 찾을 수 없습니다.</ErrorMessage>
  }

  return (
    <PageWrapper>
      <TopHeader>
        <BackButton onClick={() => navigate(-1)}>
          ← 목록으로
        </BackButton>
      </TopHeader>
      <Container>
        <ImageSection>
          <MainImageWrapper>
            <MainImage 
              src={getAbsoluteUrl(selectedImage || pet.photoUrls[0])}
              alt={pet.name}
              onError={(e) => {
                console.error('Image load error:', e.currentTarget.src);
              }}
            />
          </MainImageWrapper>
          {pet.photoUrls.length > 1 && (
            <ImageGrid>
              {pet.photoUrls.map((url, index) => (
                <GridImageWrapper 
                  key={index} 
                  isSelected={url === (selectedImage || pet.photoUrls[0])}
                  onClick={() => setSelectedImage(url)}
                >
                  <GridImage 
                    src={getAbsoluteUrl(url)}
                    alt={`${pet.name} 사진 ${index + 1}`}
                    onError={(e) => {
                      console.error('Thumbnail load error:', e.currentTarget.src);
                    }}
                  />
                </GridImageWrapper>
              ))}
            </ImageGrid>
          )}
        </ImageSection>

        <InfoSection>
          <Header>
            <TitleWrapper>
              <Title>{pet.name}</Title>
              <Tag>{pet.species}</Tag>
            </TitleWrapper>
            <StatusInfo>
              <StatusDate>
                입소일: {new Date(pet.entranceDate).toLocaleDateString()}
              </StatusDate>
            </StatusInfo>
          </Header>

          <InfoGrid>
            <InfoCard>
              <InfoIcon>🎂</InfoIcon>
              <InfoContent>
                <Label>나이</Label>
                <Value>{pet.age}</Value>
              </InfoContent>
            </InfoCard>
            <InfoCard>
              <InfoIcon>⚤</InfoIcon>
              <InfoContent>
                <Label>성별</Label>
                <Value>{pet.sex}</Value>
              </InfoContent>
            </InfoCard>
            <InfoCard>
              <InfoIcon>⚖️</InfoIcon>
              <InfoContent>
                <Label>체중</Label>
                <Value>{pet.bodyWeight}kg</Value>
              </InfoContent>
            </InfoCard>
            <InfoCard>
              <InfoIcon>🐾</InfoIcon>
              <InfoContent>
                <Label>품종</Label>
                <Value>{pet.breed}</Value>
              </InfoContent>
            </InfoCard>
          </InfoGrid>

          <StatusGrid>
            <StatusCard status={pet.adoptionStatus}>
              <StatusIcon>👨‍👩‍👧‍👦</StatusIcon>
              <StatusContent>
                <Label>입양상태</Label>
                <Value>{pet.adoptionStatus}</Value>
              </StatusContent>
            </StatusCard>
            <StatusCard status={pet.temporaryProtectionStatus}>
              <StatusIcon>🏠</StatusIcon>
              <StatusContent>
                <Label>임시보호상태</Label>
                <Value>{pet.temporaryProtectionStatus}</Value>
              </StatusContent>
            </StatusCard>
          </StatusGrid>

          {pet.calculatedData && (
            <Section>
              <SectionTitle>예상 비용</SectionTitle>
              <CostList>
                {JSON.parse(pet.calculatedData).map((item: { name: string; content: string }, index: number) => (
                  <CostItem key={index}>
                    <CostLabel>{item.name}</CostLabel>
                    <CostContent>{item.content}</CostContent>
                  </CostItem>
                ))}
              </CostList>
            </Section>
          )}

          {pet.introductionContent && (
            <Section>
              <SectionTitle>소개</SectionTitle>
              <ContentCard>{pet.introductionContent}</ContentCard>
            </Section>
          )}

          {pet.temporaryProtectionContent && (
            <Section>
              <SectionTitle>임시보호 관련 정보</SectionTitle>
              <ContentCard>{pet.temporaryProtectionContent}</ContentCard>
            </Section>
          )}

          {pet.introductionVideoUrl && (
            <Section>
              <SectionTitle>소개 영상</SectionTitle>
              <VideoWrapper>
                <VideoFrame 
                  src={getYoutubeEmbedUrl(pet.introductionVideoUrl)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </Section>
          )}
        </InfoSection>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 1rem;
`

const TopHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 1rem;
`

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 3rem;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
`

const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.75rem;
  max-width: 100%;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary}40;
    border-radius: 2px;
  }
`

const GridImageWrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.small};
  overflow: hidden;
  border: 2px solid ${props => props.isSelected ? props.theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const GridImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  line-height: 1.2;
`

const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.small};
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`

const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StatusDate = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
`

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
`

const InfoIcon = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`

const StatusCard = styled(InfoCard)<{ status: string }>`
  background: ${props => {
    switch(props.status.toLowerCase()) {
      case 'available':
      case '가능':
        return props.theme.colors.success + '15';
      case 'pending':
      case '진행중':
        return props.theme.colors.warning + '15';
      case 'completed':
      case '완료':
        return props.theme.colors.info + '15';
      default:
        return props.theme.colors.background;
    }
  }};
`

const StatusIcon = styled(InfoIcon)`
  font-size: 1.75rem;
`

const StatusContent = styled(InfoContent)`
  flex: 1;
`

const Label = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`

const Value = styled.div`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`

const ContentCard = styled.div`
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  white-space: pre-wrap;
`

const VideoWrapper = styled.div`
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
`

const VideoFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
`

const CostList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
`

const CostItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`

const CostLabel = styled.span`
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text.primary};
`

const CostContent = styled.span`
  color: ${props => props.theme.colors.text.secondary};
`

const Message = styled.div`
  text-align: center;
  font-size: 1.1rem;
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
`

const LoadingMessage = styled(Message)`
  color: ${props => props.theme.colors.primary};
`

const ErrorMessage = styled(Message)`
  color: ${props => props.theme.colors.error};
`

export default PetDetailPage
