import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration(regData){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[name,setName]=useState();
    const[myData,setMyData]=useState();
function getData(){
// alert("Hello inside getData");
alert("Hi "+name)
const data={
    name,password,email
}
regData(data);
// setMyData(data);
}

  return (
    //   {/* <form>
    //     <label> Enter name:</label><input type="text" onChange={(e)=>setName(e.target.value)} />
    //     <button onclick={getData}>Register</button>
    //   </form> */}
    //   {name}
    // </div>
        <form>
            <div className="form-group">
    <label htmlFor="exampleInputName1">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Enter Name"/>
    <small id="NameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData}className="btn btn-primary">Submit</button>
</form>
  )
}



export default Registration