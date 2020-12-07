import React from 'react';
import './App.css';
import Game from './Game.js';
import Navbar from './Navbar';

function App() {
    const [isMuted, setIsMuted] = React.useState(false);

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    }

    return (
        <React.Fragment>
            <Navbar isMuted={isMuted} onMuteToggle={handleMuteToggle} />
            <div className="App App-header">
                <Game />
            </div>
        </React.Fragment>
    );
}

export default App;
