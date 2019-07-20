<template>
    <div class="hello">
        <!--<div id="qrcode" style="width:300px;height:300px;"></div>-->
        <top></top>
        <GenerateQR></GenerateQR>
    </div>
</template>

<script lang="ts">
    // @ts-nocheck
    import Vue from 'vue';
    import {onQROK} from "../common/common";
    import GenerateQR from './GenerateQR.vue'
    import top from './top.vue'

    export default Vue.extend({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        components: {
            GenerateQR,
            top,
        },
        mounted() {
            onQROK().then(QR => {
                var img = new Image();
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    // QR.create({
                    //     text: 'Makito loves Kafuu Chino.',
                    //     size: 800,
                    //     margin: 20,
                    //     backgroundImage: img,
                    //     bindElement: 'qrcode'
                    // });
                };
                img.src = "https://avatars3.githubusercontent.com/u/5277268?s=460&v=4";
            });
        }
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
