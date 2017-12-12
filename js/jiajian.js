

$("plustecken").onclick=function(){
	$("Numbers").innerHTML=Number($("Numbers").innerHTML)+1;
}
$("minus").onclick=function(){
	$("Numbers").innerHTML=Number($("Numbers").innerHTML)-1;
	if($("Numbers").innerHTML<=0){
		$("Numbers").innerHTML=0;
	}
}




