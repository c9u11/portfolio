import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scrolledAtom } from "../atoms";

const TopNavWrapper = styled.div`
  position: fixed;
  top: 0%;
  transition: all 0.3s;
  font-size : 1.6rem;
  z-index: 1;
  * {
    grid-column-end: span 1;
    max-width: 96px;
  }
  a {
    cursor: pointer;
  }


  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(5rem, auto);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  @media screen and (min-width:480px) and (max-width:767px) {
    display: flex;
    font-size : 1.4rem;
    grid-gap: unset;
  }
  @media screen and (max-width: 479px) {
    display: flex;
    font-size : 1rem;
    grid-gap: unset;
  }
`;
const Logo = styled.a`
  img{
    width: 100%;
    height: auto;
  }
  @media screen and (min-width:480px) and (max-width:767px) {
    width: 50px;
  }
  @media screen and (max-width: 479px) {
    width: 50px;
  }
`;
const MenuIcon = styled.a<{ color?: string }>`
  width: 100%;
  position: relative;
  text-align: center;
  color: ${props => props.color};
  font-weight: bold;
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
  @media screen and (min-width:480px) and (max-width:767px) {
    width: auto;
    padding: 10px;
  }
  @media screen and (max-width: 479px) {
    width: auto;
    padding: 10px;
  }
`;
const FlexSpacer = styled.div`
  display:none;
  @media screen and (min-width:480px) and (max-width:767px) {
    display:block;
    flex: 1;
    max-width: none;
  }
  @media screen and (max-width: 479px) {
    display:block;
    flex: 1;
    max-width: none;
  }
`
const GridSpacer = styled.div<{ unit: string }>`
  grid-column-end: span ${props => props.unit};
  @media screen and (min-width:480px) and (max-width:767px) {
    display:none;
  }
  @media screen and (max-width: 479px) {
    display:none;
  }
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
  @media screen and (min-width:480px) and (max-width:767px) {
    display:none;
  }
  @media screen and (max-width: 479px) {
    display:none;
  }
`;

interface ITopNav {
  logo: string | undefined;
  scrolledLogo: string | undefined;
  links: {
    kakaotalk: string | undefined;
    instagram: string | undefined;
    github: string | undefined;
  } | undefined;
}
function TopNav({ logo, scrolledLogo, links }: ITopNav) {
  const scrolled = useRecoilValue(scrolledAtom)
  const scrolledColor = scrolled ? "#a5936e" : "white";

  return (
    <TopNavWrapper id="topnav" style={{
      backgroundColor: scrolled ? "white" : "transparent"
    }}>
      <Logo href="#header" className={scrolled ? "scrolled" : ""}>
        <img src={(scrolled ? scrolledLogo : logo) || ""} alt="Logo"></img>
      </Logo>
      <FlexSpacer></FlexSpacer>
      <MenuIcon color={scrolledColor} href="#about-me">About me</MenuIcon>
      <MenuIcon color={scrolledColor} href="#projects">Projects</MenuIcon>
      <MenuIcon color={scrolledColor} href="#careers">Career</MenuIcon>
      <MenuIcon color={scrolledColor} href="#contacts">Contact</MenuIcon>
      <GridSpacer unit="4"></GridSpacer>
      <HoverImage href={links?.kakaotalk || ""} img="/icon/kakao-talk.png" hoverImg="/icon/kakao-talk-hover.png"></HoverImage>
      <HoverImage href={links?.instagram || ""} img="/icon/instagram.png" hoverImg="/icon/instagram-hover.png"></HoverImage>
      <HoverImage href={links?.github || ""} img="/icon/github.png" hoverImg="/icon/github-hover.png"></HoverImage>
    </TopNavWrapper>
  )

}

export default TopNav;