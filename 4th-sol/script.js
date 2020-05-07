var arr=["Yaakov","John", "Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(var name in arr){
	var a=Array.from(arr[name]);
	if(a[0]==="j"||a[0]=="J"){
		console.log("Good Bye "+arr[name]);
	}
	else{
		console.log("Hello "+arr[name]);
	}
}

