import './List.css'
import ListItem from './ListItem'
import { useState, useMemo } from 'react'

const List = ({todos, onUpdate, onDelete})=>{
    const [search,setSearch] = useState('');

    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    }

    //useState에 해당되는 서치내용을 바꾸면 List 리랜더링 발생
    //이때 필터링을 진행한다.
    const getFilterItem = ()=>{
        if(search===''){
            return todos;
        }
        return todos.filter((item)=>{
            return item.content.toLowerCase().includes(search.toLowerCase());
        })
    }; 

    const filterItem = getFilterItem();

    //랜더링이 발생할때마다 전체 갯수 , 업무를 완료한 갯수, 업무를 미완료한 갯수 연산한다.
    // const getAnalyzeData = ()=>{
    //     console.log("getAnalyzeData 호출");
    //     const totalCount = todos.length;
    //     //이부분이 문제(불필요한 필터기능)
    //     const doneCount = todos.filter((item)=>{
    //         return item.isDone === true;
    //     }).length;
    //     const notDoneCount = totalCount - doneCount;
    //     return {totalCount, doneCount, notDoneCount}
    // };
    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log("getAnalyzeData 호출");
        const totalCount = todos.length;
        //이부분이 문제(불필요한 필터기능)
        const doneCount = todos.filter((item)=>{
            return item.isDone === true;
        }).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount}
    },[todos]);

    return(
        <div className='list'>
            <h4>Todo List💫</h4>
            <div>
                <p>total:{totalCount}</p>
                <p>완료:{doneCount}</p>
                <p>미완료:{notDoneCount}</p>
            </div>
            <input value={search} onChange={onChangeSearch} type='text' placeholder='검색어를 입력하세요'/>
            <div className='item'>
                {filterItem.map((item)=>{
                    return <ListItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}

export default List;