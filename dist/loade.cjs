"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var s=require("./pkgroll_create-require-2062debc.cjs"),c=require("repl"),f=require("@esbuild-kit/core-utils"),a=require("@esbuild-kit/esm-loader");require("module");function d(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=d(c);function p(e){const{eval:l}=e,i=async function(r,o,t,n){try{r=(await f.transform(r,t,{loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}},define:{require:"global.require"}})).code}catch{}return l.call(this,r,o,t,n)};e.eval=i}const{start:v}=u.default;u.default.start=function(){const e=Reflect.apply(v,this,arguments);return p(e),e},s.require("@esbuild-kit/cjs-loader"),Object.keys(a).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return a[e]}})});
