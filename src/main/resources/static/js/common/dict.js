//IP接入方式connet_type
var _IP_CONNECT_TYPE_DICT = {
	item: [
		{id: '100', text: '接入方式'},
		{id: '0', text: 'API'},
		{id: '1', text: '外挂'},
	],
	itemb: [
		{id: '0', text: 'API'},
		{id: '1', text: '外挂'},
	],
	data: {
		'0': 'API',
		'1': '外挂',
		'100': null,
	}
};

//IP付费类型
var _IP_PAY_TYPE_DICT = {
	item: [
		{id: '0', text: '付费类型'},
		{id: '1', text: '年'},
		{id: '2', text: '季'},
		{id: '3', text: '月'},
	],
	itemb: [
		{id: '1', text: '年'},
		{id: '2', text: '季'},
		{id: '3', text: '月'},
	],
	data: {
		'1': '年',
		'2': '季',
		'3': '月',
		'0': null
	}
};

//IP状态
var _IP_STATUS_DICT = {
		item: [
			{id: '0', text: '状态'},
			{id: '1', text: 'start'},
			{id: '2', text: 'stop'},
			{id: '3', text: 'test'},
			{id: '4', text: 'idle'},
			{id: '5', text: 'down'},
		],
		itemb: [
			{id: '1', text: 'start'},
			{id: '2', text: 'stop'},
			{id: '3', text: 'test'},
			{id: '4', text: 'idle'},
			{id: '5', text: 'down'},
		],
		data: {
			'1': 'start',
			'2': 'stop',
			'3': 'test',
			'4': 'idle',
			'5': 'down',
			'0': null
		}
	};

//IPServer是否通用
var _IP_SERVER_COMMON_FLAG_DICT = {
		item: [
			/*{id: '100', text: '是否通用'},*/
			{id: '1', text: '是'},
			{id: '0', text: '否'},
		],data: {
			'1': '是',
			'0': '否',
			/*'100': ''*/
		}
	};

//IPServer计费标识
var _IP_SERVER_CHARGE_STATUS_DICT = {
		item: [
			/*{id: '100', text: '是否计费'},*/
			{id: '0', text: '是'},
			{id: '1', text: '否'},
		],data: {
			'0': '是',
			'1': '否',
			/*'100': ''*/
		}
	};

//IPServer计费标识
var _IP_SERVER_SEND_TYPE_DICT = {
		item: [
			/*{id: '100', text: '是否计费'},*/
			{id: '0', text: '同步'},
			{id: '1', text: '异步'},
		],data: {
			'0': '同步',
			'1': '异步',
			/*'100': ''*/
		}
	};

//IPSERVER状态
var _IP_SERVER_STATUS_DICT = {
	item: [
		{id: '0', text: '正常'},
		{id: '2', text: '暂停'}
	],data: {
		'0': '正常',
		'2': '暂停'	
	}
};

