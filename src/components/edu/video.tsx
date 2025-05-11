import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { EduVideo } from '@/types/edu';

const Video = () => {
  return (
    <VideoWrap>
      {EduVideo.map((item, index) => (
        <VideoContainer key={index}>
          <VideoBox>
            <StyledReactPlayer url={item.id} width="100%" height="100%" controls />
          </VideoBox>
          <TitleBox>{item.title}</TitleBox>
        </VideoContainer>
      ))}
    </VideoWrap>
  );
};

export default Video;

const VideoWrap = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  padding: 2rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 25px;
  border: 3px solid #FFB6C1;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(255, 182, 193, 0.2);
  }

  &:before {
    content: '🎥';
    position: absolute;
    top: -0.8rem;
    right: -0.5rem;
    font-size: 1.5rem;
    transform: rotate(15deg);
    z-index: 1;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
`;

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-bottom: 3px solid #FFB6C1;
  background: #FFF5F7;
`;

const TitleBox = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  color: #464646;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1.5rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #ffa3d1, #FFB6C1);
    border-radius: 3px;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;