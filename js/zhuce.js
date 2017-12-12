function $(id){
	return document.getElementById(id);
}

//注册验证
	$("mobliePhone").onblur = function(){
		//1、定义规则：
		//手机号码的规则，1开头，第二位是（3,4,5,7,8,9），一共十一位纯数字
		if(check("isPhoneNum",this.value)){
			$("mobliePhoneMsg").innerHTML = "√";
		}else{
			$("mobliePhoneMsg").innerHTML = "×";
		}
	}