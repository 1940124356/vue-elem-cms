<!-- aside -->
<template>
<div class='aside'>
    
    <h5>KBMonster</h5>
    <el-menu
        router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      background-color="rgb(0,21,39)"
      :unique-opened="true"
      active-text-color="rgb(24,142,245)">
        <!-- 一级菜单 -->
        <el-submenu v-for="(nav,index) in navs" :key="nav.id" :index="index+''">   
            <template slot="title">
                <i :class="nav.icon"></i>
                <span v-text="nav.title" ></span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group v-for="item in nav.children" :key='item.id'>
                <router-link  :to='item.path' active-class="on">
                <el-menu-item  
                 v-text='item.title'   
                :key="item.id+''" >
                </el-menu-item>
                </router-link>
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
    navs
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
        .on{
            display: block;
            background: rgb(92, 92, 240);
            li{
                background: rgb(92, 92, 240) !important;
            }
        }
</style>