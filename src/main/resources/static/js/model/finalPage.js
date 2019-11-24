var retData_ = null;
$(function(){
	initFinalPage();
	$('#viewTab').tabs({
		border:false,
		onSelect:function(title){
			if(title == "AP功能测试") {
			} else
			if(title == "日志信息查询") {
			} else
			if(title == "保存结果查询") {
				re_search();
			} else
			if(title == "定时任务配置") {
				config_init_search();
			} else
			if(title == "自动下单配置") {
				entrust_init_search();
			} else
			if(title == "自动查询配置") {
				query_init_search();
			} else
			if(title == "监控结果查询") {
				mon_search();
			}//
		}
	});
});
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
function initFinalPage() {
	retData_ = null;
	$('#logFlag').val(0);
	$('#securitiesAccountNo').textbox('reset');
	$('#securitiesAccountName').textbox('reset');
	cleanForm();
	$('#stockCode').textbox({onChange : function(newValue,oldValue) {
		queryStockInfo(newValue);
	}
	});
	$('#stockCode').textbox('setValue','601288');
	$('#volume').numberbox('setValue',100);
	$('#logButton').switchbutton({
		checked: false,
        onChange: function(checked){
        	if(checked) {
        		$('#logFlag').val(1);
        		document.getElementById('saveMsgTD').style.display='block';
        		document.getElementById('saveCount').innerText='0';
        	}
        	else {
        		$('#logFlag').val(0);
        		document.getElementById('saveMsgTD').style.display='none';
        		document.getElementById('saveCount').innerText='0';
        	}
        	
    }});
}
function saveLog() {
	if(retData_ == null) {
		if($('#retCode').html() != '') {
			showmsg('结果已保存，不需要保存');
		} else {
			showmsg('没有需要保存的信息！！！');
		}
		return;
	}
	var securitiesAccountNo_ = $.trim($('#securitiesAccountNo').textbox('getValue'));
	var dataSourceType_ = $('#dataSourceType').combobox('getValue');
	retData_.securitiesAccountNo = securitiesAccountNo_;
	retData_.dataSourceType = dataSourceType_;
	$.ajax({
		url : root + '/testFinal/saveLog',
		data : JSON.stringify(retData_),
		type : "POST",
		cache : false,
		dataType:"json",
		contentType:"application/json;charset=utf-8",
		success : function(data) {
			if(data.retCode != 0) {
				showmsg(data.retMsg);
			} else {
				showmsg('保存成功');
				retData_ = null;
			}
		}
	});
}
function autoSaveLog() {
	if(retData_ == null) {
		if($('#retCode').html() != '') {
			showmsg('结果已保存，不需要保存');
		} else {
			showmsg('没有需要保存的信息！！！');
		}
		return;
	}
	var securitiesAccountNo_ = $.trim($('#securitiesAccountNo').textbox('getValue'));
	var dataSourceType_ = $('#dataSourceType').combobox('getValue');
	retData_.securitiesAccountNo = securitiesAccountNo_;
	retData_.dataSourceType = dataSourceType_;
	$.ajax({
		url : root + '/testFinal/saveLog',
		data : JSON.stringify(retData_),
		type : "POST",
		cache : false,
		dataType:"json",
		contentType:"application/json;charset=utf-8",
		success : function(data) {
			if(data.retCode != 0) {
				showmsg(data.retMsg);
			} else {
				var saveCount=document.getElementById('saveCount').innerText;
				document.getElementById('saveCount').innerText=Number(saveCount)+1;
				retData_ = null;
			}
		},
		error:function(data){
			alert("日志保存异常");
		}
	});
}
function cleanInfo() {
	$('#securitiesAccountNo').textbox('reset');
	$('#securitiesAccountName').textbox('reset');
	cleanForm();
}
function cleanForm() {
	cleanMsg();
	document.getElementById('orderType').value = 0;
	document.getElementById('category').value = 0;
	document.getElementById('transactionType').value = '';
	$('#secTraderName').textbox('reset');
	$('#secTraderCode').textbox('reset');
	$('#marginFinanceFlag').combobox('reset');
	$('#securitiestraderFundAccount').textbox('reset');
	$('#securitiestraderTranAccount').textbox('reset');
	$('#tranPassword').textbox('reset');
	$('#aps').combobox('reset');
	$('#ips').combobox('reset');
	$('#aps').combobox('loadData',[{}]);
	$('#ips').combobox('loadData',[{}]);
	$('#openBusinessHallId').textbox('reset');
	$('#serverVersion').textbox('reset');
	$('#serverIp').textbox('reset');
	$('#serverPort').textbox('reset');
	$('#orderNo').textbox('reset');
	
	//if($('#secTradeSite_data').datagrid())
	//	$('#secTradeSite_data').datagrid('loadData',[{}]);
	//$('#secTradeUrl').html('');
	$('#viewSecTrade').html('<div id="secTradeUrl" style="float: left; width: 810px;padding:5px;"></div>'
	+ '<table id="secTradeSite_data" data-options="width:520,border:false">'
	+ '</table>');
}
function finalQuery() {
	cleanForm();
	var securitiesAccountNo_ = $.trim($('#securitiesAccountNo').textbox('getValue'));
	var securitiesAccountName_ = $.trim($('#securitiesAccountName').textbox('getValue'));
	var dataSourceType_ = $('#dataSourceType').combobox('getValue');
	if(securitiesAccountNo_ == '' && securitiesAccountName_ == '') {
		showmsg("证券账户编号与名称不能同时为空");
		return;
	}
	$.ajax({ 
		url : root + '/testFinal/finalQuery',
		data : {dataSourceType : dataSourceType_,securitiesAccountNo : securitiesAccountNo_,securitiesAccountName : securitiesAccountName_},
		type : 'POST',
		cache : false,
		success: function(data){
			if(data.retCode != 0) {
				showmsg(data.retMsg);
			} else {
				if(securitiesAccountNo_ == '') {
					$('#securitiesAccountNo').textbox('setValue',data.securitiesAccountNo);
				}
				$('#securitiesAccountName').textbox('setValue',data.securitiesAccountName);
				$('#secTraderName').textbox('setValue',data.secTraderName);
				$('#secTraderCode').textbox('setValue',data.secTraderCode);
				$('#marginFinanceFlag').combobox('setValue',data.marginFinanceFlag);
				$('#securitiestraderFundAccount').textbox('setValue',data.securitiestraderFundAccount);
				$('#securitiestraderTranAccount').textbox('setValue',data.securitiestraderTranAccount);
				$('#tranPassword').textbox('setValue',data.tranPassword);
				$('#openBusinessHallId').textbox('setValue',data.openBusinessHallId);
				if(data.aps != null) {
					$('#aps').combobox('loadData',data.aps);
					if (typeof(data.aps[0]) != "undefined") {
						$("#aps ").combobox('select',data.aps[0].apNo);
					}
				}
				if(data.ips != null) {
					$('#ips').combobox('loadData',data.ips);
					for(i=0;i < data.ips.length;i++) {
						if(data.ips[i].serverType == data.marginFinanceFlag) {
							$("#ips ").combobox('select',data.ips[i].id);
							break;
						}
					}
				}
				querySecSite(data.openSecuritiesTraderNo);
			}
		}
	});
}
/*查询券商站点信息*/
function querySecSite(secTraderCode) {
	if(secTraderCode) {
		$.ajax({ 
			url : root + '/testFinal/secSiteQuery',
			data : {securitiesTraderNo : secTraderCode},
			type : 'POST',
			cache : false,
			success: function(data){
				if(data.retCode != 0) {
					showmsg("查询券商站点信息失败");
				} else {
					setSecDownloadUrl(data.securitiesTraderSoftwareUrl);
					setSecSiteList(data.siteInfoList);
				}
			}
		});
	}
}
function setSecDownloadUrl(securitiesTraderSoftwareUrl) {
	if(securitiesTraderSoftwareUrl) {
		$('#secTradeUrl').html(securitiesTraderSoftwareUrl.securitiesTraderName + '软件下载地址：<a href="' + securitiesTraderSoftwareUrl.softwareDownloadUrl + '">'+ securitiesTraderSoftwareUrl.softwareDownloadUrl + '</a>');
	} else {
		$('#secTradeUrl').html('');
	}
}
function setSecSiteList(data_) {
	$('#secTradeSite_data').datagrid({
		data : data_,
        singleSelect: true,
        striped : true,
        fitColumns : true,
        border : false,
        showFooter: false,
        idField : 'id',
    	//自适应列
        columns : [ [
        	{title : '券商名称', field : 'securitiesTraderName', align: 'center'},
            {title : '账户类型', field : 'securitiesType', align: 'center',formatter : function(value,row,index){
        		if(value == '0') {
        			return '普通'; 
        		} else if(value == '1') {
        			return '两融'; 
        		} else {
        			return value;
        		}}},
        	{title : 'IP', field : 'serviceIp', align: 'center'},
        	{title : '端口', field : 'servicePort', align: 'center'},
            {title : '站点名称', field : 'serviceSiteName', align: 'center'}
            ]],
            onDblClickRow : function(index, row) {
            	$('#serverIp').textbox('setValue',row.serviceIp);
				$('#serverPort').textbox('setValue',row.servicePort);
            }
	});
}
function changeServer(newValue,oldValue) {
	var data = $('#ips').combobox('getData');
	if(data != null) {
		for(i=0;i < data.length;i++) {
			if(data[i].id == newValue) {
				$('#serverVersion').textbox('setValue',data[i].serverVersion);
				$('#serverIp').textbox('setValue',data[i].serverIp);
				$('#serverPort').textbox('setValue',data[i].serverPort);
				break;
			}
		}
	}
}
function changeAP(newValue,oldValue) {
	if(oldValue != '' && newValue != '') {
		showmsg('页面设置AP无效，AP后台指定');
	}
}
function changeDataSource(newValue,oldValue) {
//	$('#securitiesAccountNo').textbox('reset');
//	$('#securitiesAccountName').textbox('reset');
	cleanForm();
}
function queryStockInfo(stockCode_) {
	if(stockCode_.length == 6) {
		$.ajax({
			url : root + '/testFinal/queryStockName',
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
					$('#lowPrice').numberbox('setValue', data.lowPrice);
					$('#higPrice').numberbox('setValue', data.higPrice);
					$('#buyPrice').numberbox('setValue', data.lowPrice);
					$('#sellPrice').numberbox('setValue', data.higPrice);
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

function enableTrade(buyFlag) {
	var volume_ = $('#volume').numberbox('getValue');
	var price_
	if(buyFlag) {
		price_ = $('#buyPrice').numberbox('getValue');
	} else {
		price_ = $('#sellPrice').numberbox('getValue');
	}
	if(price_ * volume_ > 5000) {
		showmsg('单次交易金额不能大于5000');
		return false;
	}
	return true;
}

/////////////////////////////////////////////////////////////
function buyTrade() {
	$('#orderNo').textbox('reset');
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	document.getElementById('orderType').value = 0;
	var marginFinanceFlag_  = $('#marginFinanceFlag').combobox('getValue');
	if(marginFinanceFlag_ == '1') {
		document.getElementById('transactionType').value = '1';
	} else {
		document.getElementById('transactionType').value = '';
	}
	var buyPrice = $('#buyPrice').numberbox('getValue');
	var volume = $('#volume').numberbox('getValue');
	if(volume == '') {
		$('#volume').numberbox('setValue',100);
	}
	if(buyPrice == '') {
		showmsg('买入价格不能为空');
		return;
	}
	if(!enableTrade(true)) {
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
				$('#orderNo').textbox('setValue',data.orderNo);
			}
		}
	});
}
function sellTrade() { //卖
	$('#orderNo').textbox('reset');
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	document.getElementById('orderType').value = 1;
	var marginFinanceFlag_  = $('#marginFinanceFlag').combobox('getValue');
	if(marginFinanceFlag_ == '1') {
		document.getElementById('transactionType').value = '3';
	} else {
		document.getElementById('transactionType').value = '';
	}
	var sellPrice = $('#sellPrice').numberbox('getValue');
	var volume = $('#volume').numberbox('getValue');
	if(volume == '') {
		$('#volume').numberbox('setValue',100);
	}
	if(sellPrice == '') {
		showmsg('卖出价格不能为空');
		return;
	}
	if(!enableTrade(false)) {
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
			// 设置委托编号
			if(data.orderNo != null) {
				$('#orderNo').textbox('setValue',data.orderNo);
			}
		}
	});
}
function buyTradeFund() {
	$('#orderNo').textbox('reset');
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	document.getElementById('orderType').value = 2;
	document.getElementById('transactionType').value = '2';
	var buyPrice = $('#buyPrice').numberbox('getValue');
	var volume = $('#volume').numberbox('getValue');
	if(volume == '') {
		$('#volume').numberbox('setValue',100);
	}
	if(buyPrice == '') {
		showmsg('买入价格不能为空');
		return;
	}
	if(!enableTrade(true)) {
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
				$('#orderNo').textbox('setValue',data.orderNo);
			}
		}
	});
}
function sellTradeFund() { //卖
	$('#orderNo').textbox('reset');
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	document.getElementById('orderType').value = 1;
	document.getElementById('transactionType').value = '4';
	var sellPrice = $('#sellPrice').numberbox('getValue');
	var volume = $('#volume').numberbox('getValue');
	if(volume == '') {
		$('#volume').numberbox('setValue',100);
	}
	if(sellPrice == '') {
		showmsg('卖出价格不能为空');
		return;
	}
	if(!enableTrade(false)) {
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
			// 设置委托编号
			if(data.orderNo != null) {
				$('#orderNo').textbox('setValue',data.orderNo);
			}
		}
	});
}
function cancleTrade() {//撤
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	var orderNo = $('#orderNo').textbox('getValue');
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
function queryFund() {//查询资金
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	document.getElementById('category').value = 0;
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
function queryPostion() {//查询持仓
	cleanMsg();
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
	cleanMsg();
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
	cleanMsg();
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
function queryShareholder() {//股东代码
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	document.getElementById('category').value = 5;
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
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
}
function queryCredit() {//信用资产
	cleanMsg();
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
	if(data.retCode == 0) {
		var saveCount=document.getElementById('saveCount').innerText;
		document.getElementById('saveCount').innerText=Number(saveCount)+1;
	}
	retData_ = data;
	if(data.retCode != 0) {
		$('#retCode').html('返回码：<font color="red">' + data.retCode+ '</font>');
		$('#retMsg').html('操作结果：<font color="red">' + data.retMsg + '</font>');
	} else {
		$('#retCode').html('返回码：<font color="green">' + data.retCode+ '</font>');
		$('#retMsg').html('操作结果：<font color="green">' + data.retMsg + '</font>');
	}
	if(data.requestUrl != null)
		$('#requestUrl').html('AP地址：' + data.requestUrl);
	if(data.requestInfo != null)
		$('#requestInfo').html('AP请求：' + data.requestInfo);
	if(data.responseInfo != null)
		$('#responseInfo').html('AP返回：' + data.responseInfo);
	if(data.sendTime != null)
		$('#sendTime').html('AP耗时(MS)：' + data.sendTime);
	if(data.tradeTime != null)
		$('#tradeTime').html('交易耗时(MS)：' + data.tradeTime);
	if(data.checkMsg != null) {
		if(data.checkCode != 0) {
			$('#checkMsg').html('校验结果：<font color="red">' + data.checkMsg + '</font>');
		} else {
			$('#checkMsg').html('校验结果：<font color="green">' + data.checkMsg + '</font>');
		}
	}
//	if($("#logButton").switchbutton("options").checked){
//		autoSaveLog();
//	}
}
function cleanMsg() {
	retData_ = null;
	$('#retCode').html('');
	$('#retMsg').html('');
	//requestUrl
	$('#requestUrl').html('');
	$('#requestInfo').html('');
	$('#responseInfo').html('');
	$('#sendTime').html('');
	$('#tradeTime').html('');
	$('#checkMsg').html('');
}
function formatJSON(){
	var json=$("#responseInfo").text();
	json=json.replace('AP返回：','');
	var obj=JSON.parse(json);
	var table="";
	for(var key in obj){
		if(key.indexOf("List")!=-1){
			table+=formatData(eval(key),eval(key+'Title'),obj[key])
		}
	}
	$("#responseInfo").html(table);
}
function formatData(columns,columnsTitle,data){
	var trs="<table style='border-collapse:collapse'><tr>";
	for(var j=0;j<columns.length;j++){
		trs=trs+"<td style='border:1px solid'>"+columnsTitle[j]+"</td>";
	}
	trs+="</tr>";
	for(var i=0;i<data.length;i++){
		trs+="<tr>"
		for(var j=0;j<columns.length;j++){
			var a;
			if(columns[j]=='bsFlag' || columns[j]=='statusDesc'){
				a=getDictKeyValue(eval(columns[j]),data[i][columns[j]]);
			}else{
				a=data[i][columns[j]];
			}
			trs=trs+"<td style='border:1px solid'>"+a+"</td>";
		}
		trs+="</tr>"
	}
	trs+="</table>";
	return trs;
}

function queryMuti() {
	$("input[name='muticheck']").attr("checked", false);
	$('#mutiParamWin').window('open');
}

function mutiQuery() {
	var vals = [];
	var checkedParam = $("input[name='muticheck']:checked");
	if(checkedParam.length < 1) {
		showmsg("请选择查询类型");
		return;
	}
	checkedParam.each(function (index, item) {
		vals.push(parseInt($(this).val()));
	});
	cleanMsg();
	if(!$('#mainForm').form('validate')) {
		showmsg('请输入正确的信息');
		return;
	}
	var data_ = getFormJson($('#mainForm'));
	// 类别 0资金  1股份   2当日委托  3当日成交     4可撤单   5股东代码
	data_.categorys = vals;
	$.ajax({
		url : root + '/testTrade/multiQuery',
		data : JSON.stringify(data_),
		type : "POST",
		cache : false,
		contentType:"application/json;charset=utf-8",
		success : function(data) {
			retMsg(data);
			mutiParamWinClose();
		}
	});
}

function mutiParamWinClose() {
	$('#mutiParamWin').window('close');
}

var tradeQueryDataCategory1List=["accountType","availableSellVolume","costPrice","market","match","profitOrLossRatio","profitOrLossValue","recentMarketValue","secChName","secID","shareholderCode","totalVolume"];
var tradeQueryDataCategory1ListTitle=["帐号类别","可卖数量","成本价","交易所代码","当前价","盈亏比例(%)","浮动盈亏","最新市值","证券名称","证券代码","股东代码","证券数量"];

var tradeQueryDataCategory2List=["accountType","actionTime","orderType","bsFlag","bsFlagDesc","orderMethod","orderNo","orderPrice","orderVolume","secChName","secID","shareholderCode","statusDesc","transactionPrice","transactionVloume"];
var tradeQueryDataCategory2ListTitle=["帐号类别","委托时间","委托类别","买卖标志","买卖标志描述","委托方式","委托编号","委托价格","委托数量","证券名称","证券代码","股东代码","状态说明","成交价格","成交数量"];

var tradeQueryDataCategory3List=["actionTime","secID","secChName","bsFlag","bsFlagDesc","transactionPrice","transactionVloume","turnover","transactionNo","orderNo","shareholderCode","accountType"];
var tradeQueryDataCategory3ListTitle=["成交时间","证券代码","证券名称","买卖标志","买卖标志描述","成交价格","成交数量","成交金额","成交编号","委托编号","股东代码","帐号类别"];

var tradeQueryDataCategory5List=["shareholderCode","shareholderName","accountType","accountNo","seatCode","marginTradingFlag","otherInfo"];
var tradeQueryDataCategory5ListTitle=["股东代码","股东名称","帐号类别","资金帐号","席位代码","融资融券标识","保留信息"];