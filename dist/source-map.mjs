import a from"source-map-support";import{i as p}from"./node-features-18fdd9fd.mjs";const i=`
//# sourceMappingURL=data:application/json;base64,`;function u(o){if("setSourceMapsEnabled"in process&&typeof Error.prepareStackTrace!="function")return process.setSourceMapsEnabled(!0),({code:r,map:e})=>r+i+Buffer.from(JSON.stringify(e),"utf8").toString("base64");const t=new Map;return a.install({environment:"node",retrieveSourceMap(r){const e=t.get(r);return e?{url:r,map:e}:null}}),p&&o&&o.addListener("message",({filePath:r,map:e})=>t.set(r,e)),({code:r,map:e},s,n)=>(p&&n?n.postMessage({filePath:s,map:e}):t.set(s,e),r)}export{u as installSourceMapSupport};
