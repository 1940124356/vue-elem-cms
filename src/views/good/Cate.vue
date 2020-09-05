<!-- 添加分类 -->
<template>
<div class='kb-cate'>
    <div>
        <el-input v-model="cate_zh" placeholder="请输入商品类型的中文名字"></el-input>
        <el-input v-model="cate" placeholder="请输入商品类型的英文名"></el-input>
        <el-button type="primary" @click="submit">添加分类</el-button>
    </div>
    <template>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="cate_zh"
        label="商品类型(中文名)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cate"
        label="商品类型">
      </el-table-column>
    </el-table>
  </template>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    cate_zh:'',
    cate:'',
    list:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    init(){
        this.$http.fetchAllCate({}).then(res=>{
            this.list=res.list
        })
    },
    submit(){
        this.$http.fetchAddCate({cate:this.cate,cate_zh:this.cate_zh}).then(()=>{
            this.$message({
                message: '恭喜你添加成功',
                type: 'success'
            });
            this.cate_zh=''
            this.cate=''
        })
        this.init()
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.init()
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
    .kb-cate{
        width: 400px;
        margin: 50px auto;
        div{
            .el-input{
                margin-bottom: 20px;
            }
        }
    }
</style>