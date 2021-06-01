(self.webpackChunkmantine_docs=self.webpackChunkmantine_docs||[]).push([[809],{5881:function(e){"use strict";e.exports=JSON.parse('{"mantine-hooks":{"size":8.92,"gzip":3.49},"mantine-core":{"size":178.1,"gzip":44.37},"mantine-notifications":{"size":28.58,"gzip":9.3},"mantine-tag-picker":{"size":17.53,"gzip":5.13}}')},9795:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return M},default:function(){return L}});var a=n(9756),r=n(7378),i=n(4983),o=n(5444),s=n(8783),c=n(1995),l=n(2968),m=n(1827),p=n(127),d=n(3796),u=n(430),g=n(2536),h=n(3055),f=[{icon:h.EGi,color:"teal",title:"Customizable",description:"Colors, fonts, shadows and many other parts are customizable to fit your design needs"},{icon:h.aoh,color:"violet",title:"Dark theme",description:"Mantine supports dark theme by default in all components"},{icon:h.TkB,color:"orange",title:"Accessibility and usability",description:"All components follow accessibility best practices and feature full keyboard support"},{icon:h.dNJ,color:"blue",title:"TypeScript",description:"All @mantine/ scoped packages are built with TypeScript and support it by default"},{icon:h.WCv,color:"pink",title:"Ready for production",description:"Mantine is well tested and works in all modern browsers"},{icon:h.YGl,color:"yellow",title:"Developer experience",description:"Mantine comes with more than 50 components and 15 hooks to cover you in most cases"},{icon:h.Ui3,color:"cyan",title:"No annoying focus ring",description:"With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard"},{icon:h.$2U,color:"lime",title:"React JSS",description:"Take advantage of all react-jss features: automatic critical css extraction during ssr, lazy evaluation, dynamic theming and others"}],y=n(3887),x=n(2984),k=(0,y.QM)((function(e){var t;return{wrapper:(t={display:"flex",flexWrap:"wrap",margin:e.spacing.md/-2,marginBottom:e.spacing.xl},t["@media (max-width: 900px)"]={flexDirection:"column"},t),item:{border:"1px solid "+("dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,margin:e.spacing.md/2,flex:"0 0 calc(50% - "+e.spacing.md+"px)"},title:{marginLeft:e.spacing.md},header:{display:"flex",alignItems:"center",marginBottom:e.spacing.xs},description:{color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7],lineHeight:1.5}}}),{theming:x.MX});function b(){var e=(0,p.r)(),t=k(),n=f.map((function(n){return r.createElement(d.X,{className:t.item,padding:"md",key:n.title},r.createElement("div",{className:t.header},r.createElement(u.k,{size:"xl",color:n.color,variant:"dark"===e.colorScheme?"filled":"light"},r.createElement(n.icon,{style:{width:24,height:24}})),r.createElement(g.x,{className:t.title,size:"xl",weight:500},n.title)),r.createElement(g.x,{className:t.description},n.description))}));return r.createElement("div",{className:t.wrapper},n)}var w=n(3892),v=n(5881),E=n(9460),j=n(1944),N=[{package:"@mantine/core",description:"Components library",link:"/core/getting-started/"},{package:"@mantine/hooks",description:"Hooks collection for state and UI management",link:"/hooks/getting-started/"},{package:"@mantine/notifications",description:"Notifications system",link:"/others/notifications/"},{package:"@mantine/tag-picker",description:"Notion like tag picker component",link:"/others/tag-picker/"}];function O(){var e=N.map((function(e){var t=e.package.replace("@mantine/","mantine-");return r.createElement("tr",{key:e.package},r.createElement("td",null,r.createElement(E.Z,{to:e.link},e.package)),r.createElement("td",null,e.description),r.createElement("td",null,v[t].gzip.toFixed(2)," kB"),r.createElement("td",null,r.createElement(c.Z,null,r.createElement(l.z,{component:"a",href:"https://github.com/mantinedev/mantine/tree/master/src/"+t,color:"gray",variant:"outline",size:"sm",leftIcon:r.createElement(h.wGg,{style:{width:12,height:12}})},"Source code"),r.createElement(l.z,{component:"a",href:"https://www.npmjs.com/package/"+e.package,color:"gray",variant:"outline",size:"sm",leftIcon:r.createElement(j._,{style:{width:12,height:12}})},"npm"))))}));return r.createElement("div",{style:{overflowX:"auto",overflowY:"hidden",marginBottom:30}},r.createElement(w.i,{highlightOnHover:!0,style:{minWidth:760,tableLayout:"fixed"}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{style:{width:150}},"Package"),r.createElement("th",{style:{width:250}},"Description"),r.createElement("th",null,"Gzipped size"),r.createElement("th",{style:{width:220}},"Links"))),r.createElement("tbody",null,e)))}var z,T=n(8426),M={title:"Getting started",slug:"/"},S=(z="GatsbyLink",function(e){return console.warn("Component "+z+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),P={_frontmatter:M};function L(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.mdx)("wrapper",Object.assign({},P,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(T.Z,{title:"Mantine",disableTitleTemplate:!0,mdxType:"Head"}),(0,i.mdx)("br",null),(0,i.mdx)("br",null),(0,i.mdx)(s.W,{size:"sm",mdxType:"Container"},(0,i.mdx)("h1",{id:"mantine"},"Mantine"),(0,i.mdx)("p",null,"Mantine is a MIT licensed open source react components and hooks library\nwith focus on usability, accessibility and developer experience."),(0,i.mdx)(c.Z,{mdxType:"Group"},(0,i.mdx)(l.z,{component:o.Link,to:"/core/getting-started/",mdxType:"Button"},"Browse components"),(0,i.mdx)(l.z,{component:o.Link,to:"/hooks/getting-started/",variant:"outline",color:"gray",mdxType:"Button"},"Browse hooks")),(0,i.mdx)("h2",{id:"features"},"Features"),(0,i.mdx)(b,{mdxType:"Features"}),(0,i.mdx)("h2",{id:"mantine-packages"},"Mantine packages"),(0,i.mdx)(O,{mdxType:"PackagesTable"}),(0,i.mdx)("h2",{id:"getting-started"},"Getting started"),(0,i.mdx)("p",null,"Mantine works out of the box with ",(0,i.mdx)("a",{parentName:"p",href:"https://create-react-app.dev/"},"create-react-app")," (including ",(0,i.mdx)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-typescript/"},"TypeScript version"),"),\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/preactjs/preact-cli"},"Preact cli")," (with compat), ",(0,i.mdx)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", ",(0,i.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/"},"Gatsby")," and any other environment."),(0,i.mdx)("p",null,"Install mantine dependencies with yarn:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add react-jss @mantine/hooks @mantine/core\n")),(0,i.mdx)("p",null,"or npm"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install react-jss @mantine/hooks @mantine/core\n")),(0,i.mdx)("p",null,"And you are ready:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Button } from '@mantine/core';\n\nfunction App() {\n  return <Button>My mantine button</Button>;\n}\n")),(0,i.mdx)("p",null,"To enable server side rendering in your application see ",(0,i.mdx)(S,{to:"/guides/ssr/",mdxType:"GatsbyLink"},"ssr guide"),",\nit includes tutorials for Gatsby, Next.js and your own server."),(0,i.mdx)("h2",{id:"versioning"},"Versioning"),(0,i.mdx)("p",null,"All mantine packages are released at the same time with exact same version.\nAfter installation you can fix @mantine/scoped packages version in your package.json\nto prevent versions mismatch in future:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  // Fix version by using "1.0.1", not default "^1.0.1"\n  "dependencies": {\n    "@mantine/core": "1.0.1",\n    "@mantine/hooks": "1.0.1"\n  }\n}\n')),(0,i.mdx)(m.$,{mdxType:"Footer"})))}L.isMDXComponent=!0},1827:function(e,t,n){"use strict";n.d(t,{$:function(){return g}});var a=n(7378),r=n(5444),i=n(2536),o=n(3055),s=n(6156),c=n(3887),l=n(9031),m=n(2984);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,c.QM)((function(e){return{wrapper:{marginTop:2*e.spacing.xl,paddingTop:e.spacing.md,borderTop:"1px dashed "+("dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[3])},links:{marginTop:e.spacing.xs,display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:-e.spacing.xs,marginRight:-e.spacing.xs},link:d(d({},(0,l.S)(e)),{},{display:"flex",alignItems:"center",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],fontSize:e.fontSizes.sm,margin:e.spacing.xs,"&:hover":{color:e.colors[e.primaryColor]["dark"===e.colorScheme?4:6]}}),linkLabel:{marginLeft:e.spacing.xs}}}),{theming:m.MX});function g(){var e=u();return a.createElement("footer",{className:e.wrapper},a.createElement(i.x,{size:"sm",align:"center",color:"gray"},"Mantine respects your privacy. This website has no trackers, analytics or ads."),a.createElement(i.x,{size:"sm",align:"center",color:"gray"},"This project is open source and relies on contributors, please consider"," ",a.createElement(i.x,{component:r.Link,size:"sm",variant:"link",to:"/pages/contribute"},"contributing"),"."),a.createElement("div",{className:e.links},a.createElement("a",{href:"https://github.com/mantinedev/mantine",className:e.link},a.createElement(o.r7p,null),a.createElement("span",{className:e.linkLabel},"Star project on Github")),a.createElement("a",{href:"https://github.com/mantinedev/mantine/discussions",className:e.link},a.createElement(o.mTE,null),a.createElement("span",{className:e.linkLabel},"Ask a question")),a.createElement("a",{href:"https://github.com/mantinedev/mantine/issues/new",className:e.link},a.createElement(o.LPM,null),a.createElement("span",{className:e.linkLabel},"Report an issue")),a.createElement("a",{href:"https://twitter.com/mantinedev",className:e.link},a.createElement(o.S3E,null),a.createElement("span",{className:e.linkLabel},"Follow Mantine on Twitter")),a.createElement("a",{href:"https://buttondown.email/mantine",className:e.link},a.createElement(o._MN,null),a.createElement("span",{className:e.linkLabel},"Subscribe to monthly updates newsletter"))))}},1944:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var a=n(6156),r=n(7378);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return r.createElement("svg",Object.assign({},e,{preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",style:o({width:14,height:14},e.style)}),r.createElement("path",{d:"M0 256V0h256v256z",fill:"#C12127"}),r.createElement("path",{d:"M48 48h160v160h-32V80h-48v128H48z",fill:"#FFF"}))}}}]);
//# sourceMappingURL=component---src-pages-index-mdx-1eff012c28c7f2ca032e.js.map