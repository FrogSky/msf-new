<template>
	<div class="msf-header">
		<div class="msf-header-con">
			<p class="msf-logo msf-floatleft"><img class="msf-logoimg" src="../assets/images/logo.png"></p>
			<div class="msf-cityswitch msf-floatleft">天津站<i class="msf-cityswitch-i">&nbsp;[切换城市]</i></div>
			<ul class="msf-navigator msf-floatleft">
				<li class="msf-navigator-item"><router-link to="/homepage">首页</router-link></li>
				<li class="msf-navigator-item"><router-link to="/jobs/jobsdays">面试日</router-link></li>
				<!-- <li class="msf-navigator-item"><router-link to="/homepage">企业</router-link></li>
				<li class="msf-navigator-item"><router-link to="/homepage">校园</router-link></li> -->
				<li class="msf-navigator-item msf-login"><i class="msf-login-i">登录</i><span class="msf-login-span">&nbsp;|&nbsp;</span><i class="msf-register-i">注册</i></li>
			</ul>
			<div class="msf-rightlinks msf-floatright">
				<span class="msf-tocompany" @click="gop" style="cursor: pointer;">进入个人版</span>
				<span class="msf-tofreepublish" @click="goc" style="cursor: pointer;">免费发布面试职位</span>
			</div>
		</div>
	</div> 
</template>
<script>
export default {
    data() {
        return {
            
        };
    },
    mounted() {
        // $.ajax({
        //     url:'http://123.56.217.229:8080/getUserInfo.msf',
        //     type: 'post',
        //     contentType: "application/json;charset=UTF-8",
        //     data: JSON.stringify({
        //         loginid:  '',  //企业全称、
        //     }),
        //     success:function(res){
        //         if (res.msgCode == '0000') {
        //             that.$router.push({path: '/presteps/step1'});
        //         }
        //     },error:function(res){
        //         alert(111)
        //     }
        // })
    },
    methods: {
        gop(){
        	// $.ajax({
         //        url:'http://123.56.217.229:8080/getUserInfo.msf',
         //        type: 'post',
         //        contentType: "application/json;charset=UTF-8",
         //        data: JSON.stringify({
         //            loginid:  '111',  //企业全称、
         //        }),
         //        success:function(res){
         //            if (res.msgCode == '0000') {
         //                that.$router.push({path: '/presteps/step1'});
         //            }
         //        },error:function(res){
         //        	alert(111)
         //        }
         //    })
            this.$router.push({path: '/presteps/step1'});
        	
        },
        goc(){
        	this.$router.push({path: '/companysteps/step1'});
        }
    }
}
</script>
<style>
	@import '../assets/css/components/header.css';
</style>