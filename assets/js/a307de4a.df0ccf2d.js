"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[8914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(b,p(p({ref:t},c),{},{components:n})):o.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/StyleImport.tsx"},p=void 0,i={unversionedId:"components/StyleImport",id:"components/StyleImport",title:"StyleImport",description:"Use StyleImport to set configuration options on the new standard style. V11 only.",source:"@site/docs/components/StyleImport.md",sourceDirName:"components",slug:"/components/StyleImport",permalink:"/docs/components/StyleImport",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/StyleImport.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/StyleImport.tsx"},sidebar:"componentSidebar",previous:{title:"Style",permalink:"/docs/components/Style"},next:{title:"SymbolLayer",permalink:"/docs/components/SymbolLayer"}},s={},l=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"existing",id:"existing",level:3},{value:"config",id:"config",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { StyleImport } from '@rnmapbox/maps';\n\nStyleImport\n\n")),(0,r.kt)("p",null,"Use StyleImport to set configuration options on the new standard style. ",(0,r.kt)("strong",{parentName:"p"},"V11 only.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/mapbox-maps-ios/blob/main/Sources/MapboxMaps/Documentation.docc/Migrate%20to%20v11.md#21-the-mapbox-standard-style"},"https://github.com/mapbox/mapbox-maps-ios/blob/main/Sources/MapboxMaps/Documentation.docc/Migrate%20to%20v11.md#21-the-mapbox-standard-style")),(0,r.kt)("h2",{id:"props"},"props"),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required"),"\nid of the style import (eg. basemap)"),(0,r.kt)("h3",{id:"existing"},"existing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required"),"\nexisting is now always required as true"),(0,r.kt)("h3",{id:"config"},"config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Config = {\n  [object Object]: string; /* FIX ME NO DESCRIPTION */\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required"),"\nconfig is a dictionary of configuration options for the style import."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/mapbox-maps-ios/blob/main/Sources/MapboxMaps/Documentation.docc/Migrate%20to%20v11.md#21-the-mapbox-standard-style"},"https://github.com/mapbox/mapbox-maps-ios/blob/main/Sources/MapboxMaps/Documentation.docc/Migrate%20to%20v11.md#21-the-mapbox-standard-style")))}u.isMDXComponent=!0}}]);