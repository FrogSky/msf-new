<template>
	<div class="msf-search-wrapper">
        <div class="search_box" data-lg-tj-track-code="index_search" data-lg-tj-track-type="1">
            <div class="searchForm clearfix" name="searchForm" >
                <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                <input type="text" id="search_input" class="search_input ui-autocomplete-input" @focus="searchFoucs" tabindex="1" maxlength="64" autocomplete="off" value="" placeholder="搜索职位、公司或地点" style="color: rgb(153, 153, 153);">
                <input type="button" class="search_button" value="搜索" data-lg-tj-id="4V00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
            </div>
            <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style="display: none;"></ul>
        </div>
        <!-- <div class="pos-guess-wrapper">
            <div class="guess_wrapper" style="display: none;">
                <span>猜你要搜</span>
                <ul>
                	<li v-for="item in guessItems" @click="guessClick">{{item.name}}</li>
                </ul>
            </div>
        </div> -->
        <dl class="hotSearch" data-lg-tj-track-code="index_hotsearch" data-lg-tj-track-type="1">
        	<dt>热门搜索：</dt>
            <dd v-for="item in hotSearchItems"><a href="###" class="highlight" target="_self">{{item.name}}</a></dd>
        </dl>
    </div>
</template>
<script>
import Vue from 'vue';
//点击空白处,下拉框消失的代码

export default {
	name:'searchBox',
    data() {
        return {
            // showGuessWrapper: false,//显示猜你喜欢
            guessItems:[{
            	name: '英语',
            	id: '1'
            },{
            	name: '开发',
            	id: '2'
            },{
            	name: '区块链',
            	id: '3'
            },{
            	name: '商汤科技',
            	id: '4'
            },{
            	name: '......',
            	id: '5'
            }],
            hotSearchItems:[{
            	name: 'java',
            	id: '1'
            },{
            	name: '后端开发',
            	id: '2'
            },{
            	name: '数据运营',
            	id: '3'
            },{
            	name: '产品经理',
            	id: '4'
            },{
            	name: 'C++',
            	id: '5'
            }]
        };
    },
    mounted() {
        $("#search_input").focus(function(){
	    	$(".guess_wrapper").css("display","block");  
	    });
		$(document).click(function(e) {
		    var target = $(e.target);
		    if(target.closest(".search-wrapper").length == 0) {
		       // $(".guess_wrapper").css("display","none");  
		    };
		});
    },
    methods: {
        searchFoucs(){
        	// this.showGuessWrapper = true;
        },
        guessClick(val){
        	this.showGuessWrapper = false;
        	$(".guess_wrapper").css("display","none");  
        }
    }
}
</script>
<style>
	@import '../assets/css/components/searchbox.css';
</style>