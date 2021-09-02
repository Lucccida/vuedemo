<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" class="new">新建</router-link> |
      <router-link to="/about">修改</router-link> |
      <a class="text-gray">保存</a> | <a class="text-gray">暂存</a> |
      <a class="text-gray">提交</a> | <a class="text-gray">关闭</a>
    </div>
    <div>
     <router-view></router-view>
    </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: left;
  padding:0 5px;
  border-bottom: 1px solid #e0e0e0;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 5px;
  text-decoration: none;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #3a6ce0;
}
</style>
