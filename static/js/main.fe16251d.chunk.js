(this["webpackJsonpresin-bleker-final"]=this["webpackJsonpresin-bleker-final"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),a=c(34),s=c.n(a),i=c(14),o=c(9),l=c(12),j=c(3),b=function(e){var t=e.stock,c=e.initial,r=void 0===c?0:c,a=e.onAdd,s=Object(n.useState)(0),i=Object(l.a)(s,2),o=i[0],b=i[1];Object(n.useEffect)((function(){b(r)}),[]);return Object(j.jsxs)("section",{className:"btn-group-vertical item-count",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){o<t&&b(o+1)},children:"+"}),Object(j.jsx)("span",{className:"fs-3",children:o}),Object(j.jsx)("button",{onClick:function(){o>r&&b(o-1)},children:"-"})]}),t>0?Object(j.jsx)("button",{className:" fs-4 btn-primary",onClick:function(){return a(o)},children:"Agregar al carrito"}):Object(j.jsx)("button",{disabled:!0,className:" fs-4 btn-outline-primary",children:"Agregar al carrito"})]})},u=c(20),d=Object(n.createContext)(),O=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1],i=function(e){var t=a.map((function(e){return e.idItem})).indexOf(e);return a[t].costItem*a[t].countItem},o=function(){return a.map((function(e){return i(e.idItem)})).reduce((function(e,t){return e+t}))},b=function(){return.21*o()},O=function(){return.1*o()};return Object(j.jsx)(d.Provider,{value:{cartList:a,addToCart:function(e,t){var c=a.find((function(t){return t.idItem===e.id}));void 0===c?s([].concat(Object(u.a)(a),[{idItem:e.id,imgItem:e.photo,nameItem:e.name,costItem:e.price,countItem:t}])):(c.countItem+=t,s(Object(u.a)(a)))},removeList:function(){return s([])},deleteItem:function(e){var t=a.filter((function(t){return t.idItem!==e}));s(t)},calcTotalPerItem:i,calcSubTotal:o,calcTaxes:b,calcTotal:function(){return o()+b()-O()},calcDiscount:O,calcItemsCount:function(){return a.map((function(e){return e.countItem})).reduce((function(e,t){return e+t}),0)}},children:t})},m=function(e){var t=e.item,c=Object(n.useState)(0),r=Object(l.a)(c,2),a=r[0],s=r[1],o=Object(n.useContext)(d);return Object(j.jsx)(j.Fragment,{children:t&&t.photo?Object(j.jsxs)("div",{className:"container-fluid item-detail",children:[Object(j.jsx)("h1",{className:"fs-1",children:t.name}),Object(j.jsx)("img",{src:t.photo,alt:"imagen"}),Object(j.jsxs)("section",{className:"container-fluid",children:[Object(j.jsx)("p",{className:"container-fluid",children:t.description}),Object(j.jsxs)("h2",{className:"fs-2",children:["$ ",t.price]}),Object(j.jsxs)("p",{className:"fs-4",children:["Stock ",t.stock]}),0===a?Object(j.jsx)(b,{stock:t.stock,initial:a,onAdd:function(e){alert("Llevas "+e+" "+t.name+"/s"),s(e),o.addToCart(t,e)}}):Object(j.jsx)(i.b,{to:"/cart",children:Object(j.jsx)("button",{className:"btn-lg fs-4 btn-warning",children:"Ir al carrito"})})]})]}):Object(j.jsx)("div",{className:"spinner-border ",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden"})})})},h=c(0),x=c.n(h),f=c(32),p=c(4),v=c(18),g=c(19),k=c(35),I=Object(k.a)({apiKey:"AIzaSyC9gc5GDEZk1hmF4IwI9wk8j8u7_e48NGU",authDomain:"resin-bleker-final.firebaseapp.com",projectId:"resin-bleker-final",storageBucket:"resin-bleker-final.appspot.com",messagingSenderId:"999499653535",appId:"1:999499653535:web:0cf170de4039b115265daa"}),N=Object(g.d)(I),y=function(){var e=Object(p.a)(x.a.mark((function e(t,c){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t&&1===c?Object(v.h)(Object(v.a)(N,"data"),Object(v.l)("keyWords","array-contains",t)):t&&0===c?Object(v.h)(Object(v.a)(N,"data"),Object(v.l)("categoryId","==",t)):Object(v.h)(Object(v.a)(N,"data"),Object(v.g)("type")),e.next=3,Object(v.d)(n);case 3:return r=e.sent,a=r.docs.map((function(e){return Object(f.a)({id:e.id},e.data())})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),S=y,C=function(){var e=Object(p.a)(x.a.mark((function e(t){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(g.b)(N,"data",t),e.next=3,Object(g.c)(c);case 3:if(!(n=e.sent).exists()){e.next=8;break}return e.abrupt("return",Object(f.a)({id:t},n.data()));case 8:console.log("404 No Found");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(o.g)().idItem;return Object(n.useEffect)((function(){C(a).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(m,{item:c})},T=function(e){var t=e.id,c=e.name,n=e.price,r=e.photo,a=e.stock;return Object(j.jsxs)("article",{children:[Object(j.jsx)(i.b,{to:"/item/".concat(t),children:Object(j.jsx)("img",{src:r,className:"img",alt:"imagen",title:"Detalles de ".concat(c)})}),Object(j.jsx)("h3",{children:c}),Object(j.jsxs)("h5",{children:["$ ",n]}),Object(j.jsxs)("p",{children:["Stock ",Object(j.jsx)("b",{children:a})]})]})},L=function(e){var t=e.items;return Object(j.jsx)("div",{className:"container-fluid item-list-container",children:t.length>0?t.map((function(e){return Object(j.jsx)(T,{id:e.id,name:e.name,price:e.price,photo:e.photo,stock:e.stock},e.id)})):Object(j.jsx)("div",{className:"spinner-border container-fluid",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden"})})})},A=Object(n.memo)(L),$=Object(n.createContext)(),D=function(e){var t=e.children,c=Object(n.useState)(""),r=Object(l.a)(c,2),a=r[0],s=r[1];return Object(j.jsx)($.Provider,{value:{qToSearch:a,setQToSearch:s},children:t})},E=function(){var e,t=Object(n.useState)([]),c=Object(l.a)(t,2),r=c[0],a=c[1],s=Object(o.g)().idCategory,i=Object(n.useContext)($),b=0;return i.qToSearch?(e=i.qToSearch,b=1):(e=s,b=0),Object(n.useEffect)((function(){S(e,b).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[e]),Object(j.jsx)("main",{className:"container-fluid",children:Object(j.jsx)(A,{items:r})})},F=c(36),P=function(){var e=Object(n.useContext)(d).calcItemsCount();return Object(j.jsxs)(i.b,{to:"/cart",children:[" ",Object(j.jsxs)("div",{className:"cart nav-link active",children:[Object(j.jsx)(F.a,{className:" fs-1 "}),e>0&&Object(j.jsx)("span",{className:"rounded-pill d-inline p-2 bg-primary text-white",children:e})]})]})};var B=function(){var e=Object(n.useContext)($),t=Object(n.useState)(""),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(t.target.value),e.setQToSearch(r),console.log(r)},children:[Object(j.jsx)("label",{htmlFor:"keyword",children:Object(j.jsx)("input",{id:"keyword",onChange:function(e){return a(e.target.value)}})}),Object(j.jsx)("button",{className:"btn border-primary",onClick:function(){return document.getElementById("keyword").value=null},children:"Buscar"})]})})},q=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light nav-bar ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/resin-bleker-final",children:Object(j.jsx)("img",{src:"https://res.cloudinary.com/dgioqusuk/image/upload/v1638579251/sakuraTitulo_ax4bhl.png",alt:"Sakura Resin",title:"Sakura Resin",width:"200px"})}),Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)(i.b,{className:"nav-link active",to:"/category/1",children:"Mascotas"}),Object(j.jsx)(i.b,{className:"nav-link active",to:"/category/2",children:"Llaveros"}),Object(j.jsx)(i.b,{className:"nav-link active",to:"/category/3",children:"Articulos"})]}),Object(j.jsx)(B,{}),Object(j.jsx)(P,{})]})})})},M=Object(n.memo)(q),R=(c(44),c(45),function(){var e=Object(n.useContext)(d);return Object(j.jsxs)("section",{className:"container cart-section",children:[Object(j.jsx)("h1",{children:"Lista de compras"}),Object(j.jsx)("div",{children:e.cartList.length>0?e.cartList.map((function(t){return Object(j.jsxs)("article",{className:"cart-div container-fluid",children:[Object(j.jsx)("img",{src:t.imgItem,alt:"imagen"}),Object(j.jsxs)("h3",{title:"Producto: ".concat(t.nameItem),children:[" ",t.nameItem]}),Object(j.jsxs)("div",{children:[1===t.countItem?Object(j.jsxs)("span",{children:[t.countItem," item"]}):Object(j.jsxs)("span",{children:[t.countItem," items / $ ",t.costItem," each"]}),Object(j.jsxs)("h4",{children:["$ ",e.calcTotalPerItem(t.idItem)]})]}),Object(j.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.deleteItem(t.idItem)},children:"X"})]},t.idItem)})):Object(j.jsx)("p",{className:"fs-4",children:"No hay nada en el carrito"})}),e.cartList.length>0&&Object(j.jsxs)("article",{children:[Object(j.jsx)("h2",{children:"Orden de compra"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Subtotal"}),Object(j.jsxs)("h4",{children:["$ ",e.calcSubTotal()," "]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Impuestos"}),Object(j.jsxs)("h4",{children:["$ ",e.calcTaxes()," "]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Descuentos"}),Object(j.jsxs)("h4",{children:["-$ ",e.calcDiscount()," "]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:Object(j.jsx)("b",{children:"TOTAL"})}),Object(j.jsxs)("h3",{children:["$ ",e.calcTotal()," "]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/resin-bleker-final",children:Object(j.jsx)("button",{className:"btn btn-primary",children:"Seguir comprando"})}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:e.removeList,children:"Borrar lista de compras"})]}),Object(j.jsx)(i.b,{to:"/resin-bleker-final",children:Object(j.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){var t=e.cartList.map((function(e){return{id:e.idItem,title:e.nameItem,price:e.costItem}}));e.cartList.forEach(function(){var e=Object(p.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(g.b)(N,"data",t.idItem),e.next=3,Object(g.h)(c,{stock:Object(g.e)(-t.countItem)});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c={buyer:{name:"Maka Albarn",email:"soul.eater@shinbunsen.com",phone:"4242564"},total:e.calcTotal(),items:t,date:Object(g.f)()};console.log(c);var n=function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(g.b)(Object(g.a)(N,"orders")),e.next=3,Object(g.g)(t,c);case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n().then((function(e){return alert("Su compra fue realizada. Orden: ".concat(e.id))})).catch((function(e){return console.log(e)})),e.removeList()},children:Object(j.jsx)("b",{children:"COMPRAR"})})})]})]})});var z=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{children:Object(j.jsx)(D,{children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(M,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/resin-bleker-final",element:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{path:"/category/:idCategory",element:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{path:"/item/:idItem",element:Object(j.jsx)(w,{})}),Object(j.jsx)(o.a,{path:"/cart",element:Object(j.jsx)(R,{})})]})]})})})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.fe16251d.chunk.js.map