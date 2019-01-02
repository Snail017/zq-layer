<template>
    <div v-if="show">
        <div class="bg" ></div>
        <div class="layer">
            <div class="layer_content">{{message}}</div>
            <div class="layer_footer">
                <span class="layer_sure">{{btn[0]}}</span>
                <span class="layer_cancel">{{btn[1]}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "confirm",
        data(){
            return{
                msg:'test',
                show:false,
                message:'',
                btn:['确定','取消']
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .bg{background: #0000009e;position: fixed;top:0;left: 0;right: 0;bottom: 0;z-index: 2;color: #f4d290;text-align: center;padding-top: 15%;font-size: 20px;font-weight: bold;cursor: default;}
    .layer{position: fixed;top:30%;width: 300px;left: 50%;margin-left: -150px;background: #fff;text-align: center;z-index: 2}
    .layer_footer{border-top:1px solid #ccc;}
    .layer_footer>span{width: 50%;float: left;padding: 5px;cursor: pointer;}
    .layer_sure{background: #0a6ebd;color: #fff;}
    .layer_cancel{background: #b1b7bb;color: #fff;}
    .layer_content{padding:10px 5px;}
</style>