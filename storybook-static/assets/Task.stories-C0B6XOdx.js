import{T as A,f as r}from"./index-BHD8-M2w.js";import"./vue.esm-bundler-DSq2GQP1.js";import"./index-DZLKizrv.js";const S={onPinTask:r(),onArchiveTask:r(),onCustomTask:r()},f={component:A,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...S}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},a={args:{task:{...s.args.task,state:"TASK_PINNED"}}},t={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}},e={args:{task:{id:"123",title:"Test Custom Task",state:"TASK_CUSTOM"}}};var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var T,u,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var p,g,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: '123',
      title: 'Test Custom Task',
      state: 'TASK_CUSTOM'
    }
  }
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const K=["ActionsData","Default","Pinned","Archived","Custom"];export{S as ActionsData,t as Archived,e as Custom,s as Default,a as Pinned,K as __namedExportsOrder,f as default};
