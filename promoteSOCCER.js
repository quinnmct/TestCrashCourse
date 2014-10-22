var imageScript;

var scriptList = ajq("script[language='javascript']");

for(var i = scriptList.length-1; i >= 0; i--){
	var s = scriptList[i];
	if(s.test(/preloadItemImages/)){
		console.log(s);
	}
}




var.text.test