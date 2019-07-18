<template>
    <div class="msf-login">
        <div>
            <div class="msf-login-head">
                <a href="###" class="logo ">面试蜂</a>
            </div>
            <section class="msf-login-content-box cleafix">
                <div class="left_area msf-floatleft">
                    <div class="form-content" style="display: block;">
                        <div class="form_head">
                            <ul class="form_head clearfix">
                                <li class="active" style="cursor: default;">验证码登录</li>
                                <!-- <li>密码登录</li> -->
                            </ul>
                            <span class="tab_active"></span>
                        </div>
                        <div class="form_body" style="display: block;">

                            <form action="javascript:;">
                                <div class="input_item clearfix area_code_con" >
                                    <span class="area_code">0086</span>
                                    <input type="text" class="input input_white area_code_input" v-model="loginId" maxLength="11" name="" placeholder="请输入常用手机号" autocomplete="off">
                                </div>
                                <div class="input_item" data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode">
                                    <div class="input_group clearfix">
                                        <input type="text" v-model="passwordId" class="input input_white first_child" name="" placeholder="请输入密码或者验证码" data-required="required" autocomplete="off">
                                        <input type="button" class="btn btn_active last_child sense_msg_code" value="获取验证码" @click="getCode">
                                    </div>
                                </div>
                                <div class="input_item btn_group clearfix sense_login_password" data-propertyname="submit" data-controltype="Botton" style="display: block;">
                                    <input type="button" @click="loginIn" class="search_button btn-login btn btn_green btn_active btn_block btn_lg" value="登 录">
                                </div>
                            </form>
                        </div>
                        <!-- <div class="form_body" data-view="codeLogin" style="display: none;">
                            <form class="active" action="javascript:;">
                                <div class="input_item clearfix" style="display: block;">
                                    <input type="text" :value="loginId" class="input input_white" name="" placeholder="请输入常用手机号/邮箱">
                                </div>
                                <div class="input_item clearfix" style="display: block;">
                                    <input type="password" :value="passwordId" class="input input_white" name="" placeholder="请输入密码">
                                </div>
                                <div class="input_item btn_group clearfix sense_login_password" data-propertyname="submit" data-controltype="Botton" style="display: block;">
                                    <input type="button" @click="loginIn" class="search_button btn-login btn btn_green btn_active btn_block btn_lg" value="登 录">
                                </div>
                            </form>
                        </div> -->
                    </div>
                </div>
                <div class="divider msf-floatleft"></div>
                <div class="right_area msf-floatleft" style="display: block;">
                    <!-- <h5>还没有帐号:</h5> -->
                     <h5 style="color: #4fc1a7">找工作，上面试蜂！</h5>
                     <p style="color: #4fc1a7">面试有准点儿，更快更高效！</p>
                    <!-- <span href="###" class="register_now" @click="goRegister" >立即注册</span> -->
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
        return {
            loginId:'',
            passwordId:'',
            defaultPrePhone:'0086',
            prePhone:[{label:'中国', value: '0086'},{label:'中国香港', value: '00852'}],
            classificationList: [{ name: 'IT互联网', id: '1' }, { name: '金融', id: '2' }, { name: '地产公司', id: '3' }, { name: '教育传媒', id: '4' }, { name: '服务业', id: '5' }, { name: '市场销售', id: '6' }, { name: '行政/教育', id: '6' }, { name: '金融', id: '6' }, { name: '人事/行政/财务', id: '6' }, { name: '全部职位', id: '6' }],

        }
    },
    methods:{
        goRegister(){
            this.$router.push({path: './register'})
        },
        loginIn(){
            var phone = this.loginId;
            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                this.$message({
                  message: '手机号码有误，请重填',
                  type: 'warning'
                });
                return false; 
            } 
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/login.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    loginid: this.loginId,
                    password: this.passwordId,
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: './homepage'})
                    }else{
                        this.$message({
                          message: res.message,
                          type: 'warning'
                        });
                    }
                }
            })
        },
        getCode(){
            var phone = this.loginId;
            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                this.$message({
                  message: '手机号码有误，请重填',
                  type: 'warning'
                });
                return false; 
            } 
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/getPhoneCode.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    loginid: this.loginId,
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$message({
                          message: '验证码发送成功！',
                          type: 'warning'
                        });
                    }else{
                        that.$message({
                          message: res.message,
                          type: 'warning'
                        });
                    }
                }
            })
        }
    },
    watch:{
        'loginId'(val){},
        'loginId'(val){}
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