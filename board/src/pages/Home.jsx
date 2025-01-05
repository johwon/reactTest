import { useContext, useState } from 'react';
import Button from '../components/Button';
import Header from './../components/Header'
import List from './../components/List'
import { BoardStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const getMonthlyData = (pivotDate, data)=>{
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
    const endTime = new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1,0,23,59,59).getTime();
    return data.filter((item)=>{beginTime<=item.createdDate && item.createDate<=endTime
    })
}

const Home = ()=>{
    const nav = useNavigate();
    const data = useContext(BoardStateContext);
    const [pivotDate, setPivotDate] = useState(new Date);

    const monthlyData = getMonthlyData(pivotDate,data);

    const onDecreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth-1))
    }
    const onIncreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth+1))
    }

    return (
        <>
            <Header left={'게시판'} 
            right={<Button text={'글 쓰기'} type={'blue'} onClick={()=>{nav("/new")}}></Button>}></Header>
            <List data={data}></List>
        </>
    )
}

export default Home;