"use strict";function getList(){$.ajax({url:"../lib/nav_top.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+="<li>".concat(n.name,"</li>")}),$(".nav_top > ul").html(t).on({mouseenter:function(){return $(".nav_box").stop().slideDown()},mouseleave:function(){return $(".nav_box").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,o="";t.forEach(function(n){o+='\n              <li>\n                <div>\n                  <img src="'.concat(n.list_url,'" alt="">\n                </div>\n                <p class="title">').concat(n.list_name,'</p>\n                <span class="price">').concat(n.list_price,"</span>\n              </li>\n            ")}),$(".nav_box > ul").html(o)}),$(".nav_box").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().slideUp()}})}})}function get_left(){$.ajax({url:"../lib/right.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+="<li>".concat(n.name,"</li>")}),$(".lbt_l > ul").html(t).on({mouseenter:function(){return $(".lbt_r").stop().slideDown()},mouseleave:function(){return $(".lbt_r").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,o="";t.forEach(function(n){o+='\n              <li>\n                <div>\n                  <img src="'.concat(n.list_url,'" alt="">\n                </div>\n                <span class="title">').concat(n.list_name,"</span>\n              </li>\n            ")}),$(".lbt_r > ul").html(o)}),$(".lbt_r").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().slideUp()}})}})}function getTwo(n){return n<10?"0"+n:n}getList(),get_left(),(mySwiper=new Swiper(".lbt_big",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})).el.onmouseover=function(){mySwiper.autoplay.stop()},mySwiper.el.onmouseout=function(){mySwiper.autoplay.start()};var nums=document.getElementsByClassName("num"),future_time=new Date("2020-3-11 12:00:00");function print_time(){var n=new Date,t=Math.ceil((future_time-n)/1e3);if(0<=t)for(var o=Math.floor(t/3600),i=Math.floor(t%3600/60),e=t%60,l=""+getTwo(o)+getTwo(i)+getTwo(e),s=0;s<l.length;s++)nums[s].innerText=l.charAt(s)}var timer=setInterval(print_time,1e3),mySwiper=new Swiper(".lbt_small_1",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function five(){$.ajax({url:"../lib/main1.json",dataType:"json",success:function(n){console.log(n);var t="";n.forEach(function(n){t+='\n        <li>\n            <img src="'.concat(n.list_url,'" alt="">\n            <p>').concat(n.list_name,"</p>\n            <span>").concat(n.list_js,"</span>\n            <h6>").concat(n.list_price,"</h6>\n          </li>\n        ")}),$(".m52 > ul").html(t)}})}five(),$(window).scroll(function(){300<=$(window).scrollTop()?$(".back_top").fadeIn():$(".back_top").fadeOut()}),$(".back_top").click(function(){$("html").animate({scrollTop:0},1e3)}),$(".swiper-wrapper").click(function(){event.stopPropagation(),window.location.href="http://www.yzq.com:8080/pages/list.html"});