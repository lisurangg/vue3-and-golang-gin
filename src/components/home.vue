<template>
  <el-container>

  <el-header><!-- 头部区 -->
    <div>
        <img src="../assets/image/log.jpg" alt="" height="60"/>
        <span>湖南工业大学二课学分管理系统</span>
    </div>
    <el-button name="button" class="el-button" type="info" @click="logout">记录数据</el-button>
  </el-header>

  <el-container>
  <!-- 左侧菜单部分 -->
  <el-aside class="el-aside" width="255px">
  <el-menu
  :router="true"
  :default-active="this.$route.path"
  active-text-color="#a79f9f"
  background-color="#fffff"
  text-color="#a79f9f"
  class="el-menu-vertical">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/home/all">学分总和</el-menu-item>
    <el-menu-item index="/home/one">第一学年学分</el-menu-item>
    <el-menu-item index="/home/tow">第二学年学分</el-menu-item>
    <el-menu-item index="/home/me">关于我们</el-menu-item>
  </el-menu>

  </el-aside>

<!-- 右侧主题页面内容展示 -->
<el-main class="el-mian">
<!-- 路由页面 -->
<router-view ></router-view>
</el-main>
</el-container>
</el-container>
</template>


<script>
import  { getRouterData }  from "@/assets/js/home"    //引入js文件
// import { useRoute } from "vue-router";

export default{   //这个不知道有什么用，但是必须有才能使js文件成功
  name: 'app',
  setup () {
    getRouterData()
  } 
}

// getRouterData()   //调用js文件里的getRouterData函数

</script>


<style scoped>

@import '@/assets/css/home.css'

</style>

