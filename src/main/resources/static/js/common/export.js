/**
 * 针对不标准参数特殊处理
 */
var ExportHandler = {
	//导出方法，传入查询的form的Id，查询结果表格Id，和按钮，不需要form验证和传入查询条件的，可自行修改
	doExport : function(menuTitle,formId, tableId, button) {
		//调用form的验证方法
		var isValid = $('#' + formId).form('validate');
		if (!isValid) {
			return false;
		}
		//取得表格所有列
		var cols = $('#' + tableId).datagrid('options').columns;
		//取得表格的url属性，该属性不能为空，因为通用导出将调用该方法进行查询
		var reqUrl = $('#' + tableId).datagrid('options').url;
		if (reqUrl == null) {
			alert('表格必须要有url属性才能导出！');
			return false;
		}
		var btnName = '导出EXCEL';
		if (button) {
			btnName = $(button).text();
			$(button).linkbutton("disable");
			$(button).linkbutton({
				text : '导出中...'
			});
		}
		var searchParams= $('#' + formId).serialize();
		if(searchParams==null ||searchParams==''){
			searchParams+="page=1&rows=1000"
		}else{
			var paramList=searchParams.split("&");
			searchParams="page=1&rows=1000";
			for(var i=0;i<paramList.length;i++){
				var param=paramList[i].split("=");
				if(param[1]=='100'){
					searchParams+=('&'+param[0]+'=');
				}else{
					searchParams+=('&'+paramList[i]);
				}
			}
		}
		//将页面的当前页设置为1、每页查询10000条，是为了调用查询方法进行导出时不分页，导出所有查询数据
		$.ajax({
			url : reqUrl,
			type : 'POST',
			data : searchParams,
			contentType : 'application/x-www-form-urlencoded;charset=utf-8',
			success : function(data) {
				for(var i in cols[0]){
					var col = cols[0][i];
						if(col.formatter){
							var formatter_func = col.formatter;
							for(var j in data.list){
								var row = data.list[j];
								var rs = formatter_func(eval('row.'+col.field),row,j);
								eval('row.'+col.field+"='"+rs+"'");
							}
						}
				}
				//将查询完的数据提交到后台进行导出，新建一个表单，模拟表单提交（ajax提交无法返回流文件），导出excel
				var data1 = JSON.stringify(data.list);
				var data2 = JSON.stringify(cols[0]);
				var form_ming_zi_bu_neng_chong_fu = $("<form>");
				form_ming_zi_bu_neng_chong_fu.attr('style', 'display:none');
				form_ming_zi_bu_neng_chong_fu.attr('target', '');
				form_ming_zi_bu_neng_chong_fu.attr('method', 'post');
				//form提交路径
				form_ming_zi_bu_neng_chong_fu.attr('action', root+'/export/exec');
				var input1 = $('<input>');
				input1.attr('type', 'hidden');
				input1.attr('name', 'cols');
				input1.attr('value', data2);

				var input2 = $('<input>');
				input2.attr('type', 'hidden');
				input2.attr('name', 'rows');
				input2.attr('value', data1);
				
				var input3 = $('<input>');
				input3.attr('type', 'hidden');
				input3.attr('name', 'menuTitle');
				input3.attr('value', menuTitle);
				$('body').append(form_ming_zi_bu_neng_chong_fu);
				form_ming_zi_bu_neng_chong_fu.append(input1);
				form_ming_zi_bu_neng_chong_fu.append(input2);
				form_ming_zi_bu_neng_chong_fu.append(input3);
				form_ming_zi_bu_neng_chong_fu.submit();
				form_ming_zi_bu_neng_chong_fu.remove();

				if (button) {
					$(button).linkbutton("enable");
					$(button).linkbutton({
						text : btnName
					});
				}
			},
			error : function(data) {
				alert(data.responseText);
			}
		});
	}

}
/**
 * easyui标准导出
 */
