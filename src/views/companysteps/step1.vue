<template>
    <div class="msf-steps-stepcompany1 msf-steps-stepcompany" style="margin-left: 30px;">
        <h2>我的信息[公司]</h2>
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
            <!-- <el-form-item label="姓名">
                <el-input v-model="form.eee" placeholder="填写你工作中的姓名，用于向求职者展示"></el-input>
            </el-form-item>
            <el-form-item label="职位">
                <el-input v-model="form.eee" placeholder="填写你工作中的姓名，用于向求职者展示"></el-input>
            </el-form-item> -->
            <el-form-item label="接受简历邮箱">
                <el-input v-model="form.email" placeholder="请填写常用邮箱，支持招聘设置中修改"></el-input>
            </el-form-item>
            <!-- <el-form-item label="公司全称">
                <el-input v-model="form.eee" placeholder="请填写与营业执照/劳动合同/公司发票抬头一致的公司全称"></el-input>
            </el-form-item> -->
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
                email:'',
                aaa: '',
                bbb: '',
                ccc: '',
                ddd: '',
                eee: '',
                fff: '',
                arrayDegree: [{ name: '小学', id: '1' }, { name: '初中', id: '2' }, { name: '高中', id: '3' }, { name: '中专', id: '4' }, { name: '大专', id: '5' }, { name: '本科', id: '6' }, { name: '硕士', id: '7' }, { name: '博士', id: '8' }]
            }
        }
    },
    methods: {
        goBack() {
            this.$router.push({path: '../login'})
        },
        goNext(){
            
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/companyRegister1.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    email: this.form.email,
                    // password:this.passwordId,
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './step2'});
                    }
                }
            })
        }
    }
}
</script>