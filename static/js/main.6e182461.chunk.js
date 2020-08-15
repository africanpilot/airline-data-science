(this["webpackJsonpairline-data-science"]=this["webpackJsonpairline-data-science"]||[]).push([[5],{137:function(e,a,t){},138:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),o=t.n(c),l=t(15),i=t(14),s=t(16),m=t(17),u=t(18),p=t(49),d=t(1),g=t.n(d),h=t(36);h.a.initialize("UA-110410381-1");var f=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}},{key:"sendPageView",value:function(e){h.a.set({page:e.pathname}),h.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),a}(r.a.Component);f.contextTypes={router:g.a.object};var b=f,E=t(12),v=t(27),y=t(142),A=v.a.create("content"),k=function(e){var a=e.tag,t=e.className,n=Object(E.a)(e,["tag","className"]),c=A.b(t);return r.a.createElement(a,Object.assign({className:c},n))};k.defaultProps={tag:y.a};var S=k,P=function(e){var a=e.children,t=Object(E.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},t),r.a.createElement(S,{fluid:!0},a))},N=t(143),x=t(144),O=t(145),C=function(e){return r.a.createElement("a",Object.assign({href:"https://africanpilot.github.io/airline-data-science",target:"_blank",rel:"noopener noreferrer"},e))},U=function(){return r.a.createElement(N.a,null,r.a.createElement(x.a,{navbar:!0},r.a.createElement(O.a,null,"2019 Airline Data Science Inc, Follow us on ",r.a.createElement(C,null,"Linkedin"))))},j=t(24),w=(t(31),t(4)),B=t.n(w),D=t(146),Q=t(147),I=t(148),T=t(149),z=t(150),F=function(e){var a=e.avatar,t=e.avatarSize,n=e.title,c=e.subtitle,o=e.text,l=e.children,i=e.className,s=Object(E.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),m=B()("bg-gradient-theme",i);return r.a.createElement(D.a,Object.assign({inverse:!0,className:m},s),r.a.createElement(Q.a,{className:"d-flex justify-content-center align-items-center flex-column"},r.a.createElement(j.a,{src:a,size:t,className:"mb-2"}),r.a.createElement(I.a,null,n),r.a.createElement(T.a,null,c),r.a.createElement(z.a,null,r.a.createElement("small",null,o))),l)};F.defaultProps={avatarSize:80};var K=F,H=t(151),L=t(95),M=function(e){var a=e.color,t=e.header,n=e.avatar,c=e.avatarSize,o=e.name,l=e.date,i=e.text,s=e.className,m=e.buttonProps,u=Object(E.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),p="bg-".concat(a),d=B()(p,s);return r.a.createElement(D.a,Object.assign({inverse:!0,className:d},u),t&&"string"===typeof t?r.a.createElement(H.a,{className:p},t):t,r.a.createElement(Q.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},r.a.createElement(j.a,{size:c,src:n}),r.a.createElement(z.a,{className:"text-center"},r.a.createElement("strong",{className:"d-block"},o),r.a.createElement("small",{className:"text-muted"},l)),r.a.createElement(z.a,{className:"text-center"},i),r.a.createElement(L.a,Object.assign({color:"primary"},m))))};M.defaultProps={color:"gradient-secondary",avatarSize:60};var J=t(152),q=function(e){var a=e.notificationsData;return a&&a.length&&a.map((function(e){var a=e.id,t=e.avatar,n=e.message,c=e.date;return r.a.createElement(J.a,{key:a,className:"pb-2"},r.a.createElement(J.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(j.a,{tag:J.a,object:!0,src:t,alt:"Avatar"})),r.a.createElement(J.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(J.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},c)))}))};q.defaultProps={notificationsData:[]};var R=q,V=t(6),X=t(139),W=t(39),Z=function(){return r.a.createElement(X.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(V.n,{size:"20",className:"cr-search-form__icon-search text-secondary"}),r.a.createElement(W.a,{type:"search",className:"cr-search-form__input",placeholder:"Search..."}))},G=t(75),Y=t.n(G),_=t(76),$=t.n(_),ee=t(77),ae=t.n(ee),te=t(78),ne=t.n(te),re=t(79),ce=t.n(re),oe=[{id:1,avatar:Y.a,message:"David sent you a message",date:"3 min ago"},{id:2,avatar:$.a,message:"Jane mentioned you here",date:"1 hour ago"},{id:3,avatar:ae.a,message:"Clark sent a pull request",date:"yesterday"},{id:4,avatar:ne.a,message:"Alicia signed up",date:"3 days ago"},{id:5,avatar:ce.a,message:"Keith shared this article",date:"a week ago"}],le=t(63),ie=t(153),se=t(154),me=t(155),ue=t(157),pe=t(158),de=t(159),ge=t(10),he=v.a.create("header"),fe=Object(le.a)({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(V.k),be=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},t.toggleNotificationPopover=function(){t.setState({isOpenNotificationPopover:!t.state.isOpenNotificationPopover}),t.state.isNotificationConfirmed||t.setState({isNotificationConfirmed:!0})},t.toggleUserCardPopover=function(){t.setState({isOpenUserCardPopover:!t.state.isOpenUserCardPopover})},t.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},t.state={redirect:!1},t.setRedirect=function(){t.setState({redirect:!0})},t.renderRedirect=function(){if(t.state.redirect)return r.a.createElement(ge.a,{to:"/login"})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isNotificationConfirmed;return r.a.createElement(N.a,{light:!0,expand:!0,className:he.b("bg-white")},r.a.createElement(x.a,{navbar:!0,className:"mr-2"},r.a.createElement(L.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(V.b,{size:25}))),r.a.createElement(x.a,{navbar:!0},r.a.createElement(Z,null),r.a.createElement(ie.a,{xl:25,lg:12,md:12},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement(L.a,{outline:!0,color:"secondary"},"Tasks"),"\xa0\xa0\xa0",r.a.createElement(L.a,{outline:!0,color:"secondary"},"Team"),"\xa0\xa0\xa0",r.a.createElement(L.a,{outline:!0,color:"secondary"},"Calender"))),r.a.createElement(x.a,{navbar:!0,className:he.e("nav-right")},r.a.createElement(O.a,{className:"d-inline-flex"},r.a.createElement(se.a,{id:"Popover1",className:"position-relative"},e?r.a.createElement(V.l,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):r.a.createElement(fe,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),r.a.createElement(me.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},r.a.createElement(ue.a,null,r.a.createElement(R,{notificationsData:oe})))),r.a.createElement(O.a,null,r.a.createElement(se.a,{id:"Popover2"},r.a.createElement(j.a,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement(me.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement(ue.a,{className:"p-0 border-light"},r.a.createElement(K,{title:"Richard Maku",subtitle:"makurichard14@gmail.com",text:"Last updated 3 mins ago",className:"border-light"},r.a.createElement(pe.a,{flush:!0},r.a.createElement(de.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(V.m,null)," Profile"),r.a.createElement(de.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(V.g,null)," Stats"),r.a.createElement(de.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(V.j,null)," Messages"),r.a.createElement(de.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(V.o,null)," Settings"),r.a.createElement(de.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(V.e,null)," Help"),this.renderRedirect(),r.a.createElement(de.a,{tag:"button",action:!0,onClick:this.setRedirect,className:"border-light"},r.a.createElement(V.d,null)," Signout"))))))))}}]),a}(r.a.Component),Ee=function(e){var a=e.component,t=e.layout,n=Object(E.a)(e,["component","layout"]);return r.a.createElement(ge.b,Object.assign({},n,{render:function(e){return r.a.createElement(t,null,r.a.createElement(a,e))}}))},ve=t(81),ye=t.n(ve),Ae={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to left, #43cea2, #185a9d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},ke=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleContentClick=function(e){!a.isSidebarOpen()||"xs"!==t.props.breakpoint&&"sm"!==t.props.breakpoint&&"md"!==t.props.breakpoint||t.openSidebar("close")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=e.breakpoint;a!==this.props.breakpoint&&this.checkBreakpoint(a)}},{key:"componentDidMount",value:function(){var e=this;this.checkBreakpoint(this.props.breakpoint),setTimeout((function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(V.f,null),message:"Welome to Airline Data Science!",level:"info"})}),1500),setTimeout((function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(V.i,null),message:"Create a new Data Science Project with easy Today!",level:"info"})}),2500)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,a=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(Te,null),r.a.createElement(S,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(be,null),a,r.a.createElement(U,null)),r.a.createElement(ye.a,{dismissible:!1,ref:function(a){return e.notificationSystem=a},style:Ae}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),a}(r.a.Component),Se=t(26),Pe=t(82),Ne=t.n(Pe),xe=t(55),Oe=t.n(xe),Ce=t(22),Ue=t(160),je={backgroundImage:'url("'.concat(Oe.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},we=[{to:"/",name:"dashboard",exact:!0,Icon:V.c},{to:"/CreateUseCasePage",name:"create use case",exact:!1,Icon:V.a},{to:"/LoadDataPage",name:"load data",exact:!1,Icon:V.a},{to:"/DataQualityAssessmentPage",name:"Quality Control",exact:!0,Icon:V.a},{to:"/DataAnalysisPage",name:"Data Analysis",exact:!0,Icon:V.a}],Be=[{to:"/MLModelsPage",name:"ML Models",exact:!1,Icon:V.a},{to:"/DLModelsPage",name:"DL Models",exact:!1,Icon:V.a},{to:"/EvaluateModelsPage",name:"Evaluate Models",exact:!1,Icon:V.a}],De=[{to:"/EvaluationPage",name:"Evaluation",exact:!0,Icon:V.a},{to:"/PresentationPage",name:"Presentation",exact:!0,Icon:V.a}],Qe=[{to:"/SettingsPage",name:"Settings",exact:!0,Icon:V.a}],Ie=v.a.create("sidebar"),Te=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isOpenComponents:!1,isOpenContents:!1,isOpenPages:!1},t.handleClick=function(e){return function(){t.setState((function(a){var t=a["isOpen".concat(e)];return Object(Se.a)({},"isOpen".concat(e),!t)}))}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:Ie.b(),"data-image":Oe.a},r.a.createElement("div",{className:Ie.e("background"),style:je}),r.a.createElement("div",{className:Ie.e("content")},r.a.createElement(N.a,null,r.a.createElement(C,{className:"nav-item"},r.a.createElement("img",{src:Ne.a,width:"205",height:"130",className:"pr-2",alt:""}))),r.a.createElement(x.a,{vertical:!0},we.map((function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(O.a,{key:a,className:Ie.e("nav-item")},r.a.createElement(se.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:Ce.b,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(O.a,{className:Ie.e("nav-item"),onClick:this.handleClick("Contents")},r.a.createElement(se.a,{className:Ie.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(V.a,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:""},"AI FACTORY")),r.a.createElement(V.h,{className:Ie.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenContents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(Ue.a,{isOpen:this.state.isOpenContents},Be.map((function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(O.a,{key:a,className:Ie.e("nav-item")},r.a.createElement(se.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:Ce.b,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}))),r.a.createElement(O.a,{className:Ie.e("nav-item"),onClick:this.handleClick("Pages")},r.a.createElement(se.a,{className:Ie.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(V.a,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:""},"EVALUATE CASE")),r.a.createElement(V.h,{className:Ie.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenPages?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(Ue.a,{isOpen:this.state.isOpenPages},De.map((function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(O.a,{key:a,className:Ie.e("nav-item")},r.a.createElement(se.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:Ce.b,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}))),r.a.createElement(O.a,{className:Ie.e("nav-item"),onClick:this.handleClick("Components")},r.a.createElement(se.a,{className:Ie.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(V.a,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:" align-self-start"},"SETTINGS")),r.a.createElement(V.h,{className:Ie.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenComponents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(Ue.a,{isOpen:this.state.isOpenComponents},Qe.map((function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(O.a,{key:a,className:Ie.e("nav-item")},r.a.createElement(se.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:Ce.b,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Ie.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}))))))}}]),a}(r.a.Component),ze=t(161),Fe=function(e){var a=e.color,t=void 0===a?"primary":a;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(ze.a,{color:t}))},Ke=t(83),He=t.n(Ke),Le=(t(137),r.a.lazy((function(){return t.e(28).then(t.bind(null,896))}))),Me=r.a.lazy((function(){return t.e(16).then(t.bind(null,927))})),Je=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,936))})),qe=r.a.lazy((function(){return Promise.all([t.e(0),t.e(19),t.e(27)]).then(t.bind(null,937))})),Re=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,938))})),Ve=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(15),t.e(26)]).then(t.bind(null,931))})),Xe=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,939))})),We=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(18)]).then(t.bind(null,932))})),Ze=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,940))})),Ge=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(14),t.e(17)]).then(t.bind(null,929))})),Ye=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,941))})),_e=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(13)]).then(t.bind(null,933))})),$e=r.a.lazy((function(){return t.e(21).then(t.bind(null,919))})),ea=r.a.lazy((function(){return t.e(22).then(t.bind(null,920))})),aa=r.a.lazy((function(){return t.e(23).then(t.bind(null,921))})),ta=r.a.lazy((function(){return t.e(20).then(t.bind(null,922))})),na=r.a.lazy((function(){return t.e(24).then(t.bind(null,923))})),ra=r.a.lazy((function(){return t.e(25).then(t.bind(null,924))})),ca=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(Ce.a,{basename:"/".concat("https://africanpilot.github.io/airline-data-science".split("/").pop())},r.a.createElement(b,null,r.a.createElement(ge.d,null,r.a.createElement(Ee,{exact:!0,path:"/login",layout:P,component:function(e){return r.a.createElement(Le,Object.assign({},e,{authState:p.a}))}}),r.a.createElement(Ee,{exact:!0,path:"/signup",layout:P,component:function(e){return r.a.createElement(Le,Object.assign({},e,{authState:p.b}))}}),r.a.createElement(ke,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Fe,null)},r.a.createElement(ge.b,{exact:!0,path:"/",component:Me}),r.a.createElement(ge.b,{exact:!0,path:"/CreateUseCasePage",component:Je}),r.a.createElement(ge.b,{exact:!0,path:"/NewUseCasePage",component:qe}),r.a.createElement(ge.b,{exact:!0,path:"/LoadDataPage",component:Re}),r.a.createElement(ge.b,{exact:!0,path:"/ConnectDataPage",component:Ve}),r.a.createElement(ge.b,{exact:!0,path:"/DataQualityAssessmentPage",component:Xe}),r.a.createElement(ge.b,{exact:!0,path:"/ReportPage",component:We}),r.a.createElement(ge.b,{exact:!0,path:"/DataAnalysisPage",component:Ze}),r.a.createElement(ge.b,{exact:!0,path:"/DataAnalysisBuildPage",component:Ge}),r.a.createElement(ge.b,{exact:!0,path:"/MLModelsPage",component:Ye}),r.a.createElement(ge.b,{exact:!0,path:"/CreateModelPage",component:_e}),r.a.createElement(ge.b,{exact:!0,path:"/ProcessModelPage",component:$e}),r.a.createElement(ge.b,{exact:!0,path:"/DLModelsPage",component:ea}),r.a.createElement(ge.b,{exact:!0,path:"/EvaluateModelsPage",component:aa}),r.a.createElement(ge.b,{exact:!0,path:"/EvaluationPage",component:ta}),r.a.createElement(ge.b,{exact:!0,path:"/PresentationPage",component:na}),r.a.createElement(ge.b,{exact:!0,path:"/SettingsPage",component:ra}))),r.a.createElement(ge.a,{to:"/"}))))}}]),a}(r.a.Component),oa=He()((function(e){var a=e.width;return a<575?{breakpoint:"xs"}:576<a&&a<767?{breakpoint:"sm"}:768<a&&a<991?{breakpoint:"md"}:992<a&&a<1199?{breakpoint:"lg"}:a>1200?{breakpoint:"xl"}:{breakpoint:"xs"}}))(ca);o.a.render(r.a.createElement(oa,null),document.getElementById("root"))},24:function(e,a,t){"use strict";var n=t(28),r=t(12),c=t(0),o=t.n(c),l=(t(31),t(4)),i=t.n(l),s=t(62),m=function(e){var a=e.rounded,t=e.circle,c=e.src,l=e.size,s=e.tag,m=e.className,u=e.style,p=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),d=i()({"rounded-circle":t,rounded:a},m);return o.a.createElement(s,Object.assign({src:c,style:Object(n.a)({width:l,height:l},u),className:d},p))};m.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:t.n(s).a,style:{}},a.a=m},27:function(e,a,t){"use strict";var n,r=t(4),c=t.n(r),o=(n="cr",{create:function(e){var a=e;return"string"===typeof n&&(a="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c()(a,t)},e:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return c()("".concat(a,"__").concat(e),n)},m:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return c()("".concat(a,"--").concat(e),n)}}}});a.a=o},31:function(e,a,t){"use strict";var n=t(28),r=t(1),c=t.n(r);Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},49:function(e,a,t){"use strict";t.d(a,"a",(function(){return E})),t.d(a,"b",(function(){return v}));var n=t(15),r=t(14),c=t(16),o=t(17),l=t(18),i=t(74),s=t.n(i),m=t(0),u=t.n(m),p=t(139),d=t(37),g=t(38),h=t(39),f=t(95),b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).changeAuthState=function(e){return function(a){a.preventDefault(),t.props.onChangeAuthState(e)}},t.handleSubmit=function(e){e.preventDefault()},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,a=e.showLogo,t=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,c=e.passwordInputProps,o=e.confirmPasswordLabel,l=e.confirmPasswordInputProps,i=e.children,m=e.onLogoClick;return u.a.createElement(p.a,{onSubmit:this.handleSubmit},a&&u.a.createElement("div",{className:"text-center pb-4"},u.a.createElement("img",{src:s.a,className:"rounded",style:{width:150,height:100,cursor:"pointer"},alt:"logo",onClick:m})),u.a.createElement(d.a,null,u.a.createElement(g.a,{for:t},t),u.a.createElement(h.a,n)),u.a.createElement(d.a,null,u.a.createElement(g.a,{for:r},r),u.a.createElement(h.a,c)),this.isSignup&&u.a.createElement(d.a,null,u.a.createElement(g.a,{for:o},o),u.a.createElement(h.a,l)),u.a.createElement(d.a,{check:!0},u.a.createElement(g.a,{check:!0},u.a.createElement(h.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),u.a.createElement("hr",null),u.a.createElement(f.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),u.a.createElement("div",{className:"text-center pt-1"},u.a.createElement("h6",null,"or"),u.a.createElement("h6",null,this.isSignup?u.a.createElement("a",{href:"#login",onClick:this.changeAuthState(E)},"Login"):u.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(v)},"Signup"))),i)}},{key:"isLogin",get:function(){return this.props.authState===E}},{key:"isSignup",get:function(){return this.props.authState===v}}]),a}(u.a.Component),E="LOGIN",v="SIGNUP";b.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},a.c=b},55:function(e,a,t){e.exports=t.p+"static/media/sidebar-13.c05b8d00.jpg"},62:function(e,a){e.exports="data:image/jpeg;base64,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"},63:function(e,a,t){"use strict";var n=t(28),r=t(12),c=t(0),o=t.n(c),l=t(4),i=t.n(l),s=t(140),m={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},u={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.position,t=void 0===a?"bottom-right":a,c=e.size,l=void 0===c?"sm":c,p=e.style,d=void 0===p?{}:p,g=e.className,h=Object(r.a)(e,["position","size","style","className"]);return function(e){return function(a){var c=a.tag,p=void 0===c?"div":c,f=Object(r.a)(a,["tag"]);return o.a.createElement(p,{className:"d-inline-block position-relative"},o.a.createElement(e,f),o.a.createElement(s.a,Object.assign({className:i()("position-absolute",g),style:Object(n.a)({},m[t],{},u[l],{borderRadius:"50%",border:"2px solid #fff"},d)},h)))}}}},74:function(e,a,t){e.exports=t.p+"static/media/default1.5aaa0a6f.png"},75:function(e,a,t){e.exports=t.p+"static/media/100_1.1f7beca5.jpg"},76:function(e,a,t){e.exports=t.p+"static/media/100_2.82e7c41e.jpg"},77:function(e,a,t){e.exports=t.p+"static/media/100_3.6e25d86d.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/100_4.978e51b5.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/100_5.fd533725.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/default.e34349c1.png"},88:function(e,a,t){e.exports=t(138)}},[[88,6,12]]]);
//# sourceMappingURL=main.6e182461.chunk.js.map