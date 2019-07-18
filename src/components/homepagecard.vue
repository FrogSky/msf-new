<template>
    <div class="msf-homeagecard">
        <div class="position_list">
            <ul class="clearfix position_list_ul">
            	<p class="msf-homeagecard-logos msf-floatleft"><img class="msf-logoimg" :src="obj.src"></p>
                <li class="position_list_item msf-floatleft">
                    <div class="pli_top">
                        <div class="clearfix pli_top_l">
                            <div class="position_name ">
                                <h2 class="clearfix  msf-floatleft"><span class="position_link" title="市场、大客户经理" >{{obj.title1}}</span></h2>
			          			<span class="create-time msf-floatleft"> {{obj.title2}} </span>
			          			<span class="chat_me msf-floatleft"> {{obj.title3}} </span>
			          			<span class="salary msf-floatright">{{obj.title4}}</span>
                            </div>
                        </div>
                        <div class="position_main_info wordCut">
                            <span class="msf-color-base">面试日：{{obj.title5}}</span>
                        </div>
                        <div class="labels">
                            <div class="pli_btm_l">
	                            <span v-for="(item,index) in obj.titleList">{{item}}</span>
	                            <span style="cursor: pointer;" class="wordCut wordCutLinks msf-floatright" @click="click(obj.jobsId)" title="">申请面试</span>
	                        </div>
                        </div>
                    </div>
                </li>
            </ul>
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
            //     title2: '[望京]',
            //     title3: '[2天前发布]',
            //     title4: '8k-15k',
            //     title5: '2018.9.1[9:00-11:00]',
            //     titleList:['带薪年假','美女多','领导好']
            // }
        };
    },
    mounted() {

    },
    methods: {
        click(jobsId){
            this.$router.push({path: '../jobs/jobsdetial',query:{jobsId: jobsId}});
        }
    }
}
</script>
<style>
@import '../assets/css/components/homeagecard.css';
</style>