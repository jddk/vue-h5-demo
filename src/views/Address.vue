<template>
	<div class="address">
		<van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
		<van-address-edit
			:area-list="areaList"
			show-postal
			show-delete
			show-set-default
			show-search-result
			:search-result="searchResult"
			@save="onSave"
			@delete="onDelete"
			@change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>

import areaList from '@/assets/js/area.js'
import {mapMutations,mapState} from 'vuex'

export default {
	data() {
		return {
			areaList,
			searchResult: []
		};
	},
	watch: {},
	computed: {
		...mapState(['address_list'])
	},
	mounted() {
		
	},
	methods: {
		...mapMutations(['commit']),
		onClickLeft() {
			this.$router.go(-1);
		},
		onSave(value) {
			this.$toast('save');
			this.commit({address_list:value})
			// this.$store.commit('commit',{address_list:value})
			console.log(value)
			this.$router.push({name:'about'})
		},
		onDelete() {
			this.$toast('delete');
		},
		onChangeDetail(val) {
			if (val) {
				this.searchResult = [
					{
						name: '黄龙万科中心',
						address: '杭州市西湖区'
					}
				];
			} else {
				this.searchResult = [];
			}
		}
		
	}//methods--end
};
</script>

<style></style>
