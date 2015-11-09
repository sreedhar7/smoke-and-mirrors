define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]});n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/application/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({})}),define("dummy/application/route",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("dummy/application/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Overview");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("DBMon - Naive");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("DBMon - Proxied Each");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),n=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("DBMon - Occlusion");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),r=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Infinite Scroll");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("header"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("Smoke And Mirrors");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("nav"),r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      | ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      | ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      | ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      | ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(d,i,o){var c=i.dom,l=i.hooks,s=l.block,u=l.content;c.detectNamespace(o);var m;i.useFragmentCache&&c.canClone?(null===this.cachedFragment&&(m=this.build(c),this.hasRendered?this.cachedFragment=m:this.hasRendered=!0),this.cachedFragment&&(m=c.cloneNode(this.cachedFragment,!0))):m=this.build(c);var h=c.childAt(m,[0,3]),p=c.createMorphAt(h,1,1),v=c.createMorphAt(h,3,3),f=c.createMorphAt(h,5,5),b=c.createMorphAt(h,7,7),g=c.createMorphAt(h,9,9),C=c.createMorphAt(m,2,2,o);return s(i,p,d,"link-to",["index"],{},e,null),s(i,v,d,"link-to",["dbmon-naive"],{},t,null),s(i,f,d,"link-to",["dbmon-proxied-each"],{},a,null),s(i,b,d,"link-to",["dbmon-occlusion-collection"],{},n,null),s(i,g,d,"link-to",["infinite-scroll"],{},r,null),u(i,C,d,"outlet"),m}}}())}),define("dummy/components/async-image/component",["exports","smoke-and-mirrors/components/async-image/async-image.component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/occlusion-collection/component",["exports","smoke-and-mirrors/components/occlusion-collection/occlusion-collection.component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/proxied-each/component",["exports","smoke-and-mirrors/components/proxied-each/proxied-each.component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/dbmon-naive/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({queryParams:["numRows"],numRows:100,actions:{addRow:function(){this.incrementProperty("numRows")},removeRow:function(){this.decrementProperty("numRows")}}})}),define("dummy/dbmon-naive/route",["exports","ember","dummy/lib/get-data"],function(e,t,a){"use strict";var n=0;e["default"]=t["default"].Route.extend({model:function(){var e=this.controllerFor("dbmon-naive");return a["default"](e.get("numRows"))},afterModel:function(){t["default"].run.later(this.loadSamples.bind(this),n)},loadSamples:function(){t["default"].run.schedule("afterRender",this,function(){var e=this.controllerFor("dbmon-naive");e.set("model",a["default"](e.get("numRows")))}),t["default"].run.later(this.loadSamples.bind(this),n)}})}),define("dummy/dbmon-naive/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a,n){var r=t.dom,d=t.hooks,i=d.set,o=d.get,c=d.inline;r.detectNamespace(a);var l;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var s=r.createMorphAt(l,1,1,a);return i(t,e,"db",n[0]),c(t,s,e,"view",["dbmon-database-naive"],{content:o(t,e,"db")}),l}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h3"),n=e.createTextNode("DBMon | Naive Each");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    All of these examples including this one have a 0ms timeout before fetching\n    new data and render 200 rows (2x rowCount for master + slave) by default.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Add Row");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Remove Row");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("table");e.setAttribute(a,"class","table table-striped latest-data");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("tbody"),r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,d=a.hooks,i=d.element,o=d.get,c=d.block;r.detectNamespace(n);var l;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var s=r.childAt(l,[4]),u=r.childAt(l,[6]),m=r.createMorphAt(r.childAt(l,[8,1]),1,1);return i(a,s,t,"action",["addRow"],{}),i(a,u,t,"action",["removeRow"],{}),c(a,m,t,"each",[o(a,t,"model.databases")],{},e,null),l}}}())}),define("dummy/dbmon-naive/view.v2",["exports","ember","dummy/views/cache-container"],function(e,t,a){"use strict";e["default"]=a["default"].extend({view:t["default"].View.extend({templateName:"dbmon-naive"})})}),define("dummy/dbmon-occlusion-collection/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({queryParams:["numRows"],numRows:100,actions:{addRow:function(){this.incrementProperty("numRows")},removeRow:function(){this.decrementProperty("numRows")}}})}),define("dummy/dbmon-occlusion-collection/route",["exports","ember","dummy/lib/get-data"],function(e,t,a){"use strict";var n=0;e["default"]=t["default"].Route.extend({model:function(){var e=this.controllerFor("dbmon-occlusion-collection");return a["default"](e.get("numRows"))},afterModel:function(){t["default"].run.later(this.loadSamples.bind(this),n)},loadSamples:function(){t["default"].run.schedule("afterRender",this,function(){var e=this.controllerFor("dbmon-occlusion-collection");e.set("model",a["default"](e.get("numRows")))}),t["default"].run.later(this.loadSamples.bind(this),n)}})}),define("dummy/dbmon-occlusion-collection/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h3"),n=e.createTextNode("DBMon | Occlusion Collection");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","table-wrapper");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("table");e.setAttribute(n,"class","table table-striped latest-data");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.get,i=r.inline;n.detectNamespace(a);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var c=n.createMorphAt(n.childAt(o,[2,1]),1,1);return i(t,c,e,"occlusion-collection",[],{tagName:"tbody",itemViewClass:"dbmon-database-tagless",defaultHeight:37,alwaysUseDefaultHeight:!0,containerSelector:".table-wrapper",keyForId:"id",contentToProxy:d(t,e,"model.databases")}),o}}}())}),define("dummy/dbmon-occlusion-collection/view.v2",["exports","ember","dummy/views/cache-container"],function(e,t,a){"use strict";e["default"]=a["default"].extend({view:t["default"].View.extend({templateName:"dbmon-occlusion-collection"})})}),define("dummy/dbmon-proxied-each/controller",["exports","ember"],function(e){"use strict";e["default"]=Ember.Controller.extend({queryParams:["numRows"],numRows:100,actions:{addRow:function(){this.incrementProperty("numRows")},removeRow:function(){this.decrementProperty("numRows")}}})}),define("dummy/dbmon-proxied-each/route",["exports","ember","dummy/lib/get-data"],function(e,t,a){"use strict";var n=0;e["default"]=t["default"].Route.extend({model:function(){var e=this.controllerFor("dbmon-proxied-each");return a["default"](e.get("numRows"))},afterModel:function(){t["default"].run.later(this.loadSamples.bind(this),n)},loadSamples:function(){t["default"].run.schedule("afterRender",this,function(){var e=this.controllerFor("dbmon-proxied-each");e.set("model",a["default"](e.get("numRows")))}),t["default"].run.later(this.loadSamples.bind(this),n)}})}),define("dummy/dbmon-proxied-each/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h3"),n=e.createTextNode("DBMon | Proxied Each");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Add Row");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("button"),n=e.createTextNode("Remove Row");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("table");e.setAttribute(a,"class","table table-striped latest-data");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.element,i=r.get,o=r.inline;n.detectNamespace(a);var c;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(c=this.build(n),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=n.cloneNode(this.cachedFragment,!0))):c=this.build(n);var l=n.childAt(c,[2]),s=n.childAt(c,[4]),u=n.createMorphAt(n.childAt(c,[6]),1,1);return d(t,l,e,"action",["addRow"],{}),d(t,s,e,"action",["removeRow"],{}),o(t,u,e,"proxied-each",[],{tagName:"tbody",itemViewClass:"dbmon-database",keyForId:"id",contentToProxy:i(t,e,"model.databases")}),c}}}())}),define("dummy/dbmon-proxied-each/view.v2",["exports","ember","dummy/views/cache-container"],function(e,t,a){"use strict";e["default"]=a["default"].extend({view:t["default"].View.extend({templateName:"dbmon-proxied-each"})})}),define("dummy/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2"),n=e.createTextNode("Demos!");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    There's nothing like putting a performance addon to the test like\n    a serious stress test.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("\n    All of the demos here are built using Ember 1.11.  These are NOT Glimmer'd.\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode('\n    The naive implementation uses nested "each" helpers. Don\'t worry, the naive\n    implementation will (probably) load.  It just might take a long time.\n');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode('\n    The proxied-each implementation uses the "proxied-each" component which prevents\n    views being needlessly torn down even when the underlying content array is\n    completely changed out.\n');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode('\n    The "occlusion-collection" implementation has the same underlying array behavior\n    as "proxied-each", but additionally intelligently hides, caches, or removes\n    rows depending upon how far off screen they are.\n');e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}())}),define("dummy/infinite-scroll/controller",["exports","ember","dummy/lib/get-images"],function(e,t,a){"use strict";e["default"]=Ember.Controller.extend({numImages:10,actions:{loadAbove:function(){var e=a["default"](10),t=this.get("model.images.[]"),n=e.concat(t);this.set("model.images.[]",n)},loadBelow:function(){var e=a["default"](10),t=this.get("model.images.[]"),n=t.concat(e);this.set("model.images.[]",n)}}})}),define("dummy/infinite-scroll/route",["exports","ember","dummy/lib/get-images"],function(e,t,a){"use strict";e["default"]=t["default"].Route.extend({model:function(){return{images:a["default"](10)}}})}),define("dummy/infinite-scroll/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-7");var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","table-wrapper");var i=e.createTextNode("\n              ");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("\n            ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-5");var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("h3"),i=e.createTextNode("Infinite Scroll");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n                The Occlusion Collection can be used to quickly build a robust infinite scroll.\n                You do not need to worry too hard about how you manipulate the underlying array,\n                both the array and it's content are proxied so views will be reused as much as\n                possible.\n            ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n                Prepending to the array is made more efficient via a quick length + same object at offset\n                comparison.  If it looks like you simply added 10 items to the beginning of an array,\n                10 new views are created and prepended without affecting the old views.  Any other\n                data changes further in the array will still be updated.\n            ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.get,i=r.inline;n.detectNamespace(a);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var c=n.createMorphAt(n.childAt(o,[0,1,1,1]),1,1);return i(t,c,e,"occlusion-collection",[],{itemViewClass:"image-slide",defaultHeight:350,visibleBuffer:2,invisibleBuffer:3,cacheBuffer:2,alwaysUseDefaultHeight:!0,containerSelector:".table-wrapper",bottomReached:"loadBelow",topReached:"loadAbove",keyForId:"small",contentToProxy:d(t,e,"model.images")}),o}}}())}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var i=n(d.toString());a["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/lib/get-data",["exports"],function(e){"use strict";function t(e){e=e||a;for(var t={start_at:(new Date).getTime()/1e3,databases:[]},n=1;e>=n;n++)t.databases.push({id:"cluster"+n,queries:[]}),t.databases.push({id:"cluster"+n+"slave",queries:[]});return t.databases.forEach(function(e){for(var t=Math.floor(10*Math.random()+1),a=0;t>a;a++){var n={canvas_action:null,canvas_context_id:null,canvas_controller:null,canvas_hostname:null,canvas_job_tag:null,canvas_pid:null,elapsed:15*Math.random(),query:"SELECT blah FROM something",waiting:Math.random()<.5};Math.random()<.2&&(n.query="<IDLE> in transaction"),Math.random()<.1&&(n.query="vacuum"),e.queries.push(n)}e.queries=e.queries.sort(function(e,t){return t.elapsed-e.elapsed})}),t}e["default"]=t;var a=20}),define("dummy/lib/get-images",["exports"],function(e){"use strict";function t(){return Math.round(Math.random())}function a(e,t){return Math.floor(Math.random()*(t+1-e)+e)}function n(){return a(1500,3e3)}function r(){return a(1,10)}function d(){var e=s.length-1;return a(0,e)}function i(){var e=[],a=[];e.push(l),a.push(l),t()&&(e.push("g"),a.push("g"));var i=n();e.push(i),e.push(i);var o=350;a.push(o),a.push(o);var c=s[d()];e.push(c),a.push(c);var u=r();return e.push(u),a.push(u),{large:e.join("/"),small:a.join("/")}}function o(e){e=e||c;for(var t=[],a=1;e>=a;a++)t.push(i());return t}e["default"]=o;var c=10,l="http://lorempixel.com",s=["abstract","city","people","transport","food","nature","business","nightlife","sports","cats","fashion","technics"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});e["default"]=n.map(function(){this.route("dbmon-naive"),this.route("dbmon-proxied-each"),this.route("dbmon-occlusion-collection"),this.route("infinite-scroll"),this.route("cacheing-view")})}),define("dummy/templates/dbmon-database-naive",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("  ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a,n){var r=t.dom,d=t.hooks,i=d.set,o=d.get,c=d.inline;r.detectNamespace(a);var l;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var s=r.createMorphAt(l,1,1,a);return i(t,e,"query",n[0]),c(t,s,e,"view",["dbmon-row-cells"],{content:o(t,e,"query")}),l}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","dbname");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","query-count");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("span"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,d=a.hooks,i=d.content,o=d.get,c=d.concat,l=d.attribute,s=d.block;r.detectNamespace(n);var u;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(u=this.build(r),this.hasRendered?this.cachedFragment=u:this.hasRendered=!0),this.cachedFragment&&(u=r.cloneNode(this.cachedFragment,!0))):u=this.build(r);var m=r.childAt(u,[3,1]),h=r.createMorphAt(r.childAt(u,[1]),1,1),p=r.createMorphAt(m,1,1),v=r.createAttrMorph(m,"class"),f=r.createMorphAt(u,5,5,n);return r.insertBoundary(u,null),i(a,h,t,"view.content.id"),l(a,v,m,"class",c(a,[o(a,t,"view.countClassName")])),i(a,p,t,"view.content.queries.length"),s(a,f,t,"each",[o(a,t,"view.topFiveQueries")],{},e,null),u}}}())}),define("dummy/templates/dbmon-database",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","dbname");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("td");e.setAttribute(a,"class","query-count");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("span"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content,i=r.get,o=r.concat,c=r.attribute,l=r.inline;n.detectNamespace(a);var s;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(s=this.build(n),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=n.cloneNode(this.cachedFragment,!0))):s=this.build(n);var u=n.childAt(s,[3,1]),m=n.createMorphAt(n.childAt(s,[1]),1,1),h=n.createMorphAt(u,1,1),p=n.createAttrMorph(u,"class"),v=n.createMorphAt(s,5,5,a);return d(t,m,e,"view.content.id"),c(t,p,u,"class",o(t,[i(t,e,"view.countClassName")])),d(t,h,e,"view.content.queries.length"),l(t,v,e,"proxied-each",[],{contentToProxy:i(t,e,"view.topFiveQueries"),itemViewClass:"dbmon-row-cells"}),s}}}())}),define("dummy/templates/dbmon-row-cells",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","popover bottom");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","popover-content");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","arrow"),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var o=n.createMorphAt(i,0,0,a),c=n.createMorphAt(n.childAt(i,[2,1]),0,0);return n.insertBoundary(i,0),d(t,o,e,"view.elapsed"),d(t,c,e,"view.content.query"),i}}}())}),define("dummy/templates/image-slide",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.get,i=r.inline;n.detectNamespace(a);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var c=n.createMorphAt(o,0,0,a);return n.insertBoundary(o,null),n.insertBoundary(o,0),i(t,c,e,"async-image",[],{src:d(t,e,"view.content.small")}),o}}}())}),define("dummy/views/dbmon-database-naive",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({tagName:"tr",templateName:"dbmon-database-naive",topFiveQueries:function(){for(var e=this.get("content.queries"),t=e.slice(0,5);t.length<5;)t.push({query:""});return t}.property("content.queries"),countClassName:function(){var e=this.get("content.queries"),t="label";return t+=e.length>=20?" label-important":e.length>=10?" label-warning":" label-success"}.property("content.queries")})}),define("dummy/views/dbmon-database-tagless",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({tagName:"",templateName:"dbmon-database",topFiveQueries:function(){for(var e=this.get("content.queries"),t=e.slice(0,5);t.length<5;)t.push({query:""});return t}.property("content.queries"),countClassName:function(){var e=this.get("content.queries"),t="label";return t+=e.length>=20?" label-important":e.length>=10?" label-warning":" label-success"}.property("content.queries")})}),define("dummy/views/dbmon-database",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({tagName:"tr",templateName:"dbmon-database",topFiveQueries:function(){for(var e=this.get("content.queries"),t=e.slice(0,5);t.length<5;)t.push({query:""});return t}.property("content.queries"),countClassName:function(){var e=this.get("content.queries"),t="label";return t+=e.length>=20?" label-important":e.length>=10?" label-warning":" label-success"}.property("content.queries")})}),define("dummy/views/dbmon-row-cells",["exports","ember"],function(e,t){"use strict";function a(e){return e>=10?"elapsed warn_long":e>=1?"elapsed warn":"elapsed short"}function n(e){var t=parseFloat(e).toFixed(2);if(e>60){var a=Math.floor(e/60),n=(e%60).toFixed(2).split("."),r=n[0].lpad("0",2),d=n[1];t=a+":"+r+"."+d}return t}e["default"]=t["default"].View.extend({templateName:"dbmon-row-cells",
classNames:["Query"],classNameBindings:["elapsedClassName"],tagName:"td",elapsed:t["default"].computed("content.elapsed",function(){var e=this.get("content.elapsed");return e?n(e):""}).readOnly(),elapsedClassName:t["default"].computed("content.elapsed",function(){var e=this.get("content.elapsed");return a(e)}).readOnly()})}),define("dummy/views/image-slide",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({templateName:"image-slide",classNames:["image-slide"]})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"smoke-and-mirrors",version:"0.1.1.9176317b"});