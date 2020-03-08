import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

//custom directives
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px';
    }

    if (binding.arg === 'column') {
      el.style.background === '#ddd';
      el.style.padding === '20px';
    }
  }
});

//filters

Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...';
});

//event bus
export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app');

//custom directive
//agruments
//values
