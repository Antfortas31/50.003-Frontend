(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{114:function(e,t,o){"use strict";o.r(t),function(e){var t=o(8);function a(e,t,o){if(0==t.length)return"all booths allocated successfully";if(0==e.boothList.length)return"there is no fit for this block";for(var a=!1,l=0;l<t.length;l++){var n=t[l];if(e.unusedSpace>=n.length&&n.width<=e.width&&e.boothList[e.boothList.length-1].boothType!=n.boothType){a=!0;break}}return a&&r(e,t,o),"block check finished"}function l(e,t,o){if(0==e.length)return"all booths allocated successfully";for(var a,l=!1,n=0;n<o.length;n++){for(var s=o[n],h=0;h<e.length;h++){var i=e[h];if(0!=o[n].boothList.length&&s.unusedSpace>=i.length&&i.width<=s.width&&s.boothList[s.boothList.length-1].boothType!=i.boothType){l=!0,a=n;break}}if(l)break}return l?(r(o[a],e,t),0==e.length?"all booths allocated successfully":"algo finished"):"not enough space to allocated all booths"}function n(e,t,o){if("object"!=typeof e||"object"!=typeof t||"object"!=typeof o)return"wrong input type";if(0==t.length|0==o)return"all booths allocated successfully";for(var l=0;l<o.length;l++){var n=o[l];if(!(e.unusedSpace>=n.length)){if(e.unusedSpace>0)continue;break}if(n.width<=e.width)if(0==e.boothList.length){e.boothList.push(n);var r=t.indexOf(n);r>-1&&t.splice(r,1),e.unusedSpace-=n.length}else if(e.boothList[e.boothList.length-1].boothType!=n.boothType){e.boothList.push(n);var s=t.indexOf(n);s>-1&&t.splice(s,1),e.unusedSpace-=n.length}if(e.unusedSpace<1)break}for(l=0;l<e.boothList.length;l++){var h=o.indexOf(e.boothList[l]);h>-1&&o.splice(h,1)}a(e,t,o)}function r(e,t,o){if(0==t.length|0==o)return"all booths allocated successfully";for(var l=0;l<o.length;l++){var n=o[l];if(!(e.unusedSpace>=n.length)){if(e.unusedSpace>0)continue;break}if(n.width<=e.width)if(0==e.boothList.length){e.boothList.push(n);var r=t.indexOf(n);r>-1&&t.splice(r,1),e.unusedSpace-=n.length}else if(e.boothList[e.boothList.length-1].boothType!=n.boothType){e.boothList.push(n);var s=t.indexOf(n);s>-1&&t.splice(s,1),e.unusedSpace-=n.length}if(e.unusedSpace<=0)break}for(l=0;l<e.boothList.length;l++){var h=o.indexOf(e.boothList[l]);h>-1&&o.splice(h,1)}return a(e,t,o)}e.exports={runAlgo:function(e,t,o){var a;if(0==e.length|0==t.length|0==o)return"empty arrays";for(var r=0;r<e.length;r++)if("all booths allocated successfully"==(a=n(e[r],t,o))|"not enough space to allocated all booths")return a;return a=l(t,o,e)},runBlock:n,runBlock2:r,checkAllOcuppied:l,checkBlockOccupied:a,Block:function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(t.a)(this,e),this.priority=o,this.length=a,this.width=l,this.boothList=n,this.unusedSpace=a},Booth:function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(t.a)(this,e),this.boothID=o,this.projectName=a,this.boothType=l,this.length=n,this.width=r,this.location=s},boothTypes:{aerospace:"aerospace",transport:"transport",computer:"computer",education:"education"}}}.call(this,o(115)(e))},116:function(e,t,o){},118:function(e,t,o){"use strict";o.r(t);var a=o(0),l=o.n(a),n=o(48),r=o.n(n),s=o(8),h=o(12),i=o(14),b=o(13),c=o(18),u=o(15),d=o(19),p=o(16);var m={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},S={color:"#ffaf",textDecoration:"none"},f=function(){return l.a.createElement("header",{style:m},l.a.createElement("h1",null,"Capstone Allocation"),l.a.createElement(d.b,{style:S,to:"../../50.003-FrontEnd"}," File Upload")," |",l.a.createElement(d.b,{style:S,to:"/tryme"}," Level 1")," |",l.a.createElement(d.b,{style:S,to:"/level2"}," Level 2")," |",l.a.createElement(d.b,{style:S,to:"/Fuzzer"}," Fuzzer"))},g=o(27),k=o.n(g);var E=o(50),L=o.n(E),w=o(52),v=o(35),y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(s.a)(this,e),this.priority=t,this.length=o,this.width=a,this.boothList=l,this.unusedSpace=o},x=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(s.a)(this,e),this.boothID=t,this.projectName=o,this.boothType=a,this.length=l,this.width=n,this.location=r};function j(e,t,o){var a;if(0==e.length|0==t.length|0==o)return"empty arrays";for(var l=0;l<e.length;l++)if("all booths allocated successfully"==(a=O(e[l],t,o))|"not enough space to allocated all booths")return a;return a=function(e,t,o){if(0==e.length)return"all booths allocated successfully";for(var a,l=!1,n=0;n<o.length;n++){for(var r=o[n],s=0;s<e.length;s++){var h=e[s];if(0!=o[n].boothList.length&&r.unusedSpace>=h.length&&h.width<=r.width&&r.boothList[r.boothList.length-1].boothType!=h.boothType){l=!0,a=n;break}}if(l)break}if(!l)return"not enough space to allocated all booths";C(o[a],e,t);if(0==e.length)return"all booths allocated successfully";return"algo finished"}(t,o,e)}function B(e,t,o){if(0==t.length)return"all booths allocated successfully";if(0==e.boothList.length)return"there is no fit for this block";for(var a=!1,l=0;l<t.length;l++){var n=t[l];if(e.unusedSpace>=n.length&&n.width<=e.width&&e.boothList[e.boothList.length-1].boothType!=n.boothType){a=!0;break}}return a&&C(e,t,o),"block check finished"}function O(e,t,o){if("object"!=typeof e||"object"!=typeof t||"object"!=typeof o)return"wrong input type";if(0==t.length|0==o)return"all booths allocated successfully";for(var a=0;a<o.length;a++){var l=o[a];if(!(e.unusedSpace>=l.length)){if(e.unusedSpace>0)continue;break}if(l.width<=e.width)if(0==e.boothList.length){e.boothList.push(l);var n=t.indexOf(l);n>-1&&t.splice(n,1),e.unusedSpace-=l.length}else if(e.boothList[e.boothList.length-1].boothType!=l.boothType){e.boothList.push(l);var r=t.indexOf(l);r>-1&&t.splice(r,1),e.unusedSpace-=l.length}if(e.unusedSpace<1)break}for(a=0;a<e.boothList.length;a++){var s=o.indexOf(e.boothList[a]);s>-1&&o.splice(s,1)}B(e,t,o)}function C(e,t,o){if(0==t.length|0==o)return"all booths allocated successfully";for(var a=0;a<o.length;a++){var l=o[a];if(!(e.unusedSpace>=l.length)){if(e.unusedSpace>0)continue;break}if(l.width<=e.width)if(0==e.boothList.length){e.boothList.push(l);var n=t.indexOf(l);n>-1&&t.splice(n,1),e.unusedSpace-=l.length}else if(e.boothList[e.boothList.length-1].boothType!=l.boothType){e.boothList.push(l);var r=t.indexOf(l);r>-1&&t.splice(r,1),e.unusedSpace-=l.length}if(e.unusedSpace<=0)break}for(a=0;a<e.boothList.length;a++){var s=o.indexOf(e.boothList[a]);s>-1&&o.splice(s,1)}return B(e,t,o)}var z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.value;return l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"text"},e||" "))}}]),t}(a.Component),F=(l.a.Component,o(37),o(17)),T=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(o=Object(i.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={x:o.props.x,y:o.props.y,stroke:"#555",strokeWidth:5,fill:"#ddd",width:o.props.width,height:o.props.height,shadowColor:"black",shadowBlur:10,shadowOffsetX:10,shadowOffsetY:10,shadowOpacity:.2,cornerRadius:10},o}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(F.Rect,{x:this.state.x,y:this.state.y,width:this.state.width,height:this.props.height,stroke:this.state.stroke,strokeWidth:this.state.strokeWidth,cornerRadius:this.state.cornerRadius})}}]),t}(l.a.Component),N=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(i.a)(this,Object(b.a)(t).call(this,e))).state={stroke:"black",x:o.props.x,y:o.props.y,text:o.props.text,fontSize:16,fontFamily:"Calibri",width:o.props.width,padding:20,align:"left",wrap:"word"},o}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(F.Text,{x:this.state.x,y:this.state.y,text:this.state.text,fontSize:this.state.fontSize,fontFamily:this.state.fontFamily,fill:this.state.fill,width:this.state.width,padding:this.state.padding,align:this.state.align})}}]),t}(a.Component),R=o(51);function I(e,t,o,a){for(var n=0;n<e[a].boothList.length;n++)t.push(e[a].boothList[n].projectName),t.push(l.a.createElement("br",null)),o.push(e[a].boothList[n].boothID)}o(116);var M=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(i.a)(this,Object(b.a)(t).call(this,e))).renderFile=function(e){Object(v.ExcelRenderer)(e,(function(e,t){if(e)console.log(e);else{o.setState({dataLoaded:!0,cols:t.cols,rows:t.rows}),o.boothList=[],o.boothListCopy=[],o.blockList=[];for(var a=[],n=1;n<o.state.rows.length;n++)if(null==o.state.rows[n][4]){var r=new x(o.state.rows[n][0],o.state.rows[n][1],o.state.rows[n][3],o.state.rows[n][6],o.state.rows[n][7]);o.boothList.push(r),o.boothListCopy.push(r)}else{r=new x(o.state.rows[n][0],o.state.rows[n][1],o.state.rows[n][3],o.state.rows[n][6],o.state.rows[n][7],o.state.rows[n][4]);a.push(r.projectName),a.push(": "+r.location),a.push(l.a.createElement("br",null))}o.setState({specialboothlist:a});var s=new y(0,8,5),h=new y(1,7,7),i=new y(2,6,6),b=new y(3,4,4),c=new y(4,9,4),u=new y(5,4,4),d=new y(6,3,3),p=new y(7,12,7),m=new y(8,20,6),S=new y(9,18,7),f=new y(10,17,7),g=new y(11,4,8),k=new y(12,6,6),E=new y(13,16,7),L=new y(14,3,8),w=new y(15,7,8),v=new y(16,23,3),j=new y(17,14,7),B=new y(18,12,12),O=new y(19,13,6),C=new y(20,13,6),z=new y(21,14,3),F=new y(22,36,6);o.blockList.push(s),o.blockList.push(h),o.blockList.push(i),o.blockList.push(b),o.blockList.push(c),o.blockList.push(u),o.blockList.push(d),o.blockList.push(p),o.blockList.push(m),o.blockList.push(S),o.blockList.push(f),o.blockList.push(g),o.blockList.push(k),o.blockList.push(E),o.blockList.push(L),o.blockList.push(w),o.blockList.push(v),o.blockList.push(j),o.blockList.push(B),o.blockList.push(O),o.blockList.push(C),o.blockList.push(z),o.blockList.push(F)}}))},o.fileHandler=function(e){if(e.target.files.length){var t=e.target.files[0],a=t.name;"xlsx"===a.slice(a.lastIndexOf(".")+1)?(o.setState({uploadedFileName:a,isFormInvalid:!1}),o.renderFile(t)):o.setState({isFormInvalid:!0,uploadedFileName:""})}},o.onClickHandler=function(){if(""==o.state.uploadedFileName)console.log("INCORRECT FILE TYPE");else if("Length"!=o.state.rows[0][5])console.log("INCORRECT TEMPLATE");else{o.setState({booth0:[]}),o.setState({booth1:[]}),o.setState({booth2:[]}),o.setState({booth3:[]}),o.setState({booth4:[]}),o.setState({booth5:[]}),o.setState({booth6:[]}),o.setState({booth7:[]}),o.setState({booth8:[]}),o.setState({booth9:[]}),o.setState({booth10:[]}),o.setState({booth11:[]}),o.setState({booth12:[]}),o.setState({booth13:[]}),o.setState({booth14:[]}),o.setState({booth15:[]}),o.setState({booth16:[]}),o.setState({booth17:[]}),o.setState({booth18:[]}),o.setState({booth19:[]}),o.setState({booth20:[]}),o.setState({booth21:[]}),o.setState({booth22:[]}),o.setState({booth0render:[]}),o.setState({booth1render:[]}),o.setState({booth2render:[]}),o.setState({booth3render:[]}),o.setState({booth4render:[]}),o.setState({booth5render:[]}),o.setState({booth6render:[]}),o.setState({booth7render:[]}),o.setState({booth8render:[]}),o.setState({booth9render:[]}),o.setState({booth10render:[]}),o.setState({booth11render:[]}),o.setState({booth12render:[]}),o.setState({booth13render:[]}),o.setState({booth14render:[]}),o.setState({booth15render:[]}),o.setState({booth16render:[]}),o.setState({booth17render:[]}),o.setState({booth18render:[]}),o.setState({booth19render:[]}),o.setState({booth20render:[]}),o.setState({booth21render:[]}),o.setState({booth22render:[]});j(o.blockList,o.boothList,o.boothListCopy);console.log(o.boothListCopy.length),0==o.boothList.length?(console.log("All allocated"),console.log(o.boothList.length)):o.boothList.length>0&&(console.log("Some booths not allocated"),console.log(o.boothList.length));var e=[],t=[],a=[],l=[],n=[],r=[],s=[],h=[],i=[],b=[],c=[],u=[],d=[],p=[],m=[],S=[],f=[],g=[],k=[],E=[],L=[],w=[],v=[],y=[],x=[],B=[],O=[],C=[],z=[],F=[],T=[],N=[],R=[],M=[],H=[],A=[],D=[],W=[],J=[],P=[],Y=[],U=[],X=[],_=[],q=[],G=[];I(o.blockList,e,t,0),I(o.blockList,a,l,1),I(o.blockList,n,r,2),I(o.blockList,s,h,3),I(o.blockList,i,b,4),I(o.blockList,c,u,5),I(o.blockList,d,p,6),I(o.blockList,m,S,7),I(o.blockList,f,g,8),I(o.blockList,k,E,9),I(o.blockList,L,w,10),I(o.blockList,v,y,11),I(o.blockList,x,B,12),I(o.blockList,O,C,13),I(o.blockList,z,F,14),I(o.blockList,T,N,15),I(o.blockList,R,M,16),I(o.blockList,H,A,17),I(o.blockList,D,W,18),I(o.blockList,J,P,19),I(o.blockList,Y,U,20),I(o.blockList,X,_,21),I(o.blockList,q,G,22),t=t.join(" | "),l=l.join(" | "),r=r.join(" | "),h=h.join(" | "),b=b.join(" | "),u=u.join(" | "),p=p.join(" | "),S=S.join(" | "),g=g.join(" | "),E=E.join(" | "),w=w.join(" | "),y=y.join(" | "),B=B.join(" | "),C=C.join(" | "),F=F.join(" | "),N=N.join(" | "),M=M.join(" | "),A=A.join(" | "),W=W.join(" | "),P=P.join(" | "),U=U.join(" | "),_=_.join(" | "),G=G.join(" | "),o.setState({booth0:e}),o.setState({booth1:a}),o.setState({booth2:n}),o.setState({booth3:s}),o.setState({booth4:i}),o.setState({booth5:c}),o.setState({booth6:d}),o.setState({booth7:m}),o.setState({booth8:f}),o.setState({booth9:k}),o.setState({booth10:L}),o.setState({booth11:v}),o.setState({booth12:x}),o.setState({booth13:O}),o.setState({booth14:z}),o.setState({booth15:T}),o.setState({booth16:R}),o.setState({booth17:H}),o.setState({booth18:D}),o.setState({booth19:J}),o.setState({booth20:Y}),o.setState({booth21:X}),o.setState({booth22:q}),o.setState({booth0render:t}),o.setState({booth1render:l}),o.setState({booth2render:r}),o.setState({booth3render:h}),o.setState({booth4render:b}),o.setState({booth5render:u}),o.setState({booth6render:p}),o.setState({booth7render:S}),o.setState({booth8render:g}),o.setState({booth9render:E}),o.setState({booth10render:w}),o.setState({booth11render:y}),o.setState({booth12render:B}),o.setState({booth13render:C}),o.setState({booth14render:F}),o.setState({booth15render:N}),o.setState({booth16render:M}),o.setState({booth17render:A}),o.setState({booth18render:W}),o.setState({booth19render:P}),o.setState({booth20render:U}),o.setState({booth21render:_}),o.setState({booth22render:G})}},o.onClickHandler2=function(){o.setState({booth0:[]}),o.setState({booth1:[]}),o.setState({booth2:[]}),o.setState({booth3:[]}),o.setState({booth4:[]}),o.setState({booth5:[]}),o.setState({booth6:[]}),o.setState({booth7:[]}),o.setState({booth8:[]}),o.setState({booth9:[]}),o.setState({booth10:[]}),o.setState({booth11:[]}),o.setState({booth12:[]}),o.setState({booth13:[]}),o.setState({booth14:[]}),o.setState({booth15:[]}),o.setState({booth16:[]}),o.setState({booth17:[]}),o.setState({booth18:[]}),o.setState({booth19:[]}),o.setState({booth20:[]}),o.setState({booth21:[]}),o.setState({booth22:[]}),o.setState({booth0render:[]}),o.setState({booth1render:[]}),o.setState({booth2render:[]}),o.setState({booth3render:[]}),o.setState({booth4render:[]}),o.setState({booth5render:[]}),o.setState({booth6render:[]}),o.setState({booth7render:[]}),o.setState({booth8render:[]}),o.setState({booth9render:[]}),o.setState({booth10render:[]}),o.setState({booth11render:[]}),o.setState({booth12render:[]}),o.setState({booth13render:[]}),o.setState({booth14render:[]}),o.setState({booth15render:[]}),o.setState({booth16render:[]}),o.setState({booth17render:[]}),o.setState({booth18render:[]}),o.setState({booth19render:[]}),o.setState({booth20render:[]}),o.setState({booth21render:[]}),o.setState({booth22render:[]}),o.boothList=[],o.boothListCopy=[],o.blockList=[];var e;e=R.fuzzerBooth(),o.boothList=e[0],o.boothListCopy=e[1],o.state.fuzzLength=e[2],o.state.fuzzNum=e[3];var t=new y(0,8,5),a=new y(1,7,7),l=new y(2,6,6),n=new y(3,4,4),r=new y(4,9,4),s=new y(5,4,4),h=new y(6,3,3),i=new y(7,12,7),b=new y(8,20,6),c=new y(9,18,7),u=new y(10,17,7),d=new y(11,4,8),p=new y(12,6,6),m=new y(13,16,7),S=new y(14,3,8),f=new y(15,7,8),g=new y(16,23,3),k=new y(17,14,7),E=new y(18,12,12),L=new y(19,13,6),w=new y(20,13,6),v=new y(21,14,3),x=new y(22,36,6);o.blockList.push(t),o.blockList.push(a),o.blockList.push(l),o.blockList.push(n),o.blockList.push(r),o.blockList.push(s),o.blockList.push(h),o.blockList.push(i),o.blockList.push(b),o.blockList.push(c),o.blockList.push(u),o.blockList.push(d),o.blockList.push(p),o.blockList.push(m),o.blockList.push(S),o.blockList.push(f),o.blockList.push(g),o.blockList.push(k),o.blockList.push(E),o.blockList.push(L),o.blockList.push(w),o.blockList.push(v),o.blockList.push(x)},o.onClickHandlerFuzz=function(){j(o.blockList,o.boothList,o.boothListCopy);if(0==o.boothList.length)console.log("All allocated"),console.log("Remaining Number of Booths: "+o.boothList.length),o.success++;else if(o.boothList.length>0){console.log("Some booths not allocated"),console.log("Remaining Number of Booths: "+o.boothList.length),o.failure++;for(var e=0;e<o.boothList.length;e++)console.log(o.boothList[e])}var t=[],a=[],l=[],n=[],r=[],s=[],h=[],i=[],b=[],c=[],u=[],d=[],p=[],m=[],S=[],f=[],g=[],k=[],E=[],L=[],w=[],v=[],y=[],x=[],B=[],O=[],C=[],z=[],F=[],T=[],N=[],R=[],M=[],H=[],A=[],D=[],W=[],J=[],P=[],Y=[],U=[],X=[],_=[],q=[],G=[],K=[];I(o.blockList,t,a,0),I(o.blockList,l,n,1),I(o.blockList,r,s,2),I(o.blockList,h,i,3),I(o.blockList,b,c,4),I(o.blockList,u,d,5),I(o.blockList,p,m,6),I(o.blockList,S,f,7),I(o.blockList,g,k,8),I(o.blockList,E,L,9),I(o.blockList,w,v,10),I(o.blockList,y,x,11),I(o.blockList,B,O,12),I(o.blockList,C,z,13),I(o.blockList,F,T,14),I(o.blockList,N,R,15),I(o.blockList,M,H,16),I(o.blockList,A,D,17),I(o.blockList,W,J,18),I(o.blockList,P,Y,19),I(o.blockList,U,X,20),I(o.blockList,_,q,21),I(o.blockList,G,K,22),a=a.join(" | "),n=n.join(" | "),s=s.join(" | "),i=i.join(" | "),c=c.join(" | "),d=d.join(" | "),m=m.join(" | "),f=f.join(" | "),k=k.join(" | "),L=L.join(" | "),v=v.join(" | "),x=x.join(" | "),O=O.join(" | "),z=z.join(" | "),T=T.join(" | "),R=R.join(" | "),H=H.join(" | "),D=D.join(" | "),J=J.join(" | "),Y=Y.join(" | "),X=X.join(" | "),q=q.join(" | "),K=K.join(" | "),o.setState({booth0:t}),o.setState({booth1:l}),o.setState({booth2:r}),o.setState({booth3:h}),o.setState({booth4:b}),o.setState({booth5:u}),o.setState({booth6:p}),o.setState({booth7:S}),o.setState({booth8:g}),o.setState({booth9:E}),o.setState({booth10:w}),o.setState({booth11:y}),o.setState({booth12:B}),o.setState({booth13:C}),o.setState({booth14:F}),o.setState({booth15:N}),o.setState({booth16:M}),o.setState({booth17:A}),o.setState({booth18:W}),o.setState({booth19:P}),o.setState({booth20:U}),o.setState({booth21:_}),o.setState({booth22:G}),o.setState({booth0render:a}),o.setState({booth1render:n}),o.setState({booth2render:s}),o.setState({booth3render:i}),o.setState({booth4render:c}),o.setState({booth5render:d}),o.setState({booth6render:m}),o.setState({booth7render:f}),o.setState({booth8render:k}),o.setState({booth9render:L}),o.setState({booth10render:v}),o.setState({booth11render:x}),o.setState({booth12render:O}),o.setState({booth13render:z}),o.setState({booth14render:T}),o.setState({booth15render:R}),o.setState({booth16render:H}),o.setState({booth17render:D}),o.setState({booth18render:J}),o.setState({booth19render:Y}),o.setState({booth20render:X}),o.setState({booth21render:q}),o.setState({booth22render:K})},o.openFileBrowser=function(){o.fileInput.current.click()},o.showModal=function(){o.setState({show:!0})},o.hideModal=function(){o.setState({show:!1})},o.state={isOpen:!1,dataLoaded:!1,isFormInvalid:!1,rows:null,cols:null,booth0:[],booth0render:[],booth1:[],booth1render:[],booth2:[],booth2render:[],booth3:[],booth3render:[],booth4:[],booth4render:[],booth5:[],booth5render:[],booth6:[],booth6render:[],booth7:[],booth7render:[],booth8:[],booth8render:[],booth9:[],booth9render:[],booth10:[],booth10render:[],booth11:[],booth11render:[],booth12:[],booth12render:[],booth13:[],booth13render:[],booth14:[],booth14render:[],booth15:[],booth15render:[],booth16:[],booth16render:[],booth17:[],booth17render:[],booth18:[],booth18render:[],booth19:[],booth19render:[],booth20:[],booth20render:[],booth21:[],booth21render:[],booth22:[],booth22render:[],specialboothlist:[],specialboothlistrender:[],show:!1,header:"Block1",footer:"",desc:"Booth1(project_name,tyoe,width,length,ID)"},o.fileHandler=o.fileHandler.bind(Object(c.a)(o)),o.toggle=o.toggle.bind(Object(c.a)(o)),o.openFileBrowser=o.openFileBrowser.bind(Object(c.a)(o)),o.renderFile=o.renderFile.bind(Object(c.a)(o)),o.fileInput=l.a.createRef(),o.boothList=[],o.boothListCopy=[],o.blockList=[],o.fuzzLength=null,o.fuzzNum=null,o.allocated=null,o.success=0,o.failure=0,o}return Object(u.a)(t,e),Object(h.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(f,null),l.a.createElement(p.a,{exact:!0,path:"/50.003-FrontEnd",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("input",{type:"file",onChange:e.fileHandler.bind(e),style:{padding:"10px"}}),l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:e.onClickHandler},"Run Algo")),l.a.createElement("box",{component:"span",m:1},l.a.createElement("label",null,"Block 0 = "),l.a.createElement(z,{value:e.state.booth0}),l.a.createElement("label",null,"Block 1 = "),l.a.createElement(z,{value:e.state.booth1}),l.a.createElement("label",null,"Block 2 = "),l.a.createElement(z,{value:e.state.booth2}),l.a.createElement("label",null,"Block 3 = "),l.a.createElement(z,{value:e.state.booth3}),l.a.createElement("label",null,"Block 4 = "),l.a.createElement(z,{value:e.state.booth4}),l.a.createElement("label",null,"Block 5 = "),l.a.createElement(z,{value:e.state.booth5}),l.a.createElement("label",null,"Block 6 = "),l.a.createElement(z,{value:e.state.booth6}),l.a.createElement("label",null,"Block 7 = "),l.a.createElement(z,{value:e.state.booth7}),l.a.createElement("label",null,"Block 8 = "),l.a.createElement(z,{value:e.state.booth8}),l.a.createElement("label",null,"Block 9 = "),l.a.createElement(z,{value:e.state.booth9}),l.a.createElement("label",null,"Block 10 = "),l.a.createElement(z,{value:e.state.booth10}),l.a.createElement("label",null,"Block 11 = "),l.a.createElement(z,{value:e.state.booth11}),l.a.createElement("label",null,"Block 12 = "),l.a.createElement(z,{value:e.state.booth12}),l.a.createElement("label",null,"Block 13 = "),l.a.createElement(z,{value:e.state.booth13}),l.a.createElement("label",null,"Block 14 = "),l.a.createElement(z,{value:e.state.booth14}),l.a.createElement("label",null,"Block 15 = "),l.a.createElement(z,{value:e.state.booth15}),l.a.createElement("label",null,"Block 16 = "),l.a.createElement(z,{value:e.state.booth16}),l.a.createElement("label",null,"Block 17 = "),l.a.createElement(z,{value:e.state.booth17}),l.a.createElement("label",null,"Block 18 = "),l.a.createElement(z,{value:e.state.booth18}),l.a.createElement("label",null,"Block 19 = "),l.a.createElement(z,{value:e.state.booth19}),l.a.createElement("label",null,"Block 20 = "),l.a.createElement(z,{value:e.state.booth20}),l.a.createElement("label",null,"Block 21 = "),l.a.createElement(z,{value:e.state.booth21}),l.a.createElement("label",null,"Block 22 = "),l.a.createElement(z,{value:e.state.booth22}),l.a.createElement("label",null,"Special Booths = "),l.a.createElement(z,{value:e.state.specialboothlist})),e.state.dataLoaded&&l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v.OutTable,{data:e.state.rows,columns:e.state.cols,tableClassName:"ExcelTable2007",tableHeaderRowClass:"heading"}))))}}),l.a.createElement(p.a,{exact:!0,path:"/tryme",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("img",{src:L.a,className:"Campus1",alt:"Campus1",style:{position:"absolute"}}),l.a.createElement(F.Stage,{width:window.innerWidth,height:window.innerHeight},l.a.createElement(F.Layer,null,l.a.createElement(N,{x:35,y:300,text:e.state.booth0render,width:70,height:200}),l.a.createElement(T,{x:35,y:300,width:70,height:200}),l.a.createElement(N,{x:185,y:210,text:e.state.booth1render,width:100,height:100}),l.a.createElement(T,{x:185,y:210,width:100,height:100}),l.a.createElement(N,{x:190,y:350,text:e.state.booth2render,width:170,height:130}),l.a.createElement(T,{x:190,y:350,width:100,height:100}),l.a.createElement(N,{x:315,y:245,text:e.state.booth3render,width:75,height:75}),l.a.createElement(T,{x:320,y:250,width:60,height:60}),l.a.createElement(N,{x:375,y:315,text:e.state.booth4render,width:75,height:200}),l.a.createElement(T,{x:375,y:315,width:75,height:200}),l.a.createElement(N,{x:430,y:240,text:e.state.booth5render,width:75,height:50}),l.a.createElement(T,{x:440,y:250,width:50,height:50}),l.a.createElement(N,{x:367,y:203,text:e.state.booth6render,width:75}),l.a.createElement(T,{x:380,y:215,width:40,height:40}),l.a.createElement(N,{x:540,y:315,text:e.state.booth7render,width:250}),l.a.createElement(T,{x:540,y:315,width:250,height:150}),l.a.createElement(N,{x:490,y:520,text:e.state.booth8render,width:350}),l.a.createElement(T,{x:490,y:520,width:350,height:100}),l.a.createElement(N,{x:200,y:550,text:e.state.booth9render,width:250}),l.a.createElement(T,{x:200,y:550,width:250,height:150}),l.a.createElement(N,{x:900,y:550,text:e.state.booth10render,width:250}),l.a.createElement(T,{x:900,y:550,width:250,height:150}),l.a.createElement(N,{x:835,y:295,text:e.state.booth11render,width:75}),l.a.createElement(T,{x:835,y:295,width:75,height:200}),l.a.createElement(N,{x:1015,y:340,text:e.state.booth12render,width:100}),l.a.createElement(T,{x:1015,y:340,width:100,height:100}),l.a.createElement(N,{x:850,y:200,text:e.state.booth13render,width:300}),l.a.createElement(T,{x:850,y:200,width:300,height:80})))))}}),l.a.createElement(p.a,{exact:!0,path:"/level2",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("img",{src:k.a,className:"Campus2",alt:"Campus2",style:{position:"absolute"}}),l.a.createElement(F.Stage,{width:window.innerWidth,height:window.innerHeight},l.a.createElement(F.Layer,null,l.a.createElement(N,{x:300,y:600,text:e.state.booth17render,width:300,height:100}),l.a.createElement(T,{x:250,y:600,width:250,height:100}),l.a.createElement(N,{x:500,y:775,text:e.state.booth18render,width:150,height:100}),l.a.createElement(T,{x:500,y:775,width:150,height:50}),l.a.createElement(N,{x:630,y:700,text:e.state.booth19render,width:150,height:100}),l.a.createElement(T,{x:630,y:700,width:150,height:50}),l.a.createElement(N,{x:800,y:775,text:e.state.booth20render,width:150,height:100}),l.a.createElement(T,{x:800,y:775,width:150,height:50}),l.a.createElement(N,{x:900,y:600,text:e.state.booth21render,width:300,height:100}),l.a.createElement(T,{x:900,y:600,width:250,height:100}),l.a.createElement(N,{x:515,y:275,text:e.state.booth22render,width:300,height:100}),l.a.createElement(T,{x:515,y:275,width:385,height:100})))))}}),l.a.createElement(p.a,{exact:!0,path:"/Fuzzer",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:e.onClickHandler2},"Fuzzer"),l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:e.onClickHandlerFuzz},"Run Algo")),l.a.createElement("box",{component:"span",m:1},l.a.createElement("label",null,"Total Fuzzer Length"),l.a.createElement(z,{value:e.state.fuzzLength}),l.a.createElement("label",null,"Total Fuzzer Number of Booths"),l.a.createElement(z,{value:e.state.fuzzNum}),l.a.createElement("label",null,"Block 0 = "),l.a.createElement(z,{value:e.state.booth0render}),l.a.createElement("label",null,"Block 1 = "),l.a.createElement(z,{value:e.state.booth1render}),l.a.createElement("label",null,"Block 2 = "),l.a.createElement(z,{value:e.state.booth2render}),l.a.createElement("label",null,"Block 3 = "),l.a.createElement(z,{value:e.state.booth3render}),l.a.createElement("label",null,"Block 4 = "),l.a.createElement(z,{value:e.state.booth4render}),l.a.createElement("label",null,"Block 5 = "),l.a.createElement(z,{value:e.state.booth5render}),l.a.createElement("label",null,"Block 6 = "),l.a.createElement(z,{value:e.state.booth6render}),l.a.createElement("label",null,"Block 7 = "),l.a.createElement(z,{value:e.state.booth7render}),l.a.createElement("label",null,"Block 8 = "),l.a.createElement(z,{value:e.state.booth8render}),l.a.createElement("label",null,"Block 9 = "),l.a.createElement(z,{value:e.state.booth9render}),l.a.createElement("label",null,"Block 10 = "),l.a.createElement(z,{value:e.state.booth10render}),l.a.createElement("label",null,"Block 11 = "),l.a.createElement(z,{value:e.state.booth11render}),l.a.createElement("label",null,"Block 12 = "),l.a.createElement(z,{value:e.state.booth12render}),l.a.createElement("label",null,"Block 13 = "),l.a.createElement(z,{value:e.state.booth13render}),l.a.createElement("label",null,"Block 14 = "),l.a.createElement(z,{value:e.state.booth14render}),l.a.createElement("label",null,"Block 15 = "),l.a.createElement(z,{value:e.state.booth15render}),l.a.createElement("label",null,"Block 16 = "),l.a.createElement(z,{value:e.state.booth16render}),l.a.createElement("label",null,"Block 17 = "),l.a.createElement(z,{value:e.state.booth17render}),l.a.createElement("label",null,"Block 18 = "),l.a.createElement(z,{value:e.state.booth18render}),l.a.createElement("label",null,"Block 19 = "),l.a.createElement(z,{value:e.state.booth19render}),l.a.createElement("label",null,"Block 20 = "),l.a.createElement(z,{value:e.state.booth20render}),l.a.createElement("label",null,"Block 21 = "),l.a.createElement(z,{value:e.state.booth21render}),l.a.createElement("label",null,"Block 22 = "),l.a.createElement(z,{value:e.state.booth22render}),l.a.createElement("label",null,"Successes = "),l.a.createElement(z,{value:e.success}),l.a.createElement("label",null,"Failures = "),l.a.createElement(z,{value:e.failure})))}}))))}}]),t}(l.a.Component),H=(w.a.p,M);r.a.render(l.a.createElement(H,null),document.getElementById("root"))},27:function(e,t,o){e.exports=o.p+"static/media/Campus Center Level 2.8bdebe1d.png"},50:function(e,t,o){e.exports=o.p+"static/media/Campus Center Level 1.bace720c.jpg"},51:function(e,t,o){var a=o(114);e.exports={fuzzerBlock:function(){for(var e=[],t=20*Math.random(),o=0;o<t;o++){var l=Math.ceil(20*Math.random())/2+5,n=Math.ceil(8*Math.random())/2+1,r=new a.Block(o,l,n);e.push(r)}return[e,e.length]},fuzzerBooth:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.5",l=t,n=0,r=[],s=[],h=10*Math.random()*2+e,i=0;i<h;i++){var b=Math.random();if(b<o)var c=2,u=2;else c=Math.ceil(6*Math.random())/2+2,u=Math.ceil(4*Math.random())/2+2;var d=new a.Booth(i,i,i,c,u);if(r.push(d),s.push(d),c>4&&0,(n+=d.length)>l)break}return[r,s,t,r.length]}}},57:function(e,t,o){e.exports=o(118)}},[[57,1,2]]]);
//# sourceMappingURL=main.d9587574.chunk.js.map