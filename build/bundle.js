var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function l(){return u(" ")}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){(null!=n||t.value)&&(t.value=n)}let g;function m(t){g=t}const h=[],v=[],$=[],y=[],b=Promise.resolve();let x=!1;function _(t){$.push(t)}let w=!1;const j=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];m(n),k(n.$$)}for(h.length=0;v.length;)v.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];j.has(n)||(j.add(n),n())}$.length=0}while(h.length);for(;y.length;)y.pop()();x=!1,w=!1,j.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const A=new Set;function C(t,n){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(c,i,s,u,l,f,d=[-1]){const p=g;m(c);const h=i.props||{},v=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:d};let $=!1;if(v.ctx=s?s(c,h,(t,n,...e)=>{const o=e.length?e[0]:n;return v.ctx&&l(v.ctx[t],v.ctx[t]=o)&&(v.bound[t]&&v.bound[t](o),$&&C(c,t)),n}):[],v.update(),$=!0,o(v.before_update),v.fragment=!!u&&u(v.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);v.fragment&&v.fragment.l(t),t.forEach(a)}else v.fragment&&v.fragment.c();i.intro&&((y=c.$$.fragment)&&y.i&&(A.delete(y),y.i(b))),function(t,e,c){const{fragment:i,on_mount:a,on_destroy:s,after_update:u}=t.$$;i&&i.m(e,c),_(()=>{const e=a.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(_)}(c,i.target,i.anchor),E()}var y,b;m(p)}function M(n){let e,r,c,g,m,h,v,$,y,b,x,_,w,j,E,k,A,C;return{c(){e=s("main"),r=s("div"),c=s("div"),c.innerHTML='<div class="col center title svelte-1j3fbrf">\n\t\t\t\t¿Quién juega?\n\t\t\t</div>',g=l(),m=s("div"),h=s("div"),v=s("input"),$=l(),y=s("div"),y.innerHTML='<div class="col center title svelte-1j3fbrf">\n\t\t\t\tSelecciona un avatar para continuar\n\t\t\t</div>',b=l(),x=s("div"),_=s("div"),w=s("img"),E=u("\n\t\t\t\t   \n\t\t\t\t"),k=s("img"),d(c,"class","row"),d(v,"type","text"),d(v,"class","form-control"),d(h,"class","col center svelte-1j3fbrf"),d(m,"class","row"),d(y,"class","row"),w.src!==(j="/ypintor/assets/images/donna.png")&&d(w,"src","/ypintor/assets/images/donna.png"),d(w,"width","135"),d(w,"height","135"),d(w,"alt","Donna"),k.src!==(A="/ypintor/assets/images/uomo.png")&&d(k,"src","/ypintor/assets/images/uomo.png"),d(k,"width","135"),d(k,"height","135"),d(k,"alt","Uomo"),d(_,"class","col center svelte-1j3fbrf"),d(x,"class","row"),d(r,"class","container")},m(t,a,s){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,a),i(e,r),i(r,c),i(r,g),i(r,m),i(m,h),i(h,v),p(v,n[0]),i(r,$),i(r,y),i(r,b),i(r,x),i(x,_),i(_,w),i(_,E),i(_,k),s&&o(C),C=[f(v,"input",n[2]),f(w,"click",n[3]),f(k,"click",n[4])]},p(t,[n]){1&n&&v.value!==t[0]&&p(v,t[0])},i:t,o:t,d(t){t&&a(e),o(C)}}}function N(t,n,e){let o="";function r(t){console.log(t),0===o.length?alert("Debes proporcionar el nombre de quien juega."):1===t?console.log("Continuar como donna ..."):console.log("Continuar como uomo ...")}return[o,r,function(){o=this.value,e(0,o)},t=>r(1),t=>r(2)]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),L(this,t,N,M,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
