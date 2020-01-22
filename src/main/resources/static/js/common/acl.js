function post(url, data){
	$.post(url, data, function(data) {
	});
}
function setButtonState(domElem, disabled) {                    // 设置按钮状态

    var data = $.data(domElem, "linkbutton");                   // 获取对象的数据
    if (disabled) {                                             // 禁用按钮
        data.options.disabled = true;
        var href = $(domElem).attr("href");                     // 获取超级连接
        if (href) {
            data.href = href;                                   // 保存原来的超级链接
            $(domElem).attr("href", "javascript:void(0)");      // 重新设置
        }
        if (domElem.onclick) {                                  // 是否有点击事件处理
            data.onclick = domElem.onclick;
            domElem.onclick = null;                             // 取消掉
        }
        var eventData = $(domElem).data("events") || $._data(domElem, 'events');
        if (eventData && eventData["click"]) {
            var clickHandlerObjects = eventData["click"];
            data.savedHandlers = [];
            for (var i = 0; i < clickHandlerObjects.length; i++) {
                if (clickHandlerObjects[i].namespace != "menu") {
                    var handler = clickHandlerObjects[i]["handler"];
                    $(domElem).unbind('click', handler);
                    data.savedHandlers.push(handler);
                }
            }
        }

        $(domElem).addClass("l-btn-disabled");                  // 使用样式
    } else {
        data.options.disabled = false;                          // 启用按钮
        if (data.href) {                                        // 恢复原来的超级链接
            $(domElem).attr("href", data.href);
        }
        if (data.onclick) {                                     // 恢复原来的点击事件处理
            domElem.onclick = data.onclick;
        }
        if (data.savedHandlers) {
            for (var i = 0; i < data.savedHandlers.length; i++) {
                $(domElem).click(data.savedHandlers[i]);
            }
        }

        $(domElem).removeClass("l-btn-disabled");
    }
}
function showmsg(msgstr){
	/*$.messager.show({
	    title:'提示',
	    timeout:1000,
	    msg:msgstr,
	    height:150,
	    width:350,
	    showType:'show',
	    style:'width:900px; margin:0 auto'
   });*/
	$.messager.alert('消息', msgstr); 
}
function showmsgMiddle(msgstr){
	$.messager.show({
	 title:'提示',
	 timeout:1000,
	 msg:msgstr,
	 height:150,
	 width:350,
	 showType:'fade',
	style:{
		right:'',
		bottom:''
	}
	 });
    /*$.messager.alert('消息', msgstr);*/
}
function ccknull(element){
	if(!element.value || element.value==''){
		$("#"+element.id+"msg").html("不能为空。");
		return true;
	}else{
		return false;
	}
}
function cckshuzi(element){
	if(!/^[0-9]*$/.test(element.value)){
		$("#"+element.id+"msg").html("只能输入数字。");
		return true;
	}else{
		return false;
	}
}

function ajaxSubmit(frm, fn) {
    var dataPara = getFormJson(frm);
    $.post(frm.action, dataPara, fn, 'json');
}

function getFormJson(frm, hasChild) {
    var o = {};

    var a = $(frm).serializeArray();
   
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
	if (hasChild) {
		return parseForm(o);
	}
    return o;
}

function parseForm(o) {
    for (var name in o) {
		if (name.indexOf('.') > -1) {
			var fields = name.split('.');
			for (var i = 0; i < fields.length; i++) {
				var _key = 'o.' + fields.slice(0, (i + 1)).join('.');
				if (typeof eval(_key) == 'undefined' && i != fields.length - 1) {
					eval(_key + '={}');
				}
			}
			eval('o.' + fields.join('.') + '=o[name]');
			delete o[name];
		}
	}
	return o;
}

function validateForm(inputs) {
	var flag = '';
	for (var i = 0; i < inputs.length; i++) {
		var $obj = $(inputs[i]);
		if ($obj.hasClass('easyui-combobox')) {
			if (!$obj.combobox('isValid')) {
				return flag = $obj.attr('textboxname');
			}
		} else if ($obj.hasClass('easyui-textbox')) {
			if (!$obj.textbox('isValid')) {
				return flag = $obj.attr('textboxname');
			}
		} else if ($obj.hasClass('easyui-numberbox')) {
			if (!$obj.numberbox('isValid')) {
				return flag = $obj.attr('textboxname');
			}
		} else if ($obj.hasClass('easyui-validatebox')) {
			if (!$obj.validatebox('isValid')) {
				return flag = $obj.attr('textboxname');
			}
		}
	}
	return flag;
}
/**
 * 格式化时间戳  14000290232-->2017-02-06 12:09:23
 * @param value
 * @returns {String}
 */
function add0(m){return m<10?'0'+m:m }

