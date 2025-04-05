import styled from '@emotion/styled'

const Home = () => {
  return (
    <HomeContainer>
      <h1>털고메인입니다.</h1>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`

export default Home
