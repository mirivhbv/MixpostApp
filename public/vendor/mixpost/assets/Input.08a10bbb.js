import{r as u,y as a,H as s,o as l,c as i,n as d}from"./app.4ca5fe15.js";const c=["value"],m={__name:"Input",props:["modelValue","error"],emits:["update:modelValue"],setup(e){const o=u(null);return a(()=>{o.value.hasAttribute("autofocus")&&s(()=>{o.value.focus()})}),(n,r)=>(l(),i("input",{value:e.modelValue,onInput:r[0]||(r[0]=t=>n.$emit("update:modelValue",t.target.value)),ref_key:"input",ref:o,class:d([{"border-stone-600":!e.error,"border-red-600":e.error},"w-full rounded-md focus:border-indigo-200 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none transition-colors ease-in-out duration-200"])},null,42,c))}};export{m as _};
