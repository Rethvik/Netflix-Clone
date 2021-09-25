let mySlides = document.querySelectorAll('.mySlides');
let mySlides2 = document.querySelectorAll('.mySlides2');
let leftClick = document.querySelectorAll('.left-icon');
let rightClick = document.querySelectorAll('.right-icon');
let invisible = document.querySelectorAll('.invisible');
let description = document.querySelectorAll('.image-description'); 
let spanElm = document.querySelectorAll('.cross');
let defaultClass = document.querySelector('.default-class')
let hide = document.getElementsByClassName('hide');
let vid = document.getElementsByTagName('video')
let overlay = document.getElementsByClassName('overlay');
let playButton = document.getElementsByClassName('play');
let movieText = document.querySelector('.featured-movie-text')
let header = document.querySelector('header')
let videoDiv = document.querySelector('.video-div') 
let matter = document.getElementsByClassName('content-matter-1')
let matterP = document.getElementsByClassName('content-matter-2')
function right(i){
    rightClick[i].addEventListener('click', ()=>{
        mySlides[i].classList.add('fade');
        mySlides2[i].classList.remove("fade");
        rightClick[i].style.display="none";
        leftClick[i].style.display="block";
     });
}
function left(i){
    leftClick[i].addEventListener('click',()=>{
        mySlides[i].classList.remove('fade');
        mySlides2[i].classList.add("fade");
        rightClick[i].style.display="block";
        leftClick[i].style.display="none";
    })
}
for(let i=0;i<mySlides.length;i++){
rightClick[i].onClick = right(i);
leftClick[i].onClick = left(i);
}
for(let i=0;i<description.length;i++){
    description[i].onClick = show(i);
}
let j=0;
function show(i){
description[i].addEventListener('click',()=>{
    invisible[i].classList.toggle('despicable');
    invisible[i].classList.toggle('invisible');
    spanElm[i].addEventListener('click',()=>{
        invisible[i].classList.add('invisible')
        invisible[i].classList.remove('despicable');
    })
})
};

for(let i=0;i<playButton.length;i++){
    playButton[i].addEventListener('click',(e)=>{
        overlay[0].style.display="block";
        header.style.zIndex='1';
        movieText.style.zIndex='1';
        defaultClass.classList.add("video");
        defaultClass.classList.remove('hide');
        for(let i=0;i<matter.length;i++){
        matter[i].style.zIndex='1';
        matterP[i].style.zIndex ='1';}
        for(let i=0;i<playButton.length;i++){
        playButton[i].style.zIndex='1';}
        for(let i=0;i<spanElm.length;i++){
        spanElm[i].style.zIndex='1';}
    
        defaultClass.addEventListener('click',off);
    })
}

function off(e,i){

    if(e.target!==vid[0]){
        overlay[0].style.display='none';
        defaultClass.classList.remove('video');
        defaultClass.classList.add('hide');
        header.style.zIndex='2';
        movieText.style.zIndex='2';
        for(let i=0;i<matter.length;i++){
        matter[i].style.zIndex='2';
        matterP[i].style.zIndex ='2';}
        for(let i=0;i<playButton.length;i++){
        playButton[i].style.zIndex='2';}
        for(let i=0;i<spanElm.length;i++){
        spanElm[i].style.zIndex='2';}
        vid[0].pause();
    }
}

