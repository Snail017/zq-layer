import confirm  from './components/confirm'
let $vm // 存储Vue实例
let zq={};

zq.install = function (Vue, options) {
    // 不重复install
    if (zq.installed) return
    zq.installed = true
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {    })
    // 3. 通过全局mixin方法添加一些组件选项
    Vue.mixin({})
    // 4. 添加实例方法
    Vue.prototype.$confirm = function (message, options ,callback ) {
        // 扩展构造对象
        let Ext = Vue.extend(confirm)
        if (!$vm) {
            // 实例化一个对象
            $vm = new Ext({
                el: document.createElement('div')
            })
        }
        var type = typeof options === 'function';
        if(type){
            $vm.btn=options.btn||['确定','取消']
        }
        // 给对象赋值
        $vm.message = message || 'message'
        $vm.show = true,

        // 挂载到dom中
        document.body.appendChild($vm.$el)

    }

}
module.exports = zq;