function datetimeFormat(value){
	if(value && typeof(value) != "undefined"){
		var date = new Date(value);
        var y = date.getFullYear();
        var MM = date.getMonth()+1;
        var d = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return y + "-" + add0(MM) + "-" + add0(d) + " " + add0(h) + ":" + add0(m) + ":" + add0(s);
	}else {
      return '';
    }
}

function dateFormat(value, rowData, rowIndex) {
    if (value && typeof(value) != "undefined") {
    	var date = new Date(value);
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        return y + '-' + add0(m) + '-' + add0(d);
    } else {
        return '';
    }
}
/**
 * 显示系统时间：yyyy-MM-dd HH:mm:ss
 */
function showCurrentDateTime(){
	var cur_val = new Date();
    var year = cur_val.getFullYear();
    var month =(cur_val.getMonth() + 1).toString();
    var day = (cur_val.getDate()).toString();
    var hour = (cur_val.getHours()).toString();
	var minute = (cur_val.getMinutes()).toString();
	var second = (cur_val.getSeconds()).toString();
    if (month.length == 1) {
        month = "0" + month;
    }
    if (day.length == 1) {
        day = "0" + day;
    }
    if(hour.length == 1){
    	hour = "0" + hour;
    }
    if(minute.length == 1){
    	minute = "0" + minute;
    }
    if(second.length == 1){
    	second = "0" + second;
    }
    return cur_date_time = year+'-'+month+'-'+day+" "+hour+":"+minute+":"+second;
}

function showCurrentDate(){
	//设置对账日期为系统当前日期yyyy-MM-dd
	var cur_val = new Date();
    var year = cur_val.getFullYear();
    var month =(cur_val.getMonth() + 1).toString();
    var day = (cur_val.getDate()).toString();
    if (month.length == 1) {
        month = "0" + month;
    }
    if (day.length == 1) {
        day = "0" + day;
        
    }
    return cur_date = year + '-' + month + '-' +  day;
}
/**
 * 把时间戳转换为yyyy-MM-dd
 * @param str
 * @returns {String}
 */
function getDateDiff(str) {
		if(str != null){
			var date = new Date(str);
			var Y=date.getFullYear()+'-';
			var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)+'-';
			var D=date.getDate()<10?'0'+date.getDate():date.getDate();
			return Y + M + D;
		}
	}

/* 会计金额小写转大写 */
function toChineseMoney(num){ 
	for(i=num.length-1;i>=0;i--) {
		num = num.replace(",",""); 
		num = num.replace(" ",""); 
	} 
	num = num.replace("￥","") ;
	if(isNaN(num)) {
		alert("请检查小写金额是否正确"); 
		return; 
	} 
	part = String(num).split("."); 
	newchar = ""; 
	for(i=part[0].length-1;i>=0;i--){
		if(part[0].length > 10){ 
			alert("位数过大，无法计算");
			return "";
		} 
		tmpnewchar = "";
		perchar = part[0].charAt(i); 
		switch(perchar){ 
			case "0": 
				tmpnewchar="零" + tmpnewchar ;
				break; 
			case "1": 
				tmpnewchar="壹" + tmpnewchar ;
				break; 
			case "2": 
				tmpnewchar="贰" + tmpnewchar ;
				break; 
			case "3": tmpnewchar="叁" + tmpnewchar ;
				break; 
			case "4": tmpnewchar="肆" + tmpnewchar ;
				break; 
			case "5": tmpnewchar="伍" + tmpnewchar ;
				break; 
			case "6": tmpnewchar="陆" + tmpnewchar ;
				break; 
			case "7": tmpnewchar="柒" + tmpnewchar ;
				break; 
			case "8": tmpnewchar="捌" + tmpnewchar ;
				break; 
			case "9": tmpnewchar="玖" + tmpnewchar ;
				break; 
		} 
		switch(part[0].length-i-1){ 
			case 0: tmpnewchar = tmpnewchar +"元" ;
				break; 
			case 1: 
				if(perchar!=0){
					tmpnewchar= tmpnewchar +"拾" ;
					break; 
				}
			case 2: 
				if(perchar!=0){
					tmpnewchar= tmpnewchar +"佰" ;
				}
				break; 
			case 3: 
				if(perchar!=0){
					tmpnewchar= tmpnewchar +"仟" ;
				}
				break; 
			case 4: 
				tmpnewchar= tmpnewchar +"万" ;
				break; 
			case 5: 
				if(perchar!=0){
					tmpnewchar= tmpnewchar +"拾" ;
				}
				break; 
			case 6: 
				if(perchar!=0){
					tmpnewchar= tmpnewchar +"佰" ;
				}
				break;
			case 7: 
				if(perchar!=0){
					tmpnewchar= tmpnewchar +"仟" ;
				}
				break; 
			case 8: 
				tmpnewchar= tmpnewchar +"亿" ;
				break; 
			case 9: 
				tmpnewchar= tmpnewchar +"拾" ;
				break; 
		} 
		newchar = tmpnewchar + newchar; 
	} 
	if(num.indexOf(".")!=-1){ 
		if(part[1].length > 2) { 
			part[1] = part[1].substr(0,2) 
		} 
		for(i=0;i<part[1].length;i++){ 
			tmpnewchar = "";
			perchar = part[1].charAt(i) ;
			switch(perchar){ 
				case "0": 
					tmpnewchar="零" + tmpnewchar ;
					break; 
				case "1": 
					tmpnewchar="壹" + tmpnewchar ;
					break; 
				case "2": 
					tmpnewchar="贰" + tmpnewchar ;
					break; 
				case "3": 
					tmpnewchar="叁" + tmpnewchar ;
					break; 
				case "4": 
					tmpnewchar="肆" + tmpnewchar ;
					break; 
				case "5": 
					tmpnewchar="伍" + tmpnewchar ;
					break; 
				case "6": 
					tmpnewchar="陆" + tmpnewchar ;
					break; 
				case "7": 
					tmpnewchar="柒" + tmpnewchar ;
					break; 
				case "8": 
					tmpnewchar="捌" + tmpnewchar ;
					break; 
				case "9": 
					tmpnewchar="玖" + tmpnewchar ;
					break; 
			} 
			if(i==0)tmpnewchar =tmpnewchar + "角"; 
			if(i==1)tmpnewchar = tmpnewchar + "分"; 
			newchar = newchar + tmpnewchar; 
		} 
	} 
	while(newchar.search("零零") != -1) {
		newchar = newchar.replace("零零", "零"); newchar = newchar.replace("零亿", "亿"); 
	}
		newchar = newchar.replace("亿万", "亿"); newchar = newchar.replace("零万", "万"); 
		//newchar = newchar.replace("零元", "元"); 
		newchar = newchar.replace("零角", ""); 
		newchar = newchar.replace("零分", ""); 
		if (newchar.charAt(newchar.length-1) == "元" || newchar.charAt(newchar.length-1) == "角") {
			newchar = newchar+"整";
		}
			
			return newchar; 
	} 
