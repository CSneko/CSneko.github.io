/*
window.addEventListener('DOMContentLoaded',(event) => {
	UA();
});
//定义函数:获取浏览器使用设备
function UA()
{
//获取窗口宽度
	var wwidth = window.innerWidth || document.documentElement.clientWidth;
	if (wwidth < 768){
		document.getElementById("title").classList.add('mobile-style');
	}
	else{
		document.getElementById("title").classList.add('desktop-style');
	}
}
*/
window.onload = function() {
  var userAgent = navigator.userAgent.toLowerCase();
  var htmlElement = document.getElementsByTagName('html')[0];
  
  if (userAgent.indexOf('mobile') !== -1) {
    htmlElement.classList.add('mobile-style');
  } else {
    htmlElement.classList.add('desktop-style');
  }
};