var _FUNDCHANGETYPE_DICT = {
		item: [
			{id: '100', text: '资金变动类型'},
			{id:'0',text:'融资存入'},
			{id:'1',text:'保证金存入'},
			{id:'2',text:'补仓资金存入'},
			{id:'3',text:'融资取出'},
			{id:'4',text:'保证金取出'},
			{id:'5',text:'盈利提取'},
			{id:'6',text:'账内扣息'},
			{id:'7',text:'其他取出'},
			{id:'8',text:'其他存入'},
			{id:'9',text:'清算融资取出'},
			{id:'10',text:'清算保证金取出'},
			{id:'11',text:'清算盈利提取'},
			{id:'12',text:'融资分拆下拔'},
			{id:'13',text:'融资分拆上收'},
			{id:'14',text:'融资分拆到账'},
			{id:'15',text:'融资分拆归还'},
			{id:'16',text:"其它分拆下拔"},
			{id:'17',text:"其它分拆上收"},
			{id:'18',text:"其它分拆到账"},
			{id:'19',text:"其它分拆归还"},
			{id:'20',text:"保证金分拆下拨"},
			{id:'21',text:"保证金分拆上收"},
			{id:'22',text:"保证金分拆到账"},
			{id:'23',text:"保证金分拆归还"}
		],
		itemb: [
			{id: '100', text: '资金池状态'},
			{id:'0',text:'融资存入'},
			{id:'1',text:'保证金存入'},
			{id:'2',text:'补仓资金存入'},
			{id:'3',text:'融资取出'},
			{id:'4',text:'保证金取出'},
			{id:'5',text:'盈利提取'},
			{id:'6',text:'账内扣息'},
			{id:'7',text:'其他取出'},
			{id:'8',text:'其他存入'},
			{id:'9',text:'清算融资取出'},
			{id:'10',text:'清算保证金取出'},
			{id:'11',text:'清算盈利提取'},
			{id:'12',text:'融资分拆下拔'},
			{id:'13',text:'融资分拆上收'},
			{id:'14',text:'融资分拆到账'},
			{id:'15',text:'融资分拆归还'},
			{id:'16',text:"其它分拆下拔"},
			{id:'17',text:"其它分拆上收"},
			{id:'18',text:"其它分拆到账"},
			{id:'19',text:"其它分拆归还"},
			{id:'20',text:"保证金分拆下拨"},
			{id:'21',text:"保证金分拆上收"},
			{id:'22',text:"保证金分拆到账"},
			{id:'23',text:"保证金分拆归还"}
		],data: {
			'0':'融资存入',
			'1':'保证金存入',
			'2':'补仓资金存入',
			'3':'融资取出',
			'4':'保证金取出',
			'5':'盈利提取',
			'6':'账内扣息',
			'7':'其他取出',
			'8':'其他存入',
			'9':'清算融资取出',
			'10':'清算保证金取出',
			'11':'清算盈利提取',
			'12':'融资分拆下拔',
			'13':'融资分拆上收',
			'14':'融资分拆到账',
			'15':'融资分拆归还',
			'16':"其它分拆下拔",
			'17':"其它分拆上收",
			'18':"其它分拆到账",
			'19':"其它分拆归还",
			'20':"保证金分拆下拨",
			'21':"保证金分拆上收",
			'22':"保证金分拆到账",
			'23':"保证金分拆归还"
		}
	}; 
var buySellFlag={
	0:"买入",
	1:"卖出",
	2:"送股",
	3:"派息",
	4:"配股",
	5:"同步股份减少",
	6:"同步股份增加",
	7:"同步资金减少",
	8:"同步资金增加",
	A:"股份减少",
	B:"股份增加",
	C:"资金减少",
	D:"资金增加",
	E:"送股扣税",
	F:"派息扣税",
	J:'股份平移减少',
	K:'股份平移增加'
}
var tradeMarket={
	0:"深",	
	1:"沪"
}
var entrustStatus={
		0:"未报",		
		1:"废单",	
		2:"已报",
		3:"正报",
		5:"部成",
		6:"已成",
		7:"部撤",
		8:"已撤",
		9:"废单"
}
var statusDesc={
		0:"未报",		
		1:"废单",	
		2:"已报",
		3:"正报",
		5:"部成",
		6:"已成",
		7:"部撤",
		8:"已撤",
		9:"废单"
}
var bsFlag={
	0:"买入",
	1:"卖出"
}
var _ENTRUSTSTATUS_DICT = {
		item: [
			{id: '100', text: '委托状态'},
			{id: '0', text: '未报'},
//			{id: '1', text: '废单'},
			{id: '2', text: '已报'},
			{id: '3', text: '正报'},
			{id: '5', text: '部成'},
			{id: '6', text: '已成'},
			{id: '7', text: '部撤'},
			{id: '8', text: '已撤'},
			{id: '9', text: '废单'}
		],
		itemb: [
			{id: '100', text: '资金池级别'},
			{id: '0', text: '未报'},
//			{id: '1', text: '废单'},
			{id: '2', text: '已报'},
			{id: '3', text: '正报'},
			{id: '5', text: '部成'},
			{id: '6', text: '已成'},
			{id: '7', text: '部撤'},
			{id: '8', text: '已撤'},
			{id: '9', text: '废单'}
		],data: {
			0:"未报",		
//			1:"废单",	
			2:"已报",
			3:"正报",
			5:"部成",
			6:"已成",
			7:"部撤",
			8:"已撤",
			9:"废单"
		}
}; 
var _ENTRUSTTYPE_DICT = {
		item: [
			{id: '100', text: '委托类别'},
			{id: '0', text: '买卖'},
			{id: '1', text: '撤单'},
			{id: '2', text: '送配'},
			{id: '3', text: '管理'}
		],
		itemb: [
				{id: '100', text: '委托类别'},
				{id: '0', text: '买卖'},
				{id: '1', text: '撤单'},
				{id: '2', text: '送配'},
				{id: '3', text: '管理'}
		],data: {
			0:"买卖",		
			1:"撤单",	
			2:"送配",
			3:"管理"
		}
}; 
/**
 * apinfomain.html AP维护
 * @author haoyy
 */

