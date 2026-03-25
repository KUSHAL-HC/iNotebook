import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credientials, setCredientials] =  useState({email:"",password:""});
    let navigate = useNavigate();
    

    const handelSubmit =async (e)=>{
        e.preventDefault();
        console.log(credientials);
        const response = await fetch("http://localhost:8080/api/auth/login" ,{
            method:'POST',headers:{
                'Content-Type':'application/json'
            },body: JSON.stringify({email:credientials.email, password:credientials.password})});
            const json = await response.json();
            console.log(json);
            if(json.success)
            {
                localStorage.setItem('token',json.authtoken);
                navigate("/");
                props.showAlert("Loged in Successfully","success")
            }else{
                props.showAlert("Invalid Credentials","danger");
            }
    }

    const onChange =(e)=>{
        setCredientials({...credientials,[e.target.name]: e.target.value})
  }


  return (
    <div>
       <form onSubmit={handelSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credientials.email} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={credientials.password} onChange={onChange} name="password" id="password"/>
            </div>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Login
    