// 1. 获取 localStorage 里面的数据
const goodsInfo = JSON.parse(localStorage.getItem('goods_info'))
console.log(goodsInfo);
// var a = JSON.stringify(goodsInfo)
// console.log(a);

// console.log(goodsInfo.list_name);


// 判断一下数据
if (goodsInfo === null) {
    alert('您查看的商品详情不存在了')
    window.location.href='./list.html'
  } 

//渲染数据
let str = "";


str += `
<div class="left">
    <img src="${goodsInfo.list_url}" alt="Image To Zoom" class="example">
</div>
<div class="right">
    <p>${goodsInfo.list_name}</p>
    <p>${goodsInfo.list_desc}</p>
    <p>￥: ${goodsInfo.list_price} 元</p>
    <p>发货地址：宣城市宣州区</p>
    <p class="addCart">加入购物车</p>
    <span class="go_cart ">我的购物车  ==》</span>
</div>
`

$('.box').html(str)



$('.addCart').click(() => {
    // console.log('我要添加购物车了')

    // 4-2. 判断是否登录

    // 4-3. 加入到购物车数组里面
    //    先拿到 localStorage 里面的那个数组信息
    //    如果原先没有数据, 那么我就用一个空数组来代替
    //    如果有数据, 就用我们的数据
    const cartList = JSON.parse(localStorage.getItem('cartList')) || []
    // console.log(cartList.length);
    
    // 象数组里面把本条数据添加进去
    // 4-4. 判断有没有这个数据
    //      每一个数据都有一个自己的 id
    //      只要看数组里面有没有 id 一样的数据, 就知道有没有这个数据了
    //      数组常用方法有一个叫做 some 的方法
    //      返回值:
    //        true: 表示数组里面有这个信息
    //        false: 表示数组里面没有这个信息
    let exits = cartList.some(item => {
      // 数组里面每一个的 id === 本页面的这条数据的 id
    //   console.log(item.list_id);
      
      return item.list_id === goodsInfo.list_id
    })
    
    // console.log(exits)
    if (exits) {
      // 表示有这个信息了, 我们要让 number ++
      // console.log('已经存在 number ++')
      // 找到这个信息给他 number ++
      let data = null
      for (let i = 0; i < cartList.length; i++) {

        //   console.log(cartList.length);
          
        if (cartList[i].list_id === goodsInfo.list_id) {
          data = cartList[i]
          break
        }
      }
      // data 就是我找到的这个信息
      console.log(data);
      
      data.number++

      // 4-5. 数量添加的时候, 小计价格要改变
      data.xiaoji = data.number * data.list_price // 数量 * 单价
    } else {
      // 表示没有这个信息, 直接 push 就可以了
      // push 之前, 象里面添加一个 number 信息为 1
      goodsInfo.number = 1

      // 4-5. 多添加一些信息
      goodsInfo.xiaoji = goodsInfo.list_price // 因为默认是第一个, 小计就是单价
      goodsInfo.isSelect = false // 默认不选中
      cartList.push(goodsInfo)
    }

    // 在存储到 localStorage 里面
    localStorage.setItem('cartList', JSON.stringify(cartList))
  })



  $('.go_cart').on('click',function(){
      //去到购物车页面
      window.location.href = './cart.html'
      
  })

    // 放大镜
    $(function(){
        $(".example").imagezoomsl();
    });