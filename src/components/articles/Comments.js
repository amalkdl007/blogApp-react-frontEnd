// Managing the Comments
import React from 'react';

function Comments(props) {
    const { comments } = props;
    let title = "";
    if (!comments)
        return (<div></div>)
    else {
        if (comments.length > 0)
            title = "Comments";
    }
    return (
        <div>
            <h3 className='comments-head'>{title}</h3>
            {comments.map((i, key) => (
                <div key={key} className='comments'>
                    <h4>{i.username}</h4>
                    <p>{i.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Comments;