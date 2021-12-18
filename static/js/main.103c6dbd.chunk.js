(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{56:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var i=t(1),o=t.n(i),r=t(15),a=t.n(r),c=t(4),d=t(3),l=t(19),s=t(14);function b(){return fetch("".concat("/portfolio","/data.json")).then((function(n){return n.json()}))}var p,j,h,u=Object(s.b)({key:"scrolled",default:!1}),x=t(0),m=d.c.div(p||(p=Object(c.a)(["\n"]))),g=d.c.div(j||(j=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  grid-column: 2 / 12;\n  width: 100%;\n  margin: 5% 0px;\n  max-width: 1280px;\n"]))),f=d.c.h2(h||(h=Object(c.a)(["\n  font-size: 41px;\n  margin-bottom: 20px;\n"])));var O,v,w,y,k=function(n){var e=n.id,t=n.title,i=n.children,o=n.style;return Object(x.jsx)(m,{className:"grid",id:e,style:o,children:Object(x.jsxs)(g,{children:[Object(x.jsx)(f,{children:t}),i]})})},C=d.c.div(O||(O=Object(c.a)(["\n  display: flex;\n  align-items: center;\n"]))),z=d.c.p(v||(v=Object(c.a)(["\n  flex: 1;\n  margin-right: 10%;\n"]))),q=d.c.div(w||(w=Object(c.a)(['\n  position: relative;\n  overflow: hidden;\n  width: 20%;\n  height: auto;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  &:before{\n    content: "";\n    display: block;\n    padding-top: 100%;\n  }\n']))),F=d.c.img(y||(y=Object(c.a)(["\n  position: absolute;\n  width: 100%;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));var S,L,P,I,M,T,D,H,Q,B,R,V=function(n){var e=n.aboutMe,t=n.profile;return Object(x.jsx)(k,{id:"about-me",title:"About me",style:{backgroundColor:"#fbf9f9"},children:Object(x.jsxs)(C,{children:[Object(x.jsx)(z,{children:e||""}),Object(x.jsx)(q,{children:Object(x.jsx)(F,{src:t||""})})]})})},A=d.c.div(S||(S=Object(c.a)(["\n  display: flex;\n  align-items: flex-start;\n"]))),J=d.c.div(L||(L=Object(c.a)(['\n  position: relative;\n  overflow: hidden;\n  width: 15%;\n  height: auto;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  &:before{\n    content: "";\n    display: block;\n    padding-top: 100%;\n  }\n']))),N=d.c.img(P||(P=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform:translate(-50%,-50%);\n  width: 100%;\n  height: auto;\n  background-color: white;\n"]))),U=d.c.div(I||(I=Object(c.a)(["\n  padding: 0px 20px;\n  flex: 1;\n"]))),X=d.c.h3(M||(M=Object(c.a)(["\n  color: #a5936e;\n  font-size: 24px;\n"]))),E=d.c.p(T||(T=Object(c.a)(["\nfont-weight: bold;"]))),W=d.c.div(D||(D=Object(c.a)([""]))),Y=d.c.h4(H||(H=Object(c.a)([""]))),G=d.c.p(Q||(Q=Object(c.a)([""]))),K=d.c.ul(B||(B=Object(c.a)([""]))),Z=d.c.li(R||(R=Object(c.a)(["\n  display: inline-block;\n  list-style: none;\n  padding: 5px;\n  margin: 5px;\n  border: #a5936e solid 1px;\n  border-radius: 10px;\n"])));var $,_,nn,en,tn=function(n){var e=n.careers;return Object(x.jsx)(k,{id:"careers",title:"Career",style:{backgroundColor:"#e2e5e6"},children:null===e||void 0===e?void 0:e.map((function(n,e){return Object(x.jsxs)(A,{children:[Object(x.jsx)(J,{children:Object(x.jsx)(N,{src:n.imgURL||""})}),Object(x.jsxs)(U,{children:[Object(x.jsx)(X,{children:n.title}),Object(x.jsx)(K,{children:n.tags.map((function(n,e){return Object(x.jsx)(Z,{children:n},e)}))}),Object(x.jsx)(E,{children:n.summary}),n.description.map((function(n,e){var t=n.title,i=n.body;return Object(x.jsxs)(W,{children:[Object(x.jsx)(Y,{children:t}),Object(x.jsx)(G,{children:i})]},e)}))]})]})}))})},on=d.c.ul($||($=Object(c.a)(["\n  display: flex;\n  align-items: flex-start;\n"]))),rn=d.c.li(_||(_=Object(c.a)(["\n"]))),an=d.c.span(nn||(nn=Object(c.a)(["\n  color: #a5936e;\n  font-size: 24px;\n"]))),cn=d.c.a(en||(en=Object(c.a)(["\nfont-weight: bold;"])));var dn,ln,sn,bn=function(n){var e=n.contacts;return Object(x.jsx)(k,{id:"contacts",title:"Contact",children:Object(x.jsx)(on,{children:null===e||void 0===e?void 0:e.map((function(n,e){return Object(x.jsxs)(rn,{children:[Object(x.jsx)(an,{children:n.title}),Object(x.jsx)(cn,{href:n.href,children:n.text})]},"contact-".concat(e))}))})})},pn=d.c.header(dn||(dn=Object(c.a)(['\n  position: relative;\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n']))),jn=d.c.video(ln||(ln=Object(c.a)(["\n  width: 100%;\n  height: auto;\n"]))),hn=d.c.span(sn||(sn=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 4.2rem;\n  color: white;\n  white-space: nowrap;\n  @media screen and (min-width:480px) and (max-width:767px) {\n    font-size: 2.7rem;\n  }\n  @media screen and (max-width: 479px) {\n    font-size: 1.6rem;\n  }\n"])));var un,xn,mn,gn,fn,On,vn,wn,yn=function(n){var e=n.backgroundVideo,t=n.intro;return Object(x.jsxs)(pn,{id:"header",children:[Object(x.jsx)(jn,{loop:!0,muted:!0,autoPlay:!0,src:e||""}),Object(x.jsxs)(hn,{children:[(null===t||void 0===t?void 0:t.start)||"",Object(x.jsx)("br",{}),(null===t||void 0===t?void 0:t.end)||""]})]})},kn=d.c.div(un||(un=Object(c.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\nalign-items: center;\njustify-items: center;\ngrid-gap: 10px;\nmargin: 30px 0px;\n"]))),Cn=d.c.img(xn||(xn=Object(c.a)(["\nbackground-color: bisque;\nwidth: 100%;\nheight: 100%;\nborder-radius: 10px;\norder: ",";\nbox-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n"])),(function(n){return n.order})),zn=d.c.div(mn||(mn=Object(c.a)(["\n  padding: 10px;\n"]))),qn=d.c.h3(gn||(gn=Object(c.a)(["\n  color: #a5936e;\n  font-size: 24px;\n"]))),Fn=d.c.p(fn||(fn=Object(c.a)(["\nfont-weight: bold;"]))),Sn=d.c.p(On||(On=Object(c.a)([""]))),Ln=d.c.ul(vn||(vn=Object(c.a)([""]))),Pn=d.c.li(wn||(wn=Object(c.a)(["\n  display: inline-block;\n  list-style: none;\n  padding: 5px;\n  margin: 5px;\n  border: #a5936e solid 1px;\n  border-radius: 10px;\n"])));var In,Mn,Tn,Dn,Hn,Qn,Bn=function(n){var e=n.projects;return Object(x.jsx)(k,{id:"projects",title:"Project",children:null===e||void 0===e?void 0:e.map((function(n,e){return Object(x.jsxs)(kn,{children:[Object(x.jsx)(Cn,{order:(e||0)%2===0?1:0,src:n.imgURL||""}),Object(x.jsxs)(zn,{children:[Object(x.jsx)(qn,{children:n.title||""}),Object(x.jsx)(Fn,{children:n.summary||""}),Object(x.jsx)(Sn,{children:n.description||""}),Object(x.jsx)(Ln,{children:n.tags.map((function(n,e){return Object(x.jsx)(Pn,{children:n||""},"project-tag-".concat(e||""))}))})]})]})}))})},Rn=d.c.div(In||(In=Object(c.a)(["\n  position: fixed;\n  top: 0%;\n  transition: all 0.3s;\n  font-size : 1.6rem;\n  z-index: 1;\n  * {\n    grid-column-end: span 1;\n    max-width: 96px;\n  }\n  a {\n    cursor: pointer;\n  }\n\n\n  display: grid;\n  width: 100%;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(5rem, auto);\n  grid-gap: 10px;\n  align-items: center;\n  justify-items: center;\n  @media screen and (min-width:480px) and (max-width:767px) {\n    display: flex;\n    font-size : 1.4rem;\n    grid-gap: unset;\n  }\n  @media screen and (max-width: 479px) {\n    display: flex;\n    font-size : 1rem;\n    grid-gap: unset;\n  }\n"]))),Vn=d.c.a(Mn||(Mn=Object(c.a)(["\n  img{\n    width: 100%;\n    height: auto;\n  }\n  @media screen and (min-width:480px) and (max-width:767px) {\n    width: 50px;\n  }\n  @media screen and (max-width: 479px) {\n    width: 50px;\n  }\n"]))),An=d.c.a(Tn||(Tn=Object(c.a)(["\n  width: 100%;\n  position: relative;\n  text-align: center;\n  color: ",';\n  font-weight: bold;\n  text-decoration: none;\n  &:after{\n    content: "";\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-out;\n    background-color: ',";\n  }\n  &:hover:after{\n    transform: scaleX(1);\n    transform-origin: bottom left;\n  }\n  @media screen and (min-width:480px) and (max-width:767px) {\n    width: auto;\n    padding: 10px;\n  }\n  @media screen and (max-width: 479px) {\n    width: auto;\n    padding: 10px;\n  }\n"])),(function(n){return n.color}),(function(n){return n.color})),Jn=d.c.div(Dn||(Dn=Object(c.a)(["\n  display:none;\n  @media screen and (min-width:480px) and (max-width:767px) {\n    display:block;\n    flex: 1;\n    max-width: none;\n  }\n  @media screen and (max-width: 479px) {\n    display:block;\n    flex: 1;\n    max-width: none;\n  }\n"]))),Nn=d.c.div(Hn||(Hn=Object(c.a)(["\n  grid-column-end: span ",";\n  @media screen and (min-width:480px) and (max-width:767px) {\n    display:none;\n  }\n  @media screen and (max-width: 479px) {\n    display:none;\n  }\n"])),(function(n){return n.unit})),Un=d.c.a(Qn||(Qn=Object(c.a)(["\n  width: 100%;\n  height: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  transition: all 0.5s;\n  background-image:url(",");\n  &:hover{\n  background-image:url(",");\n  }\n  @media screen and (min-width:480px) and (max-width:767px) {\n    display:none;\n  }\n  @media screen and (max-width: 479px) {\n    display:none;\n  }\n"])),(function(n){return n.img}),(function(n){return n.hoverImg}));var Xn=function(n){var e=n.logo,t=n.scrolledLogo,i=n.links,o=Object(s.c)(u),r=o?"#a5936e":"white";return Object(x.jsxs)(Rn,{id:"topnav",style:{backgroundColor:o?"white":"transparent"},children:[Object(x.jsx)(Vn,{href:"#header",className:o?"scrolled":"",children:Object(x.jsx)("img",{src:(o?t:e)||"",alt:"Logo"})}),Object(x.jsx)(Jn,{}),Object(x.jsx)(An,{color:r,href:"#about-me",children:"About me"}),Object(x.jsx)(An,{color:r,href:"#projects",children:"Projects"}),Object(x.jsx)(An,{color:r,href:"#careers",children:"Career"}),Object(x.jsx)(An,{color:r,href:"#contacts",children:"Contact"}),Object(x.jsx)(Nn,{unit:"4"}),Object(x.jsx)(Un,{href:(null===i||void 0===i?void 0:i.kakaotalk)||"",img:"/icon/kakao-talk.png",hoverImg:"/icon/kakao-talk-hover.png"}),Object(x.jsx)(Un,{href:(null===i||void 0===i?void 0:i.instagram)||"",img:"/icon/instagram.png",hoverImg:"/icon/instagram-hover.png"}),Object(x.jsx)(Un,{href:(null===i||void 0===i?void 0:i.github)||"",img:"/icon/github.png",hoverImg:"/icon/github-hover.png"})]})};var En,Wn=function(){var n=Object(l.useQuery)("portfolioData",b),e=n.isLoading,t=n.data,i=Object(s.d)(u),o=function(){var n,e,t=(null===(n=document.querySelector("#header"))||void 0===n?void 0:n.clientHeight)||0,o=(null===(e=document.querySelector("#topnav"))||void 0===e?void 0:e.clientHeight)||0,r=window.scrollY;i(r>=t-o)};return document.onscroll=o,document.onresize=o,Object(x.jsx)(x.Fragment,{children:e?null:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Xn,{logo:null===t||void 0===t?void 0:t.logoWhite,scrolledLogo:null===t||void 0===t?void 0:t.logo,links:null===t||void 0===t?void 0:t.links}),Object(x.jsx)(yn,{backgroundVideo:null===t||void 0===t?void 0:t.backgroundVideo,intro:null===t||void 0===t?void 0:t.intro}),Object(x.jsx)(V,{aboutMe:null===t||void 0===t?void 0:t.aboutMe,profile:null===t||void 0===t?void 0:t.profile}),Object(x.jsx)(Bn,{projects:null===t||void 0===t?void 0:t.projects}),Object(x.jsx)(tn,{careers:null===t||void 0===t?void 0:t.careers}),Object(x.jsx)(bn,{contacts:null===t||void 0===t?void 0:t.contacts})]})})},Yn=t(37),Gn={bgColor:"white",borderColor:"#C4C9D4",primaryTextColor:"#363C49",secondaryTextColor:"#58627D",errorColor:"#B42818",accentColor:"#FF9500",boxBgColor:"#FFFFFF",boxTextColor:"#555c6e"},Kn=Object(d.b)(En||(En=Object(c.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nfont-family: 'Source Sans Pro', sans-serif;\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n      display: none;\n  }\n  body {\n    line-height: 1;\n  }\n  menu, ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color: ",";\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  html {\n    font-size: 62.5%;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.primaryTextColor}));var Zn=function(){return Object(x.jsxs)(d.a,{theme:Gn,children:[Object(x.jsx)(Kn,{}),Object(x.jsx)(Wn,{}),Object(x.jsx)(Yn.ReactQueryDevtools,{initialIsOpen:!0})]})},$n=(t(56),new l.QueryClient);a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(l.QueryClientProvider,{client:$n,children:Object(x.jsx)(Zn,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.103c6dbd.chunk.js.map