var arr=["Yaakov","John", "Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
function helloSpeaker(nam){
	console.log("Hello "+nam);
}
function byeSpeaker(nam){
	console.log("Good Bye "+nam);
}
for(var name in arr){
	var a=Array.from(arr[name]);
	if(a[0]==="j"||a[0]=="J"){
		byeSpeaker(arr[name]);
	}
	else{
		helloSpeaker(arr[name]);
	}
}

