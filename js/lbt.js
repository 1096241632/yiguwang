function $(id) {
		return document.getElementById(id)
	}
	var num=0;//公用的下标
	var imgs=$("banner-1-1").children;//获取全部的li
	//右按钮点击
	$("right").onclick=function(){
		num++;
		//num临界值的判断
		if(num>imgs.length-1){
			num=0;
		}
		//重置图片以及底部小圆圈的样式
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.opacity = 0;
			btns[i].className="";
		}
		//对应位置的图片以及小圆圈
		imgs[num].style.opacity = 1;
		btns[num].className="black";
	}
	//左边按钮点击
	$("left").onclick=function(){
		num--;
		//num临界值的判断
		if(num<0){
			num=imgs.length-1;
		}
		//重置图片以及底部小圆圈的样式
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.opacity = 0;
			btns[i].className="";

		}
		//对应位置的图片以及小圆圈
		imgs[num].style.opacity = 1;
		btns[num].className="black";


	}
	var btns =$("btn").children;//获取全部的底部小圆圈
	for (var i = 0; i < imgs.length; i++) {
		btns[i].index=i;//保存下标
		//底部小圆圈的鼠标over事件
		btns[i].onmouseover=function(){
		    //重置图片以及底部小圆圈的样式
			for (var j = 0; j< imgs.length; j++) {
			   imgs[j].style.opacity = 0;
			   btns[j].className="";
		    }

		    //console.log(this.index)
		    //对应位置的图片以及小圆圈
	     	imgs[this.index].style.opacity = 1;
			btns[this.index].className="black";

		}
	}
	//自动播放
	var timer=null;
	clearInterval(timer);//开启定时器前先清空定时器；
	timer=setInterval($("right").onclick,2000);
	//鼠标移上停止自动播放
	$("banner-1").onmouseover=function(){
		clearInterval(timer)
	}
	//鼠标移出开启自动播放
	$("banner-1").onmouseout=function(){
		clearInterval(timer);
		timer=setInterval($("right").onclick,2000);
	}





//////////////////////tabe切换
var zBottom = $("screen8");
var oimgs = zBottom.children;
var zLimg = $("screen7");
var oTimer = null;
var oIndex = -1;

for(let j=0;j<oimgs.length;j++){
	oimgs[j].onmouseover=function(){
		clearInterval(oTimer);
		for(let z=0;z<oimgs.length;z++){
			oimgs[z].className="";
		}
		oimgs[j].className = "active";
		//鼠标滑动时更换图片
		zLimg.src = oimgs[j].src;			
	}
}

clearInterval(oTimer);
oTimer = setInterval(function(){
	tabe();
},1000);

$("screen5").onmouseout=function(){
	clearInterval(oTimer);
	oTimer = setInterval(function(){
		tabe();
	},1000);
}

function tabe(){
	oIndex++;
	if(oIndex>3){
		oIndex=0;
	}	
	for(let a=0;a<oimgs.length;a++){
		oimgs[a].className="";
	}
	oimgs[oIndex].className = "active";
	//鼠标滑动时更换图片
	zLimg.src = oimgs[oIndex].src;			
}




// 顶部悬浮效果
window.onscroll=function(){
	// console.log(1)
	var sBox = $('allLogo');
	var sHeight = document.documentElement.scrollTop || document.body.scrollTop;
	if(sHeight>=30){ 
		sBox.style.top = "0px";
		sBox.style.background="rgba(0,0,0,.5)";
		// $("banner").style.top="0";
	}else{
		sBox.style.top = "30px";
		sBox.style.background="#e0e0e0";
		// $("banner").style.top="30px";
	}
}




//文本框
var oSearchList = $('selectAll2');
var bf = $("inoutId");

bf.onfocus = function(){
	bf.value = "";
}
 bf.onblur = function(){
 	bf.value = "你好！欢迎你的到来！";
 }

	
//文本框内容点击事件
bf.oninput = bf.onpropertychange = function () {
    var sVal = this.value;
    oSearchList.innerHTML = '';
    if(sVal !== '') {
        var oScript = document.createElement('script');
        oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + sVal + '&json=1&p=3&sid=1438_24869_21080_18560_17001_25177_22160&req=2&bs=1%2B&pbs=1%2B&csor=2&pwd=1%3D&cb=callback&_=1511334117083';
        document.body.appendChild(oScript);
    }
};

// 声明回调函数
function callback(data) {
    data.s.forEach((v) => {
        var oLi = document.createElement('li');
        oLi.innerHTML = v;
        oSearchList.appendChild(oLi);
    });
}