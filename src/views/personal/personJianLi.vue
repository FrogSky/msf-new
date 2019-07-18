<template>
    <div class="msf-personal" >
        <msf-header></msf-header>
        <div class="msf-personal-content">
          <div class="msf-personal-cont">
            <div class="msf-personal-left">
              <p style="color: gray;padding: 30px 40px 0;font-size: 15px;">最近更新于：{{undateTime}}</p>
              <img v-if="sex==1" class="touxiang" src="../../assets/images/touxiang-nan.png" alt="">
              <img v-else="sex==2" class="touxiang" src="../../assets/images/touxiang-nv.jpg" alt="">
              <div class="msf-p-one">
                  <h3>{{uname}}<img src="../../assets/images/nande.png" alt=""></h3>
                  <br>
                  <div>
                    <p class="nocss"><i class="el-icon-goods "></i>{{page1.aaa}}</p><var>|</var>
                    <p><i class="el-icon-star-off"></i>{{page1.bbb}}</p><var>|</var>
                    <p><i class="el-icon-news"></i>{{page1.ccc}}</p>
                  </div><br><div>
                    <p class="nocss"><i class="el-icon-phone-outline "></i>{{page1.ddd}}</p><var>|</var>
                    <p><i class="el-icon-location-outline"></i>{{page1.eee}}</p>
                  </div>
              </div>
              <div class="smf-p-linecon"><div class="msf-line"></div></div>
              <div class="msf-p-two">
                  <h3>我的优势</h3>
                  <ul>
                    <li v-for="(item,index) in page2">{{index+1}}、{{item.name}}</li>
                  </ul>
              </div>
              <div class="smf-p-linecon"><div class="msf-line"></div></div>
              <div class="msf-p-three">
                  <h3>求职意向</h3>
                  <div>
                    <span><i class="el-icon-goods"></i>{{page3.aaa}}</span><var>|</var>
                    <span><i class="el-icon-edit-outline"></i>{{page3.bbb}}</span><var>|</var>
                    <span><i class="el-icon-service"></i>{{page3.ccc}}</span><var>|</var>
                    <span><i class="el-icon-phone-outline"></i>{{page3.ddd}}</span>
                  </div>
              </div>
              <div class="smf-p-linecon"><div class="msf-line"></div></div>
              <div class="msf-p-four">
                  <h3>工作经历</h3>
                  <div>
                    <p><var>ο</var>{{page4.aaa}} <span style="float: right">{{page4.ddd}}</span></p>
                    <p><var>ο</var>{{page4.bbb}}</p>
                    <p><var>ο</var>工作内容</p>
                    <ul>
                      <li v-for="(item,index) in page4.ccc">{{index+1}}、{{item}}</li>
                    </ul>
                  </div>
              </div>
              <div class="smf-p-linecon"><div class="msf-line"></div></div>
              <div class="msf-p-five">
                  <h3>项目经验</h3>
                  <div>
                    <p><var>ο</var>{{page5.aaa}} <span style="float: right">{{page5.ddd}}</span></p>
                    <p><var>ο</var>项目内容</p>
                    <ul>
                      <li v-for="(item,index) in page5.ccc">{{index+1}}、{{item}}</li>
                    </ul>
                    <p><var>ο</var>项目业绩</p>
                    <ul>
                      <li v-for="(item,index) in page5.eee">{{index+1}}、{{item}}</li>
                    </ul>
                  </div>

              </div>
              <div class="smf-p-linecon"><div class="msf-line"></div></div>
              <div class="msf-p-six">
                  <h3>教育经历</h3>
                  <div>
                    {{page6.aaa}} &nbsp; | &nbsp;{{page6.bbb}}&nbsp; | &nbsp;{{page6.ccc}}
                  </div>
              </div>
            </div>
            <div class="msf-personal-right">
              <div class="msf-p-right">
                我的面试申请： 23个
              </div>
              <br>
              <div class="msf-p-right">
                我收到的面试申请： 33个
              </div>
              <br>
              <div class="msf-p-online">
                <span>在线简历</span>
                <ul>
                  <li>★&nbsp;&nbsp;基本信息</li>
                  <li>★&nbsp;&nbsp;我的优势</li>
                  <li>★&nbsp;&nbsp;我的技能</li>
                  <li>★&nbsp;&nbsp;求职意向</li>
                  <li>★&nbsp;&nbsp;工作经历</li>
                  <li>★&nbsp;&nbsp;项目经验</li>
                  <li>★&nbsp;&nbsp;教育经历</li>
                  <li>★&nbsp;&nbsp;社交主页</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import msfHeader from "~/components/header.vue";
