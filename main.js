import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n';
import $china from '@/locale/china.js';
import $korean from '@/locale/korean.js';
import $japan from '@/locale/japan.js';
import $english from '@/locale/english.js';


Vue.use(VueI18n);
const i18n = new VueI18n({ 
	locale: uni.getStorageSync('locale') ? uni.getStorageSync('locale'):'china', 
	// 加载语言文件的内容
	messages: { 
		'china': $china,//中文
		'japan': $japan,//日语
		'english': $english,//英语
		'korean': $korean, //韩语
	}
});

Vue.prototype._i18n = i18n;


import lyzmldatepicker from './components/lyzml-datepicker/lyzml-datepicker.vue';

Vue.config.productionTip = false;

App.mpType = 'app';


Vue.component('lyzml-datepicker',lyzmldatepicker);


const app = new Vue({
	i18n,
    ...App,
})
app.$mount()
//window.wx={}
