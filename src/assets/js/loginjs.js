import axios from "axios";
// import { useRouter } from "vue-router";
import router from "@/router/index"
// const router = useRouter()
//首先在setup中定义


function loginjs() {
  // const route = router()
  // const router = useRouter()
  // window.onload = function() {

    // 声明两个数据
    let username, password

    //
    // const router = useRouter()

    // 获取登录按钮
    // const loginButton = document.getElementById("login");

    // 用户点击登录按钮事件
    // loginButton.addEventListener('click', function(event){
      event.preventDefault();//
  
      // 获取输入框元素
      username = document.getElementById("username");
      password = document.getElementById("password");
      var a = username.value
      // var b = password
      console.log(a)

      //将数据赋值到 params
      var params = new URLSearchParams();
          params.append('username', username.value);
          params.append('password', password.value);
  
  
      if (username.value.trim().length === 0 || password.value.trim().length === 0){
          alert("not")
        } else {
          console.log('post请求传输的数据为：','username:',username.value, '  password:', password.value)

          // 像后端发送 post请求
          axios.post('http://localhost:9999/login', params,) 
            .then(function (response) {

              // 打印返回的json对象
              console.log(response.data);
              // JSON.stringify是将json转换为string
              var data = JSON.stringify(response.data.success);  
              console.log(data)    //这里显示是string，但是用if判断时不能正确判断

              // 这里不能判断data.success，直接判断data，data才是一个json对象，success只是data里的一个key
              // 此处逻辑简单后端其实只要在成功时返回值就行
              if (JSON.stringify(response.data) == '{}') {
                console.log('后端查询函数返回成功')
                

                
                // 路由跳转，且将username的值传入home页面
                router.push({
                  name:'home',
                  query:{username:a}
                })



                alert("登录成功")
              } else {
                console.log('后端连接成功，查询函数出错')
                alert('账号密码错误，请重新输入')
              }
            })


            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            })
    }
  // });
  // }
}

export {
  loginjs
}
