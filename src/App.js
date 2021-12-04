import "./App.css";
import LOGO from "./img/logo.png";
import BACKGROUND_VIDEO from "./video/background.mp4";
import PROFILE_IMG from "./img/profile.jpeg";
import Content from "./components/Content";
import Project from "./components/Project";

function App() {
  return (
    <div>
      {/* header */}
      <header className="header">
        <video
          className="background"
          src={BACKGROUND_VIDEO}
          autoPlay
          muted
          loop
        ></video>
        <span className="intro">
          안녕하세요, 열정 가득한 <br /> 웹 프론트엔드 개발자 황석영입니다.
        </span>
      </header>
      {/* topnav */}
      <div className="topnav grid">
        <a href="#">
          <img src={LOGO} className="logo col-1"></img>
        </a>
        <a href="#">About me</a>
        <a href="#">Projects</a>
        <a href="#">Career</a>
        <a href="#">Contact</a>
        <div className="col-3"></div>
        <a href="#">KakaoTalk</a>
        <a href="#">Instagram</a>
        <a href="#">Github</a>
        <div></div>
      </div>
      {/* About me */}
      <Content id="about-me" title="About me">
        <p>
          저는 프로그래밍에 지속적인 관심을 갖고 성장하는 개발자입니다. 주로
          Javascript와 Golang을 사용하여 개발하고있습니다. 관심 분야는 기존
          시스템을 보완하고 더 많은 콘텐츠와 서비스를 웹 또는 앱을 통하여
          제공하는 것입니다. 최근에는 Javascript 프레임워크와 최신 라이브러리를
          사용하는 개발에 열정을 쏟고있습니다.
        </p>
        <img src={PROFILE_IMG} width="100px"></img>
      </Content>
      {/* Projects */}
      <Content id="projects" title="Projects">
        <Project
          imgURL=""
          title="VOD Editor"
          summary="summary"
          description="description"
          tags={["tag1", "tag2"]}
        ></Project>
      </Content>
      {/* Careers */}
      <Content id="Careers" title="Careers">
        <div className="career">
          <img className="career-img" width="100px"></img>
          <div className="career-info">
            <h3 className="career-title">(주)아틀라스네트웍스</h3>
            <ul className="career-tags">
              <li>2020.06 ~ 현재</li>
              <li>NS팀 / 대리</li>
            </ul>
            <p className="career-summary">XDN ...</p>
            <div className="career-description">
              <h4 className="career-description-title">서비스 ...</h4>
              <p className="career-description-body">입사 ~~</p>
            </div>
          </div>
        </div>
      </Content>
      {/* Contact */}
      <Content id="Contact" title="Contact">
        <ul className="contact-list">
          <li>
            <span className="contact-list-title">Call</span>
            <a className="contact-list-body">T.+82 (0)10 - 7182 - 0284</a>
          </li>
        </ul>
      </Content>
    </div>
  );
}

export default App;
