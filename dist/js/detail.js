"use strict";var goodsInfo=JSON.parse(localStorage.getItem("goods_info"));console.log(goodsInfo);var str="";str+='\n<div class="left">\n    <img src="'.concat(goodsInfo.list_url,'">\n</div>\n<div class="right">\n    <p>').concat(goodsInfo.list_name,"</p>\n    <p>").concat(goodsInfo.list_desc,"</p>\n    <p>").concat(goodsInfo.list_price,"</p>\n    <p>宣城市宣州区</p>\n    <p>加入购物车</p>\n</div>\n"),$(".box").html(str);