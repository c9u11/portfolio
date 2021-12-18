import styled from "styled-components";
import { IContact } from "../Interface/interface";
import Content from "./Content";

const ContentBody = styled.ul`
  display: flex;
  align-items: flex-start;
`;
const Contact = styled.li`
`;
const Title = styled.span`
  color: #a5936e;
  font-size: 24px;
`;
const Link = styled.a`
font-weight: bold;`;
interface IContacts {
  contacts: IContact[] | undefined;
}

function Career({ contacts }: IContacts) {
  return (
    <Content id="contacts" title="Contact">
      <ContentBody>
        {contacts?.map((contact, index) => {
          return (
            <Contact key={`contact-${index}`}>
              <Title>{contact.title}</Title>
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