//AP类型 ap_type
var _APTYPE_DICT = {
	item: [
		{id: '100', text: 'AP类型'},
		{id: '0', text: '云主机'},
		{id: '1', text: 'VPN'}
	],
	itemb: [
		{id: '0', text: '云主机'},
		{id: '1', text: 'VPN'}
	],data: {
		'0': '云主机',
		'1': 'VPN'
	}
};

//计费标识 charge_status
var _CHARGESTATUS_DICT = {
	item: [
		{id: '100', text: '计费标识'},
		{id: '0', text: '计费'},
		{id: '1', text: '不计费'}
	],
	itemb: [
		{id: '0', text: '计费'},
		{id: '1', text: '不计费'}
	],data: {
		'0': '计费',
		'1': '不计费'
	}
};

//AP支持交易 support_type
var _SUPPORTTYPE_DICT = {
	item: [
		{id: '100', text: '支持交易'},
		{id: '1234', text: '通用'},
		{id: '123', text: '买卖撤'},
		{id: '12', text: '买卖'},
		{id: '1', text: '买'},
		{id: '2', text: '卖'},
		{id: '3', text: '撤'},
		{id: '4', text: '查'}
	],itemb: [
		{id: '1234', text: '通用'},
		{id: '123', text: '买卖撤'},
		{id: '12', text: '买卖'},
		{id: '1', text: '买'},
		{id: '2', text: '卖'},
		{id: '3', text: '撤'},
		{id: '4', text: '查'}
	],data: {
		'1234': '通用',
		'123': '买卖撤',
		'12': '买卖',
		'1': '买',
		'2': '卖',
		'3': '撤',
		'4': '查'
	}
};
//证券账户委托渠道 ap_entrust_type
var _APENTRUSTTYPE_DICT = {
	item: [
		{id: '100', text: '委托渠道'},
		{id: '1', text: '普通账户'},
		{id: '2', text: '担保品'},
		{id: '3', text: '融资融券'}
	],itemb: [
		{id: '1', text: '普通账户'},
		{id: '2', text: '担保品'},
		{id: '3', text: '融资融券'}
	],data: {
		'1': '普通账户',
		'2': '担保品',
		'3': '融资融券'
	}
};
//接入方式connet_type
var _CONNETTYPE_DICT = {
	item: [
		{id: '100', text: '接入方式'},
		{id: '0', text: '通达信接口'},
		{id: '1', text: '恒投PB外挂V1.0'},
		{id: '2', text: '恒投PB外挂V2.0'},
		{id: '3', text: '通达信外挂'}
	],itemb: [
		{id: '0', text: '通达信接口'},
		{id: '1', text: '恒投PB外挂V1.0'},
		{id: '2', text: '恒投PB外挂V2.0'},
		{id: '3', text: '通达信外挂'}
	],data: {
		'0': '通达信接口',
		'1': '恒投PB外挂V1.0',
		'2': '恒投PB外挂V2.0',
		'3': '通达信外挂'
	}
};	
//AP状态ap_status
var _APSTATUS_DICT = {
	items: [
		{id: '100', text: 'AP状态'},
		{id: '0', text: '正常'},
		{id: '2', text: '暂停'},
		{id: '3', text: '停用'}
	],
	item: [
		{id: '100', text: 'AP状态'},
		{id: '0', text: '正常'},
		{id: '2', text: '暂停'},
	//	{id: '3', text: '停用'}
	],
	itemb: [
		{id: '0', text: '正常'},
		{id: '2', text: '暂停'},
	//	{id: '3', text: '停用'}
	],data: {
		'0': '正常',
		'2': '暂停',
		'3': '停用'
		
	}
}; 

