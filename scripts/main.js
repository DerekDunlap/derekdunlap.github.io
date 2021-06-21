let myImage=document.querySelector('img');

/*myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	myImage.setAttribute('src','images/ProfilePic.jpg');
}*/

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function myFunction(x){
  x.classList.toggle("change");
}

/*function setUserName(){
	let myName=prompt('Please enter your name: ');
	if(!myName){
		setUserName();
	}else{
	localStorage.setItem('name',myName);
	myHeading.textContent='About '+myName+'!';
	}
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName=localStorage.getItem('name');
	myHeading.textContent='About '+storedName+'!';
}

myButton.onclick=function(){
	setUserName();
}*/
