import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { fetchPortfolioData } from "../api/api";
import { scrolledAtom } from "../atoms";
import AboutMe from "../components/AboutMe";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Project from "../components/Project";
import TopNav from "../components/TopNav";
import { IPortFolioData } from "../Interface/interface";


function Portfolio() {
  const { isLoading, data } = useQuery<IPortFolioData>("portfolioData", fetchPortfolioData);
  const setScrolled = useSetRecoilState(scrolledAtom);
  const ScrolledHandler = () => {
    const headerHeight = document.querySelector("#header")?.clientHeight || 0;
    const topnavHeight = document.querySelector("#topnav")?.clientHeight || 0;
    const windowY = window.scrollY;
    if (windowY >= headerHeight - topnavHeight) setScrolled(true);
    else setScrolled(false);
  };
  document.onscroll = ScrolledHandler;
  document.onresize = ScrolledHandler;
  return (
    <>
      {isLoading ?
        null :
        <>
          <TopNav logo={data?.logoWhite} scrolledLogo={data?.logo} links={data?.links}></TopNav>
          <Header backgroundVideo={data?.backgroundVideo} intro={data?.intro}></Header>
          <AboutMe aboutMe={data?.aboutMe} profile={data?.profile}></AboutMe>
          <Project projects={data?.projects}></Project>
          <Career careers={data?.careers}></Career>
          <Contact contacts={data?.contacts}></Contact>
        </>
      }
    </>
  )
}
export default Portfolio;
