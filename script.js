function highlight() {
    //Write your code here
    const a=document.querySelector("a");
	const strong=document.querySelectorAll("strong");
		strong.forEach((e)=>{
			e.style.color="green";
	})

}


function return_normal() {
    //Write your code here
const a=document.querySelector("a");
	const strong=document.querySelectorAll("strong");
		strong.forEach((e)=>{
			e.style.color="";
		})
    
}
