import{m as B,O as N,n as $,W as w,r as S,a3 as H,v,aw as z,d as _,s as V,o as R,c as k,a as y,A as P,ax as F,u as e,ay as x,B as f,L as h,D as I,h as A,t as D,M as C,a8 as U,a5 as J,y as Q,a2 as X,j as Y,an as Z,x as ee,P as ae,av as K}from"./index-DN1znJ5c.js";import{u as L,b as oe,c as le,j as se,e as ne,a as te,h as re}from"./el-button-QazIz17Z.js";import{U as G,C as ie,u as de,d as ue}from"./index-x4g2YQ5v.js";const M=B({modelValue:{type:[String,Number,Boolean],default:void 0},size:L,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),ce=B({...M,border:Boolean}),T={[G]:o=>N(o)||$(o)||w(o),[ie]:o=>N(o)||$(o)||w(o)},j=Symbol("radioGroupKey"),O=(o,u)=>{const s=S(),a=H(j,void 0),i=v(()=>!!a),c=v(()=>z(o.value)?o.label:o.value),r=v({get(){return i.value?a.modelValue:o.modelValue},set(n){i.value?a.changeEvent(n):u&&u(G,n),s.value.checked=o.modelValue===c.value}}),d=oe(v(()=>a==null?void 0:a.size)),l=le(v(()=>a==null?void 0:a.disabled)),t=S(!1),p=v(()=>l.value||i.value&&r.value!==c.value?-1:0);return se({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},v(()=>i.value&&z(o.value))),{radioRef:s,isGroup:i,radioGroup:a,focus:t,size:d,disabled:l,tabIndex:p,modelValue:r,actualValue:c}},pe=_({name:"ElRadio"}),me=_({...pe,props:ce,emits:T,setup(o,{emit:u}){const s=o,a=V("radio"),{radioRef:i,radioGroup:c,focus:r,size:d,disabled:l,modelValue:t,actualValue:p}=O(s,u);function n(){U(()=>u("change",t.value))}return(m,g)=>{var b;return R(),k("label",{class:f([e(a).b(),e(a).is("disabled",e(l)),e(a).is("focus",e(r)),e(a).is("bordered",m.border),e(a).is("checked",e(t)===e(p)),e(a).m(e(d))])},[y("span",{class:f([e(a).e("input"),e(a).is("disabled",e(l)),e(a).is("checked",e(t)===e(p))])},[P(y("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":E=>x(t)?t.value=E:null,class:f(e(a).e("original")),value:e(p),name:m.name||((b=e(c))==null?void 0:b.name),disabled:e(l),checked:e(t)===e(p),type:"radio",onFocus:E=>r.value=!0,onBlur:E=>r.value=!1,onChange:n,onClick:h(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[F,e(t)]]),y("span",{class:f(e(a).e("inner"))},null,2)],2),y("span",{class:f(e(a).e("label")),onKeydown:h(()=>{},["stop"])},[I(m.$slots,"default",{},()=>[A(D(m.label),1)])],42,["onKeydown"])],2)}}});var ve=C(me,[["__file","radio.vue"]]);const fe=B({...M}),be=_({name:"ElRadioButton"}),ye=_({...be,props:fe,setup(o){const u=o,s=V("radio"),{radioRef:a,focus:i,size:c,disabled:r,modelValue:d,radioGroup:l,actualValue:t}=O(u),p=v(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(n,m)=>{var g;return R(),k("label",{class:f([e(s).b("button"),e(s).is("active",e(d)===e(t)),e(s).is("disabled",e(r)),e(s).is("focus",e(i)),e(s).bm("button",e(c))])},[P(y("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":b=>x(d)?d.value=b:null,class:f(e(s).be("button","original-radio")),value:e(t),type:"radio",name:n.name||((g=e(l))==null?void 0:g.name),disabled:e(r),onFocus:b=>i.value=!0,onBlur:b=>i.value=!1,onClick:h(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[F,e(d)]]),y("span",{class:f(e(s).be("button","inner")),style:J(e(d)===e(t)?e(p):{}),onKeydown:h(()=>{},["stop"])},[I(n.$slots,"default",{},()=>[A(D(n.label),1)])],46,["onKeydown"])],2)}}});var W=C(ye,[["__file","radio-button.vue"]]);const _e=B({id:{type:String,default:void 0},size:L,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...de(["ariaLabel"])}),ge=T,he=_({name:"ElRadioGroup"}),Be=_({...he,props:_e,emits:ge,setup(o,{emit:u}){const s=o,a=V("radio"),i=ne(),c=S(),{formItem:r}=te(),{inputId:d,isLabeledByFormItem:l}=re(s,{formItemContext:r}),t=n=>{u(G,n),U(()=>u("change",n))};Q(()=>{const n=c.value.querySelectorAll("[type=radio]"),m=n[0];!Array.from(n).some(g=>g.checked)&&m&&(m.tabIndex=0)});const p=v(()=>s.name||i.value);return X(j,Y({...Z(s),changeEvent:t,name:p})),ee(()=>s.modelValue,()=>{s.validateEvent&&(r==null||r.validate("change").catch(n=>ue()))}),(n,m)=>(R(),k("div",{id:e(d),ref_key:"radioGroupRef",ref:c,class:f(e(a).b("group")),role:"radiogroup","aria-label":e(l)?void 0:n.ariaLabel||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[I(n.$slots,"default")],10,["id","aria-label","aria-labelledby"]))}});var q=C(Be,[["__file","radio-group.vue"]]);const Re=ae(ve,{RadioButton:W,RadioGroup:q}),ke=K(q);K(W);export{ke as E,Re as a};
