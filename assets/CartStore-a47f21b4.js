import{z as s,v as d}from"./index-4be9ecad.js";import{S as o}from"./sweetalert2.all-49a6074c.js";const l=s("LoadingtStore",{state:()=>({isLoading:!1,isDisabled:!1}),actions:{toggleLoading(){this.isLoading=!this.isLoading},toggleDisabled(){this.isDisabled=!this.isDisabled}}}),{VITE_URL:c,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_week6/",MODE:"production",DEV:!1,PROD:!0},f=s("CartStore",{actions:{addToCart(i,e=1){const t=l(),a={product_id:i,qty:e},r=`${c}api/${g}/cart`;t.toggleDisabled(),d.post(r,{data:a}).then(()=>{t.toggleDisabled(),o.fire({toast:!0,title:"已將商品加入到購物車！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1})}).catch(n=>{o.fire({title:n.response.data.message,icon:"error"})})}}});export{f as C,l as L};
