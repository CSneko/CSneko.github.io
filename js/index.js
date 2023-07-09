function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
window.onload = function() {
  var userAgent = navigator.userAgent.toLowerCase();
  var htmlElement = document.getElementsByTagName('html')[0];
  
  if (/mobile|android|iphone|ipad|webos|blackberry|iemobile|opera mini/i.test(userAgent)) {
    htmlElement.classList.add('mobile-style');
  } else {
    htmlElement.classList.add('desktop-style');
  }
};
