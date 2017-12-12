function $(id){
	return document.getElementById(id);
}

//验证码随机
var disembark4 = $("disembark4-1");
disembark4.onclick=function(){
	var codes=[];
	for(var i=48;i<57;codes.push(i),i++);
	console.log(codes);
	for(var i=60;i<90;codes.push(i),i++);
	for(var i=97;i<122;codes.push(i),i++);
	var arr=[];
	for(var i=0;i<4;i++) {
		var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
		var char = String.fromCharCode(codes[index]);
		arr.push(char);
	} 
	console.log(1);
	// console.log(arr);
	 var code=arr.join("");
	 disembark4.innerHTML = code;

}




 ///用户名验证
	$("#userId").onblur = function(){
		if(check("isUserName",this.value)){
			$("#userMsg").innerHTML = "√";
		}else{
			$("#userMsg").innerHTML = "×";
		}
	}





