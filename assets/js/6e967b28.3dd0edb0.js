"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[3015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Annotation.tsx"},l=void 0,i={unversionedId:"components/Annotation",id:"components/Annotation",title:"Annotation",description:"props",source:"@site/docs/components/Annotation.md",sourceDirName:"components",slug:"/components/Annotation",permalink:"/docs/components/Annotation",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/Annotation.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Annotation.tsx"},sidebar:"componentSidebar",next:{title:"Atmosphere",permalink:"/docs/components/Atmosphere"}},p={},s=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"animated",id:"animated",level:3},{value:"animationDuration",id:"animationduration",level:3},{value:"animationEasingFunction",id:"animationeasingfunction",level:3},{value:"coordinates",id:"coordinates",level:3},{value:"onPress",id:"onpress",level:3},{value:"children",id:"children",level:3},{value:"style",id:"style",level:3},{value:"icon",id:"icon",level:3},{value:"methods",id:"methods",level:2},{value:"onPress(event)",id:"onpressevent",level:3},{value:"arguments",id:"arguments",level:4},{value:"symbolStyle()",id:"symbolstyle",level:3},{value:"arguments",id:"arguments-1",level:4}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Annotation } from '@rnmapbox/maps';\n\nAnnotation\n\n")),(0,r.kt)("h2",{id:"props"},"props"),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required"),"\nFIX ME NO DESCRIPTION"),(0,r.kt)("h3",{id:"animated"},"animated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,r.kt)("p",null,"FIX ME NO DESCRIPTION"),(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"defaults to:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h3",{id:"animationduration"},"animationDuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,r.kt)("p",null,"FIX ME NO DESCRIPTION"),(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"defaults to:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")),(0,r.kt)("h3",{id:"animationeasingfunction"},"animationEasingFunction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"func\n")),(0,r.kt)("p",null,"FIX ME NO DESCRIPTION\n",(0,r.kt)("em",{parentName:"p"},"signature:"),(0,r.kt)("inlineCode",{parentName:"p"},"(x:number) =&gt; number")),(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"defaults to:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Easing.linear")),(0,r.kt)("h3",{id:"coordinates"},"coordinates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Array\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required"),"\nFIX ME NO DESCRIPTION"),(0,r.kt)("h3",{id:"onpress"},"onPress"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"func\n")),(0,r.kt)("p",null,"FIX ME NO DESCRIPTION\n",(0,r.kt)("em",{parentName:"p"},"signature:"),(0,r.kt)("inlineCode",{parentName:"p"},"(event:OnPressEvent) =&gt; void")),(0,r.kt)("h3",{id:"children"},"children"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"ReactElement | ReactElement[]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required"),"\nFIX ME NO DESCRIPTION"),(0,r.kt)("h3",{id:"style"},"style"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"object\n")),(0,r.kt)("p",null,"FIX ME NO DESCRIPTION"),(0,r.kt)("h3",{id:"icon"},"icon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"string | number | object\n")),(0,r.kt)("p",null,"FIX ME NO DESCRIPTION"),(0,r.kt)("h2",{id:"methods"},"methods"),(0,r.kt)("h3",{id:"onpressevent"},"onPress(event)"),(0,r.kt)("h4",{id:"arguments"},"arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"OnPressEvent")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"undefined")))),(0,r.kt)("h3",{id:"symbolstyle"},"symbolStyle()"),(0,r.kt)("h4",{id:"arguments-1"},"arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description")))))}u.isMDXComponent=!0}}]);