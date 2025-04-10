import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'

const LayoutContainer = styled.div`
  padding-top: 3.5rem;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
`

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  )
}

export default MainLayout
