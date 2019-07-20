<template>
    <div style="margin:10px;text-align: center">
        <el-row>
            <el-col :span="24">
                <el-button type="primary" :disabled="index <= 0" @click="$emit('pre')">上一步</el-button>
                <el-button type="primary" :disabled="index >= total -1" @click="$emit('next')">下一步</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: "PreNext",
        props: ['index', 'total'],
        data() {
            return {

            };
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
