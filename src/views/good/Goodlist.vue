<!--  -->
<template>
<div class='goodlist'>
    <!-- 筛选 -->
    <div class="filtrate">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>

    <!-- 表格 -->
        <el-table
        :data="tableData"
        style="width: 100%"
        :border=true>

                <el-table-column
                label="商品名称"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                label="图片"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.img }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                label="品类"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.cate }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                label="价格"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.price }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                label="上架时间"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>

                <el-table-column
                label="是否热销"
                width="180">
                    <template slot-scope="scope"> 
                        <div slot="reference" class="name-wrapper">{{ scope.row.hot }}</div> 
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="block">
            <!-- <el-pagination
            
            :total="50">
            </el-pagination> -->
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[3, 5, 10]"
            :page-size="3"
            layout="total, sizes, prev, pager, next, jumper"
            :total="11">
            </el-pagination>
        </div>
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
    formInline: {
          user: '',
          region: ''
    },
    tableData: [{
          name: '商品名称',
          img: '商品图片',
          cate:'品类',
          price:'价格',
          date:'时间',
          hot:'是否热销'
    }],
    currentPage1: 5,
    currentPage2: 5,
    currentPage3: 5,
    currentPage4: 4

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    init(){
         this.$http.fetchAllGood({}).then(res=>{
            this.tableData=res.list
         })
         
    },
    onSubmit() {
        console.log('submit!');
    },
    handleEdit(index, row) {
        console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
<style  scoped>

</style>