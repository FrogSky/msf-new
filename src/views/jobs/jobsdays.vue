<template>
    <div class="msf-jobsdays">
        <msf-header></msf-header>
        <div class="msf-jobsdays-top">
          <div class="msf-jobsdays-top-left msf-floatleft">
            <div class="calendar-con">
              <div id='containerall'></div>
            </div>
            <p>
              详细信息
            </p>
          </div>
          <div class="msf-jobsdays-top-right msf-floatright">
            <p>十 发布面试日</p>
          </div>
        </div>
        <div class="msf-jobsdays-mid">
          <div class="msf-jobsdays-mid-con">
            <msf-jobsdayscard v-for="(item, index) in objs" :obj="item"></msf-jobsdayscard>  
          </div>
        </div>
    </div>
</template>
<script>
import msfHeader from "~/components/header.vue";
import msfJobsdayscard from "~/components/jobsdayscard.vue";

// import {SimpleCalendar} from '~/assets/css/calendar/javascripts/simple-calendar-es6.js';
import SimpleCalendarAll from '~/assets/css/calendarall/javascripts/simple-calendar-es6.js'; 
import { constants } from "../../assets/script/constants.js";
export default {
    data() {
        return {
            objs:[{
                title1: '市场、大客户经理',
                title2: '2018.9.1[9:00-11:00]',
                title5: '[望京]',
                title3: '17',
                title4: '26',
                titleList:['8k-15k','hayaya','测试啊']
            },{
                title1: '市场、大客户经理',
                title2: '2018.9.1[9:00-11:00]',
                title5: '[望京]',
                title3: '17',
                title4: '26',
                titleList:['8k-15k','hayaya','测试啊']
            }]
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
                      itype: this.ruleForm.itype,
                      iname: this.ruleForm.iname,
                      salary: this.ruleForm.salary,
                      idesc: this.ruleForm.idesc,
                      candidate: this.ruleForm.candidate,
                      wtype: this.ruleForm.wtype,
                      wexp: this.ruleForm.wexp,
                      edubg: this.ruleForm.edubg,
                      wposition: this.ruleForm.wposition,      
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.objs = res.data;
                        console.log(that.objs)
                        alert(111)
                        that.objs.map((item,index)=>{
                          console.log(item)
                          item = {
                            title1: item.iname,
                            title2: item.updatetime,
                            title5: item.wposition,
                            title3: item.edubg,
                            title4: item.wtype,
                            titleList:[ constants.getNameByCode('arrayDegree',item.edubg),constants.getNameByCode('wtype',item.wtype),'测试啊']
                          }
                          // title1: '市场、大客户经理',
                          // title2: '2018.9.1[9:00-11:00]',
                          // title5: '[望京]',
                          // title3: '17',
                          // title4: '26',
                          // titleList:['8k-15k','hayaya','测试啊']
                        });
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
        msfJobsdayscard
    },
    mounted: function () {
      setTimeout(function(){
        window.scrollTo(0,0);
      },100)
      let that = this;
      var myCalendar = new SimpleCalendarAll('#containerall');
      $.ajax({
          url:'http://123.56.217.229:8080/getCurrentUserInfo.msf',
          type: 'post',
          contentType: "application/json;charset=UTF-8",
          data: JSON.stringify({
              loginid:  'test',  //企业全称、
          }),
          success:function(res1){
              if (res1.msgCode == '0000') {
                  $.ajax({
                    url:'http://123.56.217.229:8080/getAllInterviweDay.msf',
                    type: 'post',
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify({
                        loginid:  res1.data.loginid,  //企业全称、
                    }),
                    success:function(res){
                        if (res.msgCode == '0000') {
                          that.objs = res.data;
                          that.objs.map((item,index)=>{
                              item.title1 = item.iname,
                              item.title2 = item.updatetime.substring(0,10),
                              item.title5 = item.salary,
                              item.title3 = item.edubg,
                              item.title4 = item.wtype,
                              item.titleList=[ constants.getNameByCode('arrayDegree',item.edubg),constants.getNameByCode('wexp',item.wexp),constants.getNameByCode('wtype',item.wtype)]
                          });
                      }
                    },error:function(res){
                      // alert(111)
                    }
                })
              }
          },error:function(res){
            // alert(111)
          }
      })
    },
}
</script>
<style>
  @import '../../assets/css/calendarall/stylesheets/simple-calendar.css';
  .msf-jobsdays{
    background: #F2F5F4;
  }
  .msf-jobsdays-mid{
    background: #F2F5F4;
    min-height: 1500px;
  }
    .msf-jobsdays-mid-con{
      width: 1200px;
      margin: 0 auto;
      padding-top: 40px;
    }
    .msf-jobsdays-top{
      overflow: hidden;
      width: 1200px;
      margin: 30px auto;
    }
    .msf-jobsdays-top-right p{
        background: #4fc1a7;
        height: 70px;
        width: 303px;
        line-height: 65px;
        color: #fff;
        text-align: center;
        font-size: 22px;
        cursor: pointer;
    }

</style>