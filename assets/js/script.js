
//Game
function game(){
    let nameEl=document.getElementById("name").value;
    if(nameEl){

        document.getElementById("first").style.display='none';
        document.getElementById("second").style.display='flex';

        document.getElementById("name2").textContent=nameEl;
    }
    else{
        alert("Enter your name");
        
    }
    
};



let cnt1=0;
let cnt2=0;
function restart(){
    cnt1=0;
    cnt2=0;
    document.getElementById("name").value="";

    document.getElementById("scr1").textContent=cnt1;
    document.getElementById("scr2").textContent=cnt2;

    document.getElementById("second").style.display='none';

    let q=document.getElementById("first")
    
    q.style.display='flex';
    
    document.getElementById("result").style.display='none';
    
}


//Choosing one role
let list=['rock', 'paper', 'scissor'];
let len=list.length;


function select(user_choice){
    let rand=Math.floor(Math.random() * len); 
    let comp_choice=list[rand];
    let ans="";
    if(user_choice === comp_choice){
        ans="It's Draw";
    }
    else if ((user_choice === 'rock' && comp_choice === 'scissor' )||
    (user_choice === 'paper' && comp_choice === 'rock' )||
    (user_choice === 'scissor' && comp_choice === 'paper' ) ) {
        ans="You Won";
        cnt1++;
        document.getElementById("scr1").textContent=cnt1;
        
    } else {
        ans="You Lose";
        cnt2++;
        document.getElementById("scr2").textContent=cnt2;
    }



    //Result popup div
    let imglist=['assets/img/paper.jpg','assets/img/rock.jpg', 'assets/img/scissors.jpg']
    let res=document.getElementById("result");
    res.style.display='block';


    res.innerHTML = ''; 
    let resultText = document.createElement('p');
    resultText.textContent = ans; 
    res.appendChild(resultText);


    let imge = document.createElement('img');
    imge.src=imglist[rand];
    res.appendChild(imge);

    let bottomtextEl=document.createElement('p')
    bottomtextEl.textContent=`Computer chosed ${comp_choice}`;
    bottomtextEl.classList.add("hai");
    res.appendChild(bottomtextEl);

    let bottomtext=document.createElement('p')
    bottomtext.textContent=`Click on image to continue game`;
    bottomtext.classList.add("hai");
    res.appendChild(bottomtext);

    if(res.style.display === 'block'){
        res.addEventListener('click', function() {
            res.style.display ='none';
        });
    }

}



//Footer
function colour(color){
    const arrdiv=['header','footer', 'result', 'butn' , 'btn'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}