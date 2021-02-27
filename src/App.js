import {Route, Switch} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import First from './components/First';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Person from './components/Person';

function App () {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" render={() => <First />} />
          <Route path="/person" render={() => <Person />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
        <Footer />
    </div>
  )
}

export default App;
