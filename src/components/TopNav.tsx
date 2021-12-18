import styled from "styled-components";

const TopNavWrapper = styled.div`
  position: fixed;
  top: 0%;
  z-index: 1;
  background-color: transparent;
  transition: all 0.5s;
  * {
    grid-column-end: span 1;
    max-width: 96px;
  }
  a {
    cursor: pointer;
  }
`;
const Logo = styled.a`
  img{
    width: 100%;
    height: auto;
  }
`;
const MenuIcon = styled.a<{ color?: string }>`
  width: 100%;
  position: relative;
  text-align: center;
  color: ${props => props.color};
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  &:after{
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    background-color: ${props => props.color};
  }
  &:hover:after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
const Spacer = styled.div<{ unit: string }>`
  grid-column-end: span ${props => props.unit};
`
const HoverImage = styled.a<{ img: string, hoverImg: string }>`
  width: 100%;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transition: all 0.5s;
  background-image:url(${props => props.img});
  &:hover{
  background-image:url(${props => props.hoverImg});
  }
`;

interface ITopNav {
  logo: string | undefined;
  links: {
    kakaotalk: string | undefined;
    instagram: string | undefined;
    github: string | undefined;
  } | undefined;
  scrolled: boolean;
}
function TopNav({ logo, links, scrolled }: ITopNav) {
  const scrolledColor = scrolled ? "#a5936e" : "white";

  return (
    <TopNavWrapper className="grid" style={{
      backgroundColor: scrolled ? "white" : "transparent"
    }}>
      <Logo href="#header" className={scrolled ? "scrolled" : ""}>
        <img src={logo || ""} alt="Logo"></img>
      </Logo>
      <MenuIcon color={scrolledColor} href="#about-me">About me</MenuIcon>
      <MenuIcon color={scrolledColor} href="#projects">Projects</MenuIcon>
      <MenuIcon color={scrolledColor} href="#careers">Career</MenuIcon>
      <MenuIcon color={scrolledColor} href="#contacts">Contact</MenuIcon>
      <Spacer unit="3"></Spacer>
      <HoverImage href={links?.kakaotalk || ""} img="/icon/kakao-talk.png" hoverImg="/icon/kakao-talk-hover.png"></HoverImage>
      <HoverImage href={links?.instagram || ""} img="/icon/instagram.png" hoverImg="/icon/instagram-hover.png"></HoverImage>
      <HoverImage href={links?.github || ""} img="/icon/github.png" hoverImg="/icon/github-hover.png"></HoverImage>
      <Spacer unit="1"></Spacer>
    </TopNavWrapper>
  )

}

export default TopNav;