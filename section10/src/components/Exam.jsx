import { useReducer } from "react";
import './Exam.css';

//reducer에서 써야할 함수 밖에 선언한다
function reducer(state, action){
    switch(action.type){
        case 'PLUS': return state + action.data; 
        case 'MINUS': return state - action.data; 
        default: return state;
    }
}

const Exam = ()=>{
    //함수와 디폴트값 매개변수 전달
    const [state, dispatch] = useReducer(reducer, 0);
    const onClickPlus = ()=>{
        dispatch({
            type:"PLUS",
            data:1,
        }); //액션객체
    }
    const onClickMinus = ()=>{
        dispatch({
            type:"MINUS",
            data:1,
        });
    }
    return(
        <div className="exam">
            <h1>{state}</h1>
            <button onClick={onClickPlus}>PLUS</button>
            <button onClick={onClickMinus}>MINUS</button>
        </div>
    )
};

export default Exam;