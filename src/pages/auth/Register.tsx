import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthInput from '@/components/auth/AuthInput'
import EmailVerification from '@/components/auth/EmailVerification'
import ThemeToggle from '@/components/common/ThemeToggle'
import {
  Container,
  MainSection,
  Form,
  AuthButton,
  AuthLink,
} from '@/components/auth/AuthStyles'
import Logo from '@/components/common/Logo'
import { useSignUp } from '@/services/auth'

interface Props {
  isDark: boolean
  onThemeToggle: () => void
}

const Register = ({ isDark, onThemeToggle }: Props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    verifyCode: '',
  })
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const signUp = useSignUp()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (name === 'email') {
      setIsEmailVerified(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmailVerified) return
    
    try {
      await signUp.mutateAsync({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
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
          <EmailVerification
            email={formData.email}
            verifyCode={formData.verifyCode}
            onEmailChange={handleChange}
            onVerifyCodeChange={handleChange}
            onVerificationComplete={() => setIsEmailVerified(true)}
          />
          <AuthInput
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
            type="text"
            error={signUp.error?.message}
          />
          <AuthInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <AuthButton type="submit" disabled={!isEmailVerified || signUp.isPending}>
            {signUp.isPending ? '회원가입 중...' : '회원가입'}
          </AuthButton>
        </Form>
        <AuthLink to="/login">
          기존 계정으로 로그인
        </AuthLink>
      </MainSection>
      <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
    </Container>
  )
}

export default Register
