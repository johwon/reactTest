import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Board from './pages/Board'
import New from './pages/New'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'
import { useReducer,useContext, createContext, useRef, useState } from 'react'

const mockData = [
  {
    id:1,
    title:"제목1",
    content:"내용1",
    writer:"김김김",
    createdDate:new Date("2025-01-01").getTime(),
  },
  {
    id:2,
    title:"제목2",
    content:"내용2",
    writer:"박박박",
    createdDate:new Date("2025-01-05").getTime(),
  },
  {
    id:3,
    title:"제목3",
    content:"내용3",
    writer:"이이이",
    createdDate:new Date("2025-01-03").getTime(),
  }
]

const reducer = (state, action)=>{
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      );
    default:
      return state;
  }
}

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();

function App() {
  const idRef = useRef(4);
  const [data,dispatch] = useReducer(reducer,mockData);

  const onCreate = (title, content, writer)=>{
    dispatch({
      type:'CREATE',
      data:{
        id:idRef.current++,
        createdDate: new Date(),
        title,
        content,
        writer
      }
    })
  }
  const onUpdate = (id, createdDate, title, content, writer)=>{
    dispatch({
      type:'UPDATE',
      data:{
        id,
        createdDate,
        title,
        content,
        writer
      }
    })
  }
  const onDelete = (id)=>{
    dispatch({
      type:'DELETE',
      id
    })
  }

  return (
    <>
    <BoardStateContext.Provider value={data}>
      <BoardDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/board/:id" element={<Board/>}></Route>
          <Route path="/new" element={<New/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
    </>
  )
}

export default App
