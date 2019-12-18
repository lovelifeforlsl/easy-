var screenwidth=window.screen.width;
    screenwidth=screenwidth>=600?600:screenwidth
    console.log(screenwidth)
var rem=screenwidth/10
document.getElementsByTagName("html")[0].style.fontSize = rem + 'px';
document.getElementsByTagName("body")[0].style.fontSize ='16px';