// 1. 获取 localStorage 里面的数据
const goodsInfo = JSON.parse(localStorage.getItem('goods_info'))
console.log(goodsInfo);
// var a = JSON.stringify(goodsInfo)
// console.log(a);

// console.log(goodsInfo.list_name);

//渲染数据
let str = "";


str += `
<div class="left">
    <img src="${goodsInfo.list_url}">
</div>
<div class="right">
    <p>${goodsInfo.list_name}</p>
    <p>${goodsInfo.list_desc}</p>
    <p>${goodsInfo.list_price}</p>
    <p>宣城市宣州区</p>
    <p>加入购物车</p>
</div>
`

$('.box').html(str)