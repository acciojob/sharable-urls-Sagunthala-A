// your code here
let btn = document.getElementById("button");
let h3 = document.getElementById("url");
let name = document.getElementById("name");
let year = document.getElementById("year");


btn.addEventListener("click",()=>{
	h3.innerText = `hi`
	if(name.target.value && year.target.value) {
		h3.innerText = `hi`
	}
})
