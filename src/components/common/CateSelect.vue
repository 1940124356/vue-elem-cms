<template>
    <div class="cate-select">
        <el-select placeholder="请选择商品类型" :value="value" @change="cateChange">
            <el-option v-for="item in catelist" :key="item._id" :label="item.cate_zh" :value="item.cate_zh"></el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        props:{
            value:{type:String,require:true}
        },
        data:function(){
            return {
                catelist:[]
            }
        },
        mounted(){
            this.$http.fetchAllCate({}).then(res=>{
                this.catelist=res.list
            })
        },
        methods:{
            cateChange(val){
                // console.log(e)
                this.$emit('input',val)
            }
        }
        
    }
</script>