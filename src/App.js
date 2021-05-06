import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import CanvasesContainer from './containers/CanvasesContainer'
import PaintingsContainer from './containers/PaintingsContainer'

function App() {
  return (
    <div>
      <div className="page-container">
        <Navbar />
        <Switch>
          <Route path="/gallery" component={PaintingsContainer} />
          <Route path="/canvases">
            <CanvasesContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div className="push"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
