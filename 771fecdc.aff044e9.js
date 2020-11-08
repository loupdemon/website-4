(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),r=(n(0),n(155)),l={slug:"gridjs-v3",title:"Grid.js v3",author:"Afshin Mehrabani",author_title:"Maintainer of Grid.js",author_url:"https://github.com/afshinm",author_image_url:"https://avatars0.githubusercontent.com/u/314326?s=460&u=6e7cccefcba3691e96b4ee539c0f2288ff127fce&v=4",tags:["announcements"]},o={permalink:"/blog/gridjs-v3",editUrl:"https://github.com/grid-js/website/edit/master/blog/blog/gridjs-v3.md",source:"@site/blog/gridjs-v3.md",description:"Today, we have released the third major version of Grid.js. v3-beta1 is now available on NPM and CDNs.",date:"2020-11-08T11:09:00.677Z",tags:[{label:"announcements",permalink:"/blog/tags/announcements"}],title:"Grid.js v3",readingTime:1.255,truncated:!1,nextItem:{title:"Hello, World!",permalink:"/blog/hello-world"}},s=[{value:"Selection plugin",id:"selection-plugin",children:[]},{value:"Lerna",id:"lerna",children:[]},{value:"Table width algorithm",id:"table-width-algorithm",children:[]}],d={rightToc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Today, we have released the third major version of Grid.js. v3-beta1 is now available on NPM and CDNs."),Object(r.b)("h2",{id:"selection-plugin"},"Selection plugin"),Object(r.b)("p",null,"Grid.js supports ",Object(r.b)("em",{parentName:"p"},"row selection")," now. A dedicated plugin for Grid.js is available now: ",Object(r.b)("inlineCode",{parentName:"p"},"gridjs-selection"),".\nThis plugin is available on NPM and various CDNs."),Object(r.b)("p",null,"Read more about the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/examples/selection"}),"selection plugin here"),"."),Object(r.b)("p",null,"This is the first version of this plugin and more features such as cell selection, radio buttons, etc. will be added soon.\nIn order to integrate this plugin, I have changed the internal structure of the Plugin class and PluginRenderer."),Object(r.b)("h2",{id:"lerna"},"Lerna"),Object(r.b)("p",null,"Grid.js now uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://lerna.js.org/"}),"Lerna")," to manage the internal and external packages. This enhancement has enabled us\nto extend Grid.js easier and to release the core and plugin packages using a unified release pipeline."),Object(r.b)("center",null,Object(r.b)("img",{alt:"Lerna",src:"https://lerna.js.org/images/lerna-hero.svg",width:"300px"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"gridjs-selection")," is the first external package and more will be added soon (e.g. cell editing, data export)."),Object(r.b)("h2",{id:"table-width-algorithm"},"Table width algorithm"),Object(r.b)("p",null,"I have also improved the table width calculator function. Previously, the ",Object(r.b)("inlineCode",{parentName:"p"},"autoWidth")," function had to render the entire table\n",Object(r.b)("strong",{parentName:"p"},"again")," using a Shadow DOM in order to calculate the widths. "),Object(r.b)("p",null,"With this change, the function takes a snapshot of the rendered table and resets the CSS attributes to guess\nthe minimum width required to render each cell. This should improve the overall render time especially when ",Object(r.b)("inlineCode",{parentName:"p"},"columns")," is large."),Object(r.b)("p",null,"And many other minor changes. Please read the changelog before upgrading to v3 since a few backward incompatible changes\nhave been introduced in this release."),Object(r.b)("p",null,"Thank you folks!"))}c.isMDXComponent=!0}}]);