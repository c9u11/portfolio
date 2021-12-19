import styled from "styled-components";

const Container = styled("div")`
`;
const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 12;
  width: 100%;
  margin: 5% 0px;
  max-width: 1280px;
`;
const ContentTitle = styled("h2")`
  font-size: 41px;
  margin-bottom: 20px;
`

interface IContent {
  id: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function Content({ id, title, children, style }: IContent) {
  return (
    <Container className="grid" id={id} style={style}>
      <ContentWrapper>
        <ContentTitle>{title}</ContentTitle>
        {children}
      </ContentWrapper>
    </Container>
  );
}

export default Content;
