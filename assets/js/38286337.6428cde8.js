"use strict";(self.webpackChunkmap_docs=self.webpackChunkmap_docs||[]).push([[7891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={title:"Shape Source Icons",tags:["ShapeSource","SymbolLayer","Images","Images#nativeAssetImages","Images#onImageMissing"],custom_props:{example_rel_path:"SymbolCircleLayer/ShapeSourceIcon.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/SymbolCircleLayer/ShapeSourceIcon.js"},i=void 0,s={unversionedId:"examples/SymbolCircleLayer/ShapeSourceIcon",id:"examples/SymbolCircleLayer/ShapeSourceIcon",title:"Shape Source Icons",description:"Render icons with various methods.",source:"@site/docs/examples/SymbolCircleLayer/ShapeSourceIcon.md",sourceDirName:"examples/SymbolCircleLayer",slug:"/examples/SymbolCircleLayer/ShapeSourceIcon",permalink:"/docs/examples/SymbolCircleLayer/ShapeSourceIcon",draft:!1,editUrl:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/SymbolCircleLayer/ShapeSourceIcon.js",tags:[{label:"ShapeSource",permalink:"/docs/tags/shape-source"},{label:"SymbolLayer",permalink:"/docs/tags/symbol-layer"},{label:"Images",permalink:"/docs/tags/images"},{label:"Images#nativeAssetImages",permalink:"/docs/tags/images-native-asset-images"},{label:"Images#onImageMissing",permalink:"/docs/tags/images-on-image-missing"}],version:"current",frontMatter:{title:"Shape Source Icons",tags:["ShapeSource","SymbolLayer","Images","Images#nativeAssetImages","Images#onImageMissing"],custom_props:{example_rel_path:"SymbolCircleLayer/ShapeSourceIcon.js"},custom_edit_url:"https://github.com/rnmapbox/maps/tree/master/example/src/examples/SymbolCircleLayer/ShapeSourceIcon.js"},sidebar:"examplesSidebar",previous:{title:"Scaleable images",permalink:"/docs/examples/SymbolCircleLayer/ScalableImages"},next:{title:"Set Displacement",permalink:"/docs/examples/UserLocation/SetDisplacement"}},c={},p=[],l={toc:p},m="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(m,(0,a.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Render icons with various methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pin-rn: Rendered with a React Native View"),(0,r.kt)("li",{parentName:"ul"},"pin: Rendered with a native asset image"),(0,r.kt)("li",{parentName:"ul"},"pin3: Resolved as a result of onImageMissing"),(0,r.kt)("li",{parentName:"ul"},"example: Rendered with a js asset image (require)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {\n  MapView,\n  Images,\n  Camera,\n  Image,\n  SymbolLayer,\n  ShapeSource,\n} from '@rnmapbox/maps';\nimport { Text, View } from 'react-native';\n\nimport exampleIcon from '../../assets/example.png';\nimport pinIcon from '../../assets/pin.png';\n\nconst styles = {\n  icon: {\n    iconImage: ['get', 'icon'],\n\n    iconSize: [\n      'match',\n      ['get', 'icon'],\n      'example',\n      1.2,\n      'airport-15',\n      1.2,\n      /* default */ 1,\n    ],\n    iconAllowOverlap: true,\n  },\n  matchParent: { flex: 1 },\n};\n\nconst featureCollection = {\n  type: 'FeatureCollection',\n  features: [\n    {\n      type: 'Feature',\n      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',\n      properties: {\n        icon: 'example',\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-117.20611157485, 52.180961084261],\n      },\n    },\n    {\n      type: 'Feature',\n      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',\n      properties: {\n        icon: 'airport-15',\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-117.205908, 52.180843],\n      },\n    },\n    {\n      type: 'Feature',\n      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',\n      properties: {\n        icon: 'pin',\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-117.206562, 52.180797],\n      },\n    },\n    {\n      type: 'Feature',\n      id: '9d10456e-bdda-4aa9-9269-04c1667d4553',\n      properties: {\n        icon: 'pin3',\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-117.206862, 52.180897],\n      },\n    },\n    {\n      type: 'Feature',\n      id: '9d10456e-bdda-4aa9-9269-04c1667d4555',\n      properties: {\n        icon: 'pin-rn',\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-117.205862, 52.180697],\n      },\n    },\n  ],\n};\n\nclass ShapeSourceIcon extends React.Component {\n  state = {\n    images: {\n      example: exampleIcon,\n    },\n  };\n\n  render() {\n    const { images } = this.state;\n\n    return (\n      <MapView style={styles.matchParent}>\n        <Camera\n          defaultSettings={{\n            zoomLevel: 16,\n            centerCoordinate: [-117.20611157485, 52.180961084261],\n          }}\n        />\n        <Images\n          nativeAssetImages={['pin']}\n          images={images}\n          onImageMissing={(imageKey) => {\n            if (imageKey != 'pin-rn') {\n              this.setState({\n                images: { ...this.state.images, [imageKey]: pinIcon },\n              });\n            }\n          }}\n        >\n          <Image name=\"pin-rn\">\n            <View>\n              <View\n                style={{\n                  borderRadius: 10,\n                  backgroundColor: 'gray',\n                  padding: 8,\n                  margin: 16,\n                  width: 100,\n                  shadowOffset: { width: 0, height: 8 },\n                  shadowOpacity: 0.2,\n                }}\n              >\n                <Text style={{ fontWeight: 'bold', color: 'white' }}>\n                  RN Pin 3\n                </Text>\n              </View>\n            </View>\n          </Image>\n        </Images>\n        <ShapeSource id=\"exampleShapeSource\" shape={featureCollection}>\n          <SymbolLayer id=\"exampleIconName\" style={styles.icon} />\n        </ShapeSource>\n      </MapView>\n    );\n  }\n}\n\nexport default ShapeSourceIcon;\n\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ShapeSourceIcon.png",src:t(4373).Z,width:"295",height:"640"}),"}"))}u.isMDXComponent=!0},4373:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ShapeSourceIcon-694d06d5d3c7be5bddab9da34ad4cd33.png"}}]);