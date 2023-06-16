<template>
    <!-- <img src="./assets/image/image.jpg"> -->
    <!-- <router-view></router-view> -->
    <div class="container">
          <form action="#" class="login-from" id="login-from" method="post">
              <h2>登录</h2>
              <input
              type="text"
              id="username"
              name="username"
              placeholder="用户名"
              />
              <input
              type="password"
              id="password"
              name="password"
              placeholder="密码"
              />
              <button @click="loginBtn" type="button" name="login" id="login" >登录</button>
              <button @click="signin" type="button" name="signin" id="signin">注册</button>
          </form>
      </div>
      <div>
        <!-- <login msg="login"/> -->
      </div>
      
  
  </template>
  
  <script>
  
  import { loginjs } from  "@/assets/js/loginjs.js";
  import { signin } from "@/assets/js/signin.js";

  
  
  export default {
    name: 'app',
    methods:{
      signin() {
        signin()
      },
      loginBtn() {  // 这个loginBtn是按钮名字 @click= "loginBtn"
        loginjs()
      }
    },
  }
  
  // login()
  
  </script>
  <style scoped>
  @import '@/assets/css/login.css'
  </style>
  