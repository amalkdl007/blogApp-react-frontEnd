import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './Articles.css';

const ArticlesList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        const response = await fetch('/api/posts', {
            method: 'get',
        });
        const body = await response.json();
        console.log(body);
        setPosts(body);
    }


return (
        <div>
            <h1 id='articles'>Articles</h1>
            {posts.map((i, key) => (
                <Link className='article' key={key} to={`/ArticlePage/${i._id}`}>
                    <h3 className='article_head'>{i.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ArticlesList;