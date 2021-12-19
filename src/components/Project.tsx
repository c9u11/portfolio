import styled from "styled-components";
import { IProject } from "../Interface/interface";
import Content from "./Content";

const ContentBody = styled("div")`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-items: center;
grid-gap: 10px;
margin: 30px 0px;
`;
const Img = styled("img") <{ order: number }>`
background-color: ${props => props.theme.boxBgColor};
width: 100%;
height: auto;
border-radius: 10px;
order: ${props => props.order};
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const Info = styled("div")`
  padding: 10px;
  font-size: 1.6rem;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 479px) {
    font-size: 1.2rem;
  }
`;
const Title = styled("h3")`
  color: ${props => props.theme.accentColor};
  font-size: 3.2rem;
  margin-bottom: 20px;
  font-weight: bold;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 479px) {
    font-size: 2.2rem;
  }
`;
const Summary = styled("pre")`
font-weight: bold;
white-space: break-spaces;
margin-bottom: 10px;
color: ${props => props.theme.primaryTextColor};`;
const Description = styled("pre")`
color: ${props => props.theme.secondaryTextColor};
white-space: break-spaces;
margin-bottom: 10px;`;
const Tags = styled("ul")``;
const Tag = styled("li")`
  display: inline-block;
  list-style: none;
  padding: 5px;
  margin: 5px;
  border: #a5936e solid 1px;
  border-radius: 10px;
`;
interface IProjects {
  projects: IProject[] | undefined;
}

function Project({ projects }: IProjects) {
  return (
    <Content id="projects" title="Project">
      {projects?.map((project, index) => {
        return (
          <ContentBody key={index}>
            <Img
              order={(index || 0) % 2 === 0 ? 1 : 0}
              src={process.env.PUBLIC_URL + project.imgURL || ""}
            ></Img>
            <Info>
              <Title>{project.title || ""}</Title>
              <Summary>{project.summary || ""}</Summary>
              <Description>{project.description || ""}</Description>
              <Tags>
                {project.tags.map((tag, index) => {
                  return <Tag key={`project-tag-${index || ""}`}>{tag || ""}</Tag>;
                })}
              </Tags>
            </Info>
          </ContentBody>
        )
      })
      }
    </Content>
  );
}
export default Project;
