<template>
  <div id="app">
    <div class="ui-header">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-9 col-lg-9">
            <ul class="ui-menu list-inline pull-left hidden-xs">
              <li class="ui-menu-item">
                <router-link to="/home">首页</router-link>
              </li>
              <li class="ui-menu-item">
                <router-link to="/article">我的文章</router-link>
              </li>
              <li class="ui-menu-item">
                <router-link to="/community">交流社区</router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-3 col-lg-3 text-right">
            <form class="header-search hidden-sm pull-right">
              <div class="search-icon">
                <span class="sr-only">搜索</span>
                <span class="glyphicon glyphicon-search"></span>
              </div>
              <input name="searchKey" type="text" placeholder="搜索文章或话题" class="form-control searchBox" value="" required>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-content">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <div class="ui-footer">
      <p>Copyright &copy;2017 Kingbora.</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .ui-header {
    height: 60px;
    line-height: 60px;
    position: relative;
    z-index: 3;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
    background: #fafafa;
  }
  .ui-menu {
    margin: 0 0 0 20px;
    transition: opacity 0.25s;
  }
  .ui-menu .ui-menu-item {
    position: relative;
    padding: 0;
    margin: 0 0 0 2px;
    vertical-align: middle;
    line-height: 34px;
    color: #666;
  }
  .ui-menu .ui-menu-item a {
    display: inline-block;
    padding: 0 13px;
    height: 34px;
    color: #757575;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
  .ui-menu .ui-menu-item a.active {
    color: #009a61;
    font-weight: 600;
  }
  .ui-menu .ui-menu-item a:hover{
    background-color: #F3F3F3;
  }
  .ui-content {
    flex: 1;
  }
  .header-search {
    position: absolute;
    right: 0;
    width: 277px;
    display: inline-block;
    margin: 15px 15px 0 0;
    vertical-align: middle;
  }
  .header-search .search-icon {
    position: absolute;
    top: 0;
    left: 0;
    color: #999;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .header-search .searchBox {
    border-radius: 34px;
    padding-left: 35px;
  }
  .ui-footer {
    width: 100%;
    padding: 10px 0;
    background-color: #666;
    color: #f5f5f5;
  }
  .ui-footer p {
    margin: 5px 0;
  }
</style>
