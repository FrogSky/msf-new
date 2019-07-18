<template>
    <div class="msf-login">
        <div>
            <div class="msf-login-head">
                <a href="###" class="logo ">面试蜂</a>
            </div>
            <section class="msf-login-content-box cleafix">
                <!-- <h4>账号注册</h4> -->
                <br>
                <div class="left_area msf-floatleft">
                    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="95px" class="demo-ruleForm">
                    <el-form-item label="账号：" prop="name">
                    <el-input v-model.number="ruleForm2.name" ></el-input>
                  </el-form-item>
                  <el-form-item label="密码：" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码：" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" ></el-input>
                  </el-form-item>
                  <br>
                  <el-form-item>
                    <el-button class="registerBtn" type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                  </el-form-item>
                </el-form>
                </div>
                <div class="divider msf-floatleft"></div>
                <div class="right_area msf-floatleft" style="display: block;">
                    <h5>已有面试蜂帐号:</h5>
                    <span href="###" class="register_now" @click="goLogin" >立即登录</span>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import msfHeader from "~/components/header.vue";
import msfSearchbox from "~/components/searchbox.vue";
export default {
    data() {
      //   var checkname = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('账号不能为空'));
      //   }
      //   // setTimeout(() => {
      //   //   if (!Number.isInteger(value)) {
      //   //     callback(new Error('请输入数字值'));
      //   //   } else {
      //   //     if (value < 18) {
      //   //       callback(new Error('必须年满18岁'));
      //   //     } else {
      //   //       callback();
      //   //     }
      //   //   }
      //   // }, 1000);
      // };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
        },
            loginId:'admin',
            passwordId:'admin',
            defaultPrePhone:'0086',
            prePhone:[{label:'中国', value: '0086'},{label:'中国香港', value: '00852'}],
            classificationList: [{ name: 'IT互联网', id: '1' }, { name: '金融', id: '2' }, { name: '地产公司', id: '3' }, { name: '教育传媒', id: '4' }, { name: '服务业', id: '5' }, { name: '市场销售', id: '6' }, { name: '行政/教育', id: '6' }, { name: '金融', id: '6' }, { name: '人事/行政/财务', id: '6' }, { name: '全部职位', id: '6' }],

        }
    },
    methods:{
        goLogin(){
            this.$router.push({path: './login'})
        },
        loginIn(){
            $.ajax({
                url:'http://123.56.217.229:8080/login.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    loginid: this.loginId,
                    password:this.passwordId,
                }),
                success:function(res){
                    if (res.code == 200) {
                        // fn
                    }
                }
            })
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
        msfSearchbox
    }
}
</script>
<style>
    @import '../assets/css/views/login.css';
</style>