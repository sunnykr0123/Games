import React, { useRef, useState } from 'react'
import circle from '../Images/circle.jpeg'
import cross from '../Images/cross.jpeg'
import './TicTacToe.css'
let arr=[" "," "," "," "," "," "," "," "," "];
const TicTacToe = () => {
    let [count,setCount]=useState(0);
    let[lock ,setLock]=useState(false);
    let titleRef=useRef(null);
    const toggle=(e,num)=>{
         if(lock){
            return ;
         }
         if(arr[num]!==" "){
            return;
         }
         if(count%2===0){
          e.target.innerHTML=`<img src='${cross}'>`;
          arr[num]="X";
          setCount(count+1);
         }
         else{
              e.target.innerHTML=`<img src='${circle}'>`;
          arr[num]="O";
          setCount(count+1);
         }
         checkWin();
    };
    const checkWin=()=>{
        if(arr[0]===arr[1]&&arr[1]===arr[2]&&arr[2]!==" "){
          won(arr[2]);
        }
         else if(arr[3]===arr[4]&&arr[4]===arr[5]&&arr[5]!==" "){
          won(arr[5]);
        }
         else if(arr[6]===arr[7]&&arr[7]===arr[8]&&arr[8]!==" "){
          won(arr[8]);
        }
          else if(arr[0]===arr[3]&&arr[3]===arr[6]&&arr[6]!==" "){
          won(arr[6]);
        }
         else if(arr[1]===arr[4]&&arr[4]===arr[7]&&arr[7]!==" "){
          won(arr[7]);
        }
         else if(arr[2]===arr[5]&&arr[5]===arr[8]&&arr[8]!==" "){
          won(arr[8]);
        }
         else if(arr[0]===arr[4]&&arr[4]===arr[8]&&arr[8]!==" "){
          won(arr[8]);
        }
        else if(arr[2]===arr[4]&&arr[4]===arr[6]&&arr[6]!==" "){
          won(arr[6]);
        
        }
      
    }
    const won=(Winner)=>{
        setLock(true);
        if(Winner==="X"){
            titleRef.current.innerHTML=`Congratulations: <img src=${cross}>`;
        }
        else{
            titleRef.current.innerHTML=`Congratulations: <img src=${circle}>`;
            
        }
    }
   const reset=()=>{
    setLock(false);
    setCount(0);
    arr = [" "," "," "," "," "," "," "," "," "];
    let boxes=document.getElementsByClassName("boxes");
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML=" ";
    }
    titleRef.current.innerHTML=`Tic Tac Toe Game In`;
   }
  return (
    <div>
             <div className='container'>
                <h1 className='title' ref={titleRef}>Tic Tac Toe Game In</h1>
                <div className='box'>
                  <div className='games-box1'>
                    <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
                    <div className='boxes' onClick={(e)=>{toggle(e,1)}}></div>
                    <div className='boxes' onClick={(e)=>{toggle(e,2)}}></div>
                  </div>
                   <div className='games-box2'>
                    <div className='boxes' onClick={(e)=>{toggle(e,3)}}></div>
                    <div className='boxes' onClick={(e)=>{toggle(e,4)}}></div>
                    <div className='boxes' onClick={(e)=>{toggle(e,5)}}></div>
                  </div>
                   <div className='games-box3'>
                    <div className='boxes' onClick={(e)=>{toggle(e,6)}}></div>
                    <div className='boxes' onClick={(e)=>{toggle(e,7)}}></div>
                    <div className='boxes' onClick={(e)=>{toggle(e,8)}}></div>
                  </div>
                </div>
                <button className='reset' onClick={()=>{reset()}}>Reset</button>
             </div>
    </div>
  )
}

export default TicTacToe