//懒加载
const Home =()=>import('@/views/home/Home.vue')  
const Overview = ()=>import('@/views/home/Overview.vue')
const Employee = ()=>import('@/views/home/Employee.vue')

const Good =()=>import('@/views/good/Good.vue')
const Goodlist =()=>import('@/views/good/Goodlist.vue')
const Goodfans =()=>import('@/views/good/Goodfans.vue')
export default[
    {
        id:1,
        path:'/home',
        comm:Home,
        title:'首页管理',
        icon:'el-icon-odometer',
        children:[
            {id:11,path:'/home/overview',title:'公司管理(总览)',icon:'el-icon-document',comm:Overview},
            {id:12,path:'/home/employee',title:'员工管理',icon:'el-icon-document',comm:Employee},

        ]
    },
    {
        id:2,
        path:'/good',
        comm:Good,
        title:'店铺管理',
        icon:'el-icon-edit-outline',
        children:[
            {id:21,path:'/good/goodlist',title:'店铺管理(总览)',icon:'',comm:Goodlist},
            {id:22,path:'/good/goodfans',title:'店铺粉丝',icon:'',comm:Goodfans},

        ]
    }
]