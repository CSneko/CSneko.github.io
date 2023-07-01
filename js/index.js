window.onload = function() {
  var userAgent = navigator.userAgent.toLowerCase();
  var htmlElement = document.getElementsByTagName('html')[0];
  
  if (/mobile|android|iphone|ipad|webos|blackberry|iemobile|opera mini/i.test(userAgent)) {
    htmlElement.classList.add('mobile-style');
  } else {
    htmlElement.classList.add('desktop-style');
  }
};
/* 设置侧边栏的宽度为250px，页面内容的左边距为250px */
function openNav() {
  document.getElementById("c侧边栏").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* 设置侧边栏宽度为0，页面内容左边距为0 */
function closeNav() {
  document.getElementById("c侧边栏").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}