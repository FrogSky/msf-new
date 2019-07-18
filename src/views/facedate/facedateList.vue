<template>
    <div class="msf-facedatelistpage" >
        <msf-header></msf-header>
        <div class="msf-facedatelistpage-content">
            <div style="background: #F2F5F4;min-height: 1500px">
                <div style="padding: 30px 0;">
                    <msf-facedatelistcard :obj="cardsForJobList"></msf-facedatelistcard>
                </div>
                <el-table :data="tableData" style="width: 1100px;margin: 0 auto;">
                    <el-table-column prop="date" label="姓名"></el-table-column>
                    <el-table-column prop="name" label="年龄"></el-table-column>
                    <el-table-column prop="name" label="性别"></el-table-column>
                    <el-table-column prop="name" label="工作年限"></el-table-column>
                    <el-table-column prop="name" label="学历"></el-table-column>
                    <el-table-column prop="name" label="毕业学校"></el-table-column>
                    <el-table-column prop="name" label="居住地址"></el-table-column>
                    <el-table-column prop="name" label="户口所在地"></el-table-column>
                    <el-table-column prop="name" label="最近经历"></el-table-column>
                    <el-table-column prop="name" label="操作"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import msfHeader from "~/components/header.vue";
import msfFacedatelistcard from "~/components/facedatelistcard.vue";
import { constants } from "../../assets/script/constants.js";
export default {
    data() {
        return {
            cardsForJobList: {
                jobsId: '0',
                src: require('../../assets/images/cardsForJob1.png'),
                title1: '信用管理专家',
                title2: '[海光寺巨贝大厦]',
                title3: '[2天前发布]',
                title4: '4.5k-5k',
                title5: '最近3天内 [13:00-18:00]',
                title6: '',
                titleList: ['周末双休']
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    components: {
        msfHeader,
        msfFacedatelistcard
    },
    mounted: function() {
        this.$nextTick(function() {
            let that = this;
            $.ajax({
                url: 'http://123.56.217.229:8080/getCurrentUserInfo.msf',
                type: 'post',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    loginid: 'test', //企业全称、
                }),
                success: function(res1) {
                    if (res1.msgCode == '0000') {
                      // alert(111)
                        $.ajax({
                            url: 'http://123.56.217.229:8080/getInterviweDayInfo.msf',
                            type: 'post',
                            contentType: "application/json;charset=UTF-8",
                            data: JSON.stringify({
                                id: that.$route.query.id, //企业全称、
                            }),
                            success: function(res) {
                              // that.cardsForJobList = res.data;
                              that.cardsForJobList.title1 = res.data.iname
                              that.cardsForJobList.title2 = res.data.wposition
                              that.cardsForJobList.title5 = res.data.updatetime.substring(0,10)
                              that.cardsForJobList.title3 = res.data.edubg
                              that.cardsForJobList.title4 = res.data.salary
                              that.cardsForJobList.title6 = res.data.salary
                              
                              that.cardsForJobList.titleList=[ constants.getNameByCode('arrayDegree',res.data.edubg),constants.
                              getNameByCode('wexp',res.data.wexp),constants.getNameByCode('wtype',res.data.wtype)]
                            },
                            error: function(res) {
                                // alert(111)
                            }
                        });
                        //查询所有简历
                        $.ajax({
                            url: 'http://123.56.217.229:8080/getCandidateInfo.msf',
                            type: 'post',
                            contentType: "application/json;charset=UTF-8",
                            data: JSON.stringify({
                                id: that.$route.query.id, //企业全称、
                            }),
                            success: function(res) {
                              // // that.cardsForJobList = res.data;
                              // that.cardsForJobList.title1 = res.data.iname
                              // that.cardsForJobList.title2 = res.data.wposition
                              // that.cardsForJobList.title5 = res.data.updatetime.substring(0,10)
                              // that.cardsForJobList.title3 = res.data.edubg
                              // that.cardsForJobList.title4 = res.data.salary
                              // that.cardsForJobList.title6 = res.data.salary
                              
                              // that.cardsForJobList.titleList=[ constants.getNameByCode('arrayDegree',res.data.edubg),constants.
                              // getNameByCode('wexp',res.data.wexp),constants.getNameByCode('wtype',res.data.wtype)]
                            },
                            error: function(res) {
                                // alert(111)
                            }
                        });
                        
                    }
                },
                error: function(res) {
                    // alert(111)
                }
            })

        })
    },
}
</script>