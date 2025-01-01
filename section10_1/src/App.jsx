import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, act } from 'react'

//가상의 데이터(마운트:서버에서 데이터를 가져온다(Ajax json))
const mockData = [
  {
    id: 0,
    writer: 'aaa',
    title: '안녕',
    content: '잘지내니',
    isDone:true,
    date: new Date().getTime(),
  },
  {
    id: 1,
    writer: 'bbb',
    title: '오랜만',
    content: '하이',
    isDone:false,
    date: new Date().getTime(),
  },
  {
    id: 2,
    writer: 'ccc',
    title: '방명록',
    content: '방명록',
    isDone:false,
    date: new Date().getTime(),
  },
]

function reducer(state, action){
  switch(action.type){
    case 'INSERT':
      return [action.data, ...state];
    case 'UPDATE': 
      return state.map((item)=>{return item.id===action.data ? {...item,isDone:!item.isDone} : item});
    case 'DELETE': 
      return state.filter((item)=>{
        return item.id!==action.data
      });
    default: return state;
}
}

function App() {
  const [diaries, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  // 추가할 레코드 처리하는 핸들러함수
  const onInsert = (w,t,c)=>{
    dispatch({
      type:"INSERT",
      data:{
        id: idRef.current++,
        writer:w,
        title: t,
        content: c,
        isDone:false,
        date: new Date().getTime(),
      }
    });
  }

  // 레코드 수정 처리하는 핸들러함수
  const onUpdate = (targetId)=>{
    dispatch({
      type:"UPDATE",
      data:targetId,
    });
  }
  
  const onUpdateContent = (i,w,t,c)=>{
    // const left = document.querySelector(".left");
    // left.style
    // return(
    //   <div>
    //     <input>인풋</input>
    //   </div>
    // )
  }

  // 레코드 삭제 처리하는 핸들러함수
  const onDelete = (targetId)=>{
    dispatch({
      type:"DELETE",
      data:targetId,
    });
  };
  

  return (
    <div className='app'>
      <div className='left'>
        <Header/> 
        <Editor onInsert={onInsert}/>
      </div>
      <div className='right'>
        <List diaries={diaries} onUpdate={onUpdate} onUpdateContent={onUpdateContent} onDelete={onDelete}/>
      </div>
    </div>
  )
}

export default App;
