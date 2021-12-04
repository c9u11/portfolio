import "./App.css";
import Content from "./components/Content";
import Project from "./components/Project";
import Career from "./components/Career";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(async () => {
    await (await fetch("data.json")).json().then((json) => {
      setData(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div>
          {/* header */}
          <header className="header">
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
              {data.intro.end}
            </span>
          </header>
          {/* topnav */}
          <div className="topnav grid">
            <a href="#header">
              <img src={data.logo} className="logo col-1"></img>
            </a>
            <a href="#about-me">About me</a>
            <a href="#projects">Projects</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
            <div className="col-3"></div>
            <a href={data.links.kakaotalk}>KakaoTalk</a>
            <a href={data.links.instagram}>Instagram</a>
            <a href={data.links.github}>Github</a>
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
