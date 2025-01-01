import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({onInsert})=>{
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const inputWriterRef = useRef();
    const inputTitleRef = useRef();
    const inputContentRef = useRef();
    const onChangeWriter = (e)=>{
        setWriter(e.target.value);
    }
    const onChangeTitle = (e)=>{
        setTitle(e.target.value);
    }
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }
    const onKeyDown = (e)=>{
        if(e.keyCode===13){
            onSubmit();
        }
    }
    const onSubmit = ()=>{
        if(writer===''){
            alert('작성자를 입력해주세요');
            inputWriterRef.current.focus();
            return;
        }
        if(title===''){
            alert('제목을 입력해주세요');
            inputTitleRef.current.focus();
            return;
        }
        if(content===''){
            alert('내용을 입력해주세요');
            inputContentRef.current.focus();
            return;
        }
        onInsert(writer,title,content);
        setContent('');
        setTitle('');
        setWriter('');
    }
    return(
        <div className="editor">
            <input type='text' ref={inputWriterRef} value={writer} onChange={onChangeWriter}  placeholder='작성자 입력...'/>
            <input type='text' ref={inputTitleRef} value={title} onChange={onChangeTitle}  placeholder='제목 입력...'/>
            <textarea ref={inputContentRef} value={content} placeholder='내용 입력...' rows={12} onChange={onChangeContent} onKeyDown={onKeyDown}></textarea>
            <button onClick={onSubmit}>등록</button>
        </div>
    )
}

export default Editor;