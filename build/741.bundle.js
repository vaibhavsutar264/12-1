"use strict";(self.webpackChunktclcpasstwentyfirstoct=self.webpackChunktclcpasstwentyfirstoct||[]).push([[741],{76386:function(e,t,r){r.d(t,{i:function(){return _}});var n=r(17888),s=r(18508),o=r(3646),a=r(19316),i=r(50130),l=r(18720),c=r(44297),u=r(79903),p=r(27412),d=r(67294),m=r(94532),f=r(22961),h=r(89572),y=r(180),b=r(85893),w=function(){return(0,b.jsx)("svg",{id:"big-check","data-name":"big check",type:y.bX.IMAGE_SVG,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"24px",height:"24px",children:(0,b.jsx)("path",{fill:"#43A047",d:"M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"})})},j=r(27036),v=r(19382),x=r(50594);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,o,a,i=[],l=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw s}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=function(e){var t=e.onChange,r=e.sxForInput,y=e.classNameInput,g=e.register,P=e.variantForInput,Z=e.label,N=e.formState,_=e.fieldName,A=e.typeName,C=e.onInput,q=e.valueForInput,I=e.dataTestId,k=e.setpassword,L=void 0!==k&&k,D=(0,c.Z)().t,T=S((0,d.useState)(""),2),E=T[0],R=T[1],z=S((0,d.useState)(!1),2),F=z[0],M=z[1],G=S((0,d.useState)({showPassword:!0}),2),H=G[0],V=G[1],U={opacity:.5},$=function(){var e=0;return"".concat(E).length>=5&&(e+=10),/[A-Z]/.test(E)&&(e+=20),/[a-z]/.test(E)&&(e+=20),/[@#&]/.test(E)&&(e+=20),"".concat(E).length>=8&&(e+=30),e};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(n.Z,{className:"email"==A?"input-wrapper yes-margin":"password"==A?"input-wrapper password-checkHide no-margin":void 0,"data-margin":!0,id:_,sx:{display:"flex",alignItems:"flex-end",position:"relative",width:1,margin:"20px 0px"},children:[(0,b.jsx)(s.Z,{htmlFor:_,id:"label__icon",className:"label__icon",children:"email"==A?(0,b.jsx)(u.Z,{id:"mail-icon",style:U}):"password"==A?(0,b.jsx)(p.Z,{id:"unlock-icon",style:U}):null}),(0,b.jsx)(o.Z,O(O({className:y,id:_,defaultValue:q,onInput:function(e){R(e.target.value);try{M(1==L),C(e.target.value)}catch(e){}},onChange:t,label:D(Z),variant:P,type:H.showPassword?"text":"password"},g),{},{autoComplete:"false",onPaste:function(e){e.preventDefault()},sx:r,InputProps:O(O({},"password"===A&&{endAdornment:(0,b.jsx)(a.Z,{position:"end",children:(0,b.jsx)(i.Z,{className:"password-toggle","aria-label":"toggle password visibility",onClick:function(){V(O(O({},H),{},{showPassword:!H.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:H.showPassword?(0,b.jsx)(f.Z,{}):(0,b.jsx)(m.Z,{})})})}),{},{"data-testid":I,autoComplete:"off"})})),N.touchedFields[_]&&N.errors[_]&&(0,b.jsxs)("p",{className:"text-error",children:[" ",(0,b.jsx)("span",{style:{position:"relative",top:"7px"},children:(0,b.jsx)(h.Z,{})})," ",N.errors[_].message]}),F&&(0,b.jsxs)("div",{className:"tooltipCustom",children:[(0,b.jsxs)("button",{onClick:function(){M(!1)},id:"tooltip-close",type:"button",className:"tooltipClose",children:[" "," ",(0,b.jsx)(x.Z,{})]}),(0,b.jsxs)("div",{className:"tooltipContent",children:[(0,b.jsx)("p",{className:"tooltipTitle",children:"Password must have"}),(0,b.jsxs)("ul",{className:"tooltioList",children:[(0,b.jsxs)("li",{id:"uppercase",className:"tooltipList-item",children:[(0,b.jsx)("span",{className:"tooltip-icon",children:/[A-Z]/.test(E)?(0,b.jsx)(w,{}):(0,b.jsx)(j.Z,{})}),(0,b.jsx)("span",{className:"tooltip-text",children:"Upper"})]}),(0,b.jsxs)("li",{id:"lowercase",className:"tooltipList-item",children:[(0,b.jsx)("span",{className:"tooltip-icon",children:/[a-z]/.test(E)?(0,b.jsx)(w,{}):(0,b.jsx)(j.Z,{})}),(0,b.jsx)("span",{className:"tooltip-text",children:"Lower Case"})]}),(0,b.jsxs)("li",{id:"symbol",className:"tooltipList-item",children:[(0,b.jsx)("span",{className:"tooltip-icon",children:/[@#&]/.test(E)?(0,b.jsx)(w,{}):(0,b.jsx)(j.Z,{})}),(0,b.jsx)("span",{className:"tooltip-text",children:"Symbol (@#&)"})]}),(0,b.jsxs)("li",{className:"tooltipList-item",children:[(0,b.jsx)("span",{className:"tooltip-icon",id:"atleastTick",children:"".concat(E).length>=8?(0,b.jsx)(w,{}):(0,b.jsx)(j.Z,{})}),(0,b.jsx)("span",{className:"tooltip-text",children:"At least 8 characters"})]})]}),(0,b.jsxs)(l.Z,{sx:{width:"100%",mr:1},children:[(0,b.jsxs)("p",{className:"tooltipTitle StrengthTitle",children:["Password Strength:"," ",$()>0&&$()<=60&&(0,b.jsx)("span",{style:{color:"#d32f2f"},children:" Low  "}),$()>60&&$()<=80&&(0,b.jsx)("span",{style:{color:"#ed6c02"},children:" Moderate  "}),$()>80&&$()<=100&&(0,b.jsx)("span",{style:{color:"#green"},children:" High  "})]}),(0,b.jsx)(v.Z,{variant:"determinate",color:$()>80?"success":$()>=60?"warning":$()<=59?"error":void 0,value:$()})]})]})]})]})})}},49034:function(e,t,r){r.d(t,{R:function(){return c}}),r(67294);var n=r(87536),s=r(85893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=e.children,r=e.onSubmit,o=e.methods;return(0,s.jsx)(n.RV,i(i({},o),{},{children:(0,s.jsx)("form",{onSubmit:r,children:t})}))}},44297:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(64478),s=r(180),o=r(59381),a=[{value:"en",label:"English"},{value:"de",label:"German"}];function i(){var e=(0,n.$)(),t=e.i18n,r=e.t,i=(0,o.fp)(s.PM.I18_LANG_VAR);return{onChangeLang:function(e){t.changeLanguage(e)},t:r,currentLang:a.find((function(e){return e.value===i})),allLang:a}}},29320:function(e,t,r){r.d(t,{Jg:function(){return l},mp:function(){return i},sw:function(){return a},y1:function(){return o}});var n=r(19501),s=r(51809),o=n.Ry().shape({user:n.Z_().test("emailTest","Please enter a valid email",s.oH),password:n.Z_().required("Please enter password")}),a=(n.Ry().shape({firstname:n.Z_().required("Please enter firstname"),lastName:n.Z_().required("Please enter lastname"),phoneNumber:n.Z_().required("Please enter phoneNumber"),communication:n.Z_().required("Please enter communication"),timezone:n.Z_().required("Please enter timezone")}),n.Ry().shape({user:n.Z_().test("emailTest","Please enter a valid email",s.oH)})),i=n.Ry().shape({newPass:n.Z_().required("Please enter password").matches(/[A-Z]/,"Password must contain atleast one uppercase").matches(/[a-z]/,"Password must contain atleast one lowercase").matches(/[@#&]/,"Password must contain special character @,#,&").min(8,"password must be at least 8 characters"),cnfPassword:n.Z_().required("Confirm password is required")}),l=n.Ry().shape({oldPassword:n.Z_().required("old password is required"),newPass:n.Z_().required("Please enter password").matches(/[A-Z]/,"Password must contain atleast one uppercase").matches(/[a-z]/,"Password must contain atleast one lowercase").matches(/[@#&]/,"Password must contain special character @,#,&").min(8,"password must be at least 8 characters"),cnfPassword:n.Z_().required("Confirm password is required")})}}]);
//# sourceMappingURL=741.bundle.js.map