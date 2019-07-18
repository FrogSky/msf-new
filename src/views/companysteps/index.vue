<template>
	<div>
		<div class="msf-steps-large-bg"></div>
		<div class="msf-steps">
			<div class="msf-steps-left msf-floatleft">
				<!-- <img src="../../assets/images/steps-left1.png"> -->
			</div>
			<div class="msf-steps-stepcon msf-floatleft">
				<router-view/>
			</div>
			<ul class="msf-steps-right msf-floatleft">
				<span>[注册]</span>
				<li>01&nbsp;&nbsp;&nbsp;&nbsp;完善公司/个人信息</li>
				<li>02&nbsp;&nbsp;&nbsp;&nbsp;招聘方实名认证</li>
				<span>[面试]</span>
				<li>01&nbsp;&nbsp;&nbsp;&nbsp;发布面试日</li>
			</ul>
			<p class="msf-steps-yellowline msf-floatleft"></p>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>
    @import '../../assets/css/views/steps.css';
</style>