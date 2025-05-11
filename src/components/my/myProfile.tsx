import styled from "@emotion/styled";
import { useUser } from "@/services/my";

const MyProfile = () => {
  const {data, isLoading, error} = useUser();
  console.log(data);

  if(isLoading){
    return <UserName>사용자 불러오는 중...</UserName>
  }

  if(error){
    return <UserName>찾을 수 없는 사용자</UserName>
  }


  return (
    <Container>
        <Photo src="/assets/profile.svg" alt="프로필 이미지" />
        <UserName>{data?.username}</UserName>
    </Container>
  )
}

export default MyProfile;


const Container = styled.div`
    width:100vw;
    display: flex;
    align-items: center;
    padding:20px;
    flex-direction:column;
    gap:${props => props.theme.spacing.md};
`
const Photo = styled.img`
    width:80px;
    height:80px;
    border-radius:100px;
    object-fit: cover;
`
const UserName = styled.div`
    color:${props => props.theme.colors.text.primary};
    font-size:${props => props.theme.typography.fontSize.lg};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
`


