import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthInput from '@/components/auth/AuthInput'
import {
  Container,
  MainSection,
  Form,
  AuthButton,
  AuthLink,
} from '@/components/auth/AuthStyles'
import Logo from '@/components/common/Logo'
import { useSignUp } from '@/services/auth'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const signUp = useSignUp()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await signUp.mutateAsync(formData)
      navigate('/login')
    } catch (err) {
      // Error is handled by the mutation
    }
  }

  return (
    <Container>
      <Logo />
      <MainSection>
        <h2>회원가입</h2>
        <Form onSubmit={handleSubmit}>
          <AuthInput
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
            type="text"
            error={signUp.error?.message}
          />
          <AuthInput
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력해주세요"
            type="email"
          />
          <AuthInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <AuthButton type="submit" disabled={signUp.isPending}>
            {signUp.isPending ? '회원가입 중...' : '회원가입'}
          </AuthButton>
        </Form>
        <AuthLink to="/login">
          기존 계정으로 로그인
        </AuthLink>
      </MainSection>
    </Container>
  )
}

export default Register
