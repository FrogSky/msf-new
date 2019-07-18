<template>
    <div class="msf-postjobs">
        <msf-header></msf-header>
        <div class="msf-postjobs-mid">
          <div class="msf-postjobs-mid-con">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="109px" class="demo-ruleForm">
              <el-form-item label="职位类型：" class="msf-reset-radio">
                <el-col :span="3">
                    <el-radio v-model="ruleForm.ityep" label="1" border>社招</el-radio>
                </el-col>
                <el-col class="line" :span="1">&nbsp;</el-col>
                <el-col :span="3">
                    <el-radio v-model="ruleForm.ityep" label="2" border>校招</el-radio>
                </el-col>
              </el-form-item>
              <el-form-item label="职位名称：" prop="iname">
                <el-input v-model="ruleForm.iname"></el-input>
              </el-form-item>
              <el-form-item label="职位类别：" class="msf-select-line" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="月薪范围：" prop="salary">
                <el-col :span="6">
                    <el-input v-model="ruleForm.salary1"><template slot="append">K</template></el-input>
                </el-col>
                <el-col class="line" :span="1">&nbsp;至&nbsp;</el-col>
                <el-col :span="6">
                    <el-input v-model="ruleForm.salary2"><template slot="append">K</template></el-input>
                </el-col>
                <el-col class="line" :span="8">&nbsp;<span class="msf-select-gray">&nbsp;&nbsp;&nbsp;只能输入整数，如‘9’</span></el-col>
              </el-form-item>
              <!-- <div>时间和地点（地点分显示和不显示）</div> -->
              <div class="msf-dashed-line" style="margin-bottom: 22px;"></div>
              <el-form-item label="职位描述：" prop="idesc">
                <el-input type="textarea" v-model="ruleForm.idesc"></el-input>
              </el-form-item>
              <el-form-item label="候选人画像：" prop="candidate">
                <el-col :span="11">
                    <el-input v-model="ruleForm.candidate1"></el-input>
                </el-col>
                <el-col class="line" :span="2">&nbsp;</el-col>
                <el-col :span="11">
                    <el-input v-model="ruleForm.candidate2"></el-input>
                </el-col>
              </el-form-item>

              <div class="msf-dashed-line" style="margin-bottom: 22px;"></div>

              <el-form-item label="工作性质：" class="msf-reset-radio">
                <el-col :span="3">
                    <el-radio v-model="ruleForm.wtype" label="1" border>全职</el-radio>
                </el-col>
                <el-col class="line" :span="1">&nbsp;</el-col>
                <el-col :span="3">
                    <el-radio v-model="ruleForm.wtype" label="2" border>兼职</el-radio>
                </el-col>
                <el-col class="line" :span="1">&nbsp;</el-col>
                <el-col :span="3">
                    <el-radio v-model="ruleForm.wtype" label="3" border>实习</el-radio>
                </el-col>
              </el-form-item>

              <el-form-item label="工作经验：" class="msf-select-line" prop="wexp">
                <el-select v-model="ruleForm.wexp" placeholder="请选择活动区域">
                  <el-option label="1年以下" value="0"></el-option>
                  <el-option label="1-3年" value="1"></el-option>
                  <el-option label="3-5年" value="2"></el-option>
                  <el-option label="5-7年" value="3"></el-option>
                  <el-option label="7-10年" value="4"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="学历要求："  class="msf-select-line" prop="edubg">
                <el-select v-model="ruleForm.edubg" placeholder="请选择活动区域">
                  <el-option v-for="item in arrayDegree" :value="item.id" :label="item.name" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
              <div class="msf-dashed-line" style="margin-bottom: 22px;"></div>
              <el-form-item label="工作地点：" prop="wposition">
                <el-input v-model="ruleForm.wposition"></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              </el-form-item>
            </el-form>
          </div>
        </div>
    </div>
</template>
<script>
import msfHeader from "~/components/header.vue";

// import {SimpleCalendar} from '~/assets/css/calendar/javascripts/simple-calendar-es6.js';
import SimpleCalendar from '~/assets/css/calendar/javascripts/simple-calendar-es6.js'; 
export default {
    data() {
        return {
            ruleForm: {
              ityep: '',//职位类型、
              iname: '',// 职位名称、
              salary1: '',//月薪范围、
              salary2: '',//月薪范围、
              idesc: '',// 职位描述、
              candidate1: '',// 候选人画像、
              candidate2: '',// 候选人画像、
              wtype: '',//工作性质、
              wexp: '',// 工作经验、
              edubg: '',// 学历背景、
              wposition: '', //工作地址
            },
            arrayDegree: [{ name: '小学', id: '1' }, { name: '初中', id: '2' }, { name: '高中', id: '3' }, { name: '中专', id: '4' }, { name: '大专', id: '5' }, { name: '本科', id: '6' }, { name: '硕士', id: '7' }, { name: '博士', id: '8' }],
            rules: {
              ityep: [{ required: true, message: '该项为必填', trigger: 'blur' }],//职位类型、
              iname: [{ required: true, message: '该项为必填', trigger: 'blur' }],// 职位名称、
              salary1: [{ required: true, message: '该项为必填', trigger: 'blur' }],//月薪范围、
              salary2: [{ required: true, message: '该项为必填', trigger: 'blur' }],//月薪范围、
              idesc: [{ required: true, message: '该项为必填', trigger: 'blur' }],// 职位描述、
              candidate1: [{ required: true, message: '该项为必填', trigger: 'blur' }],// 候选人画像、
              candidate2: [{ required: true, message: '该项为必填', trigger: 'blur' }],// 候选人画像、
              wtype: [{ required: true, message: '该项为必填', trigger: 'blur' }],//工作性质、
              wexp: [{ required: true, message: '该项为必填', trigger: 'blur' }],// 工作经验、
              edubg: [{ required: true, message: '该项为必填', trigger: 'blur' }],// 学历背景、
              wposition: [{ required: true, message: '该项为必填', trigger: 'blur' }], //工作地址
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/CreateInterViewDay.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                      ityep: this.ruleForm.ityep,
                      iname: this.ruleForm.iname,
                      salary: this.ruleForm.salary1 + '-' + this.ruleForm.salary2,
                      idesc: this.ruleForm.idesc,
                      candidate: this.ruleForm.candidate1 + '-' + this.ruleForm.candidate2,
                      wtype: this.ruleForm.wtype,
                      wexp: this.ruleForm.wexp,
                      edubg: this.ruleForm.edubg,
                      wposition: this.ruleForm.wposition,      
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './jobsdays'});
                    }
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components: {
        msfHeader,
    },
    mounted: function () {
      setTimeout(function(){
        window.scrollTo(0,0);
      },100)
        
    },
}
</script>
<style>
    @import '../../assets/css/views/jobs.css';

</style>