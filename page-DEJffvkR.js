import{e as U,q as D,t as q,u as z,v as tt,i as et,I as st,x as N,y as it,z as nt,p as at,B as rt,f as ot,C as ct,D as K,h as lt,E as dt,F as ut,G as _,H as ft,c as mt,M as ht,k as vt}from"./index-_yd-8GWv.js";function X(t,e){if(!t)return null;if(t.parentElement===e)return t;for(;t.parentElement;)if(t=t.parentElement,t.parentElement===e)return t;return null}let gt=0;function pt(t,e=()=>Promise.resolve(),s=null,d=!1,r=t){if(t.querySelector(".c-ripple"))return;t.classList.add("rp");const f=document.createElement("div");f.classList.add("c-ripple"),t.classList.contains("rp-square")&&f.classList.add("is-square"),t[d?"prepend":"append"](f);let g;const P=(p,h)=>{const c=Date.now(),n=document.createElement("div"),y=gt++,l=+window.getComputedStyle(f).getPropertyValue("--ripple-duration").replace("s","")*1e3,o=g=()=>{const m=Date.now()-c,i=()=>{tt.mutate(()=>{n.remove()}),s?.(y)};if(m<l){const v=Math.max(l-m,l/2);setTimeout(()=>n.classList.add("hiding"),Math.max(v-l/2,0)),setTimeout(i,v)}else n.classList.add("hiding"),setTimeout(i,l/2);U||(window.removeEventListener("contextmenu",g),window.removeEventListener("mousemove",g)),g=null,w=!1};e?.(y),q(()=>{if(o!==g)return;const m=f.getBoundingClientRect();n.classList.add("c-ripple__circle");const i=p-m.left,v=h-m.top,S=Math.sqrt((Math.abs(v-m.height/2)+m.height/2)**2+(Math.abs(i-m.width/2)+m.width/2)**2),u=i-S/2,k=v-S/2;n.style.width=n.style.height=S+"px",n.style.left=u+"px",n.style.top=k+"px",n.style.opacity="0",f.append(n),n.offsetWidth,n.style.opacity=""})},T=p=>p.target!==t&&(["BUTTON","A"].includes(p.target.tagName)||z(p.target,"c-ripple")!==f)&&(r===t||!X(p.target,r))&&!z(p.target,"checkbox-field");let w=!1;if(U){const p=()=>{g?.()},h=c=>{if(!D.isAvailable("animations")||c.touches.length>1||w||T(c))return;w=!0;const{clientX:n,clientY:y}=c.touches[0];P(n,y),r.addEventListener("touchend",p,{once:!0}),window.addEventListener("touchmove",l=>{l.cancelBubble=!0,l.stopPropagation(),p(),r.removeEventListener("touchend",p)},{once:!0})};return r.addEventListener("touchstart",h,{passive:!0}),{dispose:()=>r.removeEventListener("touchstart",h),element:f}}else{const p=h=>{if(![0,2].includes(h.button)||!D.isAvailable("animations")||r.dataset.ripple==="0"||T(h))return;if(w){w=!1;return}const{clientX:c,clientY:n}=h;P(c,n),window.addEventListener("mouseup",g,{once:!0,passive:!0}),window.addEventListener("contextmenu",g,{once:!0,passive:!0})};return r.addEventListener("mousedown",p,{passive:!0}),{dispose:()=>r.removeEventListener("mousedown",p),element:f}}}function yt(t,e={}){const s=document.createElement(e.asLink?"a":e.asDiv?"div":"button");return s.className=t,e.noRipple||(e.rippleSquare&&s.classList.add("rp-square"),pt(s)),e.icon&&wt(s,e.icon,!1),e.onlyMobile&&s.classList.add("only-handhelds"),e.disabled&&s.setAttribute("disabled","true"),e.text&&s.append(et(e.text,e.textArgs)),s}function wt(t,e,s=t.querySelector(".button-icon")){const d=st(e,"button-icon");return s?s.replaceWith(d):t.append(d),d}const Et=(t,e={})=>{const s=t?.split(" ");return yt("btn-icon"+(s?.length>1?" "+s.slice(1).join(" "):""),{icon:s?.[0]||void 0,...e})};function Lt(){const t=Et("back");return t.addEventListener("click",async()=>{await N.set({should_animate_main:1});const e=it(await N.get("previous_account"));await N.delete("previous_account");const s=document.getElementById("auth-pages");s.classList.add("auth-pages-exit"),await nt(),s.classList.add("auth-pages-exiting"),await at(200),rt(e)}),t}function R(t,e){if(!t?.parentNode)return-1;if(e)return Array.from(t.parentNode.childNodes).indexOf(t);let s=0;for(;(t=t.previousElementSibling)!==null;)++s;return s}function x(t,e){return lt.isRTL&&(t=-t),`translate3d(${t}px, ${e}px, 0)`}const St={callback:(t,e,s)=>{const d=e.getBoundingClientRect().width,r=[t,e];return s&&r.reverse(),r[0].style.filter="brightness(80%)",r[0].style.transform=x(-d*.25,0),r[1].style.transform=x(d,0),t.classList.add("active"),t.offsetWidth,t.style.transform="",t.style.filter="",()=>{e.style.transform=e.style.filter=""}},animateFirst:!1},bt={callback:(t,e,s)=>{const d=e.getBoundingClientRect().width,r=[t,e];return s&&r.reverse(),r[0].style.transform=x(-d,0),r[1].style.transform=x(d,0),t.classList.add("active"),t.offsetWidth,t.style.transform="",()=>{e.style.transform=""}},animateFirst:!1},Tt={callback:(t,e,s)=>{const d=e.getBoundingClientRect().width,r=[t,e],f=["slide-right","slide-left"];return s&&(r.reverse(),f.reverse()),r[0].style.transform=x(-d,0),r[1].style.transform=x(d,0),t.classList.add("active",f[0]),e.classList.add(f[1]),t.offsetWidth,t.style.transform="",t.classList.remove(f[0]),()=>{e.style.transform="",e.classList.remove(f[1])}},animateFirst:!1},kt={navigation:St,premiumTabs:Tt,tabs:bt},Pt=t=>{let{content:e,type:s,transitionTime:d,onTransitionEnd:r,onTransitionStart:f,onTransitionStartAfter:E,isHeavy:g=!0,once:P=!1,withAnimationListener:T=!0,listenerSetter:w,animateFirst:p=!1}=t;const h=s,{callback:c,animateFirst:n}=kt[h]||{};e.dataset.animation=h,n!==void 0&&(p=n);const y=new Map;let l,o=null;if(T){const i=c?"transitionend":"animationend",v=L=>{ot(L),!(L.target.parentElement!==e||(y.get(L.target)?.(),L.target!==o))&&(!l&&g||(l&&(l.resolve(),l=void 0),r?.(m.prevId()),e.classList.remove("animating","backwards","disable-hover"),P&&(w?w.removeManual(e,i,v):e.removeEventListener(i,v),o=l=void 0,y.clear())))};w?w.add(e)(i,v):e.addEventListener(i,v)}function m(i,v=!0,L){L&&(o=L),i instanceof HTMLElement&&(i=R(i));const S=m.prevId();if(i===S)return!1;f?.(i);const u=e.children[i];if((!D.isAvailable("animations")||S===-1&&!p)&&(v=!1),!T){const a=e.dataset.timeout;a!==void 0&&clearTimeout(+a),delete e.dataset.timeout}if(!v){o?o.classList.remove("active","to","from"):u&&y.get(u)?.(),u&&(u.classList.remove("to","from"),u.classList.add("active")),e.classList.remove("animating","backwards","disable-hover"),o=u,r?.(i);return}T||(e.dataset.timeout=""+window.setTimeout(()=>{u.classList.remove("to"),o&&o.classList.remove("from"),e.classList.remove("animating","backwards","disable-hover"),delete e.dataset.timeout},d)),o&&(o.classList.remove("to"),o.classList.add("from")),e.classList.add("animating");const k=S<i;e.classList.toggle("backwards",!k);let A;if(u&&(c?A=c(u,o,k):u.classList.add("active"),E?.(i),u.classList.remove("from"),u.classList.add("to")),u){const a=u.dataset.transitionTimeout;a&&clearTimeout(+a),y.set(u,()=>{u.classList.remove("to"),y.delete(u)})}if(o){let a;const b=o,I=()=>{clearTimeout(a),b.classList.remove("active","from"),A?.(),y.delete(b)};u?(a=window.setTimeout(I,d+100),y.set(b,I)):(a=window.setTimeout(I,d+100),y.set(b,()=>{clearTimeout(a),y.delete(b)})),b.dataset.transitionTimeout=""+a,g&&(l||(l=ct()),K(l,d*2))}o=u}return m.prevId=()=>o?R(o):-1,m.getFrom=()=>o,m.setFrom=i=>o=i,m},H=250,Mt=600,$=1500,At=500;var G=(t=>(t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Static=2]="Static",t))(G||{});function Nt(t,e){return J({container:t,element:t,getElementPosition:()=>-t.scrollLeft,position:"start",axis:"x"})}function J(t){if(t.margin??(t.margin=0),t.maxDistance??(t.maxDistance=$),t.axis??(t.axis="y"),(!D.isAvailable("animations")||t.forceDuration===0)&&(t.forceDirection=2),t.forceDirection===2)return t.forceDuration=0,O(t);const e=dt().then(()=>O(t));return t.axis==="y"?K(e):e}function O(t){const{element:e,container:s,getNormalSize:d,getElementPosition:r,transitionFunction:f,axis:E,margin:g,position:P,forceDirection:T,maxDistance:w,forceDuration:p}=t;if(!ut(e))return _(s),Promise.resolve();const h=E==="y"?"top":"left",c=E==="y"?"bottom":"right",n=E==="y"?"height":"width",y=E==="y"?"scrollHeight":"scrollWidth",l=E==="y"?"scrollHeight":"offsetWidth",o=E==="y"?"scrollTop":"scrollLeft",m=e.getBoundingClientRect(),i=s.getBoundingClientRect?s.getBoundingClientRect():document.body.getBoundingClientRect(),v=m[h]-i[h],L=r?r({elementRect:m,containerRect:i,elementPosition:v}):v,S=e[l],u=d?d({rect:i}):i[n];let k=s[o];const A=s[y];let a;switch(P){case"start":a=L-g;break;case"end":a=m[c]-i[c]+g;break;case"nearest":case"center":if(S<u)a=L+S/2-u/2;else{if(t.fallbackToElementStartWhenCentering&&t.fallbackToElementStartWhenCentering!==e)return t.element=t.fallbackToElementStartWhenCentering,t.position="start",O(t);a=L-g}break}if(Math.abs(a-(g||0))<1)return _(s),Promise.resolve();let b;if(E==="y"&&T===void 0&&(a>w?(b=k+=a-w,a=w):a<-w&&(b=k+=a+w,a=-w)),a<0){const M=-k;a=Math.max(a,M)}else if(a>0){const M=A-(k+u);a=Math.min(a,M)}const I=k+a,C=Math.abs(a),B=p??H+C/$*(Mt-H),Y=Date.now(),j=f??(C<At?xt:It),W=()=>B?Math.min((Date.now()-Y)/B,1):1,F=()=>{b!==void 0&&(s[o]=b,b=void 0);const M=W(),Q=j(M),Z=a*(1-Q);return s[o]=Math.round(I-Z),M<1};if(!B||!a)return _(s),F(),Promise.resolve();if(t.startCallback){const M=A-Math.round(I+s[E==="y"?"offsetHeight":"offsetWidth"]);t.startCallback({scrollSize:A,scrollPosition:k,distanceToEnd:M,path:a,duration:B,containerRect:i,elementRect:m,getProgress:W})}return ft(F,s)}function It(t){return 1-(1-t)**5}function xt(t){return 1-(1-t)**3.5}function Dt(t,e,s,d,r=200,f,E){const g=Pt({content:e,type:t||e.dataset.animation==="tabs"?"tabs":"navigation",transitionTime:r,onTransitionEnd:d,listenerSetter:E});if(!t)return g;const P=new Proxy(g,{apply:(h,c,n)=>{const y=n[1]!==void 0?n[1]:!0;let l,o;n[0]instanceof HTMLElement?(l=R(n[0]),o=n[0]):(l=+n[0],o=t.querySelector(`[data-tab="${l}"]`)||t.children[l]),T(o,l,y)}}),T=async(h,c,n=!0)=>{const y=e.children[c];if(s){const i=s(c,y,n),v=i instanceof Promise?await i:i;if(v!==void 0&&!v)return}f&&f.scrollIntoViewNew({element:h.parentElement.children[c],position:"center",forceDirection:n?void 0:G.Static,forceDuration:r,axis:"x"}),D.isAvailable("animations")||(n=!1);const l=g.prevId();if(h.classList.contains("active")||c===l)return!1;const o=n?q:i=>i(),m=t.querySelector(p.toLowerCase()+".active");m&&o(()=>{m.classList.remove("active")}),w&&l!==-1&&n&&o(()=>{const i=h.querySelector("i"),v=h.parentElement.children[l].querySelector("i");v.classList.remove("animate"),i.classList.remove("animate");const L=v.parentElement.parentElement.offsetLeft-i.parentElement.parentElement.offsetLeft,S=v.clientWidth/i.clientWidth;i.style.transform=`translate3d(${L}px, 0, 0) scale3d(${S}, 1, 1)`,q(()=>{i.classList.add("animate"),i.style.transform="none"})}),o(()=>{h.classList.add("active")}),g(c,n)},w=!t.classList.contains("no-stripe"),p=t.firstElementChild.tagName;return mt(t,h=>{let c=h.target;if(c=X(c,t),!c)return!1;let n;if(c.dataset.tab){if(n=+c.dataset.tab,n===-1)return!1}else n=R(c);T(c,n)},{listenerSetter:E}),P}class Rt{constructor(){this.pageId=-1,this.pagesDiv=document.getElementById("auth-pages"),this.scrollableDiv=this.pagesDiv.querySelector(".scrollable"),this.selectTab=Dt(null,this.scrollableDiv.querySelector(".tabs-container"),null,()=>{this.page?.onShown&&this.page.onShown()})}setPage(e){if(e.isAuthPage){this.pagesDiv.style.display="";const s=R(e.pageEl);if(this.pageId===s)return;this.selectTab(s),this.pageId=s,this.scrollableDiv&&J({container:this.scrollableDiv,element:this.scrollableDiv.firstElementChild,position:"start"})}else this.pagesDiv.style.display="none",e.pageEl.style.display="",this.pageId=-1;this.page=e}}const V=new Rt;ht.pagesManager=V;class _t{constructor(e,s,d,r,f){this.isAuthPage=s,this.onFirstMount=d,this.onMount=r,this.onShown=f,this.installed=!1,this.pageEl=document.body.querySelector("."+e)}async mount(...e){if(this.onMount){const s=this.onMount(...e);s instanceof Promise&&await s}if(!this.installed){if(this.onFirstMount)try{const s=this.onFirstMount(...e);s instanceof Promise&&await s}catch(s){console.error("PAGE MOUNT ERROR:",s)}this.mountBackButtonIfAuth(),this.installed=!0}V.setPage(this)}mountBackButtonIfAuth(){if(!this.isAuthPage||vt()===1)return;const e=document.getElementById("auth-pages-close");e?.style.removeProperty("display"),e?.replaceChildren(),e?.append(Lt())}}export{yt as B,G as F,_t as P,Pt as T,Et as a,wt as b,Nt as c,J as d,X as f,Dt as h,pt as r,R as w};
//# sourceMappingURL=page-DEJffvkR.js.map