//发送类型
var _SENDTYPE_DICT = {
	item: [
		{id: '100', text: '发送类型'},
		{id: '0', text: '同步'},
		{id: '1', text: '异步'}
	],
	itemb: [
		{id: '0', text: '同步'},
		{id: '1', text: '异步'}
	],data: {
		'0': '同步',
		'1': '异步'
		
	}
}; 
/**
 * securitesApManageList.html 证券账户绑定
 * @author haoyy
 */
//两融账户 margin_finance_flag
var _MARGINFINANCEFLAG_DICT = {
	item: [
			{id: '100', text: '两融标识'},
			{id: '0', text: '普通'},
			{id: '1', text: '两融'}
		],
		itemb: [
			{id: '0', text: '普通'},
			{id: '1', text: '两融'}
		],data: {
			'0': '普通',
			'1': '两融'
		}
}

//证券账户级别securities_account_level
var _SECURITIESACCOUNTLEVEL_DICT = {
	item: [
		{id: '100', text: '账户级别'},
		{id: '1', text: 'N1'},
		{id: '2', text: 'N2'},
		{id: '3', text: 'N3'},
		{id: '4', text: 'N4'},
		{id: '5', text: 'N5'}
	],
	itemb: [
		{id: '1', text: 'N1'},
		{id: '2', text: 'N2'},
		{id: '3', text: 'N3'},
		{id: '4', text: 'N4'},
		{id: '5', text: 'N5'}
	],data: {
		'1': 'N1',
		'2': 'N2',
		'3': 'N3',
		'4': 'N4',
		'5': 'N5'
	}
};
//AP状态 ap_status
var _APSTATUSBIND_DICT = {
	item: [
			{id: '100', text: 'ap状态'},
			{id: '0', text: '正常'},
			{id: '2', text: '暂停'},
			{id: '3', text: '停用'}
		],
		itemb: [
			{id: '0', text: '正常'},
			{id: '2', text: '暂停'},
			{id: '3', text: '停用'}
		],data: {
			'0': '正常',
			'2': '暂停',
			'3': '停用'
		}
};
//账户状态securities_account_status
var _SECURITIESACCOUNTSTATUS_DICT = {
	item: [
			{id: '100', text: '证券账户状态'},
			{id: '0', text: '正常'},
			{id: '1', text: '暂停'},
			{id: '9', text: '销户'}
		],
		itemb: [
			{id: '0', text: '正常'},
			{id: '1', text: '暂停'},
			{id: '9', text: '销户'}
		],data: {
			'0': '正常',
			'1': '暂停',
			'9': '销户'
		}
};
//AP支持交易 support_type  使用apinfomain.jsp中的数据字典

//接入方式connet_type   使用apinfomain.jsp中的数据字典
	
//证券账户绑定状态secBindStatus 
var _SECBINDSTATUS_DICT = {
	item: [
			{id: '100', text: '证券账户绑定状态'},
			{id: '0', text: '未绑定'},
			{id: '1', text: '已绑定'}
		],
		itemb: [
			{id: '0', text: '未绑定'},
			{id: '1', text: '已绑定'}
		],data: {
			'0': '未绑定',
			'1': '已绑定'
		}
};

/**
 * 客户信息
 */
