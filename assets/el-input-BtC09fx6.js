import{V as Ie,v as d,Z as He,U as De,n as ge,m as Ke,T as Z,O as q,d as Ee,aP as je,aI as Ue,s as be,X as Q,r as _,x as G,a8 as V,y as We,a4 as Xe,o as p,c as g,I as v,F as J,B as h,u as t,D,a as N,g as w,w as R,aa as K,E as L,ah as ee,b as Ye,ar as Ze,L as qe,ac as Qe,t as j,a5 as _e,M as Ge,aQ as Je,aR as et,q as tt,ab as xe,P as at}from"./index-DN1znJ5c.js";import{d as ot,a as nt,c as st}from"./index-C6AKQ8Ir.js";import{u as it,i as we,a as rt,h as lt,b as ut,c as dt,V as ct}from"./el-button-QazIz17Z.js";import{u as pt,U as te,d as Se}from"./index-x4g2YQ5v.js";const ft=()=>Ie&&/firefox/i.test(window.navigator.userAgent),vt=o=>o,mt=["class","style"],ht=/^on[A-Z]/,yt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:l}=o,a=d(()=>((l==null?void 0:l.value)||[]).concat(mt)),s=De();return s?d(()=>{var r;return He(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([u])=>!a.value.includes(u)&&!(m&&ht.test(u))))}):d(()=>({}))};function gt(o){let m;function l(){if(o.value==null)return;const{selectionStart:s,selectionEnd:r,value:u}=o.value;if(s==null||r==null)return;const b=u.slice(0,Math.max(0,s)),c=u.slice(Math.max(0,r));m={selectionStart:s,selectionEnd:r,value:u,beforeTxt:b,afterTxt:c}}function a(){if(o.value==null||m==null)return;const{value:s}=o.value,{beforeTxt:r,afterTxt:u,selectionStart:b}=m;if(r==null||u==null||b==null)return;let c=s.length;if(s.endsWith(u))c=s.length-u.length;else if(s.startsWith(r))c=r.length;else{const S=r[b-1],C=s.indexOf(S,b-1);C!==-1&&(c=C+1)}o.value.setSelectionRange(c,c)}return[l,a]}let y;const bt=`
  height:0 !important;
  visibility:hidden !important;
  ${ft()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,xt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function wt(o){const m=window.getComputedStyle(o),l=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),s=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:xt.map(u=>`${u}:${m.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:l}}function Ce(o,m=1,l){var a;y||(y=document.createElement("textarea"),document.body.appendChild(y));const{paddingSize:s,borderSize:r,boxSizing:u,contextStyle:b}=wt(o);y.setAttribute("style",`${b};${bt}`),y.value=o.value||o.placeholder||"";let c=y.scrollHeight;const S={};u==="border-box"?c=c+r:u==="content-box"&&(c=c-s),y.value="";const C=y.scrollHeight-s;if(ge(m)){let f=C*m;u==="border-box"&&(f=f+s+r),c=Math.max(f,c),S.minHeight=`${f}px`}if(ge(l)){let f=C*l;u==="border-box"&&(f=f+s+r),c=Math.min(f,c)}return S.height=`${c}px`,(a=y.parentNode)==null||a.removeChild(y),y=void 0,S}const St=Ke({id:{type:String,default:void 0},size:it,disabled:Boolean,modelValue:{type:Z([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Z([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:we},prefixIcon:{type:we},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Z([Object,Array,String]),default:()=>vt({})},autofocus:Boolean,rows:{type:Number,default:2},...pt(["ariaLabel"])}),Ct={[te]:o=>q(o),input:o=>q(o),change:o=>q(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},It=Ee({name:"ElInput",inheritAttrs:!1}),Et=Ee({...It,props:St,emits:Ct,setup(o,{expose:m,emit:l}){const a=o,s=je(),r=Ue(),u=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e}),b=d(()=>[a.type==="textarea"?oe.b():n.b(),n.m(ze.value),n.is("disabled",E.value),n.is("exceed",Ne.value),{[n.b("group")]:r.prepend||r.append,[n.m("prefix")]:r.prefix||a.prefixIcon,[n.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[n.bm("suffix","password-clear")]:H.value&&W.value,[n.b("hidden")]:a.type==="hidden"},s.class]),c=d(()=>[n.e("wrapper"),n.is("focus",A.value)]),S=yt({excludeKeys:d(()=>Object.keys(u.value))}),{form:C,formItem:f}=rt(),{inputId:ae}=lt(a,{formItemContext:f}),ze=ut(),E=dt(),n=be("input"),oe=be("textarea"),M=Q(),x=Q(),U=_(!1),B=_(!1),ne=_(),O=Q(a.inputStyle),z=d(()=>M.value||x.value),{wrapperRef:Pe,isFocused:A}=ot(z,{afterBlur(){var e;a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"blur").catch(i=>Se()))}}),se=d(()=>{var e;return(e=C==null?void 0:C.statusIcon)!=null?e:!1}),F=d(()=>(f==null?void 0:f.validateState)||""),ie=d(()=>F.value&&ct[F.value]),ke=d(()=>B.value?Je:et),Ve=d(()=>[s.style]),re=d(()=>[a.inputStyle,O.value,{resize:a.resize}]),I=d(()=>tt(a.modelValue)?"":String(a.modelValue)),H=d(()=>a.clearable&&!E.value&&!a.readonly&&!!I.value&&(A.value||U.value)),W=d(()=>a.showPassword&&!E.value&&!a.readonly&&!!I.value&&(!!I.value||A.value)),P=d(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!E.value&&!a.readonly&&!a.showPassword),X=d(()=>I.value.length),Ne=d(()=>!!P.value&&X.value>Number(a.maxlength)),Fe=d(()=>!!r.suffix||!!a.suffixIcon||H.value||a.showPassword||P.value||!!F.value&&se.value),[Te,$e]=gt(M);nt(x,e=>{if(Re(),!P.value||a.resize!=="both")return;const i=e[0],{width:k}=i.contentRect;ne.value={right:`calc(100% - ${k+15+6}px)`}});const T=()=>{const{type:e,autosize:i}=a;if(!(!Ie||e!=="textarea"||!x.value))if(i){const k=xe(i)?i.minRows:void 0,he=xe(i)?i.maxRows:void 0,ye=Ce(x.value,k,he);O.value={overflowY:"hidden",...ye},V(()=>{x.value.offsetHeight,O.value=ye})}else O.value={minHeight:Ce(x.value).minHeight}},Re=(e=>{let i=!1;return()=>{var k;if(i||!a.autosize)return;((k=x.value)==null?void 0:k.offsetParent)===null||(e(),i=!0)}})(T),$=()=>{const e=z.value,i=a.formatter?a.formatter(I.value):I.value;!e||e.value===i||(e.value=i)},Y=async e=>{Te();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i),!ue.value){if(i===I.value){$();return}l(te,i),l("input",i),await V(),$(),$e()}},le=e=>{l("change",e.target.value)},{isComposing:ue,handleCompositionStart:de,handleCompositionUpdate:ce,handleCompositionEnd:pe}=st({emit:l,afterComposition:Y}),Le=()=>{B.value=!B.value,fe()},fe=async()=>{var e;await V(),(e=z.value)==null||e.focus()},Me=()=>{var e;return(e=z.value)==null?void 0:e.blur()},Be=e=>{U.value=!1,l("mouseleave",e)},Oe=e=>{U.value=!0,l("mouseenter",e)},ve=e=>{l("keydown",e)},Ae=()=>{var e;(e=z.value)==null||e.select()},me=()=>{l(te,""),l("change",""),l("clear"),l("input","")};return G(()=>a.modelValue,()=>{var e;V(()=>T()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(i=>Se()))}),G(I,()=>$()),G(()=>a.type,async()=>{await V(),$(),T()}),We(()=>{!a.formatter&&a.parser,$(),V(T)}),m({input:M,textarea:x,ref:z,textareaStyle:re,autosize:Xe(a,"autosize"),isComposing:ue,focus:fe,blur:Me,select:Ae,clear:me,resizeTextarea:T}),(e,i)=>(p(),g("div",ee(t(u),{class:[t(b),{[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend}],style:t(Ve),role:e.containerRole,onMouseenter:Oe,onMouseleave:Be}),[v(" input "),e.type!=="textarea"?(p(),g(J,{key:0},[v(" prepend slot "),e.$slots.prepend?(p(),g("div",{key:0,class:h(t(n).be("group","prepend"))},[D(e.$slots,"prepend")],2)):v("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Pe,class:h(t(c))},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),g("span",{key:0,class:h(t(n).e("prefix"))},[N("span",{class:h(t(n).e("prefix-inner"))},[D(e.$slots,"prefix"),e.prefixIcon?(p(),w(t(L),{key:0,class:h(t(n).e("icon"))},{default:R(()=>[(p(),w(K(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),N("input",ee({id:t(ae),ref_key:"input",ref:M,class:t(n).e("inner")},t(S),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?B.value?"text":"password":e.type,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:t(de),onCompositionupdate:t(ce),onCompositionend:t(pe),onInput:Y,onChange:le,onKeydown:ve}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","onCompositionstart","onCompositionupdate","onCompositionend"]),v(" suffix slot "),t(Fe)?(p(),g("span",{key:1,class:h(t(n).e("suffix"))},[N("span",{class:h(t(n).e("suffix-inner"))},[!t(H)||!t(W)||!t(P)?(p(),g(J,{key:0},[D(e.$slots,"suffix"),e.suffixIcon?(p(),w(t(L),{key:0,class:h(t(n).e("icon"))},{default:R(()=>[(p(),w(K(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(H)?(p(),w(t(L),{key:1,class:h([t(n).e("icon"),t(n).e("clear")]),onMousedown:qe(t(Qe),["prevent"]),onClick:me},{default:R(()=>[Ye(t(Ze))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(W)?(p(),w(t(L),{key:2,class:h([t(n).e("icon"),t(n).e("password")]),onClick:Le},{default:R(()=>[(p(),w(K(t(ke))))]),_:1},8,["class"])):v("v-if",!0),t(P)?(p(),g("span",{key:3,class:h(t(n).e("count"))},[N("span",{class:h(t(n).e("count-inner"))},j(t(X))+" / "+j(e.maxlength),3)],2)):v("v-if",!0),t(F)&&t(ie)&&t(se)?(p(),w(t(L),{key:4,class:h([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(F)==="validating")])},{default:R(()=>[(p(),w(K(t(ie))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(p(),g("div",{key:1,class:h(t(n).be("group","append"))},[D(e.$slots,"append")],2)):v("v-if",!0)],64)):(p(),g(J,{key:1},[v(" textarea "),N("textarea",ee({id:t(ae),ref_key:"textarea",ref:x,class:[t(oe).e("inner"),t(n).is("focus",t(A))]},t(S),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(re),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:t(de),onCompositionupdate:t(ce),onCompositionend:t(pe),onInput:Y,onChange:le,onKeydown:ve}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","onCompositionstart","onCompositionupdate","onCompositionend"]),t(P)?(p(),g("span",{key:0,style:_e(ne.value),class:h(t(n).e("count"))},j(t(X))+" / "+j(e.maxlength),7)):v("v-if",!0)],64))],16,["role"]))}});var zt=Ge(Et,[["__file","input.vue"]]);const Tt=at(zt);export{Tt as E,vt as m};
