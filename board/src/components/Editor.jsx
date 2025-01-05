import './Editor.css'
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Editor = ({onSubmit,curBoardItem,editOn})=>{
    const nav = useNavigate();
    const [input, setInput] = useState({
        title: '',
        content:'',
        writer:'',
    });

    //수정시
    useEffect(() => {
        if (editOn && curBoardItem) {
            setInput({
                title: curBoardItem.title,
                content: curBoardItem.content,
                writer: curBoardItem.writer,
                createdDate: curBoardItem.createdDate
            });
        }
    }, [editOn, curBoardItem]); // editOn 또는 curBoardItem이 변경될 때마다 실행
    
    const onChangeInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setInput({
            ...input,
            [name]:value,
        })
    }

    const onClickSubmit = ()=>{
        onSubmit(input)
    }

    return (
        <div className="editor">
            <div className="input">
                <input
                    type="text"
                    name="title"
                    placeholder="제목"
                    onChange={onChangeInput}
                    value={input.title} // input 상태를 value로 연결
                />
                <textarea
                    name="content"
                    placeholder="내용"
                    rows={15}
                    onChange={onChangeInput}
                    value={input.content} // input 상태를 value로 연결
                />
                <input
                    type="text"
                    name="writer"
                    placeholder="작성자"
                    onChange={onChangeInput}
                    value={input.writer} // input 상태를 value로 연결
                />
                <div className="button">
                    <Button text={'취소하기'} onClick={() => { nav(-1); }} />
                    <Button text={'등록하기'} onClick={onClickSubmit} />
                </div>
            </div>
        </div>
    );
}

export default Editor;