import { useContext } from "react";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { BoardDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const New = ()=>{
    const nav = useNavigate();
    const {onCreate} = useContext(BoardDispatchContext);
    
    const onSubmit = (input)=>{
        onCreate(input.title, input.content, input.writer);
        nav("/",{replace:true})
    }

    return (
        <div className="new">
            <Header title={'글 작성하기'}></Header>
            <Editor onSubmit={onSubmit}></Editor>
        </div>
    )
}

export default New;