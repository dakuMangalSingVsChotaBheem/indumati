import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {

    const [roomcode , setRoomcode] = useState("")
    const navigate = useNavigate();
    const handleformsubmit = (e) => {
            e.preventDefault();
            navigate(`/room/${roomcode}`)
    }
 
  return (
    <div >
            <h1>Home</h1>
            <form onSubmit={handleformsubmit}>
                <div>
                    <label htmlFor="">Enter the Room Code</label> <br />
                    <input type="text" value={roomcode} onChange={(e) => setRoomcode(e.target.value)} required placeholder='Enter the Code' />
                </div>
                <br />
                <button type='submit'>Enter Room</button>
            </form>
    </div>
  )
}

export default Home
