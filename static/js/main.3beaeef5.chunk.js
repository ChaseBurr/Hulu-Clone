(this["webpackJsonphulu-clone"]=this["webpackJsonphulu-clone"]||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),c=t(15),s=t.n(c),i=(t(22),t(3)),l=t.n(i),o=t(5),b=t(4),d=t(16),g=t.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(t(42),["linear-gradient(\n         180deg,\n         rgb(72, 219, 251, 0),\n         rgb(72, 219, 251, 0.3),\n         rgb(72, 219, 251, 0.6),\n         rgb(72, 219, 251, 0.9),\n         rgb(72, 219, 251)\n      )","linear-gradient(\n         180deg,\n         rgba(37, 37, 37, 0),\n         rgba(37, 37, 37, 0.3),\n         rgba(37, 37, 37, 0.6),\n         rgba(37, 37, 37, 0.9),\n         rgba(37, 37, 37, 1)\n      )","linear-gradient(\n         180deg,\n         rgb(255, 107, 107, 0),\n         rgb(255, 107, 107, 0.3),\n         rgb(255, 107, 107, 0.6),\n         rgb(255, 107, 107, 0.8),\n         rgb(255, 107, 107, 1)\n      )","linear-gradient(\n         180deg,\n         rgb(16, 172, 132, 0),\n         rgb(16, 172, 132, 0.3),\n         rgb(16, 172, 132, 0.6),\n         rgb(16, 172, 132, 0.9),\n         rgb(16, 172, 132, 1)\n      )","linear-gradient(\n         180deg,\n         rgb(95, 39, 205, 0),\n         rgb(95, 39, 205, 0.3),\n         rgb(95, 39, 205, 0.6),\n         rgb(95, 39, 205, 0.9),\n         rgb(95, 39, 205, 1)\n      )","linear-gradient(\n         180deg,\n         rgb(200, 214, 229, 0),\n         rgb(200, 214, 229, 0.3),\n         rgb(200, 214, 229, 0.6),\n         rgb(200, 214, 229, 0.9),\n         rgb(200, 214, 229, 1)\n      )"]),j=["rgb(72, 219, 251)","rgba(37, 37, 37)","rgb(255, 107, 107)","rgb(16, 172, 132)","rgb(95, 39, 205)","rgb(200, 214, 229)"],u=["rgb(10, 189, 227)","rgba(37, 37, 37)","rgb(238, 82, 83)","rgb(16, 172, 132)","rgb(52, 31, 151)","rgb(131, 149, 167)"],v=["linear-gradient(\n      -80deg,\n      rgb(72, 219, 251, 0),\n      rgb(72, 219, 251, 0.3),\n      rgb(72, 219, 251, 0.6),\n      rgb(72, 219, 251, 0.9),\n      rgb(72, 219, 251)\n   )","linear-gradient(\n      -80deg,\n      rgba(37, 37, 37, 0),\n      rgba(37, 37, 37, 0.3),\n      rgba(37, 37, 37, 0.6),\n      rgba(37, 37, 37, 0.9),\n      rgba(37, 37, 37, 1)\n   )","linear-gradient(\n      -80deg,\n      rgb(255, 107, 107, 0),\n      rgb(255, 107, 107, 0.3),\n      rgb(255, 107, 107, 0.6),\n      rgb(255, 107, 107, 0.8),\n      rgb(255, 107, 107, 1)\n   )","linear-gradient(\n      -80deg,\n      rgb(16, 172, 132, 0),\n      rgb(16, 172, 132, 0.3),\n      rgb(16, 172, 132, 0.6),\n      rgb(16, 172, 132, 0.9),\n      rgb(16, 172, 132, 1)\n   )","linear-gradient(\n      -80deg,\n      rgb(95, 39, 205, 0),\n      rgb(95, 39, 205, 0.3),\n      rgb(95, 39, 205, 0.6),\n      rgb(95, 39, 205, 0.9),\n      rgb(95, 39, 205, 1)\n   )","linear-gradient(\n      -80deg,\n      rgb(200, 214, 229, 0),\n      rgb(200, 214, 229, 0.3),\n      rgb(200, 214, 229, 0.6),\n      rgb(200, 214, 229, 0.9),\n      rgb(200, 214, 229, 1)\n   )"];var m=function(e){var n=e.header,t=e.isLarge,c=e.fetchUrl,s=Object(a.useState)([]),i=Object(b.a)(s,2),d=i[0],v=i[1],m=0;return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(c);case 2:n=e.sent,t=n.data,v(t.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h2",{className:"row__header",children:n}),Object(r.jsx)("div",{className:"posters",children:d.map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"".concat(t?"poster__large":"poster"),children:[Object(r.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(t?e.poster_path:e.backdrop_path),alt:e.name}),t&&Object(r.jsxs)(r.Fragment,{children:[m=Math.floor(Math.random()*h.length),Object(r.jsx)("div",{className:"poster__gradient",style:{background:h[m]}}),Object(r.jsxs)("div",{className:"poster__content",style:{background:j[m]},children:[Object(r.jsx)("p",{children:"Start Watching"}),Object(r.jsx)("h2",{children:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_title)}),Object(r.jsxs)("div",{className:"play__button",style:{background:u[m]},children:[Object(r.jsx)("button",{children:Object(r.jsx)("i",{className:"fas fa-play"})}),Object(r.jsx)("h4",{children:"PLAY"})]})]})]})]},d.id)})}))})]})};var O=function(e){var n=e.fetchUrl,t=Object(a.useState)([]),c=Object(b.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(n);case 2:t=e.sent,r=t.data,i(r.results[Math.floor(Math.random()*r.results.length)]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"row row__long",style:{backgroundSize:"cover",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(null===s||void 0===s?void 0:s.backdrop_path,")")},children:[Object(r.jsxs)("div",{className:"row_long_content",children:[Object(r.jsx)("h4",{children:"WATCH MOVIE"}),Object(r.jsx)("h1",{children:(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.original_title)}),Object(r.jsx)("p",{children:null===s||void 0===s?void 0:s.overview}),Object(r.jsxs)("div",{className:"row_long_button",children:[Object(r.jsxs)("button",{className:"btn btn-filled",children:[Object(r.jsx)("i",{className:"fas fa-play"})," PLAY"]}),Object(r.jsx)("button",{className:"btn btn-outline",children:"DETAILS"})]})]}),Object(r.jsx)("div",{className:"row_long_gradient",style:{background:v[Math.floor(Math.random()*v.length)]}})]})};t(43);var f=function(e){var n=e.fetchUrl,t=Object(a.useState)([]),c=Object(b.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(n);case 2:t=e.sent,r=t.data,i(r.results[Math.floor(Math.random()*r.results.length)]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.table(s),Object(r.jsxs)("header",{className:"header",style:{backgroundSize:"cover",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(null===s||void 0===s?void 0:s.backdrop_path,")")},children:[Object(r.jsxs)("div",{className:"header__content",children:[Object(r.jsx)("h1",{children:(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.original_title)}),Object(r.jsx)("p",{children:s.overview}),Object(r.jsxs)("div",{className:"header__buttons",children:[Object(r.jsxs)("button",{className:"btn btn-filled",children:[Object(r.jsx)("i",{className:"fas fa-play"})," PLAY"]}),Object(r.jsx)("button",{className:"btn btn-outline",children:"DETAILS"})]})]}),Object(r.jsx)("div",{className:"header__gradient",style:{background:v[Math.floor(Math.random()*v.length)]}})]})};t(44);var p=function(){var e=Object(a.useState)(!1),n=Object(b.a)(e,2),t=n[0],c=n[1];return window.addEventListener("scroll",(function(){window.pageYOffset>10?c(!0):c(!1)})),Object(r.jsxs)("nav",{className:t&&"navbar__filled",children:[Object(r.jsx)("img",{className:"nav__logo",src:"https://cdn.worldvectorlogo.com/logos/hulu.svg",alt:""}),Object(r.jsxs)("ul",{className:"nav__items",children:[Object(r.jsx)("li",{className:"nav__item",children:"HOME"}),Object(r.jsx)("li",{className:"nav__item",children:"MY STUFF"}),Object(r.jsx)("li",{className:"nav__item",children:"TV SHOWS"}),Object(r.jsx)("li",{className:"nav__item",children:"MOVIES"}),Object(r.jsx)("li",{className:"nav__item",children:"HUBS"})]}),Object(r.jsxs)("div",{className:"user_items",children:[Object(r.jsx)("i",{className:"fas fa-search"}),Object(r.jsx)("i",{className:"fas fa-user"})]})]})},_="c52a1f0a294a2c11d901d69ed73d1290",x={fetchTrending:"/trending/all/week?api_key=".concat(_,"&language=en-US"),fetchHuluOriginals:"/discover/tv?api_key=".concat(_,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(_,"&language=-en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(_,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(_,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(_,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(_,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(_,"&with_genres=99")};var N=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),Object(r.jsx)(f,{fetchUrl:x.fetchHuluOriginals}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{isLarge:!0,header:"HULU ORIGINALS",fetchUrl:x.fetchHuluOriginals}),Object(r.jsx)(m,{header:"MOVIES FOR YOU",fetchUrl:x.fetchComedyMovies}),Object(r.jsx)(m,{isLarge:!0,header:"FX ON HULU",fetchUrl:x.fetchHorrorMovies}),Object(r.jsx)(O,{fetchUrl:x.fetchActionMovies})]})]})};s.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3beaeef5.chunk.js.map