import{k as A,i as r,l as i,B as e,D as a,G as c,H as v,O as H,E as l}from"./OnRRR0tE.js";const Z=["width","height","fill","transform"],k={key:0},y=l("path",{d:"M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,174.35-45.65-28.53a12,12,0,0,0-12.72,0L76,202.35V52H180Z"},null,-1),w=[y],L={key:1},f=l("path",{d:"M192,48V224l-64-40L64,224V48a8,8,0,0,1,8-8H184A8,8,0,0,1,192,48Z",opacity:"0.2"},null,-1),B=l("path",{d:"M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"},null,-1),M=[f,B],S={key:2},x=l("path",{d:"M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"},null,-1),z=[x],C={key:3},N=l("path",{d:"M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.17-54.83-34.26a6,6,0,0,0-6.36,0L70,213.17V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z"},null,-1),b=[N],E={key:4},P=l("path",{d:"M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"},null,-1),$=[P],j={key:5},D=l("path",{d:"M184,36H72A12,12,0,0,0,60,48V224a4,4,0,0,0,6.12,3.39L128,188.72l61.89,38.67A4,4,0,0,0,192,228a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,196,224V48A12,12,0,0,0,184,36Zm4,180.78-57.89-36.17a4,4,0,0,0-4.24,0L68,216.78V48a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z"},null,-1),G=[D],q={name:"PhBookmarkSimple"},_=A({...q,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(u){const o=u,m=r("weight","regular"),d=r("size","1em"),p=r("color","currentColor"),g=r("mirrored",!1),t=i(()=>o.weight??m),n=i(()=>o.size??d),h=i(()=>o.color??p),V=i(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:g?"scale(-1, 1)":void 0);return(s,O)=>(e(),a("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:n.value,height:n.value,fill:h.value,transform:V.value},s.$attrs),[c(s.$slots,"default"),t.value==="bold"?(e(),a("g",k,w)):t.value==="duotone"?(e(),a("g",L,M)):t.value==="fill"?(e(),a("g",S,z)):t.value==="light"?(e(),a("g",C,b)):t.value==="regular"?(e(),a("g",E,$)):t.value==="thin"?(e(),a("g",j,G)):v("",!0)],16,Z))}});export{_ as G};