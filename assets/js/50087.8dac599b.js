"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50087],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),b=a,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return t?n.createElement(d,u(u({ref:r},s),{},{components:t})):n.createElement(d,u({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50551:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(67294),a=t(86010);const o="tabItem_Ymn6";function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function l({children:e,hidden:r,className:t}){return n.createElement("div",u({role:"tabpanel",className:(0,a.Z)(o,t)},{hidden:r}),e)}},93070:(e,r,t)=>{t.d(r,{Z:()=>P});var n=t(67294),a=t(86010),o=t(6379),u=t(76775),l=t(47348),c=t(83928),i=t(76632);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function p(e){return function(e){var r,t;return null!==(t=null===(r=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==t?t:[]}(e).map((({props:{value:e,label:r,attributes:t,default:n}})=>({value:e,label:r,attributes:t,default:n})))}function b(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=r?r:p(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function d({value:e,tabValues:r}){return r.some((r=>r.value===e))}function y({queryString:e=!1,groupId:r}){const t=(0,u.k6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),o=(0,l._X)(a),c=(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(t.location.search);r.set(a,e),t.replace(f(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}({},t.location),{search:r.toString()}))}),[a,t]);return[o,c]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=b(e),[u,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const n=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[c,s]=y({queryString:t,groupId:a}),[f,p]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,i.Nk)(r);return[t,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:f;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),p(e)}),[s,p,o]),tabValues:o}}var v=t(30358);const h="tabList__CuJ",g="tabItem_LNqP";function O(){return O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function w({className:e,block:r,selectedValue:t,selectValue:u,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),s=e=>{const r=e.currentTarget,n=c.indexOf(r),a=l[n].value;a!==t&&(i(r),u(a))},f=e=>{let r=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;var t;r=null!==(t=c[n])&&void 0!==t?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var n;r=null!==(n=c[t])&&void 0!==n?n:c[c.length-1];break}}null==r||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},e)},l.map((({value:e,label:r,attributes:o})=>n.createElement("li",O({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>c.push(e),onKeyDown:f,onClick:s},o,{className:(0,a.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":t===e})}),null!=r?r:e))))}function j({lazy:e,children:r,selectedValue:t}){const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t}))))}function E(e){const r=m(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",h)},n.createElement(w,O({},e,r)),n.createElement(j,O({},e,r)))}function P(e){const r=(0,v.Z)();return n.createElement(E,O({key:String(r)},e))}}}]);