import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Routes, 
    Link, 
    Redirect 
} from 'react-router-dom';
import CreateRoomPage from '../components/CreateRoomPage';
import RoomJoinPage from '../components/RoomJoinPage';


const Home = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/'  element={<p>This a home page</p>}/>
            <Route path='/join' element={<RoomJoinPage/>}/>
            <Route path='/create' element={<CreateRoomPage/>}/>
        </Routes>
    </Router>
  )
}

export default Home