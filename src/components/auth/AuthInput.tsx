import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  error?: string
  label?: string
}

const AuthInput = ({ icon, error, label, ...props }: AuthInputProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputContainer hasError={!!error}>
        <input {...props} />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  width: 100%;
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #333;
`

const InputContainer = styled.div<{ hasError: boolean }>`
  position: relative;
  width: 100%;
  
  input {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    border: 2px solid ${props => props.hasError ? '#ff4d4f' : '#e1e1e1'};
    background-color: #fff;
    font-size: 16px;
    outline: none;
    padding-right: ${props => props.children && '44px'};
    transition: all 0.2s;
    
    &::placeholder {
      color: #999;
    }
    
    &:hover {
      border-color: ${props => props.hasError ? '#ff4d4f' : '#EF798A'};
    }
    
    &:focus {
      border-color: ${props => props.hasError ? '#ff4d4f' : '#EF798A'};
      box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(255, 77, 79, 0.1)' : 'rgba(239, 121, 138, 0.1)'};
    }
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorMessage = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 4px;
`

export default AuthInput
