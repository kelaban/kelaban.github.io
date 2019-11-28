(this["webpackJsonpcrossword-maker"]=this["webpackJsonpcrossword-maker"]||[]).push([[0],{72:function(e,t,n){e.exports=n(85)},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=(n(77),n(5)),l=n(10),u=n(12),s=n(3),d=(n(78),n(79),"ACROSS"),f="DOWN",m=function(e){return e===d},p=function(e){return"."===e},h="UNDO",b="REDO",g="UPDATE_WORD_TO_CLUE",O="UPDATE_GRID",v="SET_CURRENT_WORD",w="SET_SELECTED_SQUARE",y="SET_CLUE_FOCUS";function E(e){var t=e.grid,n=e.selected,r=e.currentWord,o=e.hideAnswers,c=e.onClick,i=t.size,l=i.rows,s=i.cols,d=Object(u.a)(Array(l*s).keys()).map((function(e){var i=Math.floor(e/s),l=Math.floor(e%s),u=t.grid[e],d=["Grid-item"];n&&n.row===i&&n.column===l?d.push("Grid-item-selected"):p(u)?d.push("Grid-item-blocked"):r&&r.coordinates.some((function(e){return e[0]===i&&e[1]===l}))&&d.push("Grid-item-highlight");var f=d.join(" "),m={fontSize:"".concat(1/u.length*1.1,"em")};return a.a.createElement("div",{key:e,className:f,onClick:function(){return c({row:i,column:l})}},a.a.createElement("span",{className:"Grid-number"},t.gridnums[e]>0?t.gridnums[e]:""),a.a.createElement("span",{style:m},o?" ":u))}));return a.a.createElement("div",{style:{gridTemplateColumns:"repeat(".concat(s,", 1fr)"),gridTemplateRows:"repeat(".concat(l,", 1fr)")},className:"Grid-container"},d)}var j=n(123),k=n(140),C=n(143),S=n(129),z=n(126),P=n(127),R=n(125),W=n(130),T=Object(j.a)((function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));function N(e){var t=e.onSave,n=e.open,r=e.setOpen,o=T(),c=a.a.useState({rows:15,cols:15}),u=Object(l.a)(c,2),s=u[0],d=u[1],f=function(e){return function(){r(!1),e&&t(s)}},m=function(e){return function(t){d(Object.assign({},s,Object(i.a)({},e,+t.target.value||"")))}};return a.a.createElement(C.a,{open:n,onClose:f(!1)},a.a.createElement(R.a,null,"Create New Puzzle"),a.a.createElement(z.a,null,a.a.createElement(P.a,null,"Create a new puzzle. Warning! This will destroy the current puzzle. Make sure to save first!"),a.a.createElement(k.a,{label:"Rows",value:s.rows,onChange:m("rows"),className:o.textField,type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",inputProps:{min:1,max:100}}),a.a.createElement(k.a,{label:"Columns",value:s.cols,onChange:m("cols"),className:o.textField,type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",inputProps:{min:1,max:100}})),a.a.createElement(S.a,null,a.a.createElement(W.a,{onClick:f(!1),color:"primary"},"Cancel"),a.a.createElement(W.a,{onClick:f(!0),color:"primary"},"Create")))}var D=n(134),x=n(135),I=n(56),L=n(131),A=n(133),U=n(132);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=Object(j.a)((function(e){return{title:{backgroundColor:"rgba(255,255,255,1)"},list:{width:200}}})),B=function(e){if(!e)return e;e=e.toUpperCase();var t=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"\u2318":"Ctrl";return 3===(e=(e=e.replace("MOD",t)).replace("SHIFT","\u21e7")).length&&(e=e.replace("+","")),e};function G(e){var t=e.title,n=e.items,r=_(),o=a.a.useState(null),c=Object(l.a)(o,2),i=c[0],u=c[1],s=function(){u(null)};return a.a.createElement("div",null,a.a.createElement(W.a,{size:"small",onClick:function(e){u(e.currentTarget)}},t),a.a.createElement(I.a,{anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:s,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},MenuListProps:{className:r.list}},n.map((function(e,t){return a.a.createElement(L.a,{key:t,onClick:(n=e.action,function(e){n(),s()}),dense:!0},a.a.createElement(U.a,{primary:e.label}),a.a.createElement(A.a,null,B(e.key)));var n}))))}function J(e){var t=e.actions,n=t.handleSavePuzzle,r=t.handleImportPuzzle,o=t.handleCreateNewPuzzle,c=[F({label:"Save Puzzle"},n),F({label:"Load Puzzle"},r),F({label:"New Puzzle"},o)];return a.a.createElement(G,{title:"File",items:c})}function H(e){var t=e.actions,n=t.handleUndo,r=t.handleRedo,o=[F({label:"Undo"},n),F({label:"Redo"},r)];return a.a.createElement(G,{title:"Edit",items:o})}function V(e){var t=e.actions,n=t.handleInsertRebus,r=t.handleInsertBlockedSquare,o=[F({label:"Rebus"},n),F({label:"Blocked Square"},r)];return a.a.createElement(G,{title:"Insert",items:o})}function q(e){var t=_();return e.actions?a.a.createElement(D.a,{position:"static"},a.a.createElement(x.a,{className:t.title},a.a.createElement(J,e),a.a.createElement(H,e),a.a.createElement(V,e))):null}var Y=n(128),K=n(88),Q=n(27),$=null,X=Object(r.memo)((function(e){var t=e.currentWord,n=e.onClick,o=Object(r.useState)($||[]),c=Object(l.a)(o,2),i=c[0],u=c[1],s=Object(r.useState)([]),d=Object(l.a)(s,2),f=d[0],m=d[1],p=Object(r.useCallback)(Object(Q.debounce)((function(e){m(i.filter((function(t){return t.match(e)})))}),300),[i]);Object(r.useEffect)((function(){fetch("".concat("/xwordmaker","/wordlist/wordlist.txt")).then((function(e){return e.text()})).then((function(e){return e.split("\n").filter((function(e){return!e.startsWith("#")}))})).then((function(e){return function(e){$=e,u(e)}(e)}))}),[]),Object(r.useEffect)((function(){p(new RegExp("^"+t.word+"$","i"))}),[i,t.word,p]);return a.a.createElement("div",null,"Words: ",f.length>100?"showing ".concat(100,"/"):"",f.length,a.a.createElement(Y.a,{dense:!0},f.slice(0,100).map((function(e){return a.a.createElement(K.a,{button:!0,onClick:function(){return n(e)},key:e},e)}))))})),Z=n(36),ee=function(e,t,n){return e.size.cols*t+n},te=function(e,t,n){return e.grid[ee(e,t,n)]},ne=n(45),re=n.n(ne),ae=function e(t){var n=this;Object(Z.a)(this,e),this.right=function(){n.setSelected({row:n.selected.row,column:Math.min(n.width-1,n.selected.column+1)})},this.left=function(){n.setSelected({row:n.selected.row,column:Math.max(0,n.selected.column-1)})},this.up=function(){n.setSelected({row:Math.max(0,n.selected.row-1),column:n.selected.column})},this.down=function(){n.setSelected({row:Math.min(n.height-1,n.selected.row+1),column:n.selected.column})},this.moveForward=function(){m(n.currentWord.direction)?n.right():n.down()},this.moveBack=function(){m(n.currentWord.direction)?n.left():n.up()};var r=t.selected,a=t.width,o=t.height,c=t.currentWord,i=t.setSelected;this.width=a,this.height=o,this.selected=r,this.setSelected=i,this.currentWord=c},oe=function e(t){var n=this;Object(Z.a)(this,e),this.setRotationalSymettry=function(e){n.grid.grid[ee(n.grid,n.rows-n.selected.row-1,n.cols-n.selected.column-1)]=e},this.handleBackspace=function(e){var t=n.grid,r=n.selected,a=n.movement,o=n.updateGrid,c=te(t,r.row,r.column);p(c)&&n.setRotationalSymettry(""),t.grid[ee(t,r.row,r.column)]="",a.moveBack(),o(t)},this.handleLetter=function(e){var t;t=e.key?e.key.toUpperCase():e.toUpperCase();var r=n.grid,a=n.selected,o=n.movement,c=n.updateGrid;if(a)if("."===t)r.grid[ee(r,a.row,a.column)]=t,n.setRotationalSymettry(t),o.moveForward(),c(r);else if(e.shiftKey)r.grid[ee(r,a.row,a.column)]+=t,c(r);else{var i=te(r,a.row,a.column);if(i===t)return void o.moveForward();p(i)&&n.setRotationalSymettry(""),r.grid[ee(r,a.row,a.column)]=t,o.moveForward(),c(r)}},this.handleSpace=function(e){var t=n.setCurrentWord,r=n.currentWord;t(Object.assign({},r,{direction:m(r.direction)?f:d}))},this.handleLeft=function(){n.movement.left()},this.handleRight=function(){n.movement.right()},this.handleUp=function(){n.movement.up()},this.handleDown=function(){n.movement.down()},this.selected=t.selected,this.setSelected=t.setSelected,this.currentWord=t.currentWord,this.setCurrentWord=t.setCurrentWord,this.grid=Object(Q.cloneDeep)(t.grid),this.updateGrid=t.updateGrid,this.rows=t.grid.size.rows,this.cols=t.grid.size.cols,this.movement=new ae({width:t.grid.size.cols,height:t.grid.size.rows,setSelected:t.setSelected,currentWord:t.currentWord,selected:t.selected})},ce="MOVE_UP",ie="MOVE_LEFT",le="MOVE_RIGHT",ue="MOVE_DOWN",se="ENTER_LETTER",de="BACKSPACE",fe="SPACE",me=Object(j.a)((function(e){return{noOutline:{"&:focus":{outline:0}}}}));function pe(e){var t,n,o=me(),c=Object(r.useState)(!1),u=Object(l.a)(c,2),s=u[0],d=u[1],f=e.extraActions,m=e.keyPressHandler,p=(t={},Object(i.a)(t,ce,"up"),Object(i.a)(t,ue,"down"),Object(i.a)(t,ie,"left"),Object(i.a)(t,le,"right"),Object(i.a)(t,se,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")),Object(i.a)(t,de,["del","backspace"]),Object(i.a)(t,fe,"space"),t),h=(n={},Object(i.a)(n,ce,m.handleUp),Object(i.a)(n,ue,m.handleDown),Object(i.a)(n,ie,m.handleLeft),Object(i.a)(n,le,m.handleRight),Object(i.a)(n,se,m.handleLetter),Object(i.a)(n,de,m.handleBackspace),Object(i.a)(n,fe,m.handleSpace),n);f&&Object.keys(f).forEach((function(e){p[e]=f[e].key,h[e]=function(t){return f[e].action(),!1}}));var b=function(e){return function(t){d(e)}};return Object(r.useEffect)((function(){return Object.keys(p).forEach((function(e){var t;re.a.bind(p[e],(t=h[e],function(e){return s&&t(e)}))})),function(){Object.keys(p).forEach((function(e){re.a.unbind(p[e])}))}})),a.a.createElement("div",{ref:e.forwardRef,className:o.noOutline,onFocus:b(!0),onBlur:b(!1),tabIndex:"-1"},e.children)}var he=n(136),be=n(33),ge=Object(j.a)((function(e){return{focused:{}}}));function Oe(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}function ve(e){var t=e.word,n=e.clue,r=e.dir,o=e.currentWord,c=e.onClick,i=e.onBlur,l=(ge(),+n.match(/^ *[0-9]+/)[0].trim()),u=Oe(n.replace(/^ *[0-9]*\. */,"")),d=t.match("_"),f=!d&&!u.length,m=o.clueNum===l&&o.direction===r,p=Object(s.a)({"Mui-focused":m});return a.a.createElement(k.a,{label:"".concat(l,": ").concat(t),defaultValue:u,type:"text",margin:"dense",variant:"outlined",fullWidth:!0,onClick:c(r,l),onBlur:i(r,t),disabled:d,error:f,InputLabelProps:{className:p},InputProps:{className:p}})}var we=Object(r.memo)((function(e){var t=e.grid,n=e.currentWord,r=e.onClueFocus,o=e.onClueChanged,c=function(e,t){return function(n){r(e,t)}},i=function(e,t){return function(n){o(e,t,n.target.value)}},l=function(e){var r=e.toLowerCase();return t.clues[r].map((function(o,l){var u=t.answers[r][l];return a.a.createElement(ve,{key:"".concat(r,"-").concat(l,"-").concat(u),word:u,clue:o,dir:e,currentWord:n,onClick:c,onBlur:i})}))},u=l(d),s=l(f);return a.a.createElement("div",null,a.a.createElement(he.a,{container:!0,spacing:1},a.a.createElement(he.a,{item:!0,xs:!0},a.a.createElement(be.a,null,"Across"),u),a.a.createElement(he.a,{item:!0,xs:!0},a.a.createElement(be.a,null,"Down"),s)))}));function ye(e){var t=e.grid,n={margin:0,listStyleType:"none"},r=function(e){var t=+e.match(/^ *[0-9]+/)[0].trim(),r=Oe(e.replace(/^ *[0-9]*\. */,""));return a.a.createElement("li",{style:n,key:e},a.a.createElement("b",{style:{marginRight:2}},t),r)};return a.a.createElement("div",{style:{marginTop:40,marginRight:20,marginLeft:20,height:"calc(100vh - 40px)"}},a.a.createElement("div",{style:{float:"right",width:"50vmin",height:"50vmin"}},a.a.createElement(E,{grid:t,hideAnswers:!0})),a.a.createElement("ul",{style:{width:"calc(50vw - 40px)",columnCount:2,margin:0,padding:0}},a.a.createElement("li",{style:n},a.a.createElement("b",null,"ACROSS")),t.clues.across.map(r),a.a.createElement("li",{style:n},a.a.createElement("b",null,"DOWN")),t.clues.down.map(r)))}var Ee=Object(j.a)((function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));function je(e){var t=e.onSave,n=e.open,r=e.setOpen,o=Ee(),c=a.a.useState(""),i=Object(l.a)(c,2),u=i[0],s=i[1],d=function(e){return function(){r(!1),e&&t(u)}};return a.a.createElement(C.a,{open:n,onClose:d(!1)},a.a.createElement(R.a,null,"Insert Rebus"),a.a.createElement(z.a,null,a.a.createElement(P.a,null,"Add a rebus"),a.a.createElement(k.a,{label:"Text",value:u,onChange:function(e){s(e.target.value.toUpperCase())},className:o.textField,type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",inputProps:{}})),a.a.createElement(S.a,null,a.a.createElement(W.a,{onClick:d(!1),color:"primary"},"Cancel"),a.a.createElement(W.a,{onClick:d(!0),color:"primary"},"Save")))}var ke=Object(r.forwardRef)((function(e,t){var n=e.onSavePuzzle,o=e.onImportPuzzle,c=e.onCreateNewPuzzle,i=e.onUndo,u=e.onRedo,s=e.onRebus,d=a.a.useState(!1),f=Object(l.a)(d,2),m=f[0],p=f[1],h=a.a.useState(!1),b=Object(l.a)(h,2),g=b[0],O=b[1],v=a.a.useRef(),w=function(){v.current.click()},y=function(){p(!0)},E=function(){O(!0)};return Object(r.useImperativeHandle)(t,(function(){return{handleSavePuzzle:{key:"mod+s",action:n},handleImportPuzzle:{key:"mod+o",action:w},handleCreateNewPuzzle:{key:"mod+u",action:y},handleUndo:{key:"mod+z",action:i},handleRedo:{key:"mod+shift+z",action:u},handleInsertRebus:{key:"mod+i",action:E},handleInsertBlockedSquare:{key:".",action:function(){return s(".")}}}})),a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{ref:v,type:"file",style:{display:"none"},onChange:o}),a.a.createElement(N,{open:m,setOpen:p,onSave:c}),a.a.createElement(je,{open:g,setOpen:O,onSave:s}))}));function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=25;function Pe(e,t){for(var n=e.size,r=n.rows,a=n.cols,o={gridnums:e.grid.map((function(e){return 0})),answers:{down:[],across:[]},clues:{down:[],across:[]}},c=1,i=0;i<r;++i)for(var l=0;l<a;++l)if(!p(te(e,i,l))){var u=(0===i||p(te(e,i-1,l)))&&!(i===r||p(te(e,i+1,l))),s=(0===l||p(te(e,i,l-1)))&&!(l===a||p(te(e,i,l+1)));if((s||u)&&(o.gridnums[ee(e,i,l)]=c++),s){for(var d="",f=l;!p(te(e,i,f))&&f<a;){var m=te(e,i,f);d+=m||"_",f++}o.answers.across.push(d);var h=t[d]||"";o.clues.across.push("".concat(c-1,". ").concat(h))}if(u){for(var b="",g=i;!p(te(e,g,l))&&g<r;){var O=te(e,g,l);b+=O||"_",g++}o.answers.down.push(b);var v=t[b]||"";o.clues.down.push("".concat(c-1,". ").concat(v))}}return o}function Re(e,t){switch(t.type){case h:return function(e,t){var n=e.history.undo;if(!n.length)return e;var r=Se({},e),a=n[n.length-1],o=n.slice(0,n.length-1);return r.grid=a,r.history={undo:o,redo:[e.grid].concat(Object(u.a)(e.history.redo))},r}(e);case b:return function(e,t){var n=e.history.redo;if(!n.length)return e;var r=Se({},e),a=n[0],o=n.slice(1);return r.grid=a,r.history={undo:[].concat(Object(u.a)(e.history.undo),[e.grid]),redo:o},r}(e);case g:return function(e,t){var n=Se({},e.wordToClue,{},t.payload);return Se({},e,{grid:Se({},e.grid,{},Pe(e.grid,n)),wordToClue:n})}(e,t);case O:return function(e,t){var n=Se({},e,{},t.payload);return n.grid=Se({},n.grid,{},Pe(n.grid,n.wordToClue)),n.history.undo=e.history.undo.slice(-ze),n.history.undo.push(e.grid),n.history.redo=[],n}(e,t);default:throw new Error("Unknown Action Type: "+t.type)}}function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ne(){return{word:"",direction:d,coordinates:[]}}function De(e,t){switch(t.type){case v:return function(e,t){return Te({},e,{currentWord:Te({},e.currentWord,{},t.payload)})}(e,t);case w:return function(e,t){var n=e.currentWord,r=e.selected,a=t.payload,o=n;return a&&r&&a.row===r.row&&a.column===r.column&&(o=Te({},o,{direction:m(n.direction)?f:d})),Te({},e,{selected:a,currentWord:o})}(e,t);case y:return function(e,t){var n=t.payload,r=n.direction,a=n.selected;return Te({},e,{currentWord:Te({},Ne(),{direction:r}),selected:a})}(e,t);default:throw new Error("Unknown Action Type: "+t.type)}}var xe=n(55),Ie=n(15),Le=n(137),Ae=n(86),Ue=n(139),Me=n(141),Fe=n(138),_e=Object(j.a)((function(e){return{root:{display:"flex"},title:{flexGrow:1},container:{paddingLeft:12,paddingRight:12,paddingTop:32},paper:{padding:10},scroll:{overflow:"scroll",maxHeight:"calc(100vh - 180px)"}}}));function Be(e){var t=e.children;return e.value!==e.index?a.a.createElement("div",null):a.a.createElement("div",null,t)}var Ge=function(e){var t={title:"TODO: NY Times, Thu, Sep 11, 2008",author:"TODO: Caleb Madison",editor:"TODO: Will Shortz",copyright:"TODO: 2008, The New York Times",publisher:"TODO: The New York Times",date:"TODO: 9/11/2008",size:e,clues:{across:[],down:[]}};return Object.assign(t,{grid:Object(u.a)(Array(t.size.rows*t.size.cols).keys()).map((function(e){return""})),gridnums:Object(u.a)(Array(t.size.rows*t.size.cols).keys()).map((function(e){return 0})),circles:Object(u.a)(Array(t.size.rows*t.size.cols).keys()).map((function(e){return 0}))})};function Je(e){var t={};if(e.answers){var n=function(n){e.answers[n].filter((function(e){return!e.match("_")})).reduce((function(t,r,a){var o=(e.clues[n][a]||"").replace(/^ *[0-9]*\. */,"");return t[r]=o,t}),t)};n("down"),n("across")}return t}function He(e){var t=e||JSON.parse(localStorage.getItem("grid"))||Ge({rows:15,cols:15});return{grid:t,wordToClue:Je(t),history:JSON.parse(localStorage.getItem("history"))||{undo:[],redo:[]}}}var Ve=He(),qe=a.a.createRef();function Ye(e){var t=e.children,n=Object(r.useState)("100%"),o=Object(l.a)(n,2),c=o[0],i=o[1],u=function(){qe.current&&i(qe.current.clientWidth)};return Object(r.useEffect)((function(){return window.addEventListener("resize",u),u(),function(){window.removeEventListener("resize",u)}}),[]),a.a.createElement("div",{ref:qe,style:{width:c,height:c}},t)}var Ke=a.a.createRef();var Qe=function(){var e=_e(),t=Object(Ie.a)(),n=Object(r.useState)(!1),o=Object(l.a)(n,2),c=o[0],d=o[1],f=Object(r.useState)(0),j=Object(l.a)(f,2),k=j[0],C=j[1],S=Object(r.useReducer)(De,{selected:null,currentWord:Ne()}),z=Object(l.a)(S,2),P=z[0],R=z[1],W=Object(r.useReducer)(Re,Ve),T=Object(l.a)(W,2),N=T[0],D=T[1],x=Object(r.useRef)(),I=N.grid,L=N.history,A=P.selected,U=P.currentWord,M=Object(r.useCallback)((function(e,t){D({type:g,payload:Object(i.a)({},e,t)})}),[]),F=Object(r.useCallback)((function(e){R({type:v,payload:e})}),[]),_=Object(r.useCallback)((function(e){R({type:w,payload:e})}),[]);Object(r.useEffect)((function(){localStorage.setItem("grid",JSON.stringify(I)),localStorage.setItem("history",JSON.stringify(L))}),[I,L]),Object(r.useEffect)((function(){var e=function(e){var t=e.direction,n=e.grid,r=e.selected;if(!r)return null;for(var a=function(e){return m(t)?te(n,r.row,e):te(n,e,r.column)},o=function(e){return m(t)?[r.row,e]:[e,r.column]},c=function(e){return m(t)?e<n.size.cols:e<n.size.rows},i=m(t)?r.column:r.row,l=i;i>0&&!p(a(i));)i--;for(;c(l)&&!p(a(l));)l++;p(a(i))&&i++;for(var u="",s=[],d=n.gridnums[ee(n,o(i)[0],o(i)[1])],f=i;f<l;++f){var h=a(f);""===h&&(h="."),u+=h,s.push(o(f))}return{word:u,coordinates:s,clueNum:d}}({selected:A,direction:U.direction,grid:I});e&&F(e)}),[F,A,I,U.direction]);var B=Object(r.useCallback)((function(e,t){for(var n={},r=0;r<I.gridnums.length;++r)if(I.gridnums[r]==t){n={row:Math.floor(r/I.size.cols),column:Math.floor(r%I.size.cols)};break}R({type:y,payload:{direction:e,selected:n}})}),[I]),G=Object(r.useCallback)((function(e,t,n){M(t,n)}),[M]),J=Object(r.useCallback)((function(e){var t=Object(Q.cloneDeep)(I);U.coordinates.forEach((function(n,r){t.grid[ee(I,n[0],n[1])]=e[r]})),Ke.current.focus(),D({type:O,payload:{grid:t}})}),[I,U]),H=Object(s.a)(e.paper),V=Object(s.a)(e.paper,e.scroll),Y=new oe({selected:A,setSelected:_,setCurrentWord:F,currentWord:U,grid:I,updateGrid:function(e){D(e===h||e===b?{type:e}:{type:O,payload:{grid:e}})}}),K=a.a.createElement(ke,{ref:x,onSavePuzzle:function(){var e=new Blob([JSON.stringify(I)],{type:"text/plain;charset=utf-8"});Object(xe.saveAs)(e,"puzzle.json")},onImportPuzzle:function(e){var t=e.target;if(t.value){var n=new FileReader;n.onload=function(){var e=n.result,t=JSON.parse(e);D({type:O,payload:{grid:t,wordToClue:Je(t)}})},n.readAsText(t.files[0]),t.value=""}},onCreateNewPuzzle:function(e){D({type:O,payload:He(Ge(e))}),_()},onUndo:function(){return D({type:h})},onRedo:function(){return D({type:b})},onRebus:function(e){return Y.handleLetter(e)}});Object(r.useEffect)((function(){window.matchMedia("print").addListener((function(e){return d(e.matches)})),window.onbeforeprint=function(){return d(!0)},window.onafterprint=function(){return d(!1)}}),[]);var $=Object(Le.a)(t.breakpoints.up("lg"));if(c)return a.a.createElement(ye,{grid:I});var Z=[{label:"Word List",children:a.a.createElement(Ae.a,{className:V},a.a.createElement(X,{onClick:J,currentWord:U}))},{label:"Clues",children:a.a.createElement(Ae.a,{className:V},a.a.createElement(we,{currentWord:U,grid:I,onClueFocus:B,onClueChanged:G}))}],ne=null,re=a.a.createElement(pe,{keyPressHandler:Y,forwardRef:Ke,extraActions:x.current},a.a.createElement(Ae.a,{className:H},a.a.createElement(Ye,null,a.a.createElement(E,{grid:I,selected:P.selected,currentWord:P.currentWord,onClick:_}))));$?ne=re:Z=[{label:"Grid",children:re}].concat(Object(u.a)(Z));var ae=a.a.createElement(a.a.Fragment,null,a.a.createElement(Me.a,{value:k,onChange:function(e,t){return C(t)}},Z.map((function(e){return a.a.createElement(Fe.a,{key:e.label,label:e.label})}))),Z.map((function(e,t){return a.a.createElement(Be,{key:e.label,value:k,index:t},e.children)})));return a.a.createElement("div",{className:"App"},a.a.createElement(q,{actions:x.current}),a.a.createElement(Ue.a,{className:e.container},a.a.createElement(he.a,{container:!0,spacing:2},$&&a.a.createElement(he.a,{item:!0,lg:6},ne),a.a.createElement(he.a,{item:!0,lg:6},ae))),K)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.44608c87.chunk.js.map