<template>
	<div>
		<div class="msf-steps-large-bg"></div>
		<div class="msf-steps">
			<div class="msf-steps-left msf-floatleft">
				<img src="../../assets/images/steps-left.png">
			</div>
			<div class="msf-steps-stepcon msf-floatleft">
				<router-view/>
			</div>
			<ul class="msf-steps-right msf-floatleft">
				<span>[注册]</span>
				<li>01&nbsp;&nbsp;&nbsp;&nbsp;我的信息</li>
				<li>02&nbsp;&nbsp;&nbsp;&nbsp;我的学历</li>
				<li>03&nbsp;&nbsp;&nbsp;&nbsp;我的经验</li>
				<li>04&nbsp;&nbsp;&nbsp;&nbsp;我的技能</li>
				<li>05&nbsp;&nbsp;&nbsp;&nbsp;我的意向</li>
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