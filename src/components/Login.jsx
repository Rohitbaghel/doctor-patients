import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';

import { Auth } from './firebash';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {useRef} from 'react';
export const Login=() => {
    const Navigate = useNavigate()
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const signIn=async (e) => {
        e.preventDefault();
        try { 
            const User=await signInWithEmailAndPassword(Auth, email, password);
            alert('Login successful');
            Navigate('/home')
          
          
        } catch (e) {
            alert(e.message)
            
        }
      
    }
    const createAccount= async (e) => {
        e.preventDefault();
        try {
            const User=await createUserWithEmailAndPassword(Auth, email, password);
            alert('Account successful');
            Navigate('/home')
        } catch (e) {
           alert(e.message)
            
        }
        
    }
    return <div className='flex flex-col border-2 ' style={{height: '100vh',backgroundColor:'#11857E'}} >
        {/* <Link to='/'> */}
       
            <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" className="w-28 mx-2 mt-4 object-contain ml-auto mr-auto mb-4" />
            {/* </Link> */}
        <div className='flex flex-col h-fit w-80 border-r-4 p-5 border-2 border-grey-600 mr-auto ml-auto bg-white'>
            <p className='text-2xl font-bold mb-5 '>Sign-in</p>
            <form action="">
                <p className='mb-1'>Email</p>
                <input type="text" autoComplete="off" value={email} onChange={e=>setEmail(e.target.value)} ref={emailRef}  className="h-8 mb-3 bg-white border-black border-2 " style={{width:'98%'}}/>
                <p className='mb-1'>Password</p>
                <input type="password" autoComplete='off' value={password} onChange={e=>setPassword(e.target.value)} ref={passwordRef} className="h-8 mb-3 bg-white border-black border-2" style={{width:'98%'}} /><br />
                <button className='border-2 w-full h-8 mt-3 text-xl font-bold bg-yellow-500 rounded-sm ' type="submit" onClick={signIn} >Sign in</button>
            </form>
            <p className='text-md m-auto mt-2'>
            By signing-in you agree to the PharmEasy FAKE
            CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice
            and our Interest-Based Ads Notice.
            </p>
            <button className='border-2 w-full h-8 mt-3 font-bold bg-gray-400 rounded-sm ' onClick={createAccount}>Create your PharmEasy account</button>
        </div>
  </div>;
};
