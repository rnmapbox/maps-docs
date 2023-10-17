"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[4331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Terrain.tsx"},l=void 0,o={unversionedId:"components/Terrain",id:"components/Terrain",title:"Terrain",description:"Mapbox spec: terrain",source:"@site/docs/components/Terrain.md",sourceDirName:"components",slug:"/components/Terrain",permalink:"/docs/components/Terrain",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/Terrain.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/Terrain.tsx"},sidebar:"componentSidebar",previous:{title:"SymbolLayer",permalink:"/docs/components/SymbolLayer"},next:{title:"UserLocation",permalink:"/docs/components/UserLocation"}},p={},s=[{value:"props",id:"props",level:2},{value:"sourceID",id:"sourceid",level:3},{value:"exaggeration",id:"exaggeration",level:3},{value:"style",id:"style",level:3},{value:"styles",id:"styles",level:2},{value:"source",id:"source",level:3},{value:"Description",id:"description",level:4},{value:"Type",id:"type",level:4},{value:"exaggeration",id:"exaggeration-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Type",id:"type-1",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Minimum",id:"minimum",level:4},{value:"Maximum",id:"maximum",level:4},{value:"Requires",id:"requires",level:4},{value:"Expression",id:"expression",level:4},{value:"exaggerationTransition",id:"exaggerationtransition",level:3},{value:"Description",id:"description-2",level:4},{value:"Type",id:"type-2",level:4},{value:"Units",id:"units",level:4},{value:"Default Value",id:"default-value-1",level:4}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"  Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#terrain"},"terrain")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Terrain } from '@rnmapbox/maps';\n\nTerrain\n\n")),(0,a.kt)("h2",{id:"props"},"props"),(0,a.kt)("h3",{id:"sourceid"},"sourceID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"Name of a source of raster_dem type to be used for terrain elevation."),(0,a.kt)("h3",{id:"exaggeration"},"exaggeration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Value\n")),(0,a.kt)("p",null,"Deprecated, use exaggeration in style instead"),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"TerrainLayerStyleProps\n")),(0,a.kt)("p",null,"Customizable style attributes"),(0,a.kt)("h2",{id:"styles"},"styles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#source"},"source"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#exaggeration"},"exaggeration"),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"source")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#source"},"source")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Name of a source of ",(0,a.kt)("inlineCode",{parentName:"p"},"raster_dem")," type to be used for terrain elevation."),(0,a.kt)("h4",{id:"type"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"exaggeration-1"},"exaggeration"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"exaggeration")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#exaggeration"},"exaggeration")),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"Exaggerates the elevation of the terrain by multiplying the data from the DEM with this value."),(0,a.kt)("h4",{id:"type-1"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"default-value"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"minimum"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("h4",{id:"maximum"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1000")),(0,a.kt)("h4",{id:"requires"},"Requires"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"source")),(0,a.kt)("h4",{id:"expression"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"exaggerationtransition"},"exaggerationTransition"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"exaggerationTransition")),(0,a.kt)("h4",{id:"description-2"},"Description"),(0,a.kt)("p",null,"The transition affecting any changes to this layer\u2019s exaggeration property."),(0,a.kt)("h4",{id:"type-2"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,a.kt)("h4",{id:"units"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,a.kt)("h4",{id:"default-value-1"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")))}m.isMDXComponent=!0}}]);