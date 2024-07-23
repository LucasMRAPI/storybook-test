import{T as b}from"./TaskList-C0VEJglN.js";import{a as o,h as y,e,d as T,o as n}from"./vue.esm-bundler-DSq2GQP1.js";import{_ as w,w as S,a as i}from"./index-BHD8-M2w.js";import"./PureTaskList-D7BF1efv.js";import"./pinia-TOPa9oNT.js";import"./index-DZLKizrv.js";const k={name:"PureInboxScreen",components:{TaskList:b},props:{error:{type:Boolean,default:!1}}},E={key:0,class:"page lists-show"},I=e("div",{class:"wrapper-message"},[e("span",{class:"icon-face-sad"}),e("p",{class:"title-message"},"Oh no!"),e("p",{class:"subtitle-message"},"Something went wrong")],-1),B=[I],P={key:1,class:"page lists-show"},L=e("nav",null,[e("h1",{class:"title-page"},"Taskbox")],-1);function N(c,r,v,$,C,D){const x=T("TaskList");return n(),o("div",null,[v.error?(n(),o("div",E,B)):(n(),o("div",P,[L,y(x)]))])}const V=w(k,[["render",N]]);k.__docgenInfo={displayName:"PureInboxScreen",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/Users/morille-roy/PhpstormProjects/vue-storybook/taskbox/src/components/PureInboxScreen.vue"]};const z={component:V,title:"PureInboxScreen",tags:["autodocs"]},s={},a={args:{error:!0}},t={play:async({canvasElement:c})=>{const r=S(c);await i.click(r.getByLabelText("pinTask-1")),await i.click(r.getByLabelText("pinTask-3"))}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,_;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(_=(d=a.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Default","Error","WithInteractions"];export{s as Default,a as Error,t as WithInteractions,A as __namedExportsOrder,z as default};
