import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Article from '../components/Article/Article.vue'
import About from '../components/About/About.vue'
import Community from '../components/Community/Community.vue'
import Detail from '../components/Article/Detail.vue'
import Editor from '../components/Editor/Editor.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/home', component: Home},
    {path: '/about', component: About},
    {path: '/article', component: Article},
    {path: '/community', component: Community},
    {path: '/detail', component: Detail},
    {path: '/editor', component: Editor}
  ]
})

