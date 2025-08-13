import React , { useState , useEffect} from 'react';
import axios from 'axios';

function Home(){
    const [massage , setMassage] = useState('')

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/home/')
        .then((response)=>{
            setMassage(response.data.message);
        }).catch((err)=>{
            console.error("Error fetching data:", err);
        })
    } , [])


    return(<div>
        <h1>Home Page</h1>
        <p>{massage}</p>
    </div>)
}

export default Home;