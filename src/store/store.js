import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count:3
}
const mutations = {//改变状态里面的值必须用mutations
   add(state){
   	state.count++;
   },
   reduce(state){
   	state.count--;
   }
}
const getters = {
	count:function(state){
      return state.count+=100;
	}
}
export default new Vuex.Store({
	state,mutations,getters
})
