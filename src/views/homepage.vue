<template>
    <div class="msf-homepage" style="height: 1500px;">
        <msf-header></msf-header>
        <msf-searchbox></msf-searchbox>
        <div class="msf-homepage-mid">
            <div class="maf-center">
              <div class="msf-homepage-mid-left">
                <msf-classification></msf-classification>
              </div>
              <div class="calendar-con">
                  <div id='container'></div>
              </div>
              <div class="clearfix"></div>
            </div>
            
        </div>
        <div class="msf-line"></div>
        <div class="msf-bottom">
          <ul class="msf-cardsforjob-con">
            <li class="msf-cardsforjob-con-item" v-for="(item, index) in cardsForJobList">
              <msf-homepagecard :obj="item"></msf-homepagecard>
            </li>
            
          </ul>
          <div class="clearfix"></div>
          <div class="msf-supercompany">
            <h3 class="msf-supercompany-h3">名企面试日</h3>
            <ul class="msf-supercompany-ul">
              <li class="msf-supercompany-item" v-for="(item, index) in supercompany">
                <p><img class="msf-logoimg" :src="item.src"></p>
                <h4>{{item.companyName}}</h4>
                <var>{{item.companyDetial}}</var>
                <strong>{{item.days}}</strong>
              </li>
            </ul>
          </div>
        </div>
        <div class="msf-line"></div>
        <div class="msf-footerline">
          <span>©津ICP备18005837号</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span>联系电话：022-67182821</span>
        </div>
    </div>
</template>
<script>
import msfHeader from "~/components/header.vue";
import msfSearchbox from "~/components/searchbox.vue";
import msfClassification from "~/components/classification.vue";
import msfHomepagecard from "~/components/homepagecard.vue";

// import {SimpleCalendar} from '~/assets/css/calendar/javascripts/simple-calendar-es6.js';
import SimpleCalendar from '~/assets/css/calendar/javascripts/simple-calendar-es6.js'; 
export default {
    data() {
        return {
          cardsForJobList:[
            {
                jobsId: '0',
                src: require('../assets/images/cardsForJob1.png'),
                title1: '信用管理专家',
                title2: '[海光寺巨贝大厦]',
                title3: '[2天前发布]',
                title4: '4.5k-5k',
                title5: '最近3天内 [13:00-18:00]',
                titleList:['周末双休']
            },{
              jobsId: '1',
              src: require('../assets/images/cardsForJob2.png'),
                title1: 'VIP客户关系专员',
                title2: '[市民广场站]',
                title3: '[3天前发布]',
                title4: '4k-8k',
                title5: '最近5天内 [13:00-18:00]',
                titleList:['带薪年假','五险一金']
            },{
              jobsId: '2',
              src: require('../assets/images/cardsForJob3.png'),
                title1: '财务总账经理',
                title2: '',
                title3: '[一周前发布]',
                title4: '面谈',
                title5: '2019.3.20 [9:00-18:00]',
                titleList:['带薪年假','五险一金','领导好']
            },{
              jobsId: '3',
              src: require('../assets/images/supercompany1.png'),
                title1: '财务共享中心应收账款经理',
                title2: '[天津]',
                title3: '[2天前发布]',
                title4: '面谈',
                title5: '2019.3.15 [9:00-18:00]',
                titleList:['带薪年假','领导好']
            },{
              jobsId: '4',
              src: require('../assets/images/supercompany2.png'),
                title1: '操作工',
                title2: '',
                title3: '[4天前发布]',
                title4: '4k',
                title5: '2019.3.4 [13:00-18:00]',
                titleList:['夜班补助','五险一金','餐补']
            },{
              jobsId: '5',
              src: require('../assets/images/supercompany8.png'),
                title1: '叉车工',
                title2: '',
                title3: '[一周前发布]',
                title4: '5k左右',
                title5: '2019.3.11 [10:00-18:00]',
                titleList:['带薪年假','五险一金','餐补']
            }
          ],
          supercompany:[
            {
              src: require('../assets/images/supercompany1.png'),
              companyName: '神州优车',
              companyDetial: '互联网公司/汽车',
              days: '3个面试日'
            },{
              src: require('../assets/images/supercompany2.png'),
              companyName: '威世通用半导体',
              companyDetial: '互联网公司/电子',
              days: '1个面试日'
            },{
              src: require('../assets/images/supercompany3.png'),
              companyName: '艾达自动变速器',
              companyDetial: '互联网公司/电子',
              days: '2个面试日'
            },{
              src: require('../assets/images/supercompany8.png'),
              companyName: '宜家',
              companyDetial: '互联网公司/家居',
              days: '1个面试日'
            },{
              src: require('../assets/images/supercompany4.png'),
              companyName: 'GE医疗',
              companyDetial: '互联网公司/医疗/保健',
              days: '1个面试日'
            },{
              src: require('../assets/images/supercompany5.png'),
              companyName: '贝壳网',
              companyDetial: '互联网公司/房地产',
              days: '3个面试日'
            },{
              src: require('../assets/images/supercompany6.png'),
              companyName: '面试蜂',
              companyDetial: '互联网公司/招聘/猎头',
              days: '9个面试日'
            },{
              src: require('../assets/images/supercompany7.png'),
              companyName: '易招贤',
              companyDetial: '互联网公司/猎头',
              days: '2个面试日'
            }
          ]
        }
    },
    components: {
        msfHeader,
        msfSearchbox,
        msfClassification,
        msfHomepagecard
    },
    mounted: function () {
        this.$nextTick(function () {
            var myCalendar = new SimpleCalendar('#container');
        })
    },
}
</script>
<style>
    @import '../assets/css/views/homepage.css';
    @import '../assets/css/calendar/stylesheets/simple-calendar.css';
    
</style>