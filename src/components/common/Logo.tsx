import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

interface LogoProps {
  showSubtitle?: boolean
  to?: string
}

const LogoImage = styled.img`
  height: 1.8rem;
  width: auto;
  transition: filter 0.2s ease;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
`

const Logo = ({ showSubtitle = true, to = '/' }: LogoProps) => {
  const theme = useTheme()
  const isDark = theme.colors.background === '#1A1A1A'

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
