<template>
    <div>
        <el-menu  class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <span class="item">漂亮的二维码</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: "top",
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
    .el-menu-demo{
        background-color: #F56C6C;

        .item{
            color:white;
        }
    }
</style>