//证件类型 id_type
var _IDTYPE_DICT = {
	item: [
		{id: '100', text: '证件类型'},
		{id: '1', text: '身份证'}
	],
	itemb: [
		{id: '1', text: '身份证'}
	],data: {
		'1': '身份证'
	}
};
//客户身份cust_identity
var _CUSTIDENTITY_DICT = {
	item: [
		{id: '100', text: '客户身份'},
		{id: '0', text: '交易员'},
		{id: '1', text: '出资人'},
		{id: '2', text: '出资代理人'},
		{id: '3', text: '用资代理人'},
		{id: '4', text: '出资权利人'},
		{id: '5', text: '代理商'},
		{id: '6', text: '销售经理'}
	],
	itemb: [
		{id: '0', text: '交易员'},
		{id: '1', text: '出资人'},
		{id: '2', text: '出资代理人'},
		{id: '3', text: '用资代理人'},
		{id: '4', text: '出资权利人'},
		{id: '5', text: '代理商'},
		{id: '6', text: '销售经理'}
	],data: {
		'0': '交易员',
		'1': '出资人',
		'2': '出资代理人',
		'3': '用资代理人',
		'4': '出资权利人',
		'5': '代理商',
		'6': '销售经理'
	}
}; 
//客户身份cust_identity  只有销售经理和代理商
var _ONLYCUSTIDENTITY_DICT = {
	item: [
		{id: '100', text: '客户身份'},
		{id: '5', text: '代理商'},
		{id: '6', text: '销售经理'}
	],
	itemb: [
		{id: '5', text: '代理商'},
		{id: '6', text: '销售经理'}
	],data: {
		'5': '代理商',
		'6': '销售经理'
	}
}; 
//客户类型cust_type
var _CUSTTYPE_DICT = {
	item: [
		{id: '100' , text: '客户类型'},
		{id: '0', text: '个人'},
		{id: '1', text: '机构'}
	],
	itemb: [
		{id: '0', text: '个人'},
		{id: '1', text: '机构'}
	],data: {
		'0': '个人',
		'1':'机构'
	}
};  
//内外标志inner_outter_flag
var _INNEROUTTERFLAG_DICT = {
	item: [
		{id: '100', text: '内外标志'},
		{id: '0', text: '内部'},
		{id: '1', text: '外部'},
		{id: '2', text: '未标记'}
	],
	itemb: [
		{id: '0', text: '内部'},
		{id: '1', text: '外部'},
		{id: '2', text: '未标记'}
	],data: {
		'0': '内部',
		'1': '外部',
		'2': '未标记'
	}
}; 
//状态status
var _STATUS_DICT = {
	item: [
		{id: '100', text: '状态'},
		{id: '0', text: '正常'},
		{id: '1', text: '停用'}
	],
	itemb: [
		{id: '0', text: '正常'},
		{id: '1', text: '停用'}
	],data: {
		'0': '正常',
		'1': '停用'
	}
}; 
/**
 * 代理商运营参数管理 agentparammain.html
 */

//软件使用费分成方式（按固定费率、按比例）
var _SOFTWAREFEESHAREMODE_DICT = {
		item: [
			{id: '100', text: '软件使用费分成方式'},
			{id: '0', text: '固定'},
			{id: '1', text: '比例'}
		],
		itemb: [
			{id: '0', text: '固定'},
			{id: '1', text: '比例'}
		],data: {
			'0': '固定',
			'1': '比例'
		}
	}; 

/**
 * 601288
 * @author haoyy
 */

//券商状态
var _STATUSDESC_DICT = {
	data: {
		'0':'未报',
		'1': '废单',
		'2': '已报',
		'5': '部成',
		'6': '已成',
		'7': '部撤',
		'8': '已撤'
	}
}

/**
 * 外部对账明细查询  reconciliationDetail.html
 * @author haoyy
 * 2017.10.23 10:35
 */

//对账结果
var _RECONCILESTATUS_DICT = {
	item:[
	    {id: '100', text: '对账结果'},
		{id: '1', text: '委托价格不一致'},
		{id: '2', text: '委托数量不一致'},
		{id: '3', text: '成交价格不一致'},
		{id: '4', text: '成交数量不一致'},
		{id: '5', text: '委托状态不一致'},
		{id: '6', text: '券商无交易明细'},
		{id: '7', text: '平台无交易明细'}
	],
	data: {
		'1':'委托价格不一致',
		'2': '委托数量不一致',
		'3': '成交价格不一致',
		'4': '成交数量不一致',
		'5': '委托状态不一致',
		'6': '券商无交易明细',
		'7': '平台无交易明细'
	}
}

