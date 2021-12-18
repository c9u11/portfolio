import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const BackgroundVideo = styled.video`
  width: 100%;
  height: auto;
`;
const Intro = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.2rem;
  color: white;
  white-space: nowrap;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 479px) {
    font-size: 1.6rem;
  }
`;

interface IHeader {
  backgroundVideo: string | undefined;
  intro: {
    start: string;
    end: string;
  } | undefined;
}
function Header({ backgroundVideo, intro }: IHeader) {
  return (
    <HeaderWrapper id="header">
      <BackgroundVideo loop={true} muted={true} autoPlay src={backgroundVideo || ""}></BackgroundVideo>
      <Intro>{intro?.start || ""}<br />{intro?.end || ""}</Intro>
    </HeaderWrapper>
  )
}

export default Header