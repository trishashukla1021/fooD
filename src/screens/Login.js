import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate} from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })


    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    else{
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
    
  }
  const onChange = (event) =>
    setcredentials({ ...credentials, [event.target.name]: event.target.value })

  useEffect(() => {
    // Apply background styles to the body
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.height = '';
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
  };
}, []);
  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundImage: 'url("")',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
};

const formLabelStyle = {
    color: '#28a745', // Green color
};

const formControlStyle = {
    border: '1px solid #28a745', // Green border
};

const btnPrimaryStyle = {
    backgroundColor: '#28a745', // Green background
    borderColor: '#28a745', // Green border
};

const btnPrimaryHoverStyle = {
    backgroundColor: '#218838', // Darker green on hover
    borderColor: '#1e7e34', // Darker green border on hover
};

const btnDangerStyle = {
    backgroundColor: '#dc3545', // Red background
    borderColor: '#dc3545', // Red border
};

 

const formTextStyle = {
    color: '#6c757d', // Gray text
};
  return (
    <div style={containerStyle}>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={formLabelStyle}>Email address</label>
            <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={formControlStyle}
            />
            <div id="emailHelp" className="form-text" style={formTextStyle}>We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={formLabelStyle}>Password</label>
            <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="exampleInputPassword1"
                style={formControlStyle}
            />
        </div>
        <button
            type="submit"
            className="btn btn-primary"
            style={btnPrimaryStyle}
            onMouseOver={(e) => e.currentTarget.style = btnPrimaryHoverStyle}
            onMouseOut={(e) => e.currentTarget.style = btnPrimaryStyle}
        >
            Submit
        </button>
        <Link to="/createuser" className="m-3 btn btn-danger" style={btnDangerStyle}>
            Create new Account
        </Link>
    </form>
</div>
 
  )
}

