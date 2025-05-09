import { useState } from 'react'
import styled from '@emotion/styled'
import { usePets } from '@/services/petService'
import PetList from '@/components/adoption/PetList'

const AdoptionPage = () => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>(undefined)

  const { data: petsData, isLoading, error } = usePets()


  const handleTabClick = (type?: string) => {
    setSelectedTab(type)
  }

  const renderTabs = () => (
    <Tabs>
      <Tab active={selectedTab === undefined} onClick={() => handleTabClick(undefined)}>전체</Tab>
      <Tab active={selectedTab === 'DOG'} onClick={() => handleTabClick('DOG')}>강아지</Tab>
      <Tab active={selectedTab === 'CAT'} onClick={() => handleTabClick('CAT')}>고양이</Tab>
    </Tabs>
  )

  if (isLoading) {
    return (
      <Container>
        {renderTabs()}
        <Content>
          <LoadingMessage>동물 목록을 불러오는 중입니다...</LoadingMessage>
        </Content>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        {renderTabs()}
        <Content>
          <ErrorMessage>동물 목록을 불러오는데 실패했습니다.</ErrorMessage>
        </Content>
      </Container>
    )
  }

  return (
    <Container>
      {renderTabs()}
      <Content>
        <PetList 
          pets={(petsData?.data || []).filter(pet => {
            if (!selectedTab) return true;
            return pet.species === selectedTab;
          })} 
        />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Tab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#FF6B6B' : '#f1f1f1')};
  color: ${({ active }) => (active ? 'white' : '#666')};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? '#FF5252' : '#e1e1e1')};
  }
`

const Content = styled.div`
  width: 100%;
`

const Message = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 2rem 0;
`

const LoadingMessage = styled(Message)`
  color: ${props => props.theme.colors.primary};
`

const ErrorMessage = styled(Message)`
  color: ${props => props.theme.colors.error};
`

export default AdoptionPage
