import styled from '@emotion/styled'
import Video from '@/components/edu/video'

const EduPage = () => {
  return (
    <Container>
        <Video/>
    </Container>
  )
}

export default EduPage

const Container = styled.div`
  padding: 32px;
    display: flex;
    justify-content: center;
`
