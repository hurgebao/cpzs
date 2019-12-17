	function formatDict(field) {
		return function (value, row, index) {
			var data = eval('_' + field.toUpperCase() + '_DICT');
			if (value && data.data && data.data.hasOwnProperty(value)) {
				return data.data[value];
			}
			return value;
		}
	}
	function getBeforeDay(date,num){
	  var oneday=24*60*60*1000;
	  return new Date(date.getTime()-num*oneday);
  }
  function formatTime(time){
	  return format(time,"HH:mm:ss");
  }
  function formatTimeMLN(time){
	  return format(new Date(time),"HH:mm:ss");
  }
  function formatDate(date){
	  return format(date,"yyyy-MM-dd");
  }
  function formatDateMLN(date){
	  return format(new Date(date),"yyyy-MM-dd").replace(new RegExp("-","g"),"");
  } 
  function formatMoney2(money){
	  if(money==null){
		  return null;
	  }
	  var money=Math.round(money*100)/100;
	  if(money>=0){
		  return formatMoney(money,2);
	  }else{
		  money=Math.abs(money);
		  return "-"+formatMoney(money,2);
	  }
  }
  function formatMoney4(money){
	  if(money==null){
		  return null;
	  }
	  var money=Math.round(money*10000)/10000;
	  if(money==0){
		  return 0;
	  }else if(money>=0){
		  return formatMoneyP(money,4);
	  }else{
		  money=Math.abs(money);
		  return "-"+formatMoneyP(money,4);
	  }
  }
  function formatNumber(number){
	  if(number>=0){
		  return formatMoney(number,0);
	  }else{
		  number=Math.abs(number)
		  return "-"+formatMoney(number,0)
	  }
  }
  /* 
  * formatMoney(s,type) 
  * 功能：金额按千位逗号分割 
  * 参数：s，需要格式化的金额数值. 
  * 参数：type,判断格式化后的金额是否需要小数位. 
  * 返回：返回格式化后的数值字符串. 
  */ 
  function formatMoney(s, type) { 
	  if (/[^0-9\.]/.test(s)) 
	  return "0"; 
	  if (s == null || s == "") 
	  return "0"; 
	  s = s.toString().replace(/^(\d*)$/, "$1."); 
	  s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1"); 
	  s = s.replace(".", ","); 
	  var re = /(\d)(\d{3},)/; 
	  while (re.test(s)) 
	  s = s.replace(re, "$1,$2"); 
	  s = s.replace(/,(\d\d)$/, ".$1"); 
	  if (type == 0) {// 不带小数位(默认是有小数位) 
	  var a = s.split("."); 
	  if (a[1] == "00") { 
	  s = a[0]; 
	  } 
	  } 
	  return s; 
  } 
  /* 
   * formatMoney(s,type) 
   * 功能：金额按千位逗号分割 
   * 参数：s，需要格式化的金额数值. 
   * 参数：type,判断格式化后的金额是否需要小数位. 
   * 返回：返回格式化后的数值字符串. 
   */ 
   function formatMoneyP(s, n) { 
	   n = n > 0 && n <= 20 ? n : 2;   
	   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
	   var l = s.split(".")[0].split("").reverse(),   
	   r = s.split(".")[1];   
	   t = "";   
	   for(i = 0; i < l.length; i ++ )   
	   {   
	      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
	   }   
	   return t.split("").reverse().join("") + "." + r;   
   } 
   
 /* d:日期天数；dd:日期天数（2位，不够补0）；ddd:星期（英文简写）；dddd:星期（英文全拼）；

　　M:数字月份；MM:数字月份（2位，不够补0）；MMM:月份（英文简写）；MMMM:月份（英文全拼）；

　　yy:年份（2位）；yyyy:年份；

　　h:小时（12时计时法）；hh:小时（2位，不足补0；12时计时法）；

　　H:小时（24时计时法）；HH:小时（2位，不足补0；24时计时法）；

　　m:分钟；mm:分钟（2位，不足补0）；

　　s:秒；ss:秒（2位，不足补0）；

　　l:毫秒数（保留3位）；

　　tt: 小时（12时计时法，保留am、pm）；TT: 小时（12时计时法，保留AM、PM）；*/
  function format(now,mask)
  {
      var d = now;
      var zeroize = function (value, length)
      {
          if (!length) length = 2;
          value = String(value);
          for (var i = 0, zeros = ''; i < (length - value.length); i++)
          {
              zeros += '0';
          }
          return zeros + value;
      };
   
      return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0)
      {
          switch ($0)
          {
              case 'd': return d.getDate();
              case 'dd': return zeroize(d.getDate());
              case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
              case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
              case 'M': return d.getMonth() + 1;
              case 'MM': return zeroize(d.getMonth() + 1);
              case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
              case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
              case 'yy': return String(d.getFullYear()).substr(2);
              case 'yyyy': return d.getFullYear();
              case 'h': return d.getHours() % 12 || 12;
              case 'hh': return zeroize(d.getHours() % 12 || 12);
              case 'H': return d.getHours();
              case 'HH': return zeroize(d.getHours());
              case 'm': return d.getMinutes();
              case 'mm': return zeroize(d.getMinutes());
              case 's': return d.getSeconds();
              case 'ss': return zeroize(d.getSeconds());
              case 'l': return zeroize(d.getMilliseconds(), 3);
              case 'L': var m = d.getMilliseconds();
                  if (m > 99) m = Math.round(m / 10);
                  return zeroize(m);
              case 'tt': return d.getHours() < 12 ? 'am' : 'pm';
              case 'TT': return d.getHours() < 12 ? 'AM' : 'PM';
              case 'Z': return d.toUTCString().match(/[A-Z]+$/);
              // Return quoted strings with the surrounding quotes removed
              default: return $0.substr(1, $0.length - 2);
          }
      });
  };
  /**
   * 获取某一日的后 num tian
   * @param count
   * @returns {String}
   */
  function getDate(dd,count) { 
	  if(count!=0){
		  dd.setDate(dd.getDate()+count);//获取AddDayCount天后的日期 
	  }
	  var y = dd.getFullYear(); 
	  var m = dd.getMonth()+1;//获取当前月份的日期 
	  var d = dd.getDate(); 
	  return y+"-"+m+"-"+d; 
  } 
  function isprofit(value) {
	  return value >= 0;
  }
  
  function getRedOrGreen(value) {
	  return value > 0 ? "red" : (value == 0 ? "black" : "green");
  }
  
  function getRowColor(value) {
	  
	  return value > 0 ? "red" : ((value == 0 || value == null) ? "black" : "green");
  }
	function getColorByProfit(profitLossAmt){
		if (profitLossAmt>0 ){
			return 'color:red;';
		}else if(profitLossAmt<0){
			return 'color:blue;';
		}
	}