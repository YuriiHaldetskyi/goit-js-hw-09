const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,t.addEventListener("click",(function(d){e.disabled=!1,t.disabled=!0,timeId=setInterval((t=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(d){clearInterval(timeId),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.cd1dad34.js.map
