(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{4070:function(e,t,n){Promise.resolve().then(n.bind(n,4007))},2597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},unstable_getImgProps:function(){return c}});let r=n(1024),a=n(3655),o=n(7707),i=n(6964),s=r._(n(5324)),c=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=i.Image},4007:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(2265),o=n(172),i=n.n(o),s=n(1396),c=n.n(s),l=n(6691),u=n.n(l);async function f(){try{let e=await fetch("https://bloglamamia.vercel.app/api/posts",{cache:"no-store",headers:{"Content-type":"application/json"}});if(!e.ok)throw Error("Failed to fetch data");let t=await e.json();return console.log(t),t}catch(e){return console.log("Error fetching data",e),[e]}}let d=async()=>{let[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e=async()=>{let e=await f();t(e)};e()},[]),(0,r.jsx)("div",{className:i().mainContainer,children:e.map(e=>(0,r.jsxs)(c(),{href:"/blog/".concat(e._id),className:i().container,children:[(0,r.jsx)("div",{className:i().imageContainer,children:(0,r.jsx)(u(),{src:e.img,alt:"",width:400,height:250,className:i().image})}),(0,r.jsxs)("div",{className:i().content,children:[(0,r.jsx)("h1",{className:i().title,children:e.title}),(0,r.jsx)("p",{className:i().desc,children:e.desc})]})]},e._id))})};t.default=d},172:function(e){e.exports={container:"page_container__sdT1e",image:"page_image__7fjoy",content:"page_content__caxfN",title:"page_title__HjEeY",desc:"page_desc__IUYyb"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(2597)},1396:function(e,t,n){e.exports=n(4724)}},function(e){e.O(0,[724,964,971,12,744],function(){return e(e.s=4070)}),_N_E=e.O()}]);