"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{6933:function(e,s,n){n.d(s,{Z:function(){return N}});var r=n(9439),t=n(2791),a=n(1087),o=n(5705),c=n(4925),i="Button_button__wiIYs",l=n(184),u=["children","className","onClick","type"],d=function(e){var s=e.children,n=e.className,r=e.onClick,t=e.type;(0,c.Z)(e,u);return(0,l.jsx)("button",{type:t,onClick:r,className:"".concat(i," ").concat(n," "),children:s})},m=n(6727),h=m.Ry().shape({email:m.Z_().email("Invalid email address").required("Required"),password:m.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter"),confirmPassword:m.Z_().nullable().when("password",(function(e,s){return e?s.required("Password confirmation required").oneOf([m.iH("password")],"Passwords must match"):s.notRequired()}))}),p=m.Ry().shape({email:m.Z_().email("Invalid email address").required("Required"),password:m.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter")}),_=n(5763),f=n(1213),x=n(9126),w={form:"AuthForm_form__N+Fyz",register:"AuthForm_register__LBbT3",login:"AuthForm_login__nxTrt",inputContainer:"AuthForm_inputContainer__44gmQ",title:"AuthForm_title__nrVeh",inputWrap:"AuthForm_inputWrap__t4Enc",input:"AuthForm_input__dB7h2",successInput:"AuthForm_successInput__oQ9qy",errorInput:"AuthForm_errorInput__Pe3yE",errorWrap:"AuthForm_errorWrap__0TYvv",successMessage:"AuthForm_successMessage__Vl8si",btnContainer:"AuthForm_btnContainer__hf1ao",button:"AuthForm_button__+RFEI",text:"AuthForm_text__iaP49",link:"AuthForm_link__3I+HY",eyeBtn:"AuthForm_eyeBtn__6eQZ4",eyeIcon:"AuthForm_eyeIcon__4MRzf",crossIcon:"AuthForm_crossIcon__ZrnyS",confirmIcon:"AuthForm_confirmIcon__GT3ef"},N=function(e){var s=e.isRegister,n=e.onSubmit,c=s?h:p,i=(0,t.useState)(!1),u=(0,r.Z)(i,2),m=u[0],N=u[1],v=(0,t.useState)(!1),j=(0,r.Z)(v,2),g=j[0],b=j[1],y=function(){N(!m)},I=function(){b(!g)},Z=function(e,s){return e[s]},F=function(e,s){return!e[s]};return(0,l.jsx)(o.J9,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:c,onSubmit:n,children:function(e){var n=e.isSubmitting,r=e.errors,t=e.touched,c=e.setFieldValue;return(0,l.jsxs)(o.l0,{className:"".concat(w.form," ").concat(s?w.register:w.login),children:[(0,l.jsxs)("div",{className:w.inputContainer,children:[s?(0,l.jsx)("h2",{className:w.title,children:"Registration"}):(0,l.jsx)("h2",{className:w.title,children:"Login"}),(0,l.jsxs)("div",{className:w.inputWrap,children:[(0,l.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,l.jsx)(o.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:"".concat(w.input," ").concat(t.email&&r.email&&w.errorInput)}),t.email&&Z(r,"email")&&(0,l.jsx)(f.$iT,{id:"svg",className:w.crossIcon,onClick:function(){return function(e,s){s(e,"")}("email",c)}}),t.email&&F(r,"email")&&(0,l.jsx)(x.oFd,{id:"svg",className:w.confirmIcon})]}),(0,l.jsx)("div",{className:w.errorWrap,children:(0,l.jsx)(o.Bc,{name:"email",component:"div",className:w.error})}),(0,l.jsxs)("div",{className:w.inputWrap,children:[(0,l.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,l.jsx)(o.gN,{id:"password",type:m?"text":"password",name:"password",placeholder:"Password",className:"".concat(w.input," ").concat(t.password&&!r.password&&w.successInput," ").concat(t.password&&r.password&&w.errorInput)}),m?(0,l.jsx)("button",{type:"button",onClick:y,className:w.eyeBtn,children:(0,l.jsx)(_.quy,{id:"svg",className:w.eyeIcon})}):(0,l.jsx)("button",{type:"button",onClick:y,className:w.eyeBtn,children:(0,l.jsx)(_.ONY,{id:"svg",className:w.eyeIcon})}),t.password&&!r.password?(0,l.jsx)("div",{className:w.successMessage,children:"Password is secure"}):(0,l.jsx)("div",{className:w.errorWrap,children:(0,l.jsx)(o.Bc,{name:"password",component:"div",className:w.error})})]}),s&&(0,l.jsxs)("div",{className:w.inputWrap,children:[(0,l.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,l.jsx)(o.gN,{id:"confirmPassword",type:g?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(w.input," ").concat(t.confirmPassword&&!r.confirmPassword&&w.successInput," ").concat(t.confirmPassword&&r.confirmPassword&&w.errorInput)}),g?(0,l.jsx)("button",{type:"button",onClick:I,className:w.eyeBtn,children:(0,l.jsx)(_.quy,{id:"svg",className:w.eyeIcon})}):(0,l.jsx)("button",{type:"button",onClick:I,className:w.eyeBtn,children:(0,l.jsx)(_.ONY,{id:"svg",className:w.eyeIcon})}),(0,l.jsx)("div",{className:w.errorWrap,children:(0,l.jsx)(o.Bc,{name:"confirmPassword",component:"div",className:w.error})})]})]}),(0,l.jsxs)("div",{className:w.btnContainer,children:[(0,l.jsx)(d,{type:"submit",disabled:n,className:w.button,children:s?"Registration":"Login"}),s?(0,l.jsxs)("p",{className:w.text,children:["Already have an account?"," ",(0,l.jsx)(a.rU,{to:"/login",className:w.link,children:"Login"})]}):(0,l.jsxs)("p",{className:w.text,children:["Don't have an account?"," ",(0,l.jsx)(a.rU,{to:"/register",className:w.link,children:"Register"})]})]})]})}})}},2024:function(e,s,n){n.d(s,{Z:function(){return a}});n(2791);var r="Background_background__WcKDH",t=n(184),a=function(){return(0,t.jsx)("div",{className:r})}},5700:function(e,s,n){n.d(s,{Z:function(){return a}});var r="Container_container__VVOCq",t=n(184),a=function(e){var s=e.children,n=e.className;return(0,t.jsx)("div",{className:"".concat(r," ").concat(n),children:s})}},1294:function(e,s,n){var r=n(4063),t=n(184);s.Z=function(e){var s=e.children,n=e.className;return(0,t.jsx)("div",{className:"".concat(r.Z.section," ").concat(n),children:s})}},7644:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var r=n(4165),t=n(5861),a=n(9439),o=n(2791),c=n(9434),i=n(7689),l=n(2024),u=n(6933),d=n(1294),m=n(5700),h=n(3595),p=n(9869),_=n(4063),f=n(184),x=function(){var e=(0,i.s0)(),s=(0,c.I0)(),n=((0,c.v9)(p.hg),(0,c.v9)(p.rU),(0,o.useState)(null)),x=(0,a.Z)(n,2),w=x[0],N=x[1],v=function(){var n=(0,t.Z)((0,r.Z)().mark((function n(t,a){var o,c,i,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.email,c=t.password,i=a.setSubmitting,l={email:o,password:c},n.prev=3,n.next=6,s((0,h.IU)(l));case 6:e("/user",{state:{from:"/register"}}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(3),N(n.t0),console.log("Something went wrong",n.t0);case 13:return n.prev=13,i(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,9,13,16]])})));return function(e,s){return n.apply(this,arguments)}}();return(0,f.jsxs)(d.Z,{className:_.Z.sectionRegister,children:[(0,f.jsx)(l.Z,{}),(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(u.Z,{isRegister:!0,onSubmit:v}),w&&(0,f.jsxs)("div",{children:["Error: ",w.message]})]})]})}},4063:function(e,s){s.Z={section:"Section_section__Z2PLw",sectionlogin:"Section_sectionlogin__Bu46X",sectionRegister:"Section_sectionRegister__aDA4N"}}}]);
//# sourceMappingURL=644.96678c6f.chunk.js.map