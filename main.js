import Vue from 'vue'
import App from './App'

import lyzmldatepicker from './components/lyzml-datepicker/lyzml-datepicker.vue';
import './utils/routeIntercept';
Vue.config.productionTip = false;

App.mpType = 'app';

Vue.component('lyzml-datepicker',lyzmldatepicker);



const app = new Vue({
    ...App
})
app.$mount()
