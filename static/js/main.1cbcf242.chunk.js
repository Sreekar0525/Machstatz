(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),i=a.n(s),c=a(3),r=a.n(c),o=(a(13),a(14),a(4)),l=a(5),d=a(7),u=a(6);a(15),a(16);var m=function(e){var t,a=e.cardtype,s=e.item,i=e.addasFav,c=e.removeasFav;return t="grid"===a?"grid-card":"list-card",Object(n.jsxs)("div",{className:t,children:[s.name,s.isFavourite?Object(n.jsx)("div",{className:"floating-remove-icon",onClick:function(){return c(s.id)},children:"-"}):Object(n.jsx)("div",{className:"floating-add-icon",onClick:function(){return i(s.id)},children:"+"})]})},v=[{id:"mercury",isFavourite:!1,name:"Mercury"},{id:"venus",isFavourite:!1,name:"Venus"},{id:"earth",isFavourite:!1,name:"Earth"},{id:"mars",isFavourite:!1,name:"Mars"},{id:"ceres",isFavourite:!1,name:"Ceres"},{id:"jupiter",isFavourite:!1,name:"Jupiter"},{id:"saturn",isFavourite:!1,name:"Saturn"},{id:"pluto",isFavourite:!1,name:"Pluto"},{id:"haumea",isFavourite:!1,name:"Haumea"},{id:"makemake",isFavourite:!1,name:"Makemake"},{id:"eris",isFavourite:!1,name:"Eris"}],j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).markAllasFav=function(){var e=n.state.planetData;e.map((function(e){e.isFavourite=!0})),n.setState({planetData:e})},n.delAllfromFav=function(){var e=n.state.planetData;e.map((function(e){e.isFavourite=!1})),n.setState({planetData:e})},n.markAsFav=function(e){var t=n.state.planetData;t.map((function(t){t.id===e&&(t.isFavourite=!0)})),n.setState({planetData:t})},n.delFromFav=function(e){var t=n.state.planetData;t.map((function(t){t.id===e&&(t.isFavourite=!1)})),n.setState({planetData:t})},n.state={selectedTab:"planets",cardtype:"grid",sortby:"",planetData:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({planetData:v})}},{key:"render",value:function(){var e,t=this,a=this.state,s=a.planetData,i=a.selectedTab,c=a.cardtype,r=a.sortby;return e="favourites"===i?s.filter((function(e){return e.isFavourite})):"asec"===r?s.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):"desc"===r?s.sort((function(e,t){return e.name<t.name?1:t.name<e.name?-1:0})):s,Object(n.jsxs)("div",{className:"home-component",children:[Object(n.jsxs)("div",{className:"home-tab-row",children:[Object(n.jsx)("div",{className:"home-tab-option",style:"planets"===i?{"border-bottom":"2px solid white"}:null,onClick:function(){"planets"!==i&&t.setState({selectedTab:"planets"})},children:"Planets"}),Object(n.jsx)("div",{className:"home-tab-option",style:"favourites"===i?{"border-bottom":"2px solid white"}:null,onClick:function(){"favourites"!==i&&t.setState({selectedTab:"favourites"})},children:"Favourites"})]}),"planets"===i?Object(n.jsxs)("div",{className:"help-row",children:[Object(n.jsxs)("div",{className:"left-part",children:[Object(n.jsxs)("div",{className:"mark-buttons",onClick:function(){return t.markAllasFav()},children:[" ","+ Mark all"," "]}),Object(n.jsxs)("div",{className:"mark-buttons",onClick:function(){return t.delAllfromFav()},children:[" ","- Remove all"," "]})]}),Object(n.jsxs)("div",{className:"right-part",children:[Object(n.jsxs)("div",{className:"sort-box",children:[Object(n.jsx)("div",{children:"Sort :"}),Object(n.jsxs)("div",{onClick:function(){"asec"!==r&&t.setState({sortby:"asec"})},className:"pointer-class",children:[" ","asec"," "]}),Object(n.jsxs)("div",{onClick:function(){"desc"!==r&&t.setState({sortby:"desc"})},className:"pointer-class",children:[" ","desc"," "]})]}),Object(n.jsxs)("div",{className:"icon-type-selector",children:[Object(n.jsx)("div",{onClick:function(){"grid"!==c&&t.setState({cardtype:"grid"})},className:"pointer-class",children:"G"}),Object(n.jsx)("div",{className:"horizontal-bar",children:" "}),Object(n.jsx)("div",{onClick:function(){"list"!==c&&t.setState({cardtype:"list"})},className:"pointer-class",children:"L"})]})]})]}):null,Object(n.jsx)("div",{className:"content-area",children:"planets"===i?e.map((function(e){return Object(n.jsx)(m,{item:e,cardtype:c,addasFav:t.markAsFav,removeasFav:t.delFromFav})})):e.length?e.map((function(e){return Object(n.jsx)("div",{className:"favourite-card",children:e.name})})):Object(n.jsx)("h4",{children:" Please add favourites "})})]})}}]),a}(s.Component);a(17);var b=function(){return Object(n.jsx)("div",{className:"Header",children:Object(n.jsx)("div",{className:"header-text",children:"Our Universe "})})};var p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{}),Object(n.jsx)(j,{})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.1cbcf242.chunk.js.map