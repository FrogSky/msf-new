<template>
    <div class="msf-steps-step2 msf-steps-step">
        <h2>我的学历</h2>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
                <el-input v-model="form.school" placeholder="请填写学校名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="form.edubg" placeholder="选择学历">
                    <el-option v-for="item in form.arrayDegree" :value="item.id" :label="item.name" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.skillname" placeholder="请填写专业名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-col :span="11">
                    <el-date-picker v-model="form.studybdate" type="month" placeholder="入学年月">
                    </el-date-picker>
                </el-col>
                <el-col class="line" :span="2">&nbsp;</el-col>
                <el-col :span="11">
                    <el-date-picker v-model="form.studyedate" type="month" placeholder="毕业年月">
                    </el-date-picker>
                </el-col>
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
                school: '',
                edubg: '',
                skillname: '',
                studybdate: '',
                studyedate: '',
                arrayDegree: [{ name: '小学', id: '1' }, { name: '初中', id: '2' }, { name: '高中', id: '3' }, { name: '中专', id: '4' }, { name: '大专', id: '5' }, { name: '本科', id: '6' }, { name: '硕士', id: '7' }, { name: '博士', id: '8' }]
            }
        }
    },
    methods: {
        goBack() {
        	this.$router.push({path: './step1'})
        },
        goNext(){
            // this.$router.push({path: './step3'});
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/personRegister2.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    school:  this.form.school,  
                    edubg:  this.form.edubg,  
                    skillname:  this.form.skillname, // 专业
                    studybdate:  this.form.studybdate, // 入学
                    studyedate:  this.form.studyedate ,//毕业             
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './step3'});
                    }
                }
            })
        },
        
    }
}
</script>