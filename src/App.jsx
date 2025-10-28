import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Suggestions from './Suggestions';
import Profile from './Profile';
import './App.css';
import Reels from './Reels'
import Messages from './Messages'
import Notifications from './Notifications'
import More from './More'
import Threads from './Threads'
import Explore from './Explore'
import Create from './Create'
import Search from './Search'
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="w-20"><Sidebar /></div>
          <div className="w-50">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                     <Route path="/explore" element={<Explore/>}/>
                <Route path="/more" element={<More />} />
                <Route path="/threads" element={<Threads/>}/>
                <Route path="/create" element={<Create/>}/>
                 <Route path="/search" element={<Search />} />
                  <Route path="/login" element={<Login />} />

            </Routes>
          </div>
          <div className="w-30"><Suggestions /></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
