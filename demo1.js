/*zhushiyige*/
function (id){
	var  obj=document.getElementById(id);
	var  disX=0;
	var  disY=0;
	document.onmousedown=function(){
		disX=ev.pageX-obj.offsetLeft;
		disY=ev.pageY-obj.offsetTop;
	}
}