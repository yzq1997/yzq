// 1. 获取数据
const cartList = JSON.parse(localStorage.getItem('cartList'))

// 2. 判断有没有数据
if (!cartList) {
  alert('您的购物车为空, 快去选购把')
} else {
  // 3. 渲染页面
  bindHtml()

  // 4. 添加各种事件
  bindEvent()
}

function bindHtml() {
  // 整体渲染页面
  // 全选按钮需要渲染
  //   判断一下, 如果数组里面每一个数据的 isSelect 都是 true, 就渲染成 true
  //   只要有任意一个数组的 isSelect 是 false. 就渲染成 false
  //   有一个数组常用方法叫做 every
  let selectAll = cartList.every(item => {
    // 如果每一条都是 true, 就会返回 true
    // 如果任意一条是 false, 就会返回 false
    return item.isSelect === true
  })

  let str = `
    <div class="top">
      <input class="selectAll" type="checkbox" ${ selectAll ? 'checked' : '' }>   全选
    </div>
    <ul class="center">
  `

  cartList.forEach(item => {
    // 每一条数据的渲染, 根据每一条信息来渲染页面
    str += `
      <li>
        <div class="select">
          <input data-id=${ item.list_id } class="selectOne" type="checkbox" ${ item.isSelect ? 'checked' : '' }>
        </div>
        <div class="info">
          <img src="${ item.list_url }" alt="">
          <p>${ item.list_name }</p>
        </div>
        <p class="price">${ item.list_price }</p>
        <div class="number">
          <button class="sub btn-info" data-id=${ item.list_id }>-</button>
          <input type="text" value="${ item.number }">
          <button class="add btn-info" data-id=${ item.list_id }>+</button>
        </div>
        <p class="xiaoji">￥： ${ item.xiaoji }</p>
        <button  class="del btn btn-danger" data-id=${ item.list_id }>删除</button>
      </li>
    `
  })

  // 选中商品数量需要渲染
  //   要把数组中的 isSelect 为 true 的数据的 number 加再一起
  //   数组常用方法叫做 filter 就能筛选数据
  let selectArr = cartList.filter(item => item.isSelect)
  // console.log(selectArr)

  // 选中商品数量计算
  let selectNumber = 0
  // 选中商品总价
  let selectPrice = 0
  selectArr.forEach(item => {
    selectNumber += item.number
    selectPrice += item.xiaoji
  })

  // 去支付要不要禁用, 如果没有选中的商品, 就应该禁用
  //   只要有选中的商品, 就应该不禁用
  //   直接使用 selectArr 的 length 来判断

  str += `
    </ul>
    <div class="bottom">
      <p>选中商品数量  <span>${ selectNumber }</span></p>
      <p>总价： <span>￥： ${ selectPrice }</span></p>
      <button class="pay btn-success" ${ selectArr.length ? '' : 'disabled'}>去支付</button>
      <button class="clear btn-warning">清空购物车</button>
    </div>
  `

  // 整体添加到页面的盒子里面
  $('.cart').html(str)
}

function bindEvent() {
  // 4-1. 全选按钮的事件
  $('.cart').on('change', '.selectAll', function () {
    // 自己的状态就是每一条数据的状态
    // 先获取自己的状态
    // console.log(this.checked)
    // 让数组里面的每一个数据的 isSelect 都变成 自己的状态
    cartList.forEach(item => {
      item.isSelect = this.checked
    })

    // 从新使用这个数据去渲染一遍页面就可以了
    //   因为从新渲染页面了, 页面上的元素就变了, 是一套新的元素了
    //   就没有事件了, 因为页面回改变元素, 我们最好使用事件委托
    bindHtml()

    // 在从新存储一遍 localStorage
    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  // 4-2. 单选按钮的事件
  $('.cart').on('change', '.selectOne', function () {
    // console.log($(this).data('id'))
    // 你要知道你点击的是哪一个数据的单选按钮
    
    
    const id = $(this).data('id')
    // console.log(id);
    

    // 找到数组中 id 一样的那一条数据改变一下 isSelect 属性
    cartList.forEach(item => {
        // console.log(item.list_id);
        
        if (item.list_id === id) {
            item.isSelect = !item.isSelect
        }
    })

    // 从新渲染页面
    bindHtml()

    // 从新存储到 lcoalStorage 里面
    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  // 4-3. 减少商品数量的事件
  $('.cart').on('click', '.sub', function () {
    // console.log(this)
    // 找到你点击的是哪一个数据的 减少 按钮
    const id = $(this).data('id')

    // 循环数组, 把 id 对应的这个数据的 number 和 小计修改了
    cartList.forEach(item => {
      if (item.list_id === id) {
        // 当 item.number === 1 的时候, 不需要 --
        item.number > 1 ? item.number-- : alert('不能再减了')
        item.xiaoji = item.number * item.list_price
      }
    })

    // 从新渲染一遍页面
    bindHtml()

    // 在从新存储一遍 localStorage
    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  // 4-4. 添加商品按钮的事件
  $('.cart').on('click', '.add', function () {
    // 拿到自己身上存储的 id
    const id = $(this).data('id')

    // 循环数组找到一个id 对应的数据
    cartList.forEach(item => {
      if (item.list_id === id) {
        item.number++
        item.xiaoji = item.number * item.list_price
      }
    })

    // 从新渲染页面
    bindHtml()

    // 在从新存储一遍 localStorage
    localStorage.setItem('cartList', JSON.stringify(cartList))
  })

  // 4-5. 点击删除的事件
  $('.cart').on('click', '.del', function () {
    // 拿到自己身上的 id
    const id = $(this).data('id')

    // console.log('把数组中 id 为 : ' + id + ' 的数去去掉, 从新渲染页面, 从新存储到 lcoalStorage')
    //获取数据
    let arr=JSON.parse(localStorage.getItem("cartList"))
    // console.log(arr);
    
    //筛选数据
    arr = arr.filter(function(item){
        return item.list_id !== id
    })

    //将筛选出的数据再放回本地存储
    localStorage.setItem("cartList",JSON.stringify(arr))

    // 渲染页面
    bindHtml()

    //自动刷新当前页面
    window.location.reload()
    
})

  // 4-6. 点击清除的事件
  $('.cart').on('click', '.clear', function () {
    // console.log('把数组清空')
    // console.log('从新渲染页面')
    // console.log('把空数组从新存储到 lcoalStorage 里面')、

    localStorage.removeItem("cartList",)
    // 渲染页面
    bindHtml()

    //自动刷新当前页面
    window.location.reload()

  })
}