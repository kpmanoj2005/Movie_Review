import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";
import MovieFeedback from './components/MovieFeedback';
import ViewFeedback from './components/ViewFeedback';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Movie Feedback </h1>

      {/*{Tab navigation}*/}
      <div className='tabs'>
        <Link to ="/movie"  className="tab-link-reveal">
        Movie Reviews
        </Link>
        <Link to = "/view" className="tab-link-reveal">
        View Reviews
        </Link>

      </div>

      {/*{Routes} */}
      <Routes>
        <Route path="/" element={<Navigate to = " /student"/>} />
        <Route path="/movie" element ={<MovieFeedback/>}/>
        <Route path="/view" element ={<ViewFeedback/>}/>
      </Routes>


    </div>
     </Router>
  );
}

export default App;