//数据来源
var _DATASOURCE_DICT = {
	item: [
	  {id: '100', text: '数据来源'},
	  {id: '0', text: '本地'},
	  {id: '1', text: '券商'}
    ],
	data: {
		'0':'本地',
		'1': '券商'
	}
}
//买卖标识
var _BUYSELLFLAG_DICT = {
	item: [
		{id: '0', text: '买入'},
		{id: '1', text: '卖出'},
		{id: '2', text: '送股'},
		{id: '3', text: '派息'},
		{id: '4', text: '配股'},
		{id: '5', text: '同步股份减少'},
		{id: '6', text: '同步股份增加'},
		{id: '7', text: '同步资金减少'},
		{id: '8', text: '同步资金增加'},
		{id: 'A', text: '股份减少'},
		{id: 'B', text: '股份增加'},
		{id: 'C', text: '资金减少'},
		{id: 'D', text: '资金增加'},
		{id: 'E', text: '送股扣税'},
		{id: 'F', text: '派息扣税'},
		{id: 'J', text: '股份平移减少'},
		{id: 'K', text: '股份平移增加'}
	],data: {
		'0': '买入',
		'1': '卖出',
		'2': '送股',
		'3': '派息',
		'4': '配股',
		'5': '同步股份减少',
		'6': '同步股份增加',
		'7': '同步资金减少',
		'8': '同步资金增加',
		'A': '股份减少',
		'B': '股份增加',
		'C': '资金减少',
		'D': '资金增加',
		'E': '送股扣税',
		'F': '派息扣税',
		'J':'股份平移减少',
		'K':'股份平移增加',
		'L': 'T0持仓头寸增加(净增)',
		'M': 'T0持仓头寸减少(净减)',
		'N': '合并买入',
		'O': '合并卖出',
		'P': '母账户紧急平仓卖出'
	}
}

/**
 * 【日终作业】外部对账查询（资金、股份）
 * @author haoyy
 * 2017.12.28 17:20
 */
// 证券账户类型
var _SECURITIESACCOUNTTYPE_DICT = {
	item: [
	  {id: '100', text: '证券账户类型'},
	  {id: '0', text: '个人'},
	  {id: '1', text: '机构'}
    ],
	data: {
		'0':'个人',
		'1': '机构'
	}
}
//全部出资标志
var _ALLINVESTFLAG_DICT = {
	item: [
 	  {id: '100', text: '全部出资标志'},
	  {id: '0', text: '全部'},
	  {id: '1', text: '部分'}
    ],
	data: {
		'0':'全部',
		'1': '部分'
	}
}


/**
 * 角色权限管理
 * @author haoyy
 * 201712.18 14:20
 */
//角色状态
var _ROLESTATUS_DICT = {
	item: [
	  {id: '100', text: '角色状态'},
	  {id: '0', text: '启用'},
	  {id: '1', text: '禁用'}
    ],
	data: {
		'0':'启用',
		'1': '禁用'
	}
}
//角色类别
var _ROLETYPE_DICT = {
		item: [
		  {id: '100', text: '角色类别'},
		  {id: '0', text: '管理员'},
		  {id: '1', text: '操作员'}
	    ],
		data: {
			'1':'平台管理员',
			'2': '平台操作员',
			'3': '机构管理员',
			'4': '机构操作员'
		}
}
//是否可删除
var _ENABLEDELETE_DICT = {
		item: [
		  {id: '100', text: '是否可删除'},
		  {id: false, text: '否'},
		  {id: true, text: '是'}
	    ]
}
//是否可编辑
var _ENABLEEDIT_DICT = {
		item: [
		  {id: '100', text: '是否可编辑'},
		  {id: false, text: '否'},
		  {id: true, text: '是'}
	    ]
}


/**
 * 人工审核设置
 * @author haoyy
 * 2018.01.17 09:40
 */
