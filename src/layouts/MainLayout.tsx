import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import Navbar from '@/components/layout/Navbar'

const LayoutContainer = styled.div`
  padding-top: 3.5rem;
  min-height: 100vh;
  background-color: #FAFAFA;
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
