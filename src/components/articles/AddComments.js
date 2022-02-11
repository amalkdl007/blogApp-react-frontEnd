import React, { useState } from 'react';
import "./Articles.css";

function AddComments(props) {
    const { id, setarticleData } = props;

    // Storing comments
    const [commentValues, setCommentValues] = useState({ username: "", comment: "" });

    function handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;
        setCommentValues({ ...commentValues, [name]: value })
    }

    async function fetchComments() {
        const username = commentValues.username;
        const text = commentValues.comment;

        const response = await fetch(`/api/article/${id}/comments`, {
            method: 'post',
            body: JSON.stringify({ username, text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        setarticleData(body);
        setCommentValues({ username: "", comment: "" });
    }

    return (
        <div>
            <div className='add-comment'>
                <h3>Add a Comment</h3>
                <br></br>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="username" value={commentValues.username} onChange={handleChange} />
                </label>
                <label>
                    Comment:
                    <br></br>
                    <textarea rows="4" cols="50" name='comment' value={commentValues.comment} onChange={handleChange}></textarea>
                </label>
                <br></br>
                <button onClick={fetchComments}>Submit</button>
            </div>
        </div>
    );
}

export default AddComments;