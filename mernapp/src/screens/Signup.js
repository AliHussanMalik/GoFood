import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function Signup() {
    const [credentials, setcredentials] = useState({name: " ", email:"", password:"", Geolocation:""})
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch("http//:localhost:5000/api/createuser",{
            // method='POST',
            header:{'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.Geolocation})
        });
        const json =await response.json
        console.log(json);

        if(!json.seccess){
          alert("Enter Valid Credentials")
        }
        if(json.seccess){
          Navigate("/");
        }
    
      }
    const onChange=(event)=>{
      setcredentials({...credentials,[event.targer.name]:event.target.value})
    }
  return (
<>
    <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Mail</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-label">
  <label className="form-check-label" for="exampleCheck1">Address</label>
    <input type="text" className="form-control" id="exampleaddress"/>

  </div>
  <button type="submit" className="m-3 btn btn-succwss">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
    </div></>
  )
}
