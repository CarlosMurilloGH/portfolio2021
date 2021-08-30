import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import WorkPage from './pages/WorkPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';


function App() {
  return (

      <Router>
      <Header/>
        <div className="container">
        
        <Switch>

          <Route path="/WorkPage" component={WorkPage} />

          <Route path="/ContactPage" component={ContactPage} />

          
              
          <Route exact path="/" component={HomePage}/>

           
          
        </Switch>
        </div>
        
      </Router>

    
  );
}

export default App;
