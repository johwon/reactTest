import './List.css'
import ListItem from './ListItem'
import { useState, useMemo } from 'react'

const List = ({diaries, onUpdate, onDelete})=>{
    const [search,setSearch] = useState('');

    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    }

    //useState에 해당되는 서치내용을 바꾸면 List 리랜더링 발생
    //이때 필터링을 진행한다.
    const getFilterItem = ()=>{
        if(search===''){
            return diaries;
        }
    const select = document.querySelector("select").value;
        if(select==='writer'){
            return diaries.filter((item)=>{
                return item.writer.toLowerCase().includes(search.toLowerCase());
            })
        }else if(select==='title'){
            return diaries.filter((item)=>{
                return item.title.toLowerCase().includes(search.toLowerCase());
            })
        }else if(select==='content'){
            return diaries.filter((item)=>{
                return item.content.toLowerCase().includes(search.toLowerCase());
            })
        }
    }; 

    const filterItem = getFilterItem();

    return(
        <div className='list'>
            <h4>History</h4>
            <div className='search'>
                <select>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                    <option value="content">내용</option>
                </select>
                <input value={search} onChange={onChangeSearch} type='text' placeholder='검색어를 입력하세요'/>
            </div>
            <div className='item'>
                {filterItem.map((item)=>{
                    return <ListItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}

export default List;