(this["webpackJsonpairline-data-science"]=this["webpackJsonpairline-data-science"]||[]).push([[17],{223:function(e,t,a){"use strict";var n=a(30),o=a(12),l=a(4),i=a.n(l),r=a(0),c=a.n(r),s=(a(29),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,l=e.className,r=e.type,u=Object(o.a)(e,["tag","className","type"]),d=i()(Object(n.a)({},r,!!r),l);return t=a||(!a&&s[r]?s[r]:"p"),c.a.createElement(t,Object.assign({},u,{className:d}))};u.defaultProps={type:"p"},t.a=u},225:function(e,t,a){"use strict";var n=a(12),o=a(0),l=a.n(o),i=(a(29),a(26)),r=a(539),c=a(540),s=a(223),u=i.a.create("page"),d=function(e){var t=e.title,a=e.breadcrumbs,o=e.tag,i=e.className,d=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),p=u.b("px-3",i);return l.a.createElement(o,Object.assign({className:p},m),l.a.createElement("div",{className:u.e("header")},t&&"string"===typeof t?l.a.createElement(s.a,{type:"h1",className:u.e("title")},t):t,a&&l.a.createElement(r.a,{className:u.e("breadcrumb")},l.a.createElement(c.a,null,"Home"),a.length&&a.map((function(e,t){var a=e.name,n=e.active;return l.a.createElement(c.a,{key:t,active:n},a)})))),d)};d.defaultProps={tag:"div",title:""},t.a=d},556:function(e,t,a){"use strict";var n=a(30),o=a(617),l=a.n(o),i=a(618),r=a(14),c=a(15),s=a(17),u=a(16),d=a(0),m=a.n(d),p=a(947),h=a(955),b=a(939),g=a(914),f=a(915),v=a(946),E=(a(23),a(575)),k=a.n(E),y=(a(577),a(619),a(620),a(621),a(578),a(579),a(622),p.a.Meta,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={fpath:"",fbase_path:"",ed_theme:"darkTheme",text_ed_theme:"tomorrow",background_theme:"white",background_text_theme:"white",background_input_theme:"white",background_output_theme:"white",loading:!0,notebook_json:null,placeholder_component:"Loading....",gutterVisible:!1},e}return Object(c.a)(a,[{key:"validURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.file){e.next=6;break}return(t=this.props.file.split("/")).pop(),this.setState({fpath:this.props.file,fbase_path:t.join("/")+"/"}),e.next=6,fetch(this.props.file).then((function(e){return e.text()})).then(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=JSON.parse(t),a.setState({notebook_json:n,loading:!1,placeholder_component:"Notebook loaded"}),console.log(a.state.notebook_json)}catch(o){alert("OOps! Unable to load json"),a.setState({notebook_json:{message:"Unable to parse .ipynb file"},loading:!1,placeholder_component:"Oops! We have problem opening the notebook"})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"praseSource",value:function(e){var t="";for(var a in e)t+=e[a];return t}},{key:"parseMD",value:function(e){var t="";for(var a in e){var n=new RegExp(/src="(.*?)"/),o=e[a],l=e[a].match(n);if(l&&!this.validURL(l[1]))o=e[a].replace(/src="(.*?)"/,'src="'+this.state.fbase_path+l[1]+'"');else{var i=new RegExp(/\!\[(.*?)\]\((.*?)[\s|\)]/),r=e[a].match(i);r&&!this.validURL(r[2])&&(o=o.replace(r[2],this.state.fbase_path+r[2]))}t+=o}return t}},{key:"praseOutputs",value:function(e){if(0==e.length)return"";var t="",a="",n="",o="data:image/png;base64,",l=!1,i=!1,r=!1,c=!1,s=3,u=3,d=3;for(var p in e){if("data"in e[p]){if("text/plain"in e[p].data){for(var b in e[p].data["text/plain"])t+=e[p].data["text/plain"][b];i=!0,u=e[p].data["text/plain"].length}"image/png"in e[p].data&&(o+=e[p].data["image/png"],c=!0)}if("name"in e[p]){for(var b in e[p].text)a+=e[p].text[b];l=!0,s=e[p].text.length}"ename"in e[p]&&(n+=e[p].ename+"\n"+e[p].evalue+"\n",r=!0,d=e[p].traceback.length)}return m.a.createElement("div",null,m.a.createElement("div",{style:{padding:"5px 3px",display:l?"":"none"}},m.a.createElement(k.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"stdout",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:s+1,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:a,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})),m.a.createElement("div",{style:{padding:"5px 3px",display:i?"":"none"}},m.a.createElement(k.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"text",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:u,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:t,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})),m.a.createElement("div",{style:{display:c?"":"none"}},m.a.createElement("img",{src:o,style:{display:c?"":"none",width:"100%",backgroundColor:"white"}})),m.a.createElement("div",{style:{padding:"5px 3px",display:r?"":"none"}},m.a.createElement(h.a,{color:"#f50"},"error"),m.a.createElement("br",null),m.a.createElement(k.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"error",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:d,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:n,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})))}},{key:"themeChanger",value:function(e){e?this.setState({ed_theme:"darkTheme",text_ed_theme:"tomorrow",background_theme:"black",background_text_theme:"white",background_input_theme:"#272822",background_output_theme:"#2F3129"}):this.setState({ed_theme:"lightTheme",text_ed_theme:"kuroir",background_theme:"white",background_text_theme:"black",background_input_theme:"#E8E9E8",background_output_theme:"#F1F1F2"}),console.log("switch to ".concat(e))}},{key:"gutterChanger",value:function(e){e?this.setState({gutterVisible:!0}):this.setState({gutterVisible:!1})}},{key:"render",value:function(){var e=this;return console.log(this.props.file),m.a.createElement("div",null,m.a.createElement("br",null),m.a.createElement(b.a,{spinning:this.state.loading},m.a.createElement("center",null,this.state.loading?m.a.createElement("div",null):this.state.notebook_json.cells.map((function(t){return m.a.createElement(p.a,{bodyStyle:{padding:"0px 10px",backgroundColor:e.state.background_output_theme},style:{width:"100%",maxWidth:"800px",border:"none"}},"markdown"==t.cell_type?m.a.createElement("div",null):m.a.createElement(g.a,{style:{display:0==!!t.outputs.length?"none":"visible",backgroundColor:e.state.background_output_theme}},m.a.createElement(f.a,{span:e.state.gutterVisible?3:1},m.a.createElement(v.a.Text,{style:Object(n.a)({display:e.state.gutterVisible?"":"none",color:e.state.background_text_theme,float:"left",padding:"5px"},"color","#E5496A")},"O [ ",t.execution_count," ]:")),m.a.createElement(f.a,{span:e.state.gutterVisible?20:22,style:{textAlign:"left",color:"white"}},e.praseOutputs(t.outputs)),m.a.createElement(f.a,{span:1})))})))),m.a.createElement("br",null))}}]),a}(m.a.Component));t.a=y},579:function(e,t,a){},608:function(e,t,a){e.exports=a.p+"static/media/Code_Output.1932a9cc.ipynb"},616:function(e,t,a){"use strict";var n=a(14),o=a(59),l=a(15),i=a(17),r=a(16),c=a(0),s=a.n(c),u=a(575),d=a.n(u),m=a(648),p=a.n(m),h=a(649),b=a.n(h),g=a(556),f=a(645),v=a.n(f),E=(a(646),a(577),a(647),a(578),a(608)),k=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).downloadTxtFile=function(){console.log("saveCode",l.state.newCode);var e=document.createElement("a"),t=new Blob([l.state.newCode],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="Code.txt",document.body.appendChild(e),e.click()},l.state={showComponent:!1,code:"",newCode:""},l._onButtonClick=l._onButtonClick.bind(Object(o.a)(l)),l.onChange=l.onChange.bind(Object(o.a)(l)),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(v.a).then((function(e){return e.text()})).then((function(t){e.setState({code:t})}))}}]),Object(l.a)(a,[{key:"_onButtonClick",value:function(){this.setState({showComponent:!0})}},{key:"onChange",value:function(e){console.log("change",e),this.state.newCode=e}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,{mode:"python",theme:"tomorrow",width:"inherit",maxLines:1/0,onChange:this.onChange,name:"UNIQUE_ID_OF_DIV",value:this.state.code,editorProps:{$blockScrolling:!0},enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0}),s.a.createElement("br",null),s.a.createElement(p.a,{color:"primary",onClick:this._onButtonClick}),s.a.createElement(b.a,{color:"primary",onClick:this.downloadTxtFile}),this.state.showComponent?s.a.createElement(g.a,{file:E}):null)}}]),a}(s.a.Component);t.a=k},645:function(e,t,a){e.exports=a.p+"static/media/Code.84e5c389.txt"},894:function(e,t,a){},895:function(e,t,a){},950:function(e,t,a){"use strict";a.r(t);var n=a(14),o=a(15),l=a(17),i=a(16),r=a(225),c=a(0),s=a.n(c),u=a(584),d=a(156),m=a(698),p=a(59),h=a(149),b=a(344),g=a(456),f=a(449),v=a(457),E=a(615),k=a.n(E),y=a(37),x=a(965),_=a(936),w=a(937),C=a(142),O=a(36),j=a(38),S=a(612),L=a(613),A=a(541),N=a(938),B=a(94),z=a(616),R=function(e){var t=e.buttonLabel,a=e.className,n=Object(c.useState)(!1),o=Object(b.a)(n,2),l=o[0],i=o[1],r=function(){return i(!l)},u=Object(c.useState)(!0),d=Object(b.a)(u,1)[0];return s.a.createElement("div",null,s.a.createElement(y.a,{onClick:r},t),s.a.createElement(x.a,{isOpen:l,toggle:r,className:a},s.a.createElement(_.a,{toggle:r},"Edit Code"),s.a.createElement(w.a,null,s.a.createElement(C.a,null,s.a.createElement(C.a,{inline:!0,onSubmit:function(e){return e.preventDefault()}},s.a.createElement(O.a,null,s.a.createElement(y.a,{for:"backdrop"},"Load Code")," ",s.a.createElement(j.a,{type:"select",name:"backdrop",id:"backdrop",onChange:function(e){var t=e.target.value;""!==t&&(t=JSON.parse(t)),d(t)}},s.a.createElement("option",null),s.a.createElement("option",null,"Load 1"),s.a.createElement("option",null,"Load 2"),s.a.createElement("option",null,"Load 3")))),s.a.createElement("br",null),s.a.createElement(S.a,null,s.a.createElement(L.a,{addonType:"prepend"},s.a.createElement(A.a,null,"Name")),s.a.createElement(j.a,null))),s.a.createElement("br",null),s.a.createElement(z.a,null)),s.a.createElement(N.a,null,s.a.createElement(B.a,{color:"primary",onClick:r},"Submit")," ",s.a.createElement(B.a,{color:"secondary",onClick:r},"Cancel"))))};function P(e){e.editButton;var t=e.deleteButton,a=(e.codeEditor,s.a.useState(null)),n=Object(b.a)(a,2),o=n[0],l=n[1],i=Boolean(o);return s.a.createElement("div",null,s.a.createElement(g.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},s.a.createElement(k.a,null)),s.a.createElement(f.a,{id:"long-menu",anchorEl:o,keepMounted:!0,open:i,onClose:function(){l(null)},PaperProps:{style:{maxHeight:216,width:200}}},s.a.createElement(v.a,{selected:"Edit Code"},s.a.createElement(R,{buttonLabel:"Edit Code"})),s.a.createElement(v.a,{selected:"Delete",onClick:t},"Delete")))}var I=a(436),D=a.n(I),U=a(893),M=a.n(U);a(23),a(894),a(895);"undefined"!==typeof window&&(window.React=s.a);var T=a(556),F=Object(m.WidthProvider)(m.Responsive),V=a(608),W=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={items:[].map((function(e,t,a){return{i:e.toString(),x:2*e,y:0,w:2,h:2,add:e===a.length-1}})),newCounter:0},o.onAddItem=o.onAddItem.bind(Object(p.a)(o)),o.onLayoutChange=o.onLayoutChange.bind(Object(p.a)(o)),o.onBreakpointChange=o.onBreakpointChange.bind(Object(p.a)(o)),o}return Object(o.a)(a,[{key:"createElement",value:function(e){var t=e.add?"+":e.i;return s.a.createElement(h.a,{key:t,"data-grid":e},e.add?s.a.createElement("span",{className:"add text",onClick:this.onAddItem,title:"Add item by clicking here"},"Add +"):s.a.createElement("span",{className:"text"}),s.a.createElement("span",{className:"remove",style:{position:"absolute",right:"2px",top:0,cursor:"pointer"}},s.a.createElement(P,{deleteButton:this.onRemoveItem.bind(this,t)})),s.a.createElement("br",null),s.a.createElement("span",null,s.a.createElement(T.a,{file:V})))}},{key:"onAddItem",value:function(){console.log("adding","item "+this.state.newCounter),this.setState({items:this.state.items.concat({i:""+this.state.newCounter,x:2*this.state.items.length%(this.state.cols||12),y:1/0,w:2,h:100%(this.state.cols||12)}),newCounter:this.state.newCounter+1})}},{key:"onBreakpointChange",value:function(e,t){this.setState({breakpoint:e,cols:t})}},{key:"onLayoutChange",value:function(e){this.setState({layout:e})}},{key:"onRemoveItem",value:function(e){console.log("removing",e),this.setState({items:M.a.reject(this.state.items,{i:e})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(D.a,{fontSize:"large",outline:!0,color:"primary",onClick:this.onAddItem},"Add Item"),s.a.createElement(F,Object.assign({onLayoutChange:this.onLayoutChange,onBreakpointChange:this.onBreakpointChange},this.props),M.a.map(this.state.items,(function(t){return e.createElement(t)}))))}}]),a}(s.a.PureComponent);W.defaultProps={className:"layout",cols:{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:100};Object(m.WidthProvider)(m.Responsive);var J=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(r.a,{title:"Data Analysis Build",breadcrumbs:[{name:"Data Analysis Build",active:!0}]},s.a.createElement(u.a,null,s.a.createElement(d.a,{xl:25,lg:12,md:12},s.a.createElement(W,null))))}}]),a}(s.a.Component);t.default=J}}]);
//# sourceMappingURL=17.0ade8064.chunk.js.map