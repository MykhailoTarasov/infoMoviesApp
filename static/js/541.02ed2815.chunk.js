"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{1687:function(t,e,r){r.d(e,{CG:function(){return h},EG:function(){return x},JU:function(){return l},Of:function(){return p},zt:function(){return i}});var n=r(5861),a=r(7757),c=r.n(a),s=r(5294),u="ea0b04790d5245d0350b210d2ab5fbd3";function i(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return f=(0,n.Z)(c().mark((function t(e){var r,n,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,n=new URLSearchParams({api_key:u,query:e,page:r}),t.next=4,s.Z.get("/search/movie?".concat(n));case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},2541:function(t,e,r){r.r(e);var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),u=r(1687),i=r(8866),o=r(2791),p=r(5218),f=r(7689),h=r(184);e.default=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],d=(0,o.useState)(!1),l=(0,a.Z)(d,2),v=l[0],x=l[1],m=(0,o.useState)(!1),w=(0,a.Z)(m,2),y=w[0],b=w[1],k=(0,f.UO)().movieId;return(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),b(!1),t.next=5,(0,u.JU)(k);case 5:e=t.sent,p.ZP.success("Movies found successfully!"),r=e.cast.slice(0,16),c(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),b(!0);case 14:return t.prev=14,x(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))).apply(this,arguments)}k&&function(){t.apply(this,arguments)}()}),[k]),(0,h.jsxs)("div",{children:[(0,h.jsx)("ul",{children:r.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name,width:150}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))}),y&&(0,h.jsx)("span",{children:"Error! Please, reload this page!"}),v&&(0,h.jsx)(i.Z,{}),(0,h.jsx)(p.x7,{position:"top-right"})]})}},8866:function(t,e,r){var n=r(2598),a=r(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#b6ddd8","#b6ddd8"]})})}}}]);
//# sourceMappingURL=541.02ed2815.chunk.js.map