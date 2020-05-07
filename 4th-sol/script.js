var arr=["Satya","Jashwanth","Jaipal","Karunakar","Jahnavi"];
for(var name in arr){
	var a=Array.from(arr[name]);
	if(a[0]==="j"||a[0]=="J"){
		console.log("Goodbye "+arr[name]);
	}
	else{
		console.log("Hello "+arr[name]);
	}
}

