import{S as p}from"./sweetalert2.all-49a6074c.js";import{M as E,p as A}from"./modal-bec9645d.js";import{_ as T,o as i,c as n,b as t,t as _,F as h,s as V,A as a,H as m,G as U,I as D,r as M,d as w}from"./index-4be9ecad.js";const{VITE_URL:k,VITE_PATH:P}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_week6/",MODE:"production",DEV:!1,PROD:!0},B={props:["tempProduct"],data(){return{fileData:"",temp:[],editMsg:""}},methods:{openModal(){this.editMsg.show()},closeModal(){this.editMsg.hide()},getFile(l){this.fileData=l.target.files[0]},updateFile(){const l=new FormData;l.append("file-to-upload",this.fileData);const e=`${k}api/${P}/admin/upload`;this.$http.post(e,l).then(r=>{this.temp.imageUrl=r.data.imageUrl}).catch(r=>{p.fire({title:r.response.data.message,icon:"error"})})},editProduct(){let l=`${k}api/${P}/admin/product/${this.temp.id}`,e="put";this.temp.id||(l=`${k}api/${P}/admin/product`,e="post"),this.$http[e](l,{data:this.temp}).then(()=>{this.$emit("getProduct"),this.closeModal(),this.temp.id?p.fire({toast:!0,title:"編輯商品成功！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1}):p.fire({toast:!0,title:"新增商品成功！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1}),this.temp={}}).catch(r=>{p.fire({title:r.response.data.message,icon:"error"})})}},watch:{tempProduct(){this.temp={...this.tempProduct}}},mounted(){this.editMsg=new E(this.$refs.editModal)}},I={class:"modal",ref:"editModal"},L={class:"modal-dialog modal-xl"},F={class:"modal-content"},R={class:"modal-header"},H={class:"modal-title fs-5"},S=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},G={class:"row"},N={class:"col-sm-4"},j={class:"mb-3"},q={class:"mb-2"},z=t("label",{for:"formFile",class:"form-label"},"輸入圖片網址",-1),J={class:"input-group"},K=["src","alt"],Q=t("h3",{class:"fs-6 mb-3"},"輸入標籤",-1),W=["onUpdate:modelValue"],X={key:0,class:"mt-3"},Y={key:1,class:"mt-3"},Z={class:"col-sm-8"},$={class:"mb-3"},tt=t("label",{for:"title",class:"form-label"},"標題",-1),et={class:"row"},st={class:"mb-3 col-md-6"},ot=t("label",{for:"category",class:"form-label"},"分類",-1),lt={class:"mb-3 col-md-6"},it=t("label",{for:"price",class:"form-label"},"單位",-1),nt={class:"row"},rt={class:"mb-3 col-md-6"},dt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ct={class:"mb-3 col-md-6"},at=t("label",{for:"price",class:"form-label"},"售價",-1),mt=t("hr",null,null,-1),pt={class:"mb-3"},ut=t("label",{for:"description",class:"form-label"},"商品描述",-1),_t={class:"mb-3"},ht=t("label",{for:"content",class:"form-label"},"說明內容",-1),bt={class:"mb-3"},ft={class:"form-check"},gt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),vt=t("h3",{class:"fs-6 mb-3"},"輸入多張圖片網址",-1),yt={class:"row"},Ut=["onUpdate:modelValue"],kt=["src"],Pt={key:0,class:"mt-3"},Vt={key:1,class:"mt-3"},Mt={class:"modal-footer"},wt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ct(l,e,r,v,s,c){var b,f,d,g;return i(),n("div",I,[t("div",L,[t("div",F,[t("div",R,[t("h2",H,_(s.temp.id?"編輯":"新增")+"商品",1),S]),t("div",O,[t("div",G,[t("div",N,[t("div",j,[t("div",q,[z,t("div",J,[t("input",{type:"file",class:"form-control",id:"formFile",onChange:e[0]||(e[0]=o=>c.getFile(o))},null,32),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=(...o)=>c.updateFile&&c.updateFile(...o))}," 上傳檔案 ")])]),t("img",{class:"img-fluid",src:s.temp.imageUrl,alt:s.temp.title},null,8,K)]),Array.isArray(s.temp.tags)?(i(),n(h,{key:0},[Q,(i(!0),n(h,null,V(s.temp.tags,(o,u)=>(i(),n("div",{key:o+"789",class:"mb-2"},[a(t("input",{type:"text",class:"form-control","onUpdate:modelValue":y=>s.temp.tags[u]=y},null,8,W),[[m,s.temp.tags[u]]])]))),128)),!((f=(b=s.temp)==null?void 0:b.tags)!=null&&f.length)||s.temp.tags[s.temp.tags.length-1]?(i(),n("div",X,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.temp.tags.push(""))}," 新增標籤 ")])):(i(),n("div",Y,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=o=>s.temp.tags.pop())}," 刪除標籤 ")]))],64)):U("",!0)]),t("div",Z,[t("div",$,[tt,a(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=o=>s.temp.title=o)},null,512),[[m,s.temp.title,void 0,{trim:!0}]])]),t("div",et,[t("div",st,[ot,a(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=o=>s.temp.category=o)},null,512),[[m,s.temp.category,void 0,{trim:!0}]])]),t("div",lt,[it,a(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=o=>s.temp.unit=o)},null,512),[[m,s.temp.unit,void 0,{trim:!0}]])])]),t("div",nt,[t("div",rt,[dt,a(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=o=>s.temp.origin_price=o)},null,512),[[m,s.temp.origin_price,void 0,{number:!0}]])]),t("div",ct,[at,a(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=o=>s.temp.price=o)},null,512),[[m,s.temp.price,void 0,{number:!0}]])])]),mt,t("div",pt,[ut,a(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸商品描述","onUpdate:modelValue":e[9]||(e[9]=o=>s.temp.description=o)},null,512),[[m,s.temp.description,void 0,{trim:!0}]])]),t("div",_t,[ht,a(t("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=o=>s.temp.content=o)},null,512),[[m,s.temp.content,void 0,{trim:!0}]])]),t("div",bt,[t("div",ft,[a(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=o=>s.temp.is_enabled=o)},null,512),[[D,s.temp.is_enabled]]),gt])])])]),Array.isArray(s.temp.imagesUrl)?(i(),n(h,{key:0},[vt,t("div",yt,[(i(!0),n(h,null,V(s.temp.imagesUrl,(o,u)=>(i(),n("div",{key:o,class:"col-md-4"},[a(t("input",{type:"text","onUpdate:modelValue":y=>s.temp.imagesUrl[u]=y,class:"form-control"},null,8,Ut),[[m,s.temp.imagesUrl[u]]]),s.temp.imagesUrl[u]?(i(),n("img",{key:0,src:s.temp.imagesUrl[u],alt:"多張圖片網址",class:"img-fluid"},null,8,kt)):U("",!0)]))),128))]),!((g=(d=s.temp)==null?void 0:d.imagesUrl)!=null&&g.length)||s.temp.imagesUrl[s.temp.imagesUrl.length-1]?(i(),n("div",Pt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[12]||(e[12]=o=>s.temp.imagesUrl.push(""))}," 新增圖片 ")])):(i(),n("div",Vt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[13]||(e[13]=o=>s.temp.imagesUrl.pop())}," 刪除圖片 ")]))],64)):U("",!0)]),t("div",Mt,[wt,t("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=(...o)=>c.editProduct&&c.editProduct(...o))},_(s.temp.id?"編輯":"新增"),1)])])])],512)}const xt=T(B,[["render",Ct]]),{VITE_URL:C,VITE_PATH:x}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_week6/",MODE:"production",DEV:!1,PROD:!0},Tt={components:{pagination:A,editModal:xt},data(){return{productList:[],pages:{},tempProduct:{}}},methods:{getProducts(l=1){const e=`${C}api/${x}/admin/products?page=${l}`;this.$http.get(e).then(r=>{this.productList=r.data.products,this.pages=r.data.pagination}).catch(r=>{p.fire({title:r.response.data.message,icon:"error"})})},openModal(l,e){l==="edit"?(this.tempProduct={...e},this.$refs.editMsg.openModal(),this.tempProduct.imagesUrl||(this.tempProduct={...this.tempProduct,imagesUrl:[]}),this.tempProduct.tags||(this.tempProduct={...this.tempProduct,tags:[]})):l==="new"&&(this.$refs.editMsg.openModal(),this.tempProduct={imagesUrl:[],tags:[]})},deleteProduct(l){p.fire({title:"確認是否刪除此商品？",showCancelButton:!0,confirmButtonText:"刪除",cancelButtonText:"取消"}).then(e=>{if(e.isConfirmed){const r=`${C}api/${x}/admin/product/${l}`;this.$http.delete(r).then(()=>{this.getProducts(),p.fire({toast:!0,title:"已刪除商品！",icon:"success",timer:2e3,showConfirmButton:!1})}).catch(v=>{p.fire({title:v.response.data.message,icon:"error"})})}})}},mounted(){this.getProducts()}},Et={class:"container py-5"},At={class:"row justify-content-center"},Dt={class:"col-lg-8"},Bt=t("h1",{class:"fs-5 mb-3"},"商品管理",-1),It={class:"text-end"},Lt={class:"table"},Ft=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"商品名稱"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"是否啟用"),t("th")])],-1),Rt=["onClick"],Ht=["onClick"];function St(l,e,r,v,s,c){const b=M("pagination"),f=M("editModal");return i(),n("div",Et,[t("div",At,[t("div",Dt,[Bt,t("div",It,[t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=d=>c.openModal("new"))}," 建立新的商品 ")]),t("table",Lt,[Ft,t("tbody",null,[(i(!0),n(h,null,V(s.productList,d=>(i(),n("tr",{key:d.id},[t("td",null,_(d.category),1),t("td",null,_(d.title),1),t("td",null,_(d.origin_price),1),t("td",null,_(d.price),1),t("td",null,[t("p",null,_(d.is_enabled===1?"啟用":"未啟用"),1)]),t("td",null,[t("button",{type:"button",class:"btn btn-sm btn-primary",onClick:g=>c.openModal("edit",d)}," 編輯 ",8,Rt),t("button",{type:"button",class:"btn btn-sm btn-outline-danger ms-1",onClick:g=>c.deleteProduct(d.id)}," 刪除 ",8,Ht)])]))),128))])]),w(b,{class:"mt-2",pages:s.pages,"get-products":c.getProducts},null,8,["pages","get-products"])])]),w(f,{ref:"editMsg","temp-product":s.tempProduct,onGetProduct:c.getProducts},null,8,["temp-product","onGetProduct"])])}const jt=T(Tt,[["render",St]]);export{jt as default};
