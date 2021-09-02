import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './style/style.less'

Vue.use(ElementUI);
Vue.use(iView);
Vue.use(VueRouter);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
});