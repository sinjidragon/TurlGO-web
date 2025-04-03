import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Decorations from '@/components/firstview/Decorations'

const FirstView = () => {
  return (
    <Container>
      <ContentWrapper>
        <LeftSection>
          <WelcomeText>
            <h2>새로운 가족과의 만남</h2>
            <p>털날리GO와 함께 시작하세요</p>
          </WelcomeText>
          <ButtonSection>
            <StartButton to="/register">회원가입</StartButton>
            <LoginLink to="/login">이미 계정이 있으신가요? 로그인하기</LoginLink>
          </ButtonSection>
        </LeftSection>
        <RightSection>
          <ImageSection>
            <CatImage src="/src/assets/cat.svg" alt="고양이 이미지" />
            <Decorations />
          </ImageSection>
        </RightSection>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 560px;

  @media (max-width: 1024px) {
    order: 2;
    align-items: center;
  }
`

const WelcomeText = styled.div`
  h2 {
    font-size: 48px;
    font-weight: 700;
    color: #333;
    margin-bottom: 16px;
    line-height: 1.2;
  }

  p {
    font-size: 20px;
    color: #666;
    line-height: 1.5;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 18px;
    }
  }
`

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    order: 1;
  }
`

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 40px;
`

const CatImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 32px;
`

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const StartButton = styled(Link)`
  width: 100%;
  padding: 18px 32px;
  border-radius: 16px;
  background-color: #EF798A;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
  
  &:hover {
    background-color: #e86476;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(239, 121, 138, 0.2);
  }
`

const LoginLink = styled(Link)`
  color: #666;
  font-size: 16px;
  text-align: center;
  transition: color 0.2s;
  
  &:hover {
    color: #EF798A;
  }
`

export default FirstView
