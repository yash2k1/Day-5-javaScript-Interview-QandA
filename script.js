let clock1=document.getElementById('clock1');//1
let changeText=document.getElementById('changeText');//2
let newHeadingBtn=document.getElementById('newHeadingBtn');//3
let getMeH1Tag=document.getElementById('getMeH1Tag');//4
let h1Tag=document.getElementById('h1Tag');//4
let h1Tags=document.getElementsByTagName('h1');//4
let ques5=document.getElementById('ques5');//5

// 1st questions
clock1.addEventListener('click',()=>{
        setInterval(ClockTime,1000);
    
    })
    function ClockTime(){
            let time =new Date();
            let h= time.getHours();
            let m= time.getMinutes();
            let s= time.getSeconds();
            let amPm="AM";
        if(h>12){
                h=h-12;
                amPm="PM";
            }
            if(h<10) h="0"+h;
            if(m<10) m="0"+m;
            if(s<10) s="0"+s;
            
             clock1.innerHTML=` ${h} :${m} :${s} :${amPm}`
            }

// 2st questions

   let flag1=true;         
changeText.addEventListener('mouseover',()=>{
    console.log("nice1")

   if(flag1) {
    changeText.innerHTML="Welcome to Elevation academy"
    changeText.style.color='black';
    changeText.style.fontSize='40px';
 flag1=!flag1;
   }
 
})
changeText.addEventListener('mouseleave',()=>{
    console.log("nice2")

   if(!flag1){
    changeText.innerHTML="Hello world"
    changeText.style.color='red';
    changeText.style.fontSize='50px';
    flag1=!flag1;

   }
 
})
// 3
function newHeadingFunc(){
let newhead= document.createElement('h1');
newhead.textContent="MERN stack"
newHeadingBtn.before(newhead);
}
// 4 Write code to get 1st H1 element from a webpage using DOM

let count=0;
    getMeH1Tag.addEventListener('click',()=>{
        if(h1Tags[count]===undefined) count=0;
        h1Tag.textContent=h1Tags[count].textContent + `(and this is the ${count+1} h1 tag)`;
        count++;
    })
// 5
flag2=true;
function hideTextFunc(){
    
    console.log(ques5);
    // ques5.style.display=(ques5.style.display==="none")?"none":"block";
    ques5.style.visibility=(flag2)?"hidden":"visible";
    flag2=!flag2;
}