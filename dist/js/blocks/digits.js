(self.webpackChunkskeleton_theme=self.webpackChunkskeleton_theme||[]).push([[6149],{6273:()=>{function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=null==e?void 0:e.querySelector(".digits-item__number");if(n){n.style.width="".concat(n.offsetWidth,"px"),e.startTimestamp=null;window.requestAnimationFrame((function i(r){e.startTimestamp||(e.startTimestamp=r);var s=Math.min((r-e.startTimestamp)/t,1);n.innerHTML=Math.floor(s*(n.dataset.number-1)+1),s<1?window.requestAnimationFrame(i):n.style.width="auto"}))}}window.addEventListener("load",(function(){var t=document.querySelectorAll(".digits-item");if(null!=t&&t.length){var n=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(e(t.target),n.unobserve(t.target))}))}),{threshold:.2});t.forEach((function(e){n.observe(e)})),window.addEventListener("mouseover",(function(t){var n,i=t.target.closest(".digits-item");!i||null!==(n=t.relatedTarget)&&void 0!==n&&n.closest(".digits-item")||e(i)}))}}))}},e=>{var t;t=6273,e(e.s=t)}]);