//人工审核类型
var _MANUALCHECKTYPE_DICT = {
		item: [
		  {id: '100', text: '人工审核类型'},
//		  {id: '0', text: '不需要审核'},
//		  {id: '1', text: '卖平仓的股票'},
		  {id: '2', text: '母账户故障'},
//		  {id: '3', text: '母账户资金不足'},
		  {id: '4', text: '母账户股票不足'}
	//	  {id: '5', text: '交易账户单笔买入超限'},
	//	  {id: '6', text: '交易账户单笔卖出超限'}
	    ],
	    itemAd: [
	       {id:'100', text: '人工审核类型'},
	       {id: '5', text: '交易账户单笔超限'}
        ],data: {
		//	'0':'不需要审核',
		//	'1': '卖平仓的股票',
			'2': '母账户故障',
	//		'3': '母账户资金不足',
			'4': '母账户股票不足',
			'5': '交易账户单笔超限'
		}
}
//审核的委托类型
var _CHECKENTRUSTTYPE_DICT = {
		item: [
		   {id: '100', text: '委托类型'},
		   {id: 'B', text: '买'},
		   {id: 'S', text: '卖'},
		   {id: 'C', text: '撤'}
		   /*{id: 'BS', text: '买卖'},
		   {id: 'SB', text: '买卖'},
		   {id: 'BC', text: '买撤'},
		   {id: 'CB', text: '买撤'},
		   {id: 'SC', text: '卖撤'},
		   {id: 'CS', text: '卖撤'},
		   {id: 'BSC', text: '买卖撤'},
		   {id: 'BCS', text: '买卖撤'},
		   {id: 'SCB', text: '买卖撤'},
		   {id: 'SBC', text: '买卖撤'},
		   {id: 'CSB', text: '买卖撤'},
		   {id: 'CBS', text: '买卖撤'},*/
        ],
        data: {
        	'B': '买',
        	'S': '卖',
        	'C': '撤',
        	'BS': '买卖',
    		'SB': '买卖',
    		'BC': '买撤',
    		'CB': '买撤',
    		'SC': '卖撤',
    		'CS': '卖撤',
    		'BSC': '买卖撤',
    		'BCS': '买卖撤',
    		'SBC': '买卖撤',
    		'SCB': '买卖撤',
    		'CSB': '买卖撤',
    		'CBS': '买卖撤'
        }
}
/**
 * 撤单查询 cancelTradeEntrustInfo.html
 */

//审核状态
var _MANUALCHECKSTATUS_DICT = {
	item: [
		{id: '100', text: '审核状态'},
		{id: '0', text: '未审核'},
		{id: '1', text: '审核已通过'},
		{id: '2', text: '审核未通过'}
	],
	itemb: [
		{id: '0', text: '未审核'},
		{id: '1', text: '审核已通过'},
		{id: '2', text: '审核未通过'}
	],data: {
		'0': '未审核',
		'1': '审核已通过',
		'2': '审核未通过'
	}
};

//审核状态
var _MANUALCHECKSTATUS_DICT = {
	item: [
		{id: '100', text: '审核状态'},
		{id: '0', text: '未审核'},
		{id: '1', text: '审核已通过'},
		{id: '2', text: '审核未通过'}
	],data: {
		'0': '未审核',
		'1': '审核已通过',
		'2': '审核未通过'
	}
};

//风控卖出标识
var _RISKSELLFLAG_DICT = {
	item: [
		{id: '100', text: '风控卖出标识'},
		{id: '0', text: '风控卖出'},
		{id: '1', text: '自动平仓'},
		{id: '2', text: '客户自主交易'}
	],data: {
		'0': '风控卖出',
		'1': '自动平仓',
		'2': '客户自主交易'
	}
};

//信用交易类别
var _CREDITTRADETYPE_DICT = {
	item: [
		{id: '100', text: '信用交易类别'},
		{id: '1', text: '担保品买入'},
		{id: '2', text: '融资买入'},
		{id: '3', text: '担保品卖出'},
		{id: '4', text: '卖券还款'}
	],data: {
		'1': '担保品买入',
		'2': '融资买入',
		'3': '融资买入',
		'4': '卖券还款'
	}
};

//交易市场
var _TRADEMARKET_DICT = {
	item: [
		{id: '100', text: '交易市场'},
		{id: '0', text: '深圳A股'},
		{id: '1', text: '上海A股'}
	],data: {
		'0': '深圳A股',
		'1': '上海A股'
	}
};

function getDictKeyValue(type,key){
	return type[key];
}

