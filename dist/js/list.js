"use strict";function data(){$.ajax({url:"../lib/list.json",dataType:"json",success:function(n){var c="";n.forEach(function(n){c+='\n        <li>\n            <img src="'.concat(n.list_url,'" alt="">\n            <p>').concat(n.list_name,"</p>\n            <p>").concat(n.list_desc,"</p>\n            <p>").concat(n.list_price,"</p>\n            <p>").concat(n.list_gwc,"</p>\n          </li>\n        ")}),$(".box > ul").html(c)}})}data(),$(".btn_1").click(function(){$.ajax({url:"../lib/list.json",dataType:"json",success:function(n){var t="list_price",c=n;c.sort(function(n,c){return n[t]>c[t]?1:-1});var i="";c.forEach(function(n){i+='\n                <li>\n                    <img src="'.concat(n.list_url,'" alt="">\n                    <p>').concat(n.list_name,"</p>\n                    <p>").concat(n.list_desc,"</p>\n                    <p>").concat(n.list_price,"</p>\n                    <p>").concat(n.list_gwc,"</p>\n                </li>\n                ")}),$(".box > ul").html(i)}})}),$(".btn_2").click(function(){$.ajax({url:"../lib/list.json",dataType:"json",success:function(n){var t="list_price",c=n;c.sort(function(n,c){return n[t]<c[t]?1:-1});var i="";c.forEach(function(n){i+='\n                <li>\n                    <img src="'.concat(n.list_url,'" alt="">\n                    <p>').concat(n.list_name,"</p>\n                    <p>").concat(n.list_desc,"</p>\n                    <p>").concat(n.list_price,"</p>\n                    <p>").concat(n.list_gwc,"</p>\n                </li>\n                ")}),$(".box > ul").html(i)}})});