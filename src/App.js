import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ArticlesList from './components/articles/ArticlesList';
import ArticlePage from './components/articles/ArticlePage'; 
import Error from './components/error/Error';
import Header from './components/header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  
  return (

    <Router>
      <>
        <Header/>
        
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/AboutPage" element= {<AboutPage/>} />
          <Route path="/ArticlesList" element= {<ArticlesList/>} />
          <Route path="/ArticlePage/:id" element= {<ArticlePage/>} />
          <Route path="*" element= {<Error/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
