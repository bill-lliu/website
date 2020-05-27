// @Author: Bill Siyi Liu 
// @Date: May 27, 2020
// @Version: 1.0

var box1 = document.querySelector('.box-area li:nth-child(1)');
var box2 = document.querySelector('.box-area li:nth-child(2)');
var box3 = document.querySelector('.box-area li:nth-child(3)');
var box4 = document.querySelector('.box-area li:nth-child(4)');
var box5 = document.querySelector('.box-area li:nth-child(5)');
var box6 = document.querySelector('.box-area li:nth-child(6)');

//time is in _s for seconds
function changeAnimationTime(boxNum) {
    var duration = Math.random() * (15 - 3) + 3;
    boxNum.style.setProperty('--box-time', duration +'s');
}
//location is in _% for percent from the left side of the screen
function changeAnimationLocation(boxNum) {
    var location = Math.random() * (85 - 10) + 10;
    boxNum.style.setProperty('--box-location', location +'%');
}
//size is in _em as opposed to pixels (to be more responsive)
function changeAnimationSize(boxNum) {
    var size = Math.random() * (9 - 2) + 2;
    boxNum.style.setProperty('--box-size', size +'em');
}

function change(boxNum){
    changeAnimationTime(boxNum);
    changeAnimationLocation(boxNum);
    changeAnimationSize(boxNum);
}

//variables change every seconds
box1.addEventListener("animationiteration", change(box1));
box2.addEventListener("animationiteration", change(box2));
box3.addEventListener("animationiteration", change(box3));
box4.addEventListener("animationiteration", change(box4));
box5.addEventListener("animationiteration", change(box5));
box6.addEventListener("animationiteration", change(box6));