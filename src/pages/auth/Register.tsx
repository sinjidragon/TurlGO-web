import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthInput from '@/components/auth/AuthInput'
import EmailVerification from '@/components/auth/EmailVerification'
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
    verifyCode: '',
  })
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const signUp = useSignUp()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.username.trim()) {
      alert('아이디를 입력해주세요.')
      return
    }

    if (!isEmailVerified) {
      return
    }

    if (!formData.password.trim()) {
      alert('비밀번호를 입력해주세요.')
      return
    }

    try {
      await signUp.mutateAsync(formData)
      alert('회원가입이 완료되었습니다. 로그인해주세요.')
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
          <EmailVerification
            email={formData.email}
            verifyCode={formData.verifyCode}
            onEmailChange={handleChange}
            onVerifyCodeChange={handleChange}
            onVerificationComplete={() => setIsEmailVerified(true)}
          />
          <AuthInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <AuthButton type="submit" disabled={signUp.isPending || !isEmailVerified}>
            {signUp.isPending ? '회원가입 중...' : '회원가입'}
          </AuthButton>
        </Form>
        <AuthLink to="/login">
          이미 계정이 있다면? 로그인
        </AuthLink>
      </MainSection>
    </Container>
  )
}

export default Register
