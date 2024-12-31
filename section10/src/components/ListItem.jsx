import './ListItem.css'

const ListItem = ({id,isDone,content,date, onUpdate, onDelete})=>{
    const onChangeCheckBox = ()=>{
        onUpdate(id);
    }
    const onClickItem = ()=>{
        onDelete(id);
    }

    return(
        <div className='listItem'>
            <input onChange={onChangeCheckBox} type='checkbox' checked={isDone} />
            <p className='content'>{content}</p>
            <p className='date'>{new Date(date).toLocaleDateString()}</p>
            <button onClick={onClickItem}>삭제</button>
        </div>
    )
}

export default ListItem;