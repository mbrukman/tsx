import{r as n}from"./pkgroll_create-require-1cb753be.js";import{constants as i}from"os";import"./suppress-warnings.js";import"module";if(n("@esbuild-kit/cjs-loader"),process.send){let t=function(s){process.send({type:"kill",signal:s}),process.listenerCount(s)===0&&process.exit(128+i.signals[s])};const e=["SIGINT","SIGTERM"];for(const s of e)process.on(s,t);const{listenerCount:r}=process;process.listenerCount=function(s){let o=Reflect.apply(r,this,arguments);return e.includes(s)&&(o-=1),o}}