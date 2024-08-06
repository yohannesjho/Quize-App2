import React, { useState, useRef } from 'react'
import { data } from "../../assets/data"
const Quize = () => {
let [index, setIndex] = useState(0)
let [question, setQuestion] = useState(data[0])
let [score,setScore] = useState(0)
let [lock, setLock] = useState(false)


 const clickNext = () =>{
    setIndex(++index)
    setQuestion(data[index])
    setLock(false)
    option_array.map((option)=>{
        option.current.classList.remove('wrong')
        option.current.classList.remove('correct')
    })
    
 }

 let option1 = useRef(null)
 let option2 = useRef(null)
 let option3 = useRef(null)
 let option4 = useRef(null)

 let option_array = [option1,option2, option3, option4]

 const clickOption = (e,tr)=>{
if(lock===false){
    if(tr === question.ans){
        e.target.classList.add('correct')
        setScore(score +1 )
        setLock(true)
    }
    else {
        e.target.classList.add('wrong')
        setLock(true)
        option_array[question.ans-1].current.classList.add('correct')
    }
}
 }
    return (
        <div className='  rounded-md flex  h-[100vh] justify-center items-center '>
            <div className='  w-96 h-2/3 p-2 space-y-2 bg-white'>
                <h1 className='text-lg font-bold '>Quize</h1>
                <hr className='text-[20px]' />
                <h2 className='font-medium'>{index + 1}.{question.question}</h2>
                <ul className='space-y-2'>
                    <li ref={option1} className='border-2 border-slate-500 p-2 cursor-pointer'  onClick={(e)=>clickOption(e, 1)}>{question.option1}</li>
                    <li ref={option2} className='border-2 border-slate-500 p-2 cursor-pointer' onClick={(e)=>clickOption(e, 2)}>{question.option2}</li>
                    <li ref={option3} className='border-2 border-slate-500 p-2 cursor-pointer' onClick={(e)=>clickOption(e, 3)}>{question.option3} </li>
                    <li ref={option4} className='border-2 border-slate-500 p-2 cursor-pointer' onClick={(e)=>clickOption(e, 4)}>{question.option4}</li>
                </ul>
                <div className='flex flex-col items-center'>
                    <button className='bg-purple-600 p-2 w-24 rounded-md' onClick={()=>clickNext()}>next</button>
                    <h2>{index + 1} out of {data.length}</h2>
                    <h1>your score is {score} </h1>
                </div>

            </div>
        </div>
    )
}

export default Quize