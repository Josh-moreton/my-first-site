import{b as i,V as l}from"./OnRRR0tE.js";function c(e){const t=i(null),{rotationAngle:o=8}=e;return l(()=>{if(t.value){const n=t.value,r=n.innerText;n.innerHTML=r.split("").map((a,s)=>`<span style="transform:rotate(${s*o}deg)">${a}</span>`).join("")}}),t}export{c as u};