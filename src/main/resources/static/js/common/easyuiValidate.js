/*
	表单校验
	使用规则：
	方法返回false时才会显示message信息
*/
$(function(){

	$.extend($.fn.validatebox.defaults.rules, {
		//最大数字
		maxNumber: {
			validator: function(value, param){ 
				return value < param[0];
			},
			message: '输入小于{0}的数字。'
		},
		//最小数字
		minNumber: {
			validator: function(value, param){ 
				return value > param[0];
			},
			message: '输入大于零的数字。'
		},
		//最少字符
		minLength: {
			validator: function(value, param){ 
				return value.length >= param[0];
			},
			message: '至少输入 {0} 个字符。'
		},
		//最多字符
		maxLength: {
			validator: function(v,p){
				return v.length <= p[0];
			},
			message:'最多输入{0}个字符。'
		},
		//数字，包括小数
		number: {
			validator: function(v){
				var reg = /^\d+(\.\d+)?$/; 
				return reg.test(v);
			},
			message:'该字段全部是数字'
		},
		//百分数
		rate:{
			validator: function(v){
			//	var reg = /^\d+(\.\d+)?$/;
				var reg=/^(?:100|[1-9]\d?)(?:\.\d{1,2})?$/;

			},
			message:'该字段全部是数字,0-100'
		},
		//整数
		intnumber:{
			validator: function(v){
				var reg =  /^\d+$/;
				return reg.test(v);
			},
			message:'该字段是整数'
		},
		//0-999的自然数
		naturalNumber:{
			validator: function(v){
				var reg = /^(0|([1-9]\d{0,2}))$/;
				return reg.test(v);
			},
			message:'请输入0-999的整数'
		},
		//大于0的正整数，不限位数
		naturalLongNumber:{
			validator: function(v){
				var reg = /^(0|[1-9]\d*)$/;
				return reg.test(v);
			},
			message:'请输入大于0的整数'
		},
		//银行账号
		bankno:{
			validator: function(v){
				var reg = /^[0-9]*$/;
				return reg.test(v);
			},
			message:'请输入正确的银行账号信息'

		},
		//验证国内邮编---6位数字
		zipCode:{
			validator:function(value){
				if(value.length!=6){
					return false;
				}else{
					var reg = /\d{6}/;
					return reg.test(value);
				}

			},
			message:"邮编必须6位数字."
		},
		// 验证传真
	    faxno : { 
	        validator : function(value) {
				if(value.length>15){
					return false;
				}else{
	        	var fax=/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i;
	        	return fax.test(value); 
				}
	            
	        }, 
	        message : '传真号码格式不正确，最长15位' 
	    },
	    // 验证QQ,从10000开始 ---最大10位
	    qq : {
			validator : function(value) { 
				if(value.length<5||value.length>10){
					return false;
				}else{
				return /^[1-9]\d{4,9}$/i.test(value); 
				}
			}, 
	        message : 'QQ号码格式不正确' 
	    } ,
	    // 验证联系人----10位
	    checkName : {
			validator : function(value) { 

				var filter  = /^[\u4e00-\u9fa5a-zA-Z]{2,10}$/;
				return filter.test(value); 
			}, 
	        message : '联系人格式不正确,最多只能输入10个字符的英文或汉字!' 
	    } ,
	    // 验证邮箱----30位
	    checkMail : {
			validator : function(value) { 
				if(value.length>30){
					return false;
				}else{
					var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				return filter.test(value); 
				}
			}, 
	        message : '邮箱格式不正确,最长30个字符!' 
	    } ,
	    // 营业执照----15位数字
	    businesslicenses : {
			validator : function(value) { 
				if(value.length!=15){
					return false;
				}else{
					return /\d/.test(value); 
				}
			}, 
	        message : '营业执照格式不正确,为15位数字' 
	    } ,
	    // 税务登记证号----15或20位数字
	    taxnumber : {
			validator : function(value) { 
				if(value.length==15||value.length==20){
					
					return /\d/.test(value); 
				}else{
					return false;
				}
			}, 
	        message : '税务登记证号格式不正确,为15位或20位数字' 
	    } ,
	    // 组织机构代码----9位数字
	    organizationcode : {
			validator : function(value) { 
				if(value.length!=9){
					return false;
				}else{
					return /\d/.test(value); 
				}
			}, 
	        message : '组织机构代码格式不正确,为9位数字' 
	    },
	    // 金额---
	    money : {
			validator : function(value) { 
				if(value.length>12){
					return false;
				}else{
					var type = /^[1-9][0-9]{0,12}$/;
					return type.test(value); 
				}
			}, 
	        message : '金额格式不正确,最长为12位整数' 
	    },
		// 小数点后两位
	    numbertwopoint : {
			validator : function(value) { 
				var type = /^\d+(\.\d{2})?$/;
				return type.test(value); 
			}, 
	        message : '只精确到后两位！' 
	    },
	    // 价格---整数
		price:{
			validator:function(value,param){ 
				var type = /^[1-9][0-9]{0,12}$/;
				if(value.length>12){
					return false;
				} 
				if(type.test(value)){
					
				}else{
					return false; 
				} 

				if(parseFloat(value)>=parseFloat(param)){
					return false;
				}
				return true;
			},
			message:"价格必须为小于售价的整数,最长12位"
		},
		  // 价格---整数或小数
		pricetwopoint:{
			validator:function(value,param){ 
				var type = /^\d+(\.\d{1,2})?$/;
				//var type = /^(?!0(\\d|\\.0+$|$))\\d+(\\.\\d{1,2})?$/;
				if(value.length>12){
					return false;
				} 
				if(type.test(value)){
					
				}else{
					return false; 
				} 
				if(parseFloat(value)==0){
					return false;
				}

				if(parseFloat(value)>=parseFloat(param)){
					return false;
				}
				return true;
			},
			message:"价格必须为大于0且小于售价的整数或小数,最长12位"
		},
		purchasequantity:{
			validator:function(value,param){ 
				var type = /^\d+(\.\d{1,2})?$/;
				//var type = /^(?!0(\\d|\\.0+$|$))\\d+(\\.\\d{1,2})?$/;
				if(value.length>12){
					return false;
				} 
				if(type.test(value)){
					
				}else{
					return false; 
				} 
				if(parseInt(value)==0){
					return false;
				}

				if(parseInt(value)>=parseInt(param)){
					return false;
				}
				return true;
			},
			message:"限购数量必须为正整数，且小于当前库存"
		},
	    // 数量---
		quantity : {
			validator : function(value) { 
				if(value.length>10){
					return false;
				}else{
					var type = /^[1-9][0-9]{0,10}$/;
					return type.test(value); 
				}
			}, 
	        message : '数量格式不正确,最长为10位整数' 
	    },
	    //联系方式校验---

	    // 3-4位区号，7-8位直播号码，1-4位分机号
	    // 如：010-6666666,010-88888888-6666 
	    tel : {
        	validator : function(value) { 
				if(value.length>18){
					return false;
				}else{
					var tel=/(^((\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
					return tel.test(value); 
				}
        	}, 
			message : '固定电话格式不正确,格式如010-88888888-6666' 
		},
		//手机校验
	    phone : {
        	validator : function(value) { 
					var tel=/^1[0-9]{10}$/;
					return tel.test(value); 
        	}, 
			message : '移动电话格式不正确' 
		},
		//针对checkbox、radio的校验，至少选择一个；使用一个隐藏域实现
		checkbox_radio : {
			validator:function(v, p){
				if($('input[name='+p+']:checked').length == 0){
					return false;
				}else{
					return true;
				}
			},
			message:'至少选择一项'
		},
		checkbox_radioGood : {
			validator:function(v, p){
				console.log(p);
				if($('input[name='+p[3]+']:checked').length == 0){
					return false;
				}else{
					return true;
				}
			},
			message:'至少选择一项'
		},
		//针对两个div中的checkbox校验
		checkbox_radio_twoSelectOne : {
			validator:function(v, p){
				if($('input[name='+p[0]+']:checked').length == 0 && $('input[name='+p[1]+']:checked').length == 0){
					return false;
				}else{
					return true;
				}
			},
			message:'至少选择一项'
		}, 
		//针对两个div中的checkbox校验
		checkbox_radio_threeSelectOne : {
			validator:function( v, p){
				if($('#areas').val() == '' && $('input[name='+p[1]+']:checked').length == 0 && $('#'+p[2]).val() == 0){
					return false;
				}else{
					return true;
				}
			},
			message:'至少选择一项'
		}, 
		//日期校验
		datecheck : {
			validator: function(v, p){
				var reg = /^(\d{4})\-(\d{2})\-(\d{2})$/;
				return reg.test(v);
			},
			message:'请使用正确的日期格式yyyy-MM-dd'
		},
		//时间校验
		timecheck : {
			validator: function(v, p){
				var reg = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
				return reg.test(v);
			},
			message:'请使用正确的时间格式yyyy-MM-dd HH:mm:ss'
		},
        //特殊要求的日期
		notNormalDate : {
			validator: function(v, p){
				var reg = /^(\d{4})\-(\d{2})$/;
				return reg.test(v);
			},
			message:'请使用日期格式yyyy-MM'
		},
        namecheck: {
            validator: function (value, param) {
                return /^[\u0391-\uFFE5\w]+$/.test(value);
            },
            message: '只允许汉字、英文字母、数字及下划线。'
        },
        CHS: {
            validator: function (value, param) {
                return /^[\u0391-\uFFE5]+$/.test(value);
            },
            message: '请输入汉字'
        },
        english : {// 验证英语
            validator : function(value) {
                return /^[A-Za-z]+$/i.test(value);
            },
            message : '请输入英文'
        },
		//验证时间的先后顺序
		timebigger : {
			validator : function(v, p) {
				console.log(v);
                return (new Date(v) - new Date(p[0])) > 0;
            },
            message : '请设置更大时间'
		},
		//验证时间的先后顺序
		timesmaller : {
			validator : function(v, p) {
				console.log(v);
                return (new Date(v) - new Date(p[0])) < 0;
            },
            message : '请设置更小时间'
		},
		//起租月与开始时间验证
		timebiggerstarttime : {
			validator : function(v, p) {
				var d = p[0];
				var darr = d.split("-");
				var dt = new Date(darr[0] + "-" + darr[1] + "-01");
                return (new Date(v+'-01') - dt) >= 0;
            },
            message : '起租月不能早于合同开始时间!'
		},
		//起租月与结束时间验证
		timebiggerendtime : {
			validator : function(v, p) {
                return ( new Date(p[0]) - new Date(v+'-01') ) > 0;
            },
            message : '起租月不能晚于合同结束时间!'
		},
		//验证form表单中是否包含需要的提交项,包含返回true，不包含返回false
		selectNothing : {
			validator : function(v, p) {
                return $('input[name^='+p[0]+']').length > 0;
            },
            message : '请添加该项'
		},
		//活动标题校验唯一性
		remoteFavname : {
			validator : function (v, p) {
				var data = {};
				data[p[1]] = v;
				data['favId'] = p[2];
				var _452 = $.ajax({
						url : p[0],
						dataType : "json",
						data : data,
						async : false,
						cache : false,
						type : "post"
					}).responseText;
				return _452 == "true";
			},
            message : '内容已重复'
		},
		//供应商校验
		checkProvider : {
			validator : function (v, p) {
				var data = $("#"+p[0]).combobox('options').data;
				for(var i=0; i<data.length; i++){
					if(data[i]['name'] == v){
						return true;
					}
				}
				return false;
			},
			message : '录入的供应商名称无效'
		},
		//渠道代理商校验
		checkAgent : {
			validator : function (v, p) {
				var data = $("#"+p[0]).combobox('options').data;
				for(var i=0; i<data.length; i++){
					if(data[i]['agentname'] == v){
						return true;
					}
				}
				return false;
			},
			message : '录入的代理商名称无效'
		},
		isCardNo:{
		validator : function (card){  
		       // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
		       var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		       return reg.test(card);
		    },
		    message : '身份证输入不合法'
		}
  
		
	});

});



//银行账号合法性校验,适用于卡号16位19位
function luhmCheck(bankno) {
	var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhm进行比较）

	var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
	var newArr = new Array();
	for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
		newArr.push(first15Num.substr(i, 1));
	}
	var arrJiShu = new Array(); //奇数位*2的积 <9
	var arrJiShu2 = new Array(); //奇数位*2的积 >9

	var arrOuShu = new Array(); //偶数位数组
	for (var j = 0; j < newArr.length; j++) {
		if ((j + 1) % 2 == 1) { //奇数位
			if (parseInt(newArr[j]) * 2 < 9)
				arrJiShu.push(parseInt(newArr[j]) * 2);
			else
				arrJiShu2.push(parseInt(newArr[j]) * 2);
		} else //偶数位
			arrOuShu.push(newArr[j]);
	}

	var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
	var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
	for (var h = 0; h < arrJiShu2.length; h++) {
		jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
		jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
	}

	var sumJiShu = 0; //奇数位*2 < 9 的数组之和
	var sumOuShu = 0; //偶数位数组之和
	var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
	var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
	var sumTotal = 0;
	for (var m = 0; m < arrJiShu.length; m++) {
		sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
	}

	for (var n = 0; n < arrOuShu.length; n++) {
		sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
	}

	for (var p = 0; p < jishu_child1.length; p++) {
		sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
		sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
	}
	//计算总和
	sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

	//计算Luhm值
	var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
	var luhm = 10 - k;

	if (lastNum == luhm) {
		return true;
	} else {
		return false;
	}
}
