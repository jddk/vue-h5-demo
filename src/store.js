import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	address_list:{}
  },
  mutations: {
	commit(state,val){//简单封装
		let key = Object.keys(val)[0]
		state[key] = val[key]
	}
  },
   getters:{
  	
  },
  actions: {

  }
})

