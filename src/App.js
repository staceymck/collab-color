import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import StudioContainer from './containers/StudioContainer';
import PaintingsContainer from './containers/PaintingsContainer';
import { connect } from 'react-redux';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App(props) {
  return (
    <div>
      <div className="page-container">
        <Navbar />
        {props.error && <ErrorModal />}
        <Switch>
          <Route path="/gallery" component={PaintingsContainer} />
          <Route path="/canvases">
            <StudioContainer />
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

const mapStateToProps = state => {
  return {
    error: state.errors.error
  }
}

export default connect(mapStateToProps)(App);
