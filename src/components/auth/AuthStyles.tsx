import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #fff;
`

export const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 48px;
`

export const MainSection = styled.div<{ hasTitle?: boolean }>`
  width: 100%;
  max-width: 420px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 48px;
    text-align: center;
    color: #333;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const AuthButton = styled.button`
  width: 100%;
  padding: 18px 32px;
  border-radius: 16px;
  background-color: #EF798A;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
  margin-top: 8px;
  
  &:hover {
    background-color: #e86476;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(239, 121, 138, 0.2);
  }
`

export const AuthLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 24px;
  color: #666;
  font-size: 16px;
  transition: color 0.2s;
  
  &:hover {
    color: #EF798A;
  }
`
