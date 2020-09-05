//懒加载
const Home =()=>import('@/views/home/Home.vue')  
const Overview = ()=>import('@/views/home/Overview.vue')
const Employee = ()=>import('@/views/home/Employee.vue')

const Good =()=>import('@/views/good/Good.vue')
const Goodlist =()=>import('@/views/good/Goodlist.vue')
const CreateGood =()=>import('@/views/good/CreateGood.vue')
const Cate=()=>import('@/views/good/Cate.vue')
export default[
    {
        id:1,
        title:'首页管理',
        icon:'el-icon-odometer',
        children:[
            {id:10,path:'/home',title:'home',icon:'el-icon-document',comm:Home},
            {id:11,path:'/overview',title:'公司管理(总览)',icon:'el-icon-document',comm:Overview},
            {id:12,path:'/employee',title:'员工管理',icon:'el-icon-document',comm:Employee},
            

        ]
    },
    {
        id:2,
        title:'店铺管理',
        icon:'el-icon-edit-outline',
        children:[
            {id:20,path:'/good',title:'店铺首页',icon:'el-icon-document',comm:Good},
            {id:21,path:'/goodlist',title:'店铺管理(总览)',icon:'el-icon-document',comm:Goodlist},
            {id:22,path:'/createGood',title:'添加商品',icon:'el-icon-document',comm:CreateGood},
            {id:23,path:'/cate',title:'添加分类',icon:'',comm:Cate}

        ]
    }
]