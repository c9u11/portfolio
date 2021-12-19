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
`;
const Title = styled("h3")`
  color: #a5936e;
  font-size: 24px;
`;
const Summary = styled("p")`
font-weight: bold;`;
const Description = styled("div")``;
const DescriptionTitle = styled.h4``;
const DescriptionBody = styled.p``;
const Tags = styled.ul``;
const Tag = styled.li`
  display: inline-block;
  list-style: none;
  padding: 5px;
  margin: 5px;
  border: #a5936e solid 1px;
  border-radius: 10px;
`;
interface ICareers {
  careers: ICareer[] | undefined;
}

function Career({ careers }: ICareers) {
  return (
    <Content id="careers" title="Career" style={{ backgroundColor: "#e2e5e6" }}>
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
