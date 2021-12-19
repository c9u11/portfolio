import styled from "styled-components";
import { IContact } from "../Interface/interface";
import Content from "./Content";

const ContentBody = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color:white;
  padding: 20px;
  color: ${props => props.theme.boxTextColor};
  font-size: 1.6rem;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 479px) {
    font-size: 1.0rem;
  }
`;
const Contact = styled("li")`
`;
const Title = styled("span")`
  font-weight: bold;
  font-size: 2.0rem;
  @media screen and (min-width:480px) and (max-width:767px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 479px) {
    font-size: 1.6rem;
  }
`;
const Link = styled("a")`
`;
interface IContacts {
  contacts: IContact[] | undefined;
}

function Career({ contacts }: IContacts) {
  return (
    <Content id="contacts" title="Contact" style={{ color: "white", backgroundColor: "#C2BAB1", border: "white 30px solid" }}>
      <ContentBody>
        {contacts?.map((contact, index) => {
          return (
            <Contact key={`contact-${index}`}>
              <Title>{contact.title} : </Title>
              <Link href={contact.href}>
                {contact.text}
              </Link>
            </Contact>
          )
        })}
      </ContentBody>
    </Content>
  );
}
export default Career;
