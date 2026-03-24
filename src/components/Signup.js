import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
    const [credientials, setCredientials] = useState({name:"",email:"",password:"",cpassword:""});
    let navigate = useNavigate();

        const handelSubmit =async (e)=>{
            e.preventDefault();
            console.log(credientials);
            const {name,email,password} = credientials;
            const response = await fetch("http://localhost:8080/api/auth/createuser" ,{
                method:'POST',headers:{
                    'Content-Type':'application/json'
                },body: JSON.stringify({name,email,password})});
                const json = await response.json();
                console.log(json);
                if(json.success)
                {
                    localStorage.setItem('token',json.authtoken);
                    navigate("/");
                }
        }

        const onchange =(e)=>{
            setCredientials({...credientials,[e.target.name]: e.target.value})
    }

  return ( 
    <div className='container'>
        <form onSubmit={handelSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' onChange={onchange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' onChange={onchange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="exampleInputPasswpasswordord1" onChange={onchange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="password" id="cpassword" onChange={onchange} minLength={5} required/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Signup
