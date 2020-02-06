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
			{id: '0', text: '未报'},
			{id: '1', text: '废单'},
			{id: '2', text: '已报'},
			{id: '3', text: '正报'},
			{id: '5', text: '部成'},
			{id: '6', text: '已成'},
			{id: '7', text: '部撤'},
			{id: '8', text: '已撤'},
			{id: '9', text: '废单'}
		],data: {
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

function getDictKeyValue(type,key){
	return type[key];
}

function getDictKeyValueNew(key){
	
	return key < 3 ? "存入" : "取出";
}
function formatDict(field) {
	return function (value, row, index) {
		var data = eval('_' + field.toUpperCase() + '_DICT');
		if (value && data.data && data.data.hasOwnProperty(value)) {
			return data.data[value];
		}
		return value;
	}
}
function getColorBuySellFlag(row){
		if ("0".indexOf(row.bs_flag)>-1){
			return 'color:red;';
		}else if("1".indexOf(row.bs_flag)>-1){
			return 'color:blue;';
		}else{
			return 'color:gray;';
		}
}


function getColorBuySellFlag2(row){
	if(row.entrust_type=='1'){
		return 'color:gray;';
	}else if ("02467BCEFKN".indexOf(row.buy_sell_flag)>-1){
		return 'color:red;';
	}else if("1358ADJGOP".indexOf(row.buy_sell_flag)>-1){
		return 'color:blue;';
	}
}
function getColorBuySellFlag3(row){
	if(row.cost_price==row.current_price){
		return 'color:black;';
	}else if (row.cost_price>row.current_price){
		return 'color:red;';
	}else if(row.cost_price<row.current_price){
		return 'color:blue;';
	}
}