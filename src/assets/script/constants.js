export let constants = {
		//票据类别
		arrayJob:[
				{ code:1, name: '国家机关、党群组织、企业、事业单位负责人'},
				{ code:2, name: '专业技术人员'},
				{ code:3, name: '办事人员和有关人'},
				{ code:4, name: '商业、服务业人员'},
				{ code:5, name: '农、林、牧、渔、水利业生产人员'},
				{ code:6, name: '生产、运输设备操作人员及有关人员'},
				{ code:7, name: '军人'},
		],
		arrayDegree:[
				{ code:1, name: '小学'},
				{ code:2, name: '初中'},
				{ code:3, name: '高中'},
				{ code:4, name: '中专'},
				{ code:5, name: '大专'},
				{ code:6, name: '本科'},
				{ code:7, name: '硕士'},
				{ code:8, name: '博士'},
		],
		wexp:[
				{ code:0, name: '1年以下'},
				{ code:1, name: '1-3年'},
				{ code:2, name: '3-5年'},
				{ code:3, name: '5-7年'},
				{ code:4, name: '7-10年'},
		],
		wtype:[
				{ code:1, name: '全职'},
				{ code:2, name: '兼职'},
				{ code:3, name: '实习'},
		],

		getNameByCode(enums, code) {
			for (let item in constants[enums]) {
				if (constants[enums][item].code == code) {
					return constants[enums][item].name;
				}
			}
			return '';
		}
	}

