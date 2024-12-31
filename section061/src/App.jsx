import './App.css'
import { useState } from "react";
import Controller from './components/Controller'
import Viewer from './components/Viewer'

function App() {
  const [num, setNum] = useState(0);
  const onClickButton = (value)=>{
    setNum(num+Number(value))
  }
  const onClickButtonx = (value)=>{
    setNum(num*Number(value))
  }
  const onClickButtonm = (value)=>{
    setNum(num-Number(value))
  }
  const onClickButtond = (value)=>{
    setNum(num/Number(value))
  }
  const onClickButtonR = ()=>{
    setNum(0)
  }
  

  return (
    <>
     <h1>계산기</h1>
      <Viewer num={num}/>
      <Controller onClickButton={onClickButton} onClickButtonx={onClickButtonx} onClickButtonR={onClickButtonR}
      onClickButtonm={onClickButtonm} onClickButtond={onClickButtond}/>
    </>
  )
}

export default App
