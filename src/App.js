import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import CanvasContainer from './containers/CanvasContainer'

function App() {
  return (
    <div>
      <div className="page-container">
        <Navbar />
        <Switch>
          <Route path="/gallery">
            {/* <GalleryContainer /> */}
          </Route>
          <Route path="/canvases">
            <CanvasContainer />
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
