<style scoped>
	
</style>
<template>
	<div class="about">
		<van-cell-group>
			<!-- <van-cell v-for="(item,key) in address_list" :key="item.key" :title="key" :value="item" /> -->
			<van-cell title="单元格" is-link to="address" />
		</van-cell-group>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
export default{
	data(){
		return{

		}
	},
	watch:{

	},
	computed:{
		...mapState(['address_list'])
	},
	mounted(){

	},
	methods:{

	}
}
</script>
