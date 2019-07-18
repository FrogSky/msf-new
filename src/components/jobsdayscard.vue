<template>
    <div class="msf-jobsdayscard">
        <div class="position_list">
            <div class="clearfix position_list_ul">
                <div class="position_list_item">
                    <el-col :span="7">
                        <div class="pli_top">
                            <div class="clearfix pli_top_l">
                                <div class="position_name ">
                                    <h2 class="clearfix  msf-floatleft"><span class="position_link" title="市场、大客户经理" >{{obj.title1}}</span></h2>
                                </div>
                            </div>
                            <div class="position_main_info wordCut">
                                <span class="msf-color-base">面试日：{{obj.title2}}</span>
                            </div>
                            <div class="position_main_info tips">
                                <span v-for="(item,index) in obj.titleList" class="msf-color-gray">{{item}}</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="pli_top">
                            <div class="labels">
                                <div class="pli_btm_l">
                                    <span style="cursor: pointer;" class="wordCut wordCutLinks msf-floatright" @click="click(obj.id)" title="">编辑</span>
                                    <span style="cursor: pointer;" class="wordCut wordCutLinks msf-floatright" @click="click(obj.id)" title="">推送</span>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <!-- <el-col class="border-right-dotted" :span="1">&nbsp;</el-col> -->
                    <el-col class="border-right-dotted" :span="5">
                        <div class="msf-jobsdayscard-righttips">
                            <h2>{{obj.title3}}人</h2>
                            <p>面试申请</p>
                        </div>
                    </el-col>
                    <!-- <el-col  :span="1">&nbsp;</el-col> -->
                    <el-col class="border-right-dotted" :span="5">
                        <div class="msf-jobsdayscard-righttips">
                            <h2 class="msf-color-red">{{obj.title4}}人</h2>
                            <p>已邀请参加面试</p>
                        </div>
                    </el-col>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['obj'],
    data() {
        return {
            // obj: {
            //     title1: '市场、大客户经理',
            //     title2: '2018.9.1[9:00-11:00]',
            //     title5: '[望京]',
            //     title3: '17',
            //     title4: '26',
            //     titleList:['8k-15k','hayaya','测试啊']
            // }
        };
    },
    mounted() {

    },
    methods: {
        click(id){
            this.$router.push({path: '../facedate/facedateList',query:{id: id}});
        }
    }
}
</script>
<style>
@import '../assets/css/components/jobsdayscard.css';
</style>