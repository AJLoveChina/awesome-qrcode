<style scoped lang="less">
    .title-alert{
        margin:10px 0;
    }
    #final-container {
        position: relative;
        margin: 0 20px;
        background-color: white;
        border: 1px solid #ccc;
        font-size:12px;

        #qrcode {
            width: 100%;
            border-bottom: 1px solid #ccc;
        }
        .tip {
            text-align: center;
            line-height: 20px;
            padding:10px;
        }
        .icon-container{
            position: relative;
            width:100%;
            height:0;
        }
        .icon {
            @w:40px;
            position: absolute;
            bottom:0;
            right:0;
            transform: translate(-50%, 50%);
            width:@w;
            height:@w;
            line-height: @w;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            background-color: #F56C6C;
            color:white;
        }
    }
</style>
<template>
    <div v-loading="!QR">
        <el-steps :active="active" finish-status="success" style="margin:10px;">
            <el-step v-for="item in steps" :title="item"></el-step>
        </el-steps>

        <div v-if="active === 0">
            <el-alert :closable="false" class="title-alert" center
                    title="输入URL/文字"
                    type="info">
            </el-alert>
            <el-row>
                <el-col :span="24">
                    <el-input v-model="inputContent" placeholder="请输入URL地址或者文字或者任何字符都可以"></el-input>
                </el-col>
            </el-row>
            <PreNext :index="active" :total="steps.length" @prev="prev" @next="next"></PreNext>
        </div>

        <div v-show="active === 1">
            <el-alert :closable="false" class="title-alert" center
                    title="选择图片"
                    type="info">
            </el-alert>
            <input type="file" ref="fileInput" @change="listenFileInput" />
            <PreNext :index="active" :total="steps.length" @prev="prev" @next="next"></PreNext>
        </div>


        <div v-show="active === 2">
            <el-alert :closable="false" class="title-alert" center
                    title="修改Tip文字"
                    type="info">
            </el-alert>
            <el-input v-model="tip"></el-input>
            <PreNext :index="active" :total="steps.length" @prev="prev" @next="next"></PreNext>
        </div>


        <h3>实时预览</h3>
        <div id="final-container">
            <div v-if="!inputContent">无预览(请输入文字)</div>
            <div id="qrcode" ref="qrcode"></div>
            <div class="icon-container">
                <div class="icon">{{icon}}</div>
            </div>
            <p class="tip">{{tip}}</p>
        </div>

    </div>
</template>
<script lang="ts">
    import {onQROK} from "../common/common";
    import PreNext from './PreNext'
    import Vue from 'vue'

    export default  {
        name: "GenerateQR",
        data() {
            return {
                QR: null,
                active: 2,
                steps: ["文字", "图片", "Tip", "下载"],
                inputContent: "111",
                imgData: null,
                tip: "这是tip文字,您可以修改的",
                icon: "💖"
            };
        },
        components: {
            PreNext
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            onQROK().then(QR => {
                this.QR = QR;

                this.render()
            })
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
                let qrcodeHeight = this.$refs.qrcode.getBoundingClientRect().width;
                this.$refs.qrcode.style.height = `${qrcodeHeight}px`;

                this.QR.create({
                    text: this.inputContent,
                    size: 800,
                    margin: 20,
                    backgroundImage: this.imgData || undefined,
                    bindElement: 'qrcode'
                });
            },
            listenFileInput(e) {
                var img = new Image;
                img.onload = () => {
                    this.imgData = img;
                };
                img.src = URL.createObjectURL(e.target.files[0]);
            },
            prev() {
                this.active --;
            },
            next() {
                this.active ++;
            },
        }
    }
</script>
