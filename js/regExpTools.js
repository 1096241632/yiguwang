//正则封装
//参数：
// 验证的类型
// 字符串

function check(type,str){
	switch(type){
		case "isUserName":var regObj = /^[a-zA-Z_]\w{5,11}$/;break;
		case "isPostal":var regObj = /^[0-9]{6}$/;break;
		case "isEmail":var regObj = /^\w+@\w+\.(com|net|cn|com.cn)$/i;break;
		case "isPhoneNum":var regObj = /^1[345789]\d{9}$/i;break;
		case "isId":var regObj =/^[1-9]\d{9}(0[1-9]|1[0-2])([0-2]\d|3[0-1])\d{3}[0-9x]$/i;break;
		case "isBirthday":var regObj = /^\d{4}(\/(0[1-9]|1[0-2])\/|\.(0[1-9]|1[0-2])\.|\-(0[1-9]|1[0-2])\-)([0-2]\d|3[0-1])$/i;break;
		case "isIp":var regObj = /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/i;break;
	}	
	return regObj.test(str);	
}