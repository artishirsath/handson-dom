//Q1//
const Qut1 = document.getElementById('text');

//Q2//
const Qut2 = document.getElementsByTagName('h1');

//Q3//
const Qut3 = document.getElementsByClassName('box1');

//Q4//
var a=document.getElementsByClassName("box");
console.log(a[0].innerHTML);

a[0].innerHTML="Hello World";

console.log(a[0].innerText);
a[0].innerText="Hello";

a[0].addEventListener("click", () => {
   a[0].innerHTML="Hello World";
})

//Q5//
function onbuttoncreplace(){
    var spann = document.getElementById('span')
    spann.textContent = "Welcome To Elevation Academy"

    }

//Q6//
const Qut6 = document.getElementsByTagName('h3')[0]
Qut6.setAttribute("id", "new")
const change = document.getElementById('new')
change.style.color = "red"   

//Q7//
function onbuttonclick(){
    var flex = document.getElementById('flex-container')
    if(flex.style.flexDirection == "row"){
        flex.style.flexDirection = "column"
        console.log('column');
    }
    else{
        flex.style.flexDirection = "row"
        console.log('row');

    }
}
//Q9//
var sessii = ""
const settime1 = () => {
var d = new Date()
var hr = d.getHours()
var mi = d.getMinutes()
var se = d.getSeconds()

if (hr >= 12) {
    sessii = 'PM'
}
else {
    sessii = 'AM'
}

if (hr > 12) {
    hr = hr - 12
}

document.getElementById('hour').innerText = hr
document.getElementById('minute').innerText = mi
document.getElementById('sec').innerText = se
document.querySelector('#sessi').innerText = sessii

}
settime1();
setInterval(settime1, 1000)
