UA();
//定义函数:获取浏览器使用设备
function UA()
{
//获取窗口宽度
var wwidth = window.screen.width;
if (wwidth < 768){
	document.body.classList.add('mobile-style');
}
else{
	document.body.classList.add('desktop-style');
}