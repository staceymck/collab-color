import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CanvasList from '../components/CanvasList/CanvasList';
import { fetchCanvasesStart } from '../actions/canvasActions';
import { newPainting } from '../actions/studioActions';
import StudioPage from "../components/StudioPage/StudioPage";
import Loading from "../components/Loading/Loading";
import NotFound from '../components/NotFound';

class CanvasesContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchCanvasesStart();
  }

  prepStudio = (routeProps) => {
    const id = parseInt(routeProps.match.params.id, 10)
    const canvas = this.props.canvases.find(c => c.id === id)
    if (canvas) {
      return (
        <StudioPage canvas={canvas} newPainting={this.props.newPainting} />
      )
    } else {
      return (
        <NotFound redirect={"/canvases"} />
      )
    }
  }
  
  render() {
    return (
      <div>
       <Switch> 
         <Route exact path="/canvases">
           <CanvasList canvases={this.props.canvases}/>
        </Route>
        <Route 
          path="/canvases/:id/paintings/new"
          render={(routeProps) => {
            return (
              this.props.canvases.length === 0 ?
              <Loading message="Loading" /> : this.prepStudio(routeProps)
            )
          }} /> 
          <Route render={(props) => <NotFound {...props} redirect={"/canvases"} />} />
      </Switch> 
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.canvases.status,
    canvases: state.canvases.canvases
  }
}

export default connect(mapStateToProps, {fetchCanvasesStart, newPainting})(CanvasesContainer)