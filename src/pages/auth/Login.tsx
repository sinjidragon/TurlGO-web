import AuthInput from '@/components/auth/AuthInput'
import {
  Container,
  MainSection,
  Form,
  AuthButton,
  AuthLink,
} from '@/components/auth/AuthStyles'
import Logo from '@/components/common/Logo'

const Login = () => {
  return (
    <Container>
      <Logo />
      <MainSection>
        <h2>로그인</h2>
        <Form>
          <AuthInput
            placeholder="아이디를 입력해주세요"
            type="text"
          />
          <AuthInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <AuthButton>로그인</AuthButton>
        </Form>
        <AuthLink to="/register">
          계정이 없다면? 회원가입
        </AuthLink>
      </MainSection>
    </Container>
  )
}

export default Login
