
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true, //自动播放
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })   
  //鼠标覆盖停止自动切换
mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
}
  
  //鼠标离开开始自动切换
mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
}     


//倒计时
function getTwo(n){
  return n<10 ? '0'+n : n;
}
// 获取到页面这元素
var nums = document.getElementsByClassName('num');
// 声明未来时间
var future_time = new Date('2020-3-3 21:55:50');
function print_time(){
    // 声明现在时间
    var now_time = new Date();
    // 声明剩余时间
    var remaining_time = Math.ceil( (future_time - now_time)/1000 );// 3155.357  => 3156  10089
    // 检测剩余时间
    if( remaining_time>=0 ){
         // 对秒钟数进行时间的换算
        var hour = Math.floor(remaining_time/3600);
        var min = Math.floor(remaining_time%3600/60);
        var sec = remaining_time%60;
        // 组装出时分秒的字符串
        var str = ''+getTwo(hour)+getTwo(min)+getTwo(sec);
        // 遍历字符串，将每一个字符串放入对应的div中
        for( var i=0;i<str.length;i++ ){
          nums[i].innerText = str.charAt(i);
        }
        // console.log("还剩"+hour+"时"+min+"分"+sec+"秒");
    }
   
}
var timer = setInterval(print_time,1000);