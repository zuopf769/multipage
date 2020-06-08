// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false;
import { mqAjax } from '../../../common/ajax/index';
Vue.prototype.$http = mqAjax;

new Vue({
  render: h => h(App)
}).$mount('#app');
