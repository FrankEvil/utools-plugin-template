import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router.ts'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'

import utoolsUtil from "./js/utoolUtil.ts"

createApp(App)
    .use(router)
    .use(ElementPlus, {size: 'small', zIndex: 3000})
    .mount('#app')

utoolsUtil.init(router);