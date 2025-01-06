import { useState,useRef } from "react";

const Register = ()=>{
    const countRef = useRef(0);
    const inputRef = useRef();
    const [input, setInput] = useState({
        name:'',
        birth:'',
        country: '',
        bio: '',
    })
    
    let onChange = function(e){
        countRef.current++;
        setInput({...input, [e.target.name]:e.target.value})
    }
    //전송을 할때 점검(패턴검색)
    const onSubmit = ()=>{
        if(input.name===''){
            alert('name 값이 없습니다');
            inputRef.current.focus();
            console.log(inputRef);
        }
    };

    return (
        <>
            <div>
                <input ref={inputRef} type="text" onChange={onChange} name="name" value={input.name}></input>
            </div>
            <div>
                <input type="date" onChange={onChange} name="birth" value={input.birth}></input>
            </div>
            <div>
                <select onChange={onChange} name="country" value={input.country}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea onChange={onChange} name="bio" value={input.bio}></textarea>
            </div>
            <button onClick={onSubmit}>전송</button>
        </>
    );
}

export default Register;