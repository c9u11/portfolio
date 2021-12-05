import "./App.css";
import Content from "./components/Content";
import Project from "./components/Project";
import Career from "./components/Career";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState({});
  const handleResize = (event) => console.log(event);
  const handleScroll = () => {
    const headerHeight = document.getElementById("header").clientHeight;
    const topnavHeight = document.getElementById("topnav").clientHeight;
    const windowY = window.scrollY;
    if (windowY >= headerHeight - topnavHeight) setScrolled(true);
    else setScrolled(false);
  };
  useEffect(async () => {
    await (await fetch("data.json")).json().then((json) => {
      setData(json);
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
      setLoading(false);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div>
          {/* header */}
          <header className="header" id="header">
            <video
              className="background"
              src={data.backgroundVideo}
              autoPlay
              muted
              loop
            ></video>
            <span className="intro">
              {data.intro.start}
              <span className="intro-highlight"></span>
              <br />
              {data.intro.end}
            </span>
          </header>
          {/* topnav */}
          <div
            id="topnav"
            className={`topnav grid ${scrolled ? "scrolled" : ""}`}
          >
            <a className="home logo" href="#header">
              <img
                src={scrolled ? data.logo : data.logoWhite}
                className="logo col-1"
              ></img>
            </a>
            <a className="text-link" href="#about-me">
              About me
            </a>
            <a className="text-link" href="#projects">
              Projects
            </a>
            <a className="text-link" href="#careers">
              Career
            </a>
            <a className="text-link" href="#contact">
              Contact
            </a>
            <div className="col-3"></div>
            <a
              className="icon-link Kakaotalk-icon"
              href={data.links.kakaotalk}
            ></a>
            <a
              className="icon-link Instagram-icon"
              href={data.links.instagram}
            ></a>
            <a className="icon-link Github-icon" href={data.links.github}></a>
            <div></div>
          </div>
          {/* About me */}
          <Content id="about-me" title="About me">
            <p>{data.aboutMe}</p>
            <img src={data.profile} width="100px"></img>
          </Content>
          {/* Projects */}
          <Content id="projects" title="Projects">
            {data.projects.map((json, index) => {
              return (
                <Project
                  key={`project-${index}`}
                  imgURL={json.imgURL}
                  title={json.title}
                  summary={json.summary}
                  description={json.description}
                  tags={json.tags}
                ></Project>
              );
            })}
          </Content>
          {/* Careers */}
          <Content id="careers" title="Careers">
            {data.careers.map((json, index) => {
              return (
                <Career
                  key={`career-${index}`}
                  title={json.title}
                  tags={json.tags}
                  summary={json.summary}
                  description={json.description}
                ></Career>
              );
            })}
          </Content>
          {/* Contact */}
          <Content id="contact" title="Contact">
            <ul className="contact-list">
              {data.contact.map((json, index) => {
                return (
                  <li key={`contact-${index}`}>
                    <span className="contact-list-title">{json.title}</span>
                    <a className="contact-list-body" href={json.href}>
                      {json.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Content>
        </div>
      )}
    </div>
  );
}

export default App;
