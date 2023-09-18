let level=1;
let sec=0;
let min=0;
let timeIntervel;
let operators=['+','-','*','/','%'];
let fNumber;
let lNumber;
let selectedOperator;
let SelectedLevel;
let insertedAnswer;

// detect browser variable
const selectElement=document.getElementById('level-select');

const secElement=document.getElementById('sec');

const minElement=document.getElementById('min');

const fNumElement=document.getElementById('f-number');

const lNumElement=document.getElementById('s-number');

const selectOpElement=document.getElementById('operator');

const answerElement=document.getElementById('answer');


selectElement.addEventListener('change',()=>{
    level=parseInt(selectElement.value);
})

//timing function

const Start=()=>{
    StartTime();
   
}

const StartTime=()=>{
    sec=0;
    min=0;

    secElement.textContent='00';
    minElement.textContent='00';

    generateQuection(level);

    clearInterval(timeIntervel);
    timeIntervel=setInterval(()=>{
        sec++;
        if(sec<10){
            // set time with 0
            secElement.textContent='0'+sec;
        }else{
            secElement.textContent=sec+'';
        }

        if(sec==60){
            sec=0;
            min++;
            // add 1 minuite 
            minElement.textContent='0'+min;
        }


        if(min==3){
            min=0;
            // future logic
        }
    },1000);
    
    
}

//Quection generate function

const generateQuection=(SelectedLevel)=>{

    let maxNumber=10;

    if(SelectedLevel==2){
        maxNumber=50;
    }else if(SelectedLevel==3){
        maxNumber=100;
    }

    fNumber=Math.floor(Math.random() * maxNumber) + 1;
    lNumber=Math.floor(Math.random() * maxNumber) + 1;

    
    fNumElement.textContent=fNumber;
    lNumElement.textContent=lNumber;

    selectedOperator=operators[
        Math.floor(Math.random()*5)
    ];

    selectOpElement.textContent=selectedOperator;

}

const Submit=()=>{

    insertedAnswer=parseInt(answerElement.value); 
    let correctAnswer;

    if(fNumber&&lNumber&&selectedOperator&&insertedAnswer){

        switch(selectedOperator){
            case '+':correctAnswer=fNumber+lNumber;break;
            case '-':correctAnswer=fNumber-lNumber;break;
            case '*':correctAnswer=fNumber*lNumber;break;
            case '/':correctAnswer=fNumber/lNumber;break;
            case '%':correctAnswer=fNumber%lNumber;break;
            default:alert('it seems something went wrong');return;
        }

        if(insertedAnswer==correctAnswer){
            // save record
        }else{
            // save record
        }

        StartTime();
    }
    else{
        alert("Try Again");
    }

}