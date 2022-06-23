const Index = () => {
    return (
        <div className="container" style={{background: 'url(https://cdn1.epicgames.com/ue/product/Screenshot/HighresScreenshot000021920-1920x1080-f6aaa8d9a7e502af79063c06d2fab3ae.jpg?resize=1&w=1920)', height: '100vh', marginBottom: '0', color: 'white' }}>
            <h3 style={{color: 'white' }}>Starfell Hall</h3>
            <img className='card-img-top' style={{border:'0',width:'80%',marginBlock:'10%'}} src='https://media.glassdoor.com/l/486287/starplex-cinemas-office.jpg'></img>
            <div style={{display:'flex'}}>
                <input className='input-box' style={{ width: "30%" }} placeholder='Screen no.'></input>
                <input className='input-box' style={{ width: "30%" }} placeholder='Seat no.'></input>
            </div>
            {/* <h2>or</h2> */}
            <button className='next-button' onClick={()=>{window.location.href='/'}}>Next</button>
        </div>
    );
}

export default Index;
