import{k as c,i as r,l as n,B as o,D as l,G as f,H as M,O as y,E as a,N as w,u as A,J as m,z as Z,A as k}from"./OnRRR0tE.js";import{F as _}from"./D1dJXpXg.js";import{b as L}from"./dywKXpz4.js";const b=["width","height","fill","transform"],B={key:0},C=a("path",{d:"M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"},null,-1),S=[C],z={key:1},N=a("path",{d:"M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",opacity:"0.2"},null,-1),$=a("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"},null,-1),I=[N,$],O={key:2},P=a("path",{d:"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"},null,-1),j=[P],D={key:3},E=a("path",{d:"M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"},null,-1),F=[E],G={key:4},H=a("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"},null,-1),T=[H],q={key:5},x=a("path",{d:"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"},null,-1),J=[x],U={name:"PhPlay"},a1=c({...U,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(t){const e=t,s=r("weight","regular"),d=r("size","1em"),h=r("color","currentColor"),v=r("mirrored",!1),i=n(()=>e.weight??s),p=n(()=>e.size??d),g=n(()=>e.color??h),V=n(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:v?"scale(-1, 1)":void 0);return(u,R)=>(o(),l("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:p.value,height:p.value,fill:g.value,transform:V.value},u.$attrs),[f(u.$slots,"default"),i.value==="bold"?(o(),l("g",B,S)):i.value==="duotone"?(o(),l("g",z,I)):i.value==="fill"?(o(),l("g",O,j)):i.value==="light"?(o(),l("g",D,F)):i.value==="regular"?(o(),l("g",G,T)):i.value==="thin"?(o(),l("g",q,J)):M("",!0)],16,b))}}),W=t=>(Z("data-v-9414c977"),t=t(),k(),t),K=W(()=>a("iframe",{src:"https://youtube.com/embed/4DCTTrGjGU4",class:"video video-iframe aspect-video w-full"},null,-1)),Q=c({__name:"VideoModal",props:{handleVideoModal:{type:Function},isOpen:{type:Boolean}},setup(t){return(e,s)=>(o(),l("div",{class:m(`video-modal-container ${e.isOpen?"show":"hide"}`)},[a("div",{onClick:s[0]||(s[0]=(...d)=>e.handleVideoModal&&e.handleVideoModal(...d)),class:"video-modal-overlay"}),a("div",{class:m(`video-modal ${e.isOpen?"show":"hide"}`)},[K,a("button",{onClick:s[1]||(s[1]=(...d)=>e.handleVideoModal&&e.handleVideoModal(...d)),class:"video-close-button"},[w(A(_),{size:20})])],2)],2))}}),o1=L(Q,[["__scopeId","data-v-9414c977"]]);export{a1 as H,o1 as _};