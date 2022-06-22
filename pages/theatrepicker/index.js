
const Index = () => {
    return (
        <div className="container" style={{ background: 'url(https://cdn1.epicgames.com/ue/product/Screenshot/HighresScreenshot000021920-1920x1080-f6aaa8d9a7e502af79063c06d2fab3ae.jpg?resize=1&w=1920)', height: '100vh', marginBottom: '0', color: 'white' }}>
            <h3 style={{color: 'white' }}>Choose your theatre</h3>
            <input className='input-box' placeholder={`Enter your theatre's name`}></input>
            {/* <h2>or</h2> */}
            <button className='next-button' onClick={()=>{window.location.href='/seatpicker'}}>Next</button>
            <h2 style={{marginTop:'3vh'}}>or</h2>
            <img style={{width:'60%',marginBlock:'10%'}} src='https://img.icons8.com/stickers/344/marker.png'></img>
            <h2>Click to detect</h2>        
            <h2>Your location</h2>        
        </div>
    );
}

export default Index;
