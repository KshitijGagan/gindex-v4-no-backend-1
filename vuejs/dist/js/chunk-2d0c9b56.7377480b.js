(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9b56"],{"59fb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",[e._v("Register")]),a("form",[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("label",{attrs:{for:"email"}},[e._v("E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("label",{attrs:{for:"password"}},[e._v("Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("label",{attrs:{for:"password-confirm"}},[e._v("Confirm Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirmation,expression:"password_confirmation"}],attrs:{id:"password-confirm",type:"password",required:""},domProps:{value:e.password_confirmation},on:{input:function(t){t.target.composing||(e.password_confirmation=t.target.value)}}})]),a("label",{attrs:{for:"password-confirm"}},[e._v("Is this an administrator account?")]),a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.is_admin,expression:"is_admin"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.is_admin=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"1"}},[e._v("Yes")]),a("option",{attrs:{value:"0"}},[e._v("No")])])]),a("div",[a("button",{attrs:{type:"submit"},on:{click:e.handleSubmit}},[e._v(" Register ")])])])])},s=[],o=(a("b0c0"),{props:["nextUrl"],data:function(){return{name:"",email:"",password:"",password_confirmation:"",is_admin:null}},methods:{handleSubmit:function(e){var t=this;if(e.preventDefault(),!(this.password===this.password_confirmation&&this.password.length>0))return this.password="",this.passwordConfirm="",alert("Passwords do not match");var a="http://localhost:3000/register";null==this.is_admin&&1!=this.is_admin||(a="http://localhost:3000/register-admin"),this.$http.post(a,{name:this.name,email:this.email,password:this.password,is_admin:this.is_admin}).then((function(e){localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",e.data.token),null!=localStorage.getItem("jwt")&&(t.$emit("loggedIn"),null!=t.$route.params.nextUrl?t.$router.push(t.$route.params.nextUrl):t.$router.push("/0:/"))})).catch((function(e){console.error(e)}))}}}),i=o,n=a("2877"),l=Object(n["a"])(i,r,s,!1,null,null,null);t["default"]=l.exports}}]);