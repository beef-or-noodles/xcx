import Vue from 'vue'
import App from './App'
import {getHttp,postHttp} from './static/request/http.js'
import route from './static/common/route.js'
import {uniPopup} from "@dcloudio/uni-ui"


Vue.config.productionTip = false
Vue.prototype.postHttp = postHttp; 
Vue.prototype.getHttp = getHttp;

Vue.prototype.go = route.navigateTo;

App.mpType = 'app'
//公共布局部分
Vue.component('uniPopup',uniPopup);
const app = new Vue({
    ...App
})
app.$mount()
