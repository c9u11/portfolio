import styled from "styled-components";
import { ICareer } from "../Interface/interface";
import Content from "./Content";

const ContentBody = styled("div")`
  display: flex;
  align-items: flex-start;
`;
const ImgWrapper = styled("div")`
  position: relative;
  overflow: hidden;
  width: 15%;
  height: auto;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:before{
    content: "";
    display: block;
    padding-top: 100%;
  }
`;
const Img = styled("img")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  width: 100%;
  height: auto;
  background-color: white;
`;
const Info = styled("div")`
  padding: 0px 20px;
  flex: 1;
  font-size: 1.6rem;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 479px) {
    font-size: 1.0rem;
  }
`;
const Title = styled("h3")`
color: ${props => props.theme.primaryTextColor};
font-size: 2.4rem;
margin-bottom: 20px;
font-weight: bold;
@media screen and (min-width:480px) and (max-width:767px) {
  font-size: 2.2rem;
}
@media screen and (max-width: 479px) {
  font-size: 2.0rem;
}
`;
const Summary = styled("pre")`
font-weight: bold;
white-space: break-spaces;
margin-bottom: 10px;
color: ${props => props.theme.primaryTextColor};
`;
const Description = styled("div")`
  color: ${props => props.theme.secondaryTextColor};
  margin: 30px 0px;
`;
const DescriptionTitle = styled.h4`
font-size: 2.3rem;
font-weight: bold;
margin-bottom: 10px;
`;
const DescriptionBody = styled.pre`
white-space: break-spaces;
margin-bottom: 10px;
color: ${props => props.theme.secondaryTextColor};
`;
const Tags = styled.ul`
  margin: 10px 0px;
`;
const Tag = styled.li`
  display: inline-block;
  list-style: none;
  padding: 5px;
  margin: 5px;
  border: #afcfe1 solid 3px;
  border-radius: 10px;
  background-color: #afcfe1;
  color: white;
`;
interface ICareers {
  careers: ICareer[] | undefined;
}

function Career({ careers }: ICareers) {
  return (
    <Content id="careers" title="Career" style={{ backgroundColor: "#e2e5e6", color: "white" }}>
      {careers?.map((career, index) => {
        return (
          <ContentBody key={index}>
            <ImgWrapper>
              <Img src={process.env.PUBLIC_URL + career.imgURL || ""}></Img>
            </ImgWrapper>
            <Info>
              <Title>{career.title}</Title>
              <Tags>
                {career.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </Tags>
              <Summary>{career.summary}</Summary>
              {career.description.map(({ title, body }, index) => {
                return (
                  <Description key={index}>
                    <DescriptionTitle>{title}</DescriptionTitle>
                    <DescriptionBody>{body}</DescriptionBody>
                  </Description>
                );
              })}
            </Info>
          </ContentBody>
        )
      })
      }
    </Content>
  );
}
export default Career;
