import{a as o,A as s,_ as r,S as m}from"./index-3d0aba44.js";import{p as h}from"./putPreloader-6162bcd3.js";import{P as d}from"./page-a285fe03.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-d96c85f2.js"),["./pageIm-d96c85f2.js","./index-3d0aba44.js","./index-75cbdc15.css","./page-a285fe03.js"],import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-87ef918b.js"),["./pagePassword-87ef918b.js","./index-3d0aba44.js","./index-75cbdc15.css","./putPreloader-6162bcd3.js","./page-a285fe03.js","./button-d946675e.js","./htmlToSpan-396834f4.js","./wrapEmojiText-ac43e511.js","./loginPage-0862250e.js"],import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-58af4975.js"),["./pageSignIn-58af4975.js","./index-3d0aba44.js","./index-75cbdc15.css","./putPreloader-6162bcd3.js","./page-a285fe03.js","./countryInputField-adbba558.js","./button-d946675e.js","./wrapEmojiText-ac43e511.js","./scrollable-8bae0d37.js","./pageSignQR-a7d85abe.js","./textToSvgURL-c6ebb454.js"],import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-a7d85abe.js").then(_=>_.a),["./pageSignQR-a7d85abe.js","./index-3d0aba44.js","./index-75cbdc15.css","./page-a285fe03.js","./button-d946675e.js","./putPreloader-6162bcd3.js","./textToSvgURL-c6ebb454.js"],import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-17250058.js.map
