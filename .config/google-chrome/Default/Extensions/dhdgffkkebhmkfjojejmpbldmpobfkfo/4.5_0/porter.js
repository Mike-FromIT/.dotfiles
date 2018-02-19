Registry.require(["promise","helper","convert"],function(){var e=Registry.get("promise"),t=Registry.get("helper"),h=Registry.get("convert"),m,l,q,r=function(){var d=e();Registry.vendor(["vendor/zip_js/zip","vendor/zip_js/inflate","vendor/zip_js/deflate"],function(){r=e.Pledge;zip.workerScriptsPath=rea.extension.getURL("/vendor/zip_js/");rea.FEATURES.RUNTIME.FIREFOX?(m=zip.Data64URIWriter,l=zip.BlobReader,q=function(c){return h.dataURItoBlob(c)}):(m=zip.BlobWriter,l=zip.BlobReader,q=function(c){return c});
d.resolve()});return d.promise()},k=function(){var d,c=!1,f,b=function(){var a=e();return f=a};return{write:function(){var a=e();c=!1;zip.createWriter(new m,function(b){d=b;a.resolve(b)},a.reject);return a.promise()},open:function(a){var n=b();c=!0;zip.createReader(new l(a),function(a){d=a;n.resolve(a)},function(a){f&&f.reject(a)});return n.promise()},entries:function(){var a=b();d.getEntries(function(b){a.resolve(b)});return a.promise()},get:function(a){var n=b(),c=new zip.TextWriter;a.getData(c,
n.resolve);return n.promise()},put:function(a,c,f){var e=b();try{d.add(a,new zip.TextReader(c),e.resolve,function(){},{lastModDate:f?new Date(f):void 0})}catch(k){e.reject(k)}return e.promise()},end:function(){var a=b();c?(d.close(),a.resolve()):d.close(function(b){a.resolve(q(b))});return a.promise()}}}();Registry.register("porter","5665",{zip:{create:function(d,c){var f=e(),b=0;r().then(function(){return k.write()}).then(function(a){var c=e(),g={},p=function(a,b){var c=[a,b].join(".");
if(g[c]){var d;do d=a+" ("+g[c]+")",c=[d,b].join("."),g[c]++;while(g[c]);return p(d,b)}g[c]=1;return c},u=d.length,h=function(){if(!d.length)return c.resolve();var a=d.shift(),g=a.meta.name.replace(/[\\\/$*?|]/g,"-"),v=p(g,"user.js"),w=p(g,"options.json"),x=p(g,"storage.json"),m=JSON.stringify({options:a.options,settings:a.settings,meta:a.meta}),l=a.storage?JSON.stringify(a.storage):null;b+=a.source.length;console.log("porter: add to zip",v,b);f.notify("Zip: "+Math.floor((u-d.length)/u*100)+"%");
k.put(v,a.source,a.meta.modified).then(function(){b+=m.length;console.log("porter: add to zip",w,b);return k.put(w,m)}).then(function(){if(!l)return e.Pledge();b+=l.length;console.log("porter: add to zip",x,b);return k.put(x,l)}).fail(function(a){console.log("porter: add to zip failed",a)}).always(function(){console.log("porter: add to zip -> next round");window.setTimeout(h,5)})};h();return c.promise()}).then(function(){console.log("porter: add global props");return c?k.put("Tampermonkey.global.json",
JSON.stringify(c)):e.Pledge()}).then(function(){return k.end()}).done(function(a){f.resolve(a)}).fail(function(){f.reject()});return f.promise()},read:function(d){var c=e(),f;r().then(function(){return k.open(d)}).then(function(b){return k.entries()}).then(function(b){var a=e(),d={},g=b.length,h=function(){if(b.length){var e=b.shift();console.log("porter: read from zip",e.filename);k.get(e).done(function(a){var b=e.filename.match(/(.*)\.(storage\.json|options\.json|global\.json|user\.js)$/);if(b&&
!(3>b.length))try{var c=b[1],g=b[2];d[c]=d[c]||{};"global.json"==g?f=JSON.parse(a):"user.js"==g?d[c].source=a:"options.json"==g?d[c].options=JSON.parse(a):"storage.json"==g&&(d[c].storage=JSON.parse(a))}catch(h){console.warn("porter: read from zip failed",h)}}).always(function(){c.notify("Zip: "+Math.floor((g-b.length)/g*100)+"%");window.setTimeout(h,5)})}else{var l=[];t.each(d,function(a,b){var c=a.options||{};c.source=a.source;c.storage=a.storage;l.push(c)});a.resolve({scripts:l,global_settings:f})}};
h();return a.promise()}).done(function(b){c.resolve(b)}).fail(function(){c.reject()});return c.promise()}},json:{create:function(d,c){var f=e(),b={created_by:"Tampermonkey",version:"1",scripts:[],settings:c};d.forEach(function(a){a={name:a.meta.name,options:a.options,storage:a.storage,enabled:a.settings.enabled,position:a.settings.position,file_url:a.meta.file_url,uuid:a.meta.uuid,source:h.Base64.encode(h.UTF8.encode(a.source))};b.scripts.push(a)});f.resolve(JSON.stringify(b));return f.promise()},
read:function(d){var c=e(),f=function(b){if(b.trim()){var a=null;try{return a=JSON.parse(b),a.scripts=t.map(a.scripts,function(a){a.source=h.UTF8.decode(h.Base64.decode(a.source));return a}),c.resolve({scripts:a.scripts,global_settings:a.settings})}catch(d){if(-1!=b.search("<body>")){var a=b.indexOf("<body>"),e=b.lastIndexOf("</body>");if(-1!=a&&-1!=e)return b=b.substr(a+6,e-(a+6)),f(b)}}}c.reject()};f(d);return c.promise()}}})});