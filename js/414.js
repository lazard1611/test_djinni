"use strict";(self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[]).push([[414],{414:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});const r=function(){var e=document.querySelectorAll(".js-card-content");e.length&&e.forEach((function(e){var t=e.querySelector("p"),a=e.querySelector("button");if(t&&a){var r=t.clientHeight,o=document.createElement("div");o.style.whiteSpace="pre",o.innerHTML="A",t.appendChild(o);var i=o.clientHeight;t.removeChild(o);var n=Math.floor(r/i),c=!0;n>2&&(a.style.display="block",t.style.maxHeight="".concat(2*i,"px"),a.addEventListener("click",(function(){c?(a.innerText="Less more...",t.style.transition="max-height .3s ease-in-out",t.style.maxHeight="".concat(r,"px"),c=!1):(a.innerText="Show more...",t.style.transition="max-height .3s ease-in-out",t.style.maxHeight="".concat(2*i,"px"),c=!0)})))}}))};var o=a(358),i=a(546);const n=function(){var e=".js-animation",t=".js-fade",a=document.querySelector(e);if(a){var r=a.querySelectorAll(t);o.ZP.registerPlugin(i.ScrollTrigger);var n=o.ZP.timeline({paused:!0});i.ScrollTrigger.create({trigger:a,start:"top-=100 top",end:"bottom bottom",animation:n}),n.fromTo(a,{opacity:0},{opacity:1,delay:.2}),n.fromTo(r,{opacity:0},{opacity:1,delay:.2,stagger:.4,duration:.4})}};const c=function(){n(),r()}}}]);