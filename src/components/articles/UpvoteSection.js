import React from 'react';
import './Articles.css';

function UpvoteSection(props) {
    const { id, upvotes, setarticleData } = props;

    async function fetchUpVotes() {
        const response = await fetch(`/api/article/${id}/upvotes`, {
            method: 'post'
        });
        const body = await response.json();
        setarticleData(body);
    }

    return (
        <div>
            <button className="like" onClick={fetchUpVotes}>👍</button>
            <p className="votes">This article has {upvotes} upvotes</p>
        </div>
    );
}

export default UpvoteSection;