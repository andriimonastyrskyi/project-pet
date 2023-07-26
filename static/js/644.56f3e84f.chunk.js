"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{250:function(e,s,n){n.d(s,{Z:function(){return f}});var r=n(9439),t=n(2791),a=n(1087),o=n(5705),c=n(9894),i=n(6727),l=i.Ry().shape({email:i.Z_().email("Invalid email address").required("Required"),password:i.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter"),confirmPassword:i.Z_().nullable().when("password",(function(e,s){return e?s.required("Password confirmation required").oneOf([i.iH("password")],"Passwords must match"):s.notRequired()}))}),u=i.Ry().shape({email:i.Z_().email("Invalid email address").required("Required"),password:i.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter")}),d=n(5763),m=n(1213),h=n(9126),p={form:"AuthForm_form__N+Fyz",register:"AuthForm_register__LBbT3",login:"AuthForm_login__nxTrt",inputContainer:"AuthForm_inputContainer__44gmQ",title:"AuthForm_title__nrVeh",inputWrap:"AuthForm_inputWrap__t4Enc",input:"AuthForm_input__dB7h2",successInput:"AuthForm_successInput__oQ9qy",errorInput:"AuthForm_errorInput__Pe3yE",errorWrap:"AuthForm_errorWrap__0TYvv",successMessage:"AuthForm_successMessage__Vl8si",btnContainer:"AuthForm_btnContainer__hf1ao",button:"AuthForm_button__+RFEI",text:"AuthForm_text__iaP49",link:"AuthForm_link__3I+HY",eyeBtn:"AuthForm_eyeBtn__6eQZ4",eyeIcon:"AuthForm_eyeIcon__4MRzf",crossIcon:"AuthForm_crossIcon__ZrnyS",confirmIcon:"AuthForm_confirmIcon__GT3ef"},_=n(184),f=function(e){var s=e.isRegister,n=e.onSubmit,i=s?l:u,f=(0,t.useState)(!1),x=(0,r.Z)(f,2),w=x[0],v=x[1],N=(0,t.useState)(!1),j=(0,r.Z)(N,2),g=j[0],b=j[1],y=function(){v(!w)},Z=function(){b(!g)},I=function(e,s){return e[s]},F=function(e,s){return!e[s]};return(0,_.jsx)(o.J9,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:i,onSubmit:n,children:function(e){var n=e.isSubmitting,r=e.errors,t=e.touched,i=e.setFieldValue;return(0,_.jsxs)(o.l0,{className:"".concat(p.form," ").concat(s?p.register:p.login),children:[(0,_.jsxs)("div",{className:p.inputContainer,children:[s?(0,_.jsx)("h2",{className:p.title,children:"Registration"}):(0,_.jsx)("h2",{className:p.title,children:"Login"}),(0,_.jsxs)("div",{className:p.inputWrap,children:[(0,_.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,_.jsx)(o.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:"".concat(p.input," ").concat(t.email&&r.email&&p.errorInput)}),t.email&&I(r,"email")&&(0,_.jsx)(m.$iT,{id:"svg",className:p.crossIcon,onClick:function(){return function(e,s){s(e,"")}("email",i)}}),t.email&&F(r,"email")&&(0,_.jsx)(h.oFd,{id:"svg",className:p.confirmIcon})]}),(0,_.jsx)("div",{className:p.errorWrap,children:(0,_.jsx)(o.Bc,{name:"email",component:"div",className:p.error})}),(0,_.jsxs)("div",{className:p.inputWrap,children:[(0,_.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,_.jsx)(o.gN,{id:"password",type:w?"text":"password",name:"password",placeholder:"Password",className:"".concat(p.input," ").concat(t.password&&!r.password&&p.successInput," ").concat(t.password&&r.password&&p.errorInput)}),w?(0,_.jsx)("button",{type:"button",onClick:y,className:p.eyeBtn,children:(0,_.jsx)(d.quy,{id:"svg",className:p.eyeIcon})}):(0,_.jsx)("button",{type:"button",onClick:y,className:p.eyeBtn,children:(0,_.jsx)(d.ONY,{id:"svg",className:p.eyeIcon})}),t.password&&!r.password?(0,_.jsx)("div",{className:p.successMessage,children:"Password is secure"}):(0,_.jsx)("div",{className:p.errorWrap,children:(0,_.jsx)(o.Bc,{name:"password",component:"div",className:p.error})})]}),s&&(0,_.jsxs)("div",{className:p.inputWrap,children:[(0,_.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,_.jsx)(o.gN,{id:"confirmPassword",type:g?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(p.input," ").concat(t.confirmPassword&&!r.confirmPassword&&p.successInput," ").concat(t.confirmPassword&&r.confirmPassword&&p.errorInput)}),g?(0,_.jsx)("button",{type:"button",onClick:Z,className:p.eyeBtn,children:(0,_.jsx)(d.quy,{id:"svg",className:p.eyeIcon})}):(0,_.jsx)("button",{type:"button",onClick:Z,className:p.eyeBtn,children:(0,_.jsx)(d.ONY,{id:"svg",className:p.eyeIcon})}),(0,_.jsx)("div",{className:p.errorWrap,children:(0,_.jsx)(o.Bc,{name:"confirmPassword",component:"div",className:p.error})})]})]}),(0,_.jsxs)("div",{className:p.btnContainer,children:[(0,_.jsx)(c.Z,{type:"submit",disabled:n,className:p.button,children:s?"Registration":"Login"}),s?(0,_.jsxs)("p",{className:p.text,children:["Already have an account?"," ",(0,_.jsx)(a.rU,{to:"/login",className:p.link,children:"Login"})]}):(0,_.jsxs)("p",{className:p.text,children:["Don't have an account?"," ",(0,_.jsx)(a.rU,{to:"/register",className:p.link,children:"Register"})]})]})]})}})}},2024:function(e,s,n){n.d(s,{Z:function(){return a}});n(2791);var r="Background_background__WcKDH",t=n(184),a=function(){return(0,t.jsx)("div",{className:r})}},9894:function(e,s,n){n.d(s,{Z:function(){return c}});var r=n(4925),t=(n(2791),"Button_button__wiIYs"),a=n(184),o=["children","className","onClick","type"],c=function(e){var s=e.children,n=e.className,c=e.onClick,i=e.type;(0,r.Z)(e,o);return(0,a.jsx)("button",{type:i,onClick:c,className:"".concat(t," ").concat(n," "),children:s})}},5700:function(e,s,n){n.d(s,{Z:function(){return a}});var r="Container_container__VVOCq",t=n(184),a=function(e){var s=e.children,n=e.className;return(0,t.jsx)("div",{className:"".concat(r," ").concat(n),children:s})}},1294:function(e,s,n){var r=n(4063),t=n(184);s.Z=function(e){var s=e.children,n=e.className;return(0,t.jsx)("div",{className:"".concat(r.Z.section," ").concat(n),children:s})}},7644:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var r=n(4165),t=n(5861),a=n(9439),o=n(2791),c=n(9434),i=n(7689),l=n(2024),u=n(250),d=n(1294),m=n(5700),h=n(3595),p=n(9869),_=n(4063),f=n(184),x=function(){var e=(0,i.s0)(),s=(0,c.I0)(),n=((0,c.v9)(p.hg),(0,c.v9)(p.rU),(0,o.useState)(null)),x=(0,a.Z)(n,2),w=x[0],v=x[1],N=function(){var n=(0,t.Z)((0,r.Z)().mark((function n(t,a){var o,c,i,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.email,c=t.password,i=a.setSubmitting,l={email:o,password:c},n.prev=3,n.next=6,s((0,h.IU)(l));case 6:e("/user",{state:{from:"/register"}}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(3),v(n.t0),console.log("Something went wrong",n.t0);case 13:return n.prev=13,i(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,9,13,16]])})));return function(e,s){return n.apply(this,arguments)}}();return(0,f.jsxs)(d.Z,{className:_.Z.sectionRegister,children:[(0,f.jsx)(l.Z,{}),(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(u.Z,{isRegister:!0,onSubmit:N}),w&&(0,f.jsxs)("div",{children:["Error: ",w.message]})]})]})}},4063:function(e,s){s.Z={section:"Section_section__Z2PLw",sectionlogin:"Section_sectionlogin__Bu46X",sectionRegister:"Section_sectionRegister__aDA4N"}}}]);
//# sourceMappingURL=644.56f3e84f.chunk.js.map