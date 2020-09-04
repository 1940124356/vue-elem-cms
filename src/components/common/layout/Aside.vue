<!-- aside -->
<template>
<div class='aside'>
    
    <h5>KBMonster</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(0,21,39)"
      text-color="#fff"
      :unique-opened="true"
      active-text-color="rgb(24,142,245)"
      :router="true">

        <!-- 一级菜单 -->
        <el-submenu v-for="(nav,index) in navs" :key="nav.id" :index="index+''">   
            <template slot="title">
                <i :class="nav.icon"></i>
                
                <span>公司管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item  index="1-1">公司管理(总览)</el-menu-item>
                <el-menu-item index="1-2">公司信息维护</el-menu-item>
                <el-menu-item index="1-3">员工管理</el-menu-item>
                <el-menu-item index="1-4">公众号配置</el-menu-item>
                <el-menu-item index="1-5">轮播图配置</el-menu-item>
                <el-menu-item index="1-6">会员等级管理</el-menu-item>
                <el-menu-item index="1-7">短信账户管理</el-menu-item>
                <el-menu-item index="1-8">短信通知配置</el-menu-item>
                <el-menu-item index="1-9">积分规则配置</el-menu-item>
                <el-menu-item index="1-10">会员充值配置</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <!-- 第二栏 -->
        <el-submenu index="2">   
            <template slot="title">
                <i class="el-icon-edit-outline"></i>
                <span>店铺管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1">店铺(总览)</el-menu-item>
                <el-menu-item index="2-2">店铺列表</el-menu-item>
                <el-menu-item index="2-3">店铺粉丝</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navs from '@/utils/navs'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
    .aside{
            height: 100%;
            background: rgb(0,21,39);
            h5{
                height: 65px;
                line-height: 65px;
                text-align: center;
                color: #fff;
            }
        }
</style>