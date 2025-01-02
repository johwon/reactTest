import './ListItem.css'

const ListItem = ({id, writer, title, content, isDone, date, onUpdate,onUpdateContent, onDelete})=>{
    const onChangeContent = ()=>{
        const String = prompt('변경 내용을 입력하세요');
        console.log(String);
        onUpdateContent(id,String);
        // return (
        //     <div>
        //         <input type='text' value={writer}  placeholder='작성자 입력...'/>
        //         <input type='text' value={title}  placeholder='제목 입력...'/>
        //         <textarea value={content} placeholder='내용 입력...' rows={12} onChange={onChangeContent}></textarea>
        //         <button>등록</button>
        //     </div>
        // )
        // onUpdateContent(id, writer, title, content);
    }
    
    const onChangeChecked = ()=>{
        onUpdate(id);
    }
    const onClickItem = ()=>{
        onDelete(id);
    }

    return(
        <div className='listItem'>
            <input type='checkbox'onChange={onChangeChecked} checked={isDone}></input>
            <h3 className='title'>{title}</h3>
            <p className='content'>{content}</p>
            <div className='under'>
                <p className='date'>작성자 : {writer}</p>
                <p className='date'>{new Date(date).toLocaleDateString()}</p>
            </div>
            <div className='listItemButton'>
                <button onClick={onChangeContent}>수정</button>
                <button onClick={onClickItem}>삭제</button>
            </div>
        </div>
    )
}

export default ListItem;