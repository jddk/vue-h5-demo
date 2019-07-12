import Vue from 'vue'
import './vant.js'
import './rem.js'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios.js'
import './registerServiceWorker'
import './assets/css/base.css'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
	router:router,
	store:store,
	render:function(h){
		return h(App)
	}
}).$mount('#app')