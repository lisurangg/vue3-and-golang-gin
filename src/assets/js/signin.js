import axios from "axios";


// 检查用户输入函数
function signin () {

    // window.onclick = function() {
    //
        let username1, password1

//
// const signinButton = document.getElementById("signin")

        // 用户点击登录按钮事件
        // signinButton.addEventListener('click', function(event){
        event.preventDefault();

        // 获取输入框元素
        username1 = document.getElementById("username");
        password1 = document.getElementById("password");

        //将数据赋值到 params
        var params1 = new URLSearchParams();
        params1.append('username', username1.value);
        params1.append('password', password1.value);

        // 判断输入框内容是否达标
        if (username1.value.trim().length === 0 || password1.value.trim().length === 0){
            alert("not")
          } else {
            
            //像后端发送 post请求
    axios.post('http://localhost:9999/signin', params1,)

    // 接收到数据并打印
    .then(function (response1) {
      console.log("注册成功", response1);
      alert("注册成功，请重新登录")
      
    })
    // 未接收到数据报错
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

    // })
// }
}

export {
    signin
  }