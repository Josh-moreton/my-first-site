import{k as H,i as o,l as i,F as e,H as a,L as v,M as k,S as y,I as t}from"./Dy38UYFi.js";import{p as w}from"./NQLob8fj.js";const A=["width","height","fill","transform"],M={key:0},f=t("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"},null,-1),Z=[f],B={key:1},V=t("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"},null,-1),S=t("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"},null,-1),b=[V,S],x={key:2},z=t("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"},null,-1),C=[z],N={key:3},P=t("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"},null,-1),$=[P],j={key:4},E=t("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"},null,-1),F=[E],I={key:5},L=t("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"},null,-1),q=[L],D={name:"PhMinus"},W=H({...D,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(u){const r=u,p=o("weight","regular"),g=o("size","1em"),d=o("color","currentColor"),c=o("mirrored",!1),l=i(()=>r.weight??p),s=i(()=>r.size??g),h=i(()=>r.color??d),m=i(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:c?"scale(-1, 1)":void 0);return(n,R)=>(e(),a("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:s.value,height:s.value,fill:h.value,transform:m.value},n.$attrs),[v(n.$slots,"default"),l.value==="bold"?(e(),a("g",M,Z)):l.value==="duotone"?(e(),a("g",B,b)):l.value==="fill"?(e(),a("g",x,C)):l.value==="light"?(e(),a("g",N,$)):l.value==="regular"?(e(),a("g",j,F)):l.value==="thin"?(e(),a("g",I,q)):k("",!0)],16,A))}}),_=w("/images/lottery/ticket-big.png");export{W as I,_ as c};