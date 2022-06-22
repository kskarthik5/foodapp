import { useState, React, useRef } from 'react';

const Login = () => {
    const mn = useRef(null)
    const sendOtp = (mn) => {
        setPage(otpPage)
    }
    const page1 = (
        <>
            <h3 style={{ transform: 'translateY(0vh)', color: 'white' }}>Welcome</h3>
            <img className='popcorn-img' src='https://cdn-icons-png.flaticon.com/512/3418/3418886.png'></img>
            <button className='next-button' type='submit'>Login using E-mail</button>
            <button className='next-button' type='submit' onClick={() => { setPage(mobilePage) }}>Login using Mobile</button>
            <div className='or-line'><div className='line' /><p>Or</p><div className='line' /></div>
            <button className='next-button' type='submit'>Sign up</button>
            <div className=''></div>
        </>
    )
    const mobilePage = [
        <>
            <h3 style={{ transform: 'translateY(0vh)', color: 'white' }}>Login using Mobile</h3>
            <input className='input-box' placeholder='Enter your mobile number' ref={mn}></input>
            <button className='next-button' type='submit' onClick={() => {
            }}>Get OTP</button>
            <input className='input-box' placeholder='Enter OTP' ref={mn}></input>
            <button className='next-button' type='submit' onClick={() => {
                window.location.href = '/'
            }}>Login</button>
        </>

    ]
    const [page, setPage] = useState(page1);
    return (
        <div className="container" style={{ background: 'linear-gradient( rgba(199, 10, 10, 1) 0%, rgba(0, 0, 0, 1) 100%)', height: '100vh', marginBottom: '0', color: 'white', justifyContent: 'center' }}>
            {page}
        </div>
    );
}

export default Login;
