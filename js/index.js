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

      function toggleOptions() {
      var options = document.getElementById('options');
      
      if (options.style.visibility === 'hidden') {
        options.style.visibility = 'visible';
      } else {
        options.style.visibility = 'hidden';
      }
    }
    
    function setBackground(selection) {
      var background;
      
      switch (selection) {
        case 'option1':
          background = getRandomBackground(['images/na1.png', 'images/na2.jpg', 'images/na3.png']);
          break;
        case 'option2':
          background = getRandomBackground(['images/LL1.png', 'images/LL2.jpg', 'images/LL3.jpg','images/LL4.jpg','images/LL6.png','images/LL7.jpg']);
          break;
        case 'option3':
          background = getRandomBackground(['image7.jpg', 'image8.jpg', 'image9.jpg']);
          break;
        default:
          background = '';
      }
      
      // 将选择的值保存在localStorage中
      localStorage.setItem('background', background);
      
      applyBackground(background);
      
      // 隐藏选项框
      document.getElementById('options').style.visibility = 'hidden';
    }
    
    function getRandomBackground(images) {
      var randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }
    
    function applyBackground(background) {
      document.body.style.backgroundImage = 'url(' + background + ')';
    }
    
    // 页面加载完成时应用之前保存的背景图片
    document.addEventListener('DOMContentLoaded', function() {
      var background = localStorage.getItem('background');
      if (background) {
        applyBackground(background);
      }
    });
    
    // 显示选项框
    window.onload = function() {
      document.getElementById('options').style.visibility = 'visible';
    };