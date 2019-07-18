<template>
    <div class="msf-steps-step5 msf-steps-step">
        <h2>我的求职意向</h2>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
                <el-select v-model="form.hopework" multiple collapse-tags placeholder="请选择期待的职位">
                    <el-option v-for="item in form.arrayJob" :value="item.id" :label="item.name" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-col :span="11">
                    <el-select v-model="form.salary" placeholder="请选择薪资范围">
                    	<el-option v-for="item in form.salaryRange" :value="item.id" :label="item.name" :key="item.id"></el-option>
                	</el-select>
                </el-col>
                <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;-</el-col>
                <el-col :span="11">
                    <el-select v-model="form.salary1" placeholder="请选择薪资范围">
                    	<el-option v-for="item in form.salaryRange1" :value="item.id" :label="item.name" :key="item.id"></el-option>
                	</el-select>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-select v-model="form.hopetrade" multiple collapse-tags placeholder="请选择行业">
                    <el-option v-for="item in form.arrayJob" :value="item.id" :label="item.name" :key="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.worknature" placeholder="请填写工作性质"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.selfstatus" placeholder="请填写当前状态"></el-input>
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="form.worktime" type="date" placeholder="请填写到岗时间"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button class="msf-floatleft" type="text" @click="goBack">&lt;&nbsp;上一步</el-button>
                <el-button class="msf-floatright" type="primary" @click="goNext">完成</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                salaryRange :[{name: '1500',id:'1500'},{name: '2500',id:'2500'},{name: '3000',id:'3000'},{name: '4000',id:'4000'},{name: '5000',id:'5000'},{name: '6000',id:'6000'},{name: '7000',id:'7000'},{name: '8000',id:'8000'},{name: '9000',id:'9000'},{name: '10000',id:'10000'}],
                salary1: '',
                salaryRange1 :[{name: '1500',id:'1500'},{name: '2500',id:'2500'},{name: '3000',id:'3000'},{name: '4000',id:'4000'},{name: '5000',id:'5000'},{name: '6000',id:'6000'},{name: '7000',id:'7000'},{name: '8000',id:'8000'},{name: '9000',id:'9000'},{name: '10000',id:'10000'}],

                hopework: '',
                salary: '',
                hopetrade: '',
                worknature: '',
                selfstatus: '',
                worktime: '',
                arrayJob : [{name: '国家机关、党群组织、企业、事业单位负责人',id:'1'},{name: '专业技术人员',id:'2'},{name: '办事人员和有关人',id:'3'},{name: '商业、服务业人员',id:'4'},{name: '农、林、牧、渔、水利业生产人员',id:'5'},{name: '生产、运输设备操作人员及有关人员',id:'6'},{name: '军人',id:'7'}]
            }
        }
    },
    methods: {
        goBack() {
        	this.$router.push({path: './step4'})
        },
        goNext(){
            // this.$router.push({path: './step3'});
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/personRegister5.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    hopework:  this.form.hopework.toString(),  
                    salary:  this.form.salary + '-' + this.form.salary1,  
                    hopetrade:  this.form.hopetrade.toString(), 
                    worknature:  this.form.worknature, 
                    selfstatus:  this.form.selfstatus ,//ziwo zhuangtai
                    worktime:  this.form.worktime ,//daogangshijian           
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: '../personal/personJianLi'});
                    }
                }
            })
        },
    }
}
</script>