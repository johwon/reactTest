import './App.css'
import { useState } from "react";
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Viewer2 from './components/Viewer2'

function App() {
  const [input, setInput] = useState('');
  const [symbol, setSymbol] = useState('');
  const [cal, setCal] = useState(0);
  //input값 받기
  const onClickButton = (value)=>{
    setInput(input+value);
  }
  //symbol값 받기
  const onClickSymbol = (value)=>{
    setSymbol(value);
  }
  //계산값 넘기기
  const onClickCal = ()=>{
    console.log("cal:"+cal);
    if(symbol==='+'){
      setCal(cal+Number(input));
    }
    if(symbol==='-'){
      setCal(cal-Number(input));
    }
    if(symbol==='*'){
      setCal(cal*Number(input));
    }
    if(symbol==='%'){
      setCal(cal/Number(input));
    }
    setInput('');
  }

  //리셋
  const onClickReset = ()=>{
    setInput('');
    setCal(0);
  }

  return (
    <>
     <h1>계산기</h1>
      <Viewer input={input}/>
      <Viewer2 cal={cal}/>
      <Controller onClickButton={onClickButton} onClickCal={onClickCal} 
      onClickSymbol={onClickSymbol} onClickReset={onClickReset}/>
    </>
  )
}

export default App
