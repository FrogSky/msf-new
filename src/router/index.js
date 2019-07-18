import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes:[{
		path: '/',
		component: function (resolve) {
            require(['~/views/helloworld.vue'], resolve);
        }
	},{
        path: '/register',
        component: function (resolve) {
            require(['~/views/register.vue'], resolve);
        }
    },{
		path: '/homepage',
		component: function (resolve) {
            require(['~/views/homepage.vue'], resolve);
        }
	},{
		path: '/login',
		component: function (resolve) {
            require(['~/views/login.vue'], resolve);
        }
	},{
		path: '/presteps',
		component: function (resolve) {
            require(['~/views/presteps/index.vue'], resolve);
        },
        children:[{
        	path: 'step1',
        	component: function (resolve) {
	            require(['~/views/presteps/step1.vue'], resolve);
	        },
        },{
        	path: 'step2',
        	component: function (resolve) {
	            require(['~/views/presteps/step2.vue'], resolve);
	        },
        },{
        	path: 'step3',
        	component: function (resolve) {
	            require(['~/views/presteps/step3.vue'], resolve);
	        },
        },{
        	path: 'step4',
        	component: function (resolve) {
	            require(['~/views/presteps/step4.vue'], resolve);
	        },
        },{
        	path: 'step5',
        	component: function (resolve) {
	            require(['~/views/presteps/step5.vue'], resolve);
	        },
        }]
	}
    //company公司的四部注册
    ,{
        path: '/companysteps',
        component: function (resolve) {
            require(['~/views/companysteps/index.vue'], resolve);
        },
        children:[{
            path: 'step1',
            component: function (resolve) {
                require(['~/views/companysteps/step1.vue'], resolve);
            },
        },{
            path: 'step2',
            component: function (resolve) {
                require(['~/views/companysteps/step2.vue'], resolve);
            },
        },{
            path: 'step3',
            component: function (resolve) {
                require(['~/views/companysteps/step3.vue'], resolve);
            },
        }]
    }
    //jobs工作相关
    ,{
        path: '/jobs',
        component: function (resolve) {
            require(['~/views/jobs/index.vue'], resolve);
        },
        children:[{
            path: 'jobsdetial',
            component: function (resolve) {
                require(['~/views/jobs/jobsdetial.vue'], resolve);
            },
        },{
            path: 'postjobs',
            component: function (resolve) {
                require(['~/views/jobs/postjobs.vue'], resolve);
            },
        },{
            path: 'jobsdays',
            component: function (resolve) {
                require(['~/views/jobs/jobsdays.vue'], resolve);
            },
        }]
    },
    //个人简历
    ,{
        path: '/personal',
        component: function (resolve) {
            require(['~/views/personal/index.vue'], resolve);
        },
        children:[{
            path: 'personJianLi',
            component: function (resolve) {
                require(['~/views/personal/personJianLi.vue'], resolve);
            },
        }]
    }
    //面试日管理
    ,{
        path: '/facedate',
        component: function (resolve) {
            require(['~/views/facedate/index.vue'], resolve);
        },
        children:[{
            path: 'facedateList',
            component: function (resolve) {
                require(['~/views/facedate/facedateList.vue'], resolve);
            },
        }]
    }]
})