import styled from '@emotion/styled'
import { ModalType } from '@/types/my'
import { useDeleteUser } from '@/services/my';
import { useNavigate } from 'react-router-dom';

const MyModal:React.FC<ModalType> = ({setModal}) => {
    const {mutate: deleteUser} = useDeleteUser();
    const nav = useNavigate();
  return (
    <ModalBackground>
      <ModalWrap>
        <TextWrap>
          <ModalTitle>회원탈퇴 하시겠어요?</ModalTitle>
          <ModalText>탈퇴하면 정보를 다시 불러올 수 없어요</ModalText>
          <ButtonWrap>
            <AcceptButton
              onClick={() => {
                deleteUser();
                nav("/register");
              }}
            >
              회원탈퇴
            </AcceptButton>
            <CancelButton onClick={() => setModal(false)}>취소</CancelButton>
          </ButtonWrap>
        </TextWrap>
      </ModalWrap>
    </ModalBackground>
  );
}

export default MyModal

const ModalBackground = styled.div`
    width:100vw;
    height:100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index:1000;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top:0;
    left:0;
   
`
const ModalWrap = styled.div`
    width:25rem;
    height: 15rem;
    border-radius: ${props=>props.theme.borderRadius.large};
    background-color:${props=>props.theme.colors.background};
    padding:32px;
    position: relative;
    gap:40px;

`
const ModalTitle = styled.h1`
    font-size:${props => props.theme.typography.fontSize.xl};
    font-weight:${props => props.theme.typography.fontWeight.semibold};
    color:${props => props.theme.colors.text.primary};

`
const ModalText = styled.p`
    font-size:${props => props.theme.typography.fontSize.base};
    font-weight:${props => props.theme.typography.fontWeight.regular};
    color:${props => props.theme.colors.text.disabled};
`
const TextWrap = styled.div`
    display: flex;
    flex-direction:column;
    gap:8px;
`
const ButtonWrap = styled.div`
    width:100%;
    display: flex;
    gap:20px;
    position:absolute;
    bottom:32px;
    justify-content: center;
    left:0;
`
const CancelButton = styled.button`
    width: 160px;
    padding:20px;
    background-color: #EF798A;
    border-radius:80px;
    color:white;
    font-size:${props => props.theme.typography.fontSize.sm};
    font-weight:${props => props.theme.typography.fontWeight.medium};
`
const AcceptButton = styled.button`
    width: 160px;
    padding:20px;
    background-color: white;
    border:1px solid ${props =>props.theme.colors.border};
    border-radius:80px;
    color:black;
    font-size:${props => props.theme.typography.fontSize.sm};
    font-weight:${props => props.theme.typography.fontWeight.medium};
`