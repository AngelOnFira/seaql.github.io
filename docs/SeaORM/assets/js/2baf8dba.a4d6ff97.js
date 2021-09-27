(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1976],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2632:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={slug:"2021-07-01-welcome",title:"Welcome to SeaORM",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},c=void 0,u={permalink:"/SeaORM/blog/2021-07-01-welcome",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/blog/2021-07-01-welcome.md",source:"@site/blog/2021-07-01-welcome.md",title:"Welcome to SeaORM",description:"One year ago, when we were writing data processing algorithms in Rust, we needed an async library to interface with a database. Back then, there weren't many choices. So we have to write our own.",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"news",permalink:"/SeaORM/blog/tags/news"}],readingTime:.925,truncated:!1,prevItem:{title:"Hello World",permalink:"/SeaORM/blog/2021-08-07-hello-world"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One year ago, when we were writing data processing algorithms in Rust, we needed an async library to interface with a database. Back then, there weren't many choices. So we have to write our own."),(0,o.kt)("p",null,"December last year, we released ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query"},"SeaQuery"),", and received welcoming responses from the community. We decided to push the project further and develop a full blown async ORM."),(0,o.kt)("p",null,"It has been a bumpy ride, as designing an async ORM requires working within and sometimes around Rust's unique type system. After several iterations of experimentation, I think we've attained a balance between static & dynamic and compile-time & run-time that it offers benefits of the Rust language while still be familiar and easy-to-work-with for those who come from other languages."),(0,o.kt)("p",null,"SeaORM is tentative to be released in Sep 2021 and stabilize in May 2022. We hope that SeaORM will become a go-to choice for working with databases in Rust and that the Rust language will be adopted by more organizations in building applications."),(0,o.kt)("p",null,"If you are intrigued like I do, please stay in touch and join the community."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaql.github.io/discussions/3"},"Share your thoughts here"),"."))}m.isMDXComponent=!0}}]);