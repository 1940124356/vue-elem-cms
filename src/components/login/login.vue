<!-- 登录系统 -->
<template>
<div class='login'>
    <div class="login-box">
        <div class="login-box-min">
            <h1>logo</h1>
            <div class="kb_login">
                <div class="kb_login_1">
                    <el-input v-model="username" placeholder="默认账号是admin" prefix-icon="el-icon-user-solid" size=small></el-input>
                    <el-input v-model="password" placeholder="默认密码是123456" prefix-icon="el-icon-lock" size=small></el-input>
                </div>
                <div class="kb_login_2">
                    <el-button type="primary" round size=small @click="loginid">登录</el-button>
                    <el-button round size=small>忘记密码</el-button>
                </div>
            </div>
        </div>
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
    username:'admin',
    password:'123456'
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    async loginid(){
        //登录成功，存token
        var res= await this.$http.getLogin({username:this.username,password:this.password})

        localStorage.setItem('token',res.token)
        this.$router.push('/home')
        
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    // console.log(this.$route)
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
    .login{
        background: rgb(39,109,242);
        // width: 100%;
        height: 100%;
        .login-box{
            position: absolute;
            top: 100px;right: 20%;
            width: 300px;
            height: 400px;
            background-color: rgba(255, 255, 255, 0.349019607843137);
            border: none;
            border-radius: 3px;
            .login-box-min{
                width: 270px;
                height: 370px;
                position: absolute;
                top: 0;right: 0;
                left: 0;bottom: 0;
                margin: auto;
                background: #fff;
                h1{
                    font-size: 30px;
                    width: 270px;height: 100px;
                    text-align: center;
                    line-height: 100px;
                }
                .kb_login{
                    .kb_login_1{width:200px;margin: 0 auto; .el-input{margin-top: 20px;font-size:12px;}}
                    .kb_login_2{margin-top: 20px;display: flex;justify-content: center;}
                }
            }
        }
    }
</style>
