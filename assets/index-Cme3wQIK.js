import{V as T,y as D,Y as K,r as y,U as z,a3 as R,v as q,u as m,n as le,M as ce,d as ae,a2 as fe,x as k,q as pe,D as U,a8 as M,O as ve,m as Ee,T as me,o as Te,g as ye,aL as be,P as Fe}from"./index-CoG93HgI.js";function $e(e){return e===void 0}let w;const Ve=e=>{var t;if(!T)return 0;if(w!==void 0)return w;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const s=n.offsetWidth;n.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",n.appendChild(r);const a=r.offsetWidth;return(t=n.parentNode)==null||t.removeChild(n),w=s-a,w};function je(e,t){if(!T)return;if(!t){e.scrollTop=0;return}const n=[];let s=t.offsetParent;for(;s!==null&&e!==s&&e.contains(s);)n.push(s),s=s.offsetParent;const r=t.offsetTop+n.reduce((b,F)=>b+F.offsetTop,0),a=r+t.offsetHeight,u=e.scrollTop,v=u+e.clientHeight;r<u?e.scrollTop=r:a>v&&(e.scrollTop=a-e.clientHeight)}const ue={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"};let E=[];const Y=e=>{const t=e;t.key===ue.esc&&E.forEach(n=>n(t))},he=e=>{D(()=>{E.length===0&&document.addEventListener("keydown",Y),T&&E.push(e)}),K(()=>{E=E.filter(t=>t!==e),E.length===0&&T&&document.removeEventListener("keydown",Y)})},J={current:0},X=y(0),we=2e3,G=Symbol("elZIndexContextKey"),_e=Symbol("zIndexContextKey"),We=e=>{const t=z()?R(G,J):J,n=z()?R(_e,void 0):void 0,s=q(()=>{const u=m(n);return le(u)?u:we}),r=q(()=>s.value+X.value),a=()=>(t.current++,X.value=t.current,r.value);return!T&&R(G),{initialZIndex:s,currentZIndex:r,nextZIndex:a}},x="focus-trap.focus-after-trapped",A="focus-trap.focus-after-released",Ie="focus-trap.focusout-prevented",Q={cancelable:!0,bubbles:!1},Pe={cancelable:!0,bubbles:!1},ee="focusAfterTrapped",te="focusAfterReleased",ge=Symbol("elFocusTrap"),B=y(),g=y(0),H=y(0);let _=0;const ie=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const r=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||r?NodeFilter.FILTER_SKIP:s.tabIndex>=0||s===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},ne=(e,t)=>{for(const n of e)if(!Se(n,t))return n},Se=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Ce=e=>{const t=ie(e),n=ne(t,e),s=ne(t.reverse(),e);return[n,s]},Le=e=>e instanceof HTMLInputElement&&"select"in e,p=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),H.value=window.performance.now(),e!==n&&Le(e)&&t&&e.select()}};function oe(e,t){const n=[...e],s=e.indexOf(t);return s!==-1&&n.splice(s,1),n}const Oe=()=>{let e=[];return{push:s=>{const r=e[0];r&&s!==r&&r.pause(),e=oe(e,s),e.unshift(s)},remove:s=>{var r,a;e=oe(e,s),(a=(r=e[0])==null?void 0:r.resume)==null||a.call(r)}}},Ne=(e,t=!1)=>{const n=document.activeElement;for(const s of e)if(p(s,t),document.activeElement!==n)return},se=Oe(),Re=()=>g.value>H.value,I=()=>{B.value="pointer",g.value=window.performance.now()},re=()=>{B.value="keyboard",g.value=window.performance.now()},ke=()=>(D(()=>{_===0&&(document.addEventListener("mousedown",I),document.addEventListener("touchstart",I),document.addEventListener("keydown",re)),_++}),K(()=>{_--,_<=0&&(document.removeEventListener("mousedown",I),document.removeEventListener("touchstart",I),document.removeEventListener("keydown",re))}),{focusReason:B,lastUserFocusTimestamp:g,lastAutomatedFocusTimestamp:H}),P=e=>new CustomEvent(Ie,{...Pe,detail:e}),xe=ae({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[ee,te,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=y();let s,r;const{focusReason:a}=ke();he(o=>{e.trapped&&!u.paused&&t("release-requested",o)});const u={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},v=o=>{if(!e.loop&&!e.trapped||u.paused)return;const{key:c,altKey:i,ctrlKey:d,metaKey:l,currentTarget:j,shiftKey:W}=o,{loop:Z}=e,de=c===ue.tab&&!i&&!d&&!l,h=document.activeElement;if(de&&h){const L=j,[O,N]=Ce(L);if(O&&N){if(!W&&h===N){const f=P({focusReason:a.value});t("focusout-prevented",f),f.defaultPrevented||(o.preventDefault(),Z&&p(O,!0))}else if(W&&[O,L].includes(h)){const f=P({focusReason:a.value});t("focusout-prevented",f),f.defaultPrevented||(o.preventDefault(),Z&&p(N,!0))}}else if(h===L){const f=P({focusReason:a.value});t("focusout-prevented",f),f.defaultPrevented||o.preventDefault()}}};fe(ge,{focusTrapRef:n,onKeydown:v}),k(()=>e.focusTrapEl,o=>{o&&(n.value=o)},{immediate:!0}),k([n],([o],[c])=>{o&&(o.addEventListener("keydown",v),o.addEventListener("focusin",S),o.addEventListener("focusout",C)),c&&(c.removeEventListener("keydown",v),c.removeEventListener("focusin",S),c.removeEventListener("focusout",C))});const b=o=>{t(ee,o)},F=o=>t(te,o),S=o=>{const c=m(n);if(!c)return;const i=o.target,d=o.relatedTarget,l=i&&c.contains(i);e.trapped||d&&c.contains(d)||(s=d),l&&t("focusin",o),!u.paused&&e.trapped&&(l?r=i:p(r,!0))},C=o=>{const c=m(n);if(!(u.paused||!c))if(e.trapped){const i=o.relatedTarget;!pe(i)&&!c.contains(i)&&setTimeout(()=>{if(!u.paused&&e.trapped){const d=P({focusReason:a.value});t("focusout-prevented",d),d.defaultPrevented||p(r,!0)}},0)}else{const i=o.target;i&&c.contains(i)||t("focusout",o)}};async function $(){await M();const o=m(n);if(o){se.push(u);const c=o.contains(document.activeElement)?s:document.activeElement;if(s=c,!o.contains(c)){const d=new Event(x,Q);o.addEventListener(x,b),o.dispatchEvent(d),d.defaultPrevented||M(()=>{let l=e.focusStartEl;ve(l)||(p(l),document.activeElement!==l&&(l="first")),l==="first"&&Ne(ie(o),!0),(document.activeElement===c||l==="container")&&p(o)})}}}function V(){const o=m(n);if(o){o.removeEventListener(x,b);const c=new CustomEvent(A,{...Q,detail:{focusReason:a.value}});o.addEventListener(A,F),o.dispatchEvent(c),!c.defaultPrevented&&(a.value=="keyboard"||!Re()||o.contains(document.activeElement))&&p(s??document.body),o.removeEventListener(A,F),se.remove(u)}}return D(()=>{e.trapped&&$(),k(()=>e.trapped,o=>{o?$():V()})}),K(()=>{e.trapped&&V(),n.value&&(n.value.removeEventListener("keydown",v),n.value.removeEventListener("focusin",S),n.value.removeEventListener("focusout",C),n.value=void 0)}),{onKeydown:v}}});function Ae(e,t,n,s,r,a){return U(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ze=ce(xe,[["render",Ae],["__file","focus-trap.vue"]]);const Ue=Ee({to:{type:me([String,Object]),required:!0},disabled:Boolean}),De=ae({__name:"teleport",props:Ue,setup(e){return(t,n)=>t.disabled?U(t.$slots,"default",{key:0}):(Te(),ye(be,{key:1,to:t.to},[U(t.$slots,"default")],8,["to"]))}});var Ke=ce(De,[["__file","teleport.vue"]]);const ze=Fe(Ke);export{Ze as E,ge as F,ue as a,ze as b,Ve as g,$e as i,je as s,We as u};
