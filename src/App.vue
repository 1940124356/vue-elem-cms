<template>
  <div id="app">

    <!-- 登录页面 -->
    <router-view name="login" v-if='this.$route.path=="/login"'></router-view>

    <!-- 系统内部页面 -->
    <KBLayout v-else></KBLayout>
  </div>
</template>

<script>
import { KBLayout } from '@/components/'
export default {
  name:'App',
  components:{
    KBLayout
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>
<style lang="scss">
  #app{
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
</style>
