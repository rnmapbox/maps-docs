"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[5818],{3905:(e,l,t)=>{t.d(l,{Zo:()=>u,kt:()=>f});var i=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function n(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);l&&(i=i.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?n(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,i,a=function(e,l){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var l=i.useContext(p),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},u=function(e){var l=s(e.components);return i.createElement(p.Provider,{value:l},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var l=e.children;return i.createElement(i.Fragment,{},l)}},c=i.forwardRef((function(e,l){var t=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=a,f=d["".concat(p,".").concat(c)]||d[c]||k[c]||n;return t?i.createElement(f,r(r({ref:l},u),{},{components:t})):i.createElement(f,r({ref:l},u))}));function f(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var n=t.length,r=new Array(n);r[0]=c;var o={};for(var p in l)hasOwnProperty.call(l,p)&&(o[p]=l[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<n;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9792:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const n={custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/FillLayer.tsx"},r=void 0,o={unversionedId:"components/FillLayer",id:"components/FillLayer",title:"FillLayer",description:"Mapbox spec: fill",source:"@site/docs/components/FillLayer.md",sourceDirName:"components",slug:"/components/FillLayer",permalink:"/docs/components/FillLayer",draft:!1,editUrl:"https://github.com/rnmapbox/maps/blob/main/src/components/FillLayer.tsx",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/rnmapbox/maps/blob/main/src/components/FillLayer.tsx"},sidebar:"componentSidebar",previous:{title:"FillExtrusionLayer",permalink:"/docs/components/FillExtrusionLayer"},next:{title:"HeadingIndicator",permalink:"/docs/components/HeadingIndicator"}},p={},s=[{value:"props",id:"props",level:2},{value:"id",id:"id",level:3},{value:"existing",id:"existing",level:3},{value:"sourceID",id:"sourceid",level:3},{value:"sourceLayerID",id:"sourcelayerid",level:3},{value:"aboveLayerID",id:"abovelayerid",level:3},{value:"belowLayerID",id:"belowlayerid",level:3},{value:"layerIndex",id:"layerindex",level:3},{value:"filter",id:"filter",level:3},{value:"minZoomLevel",id:"minzoomlevel",level:3},{value:"maxZoomLevel",id:"maxzoomlevel",level:3},{value:"style",id:"style",level:3},{value:"styles",id:"styles",level:2},{value:"fillSortKey",id:"fillsortkey",level:3},{value:"Description",id:"description",level:4},{value:"Type",id:"type",level:4},{value:"Expression",id:"expression",level:4},{value:"visibility",id:"visibility",level:3},{value:"Description",id:"description-1",level:4},{value:"Type",id:"type-1",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Supported Values",id:"supported-values",level:4},{value:"fillAntialias",id:"fillantialias",level:3},{value:"Description",id:"description-2",level:4},{value:"Type",id:"type-2",level:4},{value:"Default Value",id:"default-value-1",level:4},{value:"Expression",id:"expression-1",level:4},{value:"fillOpacity",id:"fillopacity",level:3},{value:"Description",id:"description-3",level:4},{value:"Type",id:"type-3",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"Minimum",id:"minimum",level:4},{value:"Maximum",id:"maximum",level:4},{value:"Expression",id:"expression-2",level:4},{value:"fillOpacityTransition",id:"fillopacitytransition",level:3},{value:"Description",id:"description-4",level:4},{value:"Type",id:"type-4",level:4},{value:"Units",id:"units",level:4},{value:"Default Value",id:"default-value-3",level:4},{value:"fillColor",id:"fillcolor",level:3},{value:"Description",id:"description-5",level:4},{value:"Type",id:"type-5",level:4},{value:"Default Value",id:"default-value-4",level:4},{value:"Disabled By",id:"disabled-by",level:4},{value:"Expression",id:"expression-3",level:4},{value:"fillColorTransition",id:"fillcolortransition",level:3},{value:"Description",id:"description-6",level:4},{value:"Type",id:"type-6",level:4},{value:"Units",id:"units-1",level:4},{value:"Default Value",id:"default-value-5",level:4},{value:"fillOutlineColor",id:"filloutlinecolor",level:3},{value:"Description",id:"description-7",level:4},{value:"Type",id:"type-7",level:4},{value:"Disabled By",id:"disabled-by-1",level:4},{value:"Expression",id:"expression-4",level:4},{value:"fillOutlineColorTransition",id:"filloutlinecolortransition",level:3},{value:"Description",id:"description-8",level:4},{value:"Type",id:"type-8",level:4},{value:"Units",id:"units-2",level:4},{value:"Default Value",id:"default-value-6",level:4},{value:"fillTranslate",id:"filltranslate",level:3},{value:"Description",id:"description-9",level:4},{value:"Type",id:"type-9",level:4},{value:"Default Value",id:"default-value-7",level:4},{value:"Units",id:"units-3",level:4},{value:"Expression",id:"expression-5",level:4},{value:"fillTranslateTransition",id:"filltranslatetransition",level:3},{value:"Description",id:"description-10",level:4},{value:"Type",id:"type-10",level:4},{value:"Units",id:"units-4",level:4},{value:"Default Value",id:"default-value-8",level:4},{value:"fillTranslateAnchor",id:"filltranslateanchor",level:3},{value:"Description",id:"description-11",level:4},{value:"Type",id:"type-11",level:4},{value:"Default Value",id:"default-value-9",level:4},{value:"Supported Values",id:"supported-values-1",level:4},{value:"Requires",id:"requires",level:4},{value:"Expression",id:"expression-6",level:4},{value:"fillPattern",id:"fillpattern",level:3},{value:"Description",id:"description-12",level:4},{value:"Type",id:"type-12",level:4},{value:"Expression",id:"expression-7",level:4}],u={toc:s},d="wrapper";function k(e){let{components:l,...t}=e;return(0,a.kt)(d,(0,i.Z)({},u,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"  Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill"},"fill")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FillLayer } from '@rnmapbox/maps';\n\nFillLayer\n\n")),(0,a.kt)("p",null,"FillLayer is a style layer that renders one or more filled (and optionally stroked) polygons on the map."),(0,a.kt)("h2",{id:"props"},"props"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"required"),"\nA string that uniquely identifies the source in the style to which it is added."),(0,a.kt)("h3",{id:"existing"},"existing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"boolean\n")),(0,a.kt)("p",null,"The id refers to en existing layer in the style. Does not create a new layer."),(0,a.kt)("h3",{id:"sourceid"},"sourceID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"The source from which to obtain the data to style.\nIf the source has not yet been added to the current style, the behavior is undefined.\nInferred from parent source only if the layer is a direct child to it."),(0,a.kt)("p",null,"  ",(0,a.kt)("em",{parentName:"p"},"defaults to:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"MapboxGL.StyleSource.DefaultSourceID")),(0,a.kt)("h3",{id:"sourcelayerid"},"sourceLayerID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style."),(0,a.kt)("h3",{id:"abovelayerid"},"aboveLayerID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"Inserts a layer above aboveLayerID."),(0,a.kt)("h3",{id:"belowlayerid"},"belowLayerID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"string\n")),(0,a.kt)("p",null,"Inserts a layer below belowLayerID"),(0,a.kt)("h3",{id:"layerindex"},"layerIndex"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,a.kt)("p",null,"Inserts a layer at a specified index"),(0,a.kt)("h3",{id:"filter"},"filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"FilterExpression\n")),(0,a.kt)("p",null,"Filter only the features in the source layer that satisfy a condition that you define"),(0,a.kt)("h3",{id:"minzoomlevel"},"minZoomLevel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,a.kt)("p",null,"The minimum zoom level at which the layer gets parsed and appears."),(0,a.kt)("h3",{id:"maxzoomlevel"},"maxZoomLevel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"number\n")),(0,a.kt)("p",null,"The maximum zoom level at which the layer gets parsed and appears."),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"FillLayerStyleProps\n")),(0,a.kt)("p",null,"Customizable style attributes"),(0,a.kt)("h2",{id:"styles"},"styles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#fillsortkey"},"fillSortKey"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#visibility"},"visibility"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#fillantialias"},"fillAntialias"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#fillopacity"},"fillOpacity"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#fillcolor"},"fillColor"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#filloutlinecolor"},"fillOutlineColor"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#filltranslate"},"fillTranslate"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#filltranslateanchor"},"fillTranslateAnchor"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#fillpattern"},"fillPattern"),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillsortkey"},"fillSortKey"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillSortKey")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#layout-fill-fill-sort-key"},"fill-sort-key")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key."),(0,a.kt)("h4",{id:"type"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"expression"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom, feature")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visibility"},"visibility"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#layout-fill-visibility"},"visibility")),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"Whether this layer is displayed."),(0,a.kt)("h4",{id:"type-1"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enum")),(0,a.kt)("h4",{id:"default-value"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"visible")),(0,a.kt)("h4",{id:"supported-values"},"Supported Values"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"visible")," - The layer is shown.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"none")," - The layer is not shown.",(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillantialias"},"fillAntialias"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillAntialias")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-antialias"},"fill-antialias")),(0,a.kt)("h4",{id:"description-2"},"Description"),(0,a.kt)("p",null,"Whether or not the fill should be antialiased."),(0,a.kt)("h4",{id:"type-2"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"default-value-1"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("h4",{id:"expression-1"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillopacity"},"fillOpacity"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillOpacity")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-opacity"},"fill-opacity")),(0,a.kt)("h4",{id:"description-3"},"Description"),(0,a.kt)("p",null,"The opacity of the entire fill layer. In contrast to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fillColor"),", this value will also affect the 1px stroke around the fill, if the stroke is used."),(0,a.kt)("h4",{id:"type-3"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"default-value-2"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"minimum"},"Minimum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("h4",{id:"maximum"},"Maximum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("h4",{id:"expression-2"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillopacitytransition"},"fillOpacityTransition"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillOpacityTransition")),(0,a.kt)("h4",{id:"description-4"},"Description"),(0,a.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillOpacity property."),(0,a.kt)("h4",{id:"type-4"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,a.kt)("h4",{id:"units"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,a.kt)("h4",{id:"default-value-3"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillcolor"},"fillColor"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillColor")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-color"},"fill-color")),(0,a.kt)("h4",{id:"description-5"},"Description"),(0,a.kt)("p",null,"The color of the filled part of this layer. This color can be specified as ",(0,a.kt)("inlineCode",{parentName:"p"},"rgba")," with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used."),(0,a.kt)("h4",{id:"type-5"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color")),(0,a.kt)("h4",{id:"default-value-4"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"#000000")),(0,a.kt)("h4",{id:"disabled-by"},"Disabled By"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fillPattern")),(0,a.kt)("h4",{id:"expression-3"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillcolortransition"},"fillColorTransition"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillColorTransition")),(0,a.kt)("h4",{id:"description-6"},"Description"),(0,a.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillColor property."),(0,a.kt)("h4",{id:"type-6"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,a.kt)("h4",{id:"units-1"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,a.kt)("h4",{id:"default-value-5"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filloutlinecolor"},"fillOutlineColor"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillOutlineColor")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-outline-color"},"fill-outline-color")),(0,a.kt)("h4",{id:"description-7"},"Description"),(0,a.kt)("p",null,"The outline color of the fill. Matches the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"fillColor")," if unspecified."),(0,a.kt)("h4",{id:"type-7"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color")),(0,a.kt)("h4",{id:"disabled-by-1"},"Disabled By"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fillPattern")),(0,a.kt)("h4",{id:"expression-4"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom, feature, feature-state")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filloutlinecolortransition"},"fillOutlineColorTransition"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillOutlineColorTransition")),(0,a.kt)("h4",{id:"description-8"},"Description"),(0,a.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillOutlineColor property."),(0,a.kt)("h4",{id:"type-8"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,a.kt)("h4",{id:"units-2"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,a.kt)("h4",{id:"default-value-6"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filltranslate"},"fillTranslate"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillTranslate")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-translate"},"fill-translate")),(0,a.kt)("h4",{id:"description-9"},"Description"),(0,a.kt)("p",null,"The geometry's offset. Values are ","[x, y]"," where negatives indicate left and up, respectively."),(0,a.kt)("h4",{id:"type-9"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"array<number>")),(0,a.kt)("h4",{id:"default-value-7"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[0,0]")),(0,a.kt)("h4",{id:"units-3"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pixels")),(0,a.kt)("h4",{id:"expression-5"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filltranslatetransition"},"fillTranslateTransition"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillTranslateTransition")),(0,a.kt)("h4",{id:"description-10"},"Description"),(0,a.kt)("p",null,"The transition affecting any changes to this layer\u2019s fillTranslate property."),(0,a.kt)("h4",{id:"type-10"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ duration, delay }")),(0,a.kt)("h4",{id:"units-4"},"Units"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"milliseconds")),(0,a.kt)("h4",{id:"default-value-8"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{duration: 300, delay: 0}")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filltranslateanchor"},"fillTranslateAnchor"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillTranslateAnchor")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-translate-anchor"},"fill-translate-anchor")),(0,a.kt)("h4",{id:"description-11"},"Description"),(0,a.kt)("p",null,"Controls the frame of reference for ",(0,a.kt)("inlineCode",{parentName:"p"},"fillTranslate"),"."),(0,a.kt)("h4",{id:"type-11"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enum")),(0,a.kt)("h4",{id:"default-value-9"},"Default Value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"map")),(0,a.kt)("h4",{id:"supported-values-1"},"Supported Values"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"map")," - The fill is translated relative to the map.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"viewport")," - The fill is translated relative to the viewport.",(0,a.kt)("br",null)),(0,a.kt)("h4",{id:"requires"},"Requires"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fillTranslate")),(0,a.kt)("h4",{id:"expression-6"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fillpattern"},"fillPattern"),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"fillPattern")),(0,a.kt)("p",null,"Mapbox spec: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/#paint-fill-fill-pattern"},"fill-pattern")),(0,a.kt)("h4",{id:"description-12"},"Description"),(0,a.kt)("p",null,"Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels."),(0,a.kt)("h4",{id:"type-12"},"Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resolvedImage")),(0,a.kt)("h4",{id:"expression-7"},"Expression"),(0,a.kt)("p",null,"Parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom, feature")))}k.isMDXComponent=!0}}]);