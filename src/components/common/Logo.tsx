import styled from '@emotion/styled'

interface LogoProps {
  showSubtitle?: boolean
}

const Logo = ({ showSubtitle = true }: LogoProps) => {
  return (
    <LogoSection>
      <LogoImage src="/src/assets/logo.svg" alt="털날리GO" />
      {showSubtitle && <Subtitle>새로운 가족을 만나는 장소</Subtitle>}
    </LogoSection>
  )
}

const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 32px;
`

const LogoImage = styled.img`
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
`

export default Logo
