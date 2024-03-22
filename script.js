// your code here
let btn = document.getElementById("button");
let h3 = document.getElementById("url");
let name = document.getElementById("name");
let year = document.getElementById("year");


btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let baseURL = "https://localhost:8080/"
	if(name.value && year.value){
		h3.textContent = `${baseURL}?name=${name.value}&year=${year.value}`
	}else if(name.value){
		h3.textContent = `${baseURL}?name=${name.value}`
	}else if(year.value){
		h3.textContent = `${baseURL}?name=${year.value}`
	}
})