import { constants } from "../../assets/script/constants.js";
export default {
    data() {
        return {
          undateTime: '2019-04-14',
          sex: '1',
          uname:'',
          page1:{
            aaa:'10年经验',
            bbb:'本科学历',
            ccc:'在职考虑机会',
            ddd:'15830495873',
            eee:'weixinhao'
          },
          page2:[{"name":"标签一"}],
          page3:{
            aaa:'城市经理',
            bbb:'1k-2k',
            ccc:'在职考虑机会',
            ddd:'15830495873',
            eee:'weixinhao'
          },
          page4: {
            aaa:'北京各地一家企业公司',
            bbb:'企业经理',
            ccc: ['辅助都怕','啥福建省房间客户啥福建省房间客户啥福建省房间客户啥福建省房间客户','站履行职啊实打实大师的地方','司法近似疯狂和锐工会','绝地反击客户福尔'],
            ddd: '2019-2-10--2019-2-10'
          },
          page5:{
            aaa:'振洲工艺学院 | 负责人',
            bbb:'计算科学',
            ccc: ['辅助都怕','啥福建省房间客户啥福建省房间客户啥福建省房间客户啥福建省房间客户','站履行职啊实打实大师的地方','司法近似疯狂和锐工会','绝地反击客户福尔'],
            ddd: '2019-2-10--2019-2-10',
            eee: ['辅助都怕','啥福建省房间客户啥福建省房间客户啥福建省房间客户啥福建省房间客户','站履行职啊实打实大师的地方','司法近似疯狂和锐工会','绝地反击客户福尔'],
          },
          page6:{
            aaa:'振洲工艺学院',
            bbb:'计算科学',
            ccc:'本科'
          }
        }
    },
    components: {
        msfHeader,
    },
    mounted: function () {
        this.$nextTick(function () {
          let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080//getCurrentUserInfo.msf',
                type: 'post',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    loginid:  'test',  //企业全称、
                }),
                success:function(res1){
                    if (res1.msgCode == '0000') {
                        $.ajax({
                          url:'http://123.56.217.229:8080//getPersonInfo.msf',
                          type: 'post',
                          contentType: "application/json;charset=UTF-8",
                          data: JSON.stringify({
                              loginid:  res1.data.loginid,  //企业全称、
                          }),
                          success:function(res){
                              if (res.msgCode == '0000') {
                                let response = res.data;
                                  // that.$router.push({path: '/presteps/step1'});
                                  that.uname = response.uname;
                                  that.sex = response.sex;
                                  that.page1 = {
                                    aaa: parseInt((new Date().getTime() - new Date(response.workdate).getTime())/(1000*60*60*24*365)) + '年工作经验',
                                    bbb: constants.getNameByCode('arrayDegree',response.edubg),
                                    ccc: response.selfstatus,
                                    ddd: res1.data.loginid,
                                    eee: '暂无微信'
                                  }
                                  that.page2 = JSON.parse(response.skill);
                                  that.page3 = {
                                    aaa: constants.getNameByCode('arrayJob',response.hopework),
                                    bbb: response.salary,
                                    ccc: response.selfstatus,
                                    ddd: res1.data.loginid,
                                  }
                                  that.page4 = {
                                    aaa: response.companyname,
                                    bbb: constants.getNameByCode('arrayJob',response.wtype),
                                    ccc: [response.workdetail],
                                    ddd: response.workbdate +'-'+response.workedate, 
                                  }
                                  that.page5 = {
                                    aaa: response.companyname,
                                    bbb: response.wtype,
                                    ccc: [response.workdetail],
                                    ddd: response.workbdate +'-'+response.workedate, 
                                    eee: ['暂无'],
                                  }
                                  that.page6 = {
                                    aaa: response.school,
                                    bbb: response.skillname,
                                    ccc: constants.getNameByCode('arrayDegree',response.edubg),
                                  }
                                  // birthdate: "1988-11-05T16:00:00.000Z"
                                  // companyname: "千丁互联科技"
                                  // edubg: "6"
                                  // hcity: "内蒙古呼和浩特"
                                  // hopetrade: "2,3"
                                  // hopework: "2"
                                  // id: 2
                                  // loginid: "15831683090"
                                  // rcity: "北京市门头沟"
                                  // salary: "8000-10000"
                                  // school: "廊坊师范学院"
                                  // selfstatus: "在职，等待入职"
                                  // sex: "1"
                                  // skill: "[{"name":"标签一"},{"name":"代码"},{"name":"吸引力"},{"name":"标签贴个"}]"
                                  // skillname: "电子信息科学与技术"
                                  // studybdate: "2009-08-31T16:00:00.000Z"
                                  // studyedate: "2013-05-31T16:00:00.000Z"
                                  // uname: "张宁"
                                  // updatetime: null
                                  // workbdate: "2017-05-31T16:00:00.000Z"
                                  // workdate: "2013-05-31T16:00:00.000Z"
                                  // workdetail: "1、做技术，2，打包，3流行"
                                  // workedate: "2019-05-31T16:00:00.000Z"
                                  // worknature: null
                                  // worktime: "2019-04-30T16:00:00.000Z"
                                  // wtype: "2"
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
            
        })
    },
}
</script>
<style>
@import '../../assets/css/views/personJianLi.css';
</style>