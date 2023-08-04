"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{6615:function(e,s,n){n.d(s,{Z:function(){return N}});var r=n(4165),a=n(5861),t=n(1413),c=n(9439),o=n(2791),i=n(1087),l=n(5705),u=n(9894),m=n(6991),d=n(5763),h=n(1213),p=n(9126),_=n(9655),x=(n(5462),{form:"AuthForm_form__N+Fyz",register:"AuthForm_register__LBbT3",login:"AuthForm_login__nxTrt",inputContainer:"AuthForm_inputContainer__44gmQ",title:"AuthForm_title__nrVeh",inputWrap:"AuthForm_inputWrap__t4Enc",input:"AuthForm_input__dB7h2",successInput:"AuthForm_successInput__oQ9qy",errorInput:"AuthForm_errorInput__Pe3yE",errorWrap:"AuthForm_errorWrap__0TYvv",successMessage:"AuthForm_successMessage__Vl8si",btnContainer:"AuthForm_btnContainer__hf1ao",button:"AuthForm_button__+RFEI",text:"AuthForm_text__iaP49",link:"AuthForm_link__3I+HY",eyeBtn:"AuthForm_eyeBtn__6eQZ4",eyeIcon:"AuthForm_eyeIcon__4MRzf",crossIcon:"AuthForm_crossIcon__ZrnyS",confirmIcon:"AuthForm_confirmIcon__GT3ef"}),f=n(184),N=function(e){var s=e.isRegister,n=e.onSubmit,N=s?m.e:m.k,v=(0,o.useState)(!1),w=(0,c.Z)(v,2),j=w[0],g=w[1],b=(0,o.useState)(!1),y=(0,c.Z)(b,2),Z=y[0],I=y[1],k=function(){g(!j)},F=function(){I(!Z)},P=function(e,s){s(e,"")},A=function(e,s){return e[s]},C=function(e,s){return!e[s]};return(0,f.jsx)(l.J9,{initialValues:(0,t.Z)({email:"",password:"",confirmPassword:""},s&&{name:""}),validationSchema:N,onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(s,a){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.setSubmitting,e.prev=1,e.next=4,n(s,{setSubmitting:t});case 4:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),_.Am.error("Login failed. Please check your email and password.");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(s,n){return e.apply(this,arguments)}}(),children:function(e){var n=e.isSubmitting,r=e.errors,a=e.touched,t=e.setFieldValue;return(0,f.jsxs)(l.l0,{className:"".concat(x.form," ").concat(s?x.register:x.login),children:[(0,f.jsxs)("div",{className:x.inputContainer,children:[s?(0,f.jsx)("h2",{className:x.title,children:"Registration"}):(0,f.jsx)("h2",{className:x.title,children:"Login"}),s&&(0,f.jsxs)("div",{className:x.inputWrap,children:[(0,f.jsx)("label",{htmlFor:"name",hidden:!0,children:"Name"}),(0,f.jsx)(l.gN,{id:"name",type:"name",name:"name",placeholder:"Name",className:"".concat(x.input," ").concat(a.name&&r.name&&x.errorInput)}),a.name&&A(r,"name")&&(0,f.jsx)(h.$iT,{id:"svg",className:x.crossIcon,onClick:function(){return P("name",t)}}),a.name&&C(r,"name")&&(0,f.jsx)(p.oFd,{id:"svg",className:x.confirmIcon})]}),a.name&&!r.name?(0,f.jsx)("div",{className:x.successMessage,children:"Name is secure"}):(0,f.jsx)("div",{className:x.errorWrap,children:(0,f.jsx)(l.Bc,{name:"name",component:"div",className:x.error})}),(0,f.jsxs)("div",{className:x.inputWrap,children:[(0,f.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,f.jsx)(l.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:"".concat(x.input," ").concat(a.email&&r.email&&x.errorInput)}),a.email&&A(r,"email")&&(0,f.jsx)(h.$iT,{id:"svg",className:x.crossIcon,onClick:function(){return P("email",t)}}),a.email&&C(r,"email")&&(0,f.jsx)(p.oFd,{id:"svg",className:x.confirmIcon})]}),a.email&&!r.email?(0,f.jsx)("div",{className:x.successMessage,children:"Email is secure"}):(0,f.jsx)("div",{className:x.errorWrap,children:(0,f.jsx)(l.Bc,{name:"email",component:"div",className:x.error})}),(0,f.jsxs)("div",{className:x.inputWrap,children:[(0,f.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,f.jsx)(l.gN,{id:"password",type:j?"text":"password",name:"password",placeholder:"Password",className:"".concat(x.input," ").concat(a.password&&!r.password&&x.successInput," ").concat(a.password&&r.password&&x.errorInput)}),j?(0,f.jsx)("button",{type:"button",onClick:k,className:x.eyeBtn,children:(0,f.jsx)(d.quy,{id:"svg",className:x.eyeIcon})}):(0,f.jsx)("button",{type:"button",onClick:k,className:x.eyeBtn,children:(0,f.jsx)(d.ONY,{id:"svg",className:x.eyeIcon})}),a.password&&!r.password?(0,f.jsx)("div",{className:x.successMessage,children:"Password is secure"}):(0,f.jsx)("div",{className:x.errorWrap,children:(0,f.jsx)(l.Bc,{name:"password",component:"div",className:x.error})})]}),s&&(0,f.jsxs)("div",{className:x.inputWrap,children:[(0,f.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,f.jsx)(l.gN,{id:"confirmPassword",type:Z?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(x.input," ").concat(a.confirmPassword&&!r.confirmPassword&&x.successInput," ").concat(a.confirmPassword&&r.confirmPassword&&x.errorInput)}),Z?(0,f.jsx)("button",{type:"button",onClick:F,className:x.eyeBtn,children:(0,f.jsx)(d.quy,{id:"svg",className:x.eyeIcon})}):(0,f.jsx)("button",{type:"button",onClick:F,className:x.eyeBtn,children:(0,f.jsx)(d.ONY,{id:"svg",className:x.eyeIcon})}),a.confirmPassword&&!r.confirmPassword?(0,f.jsx)("div",{className:x.successMessage,children:"Password confirmed"}):(0,f.jsx)("div",{className:x.errorWrap,children:(0,f.jsx)(l.Bc,{name:"confirmPassword",component:"div",className:x.error})})]})]}),(0,f.jsxs)("div",{className:x.btnContainer,children:[(0,f.jsx)(u.Z,{type:"submit",disabled:n,className:x.button,children:s?"Registration":"Login"}),s?(0,f.jsxs)("p",{className:x.text,children:["Already have an account?"," ",(0,f.jsx)(i.rU,{to:"/login",className:x.link,children:"Login"})]}):(0,f.jsxs)("p",{className:x.text,children:["Don't have an account?"," ",(0,f.jsx)(i.rU,{to:"/register",className:x.link,children:"Register"})]})]})]})}})}},2024:function(e,s,n){n.d(s,{Z:function(){return t}});n(2791);var r="Background_background__WcKDH",a=n(184),t=function(){return(0,a.jsx)("div",{className:r})}},9894:function(e,s,n){n.d(s,{Z:function(){return o}});var r=n(5987),a=(n(2791),"Button_button__wiIYs"),t=n(184),c=["children","className","onClick","type"],o=function(e){var s=e.children,n=e.className,o=e.onClick,i=e.type;(0,r.Z)(e,c);return(0,t.jsx)("button",{type:i,onClick:o,className:"".concat(a," ").concat(n," "),children:s})}},5700:function(e,s,n){n.d(s,{Z:function(){return t}});var r="Container_container__VVOCq",a=n(184),t=function(e){var s=e.children,n=e.className;return(0,a.jsx)("div",{className:"".concat(r," ").concat(n),children:s})}},1294:function(e,s,n){var r=n(4063),a=n(184);s.Z=function(e){var s=e.children,n=e.className;return(0,a.jsx)("div",{className:"".concat(r.Z.section," ").concat(n),children:s})}},7644:function(e,s,n){n.r(s),n.d(s,{default:function(){return v}});var r=n(4165),a=n(5861),t=n(9439),c=n(2791),o=n(3855),i=n(7689),l=n(2024),u=n(6615),m=n(1294),d=n(5700),h=n(1454),p=n(6277),_=n(9869),x=n(9655),f=n(4063),N=n(184),v=function(){var e=(0,i.s0)(),s=(0,o.I0)(),n=(0,o.v9)(_.hg),v=(0,o.v9)(_.rU),w=(0,c.useState)(null),j=(0,t.Z)(w,2),g=j[0],b=j[1],y=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a,t){var c,o,i,l,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a.email,o=a.password,i=a.name,l=t.setSubmitting,u={email:c,password:o,name:i},n.prev=3,n.next=6,s((0,p.IU)(u));case 6:e("/user",{state:{from:"/register"}}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(3),b(n.t0),console.log("Something went wrong",n.t0);case 13:return n.prev=13,l(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,9,13,16]])})));return function(e,s){return n.apply(this,arguments)}}();return n&&!v?(0,N.jsx)(h.Z,{}):(0,N.jsxs)(m.Z,{className:f.Z.sectionRegister,children:[(0,N.jsx)(l.Z,{}),(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(u.Z,{isRegister:!0,onSubmit:y}),g&&(0,N.jsxs)("div",{children:["Error: ",g.message]})]}),(0,N.jsx)(x.Ix,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}},6991:function(e,s,n){n.d(s,{e:function(){return a},k:function(){return t}});var r=n(6727),a=r.Ry().shape({name:r.Z_().nullable().required("Required").min(2,"Name must be at least 2 characters").max(16,"Name must be no more than 16 characters").matches(/^[A-Za-z]+$/,"Name must contain only letters"),email:r.Z_().email("Invalid email address").required("Required"),password:r.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter"),confirmPassword:r.Z_().nullable().when("password",(function(e,s){return e?s.required("Password confirmation required").oneOf([r.iH("password")],"Passwords must match"):s.notRequired()}))}),t=r.Ry().shape({email:r.Z_().email("Invalid email address").required("Required"),password:r.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter")})},4063:function(e,s){s.Z={section:"Section_section__Z2PLw",sectionlogin:"Section_sectionlogin__Bu46X",sectionRegister:"Section_sectionRegister__aDA4N"}}}]);
//# sourceMappingURL=644.7fc14f4f.chunk.js.map