<template>
    <div class="bottom">
        <div class="copyright">
            <div>🎁 2019
                <a href="https://zhihu.com/people/AJLoveChina" target="_blank">👦 霸都丶傲天</a> &
                <a href="https://www.zhihu.com/people/tian-bian-de-ai-55" target="_blank">👧 Lw Mao</a> | Made with ❤︎</div>
            <div>基于知名的awesome-qr开源库二次开发</div>
            <div>本项目中所有的unicode图案来自 <a href="https://ajlovechina.github.io/awesome-unicode-symbol/index.html" target="_blank">Unicode漂亮图案大全</a></div>
        </div>
        <div id="zuozhe">
            <p>作者：霸都丶傲天</p>
            <p>您可以在下面站点找到我</p>
            <ul>
                <li>
                    <a href="https://zhihu.com/people/AJLoveChina" target="_blank">知乎@霸都丶傲天</a>
                </li>
                <li>
                    <a href="https://github.com/AJLoveChina" target="_blank">Github@霸都丶傲天</a>
                </li>
            </ul>

            <img src="../assets/me.png" class="me-img" alt="">
        </div>

        <div class="end">
            -- Bye：） --
        </div>
    </div>
</template>
<script>
    export default {
        name: "bottom",
        data() {
            return {};
        },
        components: {},
        computed: {},
        watch: {},
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>
<style scoped lang="less">
    .bottom{
        font-size:12px;
    }
    .copyright{
        padding:20px 0;
        line-height: 20px;
    }
    .end{
        text-align: center;
        margin:10px auto;
    }
    .me-img{
        width:100px;
        display: block;
        margin:0 auto;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: #ccc  0 0 4px;
    }
    #zuozhe{
        margin:20px 0 20px;
        font-size:12px;
        line-height: 20px;
    }
</style>
