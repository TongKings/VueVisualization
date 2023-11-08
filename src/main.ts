import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './server/mock'
import ElementPlus from 'element-plus'
import DataVVue3  from '@kjgl77/datav-vue3';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//添加elementplus图标
const app = createApp(App)
// console.log(import.meta.env,"kkkkkkkk");
// defineprops:父组件向子组件传递参数
// defineEmits:父组件向子组件传递函数
// defineExpose:将子组件中的参数和方法暴露给父组件

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)//每一个组件都添加图标
}
app.use(ElementPlus).use(DataVVue3).use(router).mount('#app')
