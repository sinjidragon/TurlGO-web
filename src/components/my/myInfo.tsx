import styled from '@emotion/styled'

const MyInfo = () => {
  return (
    <Container>
      <InfoBox>
        <Email>이메일</Email>
        <UserEmail>maru012@naver.com</UserEmail>
        <Arrow
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="24"
          viewBox="0 0 12 24"
        >
          <defs>
            <path
              id="weuiArrowOutlined0"
              fill="currentColor"
              d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
            />
          </defs>
          <use
            fill-rule="evenodd"
            href="#weuiArrowOutlined0"
            transform="rotate(-180 5.02 9.505)"
          />
        </Arrow>
      </InfoBox>
      <InfoBox>
        <TestWrap>
          <TestImage src="/src/assets/dog.svg" />
          <UserName>마이펫 테스트 완료</UserName>
          <TestButton>다시 테스트하기</TestButton>
        </TestWrap>
      </InfoBox>
      <InfoBox>
        <Secession>회원탈퇴</Secession>
      </InfoBox>
    </Container>
  );
}

export default MyInfo;

const Container = styled.div`
    width:100vw;
    display: flex;
    align-items: center;
    padding:20px;
    flex-direction:column;
    gap:${props => props.theme.spacing.md};
`
const InfoBox = styled.div`
    width: 40rem;
    padding:${props => props.theme.spacing.md};
    background-color: ${props=> props.theme.colors.background};
    border:1px solid ${props=> props.theme.colors.border};
    gap:40px;
    display: flex;
    border-radius: ${props => props.theme.borderRadius.medium};
    position:relative;
`
const Email = styled.p`
    font-size:${props=>props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    color:${props => props.theme.colors.text.primary};
`
const UserEmail = styled.p`
    font-size:${props=>props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    color:${props => props.theme.colors.text.disabled};
`
const Secession = styled.p`
    font-size:${props=>props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
    color:${props => props.theme.colors.error};
`
const TestButton = styled.button`
    padding:14px;
    background-color:#EF798A;
    border-radius:200px;
    color:white;
    font-size:14px;
    font-weight:${props => props.theme.typography.fontWeight.medium};
`
const TestWrap = styled.div`
    width:40rem;
    gap:12px;
    padding: 20px;
    display: flex;
    flex-direction:column;
    align-items: center;
`
const UserName = styled.div`
    color:${props => props.theme.colors.text.primary};
    font-size:${props => props.theme.typography.fontSize.lg};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
`
const TestImage = styled.img`
    width:10rem;
`
const Arrow = styled.svg`
    color: ${props => props.theme.colors.border};
    position:absolute;
    right:20px;

`
