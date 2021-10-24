(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{81:function(e,t,n){},90:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(40),i=n.n(a),s=(n(81),n(15)),o=n(7),l=n(98),d=n(70),u=n(12),j=n(71),b=n(30),p=n(6),h="UPDATE_PRODUCTS",O="ADD_TO_CART",m="ADD_MULTIPLE_TO_CART",f="REMOVE_FROM_CART",x="CLEAR_CART",g="UPDATE_CART_QUANTITY",v="TOGGLE_CART",y="UPDATE_CATEGORIES",w="UPDATE_CURRENT_CATEGORY",_={products:[],categories:[],currentCategory:"",cart:[],cartOpen:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},{products:Object(b.a)(t.products)});case O:return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(b.a)(e.cart),[t.product])});case m:return Object(p.a)(Object(p.a)({},e),{},{cart:[].concat(Object(b.a)(e.cart),Object(b.a)(t.products))});case g:return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case f:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(p.a)(Object(p.a)({},e),{},{cartOpen:n.length>0,cart:n});case x:return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!1,cart:[]});case v:return Object(p.a)(Object(p.a)({},e),{},{cartOpen:!e.cartOpen});case y:return Object(p.a)(Object(p.a)({},e),{},{categories:Object(b.a)(t.categories)});case w:return Object(p.a)(Object(p.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},N=Object(j.a)(k);function C(e,t){return 1===t?e:e+"s"}function S(e,t,n){return new Promise((function(c,r){var a,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(a=o.result,i=a.transaction(e,"readwrite"),s=i.objectStore(e),a.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){a.close()}}}))}var T=n(0);var E,A,$,I,D,Q=function(e){var t=Object(u.c)((function(e){return e})),n=Object(u.b)(),c=e.image,r=e.name,a=e._id,i=e.price,o=e.quantity,l=t.cart;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(s.b,{to:"/products/".concat(a),children:[Object(T.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(T.jsx)("p",{children:r})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[o," ",C("item",o)," in stock"]}),Object(T.jsxs)("span",{children:["$",i]})]}),Object(T.jsx)("button",{onClick:function(){var t=l.find((function(e){return e._id===a}));t?(n({type:g,_id:a,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),S("cart","put",Object(p.a)(Object(p.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(n({type:O,product:Object(p.a)(Object(p.a)({},e),{},{purchaseQuantity:1})}),S("cart","put",Object(p.a)(Object(p.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},P=n(96),R=n(25),F=n(21),U=Object(F.a)(E||(E=Object(R.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),L=Object(F.a)(A||(A=Object(R.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),q=(Object(F.a)($||($=Object(R.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(F.a)(I||(I=Object(R.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),W=Object(F.a)(D||(D=Object(R.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),B=n.p+"static/media/spinner.689d9a07.gif";var G=function(){var e=Object(u.c)((function(e){return e})),t=Object(u.b)(),n=e.currentCategory,r=Object(P.a)(U),a=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(t({type:h,products:i.products}),i.products.forEach((function(e){S("products","put",e)}))):a||S("products","get").then((function(e){t({type:h,products:e})}))}),[i,a,t]),Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h2",{children:"Our Products:"}),e.products.length?Object(T.jsx)("div",{className:"flex-row",children:(n?e.products.filter((function(e){return e.category._id===n})):e.products).map((function(e){return Object(T.jsx)(Q,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(T.jsx)("h3",{children:"You haven't added any products yet!"}),a?Object(T.jsx)("img",{src:B,alt:"loading"}):null]})};var Y=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).categories,n=Object(P.a)(q),r=n.loading,a=n.data;return Object(c.useEffect)((function(){a?(e({type:y,categories:a.categories}),a.categories.forEach((function(e){S("categories","put",e)}))):r||S("categories","get").then((function(t){e({type:y,categories:t})}))}),[a,r,e]),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:"Choose a Category:"}),t.map((function(t){return Object(T.jsx)("button",{onClick:function(){var n;n=t._id,e({type:w,currentCategory:n})},children:t.name},t._id)}))]})},M=n(20),H=n.n(M),J=n(28),z=n(14),V=n(61),K=n(97),X=function(e){var t=e.item,n=Object(u.b)();return Object(T.jsxs)("div",{className:"flex-row",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[t.name,", $",t.price]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{children:"Qty:"}),Object(T.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:f,_id:t._id}),S("cart","delete",Object(p.a)({},t))):(n({type:g,_id:t._id,purchaseQuantity:parseInt(c)}),S("cart","put",Object(p.a)(Object(p.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(T.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:f,_id:e._id}),S("cart","delete",Object(p.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},Z=n(62),ee=n(63),te=n(52),ne=n.n(te),ce=new(function(){function e(){Object(Z.a)(this,e)}return Object(ee.a)(e,[{key:"getProfile",value:function(){return ne()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ne()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),re=(n(90),Object(V.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ae=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})),n=Object(K.a)(L),r=Object(z.a)(n,2),a=r[0],i=r[1].data;function s(){e({type:v})}return Object(c.useEffect)((function(){i&&re.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(c.useEffect)((function(){function n(){return(n=Object(J.a)(H.a.mark((function t(){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S("cart","get");case 2:n=t.sent,e({type:m,products:Object(b.a)(n)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){n.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)("div",{className:"close",onClick:s,children:"[close]"}),Object(T.jsx)("h2",{children:"Shopping Cart"}),t.cart.length?Object(T.jsxs)("div",{children:[t.cart.map((function(e){return Object(T.jsx)(X,{item:e},e._id)})),Object(T.jsxs)("div",{className:"flex-row space-between",children:[Object(T.jsxs)("strong",{children:["Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ce.loggedIn()?Object(T.jsx)("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),a({variables:{products:e}})},children:"Checkout"}):Object(T.jsx)("span",{children:"(log in to check out)"})]})]}):Object(T.jsxs)("h3",{children:[Object(T.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(T.jsx)("div",{className:"cart-closed",onClick:s,children:Object(T.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},ie=function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(Y,{}),Object(T.jsx)(G,{}),Object(T.jsx)(ae,{})]})};var se=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})),n=Object(o.g)().id,r=Object(c.useState)({}),a=Object(z.a)(r,2),i=a[0],l=a[1],d=Object(P.a)(U),j=d.loading,b=d.data,m=t.products,x=t.cart;return Object(c.useEffect)((function(){m.length?l(m.find((function(e){return e._id===n}))):b?(e({type:h,products:b.products}),b.products.forEach((function(e){S("products","put",e)}))):j||S("products","get").then((function(t){e({type:h,products:t})}))}),[m,b,j,e,n]),Object(T.jsxs)(T.Fragment,{children:[i&&x?Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(s.b,{to:"/",children:"\u2190 Back to Products"}),Object(T.jsx)("h2",{children:i.name}),Object(T.jsx)("p",{children:i.description}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Price:"}),"$",i.price," ",Object(T.jsx)("button",{onClick:function(){var t=x.find((function(e){return e._id===n}));t?(e({type:g,_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),S("cart","put",Object(p.a)(Object(p.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:O,product:Object(p.a)(Object(p.a)({},i),{},{purchaseQuantity:1})}),S("cart","put",Object(p.a)(Object(p.a)({},i),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(T.jsx)("button",{disabled:!x.find((function(e){return e._id===i._id})),onClick:function(){e({type:f,_id:i._id}),S("cart","delete",Object(p.a)({},i))},children:"Remove from Cart"})]}),Object(T.jsx)("img",{src:"/images/".concat(i.image),alt:i.name})]}):null,j?Object(T.jsx)("img",{src:B,alt:"loading"}):null,Object(T.jsx)(ae,{})]})};var oe,le,de,ue=function(e){var t=e.children;return Object(T.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},je=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(ue,{children:[Object(T.jsx)("h1",{children:"404 Page Not Found"}),Object(T.jsx)("h1",{children:Object(T.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},be=n(35),pe=n(99),he=Object(F.a)(oe||(oe=Object(R.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Oe=Object(F.a)(le||(le=Object(R.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),me=Object(F.a)(de||(de=Object(R.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var fe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(z.a)(t,2),r=n[0],a=n[1],i=Object(pe.a)(he),o=Object(z.a)(i,2),l=o[0],d=o[1].error,u=function(){var e=Object(J.a)(H.a.mark((function e(t){var n,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:r.email,password:r.password}});case 4:n=e.sent,c=n.data.login.token,ce.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;a(Object(p.a)(Object(p.a)({},r),{},Object(be.a)({},n,c)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(s.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(T.jsx)("h2",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:u,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),d?Object(T.jsx)("div",{children:Object(T.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var xe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(z.a)(t,2),r=n[0],a=n[1],i=Object(pe.a)(me),o=Object(z.a)(i,1)[0],l=function(){var e=Object(J.a)(H.a.mark((function e(t){var n,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,c=n.data.addUser.token,ce.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,c=t.value;a(Object(p.a)(Object(p.a)({},r),{},Object(be.a)({},n,c)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(s.b,{to:"/login",children:"\u2190 Go to Login"}),Object(T.jsx)("h2",{children:"Signup"}),Object(T.jsxs)("form",{onSubmit:l,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(T.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(T.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})]}),Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ge=function(){return Object(T.jsxs)("header",{className:"flex-row px-1",children:[Object(T.jsx)("h1",{children:Object(T.jsxs)(s.b,{to:"/",children:[Object(T.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(T.jsx)("nav",{children:ce.loggedIn()?Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(s.b,{to:"/orderHistory",children:"Order History"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)("a",{href:"/",onClick:function(){return ce.logout()},children:"Logout"})})]}):Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(s.b,{to:"/signup",children:"Signup"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(s.b,{to:"/login",children:"Login"})})]})})]})};var ve=function(){var e=Object(pe.a)(Oe),t=Object(z.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(J.a)(H.a.mark((function e(){var n,c,r,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:r=e.sent,a=r.data,a.addOrder.products.forEach((function(e){S("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(T.jsx)("div",{children:Object(T.jsxs)(ue,{children:[Object(T.jsx)("h1",{children:"Success!"}),Object(T.jsx)("h2",{children:"Thank you for your purchase!"}),Object(T.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ye=function(){var e,t=Object(P.a)(W).data;return t&&(e=t.user),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(s.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(T.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,r=e.name,a=e.price;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(s.b,{to:"/products/".concat(n),children:[Object(T.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(T.jsx)("p",{children:r})]}),Object(T.jsx)("div",{children:Object(T.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})},we=new d.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var _e=function(){return Object(T.jsx)(l.a,{client:we,children:Object(T.jsx)(s.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(u.a,{store:N,children:[Object(T.jsx)(ge,{}),Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{exact:!0,path:"/",component:ie}),Object(T.jsx)(o.a,{exact:!0,path:"/login",component:fe}),Object(T.jsx)(o.a,{exact:!0,path:"/signup",component:xe}),Object(T.jsx)(o.a,{exact:!0,path:"/success",component:ve}),Object(T.jsx)(o.a,{exact:!0,path:"/orderHistory",component:ye}),Object(T.jsx)(o.a,{exact:!0,path:"/products/:id",component:se}),Object(T.jsx)(o.a,{component:je})]})]})})})})},ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(_e,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ke?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ne(t,e)}))}}()}},[[93,1,2]]]);
//# sourceMappingURL=main.694695cc.chunk.js.map