/* 会计 金额大写提示 */
function showChineseMoneyValue(ths,titleId){
	var temp=$(ths).val();
	if(temp=='0' || temp == 0){
		$(ths).val(parseFloat(temp)).focus();
		$("#"+titleId).val('');
		return ;
	}
	if(temp!=null&&temp.length>0){
		var value=temp.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
		value = toChineseMoney(value);
		$("#"+titleId).val(value);
	}
}



/**
 * 强制性保留四位小数,不足的补0,不进行四舍五入
 * @param value 要转化的小数
 * @param num 要保留的位数
 * @returns
 */
function moneyFormatRound(value, num){
    var a, b, c, i;
    a = value.toString();
    b = a.indexOf(".");
    c = a.length;
    if (num == 0) {
        if (b != -1) {
            a = a.substring(0, b);
        }
    } else {//如果没有小数点
    if (b == -1) {
        a = a + ".";
        for (i = 1; i <= num; i++) {
            a = a + "0";
        }
    } else {//有小数点，超出位数自动截取，否则补0
        a = a.substring(0, b + num + 1);
        for (i = c; i <= b + num; i++) {
            a = a + "0";
        }
    }
    }
    return a;
 }
//去掉左边的空白  
function trimLeft(s){
    if(s == null) {
        return "";  
    }  
    var whitespace = new String(" \t\n\r");
    var str = new String(s);
    if (whitespace.indexOf(str.charAt(0)) != -1) {
        var j=0, i = str.length;
        while (j < i && whitespace.indexOf(str.charAt(j)) != -1){
            j++;
        }
        str = str.substring(j, i);
    }
    return str;
}

//去掉右边的空白
function trimRight(s){
    if(s == null) return "";
    var whitespace = new String(" \t\n\r");
    var str = new String(s);
    if (whitespace.indexOf(str.charAt(str.length-1)) != -1){
        var i = str.length - 1;
        while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1){
           i--;
        }
        str = str.substring(0, i+1);
    }
    return str;
}

/**
 * 金额处理，四舍五入保留两位小数，加上千分位
 * @author haoyy
 * @param value
 * @returns
 */
function moneyFormat(value){
	if(value == null) return "0.00";
	return (parseFloat(value).toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

$.ajaxSetup({
	beforeSend: function (xhr) {
		var authheader=localStorage.getItem("authHeader") ;
		xhr.setRequestHeader("token", authheader);
	},
	complete : function(XMLHttpRequest, textStatus) {
		var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus"); // 通过XMLHttpRequest取得响应头，sessionstatus，
		if (sessionstatus == "timeout") {
			window.location.href="/login.html";
		}
	}
});
