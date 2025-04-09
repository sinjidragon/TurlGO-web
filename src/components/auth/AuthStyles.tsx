import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: ${props => props.theme.colors.background};
  transition: background-color 0.2s ease;
`

export const MainSection = styled.main`
  width: 100%;
  max-width: 400px;
  margin-top: 40px;

  h2 {
    text-align: center;
    margin-bottom: 32px;
    font-weight: ${props => props.theme.typography.fontWeights.bold};
    color: ${props => props.theme.colors.text.primary};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AuthButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.$variant === 'secondary' ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.$variant === 'secondary' ? props.theme.colors.primary : '#fff'};
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

export const AuthLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 16px;
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => props.$hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? props.theme.colors.error : props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? 
      `${props.theme.colors.error}20` : 
      `${props.theme.colors.primary}20`};
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.disabled};
  }
`

export const ErrorText = styled.span`
  display: block;
  margin-top: 4px;
  color: ${props => props.theme.colors.error};
  font-size: 12px;
`
