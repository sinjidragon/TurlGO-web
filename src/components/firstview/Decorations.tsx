import styled from '@emotion/styled'

const Decorations = () => {
  return (
    <Container>
      <Paw />
      <Heart />
      <Bone />
      <Plus />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const Paw = styled.div`
  position: absolute;
  top: -20px;
  left: 20px;
  width: 24px;
  height: 24px;
  background-color: #FFE5E5;
  border-radius: 50%;
`

const Heart = styled.div`
  position: absolute;
  top: 40px;
  right: -10px;
  width: 24px;
  height: 24px;
  background-color: #FFE5E5;
  transform: rotate(45deg);
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #FFE5E5;
  }
  
  &:before {
    left: -12px;
  }
  
  &:after {
    top: -12px;
  }
`

const Bone = styled.div`
  position: absolute;
  bottom: 30px;
  left: -10px;
  width: 24px;
  height: 12px;
  background-color: #FFE5E5;
  border-radius: 6px;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #FFE5E5;
    border-radius: 8px;
  }
  
  &:before {
    top: -2px;
    left: -6px;
  }
  
  &:after {
    top: -2px;
    right: -6px;
  }
`

const Plus = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 20px;
  height: 4px;
  background-color: #FFE5E5;
  
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    left: 8px;
    width: 4px;
    height: 20px;
    background-color: #FFE5E5;
  }
`

export default Decorations
