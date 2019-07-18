<template>
    <div class="msf-steps-step3 msf-steps-step">
        <h2>我的经验<span>&nbsp;(最近一份工作经验)</span></h2>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
                <el-input v-model="form.companyname" placeholder="请填写公司全称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="form.wtype" placeholder="请选择您的职位">
                    <el-option v-for="item in form.arrayJob" :value="item.id" :label="item.name" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-form-item>
                <el-input v-model="form.ccc" placeholder="请填写专业名称"></el-input>
            </el-form-item> -->
            <el-form-item>
                <el-col :span="11">
                    <el-date-picker v-model="form.workbdate" type="month" placeholder="入职时间">
                    </el-date-picker>
                </el-col>
                <el-col class="line" :span="2">&nbsp;</el-col>
                <el-col :span="11">
                    <el-date-picker v-model="form.workedate" type="month" placeholder="离职时间">
                    </el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-input class="step3-textarea" type="textarea" v-model="form.workdetail" placeholder="请填写您的工作内容，例如：1，负责新员工培训；2，分析定制员工内个月的销售业绩等..."></el-input>
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
                companyname: '',
                wtype: '',
                workbdate: '',
                workedate: '',
                workdetail: '',
                arrayJob : [{name: '国家机关、党群组织、企业、事业单位负责人',id:'1'},{name: '专业技术人员',id:'2'},{name: '办事人员和有关人',id:'3'},{name: '商业、服务业人员',id:'4'},{name: '农、林、牧、渔、水利业生产人员',id:'5'},{name: '生产、运输设备操作人员及有关人员',id:'6'},{name: '军人',id:'7'}]
            }
        }
    },
    methods: {
        goBack() {
        	this.$router.push({path: './step2'})
        },
        goNext(){
            // this.$router.push({path: './step3'});
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/personRegister3.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    companyname:  this.form.companyname,  
                    wtype:  this.form.wtype,  
                    workbdate:  this.form.workbdate.substring(0,10), // ruzhi
                    workedate:  this.form.workedate.substring(0,10), // lizhi
                    workdetail:  this.form.workdetail ,//工作内容            
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './step4'});
                    }
                }
            })
        },
    }
}
</script>