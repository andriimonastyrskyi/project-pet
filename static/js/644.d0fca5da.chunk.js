"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{6933:function(e,n,s){s.d(n,{Z:function(){return g}});var r=s(9439),t=s(2791),a=s(1087),o=s(5705),i=s(4925),c="Button_button__wiIYs",u=s(184),l=["children","className","onClick","type"],d=function(e){var n=e.children,s=e.className,r=e.onClick,t=e.type;(0,i.Z)(e,l);return(0,u.jsx)("button",{type:t,onClick:r,className:"".concat(c," ").concat(s," "),children:n})},m=s(6727),h=m.Ry().shape({email:m.Z_().email("Invalid email address").required("Required"),password:m.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter"),confirmPassword:m.Z_().nullable().when("password",(function(e,n){return e?n.required("Password confirmation required").oneOf([m.iH("password")],"Passwords must match"):n.notRequired()}))}),p=m.Ry().shape({email:m.Z_().email("Invalid email address").required("Required"),password:m.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter")}),_=s(5763),f=s(1213),x=s(9126),w={form:"AuthForm_form__N+Fyz",register:"AuthForm_register__LBbT3",login:"AuthForm_login__nxTrt",inputContainer:"AuthForm_inputContainer__44gmQ",title:"AuthForm_title__nrVeh",inputWrap:"AuthForm_inputWrap__t4Enc",input:"AuthForm_input__dB7h2",successInput:"AuthForm_successInput__oQ9qy",errorInput:"AuthForm_errorInput__Pe3yE",errorWrap:"AuthForm_errorWrap__0TYvv",successMessage:"AuthForm_successMessage__Vl8si",btnContainer:"AuthForm_btnContainer__hf1ao",button:"AuthForm_button__+RFEI",text:"AuthForm_text__iaP49",link:"AuthForm_link__3I+HY",eyeBtn:"AuthForm_eyeBtn__6eQZ4",eyeIcon:"AuthForm_eyeIcon__4MRzf",crossIcon:"AuthForm_crossIcon__ZrnyS",confirmIcon:"AuthForm_confirmIcon__GT3ef"},g=function(e){var n=e.isRegister,s=e.onSubmit,i=n?h:p,c=(0,t.useState)(!1),l=(0,r.Z)(c,2),m=l[0],g=l[1],v=(0,t.useState)(!1),N=(0,r.Z)(v,2),j=N[0],b=N[1],y=function(){g(!m)},I=function(){b(!j)},Z=function(e,n){return e[n]},F=function(e,n){return!e[n]};return(0,u.jsx)(o.J9,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:i,onSubmit:s,children:function(e){var s=e.isSubmitting,r=e.errors,t=e.touched,i=e.setFieldValue;return(0,u.jsxs)(o.l0,{className:"".concat(w.form," ").concat(n?w.register:w.login),children:[(0,u.jsxs)("div",{className:w.inputContainer,children:[n?(0,u.jsx)("h2",{className:w.title,children:"Registration"}):(0,u.jsx)("h2",{className:w.title,children:"Login"}),(0,u.jsxs)("div",{className:w.inputWrap,children:[(0,u.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,u.jsx)(o.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:"".concat(w.input," ").concat(t.email&&r.email&&w.errorInput)}),t.email&&Z(r,"email")&&(0,u.jsx)(f.$iT,{id:"svg",className:w.crossIcon,onClick:function(){return function(e,n){n(e,"")}("email",i)}}),t.email&&F(r,"email")&&(0,u.jsx)(x.oFd,{id:"svg",className:w.confirmIcon})]}),(0,u.jsx)("div",{className:w.errorWrap,children:(0,u.jsx)(o.Bc,{name:"email",component:"div",className:w.error})}),(0,u.jsxs)("div",{className:w.inputWrap,children:[(0,u.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,u.jsx)(o.gN,{id:"password",type:m?"text":"password",name:"password",placeholder:"Password",className:"".concat(w.input," ").concat(t.password&&!r.password&&w.successInput," ").concat(t.password&&r.password&&w.errorInput)}),m?(0,u.jsx)("button",{type:"button",onClick:y,className:w.eyeBtn,children:(0,u.jsx)(_.quy,{id:"svg",className:w.eyeIcon})}):(0,u.jsx)("button",{type:"button",onClick:y,className:w.eyeBtn,children:(0,u.jsx)(_.ONY,{id:"svg",className:w.eyeIcon})}),t.password&&!r.password?(0,u.jsx)("div",{className:w.successMessage,children:"Password is secure"}):(0,u.jsx)("div",{className:w.errorWrap,children:(0,u.jsx)(o.Bc,{name:"password",component:"div",className:w.error})})]}),n&&(0,u.jsxs)("div",{className:w.inputWrap,children:[(0,u.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,u.jsx)(o.gN,{id:"confirmPassword",type:j?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(w.input," ").concat(t.confirmPassword&&!r.confirmPassword&&w.successInput," ").concat(t.confirmPassword&&r.confirmPassword&&w.errorInput)}),j?(0,u.jsx)("button",{type:"button",onClick:I,className:w.eyeBtn,children:(0,u.jsx)(_.quy,{id:"svg",className:w.eyeIcon})}):(0,u.jsx)("button",{type:"button",onClick:I,className:w.eyeBtn,children:(0,u.jsx)(_.ONY,{id:"svg",className:w.eyeIcon})}),(0,u.jsx)("div",{className:w.errorWrap,children:(0,u.jsx)(o.Bc,{name:"confirmPassword",component:"div",className:w.error})})]})]}),(0,u.jsxs)("div",{className:w.btnContainer,children:[(0,u.jsx)(d,{type:"submit",disabled:s,className:w.button,children:n?"Registration":"Login"}),n?(0,u.jsxs)("p",{className:w.text,children:["Already have an account?"," ",(0,u.jsx)(a.rU,{to:"/login",className:w.link,children:"Login"})]}):(0,u.jsxs)("p",{className:w.text,children:["Don't have an account?"," ",(0,u.jsx)(a.rU,{to:"/register",className:w.link,children:"Register"})]})]})]})}})}},2024:function(e,n,s){s.d(n,{Z:function(){return a}});s(2791);var r="Background_background__WcKDH",t=s(184),a=function(){return(0,t.jsx)("div",{className:r})}},5700:function(e,n,s){s.d(n,{Z:function(){return a}});var r="Container_container__VVOCq",t=s(184),a=function(e){var n=e.children,s=e.className;return(0,t.jsx)("div",{className:"".concat(r," ").concat(s),children:n})}},1294:function(e,n,s){var r=s(4063),t=s(184);n.Z=function(e){var n=e.children,s=e.className;return(0,t.jsx)("div",{className:"".concat(r.Z.section," ").concat(s),children:n})}},7644:function(e,n,s){s.r(n),s.d(n,{default:function(){return x}});var r=s(4165),t=s(5861),a=s(9439),o=s(2791),i=s(9434),c=s(7689),u=s(2024),l=s(6933),d=s(1294),m=s(5700),h=s(3595),p=s(9869),_=s(4063),f=s(184),x=function(){var e=(0,c.s0)(),n=(0,i.I0)(),s=((0,i.v9)(p.hg),(0,i.v9)(p.rU),(0,o.useState)(null)),x=(0,a.Z)(s,2),w=x[0],g=x[1],v=function(){var s=(0,t.Z)((0,r.Z)().mark((function s(t,a){var o,i,c,u;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=t.email,i=t.password,c=a.setSubmitting,u={email:o,password:i},s.prev=3,s.next=6,n((0,h.IU)(u));case 6:e("/user",{state:{from:"/register"}}),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(3),g(s.t0),console.log("Something went wrong",s.t0);case 13:return s.prev=13,c(!1),s.finish(13);case 16:case"end":return s.stop()}}),s,null,[[3,9,13,16]])})));return function(e,n){return s.apply(this,arguments)}}();return(0,f.jsxs)(d.Z,{className:_.Z.sectionRegister,children:[(0,f.jsx)(u.Z,{}),(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(l.Z,{isRegister:!0,onSubmit:v}),w&&(0,f.jsxs)("div",{children:["Error: ",w.message]})]})]})}},9869:function(e,n,s){s.d(n,{Qb:function(){return o},hg:function(){return a},rU:function(){return t},y6:function(){return r}});var r=function(e){return e.auth.isLogin},t=function(e){return e.auth.error},a=function(e){return e.auth.isLoading},o=function(e){return e.auth.isLoggedIn}},4063:function(e,n){n.Z={section:"Section_section__Z2PLw",sectionlogin:"Section_sectionlogin__Bu46X",sectionRegister:"Section_sectionRegister__aDA4N"}}}]);
//# sourceMappingURL=644.d0fca5da.chunk.js.map