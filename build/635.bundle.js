"use strict";(self.webpackChunktclcpasstwentyfirstoct=self.webpackChunktclcpasstwentyfirstoct||[]).push([[635],{61760:function(e,t,n){var o=n(87462),r=n(63366),i=n(67294),s=n(12666),a=n(62097),l=n(53566),u=n(84771),c=n(85893);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(e){return`scale(${e}, ${e**2})`}const f={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},h="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),m=i.forwardRef((function(e,t){const{addEndListener:n,appear:m=!0,children:g,easing:v,in:Z,onEnter:y,onEntered:b,onEntering:P,onExit:E,onExited:x,onExiting:w,style:M,timeout:C="auto",TransitionComponent:R=s.ZP}=e,T=(0,r.Z)(e,d),D=i.useRef(),k=i.useRef(),F=(0,a.Z)(),S=i.useRef(null),L=(0,u.Z)(S,g.ref,t),z=e=>t=>{if(e){const n=S.current;void 0===t?e(n):e(n,t)}},j=z(P),O=z(((e,t)=>{(0,l.n)(e);const{duration:n,delay:o,easing:r}=(0,l.C)({style:M,timeout:C,easing:v},{mode:"enter"});let i;"auto"===C?(i=F.transitions.getAutoHeightDuration(e.clientHeight),k.current=i):i=n,e.style.transition=[F.transitions.create("opacity",{duration:i,delay:o}),F.transitions.create("transform",{duration:h?i:.666*i,delay:o,easing:r})].join(","),y&&y(e,t)})),H=z(b),N=z(w),A=z((e=>{const{duration:t,delay:n,easing:o}=(0,l.C)({style:M,timeout:C,easing:v},{mode:"exit"});let r;"auto"===C?(r=F.transitions.getAutoHeightDuration(e.clientHeight),k.current=r):r=t,e.style.transition=[F.transitions.create("opacity",{duration:r,delay:n}),F.transitions.create("transform",{duration:h?r:.666*r,delay:h?n:n||.333*r,easing:o})].join(","),e.style.opacity=0,e.style.transform=p(.75),E&&E(e)})),I=z(x);return i.useEffect((()=>()=>{clearTimeout(D.current)}),[]),(0,c.jsx)(R,(0,o.Z)({appear:m,in:Z,nodeRef:S,onEnter:O,onEntered:H,onEntering:j,onExit:A,onExited:I,onExiting:N,addEndListener:e=>{"auto"===C&&(D.current=setTimeout(e,k.current||0)),n&&n(S.current,e)},timeout:"auto"===C?null:C},T,{children:(e,t)=>i.cloneElement(g,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:p(.75),visibility:"exited"!==e||Z?void 0:"hidden"},f[e],M,g.props.style),ref:L},t))}))}));m.muiSupportAuto=!0,t.Z=m},57742:function(e,t,n){const o=n(67294).createContext({});t.Z=o},38635:function(e,t,n){n.d(t,{Z:function(){return J}});var o=n(87462),r=n(63366),i=n(67294),s=(n(59864),n(86010)),a=n(94780),l=n(47505),u=n(94174),c=n(69474),d=n(57742),p=n(1588),f=n(34867);function h(e){return(0,f.Z)("MuiList",e)}(0,p.Z)("MuiList",["root","padding","dense","subheader"]);var m=n(85893);const g=["children","className","component","dense","disablePadding","subheader"],v=(0,u.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})));var Z=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiList"}),{children:l,className:u,component:p="ul",dense:f=!1,disablePadding:Z=!1,subheader:y}=n,b=(0,r.Z)(n,g),P=i.useMemo((()=>({dense:f})),[f]),E=(0,o.Z)({},n,{component:p,dense:f,disablePadding:Z}),x=(e=>{const{classes:t,disablePadding:n,dense:o,subheader:r}=e,i={root:["root",!n&&"padding",o&&"dense",r&&"subheader"]};return(0,a.Z)(i,h,t)})(E);return(0,m.jsx)(d.Z.Provider,{value:P,children:(0,m.jsxs)(v,(0,o.Z)({as:p,className:(0,s.Z)(x.root,u),ref:t,ownerState:E},b,{children:[y,l]}))})})),y=n(95806).Z,b=n(84771),P=n(63289);const E=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function x(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function w(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function M(e,t){if(void 0===t)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),n=n.trim().toLowerCase(),0!==n.length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function C(e,t,n,o,r,i){let s=!1,a=r(e,t,!!t&&n);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const t=!o&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&M(a,i)&&!t)return a.focus(),!0;a=r(e,a,n)}return!1}var R=i.forwardRef((function(e,t){const{actions:n,autoFocus:s=!1,autoFocusItem:a=!1,children:u,className:c,disabledItemsFocusable:d=!1,disableListWrap:p=!1,onKeyDown:f,variant:h="selectedMenu"}=e,g=(0,r.Z)(e,E),v=i.useRef(null),R=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,P.Z)((()=>{s&&v.current.focus()}),[s]),i.useImperativeHandle(n,(()=>({adjustStyleForScrollbar:(e,t)=>{const n=!v.current.style.width;if(e.clientHeight<v.current.clientHeight&&n){const n=`${y((0,l.Z)(e))}px`;v.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,v.current.style.width=`calc(100% + ${n})`}return v.current}})),[]);const T=(0,b.Z)(v,t);let D=-1;i.Children.forEach(u,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===h&&e.props.selected||-1===D)&&(D=t))}));const k=i.Children.map(u,((e,t)=>{if(t===D){const t={};return a&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===h&&(t.tabIndex=0),i.cloneElement(e,t)}return e}));return(0,m.jsx)(Z,(0,o.Z)({role:"menu",ref:T,className:c,onKeyDown:e=>{const t=v.current,n=e.key,o=(0,l.Z)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),C(t,o,p,d,x);else if("ArrowUp"===n)e.preventDefault(),C(t,o,p,d,w);else if("Home"===n)e.preventDefault(),C(t,null,p,d,x);else if("End"===n)e.preventDefault(),C(t,null,p,d,w);else if(1===n.length){const r=R.current,i=n.toLowerCase(),s=performance.now();r.keys.length>0&&(s-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=s,r.keys.push(i);const a=o&&!r.repeating&&M(o,r);r.previousKeyMatched&&(a||C(t,o,!1,d,x,r))?e.preventDefault():r.previousKeyMatched=!1}f&&f(e)},tabIndex:s?0:-1},g,{children:k}))})),T=n(3896),D=n(75400),k=n(57577),F=n(61760),S=n(6485);function L(e){return(0,f.Z)("MuiPopover",e)}(0,p.Z)("MuiPopover",["root","paper"]);const z=["onEntering"],j=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function O(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function H(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function N(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function A(e){return"function"==typeof e?e():e}const I=(0,u.ZP)(S.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),K=(0,u.ZP)(T.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var W=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiPopover"}),{action:u,anchorEl:d,anchorOrigin:p={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:h="anchorEl",children:g,className:v,container:Z,elevation:y=8,marginThreshold:P=16,open:E,PaperProps:x={},transformOrigin:w={vertical:"top",horizontal:"left"},TransitionComponent:M=F.Z,transitionDuration:C="auto",TransitionProps:{onEntering:R}={}}=n,T=(0,r.Z)(n.TransitionProps,z),S=(0,r.Z)(n,j),W=i.useRef(),$=(0,b.Z)(W,x.ref),B=(0,o.Z)({},n,{anchorOrigin:p,anchorReference:h,elevation:y,marginThreshold:P,PaperProps:x,transformOrigin:w,TransitionComponent:M,transitionDuration:C,TransitionProps:T}),V=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"]},L,t)})(B),U=i.useCallback((()=>{if("anchorPosition"===h)return f;const e=A(d),t=(e&&1===e.nodeType?e:(0,l.Z)(W.current).body).getBoundingClientRect();return{top:t.top+O(t,p.vertical),left:t.left+H(t,p.horizontal)}}),[d,p.horizontal,p.vertical,f,h]),X=i.useCallback((e=>({vertical:O(e,w.vertical),horizontal:H(e,w.horizontal)})),[w.horizontal,w.vertical]),Y=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=X(t);if("none"===h)return{top:null,left:null,transformOrigin:N(n)};const o=U();let r=o.top-n.vertical,i=o.left-n.horizontal;const s=r+t.height,a=i+t.width,l=(0,k.Z)(A(d)),u=l.innerHeight-P,c=l.innerWidth-P;if(r<P){const e=r-P;r-=e,n.vertical+=e}else if(s>u){const e=s-u;r-=e,n.vertical+=e}if(i<P){const e=i-P;i-=e,n.horizontal+=e}else if(a>c){const e=a-c;i-=e,n.horizontal+=e}return{top:`${Math.round(r)}px`,left:`${Math.round(i)}px`,transformOrigin:N(n)}}),[d,h,U,X,P]),[_,q]=i.useState(E),G=i.useCallback((()=>{const e=W.current;if(!e)return;const t=Y(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,q(!0)}),[Y]);i.useEffect((()=>{E&&G()})),i.useImperativeHandle(u,(()=>E?{updatePosition:()=>{G()}}:null),[E,G]),i.useEffect((()=>{if(!E)return;const e=(0,D.Z)((()=>{G()})),t=(0,k.Z)(d);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[d,E,G]);let J=C;"auto"!==C||M.muiSupportAuto||(J=void 0);const Q=Z||(d?(0,l.Z)(A(d)).body:void 0);return(0,m.jsx)(I,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,s.Z)(V.root,v),container:Q,open:E,ref:t,ownerState:B},S,{children:(0,m.jsx)(M,(0,o.Z)({appear:!0,in:E,onEntering:(e,t)=>{R&&R(e,t),G()},onExited:()=>{q(!1)},timeout:J},T,{children:(0,m.jsx)(K,(0,o.Z)({elevation:y},x,{ref:$,className:(0,s.Z)(V.paper,x.className)},_?void 0:{style:(0,o.Z)({},x.style,{opacity:0})},{ownerState:B,children:g}))}))}))})),$=n(62097);function B(e){return(0,f.Z)("MuiMenu",e)}(0,p.Z)("MuiMenu",["root","paper","list"]);const V=["onEntering"],U=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],X={vertical:"top",horizontal:"right"},Y={vertical:"top",horizontal:"left"},_=(0,u.ZP)(W,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),q=(0,u.ZP)(T.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),G=(0,u.ZP)(R,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0});var J=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:u,disableAutoFocusItem:d=!1,MenuListProps:p={},onClose:f,open:h,PaperProps:g={},PopoverClasses:v,transitionDuration:Z="auto",TransitionProps:{onEntering:y}={},variant:b="selectedMenu"}=n,P=(0,r.Z)(n.TransitionProps,V),E=(0,r.Z)(n,U),x=(0,$.Z)(),w="rtl"===x.direction,M=(0,o.Z)({},n,{autoFocus:l,disableAutoFocusItem:d,MenuListProps:p,onEntering:y,PaperProps:g,transitionDuration:Z,TransitionProps:P,variant:b}),C=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"],list:["list"]},B,t)})(M),R=l&&!d&&h,T=i.useRef(null);let D=-1;return i.Children.map(u,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===b&&e.props.selected||-1===D)&&(D=t))})),(0,m.jsx)(_,(0,o.Z)({classes:v,onClose:f,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?X:Y,PaperProps:(0,o.Z)({component:q},g,{classes:(0,o.Z)({},g.classes,{root:C.paper})}),className:C.root,open:h,ref:t,transitionDuration:Z,TransitionProps:(0,o.Z)({onEntering:(e,t)=>{T.current&&T.current.adjustStyleForScrollbar(e,x),y&&y(e,t)}},P),ownerState:M},E,{children:(0,m.jsx)(G,(0,o.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),f&&f(e,"tabKeyDown"))},actions:T,autoFocus:l&&(-1===D||d),autoFocusItem:R,variant:b},p,{className:(0,s.Z)(C.list,p.className),children:u}))}))}))}}]);
//# sourceMappingURL=635.bundle.js.map