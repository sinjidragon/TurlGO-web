import styled from '@emotion/styled'
import { useState } from 'react';
import MyModal from './myModal';
import { useUser} from '@/services/my';


const MyInfo = () => {
    const [modal , setModal] = useState(false);
    const {data, isLoading, error} =useUser();

    if(isLoading){
        return  <UserEmail>이메일 불러오는 중...</UserEmail>
    }

    if(error){
        return <UserEmail>이메일을 불러올 수 없습니다</UserEmail>
    }

    
  return (
    <Container>
      <InfoBox>
        <Email>이메일</Email>
        <UserEmail>{data?.email}</UserEmail>
      </InfoBox>
      <InfoBox>
        <TestWrap>
          <TestImage src="/src/assets/dog.svg" />
          <UserName>마이펫 테스트 완료</UserName>
          <TestButton>다시 테스트하기</TestButton>
        </TestWrap>
      </InfoBox>
      <InfoBox>
        <Secession onClick={()=> setModal(true)}>회원탈퇴</Secession>
      </InfoBox>
        {modal ? <MyModal setModal={setModal} modal={modal}/> : null}
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
    display: flex;
    gap:40px;
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
