(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{1:function(e,t,o){"use strict";o.r(t),o.d(t,"Block",(function(){return l})),o.d(t,"Booth",(function(){return n})),o.d(t,"boothTypes",(function(){return r})),o.d(t,"runAlgo",(function(){return s})),o.d(t,"checkBlockOccupied",(function(){return h})),o.d(t,"checkAllOcuppied",(function(){return c})),o.d(t,"runBlock",(function(){return b})),o.d(t,"runBlock2",(function(){return i}));var a=o(10),l=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(a.a)(this,e),this.priority=t,this.length=o,this.width=l,this.boothList=n,this.unusedSpace=o},n=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(a.a)(this,e),this.boothID=t,this.projectName=o,this.boothType=l,this.length=n,this.width=r,this.location=s},r={aerospace:"aerospace",transport:"transport",computer:"computer",education:"education"};function s(e,t,o){var a;if(0==e.length|0==t.length|0==o)return"empty arrays";for(var l=0;l<e.length;l++)if("all booths allocated successfully"==(a=b(e[l],t,o))|"not enough space to allocated all booths")return a;return a=c(t,o,e)}function h(e,t,o){if(0==t.length)return"all booths allocated successfully";if(0==e.boothList.length)return"there is no fit for this block";for(var a=!1,l=0;l<t.length;l++){var n=t[l];if(e.unusedSpace>=n.length&&n.width<=e.width&&e.boothList[e.boothList.length-1].boothType!=n.boothType){a=!0;break}}return a&&i(e,t,o),"block check finished"}function c(e,t,o){if(0==e.length)return"all booths allocated successfully";for(var a,l=!1,n=0;n<o.length;n++){for(var r=o[n],s=0;s<e.length;s++){var h=e[s];if(0!=o[n].boothList.length&&r.unusedSpace>=h.length&&h.width<=r.width&&r.boothList[r.boothList.length-1].boothType!=h.boothType){l=!0,a=n;break}}if(l)break}return l?(i(o[a],e,t),0==e.length?"all booths allocated successfully":"algo finished"):"not enough space to allocated all booths"}function b(e,t,o){if("object"!=typeof e||"object"!=typeof t||"object"!=typeof o)return"wrong input type";if(0==t.length|0==o)return"all booths allocated successfully";for(var a=0;a<o.length;a++){var l=o[a];if(!(e.unusedSpace>=l.length)){if(e.unusedSpace>0)continue;break}if(l.width<=e.width)if(0==e.boothList.length){e.boothList.push(l);var n=t.indexOf(l);n>-1&&t.splice(n,1),e.unusedSpace-=l.length}else if(e.boothList[e.boothList.length-1].boothType!=l.boothType){e.boothList.push(l);var r=t.indexOf(l);r>-1&&t.splice(r,1),e.unusedSpace-=l.length}if(e.unusedSpace<1)break}for(a=0;a<e.boothList.length;a++){var s=o.indexOf(e.boothList[a]);s>-1&&o.splice(s,1)}h(e,t,o)}function i(e,t,o){if(0==t.length|0==o)return"all booths allocated successfully";for(var a=0;a<o.length;a++){var l=o[a];if(!(e.unusedSpace>=l.length)){if(e.unusedSpace>0)continue;break}if(l.width<=e.width)if(0==e.boothList.length){e.boothList.push(l);var n=t.indexOf(l);n>-1&&t.splice(n,1),e.unusedSpace-=l.length}else if(e.boothList[e.boothList.length-1].boothType!=l.boothType){e.boothList.push(l);var r=t.indexOf(l);r>-1&&t.splice(r,1),e.unusedSpace-=l.length}if(e.unusedSpace<=0)break}for(a=0;a<e.boothList.length;a++){var s=o.indexOf(e.boothList[a]);s>-1&&o.splice(s,1)}return h(e,t,o)}},116:function(e,t,o){},118:function(e,t,o){"use strict";o.r(t);var a=o(0),l=o.n(a),n=o(49),r=o.n(n),s=o(10),h=o(13),c=o(15),b=o(14),i=o(19),u=o(16),d=o(20),m=o(17);var k={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},p={color:"#ffaf",textDecoration:"none"},S=function(){return l.a.createElement("header",{style:k},l.a.createElement("h1",null,"Capstone Allocation"),l.a.createElement(d.b,{style:p,to:"../../50.003-FrontEnd"}," File Upload")," |",l.a.createElement(d.b,{style:p,to:"/tryme"}," Level 1")," |",l.a.createElement(d.b,{style:p,to:"/level2"}," Level 2")," |",l.a.createElement(d.b,{style:p,to:"/Fuzzer"}," Fuzzer"))},E=o(28),f=o.n(E);var g=o(51),L=o.n(g),w=o(53),v=o(36),B=o(1),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.value;return l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"text"},e||" "))}}]),t}(a.Component),x=(l.a.Component,o(38),o(18)),j=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(o=Object(c.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={x:o.props.x,y:o.props.y,stroke:"#555",strokeWidth:5,fill:"#ddd",width:o.props.width,height:o.props.height,shadowColor:"black",shadowBlur:10,shadowOffsetX:10,shadowOffsetY:10,shadowOpacity:.2,cornerRadius:10},o}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(x.Rect,{x:this.state.x,y:this.state.y,width:this.state.width,height:this.props.height,stroke:this.state.stroke,strokeWidth:this.state.strokeWidth,cornerRadius:this.state.cornerRadius})}}]),t}(l.a.Component),O=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(c.a)(this,Object(b.a)(t).call(this,e))).state={stroke:"black",x:o.props.x,y:o.props.y,text:o.props.text,fontSize:16,fontFamily:"Calibri",width:o.props.width,padding:20,align:"left",wrap:"word"},o}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(x.Text,{x:this.state.x,y:this.state.y,text:this.state.text,fontSize:this.state.fontSize,fontFamily:this.state.fontFamily,fill:this.state.fill,width:this.state.width,padding:this.state.padding,align:this.state.align})}}]),t}(a.Component),C=o(52);function z(e,t,o,a){for(var n=0;n<e[a].boothList.length;n++)t.push(e[a].boothList[n].projectName),t.push(l.a.createElement("br",null)),o.push(e[a].boothList[n].boothID)}o(116);var F=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(c.a)(this,Object(b.a)(t).call(this,e))).renderFile=function(e){Object(v.ExcelRenderer)(e,(function(e,t){if(e)console.log(e);else{o.setState({dataLoaded:!0,cols:t.cols,rows:t.rows}),o.boothList=[],o.boothListCopy=[],o.blockList=[];for(var a=[],n=1;n<o.state.rows.length;n++)if(null==o.state.rows[n][4]){var r=new B.Booth(o.state.rows[n][0],o.state.rows[n][1],o.state.rows[n][3],o.state.rows[n][6],o.state.rows[n][7]);o.boothList.push(r),o.boothListCopy.push(r)}else{r=new B.Booth(o.state.rows[n][0],o.state.rows[n][1],o.state.rows[n][3],o.state.rows[n][6],o.state.rows[n][7],o.state.rows[n][4]);a.push(r.projectName),a.push(": "+r.location),a.push(l.a.createElement("br",null))}o.setState({specialboothlist:a});var s=new B.Block(0,8,5),h=new B.Block(1,7,7),c=new B.Block(2,6,6),b=new B.Block(3,4,4),i=new B.Block(4,9,4),u=new B.Block(5,4,4),d=new B.Block(6,3,3),m=new B.Block(7,12,7),k=new B.Block(8,20,6),p=new B.Block(9,18,7),S=new B.Block(10,17,7),E=new B.Block(11,4,8),f=new B.Block(12,6,6),g=new B.Block(13,16,7),L=new B.Block(14,3,8),w=new B.Block(15,7,8),v=new B.Block(16,23,3),y=new B.Block(17,14,7),x=new B.Block(18,12,12),j=new B.Block(19,13,6),O=new B.Block(20,13,6),C=new B.Block(21,14,3),z=new B.Block(22,36,6);o.blockList.push(s),o.blockList.push(h),o.blockList.push(c),o.blockList.push(b),o.blockList.push(i),o.blockList.push(u),o.blockList.push(d),o.blockList.push(m),o.blockList.push(k),o.blockList.push(p),o.blockList.push(S),o.blockList.push(E),o.blockList.push(f),o.blockList.push(g),o.blockList.push(L),o.blockList.push(w),o.blockList.push(v),o.blockList.push(y),o.blockList.push(x),o.blockList.push(j),o.blockList.push(O),o.blockList.push(C),o.blockList.push(z)}}))},o.fileHandler=function(e){if(e.target.files.length){var t=e.target.files[0],a=t.name;"xlsx"===a.slice(a.lastIndexOf(".")+1)?(o.setState({uploadedFileName:a,isFormInvalid:!1}),o.renderFile(t)):o.setState({isFormInvalid:!0,uploadedFileName:""})}},o.onClickHandler=function(){if(""==o.state.uploadedFileName)console.log("INCORRECT FILE TYPE");else if("Length"!=o.state.rows[0][5])console.log("INCORRECT TEMPLATE");else{o.setState({booth0:[]}),o.setState({booth1:[]}),o.setState({booth2:[]}),o.setState({booth3:[]}),o.setState({booth4:[]}),o.setState({booth5:[]}),o.setState({booth6:[]}),o.setState({booth7:[]}),o.setState({booth8:[]}),o.setState({booth9:[]}),o.setState({booth10:[]}),o.setState({booth11:[]}),o.setState({booth12:[]}),o.setState({booth13:[]}),o.setState({booth14:[]}),o.setState({booth15:[]}),o.setState({booth16:[]}),o.setState({booth17:[]}),o.setState({booth18:[]}),o.setState({booth19:[]}),o.setState({booth20:[]}),o.setState({booth21:[]}),o.setState({booth22:[]}),o.setState({booth0render:[]}),o.setState({booth1render:[]}),o.setState({booth2render:[]}),o.setState({booth3render:[]}),o.setState({booth4render:[]}),o.setState({booth5render:[]}),o.setState({booth6render:[]}),o.setState({booth7render:[]}),o.setState({booth8render:[]}),o.setState({booth9render:[]}),o.setState({booth10render:[]}),o.setState({booth11render:[]}),o.setState({booth12render:[]}),o.setState({booth13render:[]}),o.setState({booth14render:[]}),o.setState({booth15render:[]}),o.setState({booth16render:[]}),o.setState({booth17render:[]}),o.setState({booth18render:[]}),o.setState({booth19render:[]}),o.setState({booth20render:[]}),o.setState({booth21render:[]}),o.setState({booth22render:[]});B.runAlgo(o.blockList,o.boothList,o.boothListCopy);console.log(o.boothListCopy.length),0==o.boothList.length?(console.log("All allocated"),console.log(o.boothList.length)):o.boothList.length>0&&(console.log("Some booths not allocated"),console.log(o.boothList.length));var e=[],t=[],a=[],l=[],n=[],r=[],s=[],h=[],c=[],b=[],i=[],u=[],d=[],m=[],k=[],p=[],S=[],E=[],f=[],g=[],L=[],w=[],v=[],y=[],x=[],j=[],O=[],C=[],F=[],T=[],N=[],R=[],M=[],A=[],H=[],I=[],W=[],D=[],J=[],P=[],Y=[],U=[],X=[],_=[],q=[],G=[];z(o.blockList,e,t,0),z(o.blockList,a,l,1),z(o.blockList,n,r,2),z(o.blockList,s,h,3),z(o.blockList,c,b,4),z(o.blockList,i,u,5),z(o.blockList,d,m,6),z(o.blockList,k,p,7),z(o.blockList,S,E,8),z(o.blockList,f,g,9),z(o.blockList,L,w,10),z(o.blockList,v,y,11),z(o.blockList,x,j,12),z(o.blockList,O,C,13),z(o.blockList,F,T,14),z(o.blockList,N,R,15),z(o.blockList,M,A,16),z(o.blockList,H,I,17),z(o.blockList,W,D,18),z(o.blockList,J,P,19),z(o.blockList,Y,U,20),z(o.blockList,X,_,21),z(o.blockList,q,G,22),t=t.join(" | "),l=l.join(" | "),r=r.join(" | "),h=h.join(" | "),b=b.join(" | "),u=u.join(" | "),m=m.join(" | "),p=p.join(" | "),E=E.join(" | "),g=g.join(" | "),w=w.join(" | "),y=y.join(" | "),j=j.join(" | "),C=C.join(" | "),T=T.join(" | "),R=R.join(" | "),A=A.join(" | "),I=I.join(" | "),D=D.join(" | "),P=P.join(" | "),U=U.join(" | "),_=_.join(" | "),G=G.join(" | "),o.setState({booth0:e}),o.setState({booth1:a}),o.setState({booth2:n}),o.setState({booth3:s}),o.setState({booth4:c}),o.setState({booth5:i}),o.setState({booth6:d}),o.setState({booth7:k}),o.setState({booth8:S}),o.setState({booth9:f}),o.setState({booth10:L}),o.setState({booth11:v}),o.setState({booth12:x}),o.setState({booth13:O}),o.setState({booth14:F}),o.setState({booth15:N}),o.setState({booth16:M}),o.setState({booth17:H}),o.setState({booth18:W}),o.setState({booth19:J}),o.setState({booth20:Y}),o.setState({booth21:X}),o.setState({booth22:q}),o.setState({booth0render:t}),o.setState({booth1render:l}),o.setState({booth2render:r}),o.setState({booth3render:h}),o.setState({booth4render:b}),o.setState({booth5render:u}),o.setState({booth6render:m}),o.setState({booth7render:p}),o.setState({booth8render:E}),o.setState({booth9render:g}),o.setState({booth10render:w}),o.setState({booth11render:y}),o.setState({booth12render:j}),o.setState({booth13render:C}),o.setState({booth14render:T}),o.setState({booth15render:R}),o.setState({booth16render:A}),o.setState({booth17render:I}),o.setState({booth18render:D}),o.setState({booth19render:P}),o.setState({booth20render:U}),o.setState({booth21render:_}),o.setState({booth22render:G})}},o.onClickHandler2=function(){o.setState({booth0:[]}),o.setState({booth1:[]}),o.setState({booth2:[]}),o.setState({booth3:[]}),o.setState({booth4:[]}),o.setState({booth5:[]}),o.setState({booth6:[]}),o.setState({booth7:[]}),o.setState({booth8:[]}),o.setState({booth9:[]}),o.setState({booth10:[]}),o.setState({booth11:[]}),o.setState({booth12:[]}),o.setState({booth13:[]}),o.setState({booth14:[]}),o.setState({booth15:[]}),o.setState({booth16:[]}),o.setState({booth17:[]}),o.setState({booth18:[]}),o.setState({booth19:[]}),o.setState({booth20:[]}),o.setState({booth21:[]}),o.setState({booth22:[]}),o.setState({booth0render:[]}),o.setState({booth1render:[]}),o.setState({booth2render:[]}),o.setState({booth3render:[]}),o.setState({booth4render:[]}),o.setState({booth5render:[]}),o.setState({booth6render:[]}),o.setState({booth7render:[]}),o.setState({booth8render:[]}),o.setState({booth9render:[]}),o.setState({booth10render:[]}),o.setState({booth11render:[]}),o.setState({booth12render:[]}),o.setState({booth13render:[]}),o.setState({booth14render:[]}),o.setState({booth15render:[]}),o.setState({booth16render:[]}),o.setState({booth17render:[]}),o.setState({booth18render:[]}),o.setState({booth19render:[]}),o.setState({booth20render:[]}),o.setState({booth21render:[]}),o.setState({booth22render:[]}),o.boothList=[],o.boothListCopy=[],o.blockList=[];var e;e=C.a(),o.boothList=e[0],o.boothListCopy=e[1],o.state.fuzzLength=e[2],o.state.fuzzNum=e[3];var t=new B.Block(0,8,5),a=new B.Block(1,7,7),l=new B.Block(2,6,6),n=new B.Block(3,4,4),r=new B.Block(4,9,4),s=new B.Block(5,4,4),h=new B.Block(6,3,3),c=new B.Block(7,12,7),b=new B.Block(8,20,6),i=new B.Block(9,18,7),u=new B.Block(10,17,7),d=new B.Block(11,4,8),m=new B.Block(12,6,6),k=new B.Block(13,16,7),p=new B.Block(14,3,8),S=new B.Block(15,7,8),E=new B.Block(16,23,3),f=new B.Block(17,14,7),g=new B.Block(18,12,12),L=new B.Block(19,13,6),w=new B.Block(20,13,6),v=new B.Block(21,14,3),y=new B.Block(22,36,6);o.blockList.push(t),o.blockList.push(a),o.blockList.push(l),o.blockList.push(n),o.blockList.push(r),o.blockList.push(s),o.blockList.push(h),o.blockList.push(c),o.blockList.push(b),o.blockList.push(i),o.blockList.push(u),o.blockList.push(d),o.blockList.push(m),o.blockList.push(k),o.blockList.push(p),o.blockList.push(S),o.blockList.push(E),o.blockList.push(f),o.blockList.push(g),o.blockList.push(L),o.blockList.push(w),o.blockList.push(v),o.blockList.push(y)},o.onClickHandlerFuzz=function(){B.runAlgo(o.blockList,o.boothList,o.boothListCopy);if(0==o.boothList.length)console.log("All allocated"),console.log("Remaining Number of Booths: "+o.boothList.length),o.success++;else if(o.boothList.length>0){console.log("Some booths not allocated"),console.log("Remaining Number of Booths: "+o.boothList.length),o.failure++;for(var e=0;e<o.boothList.length;e++)console.log(o.boothList[e])}var t=[],a=[],l=[],n=[],r=[],s=[],h=[],c=[],b=[],i=[],u=[],d=[],m=[],k=[],p=[],S=[],E=[],f=[],g=[],L=[],w=[],v=[],y=[],x=[],j=[],O=[],C=[],F=[],T=[],N=[],R=[],M=[],A=[],H=[],I=[],W=[],D=[],J=[],P=[],Y=[],U=[],X=[],_=[],q=[],G=[],K=[];z(o.blockList,t,a,0),z(o.blockList,l,n,1),z(o.blockList,r,s,2),z(o.blockList,h,c,3),z(o.blockList,b,i,4),z(o.blockList,u,d,5),z(o.blockList,m,k,6),z(o.blockList,p,S,7),z(o.blockList,E,f,8),z(o.blockList,g,L,9),z(o.blockList,w,v,10),z(o.blockList,y,x,11),z(o.blockList,j,O,12),z(o.blockList,C,F,13),z(o.blockList,T,N,14),z(o.blockList,R,M,15),z(o.blockList,A,H,16),z(o.blockList,I,W,17),z(o.blockList,D,J,18),z(o.blockList,P,Y,19),z(o.blockList,U,X,20),z(o.blockList,_,q,21),z(o.blockList,G,K,22),a=a.join(" | "),n=n.join(" | "),s=s.join(" | "),c=c.join(" | "),i=i.join(" | "),d=d.join(" | "),k=k.join(" | "),S=S.join(" | "),f=f.join(" | "),L=L.join(" | "),v=v.join(" | "),x=x.join(" | "),O=O.join(" | "),F=F.join(" | "),N=N.join(" | "),M=M.join(" | "),H=H.join(" | "),W=W.join(" | "),J=J.join(" | "),Y=Y.join(" | "),X=X.join(" | "),q=q.join(" | "),K=K.join(" | "),o.setState({booth0:t}),o.setState({booth1:l}),o.setState({booth2:r}),o.setState({booth3:h}),o.setState({booth4:b}),o.setState({booth5:u}),o.setState({booth6:m}),o.setState({booth7:p}),o.setState({booth8:E}),o.setState({booth9:g}),o.setState({booth10:w}),o.setState({booth11:y}),o.setState({booth12:j}),o.setState({booth13:C}),o.setState({booth14:T}),o.setState({booth15:R}),o.setState({booth16:A}),o.setState({booth17:I}),o.setState({booth18:D}),o.setState({booth19:P}),o.setState({booth20:U}),o.setState({booth21:_}),o.setState({booth22:G}),o.setState({booth0render:a}),o.setState({booth1render:n}),o.setState({booth2render:s}),o.setState({booth3render:c}),o.setState({booth4render:i}),o.setState({booth5render:d}),o.setState({booth6render:k}),o.setState({booth7render:S}),o.setState({booth8render:f}),o.setState({booth9render:L}),o.setState({booth10render:v}),o.setState({booth11render:x}),o.setState({booth12render:O}),o.setState({booth13render:F}),o.setState({booth14render:N}),o.setState({booth15render:M}),o.setState({booth16render:H}),o.setState({booth17render:W}),o.setState({booth18render:J}),o.setState({booth19render:Y}),o.setState({booth20render:X}),o.setState({booth21render:q}),o.setState({booth22render:K})},o.openFileBrowser=function(){o.fileInput.current.click()},o.showModal=function(){o.setState({show:!0})},o.hideModal=function(){o.setState({show:!1})},o.state={isOpen:!1,dataLoaded:!1,isFormInvalid:!1,rows:null,cols:null,booth0:[],booth0render:[],booth1:[],booth1render:[],booth2:[],booth2render:[],booth3:[],booth3render:[],booth4:[],booth4render:[],booth5:[],booth5render:[],booth6:[],booth6render:[],booth7:[],booth7render:[],booth8:[],booth8render:[],booth9:[],booth9render:[],booth10:[],booth10render:[],booth11:[],booth11render:[],booth12:[],booth12render:[],booth13:[],booth13render:[],booth14:[],booth14render:[],booth15:[],booth15render:[],booth16:[],booth16render:[],booth17:[],booth17render:[],booth18:[],booth18render:[],booth19:[],booth19render:[],booth20:[],booth20render:[],booth21:[],booth21render:[],booth22:[],booth22render:[],specialboothlist:[],specialboothlistrender:[],show:!1,header:"Block1",footer:"",desc:"Booth1(project_name,tyoe,width,length,ID)"},o.fileHandler=o.fileHandler.bind(Object(i.a)(o)),o.toggle=o.toggle.bind(Object(i.a)(o)),o.openFileBrowser=o.openFileBrowser.bind(Object(i.a)(o)),o.renderFile=o.renderFile.bind(Object(i.a)(o)),o.fileInput=l.a.createRef(),o.boothList=[],o.boothListCopy=[],o.blockList=[],o.fuzzLength=null,o.fuzzNum=null,o.allocated=null,o.success=0,o.failure=0,o}return Object(u.a)(t,e),Object(h.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(S,null),l.a.createElement(m.a,{exact:!0,path:"/50.003-FrontEnd",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("input",{type:"file",onChange:e.fileHandler.bind(e),style:{padding:"10px"}}),l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:e.onClickHandler},"Run Algo")),l.a.createElement("box",{component:"span",m:1},l.a.createElement("label",null,"Block 0 = "),l.a.createElement(y,{value:e.state.booth0}),l.a.createElement("label",null,"Block 1 = "),l.a.createElement(y,{value:e.state.booth1}),l.a.createElement("label",null,"Block 2 = "),l.a.createElement(y,{value:e.state.booth2}),l.a.createElement("label",null,"Block 3 = "),l.a.createElement(y,{value:e.state.booth3}),l.a.createElement("label",null,"Block 4 = "),l.a.createElement(y,{value:e.state.booth4}),l.a.createElement("label",null,"Block 5 = "),l.a.createElement(y,{value:e.state.booth5}),l.a.createElement("label",null,"Block 6 = "),l.a.createElement(y,{value:e.state.booth6}),l.a.createElement("label",null,"Block 7 = "),l.a.createElement(y,{value:e.state.booth7}),l.a.createElement("label",null,"Block 8 = "),l.a.createElement(y,{value:e.state.booth8}),l.a.createElement("label",null,"Block 9 = "),l.a.createElement(y,{value:e.state.booth9}),l.a.createElement("label",null,"Block 10 = "),l.a.createElement(y,{value:e.state.booth10}),l.a.createElement("label",null,"Block 11 = "),l.a.createElement(y,{value:e.state.booth11}),l.a.createElement("label",null,"Block 12 = "),l.a.createElement(y,{value:e.state.booth12}),l.a.createElement("label",null,"Block 13 = "),l.a.createElement(y,{value:e.state.booth13}),l.a.createElement("label",null,"Block 14 = "),l.a.createElement(y,{value:e.state.booth14}),l.a.createElement("label",null,"Block 15 = "),l.a.createElement(y,{value:e.state.booth15}),l.a.createElement("label",null,"Block 16 = "),l.a.createElement(y,{value:e.state.booth16}),l.a.createElement("label",null,"Block 17 = "),l.a.createElement(y,{value:e.state.booth17}),l.a.createElement("label",null,"Block 18 = "),l.a.createElement(y,{value:e.state.booth18}),l.a.createElement("label",null,"Block 19 = "),l.a.createElement(y,{value:e.state.booth19}),l.a.createElement("label",null,"Block 20 = "),l.a.createElement(y,{value:e.state.booth20}),l.a.createElement("label",null,"Block 21 = "),l.a.createElement(y,{value:e.state.booth21}),l.a.createElement("label",null,"Block 22 = "),l.a.createElement(y,{value:e.state.booth22}),l.a.createElement("label",null,"Special Booths = "),l.a.createElement(y,{value:e.state.specialboothlist})),e.state.dataLoaded&&l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v.OutTable,{data:e.state.rows,columns:e.state.cols,tableClassName:"ExcelTable2007",tableHeaderRowClass:"heading"}))))}}),l.a.createElement(m.a,{exact:!0,path:"/tryme",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("img",{src:L.a,className:"Campus1",alt:"Campus1",style:{position:"absolute"}}),l.a.createElement(x.Stage,{width:window.innerWidth,height:window.innerHeight},l.a.createElement(x.Layer,null,l.a.createElement(O,{x:35,y:300,text:e.state.booth0render,width:70,height:200}),l.a.createElement(j,{x:35,y:300,width:70,height:200}),l.a.createElement(O,{x:185,y:210,text:e.state.booth1render,width:100,height:100}),l.a.createElement(j,{x:185,y:210,width:100,height:100}),l.a.createElement(O,{x:190,y:350,text:e.state.booth2render,width:170,height:130}),l.a.createElement(j,{x:190,y:350,width:100,height:100}),l.a.createElement(O,{x:315,y:245,text:e.state.booth3render,width:75,height:75}),l.a.createElement(j,{x:320,y:250,width:60,height:60}),l.a.createElement(O,{x:375,y:315,text:e.state.booth4render,width:75,height:200}),l.a.createElement(j,{x:375,y:315,width:75,height:200}),l.a.createElement(O,{x:430,y:240,text:e.state.booth5render,width:75,height:50}),l.a.createElement(j,{x:440,y:250,width:50,height:50}),l.a.createElement(O,{x:367,y:203,text:e.state.booth6render,width:75}),l.a.createElement(j,{x:380,y:215,width:40,height:40}),l.a.createElement(O,{x:540,y:315,text:e.state.booth7render,width:250}),l.a.createElement(j,{x:540,y:315,width:250,height:150}),l.a.createElement(O,{x:490,y:520,text:e.state.booth8render,width:350}),l.a.createElement(j,{x:490,y:520,width:350,height:100}),l.a.createElement(O,{x:200,y:550,text:e.state.booth9render,width:250}),l.a.createElement(j,{x:200,y:550,width:250,height:150}),l.a.createElement(O,{x:900,y:550,text:e.state.booth10render,width:250}),l.a.createElement(j,{x:900,y:550,width:250,height:150}),l.a.createElement(O,{x:835,y:295,text:e.state.booth11render,width:75}),l.a.createElement(j,{x:835,y:295,width:75,height:200}),l.a.createElement(O,{x:1015,y:340,text:e.state.booth12render,width:100}),l.a.createElement(j,{x:1015,y:340,width:100,height:100}),l.a.createElement(O,{x:850,y:200,text:e.state.booth13render,width:300}),l.a.createElement(j,{x:850,y:200,width:300,height:80})))))}}),l.a.createElement(m.a,{exact:!0,path:"/level2",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("img",{src:f.a,className:"Campus2",alt:"Campus2",style:{position:"absolute"}}),l.a.createElement(x.Stage,{width:window.innerWidth,height:window.innerHeight},l.a.createElement(x.Layer,null,l.a.createElement(O,{x:300,y:600,text:e.state.booth17render,width:300,height:100}),l.a.createElement(j,{x:250,y:600,width:250,height:100}),l.a.createElement(O,{x:500,y:775,text:e.state.booth18render,width:150,height:100}),l.a.createElement(j,{x:500,y:775,width:150,height:50}),l.a.createElement(O,{x:630,y:700,text:e.state.booth19render,width:150,height:100}),l.a.createElement(j,{x:630,y:700,width:150,height:50}),l.a.createElement(O,{x:800,y:775,text:e.state.booth20render,width:150,height:100}),l.a.createElement(j,{x:800,y:775,width:150,height:50}),l.a.createElement(O,{x:900,y:600,text:e.state.booth21render,width:300,height:100}),l.a.createElement(j,{x:900,y:600,width:250,height:100}),l.a.createElement(O,{x:515,y:275,text:e.state.booth22render,width:300,height:100}),l.a.createElement(j,{x:515,y:275,width:385,height:100})))))}}),l.a.createElement(m.a,{exact:!0,path:"/Fuzzer",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:e.onClickHandler2},"Fuzzer"),l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:e.onClickHandlerFuzz},"Run Algo")),l.a.createElement("box",{component:"span",m:1},l.a.createElement("label",null,"Total Fuzzer Length"),l.a.createElement(y,{value:e.state.fuzzLength}),l.a.createElement("label",null,"Total Fuzzer Number of Booths"),l.a.createElement(y,{value:e.state.fuzzNum}),l.a.createElement("label",null,"Block 0 = "),l.a.createElement(y,{value:e.state.booth0render}),l.a.createElement("label",null,"Block 1 = "),l.a.createElement(y,{value:e.state.booth1render}),l.a.createElement("label",null,"Block 2 = "),l.a.createElement(y,{value:e.state.booth2render}),l.a.createElement("label",null,"Block 3 = "),l.a.createElement(y,{value:e.state.booth3render}),l.a.createElement("label",null,"Block 4 = "),l.a.createElement(y,{value:e.state.booth4render}),l.a.createElement("label",null,"Block 5 = "),l.a.createElement(y,{value:e.state.booth5render}),l.a.createElement("label",null,"Block 6 = "),l.a.createElement(y,{value:e.state.booth6render}),l.a.createElement("label",null,"Block 7 = "),l.a.createElement(y,{value:e.state.booth7render}),l.a.createElement("label",null,"Block 8 = "),l.a.createElement(y,{value:e.state.booth8render}),l.a.createElement("label",null,"Block 9 = "),l.a.createElement(y,{value:e.state.booth9render}),l.a.createElement("label",null,"Block 10 = "),l.a.createElement(y,{value:e.state.booth10render}),l.a.createElement("label",null,"Block 11 = "),l.a.createElement(y,{value:e.state.booth11render}),l.a.createElement("label",null,"Block 12 = "),l.a.createElement(y,{value:e.state.booth12render}),l.a.createElement("label",null,"Block 13 = "),l.a.createElement(y,{value:e.state.booth13render}),l.a.createElement("label",null,"Block 14 = "),l.a.createElement(y,{value:e.state.booth14render}),l.a.createElement("label",null,"Block 15 = "),l.a.createElement(y,{value:e.state.booth15render}),l.a.createElement("label",null,"Block 16 = "),l.a.createElement(y,{value:e.state.booth16render}),l.a.createElement("label",null,"Block 17 = "),l.a.createElement(y,{value:e.state.booth17render}),l.a.createElement("label",null,"Block 18 = "),l.a.createElement(y,{value:e.state.booth18render}),l.a.createElement("label",null,"Block 19 = "),l.a.createElement(y,{value:e.state.booth19render}),l.a.createElement("label",null,"Block 20 = "),l.a.createElement(y,{value:e.state.booth20render}),l.a.createElement("label",null,"Block 21 = "),l.a.createElement(y,{value:e.state.booth21render}),l.a.createElement("label",null,"Block 22 = "),l.a.createElement(y,{value:e.state.booth22render}),l.a.createElement("label",null,"Successes = "),l.a.createElement(y,{value:e.success}),l.a.createElement("label",null,"Failures = "),l.a.createElement(y,{value:e.failure})))}}))))}}]),t}(l.a.Component),T=(w.a.p,F);r.a.render(l.a.createElement(T,null),document.getElementById("root"))},28:function(e,t,o){e.exports=o.p+"static/media/Campus Center Level 2.8bdebe1d.png"},51:function(e,t,o){e.exports=o.p+"static/media/Campus Center Level 1.bace720c.jpg"},52:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return l}));var a=o(1);function l(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.5",l=t,n=0,r=[],s=[],h=10*Math.random()*2+e,c=0;c<h;c++){var b=Math.random();if(b<o)var i=2,u=2;else i=Math.ceil(6*Math.random())/2+2,u=Math.ceil(4*Math.random())/2+2;var d=new a.Booth(c,c,c,i,u);if(r.push(d),s.push(d),i>4&&0,(n+=d.length)>l)break}return[r,s,t,r.length]}e.exports={fuzzerBlock:function(){for(var e=[],t=20*Math.random(),o=0;o<t;o++){var l=Math.ceil(20*Math.random())/2+5,n=Math.ceil(8*Math.random())/2+1,r=new a.Block(o,l,n);e.push(r)}return[e,e.length]},fuzzerBooth:l}}).call(this,o(115)(e))},58:function(e,t,o){e.exports=o(118)}},[[58,1,2]]]);
//# sourceMappingURL=main.7c564a59.chunk.js.map