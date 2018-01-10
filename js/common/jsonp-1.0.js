/*
	#author		lut000
	#date 		2018/01/10
	#purpose	jsonp
*/

define(function(){
	var jsonp=function(url,opt){
		var esrcipt=document.createElement("script");
		esrcipt.type="text/javascript";
		var str="";
		if(opt!=undefined){
			str=JSON.stringify(opt);
			str=str.replace(/[\{\}\"\']/g,"");
			str=str.replace(/\:/g,"=");
			str=str.replace(/\,/g,"&");
		}else{
			str="callback=_callback";
		}
		esrcipt.src=url+"?"+encodeURI(str);
		document.body.appendChild(esrcipt);
	};
	return jsonp;
});