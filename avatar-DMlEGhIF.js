import{a as ue,r as me,B as pe}from"./page-DEJffvkR.js";import{aU as ye,b as ge,aV as V,a3 as ne,aE as S,a4 as Ce,a1 as W,cn as be,a0 as H,a8 as Ee,a7 as X,bh as ve,co as we,dV as Le,aO as Se,aT as B,d as ie,a9 as Ae,I as Y,c as T,u as Pe,i as z,aS as D,o as xe,bp as Z,be as Oe,f as ke,ai as Te,az as Ne}from"./index-_yd-8GWv.js";import{L as Fe,t as Ie}from"./inputField-BaOnrCSn.js";import{S as Me}from"./scrollable-ZZit1Gk2.js";function Be(n){if(n.key==="Enter"&&!ye&&!n.isComposing){if(ge.settings.sendShortcut==="enter")return n.shiftKey||n.ctrlKey||n.metaKey?void 0:!0;{const t=V?n.metaKey:n.ctrlKey;if(n.shiftKey||(V?n.ctrlKey:n.metaKey))return;if(t)return!0}}return!1}function ht(n){n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen()}function ut(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function De(n,t,e){const s=e?e.add(n):n.addEventListener.bind(n);"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange".split(" ").forEach(i=>{s(i,t,!1)})}function se(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement}function mt(){return!!se()}const He=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Re=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...He]),$e=new Set(["innerHTML","textContent","innerText","children"]),Ue=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),We=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function _e(n,t){const e=We[n];return typeof e=="object"?e[t]?e.$:void 0:e}const Ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),je=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ge={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function qe(n,t,e){let s=e.length,i=t.length,l=s,r=0,o=0,c=t[i-1].nextSibling,f=null;for(;r<i||o<l;){if(t[r]===e[o]){r++,o++;continue}for(;t[i-1]===e[l-1];)i--,l--;if(i===r){const h=l<s?o?e[o-1].nextSibling:e[l-o]:c;for(;o<l;)n.insertBefore(e[o++],h)}else if(l===o)for(;r<i;)(!f||!f.has(t[r]))&&t[r].remove(),r++;else if(t[r]===e[l-1]&&e[o]===t[i-1]){const h=t[--i].nextSibling;n.insertBefore(e[o++],t[r++].nextSibling),n.insertBefore(e[--l],h),t[i]=e[l]}else{if(!f){f=new Map;let d=o;for(;d<l;)f.set(e[d],d++)}const h=f.get(t[r]);if(h!=null)if(o<h&&h<l){let d=r,y=1,b;for(;++d<i&&d<l&&!((b=f.get(t[d]))==null||b!==h+y);)y++;if(y>h-o){const x=t[r];for(;o<h;)n.insertBefore(e[o++],x)}else n.replaceChild(e[o++],t[r++])}else r++;else t[r++].remove()}}}const J="_$DX_DELEGATE";function Ve(n,t,e,s={}){let i;return ne(l=>{i=l,t===document?n():$(t,n(),t.firstChild?null:void 0,e)},s.owner),()=>{i(),t.textContent=""}}function pt(n,t,e){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=n,e?r.content.firstChild.firstChild:r.content.firstChild},l=t?()=>W(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function Xe(n,t=window.document){const e=t[J]||(t[J]=new Set);for(let s=0,i=n.length;s<i;s++){const l=n[s];e.has(l)||(e.add(l),t.addEventListener(l,it))}}function R(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Ye(n,t,e,s){s==null?n.removeAttributeNS(t,e):n.setAttributeNS(t,e,s)}function ze(n,t){t==null?n.removeAttribute("class"):n.className=t}function Ze(n,t,e,s){if(s)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const i=e[0];n.addEventListener(t,e[0]=l=>i.call(n,e[1],l))}else n.addEventListener(t,e)}function Je(n,t,e={}){const s=Object.keys(t||{}),i=Object.keys(e);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(Q(n,o,!1),delete e[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],c=!!t[o];!o||o==="undefined"||e[o]===c||!c||(Q(n,o,!0),e[o]=c)}return e}function Qe(n,t,e){if(!t)return e?R(n,"style"):t;const s=n.style;if(typeof t=="string")return s.cssText=t;typeof e=="string"&&(s.cssText=e=void 0),e||(e={}),t||(t={});let i,l;for(l in e)t[l]==null&&s.removeProperty(l),delete e[l];for(l in t)i=t[l],i!==e[l]&&(s.setProperty(l,i),e[l]=i);return e}function et(n,t={},e,s){const i={};return s||S(()=>i.children=P(n,t.children,i.children)),S(()=>t.ref&&t.ref(n)),S(()=>tt(n,t,e,!0,i,!0)),i}function yt(n,t,e){return W(()=>n(t,e))}function $(n,t,e,s){if(e!==void 0&&!s&&(s=[]),typeof t!="function")return P(n,t,s,e);S(i=>P(n,t(),i,e),s)}function tt(n,t,e,s,i={},l=!1){t||(t={});for(const r in i)if(!(r in t)){if(r==="children")continue;i[r]=ee(n,r,null,i[r],e,l)}for(const r in t){if(r==="children")continue;const o=t[r];i[r]=ee(n,r,o,i[r],e,l)}}function nt(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function Q(n,t,e){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)n.classList.toggle(s[i],e)}function ee(n,t,e,s,i,l){let r,o,c,f,h;if(t==="style")return Qe(n,e,s);if(t==="classList")return Je(n,e,s);if(e===s)return s;if(t==="ref")l||e(n);else if(t.slice(0,3)==="on:"){const d=t.slice(3);s&&n.removeEventListener(d,s),e&&n.addEventListener(d,e)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);s&&n.removeEventListener(d,s,!0),e&&n.addEventListener(d,e,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),y=Ke.has(d);if(!y&&s){const b=Array.isArray(s)?s[0]:s;n.removeEventListener(d,b)}(y||e)&&(Ze(n,d,e,y),y&&Xe([d]))}else if(t.slice(0,5)==="attr:")R(n,t.slice(5),e);else if((h=t.slice(0,5)==="prop:")||(c=$e.has(t))||!i&&((f=_e(t,n.tagName))||(o=Re.has(t)))||(r=n.nodeName.includes("-")))h&&(t=t.slice(5),o=!0),t==="class"||t==="className"?ze(n,e):r&&!o&&!c?n[nt(t)]=e:n[f||t]=e;else{const d=i&&t.indexOf(":")>-1&&Ge[t.split(":")[0]];d?Ye(n,d,t,e):R(n,Ue[t]||t,e)}return e}function it(n){const t=`$$${n.type}`;let e=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==e&&Object.defineProperty(n,"target",{configurable:!0,value:e}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}});e;){const s=e[t];if(s&&!e.disabled){const i=e[`${t}Data`];if(i!==void 0?s.call(e,i,n):s.call(e,n),n.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function P(n,t,e,s,i){for(;typeof e=="function";)e=e();if(t===e)return e;const l=typeof t,r=s!==void 0;if(n=r&&e[0]&&e[0].parentNode||n,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=e[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),e=L(n,e,s,o)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t;else if(t==null||l==="boolean")e=L(n,e,s);else{if(l==="function")return S(()=>{let o=t();for(;typeof o=="function";)o=o();e=P(n,o,e,s)}),()=>e;if(Array.isArray(t)){const o=[],c=e&&Array.isArray(e);if(U(o,t,e,i))return S(()=>e=P(n,o,e,s,!0)),()=>e;if(o.length===0){if(e=L(n,e,s),r)return e}else c?e.length===0?te(n,o,s):qe(n,e,o):(e&&L(n),te(n,o));e=o}else if(t.nodeType){if(Array.isArray(e)){if(r)return e=L(n,e,s,t);L(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function U(n,t,e,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],c=e&&e[l],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)n.push(o);else if(Array.isArray(o))i=U(n,o,c)||i;else if(f==="function")if(s){for(;typeof o=="function";)o=o();i=U(n,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else n.push(o),i=!0;else{const h=String(o);c&&c.nodeType===3&&c.data===h?n.push(c):n.push(document.createTextNode(h))}}return i}function te(n,t,e=null){for(let s=0,i=t.length;s<i;s++)n.insertBefore(t[s],e)}function L(n,t,e,s){if(e===void 0)return n.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const c=o.parentNode===n;!l&&!r?c?n.replaceChild(i,o):n.insertBefore(i,e):c&&o.remove()}else l=!0}}else n.insertBefore(i,e);return[i]}const st="http://www.w3.org/2000/svg";function oe(n,t=!1){return t?document.createElementNS(st,n):document.createElement(n)}function gt(n){const{useShadow:t}=n,e=document.createTextNode(""),s=()=>n.mount||document.body,i=we();let l,r=!!Le.context;return Ce(()=>{l||(l=be(i,()=>H(()=>n.children)));const o=s();if(o instanceof HTMLHeadElement){const[c,f]=Ee(!1),h=()=>f(!0);ne(d=>$(o,()=>c()?d():l(),null)),X(h)}else{const c=oe(n.isSVG?"g":"div",n.isSVG),f=t&&c.attachShadow?c.attachShadow({mode:"open"}):c;Object.defineProperty(c,"_$host",{get(){return e.parentNode},configurable:!0}),$(f,l),o.appendChild(c),n.ref&&n.ref(c),X(()=>o.removeChild(c))}},void 0,{render:!r}),e}function Ct(n){const[t,e]=ve(n,["component"]),s=H(()=>t.component);return H(()=>{const i=s();switch(typeof i){case"function":return W(()=>i(e));case"string":const l=je.has(i),r=oe(i,l);return et(r,e,l),r}})}const _=document.body;let A=_;const le=()=>{A=se()||_,N.reAppend()};De(_,le);const C=class C extends Se{constructor(t,e={}){if(super(!1),this.element=document.createElement("div"),this.container=document.createElement("div"),this.header=document.createElement("div"),this.title=document.createElement("div"),this.hideWithCallback=s=>{this.addEventListener("closeAfterTimeout",s),this.hide()},this.element.classList.add("popup"),this.element.className="popup"+(t?" "+t:""),this.container.classList.add("popup-container","z-depth-1"),B.isDarkOverlayActive&&(this.night=!0,this.element.classList.add("night")),this.header.classList.add("popup-header"),e.title&&(this.title.classList.add("popup-title"),typeof e.title=="string"?ie(this.title,e.title):typeof e.title!="boolean"&&this.title.append(e.title),this.header.append(this.title)),this.isConfirmationNeededOnClose=e.isConfirmationNeededOnClose,this.middlewareHelper=Ae(),this.listenerSetter=new Fe,this.managers=C.MANAGERS,this.confirmShortcutIsSendShortcut=e.confirmShortcutIsSendShortcut,e.closable&&(this.btnClose=ue("",{noRipple:!0}),this.btnClose.classList.add("popup-close"),this.header.prepend(this.btnClose),e.onBackClick?(this.btnCloseAnimatedIcon=document.createElement("div"),this.btnCloseAnimatedIcon.classList.add("animated-close-icon"),this.btnClose.append(this.btnCloseAnimatedIcon)):this.btnClose.append(Y("close")),T(this.btnClose,()=>{e.onBackClick&&this.btnCloseAnimatedIcon.classList.contains("state-back")?e.onBackClick()!==!1&&this.btnCloseAnimatedIcon.classList.remove("state-back"):this.hide()},{listenerSetter:this.listenerSetter})),this.withoutOverlay=e.withoutOverlay,this.withoutOverlay&&this.element.classList.add("no-overlay"),e.overlayClosable&&T(this.element,s=>{Pe(s.target,"popup-container")||!s.target.isConnected||this.hide()},{listenerSetter:this.listenerSetter}),e.withConfirm&&(this.btnConfirm=document.createElement("button"),this.btnConfirm.classList.add("btn-primary","btn-color-primary"),e.withConfirm!==!0&&this.btnConfirm.append(z(e.withConfirm)),this.header.append(this.btnConfirm)),this.container.append(this.header),e.body&&(this.body=document.createElement("div"),this.body.classList.add("popup-body"),this.container.append(this.body)),e.scrollable){const s=this.scrollable=new Me(this.body);if(this.attachScrollableListeners(),e.floatingHeader){this.attachScrollableListeners(this.header);const i=document.createElement("div");i.classList.add("popup-header-background"),this.header.prepend(i),this.header.classList.add("is-floating")}this.body||this.header.after(s.container)}e.footer&&(this.footer=document.createElement("div"),this.footer.classList.add("popup-footer"),(this.body||this.container).append(this.footer),e.withFooterConfirm&&this.footer.append(this.btnConfirm)),this.btnConfirmOnEnter=this.btnConfirm,this.setButtons(e.buttons),this.element.append(this.container),C.POPUPS.push(this)}setButtons(t){if(this.buttons=t,this.buttonsEl&&(this.buttonsEl.remove(),this.buttonsEl=void 0),!t?.length)return;const e=this.buttonsEl=document.createElement("div");e.classList.add("popup-buttons");const s=t.map(i=>{const l=document.createElement("button");if(l.className="popup-button btn"+(i.isDanger?" danger":" primary"),i.noRipple||me(l),i.text?l.append(i.text):i.langKey&&l.append(z(i.langKey,i.langArgs)),i.iconLeft||i.iconRight){const r=Y(i.iconLeft||i.iconRight,"popup-button-icon",i.iconLeft?"left":"right");l.classList.add("with-icon"),i.iconLeft?l.prepend(r):l.append(r)}return T(l,async r=>{let o=i.callback?.(r);if(o!==void 0&&o instanceof Promise){const c=Ie([i.element],!0);try{o=await o}catch{o=!1}o===!1&&c()}o!==!1&&this.hide()},{listenerSetter:this.listenerSetter}),i.element=l});if(!this.btnConfirmOnEnter&&t.length===2){const i=t.find(l=>!l.isCancel);i&&(this.btnConfirmOnEnter=i.element)}t.length>=3&&e.classList.add("is-vertical-layout"),e.append(...s),this.container.append(e)}attachScrollableListeners(t){return this.scrollable.attachBorderListeners(t)}onContentUpdate(){this.scrollable?.onAdditionalScroll?.()}show(){this.shown||(this.shown=!0,this.navigationItem={type:"popup",onPop:()=>{if(this.isConfirmationNeededOnClose){const t=this.isConfirmationNeededOnClose();if(t)return Promise.resolve(t).then(()=>{this.destroy()}),!1}return this.destroy()}},D.pushItem(this.navigationItem),xe(),A.append(this.element),this.element.offsetWidth,this.element.classList.add("active"),this.onContentUpdate(),this.withoutOverlay||(B.isOverlayActive=!0,Z.checkAnimations2(!0)),setTimeout(()=>{this.element.classList.contains("active")&&this.listenerSetter.add(document.body)("keydown",t=>{!this.btnConfirmOnEnter||this.btnConfirmOnEnter.disabled||C.POPUPS[C.POPUPS.length-1]!==this||(this.confirmShortcutIsSendShortcut?Be(t):t.key==="Enter")&&(Oe(this.btnConfirmOnEnter),ke(t))})},0))}hide(){this.destroyed||!this.navigationItem||D.backByItem(this.navigationItem)}forceHide(){return this.destroy()}destroy(){this.destroyed||(this.destroyed=!0,this.dispatchEvent("close"),this.element.classList.add("hiding"),this.element.classList.remove("active"),this.listenerSetter.removeAll(),this.middlewareHelper.destroy(),this.withoutOverlay||(B.isOverlayActive=!1),D.removeItem(this.navigationItem),this.navigationItem=void 0,Te(C.POPUPS,this),le(),setTimeout(()=>{this.element.remove(),this.dispatchEvent("closeAfterTimeout"),this.cleanup(),this.scrollable?.destroy(),this.withoutOverlay||Z.checkAnimations2(!1)},250))}appendSolid(t){const e=document.createElement("div");(this.scrollable||this.body).prepend(e);const s=Ve(t,e);this.addEventListener("closeAfterTimeout",s)}static reAppend(){this.POPUPS.forEach(t=>{const{element:e,container:s}=t,i=e.parentElement;i&&i!==A&&A!==s&&A.append(e)})}static getPopups(t){return this.POPUPS.filter(e=>e instanceof t)}static createPopup(t,...e){return new t(...e)}};C.POPUPS=[];let N=C;const bt=n=>(n.find(e=>e.isCancel)||n.push({langKey:"Cancel",isCancel:!0}),n);function ot(n,t){let e,s,i,l=0,r=0,o=0,c=0,f=0;const h=4,d={},y=50,b=200,x=200;n.complete?K():n.onload=K;function re(){s.removeEventListener("mousedown",O),s.removeEventListener("touchstart",O),s.removeEventListener("wheel",q),document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E),document.removeEventListener("mousemove",v),document.removeEventListener("touchmove",v),document.removeEventListener("keypress",G),e.remove(),s.remove(),i.remove()}function ae(){s.addEventListener("mousedown",O,!1),s.addEventListener("touchstart",O,!1),s.addEventListener("wheel",q,!1),document.addEventListener("keypress",G,!1)}function K(){n.classList.add("crop-blur"),n.draggable=!1,i=new Image,i.src=n.src,i.draggable=!1,i.classList.add("crop-overlay-image"),t||(t=document.createElement("canvas")),e=document.createElement("div"),e.classList.add("crop-component"),s=document.createElement("div"),s.classList.add("crop-overlay");const a=document.createElement("div");a.classList.add("crop-overlay-color"),e.appendChild(s),n.parentNode.appendChild(e),e.appendChild(i),e.appendChild(n),e.appendChild(a),s.appendChild(i),i.style.maxWidth=n.width+"px",f=n.naturalWidth/n.offsetWidth;const p=n.offsetWidth/2-b/2,m=n.offsetHeight/2-x/2;j(b,x),F(p,m),I(p,m),ae()}function j(a,u){o=a*f,c=u*f,s.style.width=a+"px",s.style.height=u+"px"}function F(a,u){r=u*f,l=a*f,i.style.top=-u+"px",i.style.left=-a+"px"}function I(a,u){s.style.top=u+"px",s.style.left=a+"px"}function ce(a){d.container_width=s.offsetWidth,d.container_height=s.offsetHeight,d.container_left=s.offsetLeft,d.container_top=s.offsetTop,d.mouse_x=(a.clientX||a.pageX||a.touches&&a.touches[0].clientX)+window.scrollX,d.mouse_y=(a.clientY||a.pageY||a.touches&&a.touches[0].clientY)+window.scrollY}function M(a){a=a*Math.PI*2;const u=Math.floor(s.clientWidth+a),p=Math.floor(s.clientHeight+a),m=i.clientWidth,k=i.clientHeight;let g,w;if(u<y)return;if(u>m)return;g=s.offsetLeft-a/2,w=s.offsetTop-a/2;const fe=g+u,he=w+p;g<0&&(g=0),w<0&&(w=0),!(fe>m)&&(he>k||(j(u,u),F(g,w),I(g,w)))}function G(a){switch(a.preventDefault(),String.fromCharCode(a.charCode)){case"+":M(h);break;case"-":M(-h);break}}function q(a){a.preventDefault(),M(a.deltaY>0?1:-1)}function O(a){a.preventDefault(),a.stopPropagation(),ce(a),document.addEventListener("mousemove",v),document.addEventListener("touchmove",v),document.addEventListener("mouseup",E),document.addEventListener("touchend",E)}function E(a){a.preventDefault(),document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E),document.removeEventListener("mousemove",v),document.removeEventListener("touchmove",v)}function v(a){const u={x:0,y:0};a.preventDefault(),a.stopPropagation(),u.x=a.pageX||a.touches&&a.touches[0].pageX,u.y=a.pageY||a.touches&&a.touches[0].pageY;let p=u.x-(d.mouse_x-d.container_left),m=u.y-(d.mouse_y-d.container_top);const k=s.offsetWidth,g=s.offsetHeight;p<0?p=0:p>i.offsetWidth-k&&(p=i.offsetWidth-k),m<0?m=0:m>i.offsetHeight-g&&(m=i.offsetHeight-g),F(p,m),I(p,m)}function de(){t.width=o,t.height=c,t.getContext("2d").drawImage(n,l,r,o,c,0,0,o,c)}return{crop:de,removeHandlers:re}}function lt(n,t){return new Promise(e=>{const s=new FileReader;s.addEventListener("loadend",i=>{e(i.target.result)}),s[t](n)})}function rt(n){return lt(n,"readAsDataURL")}class Et extends N{constructor(t={}){super("popup-avatar",{closable:!0}),this.image=new Image,this.cropper={crop:()=>{},removeHandlers:()=>{}},this.h6=document.createElement("h6"),ie(this.h6,"Popup.Avatar.Title"),this.btnClose.classList.remove("btn-icon"),this.header.append(this.h6),this.cropContainer=document.createElement("div"),this.cropContainer.classList.add("crop"),this.cropContainer.append(this.image),t.isForum&&this.cropContainer.classList.add("is-forum"),this.input=document.createElement("input"),this.input.type="file",this.input.style.display="none",this.listenerSetter.add(this.input)("change",e=>{const s=e.target.files[0];s&&rt(s).then(i=>{this.image=new Image,this.cropContainer.append(this.image),this.image.src=i,this.image.onload=()=>{this.show(),this.cropper=ot(this.image,this.canvas),this.input.value=""}})},!1),this.btnConfirm=pe("btn-primary btn-color-primary btn-circle btn-crop btn-icon z-depth-1",{noRipple:!0,icon:"check"}),T(this.btnConfirm,()=>{this.cropper.crop(),this.hide(),this.canvas.toBlob(e=>{this.blob=e,this.darkenCanvas(),this.resolve()},"image/jpeg",1)},{listenerSetter:this.listenerSetter}),this.container.append(this.cropContainer,this.btnConfirm,this.input),this.addEventListener("closeAfterTimeout",()=>{this.cropper.removeHandlers(),this.image&&this.image.remove()})}resolve(){this.onCrop(()=>Ne.upload(this.blob))}open(t,e){this.canvas=t,this.onCrop=e,this.input.click()}darkenCanvas(){const t=this.canvas.getContext("2d");t.fillStyle="rgba(0, 0, 0, 0.3)",t.fillRect(0,0,this.canvas.width,this.canvas.height)}}export{Ct as D,N as P,Et as a,Je as b,ze as c,et as d,bt as e,De as f,se as g,mt as h,$ as i,ht as j,ut as k,Xe as l,gt as m,Qe as n,Ze as o,rt as p,Be as q,Ve as r,R as s,pt as t,yt as u};
//# sourceMappingURL=avatar-DMlEGhIF.js.map
