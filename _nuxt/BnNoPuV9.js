import{k as v,i as o,l as i,F as e,H as l,L as w,M as y,S as k,I as a}from"./Dy38UYFi.js";const M=["width","height","fill","transform"],A={key:0},Z=a("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"},null,-1),f=[Z],L={key:1},V=a("path",{d:"M176,128,96,208V48Z",opacity:"0.2"},null,-1),B=a("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"},null,-1),S=[V,B],C={key:2},x=a("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"},null,-1),z=[x],N={key:3},b=a("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"},null,-1),P=[b],$={key:4},j=a("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"},null,-1),E=[j],R={key:5},q=a("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"},null,-1),D=[q],F={name:"PhCaretRight"},I=v({...F,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(u){const r=u,d=o("weight","regular"),g=o("size","1em"),p=o("color","currentColor"),h=o("mirrored",!1),t=i(()=>r.weight??d),n=i(()=>r.size??g),m=i(()=>r.color??p),c=i(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:h?"scale(-1, 1)":void 0);return(s,G)=>(e(),l("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:n.value,height:n.value,fill:m.value,transform:c.value},s.$attrs),[w(s.$slots,"default"),t.value==="bold"?(e(),l("g",A,f)):t.value==="duotone"?(e(),l("g",L,S)):t.value==="fill"?(e(),l("g",C,z)):t.value==="light"?(e(),l("g",N,P)):t.value==="regular"?(e(),l("g",$,E)):t.value==="thin"?(e(),l("g",R,D)):y("",!0)],16,M))}});export{I as G};