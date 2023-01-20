/*! For license information please see 922.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[922],{7810:(t,r,e)=>{e.d(r,{Z:()=>s});var n=e(4015),o=e.n(n),a=e(3645),i=e.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap);"]),i.push([t.id,"*{font-family:Sora,sans-serif}.main-login{align-items:center;background-color:#f5f5f5}.container-logo{display:flex;justify-content:center;width:100%}","",{version:3,sources:["webpack://./resources/js/Pages/Login.vue"],names:[],mappings:"AAmIA,EACA,2BACA,CACA,YAEA,kBAAA,CADA,wBAEA,CACA,gBACA,YAAA,CAEA,sBAAA,CADA,UAEA",sourcesContent:['<template>\r\n    <v-app>\r\n        <v-main class="main-login">\r\n            <div class="container-logo">\r\n              \r\n            </div>\r\n            <v-card class="mx-auto elevation-10" max-width="400">\r\n                <v-img\r\n                    gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,6)"\r\n                    class="white--text align-end"\r\n                    height="150px"\r\n                    src="/images/unap.jpg"\r\n                >\r\n                    <v-card-title>COLEGIO 32\r\n                    </v-card-title>\r\n                    <v-card-subtitle class="">\r\n                        <strong> INGRESAR AL SISTEMA</strong>\r\n                    </v-card-subtitle>\r\n                </v-img>\r\n\r\n                <v-card-subtitle class="pb-0">\r\n                    Ingrese sus datos de acceso\r\n                </v-card-subtitle>\r\n\r\n                <v-alert\r\n                    v-if="show_mensaje"\r\n                    class="rounded-0 my-1"\r\n                    dense\r\n                    text\r\n                    :type="type_mensaje"\r\n                >\r\n                    <small> {{ mensaje }} </small>\r\n                </v-alert>\r\n\r\n                <v-form\r\n                    class="px-5 pb-5 mt-3"\r\n                    ref="form"\r\n                    v-model="valid"\r\n                    lazy-validation\r\n                >\r\n                    <v-text-field\r\n                        dense\r\n                        v-model="email"\r\n                        :rules="[rules.required, rules.email]"\r\n                        label="Correo Electronico"\r\n                        required\r\n                        outlined\r\n                    ></v-text-field>\r\n\r\n                    <v-text-field\r\n                        dense\r\n                        outlined\r\n                        v-model="password"\r\n                        :append-icon="show_password ? \'mdi-eye\' : \'mdi-eye-off\'"\r\n                        :rules="[rules.required, rules.min]"\r\n                        :type="show_password ? \'text\' : \'password\'"\r\n                        name="input-10-1"\r\n                        label="Contraseña"\r\n                        hint="At least 8 characters"\r\n                        counter\r\n                        @click:append="show_password = !show_password"\r\n                    ></v-text-field>\r\n\r\n                    <v-btn\r\n                        :disabled="!valid"\r\n                        color="primary"\r\n                        class="mt-4"\r\n                        block\r\n                        :loading="loading_btn"\r\n                        @click="IngresarSistema"\r\n                    >\r\n                        INGRESAR\r\n                    </v-btn>\r\n                </v-form>\r\n            </v-card>\r\n        </v-main>\r\n    </v-app>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    metaInfo: { title: "Login" },\r\n    data: () => ({\r\n        loading_btn: false,\r\n        show_password: false,\r\n        email: "nearlino20@gmail.com",\r\n        password: "demo",\r\n        valid: true,\r\n\r\n        show_mensaje: false,\r\n        type_mensaje: "success",\r\n        mensaje: "",\r\n        rules: {\r\n            required: (value) => !!value || "Requerido.",\r\n            min: (v) => v.length >= 4 || "Min 6 caracteres",\r\n            email: (v) => /.+@.+\\..+/.test(v) || "Formato incorrecto",\r\n        },\r\n    }),\r\n\r\n    methods: {\r\n        validate() {\r\n            return this.$refs.form.validate();\r\n        },\r\n        async IngresarSistema() {\r\n            if (this.validate()) {\r\n                try {\r\n                    this.loading_btn = true;\r\n                    let res = await axios.post("/login", {\r\n                        email: this.email,\r\n                        password: this.password,\r\n                    });\r\n                    this.show_mensaje = true;\r\n                    this.mensaje = res.data.mensaje;\r\n                    this.loading_btn = false;\r\n\r\n                    console.log(res);\r\n                    this.$inertia.get("/");\r\n                } catch (error) {\r\n                    this.type_mensaje = "error";\r\n                    this.mensaje = error.response.data.error;\r\n                    this.show_mensaje = true;\r\n                    this.loading_btn = false;\r\n                    console.log(error);\r\n                }\r\n            }\r\n        },\r\n    },\r\n};\r\n<\/script>\r\n<style>\r\n@import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap");\r\n* {\r\n    font-family: "Sora", sans-serif;\r\n}\r\n.main-login {\r\n    background-color: whitesmoke;\r\n    align-items: center;\r\n}\r\n.container-logo {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n</style>\r\n'],sourceRoot:""}]);const s=i},922:(t,r,e)=>{e.r(r),e.d(r,{default:()=>d});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=x(i,e);if(s){if(s===f)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=d(t,r,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}(t,e,i),a}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function p(){}function v(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(C([])));y&&y!==r&&e.call(y,i)&&(m=y);var w=v.prototype=h.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(a,i,s,l){var c=d(t[a],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==n(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,s,l)}),(function(t){o("throw",t,s,l)})):r.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,l)}))}l(c.arg)}var a;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=v,c(w,"constructor",v),c(v,"constructor",p),p.displayName=c(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(b.prototype),c(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new b(u(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),c(w,l,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:C(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function a(t,r,e,n,o,a,i){try{var s=t[a](i),l=s.value}catch(t){return void e(t)}s.done?r(l):Promise.resolve(l).then(n,o)}const i={metaInfo:{title:"Login"},data:function(){return{loading_btn:!1,show_password:!1,email:"nearlino20@gmail.com",password:"demo",valid:!0,show_mensaje:!1,type_mensaje:"success",mensaje:"",rules:{required:function(t){return!!t||"Requerido."},min:function(t){return t.length>=4||"Min 6 caracteres"},email:function(t){return/.+@.+\..+/.test(t)||"Formato incorrecto"}}}},methods:{validate:function(){return this.$refs.form.validate()},IngresarSistema:function(){var t,r=this;return(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.validate()){t.next=20;break}return t.prev=1,r.loading_btn=!0,t.next=5,axios.post("/login",{email:r.email,password:r.password});case 5:e=t.sent,r.show_mensaje=!0,r.mensaje=e.data.mensaje,r.loading_btn=!1,console.log(e),r.$inertia.get("/"),t.next=20;break;case 13:t.prev=13,t.t0=t.catch(1),r.type_mensaje="error",r.mensaje=t.t0.response.data.error,r.show_mensaje=!0,r.loading_btn=!1,console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[1,13]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function s(t){a(i,n,o,s,l,"next",t)}function l(t){a(i,n,o,s,l,"throw",t)}s(void 0)}))})()}}};var s=e(3379),l=e.n(s),c=e(7810),u={insert:"head",singleton:!1};l()(c.Z,u);c.Z.locals;const d=(0,e(1900).Z)(i,(function(){var t=this,r=t._self._c;return r("v-app",[r("v-main",{staticClass:"main-login"},[r("div",{staticClass:"container-logo"}),t._v(" "),r("v-card",{staticClass:"mx-auto elevation-10",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,6)",height:"150px",src:"/images/unap.jpg"}},[r("v-card-title",[t._v("COLEGIO 32\n                ")]),t._v(" "),r("v-card-subtitle",{},[r("strong",[t._v(" INGRESAR AL SISTEMA")])])],1),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n                Ingrese sus datos de acceso\n            ")]),t._v(" "),t.show_mensaje?r("v-alert",{staticClass:"rounded-0 my-1",attrs:{dense:"",text:"",type:t.type_mensaje}},[r("small",[t._v(" "+t._s(t.mensaje)+" ")])]):t._e(),t._v(" "),r("v-form",{ref:"form",staticClass:"px-5 pb-5 mt-3",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(r){t.valid=r},expression:"valid"}},[r("v-text-field",{attrs:{dense:"",rules:[t.rules.required,t.rules.email],label:"Correo Electronico",required:"",outlined:""},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{dense:"",outlined:"","append-icon":t.show_password?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show_password?"text":"password",name:"input-10-1",label:"Contraseña",hint:"At least 8 characters",counter:""},on:{"click:append":function(r){t.show_password=!t.show_password}},model:{value:t.password,callback:function(r){t.password=r},expression:"password"}}),t._v(" "),r("v-btn",{staticClass:"mt-4",attrs:{disabled:!t.valid,color:"primary",block:"",loading:t.loading_btn},on:{click:t.IngresarSistema}},[t._v("\n                    INGRESAR\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports},1900:(t,r,e)=>{function n(t,r,e,n,o,a,i,s){var l,c="function"==typeof t?t.options:t;if(r&&(c.render=r,c.staticRenderFns=e,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,r){return l.call(r),u(t,r)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}e.d(r,{Z:()=>n})}}]);
//# sourceMappingURL=922.js.map?id=89d1065142a496e2