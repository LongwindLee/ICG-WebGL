!function(n){var t={};function r(u){if(t[u])return t[u].exports;var e=t[u]={i:u,l:!1,exports:{}};return n[u].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=t,r.d=function(n,t,u){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:u})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)r.d(u,e,function(t){return n[t]}.bind(null,e));return u},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/",r(r.s=82)}({0:function(n,t,r){"use strict";var u={};r.r(u),r.d(u,"create",function(){return d}),r.d(u,"clone",function(){return h}),r.d(u,"copy",function(){return s}),r.d(u,"fromValues",function(){return M}),r.d(u,"set",function(){return l}),r.d(u,"identity",function(){return v}),r.d(u,"transpose",function(){return b}),r.d(u,"invert",function(){return m}),r.d(u,"adjoint",function(){return p}),r.d(u,"determinant",function(){return g}),r.d(u,"multiply",function(){return A}),r.d(u,"translate",function(){return x}),r.d(u,"scale",function(){return y}),r.d(u,"rotate",function(){return w}),r.d(u,"rotateX",function(){return q}),r.d(u,"rotateY",function(){return S}),r.d(u,"rotateZ",function(){return T}),r.d(u,"fromTranslation",function(){return P}),r.d(u,"fromScaling",function(){return R}),r.d(u,"fromRotation",function(){return F}),r.d(u,"fromXRotation",function(){return E}),r.d(u,"fromYRotation",function(){return I}),r.d(u,"fromZRotation",function(){return _}),r.d(u,"fromRotationTranslation",function(){return L}),r.d(u,"fromQuat2",function(){return C}),r.d(u,"getTranslation",function(){return O}),r.d(u,"getScaling",function(){return D}),r.d(u,"getRotation",function(){return V}),r.d(u,"fromRotationTranslationScale",function(){return B}),r.d(u,"fromRotationTranslationScaleOrigin",function(){return j}),r.d(u,"fromQuat",function(){return U}),r.d(u,"frustum",function(){return z}),r.d(u,"perspective",function(){return k}),r.d(u,"perspectiveFromFieldOfView",function(){return Y}),r.d(u,"ortho",function(){return G}),r.d(u,"lookAt",function(){return W}),r.d(u,"targetTo",function(){return H}),r.d(u,"str",function(){return N}),r.d(u,"frob",function(){return Q}),r.d(u,"add",function(){return X}),r.d(u,"subtract",function(){return Z}),r.d(u,"multiplyScalar",function(){return K}),r.d(u,"multiplyScalarAndAdd",function(){return J}),r.d(u,"exactEquals",function(){return $}),r.d(u,"equals",function(){return nn}),r.d(u,"mul",function(){return tn}),r.d(u,"sub",function(){return rn});var e={};r.r(e),r.d(e,"create",function(){return un}),r.d(e,"clone",function(){return en}),r.d(e,"fromValues",function(){return an}),r.d(e,"copy",function(){return on}),r.d(e,"set",function(){return cn}),r.d(e,"add",function(){return fn}),r.d(e,"subtract",function(){return dn}),r.d(e,"multiply",function(){return hn}),r.d(e,"divide",function(){return sn}),r.d(e,"ceil",function(){return Mn}),r.d(e,"floor",function(){return ln}),r.d(e,"min",function(){return vn}),r.d(e,"max",function(){return bn}),r.d(e,"round",function(){return mn}),r.d(e,"scale",function(){return pn}),r.d(e,"scaleAndAdd",function(){return gn}),r.d(e,"distance",function(){return An}),r.d(e,"squaredDistance",function(){return xn}),r.d(e,"length",function(){return yn}),r.d(e,"squaredLength",function(){return wn}),r.d(e,"negate",function(){return qn}),r.d(e,"inverse",function(){return Sn}),r.d(e,"normalize",function(){return Tn}),r.d(e,"dot",function(){return Pn}),r.d(e,"cross",function(){return Rn}),r.d(e,"lerp",function(){return Fn}),r.d(e,"random",function(){return En}),r.d(e,"transformMat2",function(){return In}),r.d(e,"transformMat2d",function(){return _n}),r.d(e,"transformMat3",function(){return Ln}),r.d(e,"transformMat4",function(){return Cn}),r.d(e,"rotate",function(){return On}),r.d(e,"angle",function(){return Dn}),r.d(e,"zero",function(){return Vn}),r.d(e,"str",function(){return Bn}),r.d(e,"exactEquals",function(){return jn}),r.d(e,"equals",function(){return Un}),r.d(e,"len",function(){return kn}),r.d(e,"sub",function(){return Yn}),r.d(e,"mul",function(){return Gn}),r.d(e,"div",function(){return Wn}),r.d(e,"dist",function(){return Hn}),r.d(e,"sqrDist",function(){return Nn}),r.d(e,"sqrLen",function(){return Qn}),r.d(e,"forEach",function(){return Xn});var a={};r.r(a),r.d(a,"create",function(){return Zn}),r.d(a,"clone",function(){return Kn}),r.d(a,"length",function(){return Jn}),r.d(a,"fromValues",function(){return $n}),r.d(a,"copy",function(){return nt}),r.d(a,"set",function(){return tt}),r.d(a,"add",function(){return rt}),r.d(a,"subtract",function(){return ut}),r.d(a,"multiply",function(){return et}),r.d(a,"divide",function(){return at}),r.d(a,"ceil",function(){return ot}),r.d(a,"floor",function(){return it}),r.d(a,"min",function(){return ct}),r.d(a,"max",function(){return ft}),r.d(a,"round",function(){return dt}),r.d(a,"scale",function(){return ht}),r.d(a,"scaleAndAdd",function(){return st}),r.d(a,"distance",function(){return Mt}),r.d(a,"squaredDistance",function(){return lt}),r.d(a,"squaredLength",function(){return vt}),r.d(a,"negate",function(){return bt}),r.d(a,"inverse",function(){return mt}),r.d(a,"normalize",function(){return pt}),r.d(a,"dot",function(){return gt}),r.d(a,"cross",function(){return At}),r.d(a,"lerp",function(){return xt}),r.d(a,"hermite",function(){return yt}),r.d(a,"bezier",function(){return wt}),r.d(a,"random",function(){return qt}),r.d(a,"transformMat4",function(){return St}),r.d(a,"transformMat3",function(){return Tt}),r.d(a,"transformQuat",function(){return Pt}),r.d(a,"rotateX",function(){return Rt}),r.d(a,"rotateY",function(){return Ft}),r.d(a,"rotateZ",function(){return Et}),r.d(a,"angle",function(){return It}),r.d(a,"zero",function(){return _t}),r.d(a,"str",function(){return Lt}),r.d(a,"exactEquals",function(){return Ct}),r.d(a,"equals",function(){return Ot}),r.d(a,"sub",function(){return Dt}),r.d(a,"mul",function(){return Vt}),r.d(a,"div",function(){return Bt}),r.d(a,"dist",function(){return jt}),r.d(a,"sqrDist",function(){return Ut}),r.d(a,"len",function(){return zt}),r.d(a,"sqrLen",function(){return kt}),r.d(a,"forEach",function(){return Yt});var o={};r.r(o),r.d(o,"create",function(){return Gt}),r.d(o,"clone",function(){return Wt}),r.d(o,"fromValues",function(){return Ht}),r.d(o,"copy",function(){return Nt}),r.d(o,"set",function(){return Qt}),r.d(o,"add",function(){return Xt}),r.d(o,"subtract",function(){return Zt}),r.d(o,"multiply",function(){return Kt}),r.d(o,"divide",function(){return Jt}),r.d(o,"ceil",function(){return $t}),r.d(o,"floor",function(){return nr}),r.d(o,"min",function(){return tr}),r.d(o,"max",function(){return rr}),r.d(o,"round",function(){return ur}),r.d(o,"scale",function(){return er}),r.d(o,"scaleAndAdd",function(){return ar}),r.d(o,"distance",function(){return or}),r.d(o,"squaredDistance",function(){return ir}),r.d(o,"length",function(){return cr}),r.d(o,"squaredLength",function(){return fr}),r.d(o,"negate",function(){return dr}),r.d(o,"inverse",function(){return hr}),r.d(o,"normalize",function(){return sr}),r.d(o,"dot",function(){return Mr}),r.d(o,"cross",function(){return lr}),r.d(o,"lerp",function(){return vr}),r.d(o,"random",function(){return br}),r.d(o,"transformMat4",function(){return mr}),r.d(o,"transformQuat",function(){return pr}),r.d(o,"zero",function(){return gr}),r.d(o,"str",function(){return Ar}),r.d(o,"exactEquals",function(){return xr}),r.d(o,"equals",function(){return yr}),r.d(o,"sub",function(){return wr}),r.d(o,"mul",function(){return qr}),r.d(o,"div",function(){return Sr}),r.d(o,"dist",function(){return Tr}),r.d(o,"sqrDist",function(){return Pr}),r.d(o,"len",function(){return Rr}),r.d(o,"sqrLen",function(){return Fr}),r.d(o,"forEach",function(){return Er});var i=1e-6,c="undefined"!=typeof Float32Array?Float32Array:Array,f=Math.random;Math.PI;function d(){var n=new c(16);return c!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function h(n){var t=new c(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function s(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function M(n,t,r,u,e,a,o,i,f,d,h,s,M,l,v,b){var m=new c(16);return m[0]=n,m[1]=t,m[2]=r,m[3]=u,m[4]=e,m[5]=a,m[6]=o,m[7]=i,m[8]=f,m[9]=d,m[10]=h,m[11]=s,m[12]=M,m[13]=l,m[14]=v,m[15]=b,m}function l(n,t,r,u,e,a,o,i,c,f,d,h,s,M,l,v,b){return n[0]=t,n[1]=r,n[2]=u,n[3]=e,n[4]=a,n[5]=o,n[6]=i,n[7]=c,n[8]=f,n[9]=d,n[10]=h,n[11]=s,n[12]=M,n[13]=l,n[14]=v,n[15]=b,n}function v(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function b(n,t){if(n===t){var r=t[1],u=t[2],e=t[3],a=t[6],o=t[7],i=t[11];n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=r,n[6]=t[9],n[7]=t[13],n[8]=u,n[9]=a,n[11]=t[14],n[12]=e,n[13]=o,n[14]=i}else n[0]=t[0],n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=t[1],n[5]=t[5],n[6]=t[9],n[7]=t[13],n[8]=t[2],n[9]=t[6],n[10]=t[10],n[11]=t[14],n[12]=t[3],n[13]=t[7],n[14]=t[11],n[15]=t[15];return n}function m(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=t[4],i=t[5],c=t[6],f=t[7],d=t[8],h=t[9],s=t[10],M=t[11],l=t[12],v=t[13],b=t[14],m=t[15],p=r*i-u*o,g=r*c-e*o,A=r*f-a*o,x=u*c-e*i,y=u*f-a*i,w=e*f-a*c,q=d*v-h*l,S=d*b-s*l,T=d*m-M*l,P=h*b-s*v,R=h*m-M*v,F=s*m-M*b,E=p*F-g*R+A*P+x*T-y*S+w*q;return E?(E=1/E,n[0]=(i*F-c*R+f*P)*E,n[1]=(e*R-u*F-a*P)*E,n[2]=(v*w-b*y+m*x)*E,n[3]=(s*y-h*w-M*x)*E,n[4]=(c*T-o*F-f*S)*E,n[5]=(r*F-e*T+a*S)*E,n[6]=(b*A-l*w-m*g)*E,n[7]=(d*w-s*A+M*g)*E,n[8]=(o*R-i*T+f*q)*E,n[9]=(u*T-r*R-a*q)*E,n[10]=(l*y-v*A+m*p)*E,n[11]=(h*A-d*y-M*p)*E,n[12]=(i*S-o*P-c*q)*E,n[13]=(r*P-u*S+e*q)*E,n[14]=(v*g-l*x-b*p)*E,n[15]=(d*x-h*g+s*p)*E,n):null}function p(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=t[4],i=t[5],c=t[6],f=t[7],d=t[8],h=t[9],s=t[10],M=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return n[0]=i*(s*m-M*b)-h*(c*m-f*b)+v*(c*M-f*s),n[1]=-(u*(s*m-M*b)-h*(e*m-a*b)+v*(e*M-a*s)),n[2]=u*(c*m-f*b)-i*(e*m-a*b)+v*(e*f-a*c),n[3]=-(u*(c*M-f*s)-i*(e*M-a*s)+h*(e*f-a*c)),n[4]=-(o*(s*m-M*b)-d*(c*m-f*b)+l*(c*M-f*s)),n[5]=r*(s*m-M*b)-d*(e*m-a*b)+l*(e*M-a*s),n[6]=-(r*(c*m-f*b)-o*(e*m-a*b)+l*(e*f-a*c)),n[7]=r*(c*M-f*s)-o*(e*M-a*s)+d*(e*f-a*c),n[8]=o*(h*m-M*v)-d*(i*m-f*v)+l*(i*M-f*h),n[9]=-(r*(h*m-M*v)-d*(u*m-a*v)+l*(u*M-a*h)),n[10]=r*(i*m-f*v)-o*(u*m-a*v)+l*(u*f-a*i),n[11]=-(r*(i*M-f*h)-o*(u*M-a*h)+d*(u*f-a*i)),n[12]=-(o*(h*b-s*v)-d*(i*b-c*v)+l*(i*s-c*h)),n[13]=r*(h*b-s*v)-d*(u*b-e*v)+l*(u*s-e*h),n[14]=-(r*(i*b-c*v)-o*(u*b-e*v)+l*(u*c-e*i)),n[15]=r*(i*s-c*h)-o*(u*s-e*h)+d*(u*c-e*i),n}function g(n){var t=n[0],r=n[1],u=n[2],e=n[3],a=n[4],o=n[5],i=n[6],c=n[7],f=n[8],d=n[9],h=n[10],s=n[11],M=n[12],l=n[13],v=n[14],b=n[15];return(t*o-r*a)*(h*b-s*v)-(t*i-u*a)*(d*b-s*l)+(t*c-e*a)*(d*v-h*l)+(r*i-u*o)*(f*b-s*M)-(r*c-e*o)*(f*v-h*M)+(u*c-e*i)*(f*l-d*M)}function A(n,t,r){var u=t[0],e=t[1],a=t[2],o=t[3],i=t[4],c=t[5],f=t[6],d=t[7],h=t[8],s=t[9],M=t[10],l=t[11],v=t[12],b=t[13],m=t[14],p=t[15],g=r[0],A=r[1],x=r[2],y=r[3];return n[0]=g*u+A*i+x*h+y*v,n[1]=g*e+A*c+x*s+y*b,n[2]=g*a+A*f+x*M+y*m,n[3]=g*o+A*d+x*l+y*p,g=r[4],A=r[5],x=r[6],y=r[7],n[4]=g*u+A*i+x*h+y*v,n[5]=g*e+A*c+x*s+y*b,n[6]=g*a+A*f+x*M+y*m,n[7]=g*o+A*d+x*l+y*p,g=r[8],A=r[9],x=r[10],y=r[11],n[8]=g*u+A*i+x*h+y*v,n[9]=g*e+A*c+x*s+y*b,n[10]=g*a+A*f+x*M+y*m,n[11]=g*o+A*d+x*l+y*p,g=r[12],A=r[13],x=r[14],y=r[15],n[12]=g*u+A*i+x*h+y*v,n[13]=g*e+A*c+x*s+y*b,n[14]=g*a+A*f+x*M+y*m,n[15]=g*o+A*d+x*l+y*p,n}function x(n,t,r){var u,e,a,o,i,c,f,d,h,s,M,l,v=r[0],b=r[1],m=r[2];return t===n?(n[12]=t[0]*v+t[4]*b+t[8]*m+t[12],n[13]=t[1]*v+t[5]*b+t[9]*m+t[13],n[14]=t[2]*v+t[6]*b+t[10]*m+t[14],n[15]=t[3]*v+t[7]*b+t[11]*m+t[15]):(u=t[0],e=t[1],a=t[2],o=t[3],i=t[4],c=t[5],f=t[6],d=t[7],h=t[8],s=t[9],M=t[10],l=t[11],n[0]=u,n[1]=e,n[2]=a,n[3]=o,n[4]=i,n[5]=c,n[6]=f,n[7]=d,n[8]=h,n[9]=s,n[10]=M,n[11]=l,n[12]=u*v+i*b+h*m+t[12],n[13]=e*v+c*b+s*m+t[13],n[14]=a*v+f*b+M*m+t[14],n[15]=o*v+d*b+l*m+t[15]),n}function y(n,t,r){var u=r[0],e=r[1],a=r[2];return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*u,n[3]=t[3]*u,n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7]*e,n[8]=t[8]*a,n[9]=t[9]*a,n[10]=t[10]*a,n[11]=t[11]*a,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function w(n,t,r,u){var e,a,o,c,f,d,h,s,M,l,v,b,m,p,g,A,x,y,w,q,S,T,P,R,F=u[0],E=u[1],I=u[2],_=Math.sqrt(F*F+E*E+I*I);return _<i?null:(F*=_=1/_,E*=_,I*=_,e=Math.sin(r),o=1-(a=Math.cos(r)),c=t[0],f=t[1],d=t[2],h=t[3],s=t[4],M=t[5],l=t[6],v=t[7],b=t[8],m=t[9],p=t[10],g=t[11],A=F*F*o+a,x=E*F*o+I*e,y=I*F*o-E*e,w=F*E*o-I*e,q=E*E*o+a,S=I*E*o+F*e,T=F*I*o+E*e,P=E*I*o-F*e,R=I*I*o+a,n[0]=c*A+s*x+b*y,n[1]=f*A+M*x+m*y,n[2]=d*A+l*x+p*y,n[3]=h*A+v*x+g*y,n[4]=c*w+s*q+b*S,n[5]=f*w+M*q+m*S,n[6]=d*w+l*q+p*S,n[7]=h*w+v*q+g*S,n[8]=c*T+s*P+b*R,n[9]=f*T+M*P+m*R,n[10]=d*T+l*P+p*R,n[11]=h*T+v*P+g*R,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)}function q(n,t,r){var u=Math.sin(r),e=Math.cos(r),a=t[4],o=t[5],i=t[6],c=t[7],f=t[8],d=t[9],h=t[10],s=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=a*e+f*u,n[5]=o*e+d*u,n[6]=i*e+h*u,n[7]=c*e+s*u,n[8]=f*e-a*u,n[9]=d*e-o*u,n[10]=h*e-i*u,n[11]=s*e-c*u,n}function S(n,t,r){var u=Math.sin(r),e=Math.cos(r),a=t[0],o=t[1],i=t[2],c=t[3],f=t[8],d=t[9],h=t[10],s=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=a*e-f*u,n[1]=o*e-d*u,n[2]=i*e-h*u,n[3]=c*e-s*u,n[8]=a*u+f*e,n[9]=o*u+d*e,n[10]=i*u+h*e,n[11]=c*u+s*e,n}function T(n,t,r){var u=Math.sin(r),e=Math.cos(r),a=t[0],o=t[1],i=t[2],c=t[3],f=t[4],d=t[5],h=t[6],s=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=a*e+f*u,n[1]=o*e+d*u,n[2]=i*e+h*u,n[3]=c*e+s*u,n[4]=f*e-a*u,n[5]=d*e-o*u,n[6]=h*e-i*u,n[7]=s*e-c*u,n}function P(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function R(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function F(n,t,r){var u,e,a,o=r[0],c=r[1],f=r[2],d=Math.sqrt(o*o+c*c+f*f);return d<i?null:(o*=d=1/d,c*=d,f*=d,u=Math.sin(t),a=1-(e=Math.cos(t)),n[0]=o*o*a+e,n[1]=c*o*a+f*u,n[2]=f*o*a-c*u,n[3]=0,n[4]=o*c*a-f*u,n[5]=c*c*a+e,n[6]=f*c*a+o*u,n[7]=0,n[8]=o*f*a+c*u,n[9]=c*f*a-o*u,n[10]=f*f*a+e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)}function E(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=u,n[6]=r,n[7]=0,n[8]=0,n[9]=-r,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function I(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=0,n[2]=-r,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=r,n[9]=0,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function _(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=r,n[2]=0,n[3]=0,n[4]=-r,n[5]=u,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function L(n,t,r){var u=t[0],e=t[1],a=t[2],o=t[3],i=u+u,c=e+e,f=a+a,d=u*i,h=u*c,s=u*f,M=e*c,l=e*f,v=a*f,b=o*i,m=o*c,p=o*f;return n[0]=1-(M+v),n[1]=h+p,n[2]=s-m,n[3]=0,n[4]=h-p,n[5]=1-(d+v),n[6]=l+b,n[7]=0,n[8]=s+m,n[9]=l-b,n[10]=1-(d+M),n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function C(n,t){var r=new c(3),u=-t[0],e=-t[1],a=-t[2],o=t[3],i=t[4],f=t[5],d=t[6],h=t[7],s=u*u+e*e+a*a+o*o;return s>0?(r[0]=2*(i*o+h*u+f*a-d*e)/s,r[1]=2*(f*o+h*e+d*u-i*a)/s,r[2]=2*(d*o+h*a+i*e-f*u)/s):(r[0]=2*(i*o+h*u+f*a-d*e),r[1]=2*(f*o+h*e+d*u-i*a),r[2]=2*(d*o+h*a+i*e-f*u)),L(n,t,r),n}function O(n,t){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function D(n,t){var r=t[0],u=t[1],e=t[2],a=t[4],o=t[5],i=t[6],c=t[8],f=t[9],d=t[10];return n[0]=Math.sqrt(r*r+u*u+e*e),n[1]=Math.sqrt(a*a+o*o+i*i),n[2]=Math.sqrt(c*c+f*f+d*d),n}function V(n,t){var r=t[0]+t[5]+t[10],u=0;return r>0?(u=2*Math.sqrt(r+1),n[3]=.25*u,n[0]=(t[6]-t[9])/u,n[1]=(t[8]-t[2])/u,n[2]=(t[1]-t[4])/u):t[0]>t[5]&&t[0]>t[10]?(u=2*Math.sqrt(1+t[0]-t[5]-t[10]),n[3]=(t[6]-t[9])/u,n[0]=.25*u,n[1]=(t[1]+t[4])/u,n[2]=(t[8]+t[2])/u):t[5]>t[10]?(u=2*Math.sqrt(1+t[5]-t[0]-t[10]),n[3]=(t[8]-t[2])/u,n[0]=(t[1]+t[4])/u,n[1]=.25*u,n[2]=(t[6]+t[9])/u):(u=2*Math.sqrt(1+t[10]-t[0]-t[5]),n[3]=(t[1]-t[4])/u,n[0]=(t[8]+t[2])/u,n[1]=(t[6]+t[9])/u,n[2]=.25*u),n}function B(n,t,r,u){var e=t[0],a=t[1],o=t[2],i=t[3],c=e+e,f=a+a,d=o+o,h=e*c,s=e*f,M=e*d,l=a*f,v=a*d,b=o*d,m=i*c,p=i*f,g=i*d,A=u[0],x=u[1],y=u[2];return n[0]=(1-(l+b))*A,n[1]=(s+g)*A,n[2]=(M-p)*A,n[3]=0,n[4]=(s-g)*x,n[5]=(1-(h+b))*x,n[6]=(v+m)*x,n[7]=0,n[8]=(M+p)*y,n[9]=(v-m)*y,n[10]=(1-(h+l))*y,n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function j(n,t,r,u,e){var a=t[0],o=t[1],i=t[2],c=t[3],f=a+a,d=o+o,h=i+i,s=a*f,M=a*d,l=a*h,v=o*d,b=o*h,m=i*h,p=c*f,g=c*d,A=c*h,x=u[0],y=u[1],w=u[2],q=e[0],S=e[1],T=e[2],P=(1-(v+m))*x,R=(M+A)*x,F=(l-g)*x,E=(M-A)*y,I=(1-(s+m))*y,_=(b+p)*y,L=(l+g)*w,C=(b-p)*w,O=(1-(s+v))*w;return n[0]=P,n[1]=R,n[2]=F,n[3]=0,n[4]=E,n[5]=I,n[6]=_,n[7]=0,n[8]=L,n[9]=C,n[10]=O,n[11]=0,n[12]=r[0]+q-(P*q+E*S+L*T),n[13]=r[1]+S-(R*q+I*S+C*T),n[14]=r[2]+T-(F*q+_*S+O*T),n[15]=1,n}function U(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=r+r,i=u+u,c=e+e,f=r*o,d=u*o,h=u*i,s=e*o,M=e*i,l=e*c,v=a*o,b=a*i,m=a*c;return n[0]=1-h-l,n[1]=d+m,n[2]=s-b,n[3]=0,n[4]=d-m,n[5]=1-f-l,n[6]=M+v,n[7]=0,n[8]=s+b,n[9]=M-v,n[10]=1-f-h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function z(n,t,r,u,e,a,o){var i=1/(r-t),c=1/(e-u),f=1/(a-o);return n[0]=2*a*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2*a*c,n[6]=0,n[7]=0,n[8]=(r+t)*i,n[9]=(e+u)*c,n[10]=(o+a)*f,n[11]=-1,n[12]=0,n[13]=0,n[14]=o*a*2*f,n[15]=0,n}function k(n,t,r,u,e){var a,o=1/Math.tan(t/2);return n[0]=o/r,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,null!=e&&e!==1/0?(a=1/(u-e),n[10]=(e+u)*a,n[14]=2*e*u*a):(n[10]=-1,n[14]=-2*u),n}function Y(n,t,r,u){var e=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),i=Math.tan(t.rightDegrees*Math.PI/180),c=2/(o+i),f=2/(e+a);return n[0]=c,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=f,n[6]=0,n[7]=0,n[8]=-(o-i)*c*.5,n[9]=(e-a)*f*.5,n[10]=u/(r-u),n[11]=-1,n[12]=0,n[13]=0,n[14]=u*r/(r-u),n[15]=0,n}function G(n,t,r,u,e,a,o){var i=1/(t-r),c=1/(u-e),f=1/(a-o);return n[0]=-2*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*f,n[11]=0,n[12]=(t+r)*i,n[13]=(e+u)*c,n[14]=(o+a)*f,n[15]=1,n}function W(n,t,r,u){var e,a,o,c,f,d,h,s,M,l,b=t[0],m=t[1],p=t[2],g=u[0],A=u[1],x=u[2],y=r[0],w=r[1],q=r[2];return Math.abs(b-y)<i&&Math.abs(m-w)<i&&Math.abs(p-q)<i?v(n):(h=b-y,s=m-w,M=p-q,e=A*(M*=l=1/Math.sqrt(h*h+s*s+M*M))-x*(s*=l),a=x*(h*=l)-g*M,o=g*s-A*h,(l=Math.sqrt(e*e+a*a+o*o))?(e*=l=1/l,a*=l,o*=l):(e=0,a=0,o=0),c=s*o-M*a,f=M*e-h*o,d=h*a-s*e,(l=Math.sqrt(c*c+f*f+d*d))?(c*=l=1/l,f*=l,d*=l):(c=0,f=0,d=0),n[0]=e,n[1]=c,n[2]=h,n[3]=0,n[4]=a,n[5]=f,n[6]=s,n[7]=0,n[8]=o,n[9]=d,n[10]=M,n[11]=0,n[12]=-(e*b+a*m+o*p),n[13]=-(c*b+f*m+d*p),n[14]=-(h*b+s*m+M*p),n[15]=1,n)}function H(n,t,r,u){var e=t[0],a=t[1],o=t[2],i=u[0],c=u[1],f=u[2],d=e-r[0],h=a-r[1],s=o-r[2],M=d*d+h*h+s*s;M>0&&(d*=M=1/Math.sqrt(M),h*=M,s*=M);var l=c*s-f*h,v=f*d-i*s,b=i*h-c*d;return(M=l*l+v*v+b*b)>0&&(l*=M=1/Math.sqrt(M),v*=M,b*=M),n[0]=l,n[1]=v,n[2]=b,n[3]=0,n[4]=h*b-s*v,n[5]=s*l-d*b,n[6]=d*v-h*l,n[7]=0,n[8]=d,n[9]=h,n[10]=s,n[11]=0,n[12]=e,n[13]=a,n[14]=o,n[15]=1,n}function N(n){return"mat4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+", "+n[6]+", "+n[7]+", "+n[8]+", "+n[9]+", "+n[10]+", "+n[11]+", "+n[12]+", "+n[13]+", "+n[14]+", "+n[15]+")"}function Q(n){return Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2)+Math.pow(n[2],2)+Math.pow(n[3],2)+Math.pow(n[4],2)+Math.pow(n[5],2)+Math.pow(n[6],2)+Math.pow(n[7],2)+Math.pow(n[8],2)+Math.pow(n[9],2)+Math.pow(n[10],2)+Math.pow(n[11],2)+Math.pow(n[12],2)+Math.pow(n[13],2)+Math.pow(n[14],2)+Math.pow(n[15],2))}function X(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n[4]=t[4]+r[4],n[5]=t[5]+r[5],n[6]=t[6]+r[6],n[7]=t[7]+r[7],n[8]=t[8]+r[8],n[9]=t[9]+r[9],n[10]=t[10]+r[10],n[11]=t[11]+r[11],n[12]=t[12]+r[12],n[13]=t[13]+r[13],n[14]=t[14]+r[14],n[15]=t[15]+r[15],n}function Z(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n[4]=t[4]-r[4],n[5]=t[5]-r[5],n[6]=t[6]-r[6],n[7]=t[7]-r[7],n[8]=t[8]-r[8],n[9]=t[9]-r[9],n[10]=t[10]-r[10],n[11]=t[11]-r[11],n[12]=t[12]-r[12],n[13]=t[13]-r[13],n[14]=t[14]-r[14],n[15]=t[15]-r[15],n}function K(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*r,n[5]=t[5]*r,n[6]=t[6]*r,n[7]=t[7]*r,n[8]=t[8]*r,n[9]=t[9]*r,n[10]=t[10]*r,n[11]=t[11]*r,n[12]=t[12]*r,n[13]=t[13]*r,n[14]=t[14]*r,n[15]=t[15]*r,n}function J(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n[4]=t[4]+r[4]*u,n[5]=t[5]+r[5]*u,n[6]=t[6]+r[6]*u,n[7]=t[7]+r[7]*u,n[8]=t[8]+r[8]*u,n[9]=t[9]+r[9]*u,n[10]=t[10]+r[10]*u,n[11]=t[11]+r[11]*u,n[12]=t[12]+r[12]*u,n[13]=t[13]+r[13]*u,n[14]=t[14]+r[14]*u,n[15]=t[15]+r[15]*u,n}function $(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]&&n[4]===t[4]&&n[5]===t[5]&&n[6]===t[6]&&n[7]===t[7]&&n[8]===t[8]&&n[9]===t[9]&&n[10]===t[10]&&n[11]===t[11]&&n[12]===t[12]&&n[13]===t[13]&&n[14]===t[14]&&n[15]===t[15]}function nn(n,t){var r=n[0],u=n[1],e=n[2],a=n[3],o=n[4],c=n[5],f=n[6],d=n[7],h=n[8],s=n[9],M=n[10],l=n[11],v=n[12],b=n[13],m=n[14],p=n[15],g=t[0],A=t[1],x=t[2],y=t[3],w=t[4],q=t[5],S=t[6],T=t[7],P=t[8],R=t[9],F=t[10],E=t[11],I=t[12],_=t[13],L=t[14],C=t[15];return Math.abs(r-g)<=i*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(u-A)<=i*Math.max(1,Math.abs(u),Math.abs(A))&&Math.abs(e-x)<=i*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(a-y)<=i*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(o-w)<=i*Math.max(1,Math.abs(o),Math.abs(w))&&Math.abs(c-q)<=i*Math.max(1,Math.abs(c),Math.abs(q))&&Math.abs(f-S)<=i*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(d-T)<=i*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(h-P)<=i*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(s-R)<=i*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(M-F)<=i*Math.max(1,Math.abs(M),Math.abs(F))&&Math.abs(l-E)<=i*Math.max(1,Math.abs(l),Math.abs(E))&&Math.abs(v-I)<=i*Math.max(1,Math.abs(v),Math.abs(I))&&Math.abs(b-_)<=i*Math.max(1,Math.abs(b),Math.abs(_))&&Math.abs(m-L)<=i*Math.max(1,Math.abs(m),Math.abs(L))&&Math.abs(p-C)<=i*Math.max(1,Math.abs(p),Math.abs(C))}var tn=A,rn=Z;function un(){var n=new c(2);return c!=Float32Array&&(n[0]=0,n[1]=0),n}function en(n){var t=new c(2);return t[0]=n[0],t[1]=n[1],t}function an(n,t){var r=new c(2);return r[0]=n,r[1]=t,r}function on(n,t){return n[0]=t[0],n[1]=t[1],n}function cn(n,t,r){return n[0]=t,n[1]=r,n}function fn(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n}function dn(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n}function hn(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n}function sn(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n}function Mn(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function ln(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function vn(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n}function bn(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n}function mn(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function pn(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n}function gn(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n}function An(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)}function xn(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u}function yn(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)}function wn(n){var t=n[0],r=n[1];return t*t+r*r}function qn(n,t){return n[0]=-t[0],n[1]=-t[1],n}function Sn(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function Tn(n,t){var r=t[0],u=t[1],e=r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),n[0]=t[0]*e,n[1]=t[1]*e,n}function Pn(n,t){return n[0]*t[0]+n[1]*t[1]}function Rn(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n}function Fn(n,t,r,u){var e=t[0],a=t[1];return n[0]=e+u*(r[0]-e),n[1]=a+u*(r[1]-a),n}function En(n,t){t=t||1;var r=2*f()*Math.PI;return n[0]=Math.cos(r)*t,n[1]=Math.sin(r)*t,n}function In(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[2]*e,n[1]=r[1]*u+r[3]*e,n}function _n(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[2]*e+r[4],n[1]=r[1]*u+r[3]*e+r[5],n}function Ln(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[3]*e+r[6],n[1]=r[1]*u+r[4]*e+r[7],n}function Cn(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[4]*e+r[12],n[1]=r[1]*u+r[5]*e+r[13],n}function On(n,t,r,u){var e=t[0]-r[0],a=t[1]-r[1],o=Math.sin(u),i=Math.cos(u);return n[0]=e*i-a*o+r[0],n[1]=e*o+a*i+r[1],n}function Dn(n,t){var r=n[0],u=n[1],e=t[0],a=t[1],o=r*r+u*u;o>0&&(o=1/Math.sqrt(o));var i=e*e+a*a;i>0&&(i=1/Math.sqrt(i));var c=(r*e+u*a)*o*i;return c>1?0:c<-1?Math.PI:Math.acos(c)}function Vn(n){return n[0]=0,n[1]=0,n}function Bn(n){return"vec2("+n[0]+", "+n[1]+")"}function jn(n,t){return n[0]===t[0]&&n[1]===t[1]}function Un(n,t){var r=n[0],u=n[1],e=t[0],a=t[1];return Math.abs(r-e)<=i*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-a)<=i*Math.max(1,Math.abs(u),Math.abs(a))}var zn,kn=yn,Yn=dn,Gn=hn,Wn=sn,Hn=An,Nn=xn,Qn=wn,Xn=(zn=un(),function(n,t,r,u,e,a){var o,i;for(t||(t=2),r||(r=0),i=u?Math.min(u*t+r,n.length):n.length,o=r;o<i;o+=t)zn[0]=n[o],zn[1]=n[o+1],e(zn,zn,a),n[o]=zn[0],n[o+1]=zn[1];return n});function Zn(){var n=new c(3);return c!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function Kn(n){var t=new c(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Jn(n){var t=n[0],r=n[1],u=n[2];return Math.sqrt(t*t+r*r+u*u)}function $n(n,t,r){var u=new c(3);return u[0]=n,u[1]=t,u[2]=r,u}function nt(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function tt(n,t,r,u){return n[0]=t,n[1]=r,n[2]=u,n}function rt(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n}function ut(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n}function et(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n}function at(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n}function ot(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n}function it(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n}function ct(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n}function ft(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n}function dt(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n}function ht(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n}function st(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n}function Mt(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2];return Math.sqrt(r*r+u*u+e*e)}function lt(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2];return r*r+u*u+e*e}function vt(n){var t=n[0],r=n[1],u=n[2];return t*t+r*r+u*u}function bt(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function mt(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function pt(n,t){var r=t[0],u=t[1],e=t[2],a=r*r+u*u+e*e;return a>0&&(a=1/Math.sqrt(a)),n[0]=t[0]*a,n[1]=t[1]*a,n[2]=t[2]*a,n}function gt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function At(n,t,r){var u=t[0],e=t[1],a=t[2],o=r[0],i=r[1],c=r[2];return n[0]=e*c-a*i,n[1]=a*o-u*c,n[2]=u*i-e*o,n}function xt(n,t,r,u){var e=t[0],a=t[1],o=t[2];return n[0]=e+u*(r[0]-e),n[1]=a+u*(r[1]-a),n[2]=o+u*(r[2]-o),n}function yt(n,t,r,u,e,a){var o=a*a,i=o*(2*a-3)+1,c=o*(a-2)+a,f=o*(a-1),d=o*(3-2*a);return n[0]=t[0]*i+r[0]*c+u[0]*f+e[0]*d,n[1]=t[1]*i+r[1]*c+u[1]*f+e[1]*d,n[2]=t[2]*i+r[2]*c+u[2]*f+e[2]*d,n}function wt(n,t,r,u,e,a){var o=1-a,i=o*o,c=a*a,f=i*o,d=3*a*i,h=3*c*o,s=c*a;return n[0]=t[0]*f+r[0]*d+u[0]*h+e[0]*s,n[1]=t[1]*f+r[1]*d+u[1]*h+e[1]*s,n[2]=t[2]*f+r[2]*d+u[2]*h+e[2]*s,n}function qt(n,t){t=t||1;var r=2*f()*Math.PI,u=2*f()-1,e=Math.sqrt(1-u*u)*t;return n[0]=Math.cos(r)*e,n[1]=Math.sin(r)*e,n[2]=u*t,n}function St(n,t,r){var u=t[0],e=t[1],a=t[2],o=r[3]*u+r[7]*e+r[11]*a+r[15];return o=o||1,n[0]=(r[0]*u+r[4]*e+r[8]*a+r[12])/o,n[1]=(r[1]*u+r[5]*e+r[9]*a+r[13])/o,n[2]=(r[2]*u+r[6]*e+r[10]*a+r[14])/o,n}function Tt(n,t,r){var u=t[0],e=t[1],a=t[2];return n[0]=u*r[0]+e*r[3]+a*r[6],n[1]=u*r[1]+e*r[4]+a*r[7],n[2]=u*r[2]+e*r[5]+a*r[8],n}function Pt(n,t,r){var u=r[0],e=r[1],a=r[2],o=r[3],i=t[0],c=t[1],f=t[2],d=e*f-a*c,h=a*i-u*f,s=u*c-e*i,M=e*s-a*h,l=a*d-u*s,v=u*h-e*d,b=2*o;return d*=b,h*=b,s*=b,M*=2,l*=2,v*=2,n[0]=i+d+M,n[1]=c+h+l,n[2]=f+s+v,n}function Rt(n,t,r,u){var e=[],a=[];return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],a[0]=e[0],a[1]=e[1]*Math.cos(u)-e[2]*Math.sin(u),a[2]=e[1]*Math.sin(u)+e[2]*Math.cos(u),n[0]=a[0]+r[0],n[1]=a[1]+r[1],n[2]=a[2]+r[2],n}function Ft(n,t,r,u){var e=[],a=[];return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],a[0]=e[2]*Math.sin(u)+e[0]*Math.cos(u),a[1]=e[1],a[2]=e[2]*Math.cos(u)-e[0]*Math.sin(u),n[0]=a[0]+r[0],n[1]=a[1]+r[1],n[2]=a[2]+r[2],n}function Et(n,t,r,u){var e=[],a=[];return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],a[0]=e[0]*Math.cos(u)-e[1]*Math.sin(u),a[1]=e[0]*Math.sin(u)+e[1]*Math.cos(u),a[2]=e[2],n[0]=a[0]+r[0],n[1]=a[1]+r[1],n[2]=a[2]+r[2],n}function It(n,t){var r=$n(n[0],n[1],n[2]),u=$n(t[0],t[1],t[2]);pt(r,r),pt(u,u);var e=gt(r,u);return e>1?0:e<-1?Math.PI:Math.acos(e)}function _t(n){return n[0]=0,n[1]=0,n[2]=0,n}function Lt(n){return"vec3("+n[0]+", "+n[1]+", "+n[2]+")"}function Ct(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]}function Ot(n,t){var r=n[0],u=n[1],e=n[2],a=t[0],o=t[1],c=t[2];return Math.abs(r-a)<=i*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(u-o)<=i*Math.max(1,Math.abs(u),Math.abs(o))&&Math.abs(e-c)<=i*Math.max(1,Math.abs(e),Math.abs(c))}var Dt=ut,Vt=et,Bt=at,jt=Mt,Ut=lt,zt=Jn,kt=vt,Yt=function(){var n=Zn();return function(t,r,u,e,a,o){var i,c;for(r||(r=3),u||(u=0),c=e?Math.min(e*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],n[2]=t[i+2],a(n,n,o),t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2];return t}}();function Gt(){var n=new c(4);return c!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function Wt(n){var t=new c(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Ht(n,t,r,u){var e=new c(4);return e[0]=n,e[1]=t,e[2]=r,e[3]=u,e}function Nt(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Qt(n,t,r,u,e){return n[0]=t,n[1]=r,n[2]=u,n[3]=e,n}function Xt(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n}function Zt(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n}function Kt(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n[3]=t[3]*r[3],n}function Jt(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n[3]=t[3]/r[3],n}function $t(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n[3]=Math.ceil(t[3]),n}function nr(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n[3]=Math.floor(t[3]),n}function tr(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n[3]=Math.min(t[3],r[3]),n}function rr(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n[3]=Math.max(t[3],r[3]),n}function ur(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n[3]=Math.round(t[3]),n}function er(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n}function ar(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n}function or(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2],a=t[3]-n[3];return Math.sqrt(r*r+u*u+e*e+a*a)}function ir(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2],a=t[3]-n[3];return r*r+u*u+e*e+a*a}function cr(n){var t=n[0],r=n[1],u=n[2],e=n[3];return Math.sqrt(t*t+r*r+u*u+e*e)}function fr(n){var t=n[0],r=n[1],u=n[2],e=n[3];return t*t+r*r+u*u+e*e}function dr(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function hr(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n[3]=1/t[3],n}function sr(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=r*r+u*u+e*e+a*a;return o>0&&(o=1/Math.sqrt(o)),n[0]=r*o,n[1]=u*o,n[2]=e*o,n[3]=a*o,n}function Mr(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function lr(n,t,r,u){var e=r[0]*u[1]-r[1]*u[0],a=r[0]*u[2]-r[2]*u[0],o=r[0]*u[3]-r[3]*u[0],i=r[1]*u[2]-r[2]*u[1],c=r[1]*u[3]-r[3]*u[1],f=r[2]*u[3]-r[3]*u[2],d=t[0],h=t[1],s=t[2],M=t[3];return n[0]=h*f-s*c+M*i,n[1]=-d*f+s*o-M*a,n[2]=d*c-h*o+M*e,n[3]=-d*i+h*a-s*e,n}function vr(n,t,r,u){var e=t[0],a=t[1],o=t[2],i=t[3];return n[0]=e+u*(r[0]-e),n[1]=a+u*(r[1]-a),n[2]=o+u*(r[2]-o),n[3]=i+u*(r[3]-i),n}function br(n,t){var r,u,e,a,o,i;t=t||1;do{o=(r=2*f()-1)*r+(u=2*f()-1)*u}while(o>=1);do{i=(e=2*f()-1)*e+(a=2*f()-1)*a}while(i>=1);var c=Math.sqrt((1-o)/i);return n[0]=t*r,n[1]=t*u,n[2]=t*e*c,n[3]=t*a*c,n}function mr(n,t,r){var u=t[0],e=t[1],a=t[2],o=t[3];return n[0]=r[0]*u+r[4]*e+r[8]*a+r[12]*o,n[1]=r[1]*u+r[5]*e+r[9]*a+r[13]*o,n[2]=r[2]*u+r[6]*e+r[10]*a+r[14]*o,n[3]=r[3]*u+r[7]*e+r[11]*a+r[15]*o,n}function pr(n,t,r){var u=t[0],e=t[1],a=t[2],o=r[0],i=r[1],c=r[2],f=r[3],d=f*u+i*a-c*e,h=f*e+c*u-o*a,s=f*a+o*e-i*u,M=-o*u-i*e-c*a;return n[0]=d*f+M*-o+h*-c-s*-i,n[1]=h*f+M*-i+s*-o-d*-c,n[2]=s*f+M*-c+d*-i-h*-o,n[3]=t[3],n}function gr(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n}function Ar(n){return"vec4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}function xr(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]}function yr(n,t){var r=n[0],u=n[1],e=n[2],a=n[3],o=t[0],c=t[1],f=t[2],d=t[3];return Math.abs(r-o)<=i*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-c)<=i*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-f)<=i*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(a-d)<=i*Math.max(1,Math.abs(a),Math.abs(d))}var wr=Zt,qr=Kt,Sr=Jt,Tr=or,Pr=ir,Rr=cr,Fr=fr,Er=function(){var n=Gt();return function(t,r,u,e,a,o){var i,c;for(r||(r=4),u||(u=0),c=e?Math.min(e*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],n[2]=t[i+2],n[3]=t[i+3],a(n,n,o),t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3];return t}}();r.d(t,"a",function(){return u}),r.d(t,"b",function(){return e}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o})},1:function(n,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return d});var u=r(0);"undefined"!=typeof Float32Array?Float32Array:Array;var e='This page requires a browser that supports WebGL.<br/>\n<a href="http://get.webgl.org">Click here to upgrade your browser.</a>',a='It doesn\'t appear your computer can support WebGL.<br/>\n<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';function o(n,t){function r(t){var r=n.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n    <td align="center">\n    <div style="display: table-cell; vertical-align: middle;">\n    <div>'.concat(t,"</div>\n    </div>\n    </td></tr></table>"))}if(!window.WebGLRenderingContext)return r(e),null;var u=function(n,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],u=null,e=0;e<r.length;++e){try{u=n.getContext(r[e],t)}catch(n){}if(u)break}return u}(n,t);return u||r(a),u}function i(n,t,r){var u=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(u,t),n.compileShader(u),!n.getShaderParameter(u,n.COMPILE_STATUS)){var e="Vertex shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(u));return console.error(e),-1}var a=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(a,r),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS)){var o="Fragment shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(a));return console.error(o),-1}var i=n.createProgram();if(n.attachShader(i,u),n.attachShader(i,a),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS)){var c="Shader program failed to link.  The error log is:".concat(n.getProgramInfoLog(i));return console.error(c),-1}return i}function c(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Float32Array,r=n[0].length,u=n.length,e=new t(r*u),a=0,o=0;o<u;o++)for(var i=0;i<r;i++)e[a++]=n[o][i];return e}var f={fv3:{},fv4:{},uv3:{},uv4:{}};function d(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fv4";if(f[t][n])return f[t][n];var r,e=parseInt(n.charAt(1)+n.charAt(2),16),a=parseInt(n.charAt(3)+n.charAt(4),16),o=parseInt(n.charAt(5)+n.charAt(6),16);return r="fv3"===t?u.c.fromValues(e/255,a/255,o/255):"fv4"===t?u.d.fromValues(e/255,a/255,o/255,1):"uv3"===t?new Uint8Array([e,a,o]):new Uint8Array([e,a,o,255]),f[t][n]=r,f[t][n]}},44:function(n,t){n.exports="attribute vec4 vPosition;\nattribute vec3 vColor;\nvarying vec4 fColor;\nvoid main() {\n\tfColor = vec4(vColor, 1.0);\n\tgl_PointSize = 1.0;\n\tgl_Position = vPosition;\n}\n"},45:function(n,t){n.exports="precision mediump float;\nvarying vec4 fColor;\nvoid main() {\n\tgl_FragColor = fColor;\n}\n"},82:function(n,t,r){"use strict";r.r(t);var u,e=r(1),a=r(0),o=r(44),i=r.n(o),c=r(45),f=r.n(c),d="undefined"!=typeof Float32Array?Float32Array:Array,h=[],s=[],M=[1,0,0],l=[0,1,0],v=[0,0,1],b=[0,0,0],m=3;function p(n,t,r,u){s.push(u,u,u),h.push(n,t,r)}function g(n,t,r,u){var e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:m;if(e<=0)!function(n,t,r,u){p(n,r,t,M),p(n,r,u,l),p(n,t,u,v),p(t,r,u,b)}(n,t,r,u);else{var o=a.c.lerp(d.of(0,0,0),n,t,.5),i=a.c.lerp(d.of(0,0,0),n,r,.5),c=a.c.lerp(d.of(0,0,0),n,u,.5),f=a.c.lerp(d.of(0,0,0),t,r,.5),h=a.c.lerp(d.of(0,0,0),t,u,.5),s=a.c.lerp(d.of(0,0,0),r,u,.5);g(n,o,i,c,--e),g(o,t,f,h,e),g(i,f,r,s,e),g(c,h,s,u,e)}}!function(){var n=document.getElementById("gl-canvas");(u=Object(e.d)(n))||console.error("WebGL isn't available");var t=[a.c.fromValues(0,0,-1),a.c.fromValues(0,.9428,.3333),a.c.fromValues(-.8165,-.4714,.3333),a.c.fromValues(.8165,-.4714,.3333)];g.apply(void 0,t),u.viewport(0,0,n.width,n.height),u.clearColor(1,1,1,1);var r=Object(e.a)(u,i.a,f.a);u.useProgram(r),u.enable(u.DEPTH_TEST);var o=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,o),u.bufferData(u.ARRAY_BUFFER,Object(e.c)(s),u.STATIC_DRAW);var c=u.getAttribLocation(r,"vColor");u.vertexAttribPointer(c,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(c);var d=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,d),u.bufferData(u.ARRAY_BUFFER,Object(e.c)(h),u.STATIC_DRAW);var M=u.getAttribLocation(r,"vPosition");u.vertexAttribPointer(M,3,u.FLOAT,!1,0,0),u.enableVertexAttribArray(M),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,h.length)}()}});