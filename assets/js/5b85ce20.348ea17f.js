"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(o,".").concat(y)]||f[y]||s[y]||p;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"EvaluateFuncWith"},u="EvaluateFuncWith type",o={unversionedId:"api/puppeteer.evaluatefuncwith",id:"api/puppeteer.evaluatefuncwith",title:"EvaluateFuncWith type",description:"Signature:",source:"@site/../docs/api/puppeteer.evaluatefuncwith.md",sourceDirName:"api",slug:"/api/puppeteer.evaluatefuncwith",permalink:"/next/api/puppeteer.evaluatefuncwith",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"EvaluateFuncWith"},sidebar:"api",previous:{title:"EvaluateFunc",permalink:"/next/api/puppeteer.evaluatefunc"},next:{title:"EVALUATION_SCRIPT_URL",permalink:"/next/api/puppeteer.evaluation_script_url"}},l={},c=[{value:"Signature:",id:"signature",level:4}],s={toc:c};function f(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"evaluatefuncwith-type"}),"EvaluateFuncWith type"),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export type EvaluateFuncWith<V, T extends unknown[]> = (\n  ...params: [V, ...InnerParams<T>]\n) => Awaitable<unknown>;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.innerparams"}),"InnerParams"),", ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.awaitable"}),"Awaitable")))}f.isMDXComponent=!0}}]);