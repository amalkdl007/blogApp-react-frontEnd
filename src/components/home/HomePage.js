import React from 'react';
import './HomePage.css';

function HomePage(props) {
    return (
        <div className='home'>
            <h1 id='head'>Home</h1>
            <p id='para'>This Blog features the latest web development technologies used by developers all around the world.It is constantly being updated and documentation on each of them are available in their respective websites.</p>
        </div>
    );
}

export default HomePage;