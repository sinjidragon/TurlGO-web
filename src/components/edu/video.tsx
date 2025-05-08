import React from 'react';
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
  gap: 40px;
  padding: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

const TitleBox = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(239, 121, 138, 0.4);
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  padding: 20px;
  text-align: center;
  border-bottom-left-radius: ${props => props.theme.borderRadius.large};
  border-bottom-right-radius: ${props => props.theme.borderRadius.large};
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;