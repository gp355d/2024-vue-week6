import{_ as p,o as m,c as u,a as s,i as d,l,k as h,p as _,q as f}from"./index-VFWDc2Vc.js";const w={data(){return{user:{email:"",password:""}}},methods:{checkLogin(){const o={username:this.user.email,password:this.user.password};this.axios.post("https://ec-course-api.hexschool.io/v2/admin/signin",o).then(e=>{const{token:i,expired:n}=e.data;document.cookie=`hexToken=${i};expires=${new Date(n)}};`,console.log(i,n),this.$router.push("/admin/products")}).catch(e=>{console.log(e),alert(e.response.data.message),this.$router.push("login")}),this.user.email="",this.user.password=""}}},a=o=>(_("data-v-637133ff"),o=o(),f(),o),g={class:"container"},v={class:"row justify-content-center"},x=a(()=>s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1)),b={class:"col-8"},k={id:"form",class:"form-signin"},y={class:"form-floating mb-3"},I=a(()=>s("label",{for:"username"},"Email address",-1)),L={class:"form-floating"},V=a(()=>s("label",{for:"password"},"Password",-1)),q=a(()=>s("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1));function B(o,e,i,n,r,c){return m(),u("div",g,[s("div",v,[x,s("div",b,[s("form",k,[s("div",y,[d(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>r.user.email=t)},null,512),[[l,r.user.email]]),I]),s("div",L,[d(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>r.user.password=t)},null,512),[[l,r.user.password]]),V]),s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",onClick:e[2]||(e[2]=h((...t)=>c.checkLogin&&c.checkLogin(...t),["prevent"]))}," 登入 ")])])]),q])}const D=p(w,[["render",B],["__scopeId","data-v-637133ff"]]);export{D as default};