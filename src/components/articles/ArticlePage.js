import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Error from '../error/Error';
import Comments from './Comments';
import UpvoteSection from './UpvoteSection';
import AddComments from './AddComments';
import Pageloader from './Pageloader';
import './Articles.css';


const ArticlePage = ()=> {
    const { id } = useParams();
    const [articleData, setArticleData] = useState({
        title: "",
        description: "",
        name: "",
        upvotes: [],
        comments: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAPI();
    },[id] );

    async function fetchAPI() {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'get',    
        });
        const body = await response.json();
        if (body !== { status: "Error" })
            setArticleData(body);
        setLoading(false);
    }

    if (!articleData.title) 
    // return <Error/>
    return (<><Pageloader loading={loading} /><Error /></>);
  
    
        
   
    return (
        <div className="blogPost">
            <h1 className="postTitle">{articleData.title}</h1>
            <h2 className="postAuthor">By {articleData.name}</h2>
            <UpvoteSection id={id} setArticleData={setArticleData} upvotes={articleData.upvotes} />
            <pre className="postDescription">{articleData.description}</pre>
            <Comments comments={articleData.comments} />
            <AddComments id={id} setArticleData={setArticleData} />
        </div>
    );
};

export default ArticlePage;