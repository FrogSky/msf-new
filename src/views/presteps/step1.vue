<template>
    <div class="msf-steps-step1 msf-steps-step">
        <h2>我的信息</h2>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
                <el-col :span="11">
                    <el-input v-model="form.uname" placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col class="line" :span="2">&nbsp;</el-col>
                <el-col :span="11" style="position: relative;">
                    <img v-if="form.sex==1" class="touxiangstep1" src="../../assets/images/touxiang-nan1.png" alt="">
                    <img v-if="form.sex==2" class="touxiangstep1" src="../../assets/images/touxiang-nv.jpg" alt="">
                </el-col>
            </el-form-item>
            <el-form-item class="msf-reset-radio">
                <el-col :span="11">
                    <el-radio v-model="form.sex" label="1" border>男</el-radio>
                </el-col>
                <el-col class="line" :span="2">&nbsp;</el-col>
                <el-col :span="11">
                    <el-radio v-model="form.sex" label="2" border>女</el-radio>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="form.birthdate" type="date" placeholder="请选择出生年月"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="form.workdate" type="month" placeholder="请选择参加工作时间"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.rcity" placeholder="请输入现居住城市"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.hcity" placeholder="请输入户籍所在地"></el-input>
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
                uname: '',
                sex: '1',
                birthdate: '',
                workdate: '',
                rcity: '',
                hcity: '',
                arrayDegree: [{ name: '小学', id: '1' }, { name: '初中', id: '2' }, { name: '高中', id: '3' }, { name: '中专', id: '4' }, { name: '大专', id: '5' }, { name: '本科', id: '6' }, { name: '硕士', id: '7' }, { name: '博士', id: '8' }]
            }
        }
    },
    methods: {
        goNext(){
            // this.$router.push({path: './step3'});
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/personRegister1.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    uname:  this.form.uname,  //企业全称、
                    sex:  this.form.sex,  //企业简称、
                    birthdate:  this.form.birthdate, // 生日
                    workdate:  this.form.workdate, // 参加工作时间
                    rcity:  this.form.rcity ,//公司背景
                    hcity:  this.form.hcity,                
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './step2'});
                    }
                }
            })
        },
        goBack() {
            this.$router.push({path: '../login'})
        },
        
    }
}
</script>