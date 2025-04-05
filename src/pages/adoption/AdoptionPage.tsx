import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'
import { getPets } from '@/services/petService'
import PetList from '@/components/adoption/PetList'
import type { PetType } from '@/types/pet'

const AdoptionPage = () => {
  const [selectedTab, setSelectedTab] = useState<PetType | undefined>(undefined)

  const { data: petsData, isLoading } = useQuery({
    queryKey: ['pets', selectedTab],
    queryFn: () => getPets(selectedTab),
  })

  const handleTabClick = (type?: PetType) => {
    setSelectedTab(type)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Tabs>
        <Tab
          active={selectedTab === undefined}
          onClick={() => handleTabClick(undefined)}
        >
          전체
        </Tab>
        <Tab
          active={selectedTab === 'DOG'}
          onClick={() => handleTabClick('DOG')}
        >
          강아지
        </Tab>
        <Tab
          active={selectedTab === 'CAT'}
          onClick={() => handleTabClick('CAT')}
        >
          고양이
        </Tab>
      </Tabs>
      <Content>
        <PetList pets={petsData?.data || []} />
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

export default AdoptionPage
