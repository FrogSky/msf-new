<template>
    <div class="msf-steps-step4 msf-steps-step">
        <h2>我的技能<span>请选择8个技能标签，包含你的职场能力，获得的整数与职称，掌握的软件或技能</span></h2>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
                <el-tag v-for="(tag,index) in dynamicTags" :key="index" closable type="basic" @close="handleClose(tag)"> {{tag.name}}</el-tag>
                <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-row>
                <div class="msf-steps-step4-chose">
                	<el-button v-for="(item,index) in choseList" :key="index" type="custom" round size="small" @click="btnClick" btnId="123">{{item.name}}</el-button>
                </div>
            </el-row>
            <el-form-item>
                <el-button class="msf-floatleft" type="text" @click="goBack">&lt;&nbsp;上一步</el-button>
                <el-button class="msf-floatright" type="primary" @click="goNext">下一步</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                skill: [],
            },
            dynamicTags: [
                { name: '标签一' },
            ],
            choseList:[
            	{ name: '个人能力' },
            	{ name: '代码' },
            	{ name: '吸引力' },
            	{ name: '标签贴个' },
            ],
            inputVisible: false,
            inputValue: ''
        }
    },
    methods: {
        goBack() {
            this.$router.push({ path: './step2' })
        },
        goNext(){
            // this.$router.push({path: './step3'});
            // console.log()
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/personRegister4.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    skill:  JSON.stringify(this.dynamicTags),  
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './step5'});
                    }
                }
            })
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        btnClick(val) {
        	if (this.dynamicTags.length >= 8) return false;
        	if (JSON.stringify(this.dynamicTags).indexOf(val.path[0].innerText) > -1) return false;
        	this.dynamicTags.push({
                name: val.path[0].innerText
            });
        },
        handleInputConfirm() {
        	if (this.dynamicTags.length >= 8) {
        		this.inputVisible = false; return false;
        	}
        	if (JSON.stringify(this.dynamicTags).indexOf(this.inputValue) > -1) {
        		this.inputVisible = false; return false;
        	}
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push({
                    name: inputValue,
                });
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        
    }
}
</script>
<style scoped>
.el-tag+.el-tag {
    margin-left: 10px;
}

.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}

.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>