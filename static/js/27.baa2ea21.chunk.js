(this["webpackJsonpairline-data-science"]=this["webpackJsonpairline-data-science"]||[]).push([[27],{206:function(e,t,a){"use strict";var l=a(27),n=a(11),c=a(4),r=a.n(c),o=a(0),m=a.n(o),i=(a(32),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),s=function(e){var t,a=e.tag,c=e.className,o=e.type,s=Object(n.a)(e,["tag","className","type"]),u=r()(Object(l.a)({},o,!!o),c);return t=a||(!a&&i[o]?i[o]:"p"),m.a.createElement(t,Object.assign({},s,{className:u}))};s.defaultProps={type:"p"},t.a=s},210:function(e,t,a){"use strict";var l=a(11),n=a(0),c=a.n(n),r=(a(32),a(28)),o=a(542),m=a(543),i=a(206),s=r.a.create("page"),u=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,r=e.className,u=e.children,p=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),E=s.b("px-3",r);return c.a.createElement(n,Object.assign({className:E},p),c.a.createElement("div",{className:s.e("header")},t&&"string"===typeof t?c.a.createElement(i.a,{type:"h1",className:s.e("title")},t):t,a&&c.a.createElement(o.a,{className:s.e("breadcrumb")},c.a.createElement(m.a,null,"Home"),a.length&&a.map((function(e,t){var a=e.name,l=e.active;return c.a.createElement(m.a,{key:t,active:l},a)})))),u)};u.defaultProps={tag:"div",title:""},t.a=u},961:function(e,t,a){"use strict";a.r(t);var l=a(14),n=a(13),c=a(15),r=a(16),o=a(17),m=a(210),i=a(0),s=a.n(i),u=a(594),p=a(152),E=a(145),d=a(150),f=a(146),h=a(138),b=a(24),y=a(176),v=a(422),S=a(580),g=a(577),N=a(578),C=a(311),x=a(408),k=a(620),F=a(621),O=a(545),j=a(38),w=a(36),M=a(37),R=Object(v.a)((function(e){return{root:{width:"100%"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function D(){var e=R(),t=s.a.useState(0),a=Object(y.a)(t,2),l=a[0],n=a[1],c=["Name","Department","Data Load","Quality Control","Data Analysis","Model","Evaluation"];return s.a.createElement("div",{className:e.root},s.a.createElement(S.a,{activeStep:l,alternativeLabel:!0},c.map((function(e){return s.a.createElement(g.a,{key:e},s.a.createElement(N.a,null,e))}))),s.a.createElement("div",null,l===c.length?s.a.createElement("div",null,s.a.createElement(x.a,{className:e.instructions},"All steps completed"),s.a.createElement(C.a,{onClick:function(){n(0)}},"Return")):s.a.createElement("div",null,s.a.createElement(x.a,{className:e.instructions},function(e){switch(e){case 0:return s.a.createElement(k.a,null,s.a.createElement(F.a,{addonType:"prepend"},s.a.createElement(O.a,null,"Name")),s.a.createElement(j.a,{placeholder:"Create Use Case Name..."}));case 1:return s.a.createElement(w.a,null,s.a.createElement(M.a,{for:"exampleSelect"},"Select Department"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Safety"),s.a.createElement("option",null,"Flight Operations"),s.a.createElement("option",null,"ME")));case 2:return s.a.createElement(w.a,null,s.a.createElement(M.a,{for:"exampleSelect"},"Select Data Load Connection"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"load1"),s.a.createElement("option",null,"load2"),s.a.createElement("option",null,"load3")));case 3:return s.a.createElement(w.a,null,s.a.createElement(M.a,{for:"exampleSelect"},"Quality Control Rule"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Rule1"),s.a.createElement("option",null,"Rule2"),s.a.createElement("option",null,"Rule3")),s.a.createElement(M.a,{for:"exampleSelect"},"Quality Control Format"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Format1"),s.a.createElement("option",null,"Format2"),s.a.createElement("option",null,"Format3")));case 4:return s.a.createElement(w.a,null,s.a.createElement(M.a,{for:"exampleSelect"},"Select Data Analysis Format"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Format1"),s.a.createElement("option",null,"Format2"),s.a.createElement("option",null,"Format3")));case 5:return s.a.createElement(w.a,null,s.a.createElement(M.a,{for:"exampleSelect"},"Select Model"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Model1"),s.a.createElement("option",null,"Model2"),s.a.createElement("option",null,"Model3")),s.a.createElement(M.a,{for:"exampleSelect"},"Select Model Process"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Process1"),s.a.createElement("option",null,"Process2"),s.a.createElement("option",null,"Process3")));case 6:return s.a.createElement(w.a,null,s.a.createElement(M.a,{for:"exampleSelect"},"Select Evaluation Format"),s.a.createElement(j.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null),s.a.createElement("option",null,"Format1"),s.a.createElement("option",null,"Format2"),s.a.createElement("option",null,"Format3")));default:return"Unknown stepIndex"}}(l)),s.a.createElement("div",null,s.a.createElement(C.a,{disabled:0===l,onClick:function(){n((function(e){return e-1}))},className:e.backButton},"Back"),s.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){n((function(e){return e+1}))}},l===c.length-1?"Finish":"Next")))))}var P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),m=0;m<n;m++)o[m]=arguments[m];return(a=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={redirect:!1},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return s.a.createElement(b.a,{to:"/CreateUseCasePage"})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement(m.a,{title:"Create New Use Case",breadcrumbs:[{name:"Create Use Case / Create New Use Case",active:!0}]},s.a.createElement(u.a,null,s.a.createElement(p.a,null,s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(d.a,null,"Use Case Fields"),s.a.createElement(f.a,null,s.a.createElement(h.a,null,s.a.createElement(D,null)))))),s.a.createElement(u.a,null,s.a.createElement(p.a,null,s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(d.a,null,"View Current Selections"),s.a.createElement(f.a,null)))))}}]),t}(s.a.Component);t.default=P}}]);
//# sourceMappingURL=27.baa2ea21.chunk.js.map