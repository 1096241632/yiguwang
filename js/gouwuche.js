
//购物车
var num=1;
$("markieren2-3-3").onclick=function(){
	num++
	$("markieren2-3-2").innerHTML=parseInt($("markieren2-3-2").innerHTML)+1;
	$("markieren2-4").innerHTML ="￥"+ parseInt(37 * num);
	$("markieren2-5").innerHTML = parseInt(2 * num) +"kg";
	$("markieren3-1-1").innerHTML = "￥"+parseInt(37 * num);
	$("Addon3").innerHTML = "￥"+ parseInt(37 * num);

}


$("markieren2-3-1").onclick=function(){
	num--;
	$("markieren2-3-2").innerHTML=Number($("markieren2-3-2").innerHTML)-1;
	$("markieren2-4").innerHTML = "￥"+parseInt(37 * num );
	$("markieren2-5").innerHTML = parseInt(2 * num) +"kg";
	$("markieren3-1-1").innerHTML = "￥"+parseInt(37 * num);
	$("Addon3").innerHTML ="￥"+ parseInt(37 * num);
	if($("markieren2-3-2").innerHTML<=1){
		$("markieren2-3-2").innerHTML=1;
		$("markieren2-4").innerHTML = "￥"+37;
		$("markieren2-5").innerHTML = 2 +"kg";
		$("markieren3-1-1").innerHTML = "￥"+37;
		$("Addon3").innerHTML = "￥"+37;
	}
	

}






















//购物车删除
$("delete").onclick = function(){
	alert("亲，确定要删除吗？");
	$("onlineShopping").style.display = "block";

	$("markieren2").style.display = "none";
}

























