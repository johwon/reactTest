import './ListItem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const ListItem = ({id,isDone,content,date})=>{
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    console.log(`listitem ${id}`);
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

//고차컴포넌트(HOC:Higher order component)
/*
export default memo(ListItem, (prevProps, nextProps)=>{
    //memo 이전값과 현재값을 비교한다. 
    //return false -> 리랜더링 발생
    //return true - > 리랜더링 발생x
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;
    return true;
});
*/
export default memo(ListItem);