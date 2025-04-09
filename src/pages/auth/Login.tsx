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
import { useLogin } from '@/services/auth'
import ThemeToggle from '@/components/common/ThemeToggle'

interface Props {
  isDark: boolean
  onThemeToggle: () => void
}

// 로그인 페이지 컴포넌트
// @param isDark가 다크모드 여부
// @param onThemeToggle이 테마 토글 함수
const Login = ({ isDark, onThemeToggle }: Props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const login = useLogin()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await login.mutateAsync(formData)
      navigate('/home')
    } catch (err) {
      // Error is handled by the mutation
    }
  }

  return (
    <Container>
      <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      <Logo />
      <MainSection>
        <h2>로그인</h2>
        <Form onSubmit={handleSubmit}>
          <AuthInput
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
            type="text"
            error={login.error?.message}
          />
          <AuthInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <AuthButton type="submit" disabled={login.isPending}>
            {login.isPending ? '로그인 중...' : '로그인'}
          </AuthButton>
        </Form>
        <AuthLink to="/register">
          계정이 없다면? 회원가입
        </AuthLink>
      </MainSection>
    </Container>
  )
}

export default Login
