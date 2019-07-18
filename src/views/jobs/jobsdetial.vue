<template>
    <div class="msf-jobdetials">
        <msf-header></msf-header>
        <div class="msf-jobdetials-mid">
          <div class="msf-jobdetials-mid-con">
            <div class="msf-jobdetials-mid-left msf-floatleft">
              <span>{{obj.title1}}</span>
              <h2>{{obj.title2}} &nbsp;&nbsp;<var><i class="el-icon-edit"></i>编辑</var></h2>
              <strong>{{obj.title3}}</strong>
              <p>面试日：{{obj.title4}}</p>
            </div>
            <div class="msf-jobdetials-mid-right msf-floatright">
              <p>
                <el-button class="msf-jobdetials-mid-right1" type="primary">申请申请</el-button>
                <el-button class="msf-jobdetials-mid-right2">关注</el-button>
              </p>
              <p class="msf-jobdetials-mid-right3">
                <span><i class="el-icon-document"></i> 完善在线简历</span>&nbsp;&nbsp;&nbsp;
                <span><i class="el-icon-sort"></i> 上传简历附件</span>
              </p>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="msf-jobdetials-btm">
          <h3>候选人画像：</h3>
          <p>{{obj.detial1}}</p>
          <h3>职位描述：</h3>
          <p v-for="(item, index) in obj.detial2">
            {{index+1}}、{{item}}
          </p>
          <h3>职位要求：</h3>
          <p v-for="(item, index) in obj.yaoqiu">
            {{index+1}}、{{item}}
          </p>
          <h3>工作地址：</h3>
          <p>{{obj.detial3}}</p>
          <h3>职位发布者：</h3>
          <p>{{obj.detial4}}</p>
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
            obj:{}
        }
    },
    components: {
        msfHeader,
    },
    mounted: function () {
      setTimeout(function(){
        window.scrollTo(0,0);
      },100)
        let bigdatas = [
          {
            title1: '信盟（马上金融）招聘信用管理专家',
            title2: '信用管理专家',
            title3: '4.5k左右',
            title4: '3月4日、3月6日、3月8日 [13:30-18:00]',
            detial1: '销售经验/大专',
            detial2: ['针对分期付款的个人，超过还款时间的，打电话，提醒还款，以免影响个人征信','大专以上学历，18-30，优秀可放宽学历（有销售经验）','综薪：4500左右，13薪，每月休息8天，轮休可连休，上班时间8:30-17:30，带薪培训一周，入职缴纳五险一金（企业直签），有餐补，带薪年假'],
            detial3: '海光寺巨贝大厦F座1层',
            detial4: '李经理-人事经理',
            yaoqiu:['工作细致，责任感强，良好的沟通能力、团队精神']
          },
          {
            title1: '捷信消费金融招聘',
            title2: 'VIP客户关系专员',
            title3: '4k-8k',
            title4: '3月4日-3月8日 [13:00-18:00]',
            detial1: '销售经验/中专/一年经验',
            detial2: ['通过电话向公司已有的优质客户群体，推荐新的产品和服务，满足客户消费梦想','接听客户来电，解答客户疑问，与有意向客户做进一步沟通','中专及以上学历；热爱电销工作，普通话标准清晰，表达流利','有意愿挑战高薪，愿意为高薪承担一定压力','熟悉掌握办公软件操作，打字熟练'],
            detial3: '塘沽 MSD C1座27B',
            detial4: '王女士-人事经理',
            yaoqiu:['工作细致，责任感强，良好的沟通能力、团队精神']
          },
          {
            title1: '某找房大平台公司',
            title2: '财务总账经理',
            title3: '面议',
            title4: '3月20日全天',
            detial1: 'Oracle经验/本科/2年经理经验/财务共享中心',
            detial2: ['负责制定并梳理共享中心总账核算标准及流程、编制核算操作手册、持续推进标准化流程，完善共享服务中心建设','负责共享中心承接范围的总账、固定资产、收入等核算工作，确保财务信息的合规、准确、及时、完整','负责各模块传至总账的凭证并予以过账；协调其他部门的财务信息的及时提供及入账，确保收入、成本、费用及税费的会计期间的匹配','负责月末结账任务，在集团规定期限内及时高效的完成结账','与各地方财务做好工作对接及沟通协作','积极完成上级领导交办的其他工作认为'],
            detial3: '天津开发区服务外包产业园',
            detial4: '张女士-人事经理',
            yaoqiu:['大学统招本科及以上学历；会计、财务管理等相关专业毕业','有8年以上应收财务工作经验，2年以上经理或主管经验，有财务共享中心经验优先','熟悉财务会计、税务等相关政策知识','具体熟练的计算机及office操作技能；有Oracle 操作经验','工作细致，责任感强，良好的沟通能力、团队精神'
            ]
          },
          {
            title1: '神州集团招聘',
            title2: '财务共享中心应收账款经理',
            title3: '面议',
            title4: '3月15日全天',
            detial1: 'Oracle经验/本科/2年财务主管经验',
            detial2: ['按照公司财务制度，每日汇总更新监控账龄分析表审核单据，确保客户信息准确及所附单据的合规性','及时反馈审核中发现的错误及问题，并及时处理不合规单据，确保收款的准确性与及时性','客户催款，协助各机构、员工收款及收款的相关问题，确保财务应收的服务质量','负责月末结账任务，在集团规定期限内及时高效的完成结账','积极主动完成上级领导安排的其他工作'],
            detial3: '北京海淀区',
            detial4: '李女士-人事主管',
            yaoqiu:['大学统招本科及以上学历；会计、财务管理等相关专业毕业','有8年以上应收财务工作经验，2年以上经理或主管经验，有财务共享中心经验优先','熟悉财务会计、税务等相关政策知识','具体熟练的计算机及office操作技能；有Oracle 操作经验','工作细致，责任感强，良好的沟通能力、团队精神'
            ]
          },
          {
            title1: '威世通用半导体公司操作工',
            title2: '操作工',
            title3: '4k左右',
            title4: '3月4日、3月8日 [13:00-18:00]',
            detial1: '操作工/学历不限/外地人优先',
            detial2: ['站式工作；按线别站别单机操作，对产品进行加工制造、质量控制，例如出炉、切割等，保证产品品质和外观'],
            detial3: '天津经济技术开发区第九大街',
            detial4: '夏女士-人事主管 ',
            yaoqiu:['专业认真']
          },
          {
            title1: '宜家物流',
            title2: '叉车工',
            title3: '4k ',
            title4: '3月4日-3月8日 [13:00-18:00]',
            detial1: '男女不限/叉车驾驶证',
            detial2: ['男女不限，男性要求有叉车驾驶证，女性不要求叉车驾驶证，有库管经验','除基本工资和岗位津贴外，每年13薪外加年度奖金（根据公司业绩确定奖金的比例）','具有与仓库设备相关的基础常识','能与团队合作工作','年龄限制18-40岁','学历不限'],
            detial3: '天津经济技术开发西区',
            detial4: '梁先生-人事主管 ',
            yaoqiu:['在仓库运作中操作叉车与搬运工作,根据指示安全有效地完成每日的工作任务','完成其他主管指派的工作','在整个运作流程中，保证货物和仓库的整洁和干净','对于包装破损的货物进行鉴别和处理']
          },
        ]
      // alert(this.$route.query.jobsId)


        this.obj = bigdatas[this.$route.query.jobsId]
    },
}
</script>
<style>
    @import '../../assets/css/views/jobs.css';
</style>