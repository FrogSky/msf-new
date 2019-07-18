<template>
    <div class="msf-steps-stepcompany2 msf-steps-stepcompany" style="margin-left: 30px;">
        <h2>我的信息</h2>
        <el-form ref="form" :model="form" label-width="110px">
            <!-- <el-form-item>
                <el-col :span="11">
                    <el-input v-model="form.aaa" placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col class="line" :span="2">&nbsp;</el-col>
                <el-col :span="11">
                    头像上传站位
                </el-col>
            </el-form-item> -->
            <el-form-item label="公司全称">
                <el-input v-model="form.aname" placeholder="填写公司全称，用于向求职者展示"></el-input>
            </el-form-item>
            <el-form-item label="公司简称">
                <el-input v-model="form.sname" placeholder="填写公司简称，用于向求职者展示"></el-input>
            </el-form-item>
            <el-form-item label="行业领域">
                <el-input v-model="form.industry" placeholder="填写行业领域，用于向求职者展示"></el-input>
            </el-form-item>
            <el-form-item label="公司规模">
                <el-input v-model="form.size" placeholder="请填写公司规模，支持招聘设置中修改"></el-input>
            </el-form-item>
            <el-form-item label="公司背景">
                <el-input v-model="form.background" placeholder="请填写公司背景"></el-input>
            </el-form-item>
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
                aname: '',  //企业全称、
                sname: '',  //企业简称、
                industry: '', // 行业领域、
                size: '', // 公司规模、
                background: '' ,//公司背景
            }
        }
    },
    methods: {
        goBack() {
            this.$router.push({path: './step1'})
        },
        goNext(){
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/companyRegister2.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    aname: this.form.aname,  //企业全称、
                    sname: this.form.sname,  //企业简称、
                    industry: this.form.industry, // 行业领域、
                    size: this.form.size, // 公司规模、
                    background: this.form.background ,//公司背景
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './step3'});
                    }
                }
            })
        }
    }
}
</script>