"use strict";(self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[]).push([[553],{553:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(755);const i=function(){var e=1;a(window).scroll((function(){a(window).scrollTop()+a(window).height()===a(document).height()&&a.ajax({url:"https://picsum.photos/v2/list?page=1&limit=9",data:{page:e},success:function(t){""!==t&&(a("#card-container").append(t),e+=1)}})}))};const o=function(){var e=document.querySelectorAll(".js-card-content");e.length&&e.forEach((function(e){var t=e.querySelector("p"),n=e.querySelector("button");if(t&&n){var a=t.clientHeight,i=document.createElement("div");i.style.whiteSpace="pre",i.innerHTML="A",t.appendChild(i);var o=i.clientHeight;t.removeChild(i);var r=Math.floor(a/o),c=!0;r>2&&(n.style.display="block",t.style.maxHeight="".concat(2*o,"px"),n.addEventListener("click",(function(){c?(n.innerText="Less more...",t.style.transition="max-height .3s ease-in-out",t.style.maxHeight="".concat(a,"px"),c=!1):(n.innerText="Show more...",t.style.transition="max-height .3s ease-in-out",t.style.maxHeight="".concat(2*o,"px"),c=!0)})))}}))};var r=n(358),c=n(546);const l=function(){var e=".js-animation",t=".js-fade",n=document.querySelector(e);if(n){var a=n.querySelectorAll(t);r.ZP.registerPlugin(c.ScrollTrigger);var i=r.ZP.timeline({paused:!0});c.ScrollTrigger.create({trigger:n,start:"top-=100 top",end:"bottom bottom",markers:!0,animation:i}),i.fromTo(a,{opacity:0},{opacity:1,delay:.2,stagger:.4,duration:.4})}};const s=function(){l(),i(),o()}}}]);