const __vite__fileDeps=["./pageIm-CX-Mp6nX.js","./index-_yd-8GWv.js","./index-BgXCG9Mv.css","./page-DEJffvkR.js","./pageSignUp-CMvKvWWp.js","./loginPage-zFWK6X46.js","./inputField-BaOnrCSn.js","./avatar-DMlEGhIF.js","./scrollable-ZZit1Gk2.js","./putPreloader-Bd_6MIy9.js","./pagePassword-D4LFMAlV.js","./htmlToSpan-BGKOiI1T.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as y,s as S,a as h,i as _,b as E,_ as m,I as f,c as v,m as T,l as g}from"./index-_yd-8GWv.js";import{P as k}from"./page-DEJffvkR.js";import I from"./pageSignIn-C3D36QN-.js";import{C as A,T as D}from"./codeInputField-BN1b74Uu.js";import"./putPreloader-Bd_6MIy9.js";import"./pageSignQR-DL4sTEXi.js";import"./textToSvgURL-Cnw_Q8Rw.js";import"./inputField-BaOnrCSn.js";import"./countryInputField-BpNY3yDI.js";import"./scrollable-ZZit1Gk2.js";let r=null,c=null,C=null,o,n,l,u;const b=()=>{setTimeout(()=>{l?.remove(),u?.remove()},300)},L=t=>{o.setAttribute("disabled","true");const s={phone_number:r.phone_number,phone_code_hash:r.phone_code_hash,phone_code:t};E.managers.apiManager.invokeApi("auth.signIn",s,{ignoreErrors:!0}).then(async e=>{switch(e._){case"auth.authorization":await E.managers.apiManager.setUser(e.user),m(()=>import("./pageIm-CX-Mp6nX.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(a=>{a.default.mount()}),b();break;case"auth.authorizationSignUpRequired":m(()=>import("./pageSignUp-CMvKvWWp.js"),__vite__mapDeps([4,1,2,5,3,6,7,8,9]),import.meta.url).then(a=>{a.default.mount({phone_number:r.phone_number,phone_code_hash:r.phone_code_hash})}),b();break}}).catch(async e=>{let a=!1;switch(e.type){case"SESSION_PASSWORD_NEEDED":a=!0,e.handled=!0,await(await m(()=>import("./pagePassword-D4LFMAlV.js"),__vite__mapDeps([10,1,2,9,3,11,6,5]),import.meta.url)).default.mount(),setTimeout(()=>{o.value=""},300);break;case"PHONE_CODE_EXPIRED":o.classList.add("error"),h(n.label,_("PHONE_CODE_EXPIRED"));break;case"PHONE_CODE_EMPTY":case"PHONE_CODE_INVALID":o.classList.add("error"),h(n.label,_("PHONE_CODE_INVALID"));break;default:n.label.innerText=e.type;break}a||n.select(),o.removeAttribute("disabled")})},O=()=>{p.pageEl.querySelector(".input-wrapper").append(n.container);const t=p.pageEl.querySelector(".phone-edit");t.append(f("edit")),v(t,()=>I.mount())},P=()=>{const t=p.pageEl.querySelector(".auth-image"),s=T.isMobile?100:166;if(r.type._==="auth.sentCodeTypeFragmentSms"){t.firstElementChild&&(l?.remove(),l=void 0,t.replaceChildren());const e=document.createElement("div");return e.classList.add("media-sticker-wrapper"),t.append(e),g.loadAnimationAsAsset({container:e,loop:!0,autoplay:!0,width:s,height:s},"jolly_roger").then(a=>(u=a,g.waitForFirstFrame(a))).then(()=>{})}else return t.firstElementChild&&(u?.remove(),u=void 0,t.replaceChildren()),l=new D(n,s),t.append(l.container),l.load()},p=new k("page-authCode",!0,O,t=>{if(r=t,!c)c=p.pageEl.getElementsByClassName("phone")[0],C=p.pageEl.getElementsByClassName("sent-type")[0];else{o.value="";const i=document.createEvent("HTMLEvents");i.initEvent("input",!1,!0),o.dispatchEvent(i)}const s=r.type.length;n||(n=new A({label:"Code",name:y(),length:s,onFill:i=>{L(i)}}),o=n.input),n.options.length=s,c.innerText=r.phone_number;let e,a;const d=r.type;switch(d._){case"auth.sentCodeTypeSms":e="Login.Code.SentSms";break;case"auth.sentCodeTypeApp":e="Login.Code.SentInApp";break;case"auth.sentCodeTypeCall":e="Login.Code.SentCall";break;case"auth.sentCodeTypeFragmentSms":e="PhoneNumber.Code.Fragment.Info";const i=document.createElement("a");S(i),i.href=d.url,a=[i];break;default:e="Login.Code.SentUnknown",a=[d._];break}return h(C,_(e,a)),E.managers.appStateManager.pushToState("authState",{_:"authStateAuthCode",sentCode:t}),P().catch(()=>{})},()=>{o.focus()});export{p as default};
//# sourceMappingURL=pageAuthCode-RO_s3HeI.js.map
