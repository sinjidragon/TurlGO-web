import styled from "@emotion/styled";

const MyProfile = () => {
  return (
    <Container>
        <Photo />
        <UserName>아마루</UserName>
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
const Photo = styled.div`
    width:80px;
    height:80px;
    border-radius:100px;
    background-color:black;
`
const UserName = styled.div`
    color:${props => props.theme.colors.text.primary};
    font-size:${props => props.theme.typography.fontSize.lg};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
`


