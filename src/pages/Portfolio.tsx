import { useQuery } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
  const scrolled = useRecoilValue(scrolledAtom)
  const setScrolled = useSetRecoilState(scrolledAtom);
  return (
    <>
      {isLoading ?
        null :
        <>
          <TopNav scrolled={scrolled} logo={false ? data?.logo : data?.logoWhite} links={data?.links}></TopNav>
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
