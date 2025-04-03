import AuthInput from '@/components/auth/AuthInput'
import {
  Container,
  MainSection,
  Form,
  AuthButton,
  AuthLink,
} from '@/components/auth/AuthStyles'
import Logo from '@/components/common/Logo'

const Register = () => {
  return (
    <Container>
      <Logo />
      <MainSection>
        <h2>회원가입</h2>
        <Form>
          <AuthInput
            placeholder="아이디를 입력해주세요"
            type="text"
          />
          <AuthInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <AuthButton>회원가입</AuthButton>
        </Form>
        <AuthLink to="/login">
          기존 계정으로 로그인
        </AuthLink>
      </MainSection>
    </Container>
  )
}

export default Register
