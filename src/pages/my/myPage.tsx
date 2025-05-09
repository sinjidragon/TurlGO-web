import styled from '@emotion/styled'
import MyProfile from '@/components/my/myProfile'
import MyInfo from '@/components/my/myInfo'
const MyPage = () => {
  return (
    
    <Container>
        <MyProfile/>
        <MyInfo/>
    </Container>
   
  )
}

const Container = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    /* padding:32px; */
    gap:${props => props.theme.spacing.md};
    flex-direction:column;
`

export default MyPage;
