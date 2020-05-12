(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[22],{463:function(e,t,s){"use strict";var a=s(470),n=s.n(a),r=s(19),o=s(472).a(),c=s(31),i=s(274),u=n.a.create({baseURL:r.a,timeout:6e4}),l="/auth/login";u.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.Authorization="bearer "+t),t||e.headers["public-request"]||(o.push(l),window.location.reload()),e}),(function(e){i.a.error({message:"Error"}),Promise.reject(e)})),u.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),o.push(l),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),i.a.error(t),Promise.reject(e)}));t.a=u},480:function(e,t,s){"use strict";var a=s(463),n={login:function(e){return Object(a.a)({url:"/login",method:"post",headers:{"public-request":"true"},data:e})}};t.a=n},504:function(e,t,s){"use strict";var a=s(0),n=s(37),r=s(723),o=s(717),c=s(438),i=s(102),u=s(702),l=s(731),d=s(56),m=s(31),g=s(480),h=s(42),j=s(509),b=s(2),p=function(e){var t=Object(h.g)(),s=e.showForgetPassword,n=e.hideAuthMessage,d=e.onForgetPasswordClick,p=e.showLoading,x=e.extra,f=e.loading,O=e.showMessage,w=e.message,v=e.authenticated,y=e.showAuthMessage,k=e.token,P=e.redirect,I=e.allowRedirect,N=e.signOut;return Object(a.useEffect)((function(){null!==k&&I&&t.push(P),O&&setTimeout((function(){n()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(b.jsx)(r.a,{type:"error",showIcon:!0,message:w})}),Object(b.jsxs)(o.a,{layout:"vertical",name:"login-form",onFinish:function(t){console.log("loading = ",e),p();g.a.login(t).then((function(e){localStorage.setItem(m.b,e.access_token),v(e.access_token)})).then((function(e){y(e)})).catch((function(e){N()}))},children:[Object(b.jsx)(o.a.Item,{name:"name",label:"Username",rules:[{required:!0,message:"Please input username"}],children:Object(b.jsx)(c.a,{prefix:Object(b.jsx)(u.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"password",label:Object(b.jsxs)("div",{className:"".concat(s?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(b.jsx)("span",{children:"Password"}),s&&Object(b.jsx)("span",{onClick:function(){return d},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(b.jsx)(c.a.Password,{prefix:Object(b.jsx)(l.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{children:Object(b.jsx)(i.a,{type:"primary",htmlType:"submit",block:!0,loading:f,children:"Sign In"})}),x]})]})};p.defaultProps={otherSignIn:!0,showForgetPassword:!1};var x={showAuthMessage:d.c,showLoading:d.d,hideAuthMessage:d.b,authenticated:d.a,signOut:d.g};t.a=Object(n.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),x)(p)},707:function(e,t,s){"use strict";s.r(t);var a=s(16),n=(s(0),s(504)),r=s(500),o=s(501),c=s(715),i=s(37),u=s(2),l={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(i.d)((function(e){return e.theme.currentTheme}));return Object(u.jsx)("div",{className:"h-100",style:l,children:Object(u.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(u.jsx)(r.a,{justify:"center",children:Object(u.jsx)(o.a,{xs:20,sm:20,md:20,lg:7,children:Object(u.jsx)(c.a,{children:Object(u.jsxs)("div",{className:"my-4",children:[Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""})}),Object(u.jsx)(r.a,{justify:"center",children:Object(u.jsx)(o.a,{xs:24,sm:24,md:20,lg:20,children:Object(u.jsx)(n.a,Object(a.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=22.23ea741a.chunk.js.map