<style lang="scss" scoped>
	.home{
		min-height: 100vh;
		
	}
</style>
<template>
  <div class="home">
    <van-button @click="clickBtn" type="default">默认按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{

    }
  },
  mounted() {
    
  },
  methods: {
    clickBtn(){
      this.$axios.post('https://umapdev.dfmc.com.cn/smart/pc-role/getCompanyLeaderList', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
    }
  },
}
</script>
