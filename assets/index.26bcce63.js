import{R as e,a as t}from"./vendor.cd7509fb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function a(){return e.createElement("div",null,e.createElement("header",{className:"header"},e.createElement("div",{className:"logo"},e.createElement("img",{src:"/assets/logo.52c99cbd.jpg",alt:""})),e.createElement("button",{id:"nav-toggle","aria-label":"toggle navigation"},e.createElement("i",{className:"fas fa-bars"})),e.createElement("nav",{className:"nav"},e.createElement("ul",{className:"nav-list"},e.createElement("li",{className:"nav-item"},e.createElement("a",{href:"#home",className:"nav-link"},"Home")),e.createElement("li",{className:"nav-item"},e.createElement("a",{href:"#services",className:"nav-link"},"My services")),e.createElement("li",{className:"nav-item"},e.createElement("a",{href:"#aboutme",className:"nav-link"},"About me")),e.createElement("li",{className:"nav-item"},e.createElement("a",{href:"#mywork",className:"nav-link"},"My work"))))),e.createElement("section",{id:"home"},e.createElement("h1",null,"Hello, I am ",e.createElement("strong",null,"Xuer")," "),e.createElement("p",null,"Programmer"),e.createElement("img",{src:"/assets/profile.52771442.jpg",alt:""})),e.createElement("section",{id:"services"},e.createElement("h2",null,"What I do"),e.createElement("div",{className:"services"},e.createElement("div",{className:"service"},e.createElement("h3",null,"Design + Development"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),e.createElement("div",{className:"service"},e.createElement("h3",null,"E-Commerce"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),e.createElement("div",{className:"service"},e.createElement("h3",null,"Technical Support"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))),e.createElement("a",{href:"#"},"see my work")),e.createElement("section",{id:"aboutme"}),e.createElement("section",{id:"mywork"}))}t.render(e.createElement(e.StrictMode,null,e.createElement(a,null)),document.getElementById("root"));