// 数据初始样式
data()

function data() {
  $.ajax({
    url: '../lib/list.json',
    dataType: 'json',
    success: function (res) {
    //   console.log(res)

      // 1. 准备一个空字符串
      let str = ''

      // 2. 渲染
      res.forEach(item => {
        str += `
        <li>
            <img src="${item.list_url}" alt="">
            <p>${item.list_name}</p>
            <p>${item.list_desc}</p>
            <p>${item.list_price}</p>
            <p>${item.list_gwc}</p>
          </li>
        `
      })

      // 3. 填充到 nav_top 里面的 ul 里面
      $('.box > ul')
        .html(str)
    }
  })
}



// 价格升序
$('.btn_1').click(function () {  
    $.ajax({
        url: '../lib/list.json',
        dataType: 'json',
        success: function (res) {
        //   console.log(res)
          var colId="list_price"  

          var asc = function(x,y)  
            {  
                return (x[colId] > y[colId]) ? 1 : -1  
            }  
            var arr2 = res  
             
            arr2.sort(asc); //升序排序   
          

          // 1. 准备一个空字符串
            let str = ''
        
            // 2. 渲染
            arr2.forEach(item => {
                str += `
                <li>
                    <img src="${item.list_url}" alt="">
                    <p>${item.list_name}</p>
                    <p>${item.list_desc}</p>
                    <p>${item.list_price}</p>
                    <p>${item.list_gwc}</p>
                </li>
                `
          })
    
          // 3. 填充到 nav_top 里面的 ul 里面
          $('.box > ul')
            .html(str)
        }
      })
});  

// 价格降序
$('.btn_2').click(function () {  
    $.ajax({
        url: '../lib/list.json',
        dataType: 'json',
        success: function (res) {
        //   console.log(res)
          var colId="list_price"  

          var asc = function(x,y)  
            {  
                return (x[colId] < y[colId]) ? 1 : -1  
            }  
            var arr2 = res  
             
            arr2.sort(asc); //升序排序  
          

          // 1. 准备一个空字符串
            let str = ''
        
            // 2. 渲染
            arr2.forEach(item => {
                str += `
                <li>
                    <img src="${item.list_url}" alt="">
                    <p>${item.list_name}</p>
                    <p>${item.list_desc}</p>
                    <p>${item.list_price}</p>
                    <p>${item.list_gwc}</p>
                </li>
                `
          })
    
          // 3. 填充到 nav_top 里面的 ul 里面
          $('.box > ul')
            .html(str)
        }
      })
});  