<template>
  <div class="article-detail">
    <div class="container">
      <div class="article-title-block">
        <ol class="breadcrumb">
          <li><a href="#/home">首页</a></li>
          <li class="active">文章详情</li>
        </ol>
        <h1>深入贯彻闭包思想，全面理解JS闭包形成过程</h1>
        <div class="article-detail-info">
          <ul>
            <li>
              <a href="">JavaScript</a>
            </li>
            <li>
              <a href="">es6</a>
            </li>
            <li>
              <a href="">前端</a>
            </li>
          </ul>
          <div class="article-time-line">
            <span class="time-line">2小时前发表</span>
            <span class="time-line"><strong>396</strong>次浏览</span>
          </div>
        </div>
      </div>
      <div class="article-body-block">
        <div class="row">
          <div class="col-xs-12 col-md-9 main-body">
            <!-- 文章区 -->
            <div class="article-body"></div>
            <!-- 文章结束 -->
            <!--<div class="separate-line">-->
              <!--<span>正文到此结束</span>-->
            <!--</div>-->
            <!-- 文章赞赏、评论区 -->
            <div class="article-reward">
              <button type="button" class="btn btn-danger btn-lg">
                赞赏支持
              </button>
              <button type="button" class="btn btn-success btn-lg"><i class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></i>&nbsp;&nbsp;<span class="seprator">|</span>&nbsp;&nbsp;
                <span id="mainLikeNum">3 </span>
              </button>
              <div class="reward-message">如果觉得我的文章对你有用，请随意赞赏</div>
            </div>
          </div>
          <div class="col-xs-12 col-md-3 side-panel">
            <!-- 目录区 -->
            <div class="side-panel-area">
              <div class="side-panel-heading">
                目录
              </div>
              <div class="table-contents">
                <ul class="articleIndex">
                  <li class="">
                    <a href="#articleHeader0">闭包的介绍</a>
                  </li>
                  <li class="">
                    <a href="#articleHeader1">闭包的构成</a>
                  </li>
                  <li style="list-style:none;">
                    <ul>
                      <li class="">
                        <a href="#articleHeader2">词法作用域</a>
                      </li>
                      <li style="list-style:none;">
                        <ul>
                          <li class="active">
                            <a href="#articleHeader3">编译语言</a>
                          </li>
                          <li>
                            <a href="#articleHeader4">词法阶段</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li style="list-style:none;">
                    <ul>
                      <li>
                        <a href="#articleHeader5">作用域链</a>
                      </li>
                      <li style="list-style:none;">
                        <ul>
                          <li>
                            <a href="#articleHeader6">1. 执行环境</a>
                          </li>
                          <li>
                            <a href="#articleHeader7">2. 变量对象与活动对象</a>
                          </li>
                          <li>
                            <a href="#articleHeader8">3. 作用域链</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#articleHeader9">使用闭包</a>
                  </li>
                  <li>
                    <a href="#articleHeader10">闭包面试题</a>
                  </li>
                  <li>
                    <a href="#articleHeader11">总结</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home'
  }
</script>
<style>
  .article-detail {
    text-align: left;
    padding-top: 30px;
  }
  .article-title-block {
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  .article-title-block h1 {
    margin: 0 0 15px 0;
    font-size: 24px;
  }
  .article-time-line .time-line{
    color: #999;
    font-size: 14px;
    padding-right: 10px;
  }
  .article-time-line .time-line strong {
    color: #333;
    font-weight: normal;
  }
  .article-detail-info ul li{
    display: inline-block;
    margin-right: 5px;
  }
  .article-detail-info ul li a{
    display: inline-block;
    padding: 0 8px;
    color: #017E66;
    background-color: rgba(1,126,102,0.08);
    height: 24px;
    line-height: 24px;
    font-weight: normal;
    font-size: 13px;
    text-align: center;
  }
  .article-detail-info ul,.article-detail-info .article-time-line {
    display: inline;
  }
  .breadcrumb {
    background-color: #fff;
    font-size: 14px;
    padding-left: 0;
  }
  .table-contents ul {
    padding-left: 18px;
  }
  .articleIndex {
    margin: 0;
    list-style-type: square;
  }
  .articleIndex ul li {
    list-style-type: square;
  }
  .side-panel-area {
    margin-top: 20px;
    position: relative;
  }
  .side-panel-area::before {
    content: '';
    display: block;
    position: absolute;
    background: #eee;
    width: 1px;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    left: 0;
  }
  .side-panel-heading {
    background-color: #fff;
    color: #333;
    font-weight: bold;
    border: none;
    padding: 8px 12px;
    font-size: 16px;
  }
  .table-contents{
    position: relative;
    z-index: 2;
    line-height: 1.5;
    overflow: hidden;
    max-height: inherit;
    padding: 0 0 10px;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
  .table-contents ul li a {
    padding: 3px 0;
    display: block;
    color: #000;
    font-size: 14px;
  }
  .separate-line {
    margin: 20px 0 20px 0;
    width: 100%;
    height: 1px;
    border-top: 1px #ccc dotted;
    text-align: center;
    overflow: initial!important;
  }
  .separate-line span {
    position: relative;
    top: -9px;
    box-sizing: border-box;
    padding: 2px 4px;
    border: 1px solid #d6d6d6;
    background-color: #ffffff;
    color: #e41c1e;
  }
  .article-body {
    padding-bottom: 10px;
    margin-top: 30px;
  }
  .article-reward {
    text-align: center;
  }
  .reward-message {
    color: #999;
    font-size: 14px;
    margin-top: 20px;
  }
</style>
