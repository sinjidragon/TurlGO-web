import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

interface Props {
  onToggle: () => void
  isDark: boolean
}

const ThemeToggle = ({ onToggle, isDark }: Props) => {
  return (
    <ToggleButton onClick={onToggle}>
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </ToggleButton>
  )
}

export default ThemeToggle
