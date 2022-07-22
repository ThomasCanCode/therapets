const scrollElements = document.querySelectorAll(".js_scroll");
scrollElements.forEach((el) => {
    el.style.opacity = 0
  });

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

   
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }
    })
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })

  handleScrollAnimation();



  var elementList = document.querySelectorAll("#mobile_menu a");
  for (var i = 0; i < elementList.length; i++) {
    elementList[i].addEventListener("click", function() {
      document.getElementById('burgerContainer').classList.toggle('change') 
      document.getElementById('mobile_menu').classList.toggle('change') 
    });
}

!function(){"use strict";var a=window.location,r=window.document,t=window.localStorage,o=r.currentScript,s=o.getAttribute("data-api")||  new URL(o.src.replace('therapets.xyz','plausible.thomasdev.io')).origin+"/api/event",l=t&&t.plausible_ignore;function p(t){console.warn("Ignoring Event: "+t)}function e(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==l)return p("localStorage flag");var i={};i.n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=JSON.stringify(e.props));var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4==n.readyState&&e&&e.callback&&e.callback()}}}var i=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,w=0;w<i.length;w++)e.apply(this,i[w]);function d(){n!==a.pathname&&(n=a.pathname,e("pageview"))}var u,c=window.history;c.pushState&&(u=c.pushState,c.pushState=function(){u.apply(this,arguments),d()},window.addEventListener("popstate",d)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){n||"visible"!==r.visibilityState||d()}):d()}();