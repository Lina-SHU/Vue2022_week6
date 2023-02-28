import{S as m}from"./sweetalert2.all-e7620bac.js";import{M as V,p as E}from"./modal-2cab88c1.js";import{_ as v,o as p,c as u,b as e,t as c,bs as d,bi as a,be as T,r as h,F as y,g as k,d as b}from"./index-ecfc8148.js";const{VITE_URL:w,VITE_PATH:x}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_week6/",MODE:"production",DEV:!1,PROD:!0},U={props:["tempOrder"],data(){return{editModal:"",temp:{user:{}}}},methods:{openModal(){this.editModal.show()},closeModal(){this.editModal.hide()},editOrder(){const l=`${w}api/${x}/admin/order/${this.temp.id}`;this.$http.put(l,{data:this.temp}).then(()=>{m.fire({toast:!0,title:"編輯訂單成功！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1}),this.$emit("getOrders"),this.closeModal()}).catch(t=>{m.fire({title:t.response.data.message,icon:"error"})})}},watch:{tempOrder(){this.temp={...this.tempOrder}}},mounted(){this.editModal=new V(this.$refs.editOrderModal)}},L={class:"modal",ref:"editOrderModal"},$={class:"modal-dialog modal-lg"},C={class:"modal-content"},D=e("div",{class:"modal-header"},[e("h2",{class:"modal-title fs-5"},"編輯訂單"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},B={class:"mb-4"},I=e("h3",{class:"fs-6 border-bottom pb-2 mb-3"},"收件人資訊",-1),R={class:"row g-3 mb-5"},P={class:"col-md-6"},S=e("label",{for:"receiverName",class:"form-label"},"姓名",-1),H={class:"col-md-6"},N=e("label",{for:"receiverTel",class:"form-label"},"電話",-1),F={class:"col-12"},G=e("label",{for:"receiverEmail",class:"form-label"},"Email",-1),j={class:"col-12"},q=e("label",{for:"address",class:"form-label"},"地址",-1),z={class:"col-12"},J=e("label",{for:"message",class:"form-label"},"留言",-1),K=e("h3",{class:"fs-6 border-bottom pb-2 mb-3"},"收件人資訊",-1),Q={class:"mb-3"},W=e("label",{for:"orderAmount",class:"form-label"},"訂單總金額",-1),X={class:"mb-3"},Y={class:"form-check"},Z=e("label",{class:"form-check-label",for:"is_enabled"},"是否付款",-1),ee={class:"modal-footer"},te=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function se(l,t,r,_,s,n){return p(),u("div",L,[e("div",$,[e("div",C,[D,e("div",A,[e("p",B,"訂單編號： "+c(s.temp.id),1),I,e("form",R,[e("div",P,[S,d(e("input",{type:"texet",class:"form-control",id:"receiverName","onUpdate:modelValue":t[0]||(t[0]=o=>s.temp.user.name=o)},null,512),[[a,s.temp.user.name]])]),e("div",H,[N,d(e("input",{type:"tel",class:"form-control",id:"receiverTel","onUpdate:modelValue":t[1]||(t[1]=o=>s.temp.user.tel=o)},null,512),[[a,s.temp.user.tel]])]),e("div",F,[G,d(e("input",{type:"email",class:"form-control",id:"receiverEmail","onUpdate:modelValue":t[2]||(t[2]=o=>s.temp.user.email=o)},null,512),[[a,s.temp.user.email]])]),e("div",j,[q,d(e("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":t[3]||(t[3]=o=>s.temp.user.address=o)},null,512),[[a,s.temp.user.address]])]),e("div",z,[J,d(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"3","onUpdate:modelValue":t[4]||(t[4]=o=>s.temp.message=o)},null,512),[[a,s.temp.message]])])]),K,e("div",Q,[W,d(e("input",{type:"number",class:"form-control",id:"orderAmount","onUpdate:modelValue":t[5]||(t[5]=o=>s.temp.total=o)},null,512),[[a,s.temp.total]])]),e("div",X,[e("div",Y,[d(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=o=>s.temp.is_paid=o)},null,512),[[T,s.temp.is_paid]]),Z])])]),e("div",ee,[te,e("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=(...o)=>n.editOrder&&n.editOrder(...o))}," 編輯 ")])])])],512)}const oe=v(U,[["render",se]]),{VITE_URL:f,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_week6/",MODE:"production",DEV:!1,PROD:!0},le={components:{pagination:E,editModal:oe},data(){return{orderList:[],pages:{},tempOrder:{}}},methods:{getOrders(l=1){const t=`${f}api/${g}/admin/orders?page=${l}`;this.$http.get(t).then(r=>{this.orderList=r.data.orders,this.pages=r.data.pagination}).catch(r=>{m.fire({title:r.response.data.message,icon:"error"})})},deleteOrder(l){m.fire({title:"確認是否刪除此訂單？",showCancelButton:!0,confirmButtonText:"刪除",cancelButtonText:"取消"}).then(t=>{if(t.isConfirmed){const r=`${f}api/${g}/admin/order/${l}`;this.$http.delete(r).then(()=>{this.getOrders(),m.fire({toast:!0,title:"已刪除該筆訂單",icon:"success",timer:2e3,showConfirmButton:!1})}).catch(_=>{m.fire({title:_.reponse.data.message,icon:"error"})})}})},openModal(l){this.tempOrder={...l},this.$refs.editMsg.openModal()}},mounted(){this.getOrders()}},re={class:"container py-5"},ie={class:"row justify-content-center"},ne={class:"col-lg-10"},de=e("h1",{class:"fs-5 mb-3"},"訂單管理",-1),ae={class:"table"},ce=e("thead",null,[e("tr",null,[e("th",null,"訂單編號"),e("th",null,"收件人 Email"),e("th",null,"訂購日期"),e("th",null,"是否付款"),e("th")])],-1),me=["onClick"],pe=["onClick"];function ue(l,t,r,_,s,n){const o=h("pagination"),O=h("editModal");return p(),u("div",re,[e("div",ie,[e("div",ne,[de,e("table",ae,[ce,e("tbody",null,[(p(!0),u(y,null,k(s.orderList,i=>(p(),u("tr",{key:i.id},[e("td",null,c(i.id),1),e("td",null,c(i.user.email),1),e("td",null,c(new Date(i.create_at*1e3).toLocaleDateString())+" "+c(new Date(i.create_at*1e3).toLocaleTimeString()),1),e("td",null,c(i.is_paid?"是":"否"),1),e("td",null,[e("button",{type:"button",class:"btn btn-sm btn-primary",onClick:M=>n.openModal(i)}," 編輯 ",8,me),e("button",{type:"button",class:"btn btn-sm btn-outline-danger ms-1",onClick:M=>n.deleteOrder(i.id)}," 刪除 ",8,pe)])]))),128))])]),b(o,{class:"mt-2",pages:s.pages,"get-orders":n.getOrders},null,8,["pages","get-orders"])])]),b(O,{ref:"editMsg","temp-order":s.tempOrder,onGetOrders:n.getOrders},null,8,["temp-order","onGetOrders"])])}const fe=v(le,[["render",ue]]);export{fe as default};