<template>
    <div>
        <el-steps :active="active" finish-status="success" style="margin:10px;">
            <el-step v-for="item in steps" :title="item"></el-step>
        </el-steps>

        <div v-if="active === 0">
            <el-row>
                <el-col :span="24">
                    <el-input v-model="inputContent" placeholder="请输入URL地址或者文字或者任何字符都可以"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-button type="primary" @click="next">下一步</el-button>
                </el-col>
            </el-row>
        </div>

        <div v-show="active === 1">
            <input type="file" ref="fileInput" @change="listenFileInput" />
            <el-button type="primary" @click="next">上一步</el-button>
            <el-button type="primary" @click="next">下一步</el-button>
        </div>

        <div>
            <h3>实时预览</h3>
            <div v-if="!inputContent">无预览(请输入文字)</div>
            <div id="qrcode" style="width:300px;height:300px;"></div>
        </div>

    </div>
</template>
<script lang="ts">
    import {onQROK} from "../common/common";

    export default {
        name: "GenerateQR",
        data() {
            return {
                active: 0,
                steps: ["输入文字", "选择图片", "步骤三", "步骤4"],
                inputContent: "",
                imgData: null,
            };
        },
        components: {},
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        watch: {
            inputContent(newVal) {
                this.render();
            },
            imgData(newVal) {
                this.render();
            }
        },
        methods: {
            render() {
                onQROK().then(QR => {
                    QR.create({
                        text: 'AJLoveChina',
                        size: 800,
                        margin: 20,
                        backgroundImage: this.imgData || undefined,
                        bindElement: 'qrcode'
                    });
                });
            },
            listenFileInput(e) {
                var img = new Image;
                img.onload = () => {
                    this.imgData = img;
                }
                img.src = URL.createObjectURL(e.target.files[0]);
            },
            next() {
                this.active ++;
            },
        }
    }
</script>
