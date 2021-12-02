(()=>{"use strict";var e={n:n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},d:(n,r)=>{for(var a in r)e.o(r,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:r[a]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=preact;var r=e.n(n),a=function(e,n,r){if(r||2===arguments.length)for(var a,t=0,i=n.length;t<i;t++)!a&&t in n||(a||(a=Array.prototype.slice.call(n,0,t)),a[t]=n[t]);return e.concat(a||Array.prototype.slice.call(n))};function t(e,n){return e.endsWith(n)?e.substr(0,e.length-n.length):e}function i(e,n){return e.startsWith(n)?e.substr(n.length):e}function o(e,n){var r=e.startsWith(n)?n.length:0,a=e.endsWith(n)?e.length-n.length:e.length;return a-r===e.length?e:e.substring(r,a)}function l(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(0===e.length)return"";if(1===e.length)return e[0];for(var r=t(e[0],"/"),a=1;a<e.length-1;a++)r+="/"+o(e[a],"/");return r+"/"+i(e[e.length-1],"/")}var c="/rainfall-rescue-site";function s(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("path must end with a filename");var r=e[e.length-1];if(-1===r.indexOf("."))throw new Error("path must end with a filename");return"index.html"===r?e[e.length-1]="":r.endsWith(".html")&&(e[e.length-1]=t(r,".html")),l.apply(void 0,a([c],e,!1))}function d(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=[];n.push(!1);for(var t=0;t<e.length;t++){var i=e[t].trim();i&&a.push(i);var o=n[t];!1!==o&&a.push(o.trim())}return a.join(" ")}var v=0;function h(e,r,a,t,i){var o,l,c={};for(l in r)"ref"==l?o=r[l]:c[l]=r[l];var s={type:e,props:c,key:a,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--v,__source:t,__self:i};if("function"==typeof e&&(o=e.defaultProps))for(l in o)void 0===c[l]&&(c[l]=o[l]);return n.options.vnode&&n.options.vnode(s),s}var u=function(){return u=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},u.apply(this,arguments)};function p(e){var n,r,a=e.className,t=e.href,i=e.children;return t===window.location.pathname?h("a",u({className:d(g||(n=[""," active"],r=[""," active"],Object.defineProperty?Object.defineProperty(n,"raw",{value:r}):n.raw=r,g=n),a||!1),"aria-current":"page",href:t},{children:i}),void 0):h("a",u({className:a,href:t},{children:i}),void 0)}function f(e){var n=e.currentVersion,r=e.versions;return h("form",u({class:"d-flex"},{children:h("div",u({class:"dropdown"},{children:[h("button",u({id:"version-dropdown",className:"btn btn-outline-secondary dropdown-toggle",type:"button","aria-expanded":"false","data-bs-toggle":"dropdown"},{children:n}),void 0),h("ul",u({class:"dropdown-menu dropdown-menu-md-end","aria-labelledby":"version-dropdown"},{children:r.map((function(e){return h("li",e===n?{children:h("a",u({className:"dropdown-item disabled",href:""},{children:n}),void 0)}:{children:h("a",u({className:"dropdown-item",href:s(e,"locations","index.html")},{children:e}),void 0)},void 0)}))}),void 0)]}),void 0)}),void 0)}const m=function(e){var n=e.version,r=e.versions,a=r[r.length-1];return h("nav",u({className:"navbar navbar-expand-md navbar-light bg-light"},{children:h("div",u({className:"container-fluid"},{children:[h("a",u({className:"navbar-brand",href:s("index.html")},{children:[h("img",{src:s("static","icons","rainfall-rescue-icon.svg"),alt:"",width:"30",height:"24",class:"d-inline-block align-text-top"},void 0),"Rainfall Rescue"]}),void 0),h("button",u({className:"navbar-toggler",type:"button","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation","data-bs-toggle":"collapse","data-bs-target":"#navbar-collapse"},{children:h("span",{className:"navbar-toggler-icon"},void 0)}),void 0),h("div",u({id:"navbar-collapse",className:"navbar-collapse collapse"},{children:[h("ul",u({className:"navbar-nav me-auto mb-2 mb-md-0"},{children:h("li",u({className:"nav-item"},{children:h(p,u({className:"nav-link",href:s(n||a,"locations","index.html")},{children:"Locations"}),void 0)}),void 0)}),void 0),n&&h(f,{currentVersion:n,versions:r},void 0)]}),void 0)]}),void 0)}),void 0)};var g,b=function(){return b=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},b.apply(this,arguments)};const y=function(e){var n=e.items;return h("nav",b({"aria-label":"breadcrumb"},{children:h("ol",b({className:"breadcrumb"},{children:n.map((function(e,r){var a=e[0],t=e[1];return r==n.length-1?h("li",b({className:"breadcrumb-item active","aria-current":"page"},{children:a}),r):h("li",b({className:"breadcrumb-item"},{children:h("a",b({href:t},{children:a}),void 0)}),r)}))}),void 0)}),void 0)};var w=function(){return w=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},w.apply(this,arguments)};const _=function(e){var n=e.pageData,a=e.breadcrumbs,t=e.children,i=n.version,o=n.versions;return h(r().Fragment,{children:[h("header",{children:h(m,{versions:o,version:i},void 0)},void 0),h("main",w({class:"flex-shrink-0 mt-3 pb-5"},{children:h("div",w({className:"container"},{children:[h(y,{items:a},void 0),t]}),void 0)}),void 0)]},void 0)};var N=function(){return N=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},N.apply(this,arguments)};!function(e){var r=function(){var e=document.getElementById("page-data");if(e&&null!==e.textContent)return JSON.parse(e.textContent);throw new Error("Cannot find page data")}(),a=document.getElementById("app");if(null===a)throw new Error("Cannot find app element");(0,n.render)((0,n.h)((function(e){var n=e.pageData;return h(_,N({pageData:n,breadcrumbs:[["Home",""]]},{children:[h("h1",N({className:"display-3"},{children:"Rainfall Rescue"}),void 0),h("p",{children:["A prototype website for ",h("a",N({href:"https://github.com/ed-hawkins/rainfall-rescue"},{children:"rainfall-rescue"}),void 0),"!"]},void 0)]}),void 0)}),{pageData:r}),a)}()})();