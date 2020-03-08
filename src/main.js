import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

//event bus
export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app');

//input binding
//checkbox binding
//selectbox binding
