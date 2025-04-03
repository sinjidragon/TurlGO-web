import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const MainLayout = () => {
  return (
    <Layout>
      <main>
        <Outlet />
      </main>
    </Layout>
  )
}

const Layout = styled.div`
  min-height: 100vh;
  
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
`

export default MainLayout
