import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Rohan's Blog</h2>  {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/">Home</Link>
                    <Link className= "link" to="/Login">Login</Link>
                    <Link className= "link" to="/signup">Signup</Link>
                    <Link className="link" to="/AboutPage">About</Link>
                    <Link className="link" to="/ArticlesList">Articles</Link>
                    <Link className= "link" to="/logout">Logout</Link>
                </div>
            </nav>
            
        </div>
    );
}

export default Header;