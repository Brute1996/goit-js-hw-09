const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=!0,a=null;e.disabled=!0,t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,d&&(a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)),d=!1})),e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,clearInterval(a),d=!0}));
//# sourceMappingURL=01-color-switcher.af7bd17f.js.map