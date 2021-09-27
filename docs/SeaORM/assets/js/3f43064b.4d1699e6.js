(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2257],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4622:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={slug:"2021-08-30-release-model",title:"Release Model",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},u=void 0,p={permalink:"/SeaORM/blog/2021-08-30-release-model",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/blog/2021-08-30-release-model.md",source:"@site/blog/2021-08-30-release-model.md",title:"Release Model",description:"Today we will outline our release plan in the near future.",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"news",permalink:"/SeaORM/blog/tags/news"}],readingTime:.85,truncated:!1,prevItem:{title:"Introducing SeaORM",permalink:"/SeaORM/blog/2021-09-20-introducing-sea-orm"},nextItem:{title:"Hello World",permalink:"/SeaORM/blog/2021-08-07-hello-world"}},s=[],c={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today we will outline our release plan in the near future."),(0,a.kt)("p",null,"One of Rust's slogan is ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/appendix-07-nightly-rust.html#stability-without-stagnation"},"Stability Without Stagnation"),", and SeaQL's take on it, is 'progression without stagnation'."),(0,a.kt)("p",null,"Before reaching ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),", we will be releasing every week, incorporating the latest changes and merged pull requests. There will be at most one incompatible release per month, so you will be expecting ",(0,a.kt)("inlineCode",{parentName:"p"},"0.2")," in Sep 2021 and ",(0,a.kt)("inlineCode",{parentName:"p"},"0.9")," in Apr 2022. We will decide by then whether the next release is an incremental ",(0,a.kt)("inlineCode",{parentName:"p"},"0.10")," or a stable ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,a.kt)("p",null,"After that, a major release will be rolled out every year. So you will probably be expecting a ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0")," in 2023."),(0,a.kt)("p",null,"All of these is only made possible with a solid infrastructure. While we have a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/actions"},"test suite"),", its coverage will likely never be enough. We urge you to submit test cases to SeaORM if a particular feature is of importance to you."),(0,a.kt)("p",null,"We hope that a continuous delivery pipeline will provide momentum to the community and propell us forward in the near future."))}m.isMDXComponent=!0}}]);