import styled from "styled-components";
import Content from "./Content";
const ContentBody = styled("div")`
  display: flex;
  align-items: center;
  @media screen and (min-width:480px) and (max-width:767px) {
  }
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
`;
const Intro = styled("pre")`
  flex: 1;
  margin-right: 10%;
  font-size: 1.6rem;
  white-space: break-spaces;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 479px) {
    order: 1;
    margin-top: 20px;
    margin-right: 0;
    font-size: 1rem;
  }
`;
const ImgWrapper = styled("div")`
  position: relative;
  overflow: hidden;
  width: 20%;
  height: auto;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:before{
    content: "";
    display: block;
    padding-top: 100%;
  }
  @media screen and (min-width:480px) and (max-width:767px) {
  }
  @media screen and (max-width: 479px) {
    width: 30%;
    order:0;
  }
`;
const Img = styled("img")`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface IAboutMe {
  aboutMe: string | undefined;
  profile: string | undefined;
}
function AboutMe({ aboutMe, profile }: IAboutMe) {
  return (
    <Content id="about-me" title="About me" style={{ backgroundColor: "#fbf9f9" }}>
      <ContentBody>
        <Intro>{aboutMe || ""}</Intro>
        <ImgWrapper>
          <Img src={process.env.PUBLIC_URL + profile || ""}></Img>
        </ImgWrapper>
      </ContentBody>
    </Content>
  )
}
export default AboutMe;