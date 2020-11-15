(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(6),r=c.n(i),l=(c(12),c(2));var o=function(e){var t=e.pages,c=e.currentPage,n=e.setCurrentPage;return Object(a.useEffect)((function(){document.title=c}),[c]),Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{className:"name",children:"Mol&Ram\u2763"}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:t.map((function(e,t){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#".concat(e.toLowerCase()),onClick:function(){return n(e)},className:c===e?"active":"",children:e})},t)}))})})]})};var j=function(){return Object(s.jsxs)("footer",{className:"contact-info",children:[Object(s.jsx)("div",{className:"contact",children:Object(s.jsx)("a",{className:"phone",href:"tel:8634483820",children:"Phone"})}),Object(s.jsx)("div",{className:"contact",children:Object(s.jsx)("a",{className:"email",href:"mailto:jesusm1948@gmail.com",children:"Email"})}),Object(s.jsx)("div",{className:"contact",children:Object(s.jsx)("a",{className:"big-window",href:"https://github.com/Kos-MosV4",children:"GitHub"})}),Object(s.jsx)("div",{className:"contact",children:Object(s.jsx)("a",{className:"linkedin",href:"https://www.linkedin.com/in/jesus-molina-9b09921aa/",children:"LinkedIn"})})]})};var d=function(){return Object(s.jsxs)("section",{id:"about-me",children:[Object(s.jsx)("div",{className:"left-side",children:Object(s.jsx)("h2",{className:"section-title",children:"About Me"})}),Object(s.jsx)("div",{className:"synopsis",children:Object(s.jsx)("p",{children:"Hello there! Im Jesus Molina, really cool of you to drop by!(\u261e\uff9f\u30ee\uff9f)\u261e! I am a Full Stack Web Developer based in Central Florida. Have a look around my portfolio and see if anything peeks your interest! Hope to get to work together someday!!!"})})]})};var h=function(){return Object(s.jsxs)("section",{id:"projects-portfolio",children:[Object(s.jsx)("div",{className:"left-side",children:Object(s.jsx)("h2",{className:"section-title",children:"Portfolio"})}),Object(s.jsx)("div",{className:"projects",children:[{name:"OtakuHQ",class:"otaku",tech:"MERN",link:"https://otakuhq.herokuapp.com/"},{name:"DC-Adopt",class:"adopt",tech:"Node, Express, Handlebars, MySQL",link:"https://dc-adopt.herokuapp.com/"},{name:"Covid-19 Interactive Map",class:"covid",tech:"HTML, CSS, JS",link:"https://hannahbrijenkins.github.io/COVID19-Interactive-Map/"}].map((function(e,t){return Object(s.jsx)("a",{className:"project ".concat(e.class),href:e.link,children:Object(s.jsxs)("div",{className:"project-description",children:[Object(s.jsx)("h3",{className:"project-name",children:e.name}),Object(s.jsx)("p",{className:"project-tech",children:e.tech})]})},t)}))})]})},m=c(3),u=c(5);var b=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),c=t[0],n=t[1],i=c.name,r=c.email,o=c.message,j=Object(a.useState)(""),d=Object(l.a)(j,2),h=d[0],b=d[1];function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);b(t?"":"Your email is invalid.")}else e.target.value.length?b(""):b("".concat(e.target.name," is required."));n(Object(u.a)(Object(u.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))}return Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"left-side",children:Object(s.jsx)("h2",{className:"section-title",children:"Contact Me"})}),Object(s.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",name:"name",id:"name",defaultValue:i,onBlur:O})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(s.jsx)("input",{type:"email",name:"email",id:"email",defaultValue:r,onBlur:O})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{name:"message",id:"message",rows:"5",defaultValue:o,onBlur:O})]}),h&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"error-text",children:h})}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})};var O=function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"left-side",children:Object(s.jsx)("h2",{className:"section-title",children:"Resume"})}),Object(s.jsx)("div",{className:"resume",children:Object(s.jsxs)("p",{children:["Check out my Resume using this"," ",Object(s.jsx)("a",{href:"https://drive.google.com/file/d/1JBkijPYHnZRhwCCYmgc51d1VfloktdQc/view?usp=sharing",children:"link!"})," ","It contains a list of my Web Dev skills!"]})})]})};var x=function(){var e=["AboutMe","Portfolio","ContactMe","Resume"],t=Object(a.useState)(e[0]),c=Object(l.a)(t,2),n=c[0],i=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{pages:e,currentPage:n,setCurrentPage:i}),Object(s.jsx)("main",{children:function(){switch(n){case"Portfolio":return Object(s.jsx)(h,{});case"ContactMe":return Object(s.jsx)(b,{});case"Resume":return Object(s.jsx)(O,{});default:return Object(s.jsx)(d,{})}}()}),Object(s.jsx)(j,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.0394086c.chunk.js.map