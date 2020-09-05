<!--  -->
<template>
<div class='goodadd'>
    <h1>新增商品</h1>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="上传图片">
            <el-input v-model="form.img"></el-input>
        </el-form-item>

        <el-form-item label="商品价格">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="商品排行">
            <el-input v-model="form.rank"></el-input>
        </el-form-item>

        <el-form-item label="商品描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item label="是否热销">
            <el-switch v-model="form.hot"></el-switch>
        </el-form-item>

        <el-form-item label="商品类型">
            <CateSelect v-model="form.cate"></CateSelect>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { CateSelect } from '@/components/'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    CateSelect
},
data() {
//这里存放数据
return {
    form: {
        name: '',
        desc: '',
        price:0,
        cate:'',
        img:'',
        hot:false,
        rank:0,
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    onSubmit() {
        this.$http.fetchCreateGood(this.form).then(()=>{
            this.$message({
                message: '恭喜你添加成功',
                type: 'success'
            });
        })
        this.init()
    },
    init(){
        
        this.form.name=''
        this.form.desc=''
        this.form.price=0
        this.form.cate=''
        this.form.img=''
        this.form.hot=false
        this.form.rank=0
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    //获取所有的类型
    this.$http.fetchAllCate({}).then(res=>{
        this.form.catelist=res.list
        console.log(this.form.catelist)
    })
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
    .goodadd{
        width: 800px;
        margin: 50px auto;
    }
</style>