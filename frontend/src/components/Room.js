import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Room = () => {
    const [votesToSkip, setVotesToSkip] = useState(2)
    const [guestCanPause, setGuestCanPause] = useState(false)
    const [isHost, setIsHost] = useState(false)
    const params = useParams()
    const roomCode = params.roomCode

    useEffect(() => {
      getRoomDetails()
    }, [])
    

    const getRoomDetails = () =>{
        fetch(`http://localhost:8000/api/get-room?code=${roomCode}`)
        .then(res => res.json())
        .then(data =>{
            setVotesToSkip(data.votes_to_skip)
            setGuestCanPause(data.guest_can_pause)
            setIsHost(data.is_host)
        })
    }

  return (
    <div>
        <h3>{roomCode}</h3>
        <p>Votes: {votesToSkip}</p>
        <p>Guest Can Pause: {guestCanPause.toString()}</p>
        <p>Host: {isHost.toString()} </p>
    </div>
  )
}

export default Room