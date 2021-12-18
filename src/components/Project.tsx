import styled from "styled-components";
import { IProject } from "../Interface/interface";
import Content from "./Content";

const ContentBody = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-items: center;
grid-gap: 10px;
margin: 30px 0px;
`;
const Img = styled.img<{ order: number }>`
background-color: bisque;
width: 100%;
height: 100%;
border-radius: 10px;
order: ${props => props.order};
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const Info = styled.div`
  padding: 10px;
`;
const Title = styled.h3`
  color: #a5936e;
  font-size: 24px;
`;
const Summary = styled.p`
font-weight: bold;`;
const Description = styled.p``;
const Tags = styled.ul``;
const Tag = styled.li`
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
          <ContentBody>
            <Img
              order={(index || 0) % 2 === 0 ? 1 : 0}
              src={project.imgURL || ""}
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
