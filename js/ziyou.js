$("markieren2-3-3").onclick=function(){
	$("markieren2-3-2").innerHTML=Number($("markieren2-3-2").innerHTML)+1;
}
$("markieren2-3-1").onclick=function(){
	$("markieren2-3-2").innerHTML=Number($("markieren2-3-2").innerHTML)-1;
	if($("markieren2-3-2").innerHTML<=0){
		$("markieren2-3-2").innerHTML=0;
	}
}

