"use strict";function getList(){$.ajax({url:"../lib/nav_top.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+="<li>".concat(n.name,"</li>")}),$(".nav_top > ul").html(t).on({mouseenter:function(){return $(".nav_box").stop().slideDown()},mouseleave:function(){return $(".nav_box").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,e="";t.forEach(function(n){e+='\n              <li>\n                <div>\n                  <img src="'.concat(n.list_url,'" alt="">\n                </div>\n                <p class="title">').concat(n.list_name,'</p>\n                <span class="price">').concat(n.list_price,"</span>\n              </li>\n            ")}),$(".nav_box > ul").html(e)}),$(".nav_box").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().slideUp()}})}})}function get_left(){$.ajax({url:"../lib/right.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+="<li>".concat(n.name,"</li>")}),$(".lbt_l > ul").html(t).on({mouseenter:function(){return $(".lbt_r").stop().slideDown()},mouseleave:function(){return $(".lbt_r").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,e="";t.forEach(function(n){e+='\n              <li>\n                <div>\n                  <img src="'.concat(n.list_url,'" alt="">\n                </div>\n                <span class="title">').concat(n.list_name,"</span>\n              </li>\n            ")}),$(".lbt_r > ul").html(e)}),$(".lbt_r").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().slideUp()}})}})}function getTwo(n){return n<10?"0"+n:n}getList(),get_left(),(mySwiper=new Swiper(".lbt_big",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})).el.onmouseover=function(){mySwiper.autoplay.stop()},mySwiper.el.onmouseout=function(){mySwiper.autoplay.start()};var nums=document.getElementsByClassName("num"),future_time=new Date("2020-3-3 21:55:50");function print_time(){var n=new Date,t=Math.ceil((future_time-n)/1e3);if(0<=t)for(var e=Math.floor(t/3600),i=Math.floor(t%3600/60),o=t%60,s=""+getTwo(e)+getTwo(i)+getTwo(o),l=0;l<s.length;l++)nums[l].innerText=s.charAt(l)}var timer=setInterval(print_time,1e3),mySwiper=new Swiper(".lbt_small_1",{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});