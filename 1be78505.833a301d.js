(window.webpackJsonp=window.webpackJsonp||[]).push([[14,66],{164:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),c=a(168),r=a(170),i=a(47),o=a(183),s=a(2),m=a(173),u=a(197),b=a(250),d=a(251),h=a(252),f=a(249),E=a(172),p=a(184),k=a(114),g=a.n(k);const v=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some(e=>v(e,t));function O({item:e,onItemClick:t,collapsible:a,activePath:c,...r}){const{items:i,label:o}=e,u=v(e,c),b=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)(()=>{t.current=e},[e]),t.current}(u),[d,h]=Object(n.useState)(()=>!!a&&(!u&&e.collapsed));Object(n.useEffect)(()=>{u&&!b&&d&&h(!1)},[u,b,d]);const f=Object(n.useCallback)(e=>{e.preventDefault(),h(e=>!e)},[h]);return 0===i.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:o},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&u,[g.a.menuLinkText]:!a}),onClick:a?f:void 0,href:a?"#!":void 0},r),o),l.a.createElement("ul",{className:"menu__list"},i.map(e=>l.a.createElement(C,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:c}))))}function j({item:e,onItemClick:t,activePath:a,collapsible:n,...c}){const{href:r,label:i}=e,o=v(e,a);return l.a.createElement("li",{className:"menu__list-item",key:i},l.a.createElement(E.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:r},Object(p.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),i))}function C(e){switch(e.item.type){case"category":return l.a.createElement(O,e);case"link":default:return l.a.createElement(j,e)}}var N=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:c,hideOnScroll:i=!1}={}}}={},isClient:o}=Object(r.a)(),{logoLink:p,logoLinkProps:k,logoImageUrl:v,logoAlt:O}=Object(h.a)(),{isAnnouncementBarClosed:j}=Object(u.a)(),{scrollY:N}=Object(f.a)(),{docsSidebars:_,path:w,sidebar:y,sidebarCollapsible:M}=e;Object(b.a)(t);const I=Object(d.a)();if(Object(n.useEffect)(()=>{I===d.b.desktop&&a(!1)},[I]),!y)return null;const x=_[y];if(!x)throw new Error(`Cannot find the sidebar "${y}" in the sidebar config!`);return l.a.createElement("div",{className:Object(m.a)(g.a.sidebar,{[g.a.sidebarWithHideableNavbar]:i})},i&&l.a.createElement(E.a,Object(s.a)({tabIndex:"-1",className:g.a.sidebarLogo,to:p},k),null!=v&&l.a.createElement("img",{key:o,src:v,alt:O}),null!=c&&l.a.createElement("strong",null,c)),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",g.a.menu,{"menu--show":t,[g.a.menuWithAnnouncementBar]:!j&&0===N})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?l.a.createElement("span",{className:Object(m.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},x.map(e=>l.a.createElement(C,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),a(!1)},collapsible:M,activePath:w})))))},_=a(187),w=a(246),y=a(198),M=a(115),I=a.n(M);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,s=t.routes.find(e=>Object(y.a)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:b}=a,d=m[s.path],{siteConfig:{themeConfig:h={}}={},isClient:f}=Object(r.a)(),{sidebarCollapsible:E=!0}=h;return 0===Object.keys(s).length?l.a.createElement(w.default,e):l.a.createElement(o.a,{version:b,key:f},l.a.createElement("div",{className:I.a.docPage},d&&l.a.createElement("div",{className:I.a.docSidebarContainer,role:"complementary"},l.a.createElement(N,{docsSidebars:u,path:s.path,sidebar:d,sidebarCollapsible:E})),l.a.createElement("main",{className:I.a.docMainContainer},l.a.createElement(c.a,{components:_.a},Object(i.a)(t.routes)))))}},187:function(e,t,a){"use strict";var n=a(2),l=a(0),c=a.n(l),r=a(172),i=a(169),o=a(173),s=a(170),m=(a(93),a(94)),u=a.n(m);var b=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(s.a)();return t?c.a.createElement(e,a,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(o.a)("anchor",{[u.a.enhancedAnchor]:!n}),id:t}),a.children,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):c.a.createElement(e,a)},d=a(95),h=a.n(d);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?c.a.createElement(i.a,e):c.a.createElement("code",e):t},a:e=>/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(r.a,e),pre:e=>c.a.createElement("div",Object(n.a)({className:h.a.mdxCodeBlock},e)),h1:b("h1"),h2:b("h2"),h3:b("h3"),h4:b("h4"),h5:b("h5"),h6:b("h6")}},246:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(183);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);