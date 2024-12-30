import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState,useEffect,useRef } from 'react'

function App() {
  const [count,setCount] = useState(0);
  const [input,setInput] = useState('');
  const isMount = useRef(false);

  //업데이트 될때만
  useEffect(()=>{
    if(isMount.current === false){
      isMount.current = true;
      console.log(`(Mount) count`);
      return;
    }
      console.log(`(Update) count`);
  });
  const onClickButton = (value)=>{
    setCount(count+value);
  };

  //마운트될때, 카운트값이 변경이 될때 
  /*
  useEffect(()=>{
    console.log(`(Mount, Update) count: ${count}`);
  },[count,input]);
  const onClickButton = (value)=>{
    setCount(count+value);
  };
  */

  //input 변경된 값 세팅
  const onChangeInput = (e)=>{
    setInput(e.target.value);
  }

  return (
    <div className='app'>
      <h1>Simple Counter</h1>
      <div>
        <input type="text" value={input} onChange={onChangeInput}/>
      </div>
      <section className='viewer'>
        <Viewer count={count}/>
        {count%2===0?<Even/>:null}
      </section>
      <section className='controller'>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
