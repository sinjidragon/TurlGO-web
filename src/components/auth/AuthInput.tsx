import { InputHTMLAttributes } from 'react'
import { InputWrapper, Input, ErrorText } from './AuthStyles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const AuthInput = ({ error, ...props }: Props) => {
  return (
    <InputWrapper>
      <Input $hasError={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  )
}

export default AuthInput
