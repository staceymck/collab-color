import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CanvasList from '../components/CanvasList/CanvasList';
import { fetchCanvasesStart } from '../actions/canvasActions';
import { newPainting } from '../actions/studioActions';
import StudioPage from "../components/StudioPage/StudioPage";
import Loading from "../components/Loading/Loading";

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
      return <div>Canvas not found!</div> //handle errors - maybe redirect to canvas list route
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