import ListItem from "./ListItem";
import './List.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const List = ({data})=>{
    const [search, setSearch] = useState('');
    const [sortType, setSortType] = useState("latest");
    const [searchOpt, setsearchOpt] = useState("title");

    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    }
    const onChangeSearchOpt = (e)=>{
        setsearchOpt(e.target.value);
    }

    const getFilterItem = ()=>{
        if(search==='') {
            return data;
        }else if(searchOpt==='title'){
            return data.filter((item)=>{
                return item.title.toLowerCase().includes(search.toLowerCase());
            })
        }else if(searchOpt==='writer'){
            return data.filter((item)=>{
                return item.writer.toLowerCase().includes(search.toLowerCase());
            })
        }
    }

    const filterItem = getFilterItem();
    
    const onChangeSortType = (e)=>{
        setSortType(e.target.value);
    }
   
    const getSortData = ()=>{
        return filterItem.toSorted((a,b)=>{
            if(sortType === "oldest"){
                return Number(a.createdDate)-Number(b.createdDate)
            }else{
                return Number(b.createdDate)-Number(a.createdDate)
            }
        })
    }

    const sortedData = getSortData();

    return(
        <div className="list">
            <div className="listBar">
                <select onChange={onChangeSortType}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
                <div>
                <select onChange={onChangeSearchOpt}>
                    <option value="title">제목</option>
                    <option value="writer">작성자</option>
                </select>
                <input type="text" name="search" placeholder="검색" value={search}
                onChange={onChangeSearch}></input>
                </div>
            </div>
            <div className="listTop">
                <table>
                    <td width={'700px'}>글제목</td>
                    <td width={'200px'}>작성자</td>
                    <td width={'200px'}>작성일</td>
                </table>
            </div>
            <div>
                {sortedData.map((item)=>{
                    return <ListItem key={item.id} {...item}/>
                })}
            </div>  
        </div>
    )
}

export default List;