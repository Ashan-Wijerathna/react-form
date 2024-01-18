import React,{useState,useRef} from 'react';

export default function Login() {

  const [emailIsInvalid,setEmailIsInvalid]=useState(false);
  const email=useRef();
  const password =useRef();

  function handleSubmit (event){
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    console.log('sending HTTP request......');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            ref={email}
            // onChange={(event)=>handleInputChange('email',event.target.value)}
            // value={enteredValues.email}
            />
            <div className="control-error">
              {emailIsInvalid && <p>Please enter a valid address.</p>}
            </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={password}
            // onChange={(event)=>handleInputChange('password',event.target.value)}
            // value={enteredValues.password}
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
