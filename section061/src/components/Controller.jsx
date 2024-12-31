
const Controller = ({onClickButton,onClickButtonx,onClickButtonm, onClickButtond, onClickButtonR})=>{
    const onClick = (e)=>{
        onClickButton(e.target.value);
    }
    const onClickx = (e)=>{
        onClickButtonx(e.target.value);
    }
    const onClickm = (e)=>{
        onClickButtonm(e.target.value);
    }
    const onClickd = (e)=>{
        onClickButtond(e.target.value);
    }
    const onClickReset = (e)=>{
        onClickButtonR(e.target.value);
    }
    return(
    <>
        <button onClick={onClick} value='10'>+10</button>
        <button onClick={onClick} value='20'>+20</button>
        <button onClick={onClickx} value='10'>x10</button>
        <button onClick={onClickx} value='20'>x20</button>
        <br></br>
        <button onClick={onClickm} value='10'>-10</button>
        <button onClick={onClickm} value='20'>-20</button>
        <button onClick={onClickd} value='10'>%10</button>
        <button onClick={onClickd} value='20'>%20</button>
        <br></br>
        <button onClick={onClickReset}>reset</button>
    </>
)};

export default Controller;