//指令简单封装
import Vue from 'vue';
/**按钮按下状态
*<div v-touchstate="aa1a"></div>
**/
Vue.directive('hover',{
    bind(el,binding,vnode){
        let _class=binding.value || 'class1';
        el.ontouchstart = ()=>{
            el.classList.add(_class)
        };
        el.ontouchend = ()=>{
            el.classList.remove(_class)
        };
    }
});

/**
*
<a class="btn" href="javascript:;" v-preventReClick="3000" @click.prevent="pay($event)">立即投保</a>
pay (event) {
    if (event.target.disabled) {// 点击太频繁了
        return
    }
}
**/
Vue.directive('preventReClick', {
    inserted (el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, binding.value || 2000)
            }
        })
    }
})