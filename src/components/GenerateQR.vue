<style scoped lang="less">
    .title-alert{
        margin:10px 0;
    }
    .small {
        font-size:12px;
    }
    .title{
        padding:10px;
    }
    .center{
        text-align: center;
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

    .realimg{
        text-align: center;
        margin:20px 0;
    }
</style>
<template>
    <div v-loading="!QR" style="padding: 0 10px;">
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
            <p class="small title center">选择一张背景图片，您也可以不选择</p>
            <input type="file" ref="fileInput" @change="listenFileInput" />
            <PreNext :index="active" :total="steps.length" @prev="prev" @next="next"></PreNext>
        </div>


        <div v-show="active === 2">
            <el-alert :closable="false" class="title-alert" center
                    title="修改Tip文字"
                    type="info">
            </el-alert>
            <el-input  type="textarea" v-model="tip"></el-input>
            <PreNext :index="active" :total="steps.length" @prev="prev" @next="next"></PreNext>
        </div>


        <div v-show="active === 3">
            <el-button type="success" @click="download">下载</el-button>
            <h6 v-if="realimg" style="text-align: center">如果没有自动下载,请长按图片或者鼠标右键下载</h6>
            <div ref="realimg" class="realimg"></div>
            <PreNext :index="active" :total="steps.length" @prev="prev" @next="next"></PreNext>
        </div>


        <el-alert :closable="false" class="title-alert" center
                  title="实时阅览"
                  type="success">
        </el-alert>
        <div v-if="!inputContent" style="text-align: center;font-size:12px;;padding:10px;">无预览(请输入文字)</div>
        <div id="final-container">
            <div id="qrcode" ref="qrcode"></div>
            <div class="icon-container">
                <div class="icon">{{icon}}</div>
            </div>
            <p class="tip" v-html="tipResolve"></p>
        </div>


        <bottom></bottom>
    </div>
</template>
<script lang="ts">
    // @ts-nocheck
    import {onQROK} from "../common/common";
    import PreNext from './PreNext'
    import {sleep} from "../common/common";
    import html2canvas from 'html2canvas'
    import bottom from './bottom.vue'

    export default  {
        name: "GenerateQR",
        data() {
            return {
                QR: null,
                active: 3,
                steps: ["文字", "图片", "Tip", "下载"],
                inputContent: "123",
                imgData: null,
                tip: "这是tip文字,您可以修改的",
                icon: "💖",
                realimg: null,
            };
        },
        components: {
            PreNext,
            bottom,
        },
        computed: {
            tipResolve() {
                var tip = this.tip;
                if (!tip) {
                    return tip;
                }
                tip = tip.replace(/[\r\n]/g, "<br>")
                return tip;
            }
        },
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
            buildImgElementFromCanvas(canvas) {
                return new Promise((resolve, reject) => {
                    let img = document.createElement("img");
                    img.src = canvas.toDataURL();
                    img.onload = () => {
                        resolve(img);
                    }
                    img.onerror = () => {
                        resolve(null)
                    }
                })
            },
            download() {
                html2canvas(document.getElementById("final-container")).then((canvas) => {
                    this.buildImgElementFromCanvas(canvas).then(img => {
                        if (img) {
                            img.width = 200;
                            this.$refs.realimg.appendChild(img);
                            this.realimg = img;
                        }
                    });

                    var oA = document.createElement("a");
                    oA.download = 'awesome-qrcode.png';// 设置下载的文件名，默认是'下载'
                    oA.href = canvas.toDataURL();
                    document.body.appendChild(oA);
                    oA.click();
                    oA.remove(); // 下载之后把创建的元素删除


                });
            },
            async render() {
                await sleep(400);
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
                if (!e.target.files[0]) {
                    this.imgData = null;
                    return;
                }
                var img = new Image();
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
