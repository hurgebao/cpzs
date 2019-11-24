$(function(){
	cleanMsg();
	init_secTrader_combox();
	init_securitiesAccount_combox();
	init_apNo_combox();
	$('#stockCode').textbox({onChange : function(newValue,oldValue) {
		queryStockInfo(newValue);
	}
	});
	$('#stockCode').textbox('setValue','601288');
	$('#volume').numberbox('setValue',100);
});

function cleanMsg() {
	$('#retCode').html('');
	$('#retMsg').html('');
	$('#requestInfo').html('');
	$('#responseInfo').html('');
	$('#sendTime').html('');
	$('#tradeTime').html('');
	$('#checkMsg').html('');
}

function init_secTrader_combox() {
	var dataSourceType_ = $('#dataSourceType').combobox('getValue');
	$('#secTrader').combobox({    
		url : root + '/testAp/querySecInfo',
		data : {dataSourceType : dataSourceType_},
		valueField:'secTraderNo',
		textField:'secTraderName',
		filter: function(q, row){  
			var opts = $(this).combobox('options');  
			return row[opts.textField].indexOf(q) >= 0;//这里改成>=即可在任意地方匹配  
		},
		onChange : function(newValue,oldValue) {
			change_sec_info(newValue);
		}
	});  
}

function init_securitiesAccount_combox() {
	var dataSourceType_ = $('#dataSourceType').combobox('getValue');
	$('#securitiesAccount').combobox({    
		url : root + '/testAp/queryAccount',
		data : {dataSourceType : dataSourceType_},
		valueField:'securitiesAccountNo',
		textField:'securitiesAccountName',
		filter: function(q, row){  
			var opts = $(this).combobox('options');  
			return row[opts.textField].indexOf(q) >= 0;//这里改成>=即可在任意地方匹配  
		},
		onChange : function(newValue,oldValue) {
			//change_acc_info(newValue);
		}
	});
}

function init_apNo_combox() {
	var dataSourceType_ = $('#dataSourceType').combobox('getValue');
	$('#apNo').combobox({    
		url : root + '/testAp/queryApInfo',
		data : {dataSourceType : dataSourceType_},
		valueField:'apNo',
		textField:'apName',
		filter: function(q, row){  
			var opts = $(this).combobox('options');  
			return row[opts.textField].indexOf(q) >= 0;//这里改成>=即可在任意地方匹配  
		},
		onChange : function(newValue,oldValue) {
			//change_ap_info(newValue);
		}
	});
}

function change_sec_info(_key) {
	var secTraderNo_ = $('#secTrader').combobox('getValue');
	$.ajax({ 
		url : root + '/testAp/querySecInfo',
		data : {secTraderNo : secTraderNo_},
		type : 'POST',
		cache : false,
		success: function(data){
			data = JSON.parse(data);
			$('#secCode').textbox('setValue',data[0].secTraderCode);
			$('#secType').textbox('setValue','001');
		}
	});
}

function change_acc_info(_key) {

}

function change_ap_info(_key) {

}

function queryStockInfo(stockCode_) {
	if(stockCode_.length == 6) {
		$.ajax({
			url : root + '/testAp/queryStockName',
			data : {
				stockCode : stockCode_
			},
			type : "POST",
			cache : false,
			success : function(data) {
				if(data == '') {
					showmsg("股票代码不正确，请核查");
					$('#stockCode').textbox('reset');
				} else {
					$('#stockName').textbox('setValue', data.stockName);
					$('#low_price').numberbox('setValue', data.lowPrice);
					$('#hig_price').numberbox('setValue', data.higPrice);
					$('#buy_price').numberbox('setValue', data.lowPrice);
					$('#sell_price').numberbox('setValue', data.higPrice);
				}
			}
		});
	}else{
		if(stockCode_ != '')
			showmsg("股票代码不正确，请核查");
		$('#stockCode').textbox('reset');
		$('#stockName').textbox('reset');
	}
}

function changeDataSource(newValue,oldValue) {
	cleanMsg();
	init_secName_combox();
	init_securitiesAccount_combox();
	init_apNo_combox();
}
/////////////////////////////////////////////////////////////
function buyTrade() {
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	var buyPrice = $('#buy_price').numberbox('getValue');
	if(buyPrice == '') {
		showmsg('买入价格不能为空');
		return;
	}
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/buy',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
			// 设置委托编号
			if(data.orderNo != null) {
				$('#orderNo').numberbox('setValue',data.orderNo);
			}
		}
	});
}
function sellTrade() { //卖
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	var sellPrice = $('#sell_price').numberbox('getValue');
	if(sellPrice == '') {
		showmsg('卖出价格不能为空');
		return;
	}
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/sell',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
		}
	});
}
function cancleTrade() {//撤
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	var orderNo = $('#orderNo').numberbox('getValue');
	if(orderNo == '') {
		showmsg('委托编号不能为空');
		return;
	}
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/cancel',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
		}
	});
}
function queryPostion() {//查询持仓
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	document.getElementById('category').value = 1;
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/singleQuery',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
		}
	});
}
function queryEtrust() {//当日委托
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	document.getElementById('category').value = 2;
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/singleQuery',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
		}
	});
}
function queryDeal() {//当日成交
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	document.getElementById('category').value = 3;
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/singleQuery',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
		}
	});
}
function queryFina() {//融资列表
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
}
function queryCredit() {//信用资产
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	document.getElementById('category').value = 7;
	var data_ = getFormJson($('#mainForm'));
	$.ajax({
		url : root + '/testTrade/singleQuery',
		data : data_,
		type : "POST",
		cache : false,
		success : function(data) {
			retMsg(data);
		}
	});
}

//////////////////////////////msg///////////////////////

function retMsg(data) {
	cleanMsg();
	$('#retCode').html('返回码：' + data.retCode);
	$('#retMsg').html('操作结果：' + data.retMsg);
	if(data.requestInfo != null)
		$('#requestInfo').html('AP请求：' + data.requestInfo);
	if(data.responseInfo != null)
		$('#responseInfo').html('AP返回：' + data.responseInfo);
	if(data.sendTime != null)
		$('#sendTime').html('AP耗时(MS)：' + data.sendTime);
	if(data.tradeTime != null)
		$('#tradeTime').html('交易耗时(MS)：' + data.tradeTime);
	if(data.checkMsg != null)
		$('#checkMsg').html('校验返回结果：' + data.checkMsg);
}
