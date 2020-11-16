!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";var i=t(2),r=t.n(i),o=t(3),s=t.n(o)()(r.a);s.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*{box-sizing:border-box}html{height:100%}body{height:100%;font-family:\'Roboto\', Arial, sans-serif}.game{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.field{width:402px;height:402px;position:relative;background:#ecb3db;border:1px solid #444;border-radius:3px}.field_info{display:none;width:70%;text-align:center}.cell{width:100px;height:100px;position:absolute;display:flex;justify-content:center;align-items:center;border:1px solid #444;border-radius:5px;font-size:2rem;background:#e4e4e4}.cell:hover{cursor:pointer;background:#e0d4d4}.statusbar{width:402px;display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-size:18px}.menuBtn{border:none;font-weight:500;border-radius:5px;box-shadow:0 1px 4px rgba(0,0,0,0.5);padding:5px;width:80px;background-color:#ce9fee8e;color:#003333;outline:none;cursor:pointer;transition:.3s}.menuBtn:hover{background-color:rgba(162,72,223,0.556863)}.menuBtn--active{background-color:rgba(162,72,223,0.556863)}.menu{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.8);display:none;z-index:1000}.menu__container{width:100%;height:100%;padding:0;margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#dc91ec}.menu__item{list-style:none;font-size:24px;font-weight:700;margin-bottom:22px;transition:.3s;text-shadow:2px 2px 5px #000}.menu__item:last-child{margin-bottom:0}.menu__item:hover{opacity:.7;cursor:pointer}.menu__title{margin:0;margin-bottom:30px;font-weight:700;font-size:26px}.menu--visible{display:block}.hidden{display:none}.fieldsize_select{padding:5px 10px;margin-bottom:50px;font-size:20px;letter-spacing:0.1em;background:#dc91ec}.backBtn{position:absolute;bottom:30px;font-size:22px;border:none;font-weight:500;border-radius:5px;padding:2px 8px;background-color:#dc91ec}.backBtn:hover{cursor:pointer;opacity:.8}\n',"",{version:3,sources:["webpack://./../node_modules/normalize.css/normalize.css","webpack://./css/scss.scss"],names:[],mappings:"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",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"@import \"~normalize.css\";\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  font-family: 'Roboto', Arial, sans-serif;\r\n}\r\n\r\n.game {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.field {\r\n  width: 402px;\r\n  height: 402px;\r\n  position: relative;\r\n\r\n  background: #ecb3db;\r\n  border: 1px solid #444;\r\n  border-radius: 3px;\r\n\r\n  &_info {\r\n    display: none;\r\n    width: 70%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.cell {\r\n  width: 100px;\r\n  height: 100px;\r\n  position: absolute;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  border: 1px solid #444;\r\n  border-radius: 5px;\r\n  font-size: 2rem;\r\n  background: rgb(228, 228, 228);\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    background: rgb(224, 212, 212);\r\n  }\r\n}\r\n\r\n.statusbar {\r\n  width: 402px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.menuBtn {\r\n  border: none;\r\n  font-weight: 500;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);\r\n  padding: 5px;\r\n  width: 80px;\r\n  background-color: #ce9fee8e;\r\n  color: #003333;\r\n  outline: none;\r\n  cursor: pointer;\r\n  transition: .3s;\r\n\r\n  &:hover {\r\n    background-color: darken(#ce9fee8e, 20);\r\n  }\r\n\r\n  &--active {\r\n    background-color: darken(#ce9fee8e, 20);\r\n  }\r\n}\r\n\r\n.menu {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, .8);\r\n  display: none;\r\n  z-index: 1000;\r\n\r\n  &__container {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #dc91ec;\r\n  }\r\n\r\n  &__item {\r\n    list-style: none;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    margin-bottom: 22px;\r\n    transition: .3s;\r\n    text-shadow: 2px 2px 5px #000;\r\n\r\n    &:last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    &:hover {\r\n      opacity: .7;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    margin: 0;\r\n    margin-bottom: 30px;\r\n    font-weight: 700;\r\n    font-size: 26px;\r\n  }\r\n\r\n  &--visible {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.fieldsize_select {\r\n  padding: 5px 10px;\r\n  margin-bottom: 50px;\r\n  font-size: 20px;\r\n  letter-spacing: 0.1em;\r\n  background: #dc91ec;\r\n}\r\n\r\n.backBtn {\r\n  position: absolute;\r\n  bottom: 30px;\r\n  font-size: 22px;\r\n  border: none;\r\n  font-weight: 500;\r\n  border-radius: 5px;\r\n  padding: 2px 8px;\r\n  background-color: #dc91ec;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    opacity: .8;\r\n  }\r\n}"],sourceRoot:""}]),n.a=s},function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function a(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],l=n.base?o[0]+n.base:o[0],c=t[l]||0,d="".concat(l," ").concat(c);t[l]=c+1;var A=a(d),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==A?(s[A].references++,s[A].updater(m)):s.push({identifier:d,updater:p(m,n),references:1}),i.push(d)}return i}function c(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,A=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function m(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=A(n,r);else{var o=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(o,s[n]):e.appendChild(o)}}function u(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,C=0;function p(e,n){var t,i,r;if(n.singleton){var o=C++;t=h||(h=c(n)),i=m.bind(null,t,o,!1),r=m.bind(null,t,o,!0)}else t=c(n),i=u.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=a(t[i]);s[r].references--}for(var o=l(e,n),c=0;c<t.length;c++){var d=a(t[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}t=o}}}},function(e,n,t){"use strict";function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(t.push(s.value),!n||t.length!==n);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}e.exports=function(e){var n=i(e,4),t=n[1],r=n[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(s," */"),l=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(l).concat([a]).join("\n")}return[t].join("\n")}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),o=t(0),s={insert:"head",singleton:!1};r()(o.a,s),o.a.locals;class a{constructor(e,n,t,i,r){this.index=e,this.value=n,this.left=t,this.top=i,this.cellSize=r,this.element=this.getElement()}getElement(){const e=document.createElement("div");return e.classList.add("cell"),e.textContent=this.value,e.style.width=this.cellSize+"px",e.style.height=this.cellSize+"px",e.style.left=this.left*this.cellSize+"px",e.style.top=this.top*this.cellSize+"px",e.onmousedown=n=>{let t=!1;const i=n.clientX,r=n.clientY,o=e.style.left,s=e.style.top,a=n.clientX-e.getBoundingClientRect().left,l=n.clientY-e.getBoundingClientRect().top;function c(n,t){e.style.left=n-a+"px",e.style.top=t-l+"px"}function d(e){c(e.pageX,e.pageY),t=!0}e.style.transitionProperty="none",e.style.zIndex=100,document.body.append(e),c(n.pageX,n.pageY),document.addEventListener("mousemove",d),e.onmouseup=n=>{const a=n.clientX,l=n.clientY,c=Math.abs(i-a),A=Math.abs(r-l);c<5&&A<5&&(t=!1),e.style.display="none";const m=document.elementFromPoint(n.clientX,n.clientY);e.style.display="flex",m&&("field"===m.className?(e.style.left=o,e.style.top=s,e.style.zIndex="auto",document.querySelector(".field").append(e),this._onclick(t)):(e.style.left=o,e.style.top=s,e.style.zIndex="auto",document.querySelector(".field").append(e)),document.removeEventListener("mousemove",d),e.onmouseup=null)}},e.ondragstart=function(){return!1},e}_onclick(e){document.body.append(this.element),document.querySelector(".field").append(this.element);const n=new CustomEvent("clickCell",{bubbles:!0,detail:{cell:this,mode:e}});this.element.dispatchEvent(n)}}class l{constructor(e,n,t,i){this.fieldSize=e,this.cellSize=i,this._lastCellIndex=this.fieldSize*this.fieldSize-1,this.emptyCell=new a(this._lastCellIndex,this.fieldSize*this.fieldSize,this.fieldSize-1,this.fieldSize-1),this.numbers=n,this.element=this.getElement(),this.cells=this.getCells(),this.element.appendChild(t)}getElement(){const e=document.createElement("div");return e.classList.add("field"),e.addEventListener("clickCell",e=>{this.moveCells(e.detail.cell,e.detail.mode)}),e}getCells(){const e=[];for(let n=0;n<this._lastCellIndex;n++){const t=n%this.fieldSize,i=(n-t)/this.fieldSize,r=new a(n,this.numbers[n],t,i,this.cellSize);e.push(r),this.element.appendChild(r.element)}return e.push(this.emptyCell),e}moveCells(e,n){if(Math.abs(this.emptyCell.left-e.left)+Math.abs(this.emptyCell.top-e.top)>1)return;n||(e.element.style.transition=".4s",window.getComputedStyle(e.element).transition),e.element.style.left=this.emptyCell.left*e.cellSize+"px",e.element.style.top=this.emptyCell.top*e.cellSize+"px";const{left:t,top:i}=this.emptyCell;this.emptyCell.left=e.left,this.emptyCell.top=e.top,e.left=t,e.top=i;const r=new Event("moveDone",{bubbles:!0});this.element.dispatchEvent(r)}}class c{constructor(){this.min=Number("00"),this.sec=Number("00"),this.timerSec=0,this.timerText="",this.timer=null,this.element=this.getElement(),this.startTime()}getElement(){const e=document.createElement("div");e.classList.add("time");const n=document.createElement("span");n.classList.add("time_title"),n.textContent="Time: ";const t=document.createElement("span");return t.classList.add("time_timer"),t.textContent=`${this.min} : ${this.sec}`,this.timerText=t,e.appendChild(n),e.appendChild(t),e}startTime(){this.timer=setInterval(()=>this.tick(),1e3)}tick(){this.timerSec++,this.updateTimer()}updateTimer(){this.timerSec>=60?(this.min=Math.floor(this.timerSec/60),this.sec=this.timerSec-60*this.min):this.sec=this.timerSec,this.timerText.textContent=`${this.addZero(this.min)}:${this.addZero(this.sec)}`}addZero(e){return(parseInt(e,10)<10?"0":"")+e}clearTimer(){clearTimeout(this.timer)}getWinTime(){return this.timerText.textContent}}class d{constructor(){this.moves=0,this.movesCounter=null,this.element=this.getElement()}getElement(){const e=document.createElement("div");e.classList.add("moves");const n=document.createElement("span");n.classList.add("moves_title"),n.textContent="Moves: ";const t=document.createElement("span");return t.classList.add("moves__counter"),t.textContent=""+this.moves,this.movesCounter=t,e.appendChild(n),e.appendChild(t),e}updateMoves(){this.moves++,this.movesCounter.textContent=""+this.moves}getWinMoves(){return this.movesCounter.textContent}}class A{constructor(){this.element=this.getElement()}getElement(){const e=document.createElement("button");return e.classList.add("menuBtn"),e.textContent="Menu",e.addEventListener("click",()=>{e.classList.toggle("menuBtn--active");const n=new Event("menuBtnClick",{bubbles:!0});this.element.dispatchEvent(n)}),e}}class m{constructor(){this.element=this.getElement(),this.time=new c,this.moves=new d,this.menuBtn=new A,this.element.appendChild(this.time.element),this.element.appendChild(this.moves.element),this.element.appendChild(this.menuBtn.element)}getElement(){const e=document.createElement("div");return e.classList.add("statusbar"),e}destroy(){this.time.clearTimer()}makeMove(){this.moves.updateMoves()}getWinTime(){return this.time.getWinTime()}getWinMoves(){return this.moves.getWinMoves()}}class u{getContainer(){const e=document.createElement("div");e.classList.add("menu__container","menu__container--fieldsize","hidden");const n=document.createElement("h2");n.classList.add("menu__title"),n.textContent="Field size",e.append(n);const t=document.createElement("div");t.classList.add("field_info"),t.textContent="Changes saved! \n Start new game to get new field size.";const i=document.createElement("select");i.classList.add("fieldsize_select"),i.innerHTML='<option value="0" selected disabled>--</option>\n    <option value="3">3x3</option>\n    <option value="4">4x4</option>\n    <option value="5">5x5</option>\n    <option value="6">6x6</option>\n    <option value="7">7x7</option>\n    <option value="8">8x8</option>',i.addEventListener("change",n=>{const i=n.target.value;t.style.display="block";const r=new CustomEvent("fieldSizeChanged",{bubbles:!0,detail:{target:i}});e.dispatchEvent(r)}),e.append(i),e.append(t);const r=document.createElement("button");return r.classList.add("backBtn"),r.textContent="Go back",r.addEventListener("click",()=>{const n=new Event("fieldSizeClose",{bubbles:!0});e.dispatchEvent(n)}),e.append(r),e}}class h{constructor(){this.menuFieldsizeContainer=(new u).getContainer(),this.menuMainContainer=this.getContainer(),this.element=this.getElement()}getElement(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(this.menuMainContainer),e.appendChild(this.menuFieldsizeContainer),e.addEventListener("fieldSizeClose",()=>{this.menuFieldsizeContainer.classList.add("hidden"),this.menuMainContainer.classList.remove("hidden")}),e}getContainer(){const e=document.createElement("ul");e.classList.add("menu__container");return[{text:"New Game",handler:()=>{const e=new CustomEvent("newGame",{bubbles:!0,detail:this});this.element.dispatchEvent(e)}},{text:"Field size",handler:()=>{this.menuMainContainer.classList.add("hidden"),this.menuFieldsizeContainer.classList.remove("hidden")}}].forEach(n=>{const t=document.createElement("li");t.classList.add("menu__item"),t.textContent=""+n.text,t.addEventListener("click",n.handler),e.appendChild(t)}),e}}class C{_generateRandomNumbers(e){return e.sort(()=>Math.random()-.5)}_checkSequence(e){let n=0;for(let t=0;t<e.length;t++){let i=0;for(let n=t+1;n<e.length;n++)e[n]<e[t]&&i++;n+=i}return n%2==0}getNumbers(e){const n=[...Array(e*e-1).keys()].map(e=>e+1);let t=null,i=!1;for(;!i;)t=this._generateRandomNumbers(n),i=this._checkSequence(t);return t}}var p=t.p+"7c7fbb0b49faf4d1e3e263a0242f3ee3.wav";class f{constructor(e,n){this.sound=p,this.soundDom=null,this.fieldSize=e,this._gameNumbersGenerator=new C;const t=this._gameNumbersGenerator.getNumbers(e);this.menu=new h,this.field=new l(e,t,this.menu.element,n),this.statusbar=new m,this.element=this.getElement(),this.element.appendChild(this.statusbar.element),this.element.appendChild(this.field.element)}getElement(){const e=document.createElement("div");e.classList.add("game");const n=document.createElement("audio");return n.classList.add("sound"),n.setAttribute("src",""+p),this.soundDom=n,e.append(n),e.addEventListener("moveDone",()=>{this.statusbar.makeMove(),this.soundDom.play(),this.isGameFinished()}),e.addEventListener("menuBtnClick",()=>{this.menu.element.classList.toggle("menu--visible")}),e}isGameFinished(){let e="Ура! Вы решили головоломку за ##:## и N ходов";if(this.field.cells.every(e=>e.value===e.top*this.fieldSize+e.left+1)){const n=this.statusbar.getWinTime(),t=this.statusbar.getWinMoves();e=`Great! You've sold the puzzle in ${n} and ${t} moves!`,setTimeout(()=>alert(e),300)}}destroy(){this.statusbar.destroy()}}var b=t.p+"e410159fd313dd709536fe2d90fc4731.ico";(new class{constructor(){this.fieldSize=4,this.cellSize=100}init(){const e=document.createElement("link");e.rel="icon",e.href=b,document.querySelector("head").append(e),this.game=new f(this.fieldSize,this.cellSize),this.element=this.game.element,document.body.append(this.element),this.handler=this.handleNewGame.bind(this),this.element.addEventListener("newGame",this.handler),this.element.addEventListener("fieldSizeChanged",e=>{switch(this.fieldSize=e.detail.target,this.fieldSize){case"3":this.cellSize=133.33;break;case"4":this.cellSize=100;break;case"5":this.cellSize=80;break;case"6":this.cellSize=66.66;break;case"7":this.cellSize=57.14;break;case"8":this.cellSize=50}})}handleNewGame(){this.element.removeEventListener("newGame",this.handler),this.element.remove(),this.game.destroy(),this.game=null,this.init(this.fieldSize)}}).init()}]);
//# sourceMappingURL=64c7cb01c27cfa0900e9.bundle.js.map