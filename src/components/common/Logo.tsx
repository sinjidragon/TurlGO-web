import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

interface LogoProps {
  showSubtitle?: boolean
  to?: string
}

const LogoImage = styled.img`
  margin-bottom: 8px;
  transition: filter 0.2s ease;
`

const LogoLink = styled(Link)`
  display: inline-block;
  text-align: center;
  margin-bottom: 32px;
`

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
`

const Logo = ({ showSubtitle = true, to = '/' }: LogoProps) => {
  const theme = useTheme()
  const isDark = theme.colors.background === '#1f1f1f'

  return (
    <LogoLink to={to}>
      <LogoImage 
        src="/src/assets/logo.svg" 
        alt="털날리GO" 
        style={{ 
          filter: isDark ? 'brightness(10)' : 'none'
        }} 
      />
      {showSubtitle && <Subtitle>새로운 가족을 만나는 장소</Subtitle>}
    </LogoLink>
  )
}

export default Logo