var ExportHandler_S = {
		//导出方法，传入查询的form的Id，查询结果表格Id，和按钮，不需要form验证和传入查询条件的，可自行修改
		//menuTitle: 导出文档名  formId:提交表单 tableId:数据列表 button:按钮  codeNames:码表列表(多个用,隔开)
		doExport : function(menuTitle,formId, tableId, button, codeNames) {
			//调用form的验证方法
			var isValid = $('#' + formId).form('validate');
			if (!isValid) {
				return false;
			}
			//取得表格所有列
			var cols = $('#' + tableId).datagrid('options').columns;
			//取得表格的url属性，该属性不能为空，因为通用导出将调用该方法进行查询
			var reqUrl = $('#' + tableId).datagrid('options').url;
			if (reqUrl == null) {
				alert('表格必须要有url属性才能导出！');
				return false;
			}
			var btnName = '导出EXCEL';
			if (button) {
				btnName = $(button).text();
				$(button).linkbutton("disable");
				$(button).linkbutton({
					text : '导出中...'
				});
			}
			var searchParams= $('#' + formId).serialize();
			if(searchParams==null ||searchParams==''){
				searchParams+="page=1&rows=1000"
			}else{
				searchParams+="&page=1&rows=1000"
			}
			//将页面的当前页设置为1、每页查询1000条，是为了调用查询方法进行导出时不分页，导出所有查询数据
			$.ajax({
				url : reqUrl,
				type : 'POST',
				data : searchParams,
				contentType : 'application/x-www-form-urlencoded;charset=utf-8',
				success : function(data) {
					//将查询完的数据提交到后台进行导出，新建一个表单，模拟表单提交（ajax提交无法返回流文件），导出excel
					var a=JSON.parse(data);
					for(var i in cols[0]){
						var col = cols[0][i];
							if(col.formatter){
								var formatter_func = col.formatter;
								for(var j in a.rows){
									var row = a.rows[j];
									var rs = formatter_func(eval('row.'+col.field),row,j);
									eval('row.'+col.field+"='"+rs+"'");
								}
							}
					}
					var data1 = JSON.stringify(a.rows);
					var data2 = JSON.stringify(cols[0]);
					var form_ming_zi_bu_neng_chong_fu = $("<form>");
					form_ming_zi_bu_neng_chong_fu.attr('style', 'display:none');
					form_ming_zi_bu_neng_chong_fu.attr('target', '');
					form_ming_zi_bu_neng_chong_fu.attr('method', 'post');
					//form提交路径
					form_ming_zi_bu_neng_chong_fu.attr('action', root+'/export/exec');
					var input1 = $('<input>');
					input1.attr('type', 'hidden');
					input1.attr('name', 'cols');
					input1.attr('value', data2);

					var input2 = $('<input>');
					input2.attr('type', 'hidden');
					input2.attr('name', 'rows');
					input2.attr('value', data1);
					
					var input3 = $('<input>');
					input3.attr('type', 'hidden');
					input3.attr('name', 'menuTitle');
					input3.attr('value', menuTitle);

					//码值翻译
					var input4 = $('<input>');
					input4.attr('type', 'hidden');
					input4.attr('name', 'codeNames');
					if(codeNames == undefined || codeNames == '') {
						input4.attr('value', '');
					} else {
						input4.attr('value', codeNames);
					}

					$('body').append(form_ming_zi_bu_neng_chong_fu);
					form_ming_zi_bu_neng_chong_fu.append(input1);
					form_ming_zi_bu_neng_chong_fu.append(input2);
					form_ming_zi_bu_neng_chong_fu.append(input3);
					form_ming_zi_bu_neng_chong_fu.append(input4);
					form_ming_zi_bu_neng_chong_fu.submit();
					form_ming_zi_bu_neng_chong_fu.remove();

					if (button) {
						$(button).linkbutton("enable");
						$(button).linkbutton({
							text : btnName
						});
					}
				},
				error : function(data) {
					alert(data.responseText);
				}
			});
		}

	}

/** @serializedParams looks like "prop1=value1&prop2=value2".   
 Nested property like 'prop.subprop=value' is also supported **/
function paramString2obj(serializedParams) {

	var obj = {};
	function evalThem(str) {
		var attributeName = str.split("=")[0];
		var attributeValue = str.split("=")[1];
		if (!attributeValue) {
			return;
		}

		var array = attributeName.split(".");
		for (var i = 1; i < array.length; i++) {
			var tmpArray = Array();
			tmpArray.push("obj");
			for (var j = 0; j < i; j++) {
				tmpArray.push(array[j]);
			}
			;
			var evalString = tmpArray.join(".");
			// alert(evalString); 
			if (!eval(evalString)) {
				eval(evalString + "={};");
			}
		}
		;
		eval("obj." + attributeName + "='" + attributeValue + "';");

	}
	;
	var properties = serializedParams.split("&");
	for (var i = 0; i < properties.length; i++) {
		evalThem(properties[i]);
	}
	;
	return obj;
}
$.fn.form2json = function() {
	var serializedParams = this.serialize();
	var obj = paramString2obj(serializedParams);
	obj.page=1;
	obj.rows=1000;
	return JSON.stringify(obj);
}
