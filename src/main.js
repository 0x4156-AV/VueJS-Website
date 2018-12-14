import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueGoodshare from "vue-goodshare";
var VueScrollactive = require('vue-scrollactive');
import VueGitHubCorners from 'vue-gh-corners';
import 'vue-gh-corners/dist/vue-github-corners.css';

Vue.config.productionTip = false;
Vue.use(VueGitHubCorners);
Vue.use(VueParticles);
Vue.use(VueScrollactive);

new Vue({
  render: h => h(App),
    components: {
        VueGoodshare
    }
}).$mount('#app');

