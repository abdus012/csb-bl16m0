(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{53:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(22),o=c(8),i=c(3),a=c(23),r=c(11),l=c.n(r),j=(c(53),c(0));var u=function(e){var t=e.text,c=e.colors,n=e.clicked;return Object(j.jsx)("button",{className:"Option_main",style:{backgroundColor:c},value:t,onClick:function(e){n(e.target.value)},children:t})},d=(c(55),function(e){var t=e.Count,c=[];l.a.get("https://seq-backend-postgres.herokuapp.com/getNewUserInSleepApp").then((function(e){c=Object(a.a)(e.data),console.log(c)})).catch((function(e){return console.error(e)}));var s=Object(n.useState)({username:"",question1:"",question2:""}),r=Object(o.a)(s,2),d=r[0],h=r[1],b=function(e){h(Object(i.a)(Object(i.a)({},d),{},{question1:e}))},O=function(e){h(Object(i.a)(Object(i.a)({},d),{},{question2:e}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"main__div",children:[Object(j.jsx)("div",{className:"page1",children:Object(j.jsxs)("div",{className:"innerPage",children:[Object(j.jsxs)("h1",{children:["Hey! I'm ",Object(j.jsx)("span",{children:"wysa"})]}),Object(j.jsx)("p",{children:"Our conversations are private & anonymous, so there is no login.Just choose a nickname and we're good to go"}),Object(j.jsx)("input",{type:"text",placeholder:"Choose a nickname...",value:d.username,onChange:function(e){h(Object(i.a)(Object(i.a)({},d),{},{username:e.target.value}))}}),Object(j.jsxs)("p",{children:["By continuing, I confirm I am 13 or older and accept the"," ",Object(j.jsx)("a",{href:"/",children:"Terms of Service"})," and"," ",Object(j.jsx)("a",{href:"/",children:"Privacy Policy"})]})]})}),Object(j.jsx)("div",{className:"page2",style:{display:1===t&&"inline"},children:Object(j.jsxs)("div",{className:"innerPage",children:[Object(j.jsx)("h2",{children:"Let's say in a few weeks, you're sleeping well. What would change?"}),Object(j.jsx)("p",{children:"Select the change you would like to see."}),Object(j.jsx)(u,{text:"I would go to sleep easily",colors:"#3BACB6",clicked:b}),Object(j.jsx)(u,{text:"I would sleep through the night",colors:"#3A5BA0",clicked:b}),Object(j.jsx)(u,{text:"I'd wake up on time, refreshed",colors:"#590696",clicked:b}),Object(j.jsx)("br",{})]})}),Object(j.jsxs)("div",{className:"page3",style:{display:2===t&&"inline"},children:[Object(j.jsxs)("div",{className:"innerPage",children:[Object(j.jsx)("h2",{children:"That's a great goal. How long have you been struggling with your sleep"}),Object(j.jsx)(u,{text:"Less than 2 weeks",colors:"#3BACB6",clicked:O}),Object(j.jsx)(u,{text:"2 to 8 Weeks",colors:"#3A5BA0",clicked:O}),Object(j.jsx)(u,{text:"More than 8 weeks",colors:"#590696",clicked:O})]}),Object(j.jsx)("button",{id:"next",onClick:function(){var e;""!==d.question1&&""!==d.question2?(e=d,console.log(e),l()({method:"POST",url:"https://seq-backend-postgres.herokuapp.com/pushNewUserInSleepApp",data:e}).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),alert("Submitted successfully"),h({username:"",question1:"",question2:""})):alert("Please complete all questions")},children:"Submit"})]})]})})});c(56);var h=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"inner_div",children:[0!==c&&Object(j.jsx)("button",{id:"prev",onClick:function(){c>0&&s(c-1)},children:"Prev"}),2!==c&&Object(j.jsx)("button",{id:"next",onClick:function(){c<2&&s(c+1)},children:"Next"})]}),Object(j.jsx)(d,{Count:c})]})},b=document.getElementById("root");Object(s.createRoot)(b).render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(h,{})}))}},[[57,1,2]]]);
//# sourceMappingURL=main.a5ce9ff6.chunk.js.map