function getDictKeyValueNew(key){
	
	return key < 3 ? "存入" : "取出";
}
var columnmap=new Map();
columnmap['dealPrice']='deal_price';
columnmap['entrustDate']='entrust_date';
columnmap['entrustTime']='entrust_time';
columnmap['dealDate']='deal_date';
columnmap['dealTime']='deal_time';
columnmap['lastSynchronizeTime']='last_synchronize_time';
columnmap['userNo']='user_no';
columnmap['accountNo']='account_no';
columnmap['fundChannelNo']='fund_channel_no';
columnmap['fundChangeType']='fund_change_type';
columnmap['fundUnitNo']='fund_unit_no';
columnmap['fundPoolCode']='fund_pool_code';
columnmap['securitiesAccountNo']='securities_account_no';
columnmap['shareholdersCode']='shareholders_code';
columnmap['stockCode']='stock_code';
columnmap['stockName']='stock_name';
columnmap['batchId']='batch_id';
columnmap['businessNo']='business_no';
columnmap['securitiesTraderEntrustNo']='securities_trader_entrust_no';
columnmap['entrustType']='entrust_type';
columnmap['buySellFlag']='buy_sell_flag';
columnmap['entrustNum']='entrust_num';
columnmap['entrustPrice']='entrust_price';
columnmap['freezeAmt']='freeze_amt';
columnmap['cancelNum']='cancel_num';
columnmap['dealNum']='deal_num';
columnmap['dealAmt']='deal_amt';
columnmap['accrualAmt']='accrual_amt';
columnmap['accruallAmt']='accruall_amt';
columnmap['sectraderAccrualAmt']='sectrader_accrual_amt';
columnmap['tradeServiceFee']='trade_service_fee';
columnmap['stampTax']='stamp_tax';
columnmap['transferFee']='transfer_fee';
columnmap['otherFee']='other_fee';
columnmap['scrtraderCommission']='scrtrader_commission';
columnmap['securitiesTraderCommission']='securities_trader_Commission';
columnmap['createTime']='create_time';
columnmap['tradeAmt']='trade_amt';
columnmap['lastRemainAmt']='last_remain_amt';
columnmap['currentOutAmt']='current_out_amt';
columnmap['currentInAmt']='current_in_amt';
columnmap['currentBuyFreezeAmt']='current_buy_freeze_amt';
columnmap['currentBuyPayoutAmt']='current_buy_payout_amt';
columnmap['currentSellReturnAmt']='current_sell_return_amt';
columnmap['currentRevertbuyAmt']='current_revertbuy_amt';
columnmap['currentRemainAmt']='current_remain_amt';
columnmap['currentEnableAmt']='current_enable_amt';
columnmap['totalAmt']='total_amt';
columnmap['totalPrincipalAmt']='total_principal_amt';
columnmap['totalMarginAmt']='total_margin_amt';
columnmap['idleFunds']='idle_funds';
columnmap['lastRemainNum']='last_remain_num';
columnmap['currentInNum']='current_in_num';
columnmap['currentOutFreezeNum']='current_out_freeze_num';
columnmap['currentOutCompleteNum']='current_out_complete_num';
columnmap['currentOutRevokeNum']='current_out_revoke_num';
columnmap['currentRemainNum']='current_remain_num';
columnmap['currentEnableNum']='current_enable_num';
columnmap['totalBuyAmt']='total_buy_amt';
columnmap['costPrice']='cost_price';
columnmap['profitLossAmt']='profit_loss_amt';
columnmap['profitLossPrecent']='profit_loss_precent';
columnmap['busiTime']='busi_time';
columnmap['tranDate']='tran_date';
function onSortColumn(param){
	var sort=param.sort;
	if(sort!=null && sort!=''){
		var columnname=columnmap[sort];
		if(columnname!=null && columnname!=''){
			param.sort=columnname;
		}
	}
}
function getColorBuySellFlag(row){
		if(row.entrustType=='1'){
			return 'color:gray;';
		}else if ("02467BCEFKN".indexOf(row.buySellFlag)>-1){
			return 'color:red;';
		}else if("1358ADJGOP".indexOf(row.buySellFlag)>-1){
			return 'color:blue;';
		}
}
function convertParam(data){
	   if(data.returnCode!=0){
		   showmsg(data.returnMsg);
	   }
	   var p=new Object;
	   if(data.list!=null && data.list!=""){
		   p.rows=data.list;
	   }else{
		   p.rows=[];
	   }
	   p.total=data.totalNum;
	   p.retCode=data.returnCode;
	   p.msg=data.returnMsg;
	   return p;
}