import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default class CanvasContainer extends React.Component {
  render() {
    return (
      <div>
       <Switch> 
         <Route exact path="/canvases">
           Test
        </Route>
        <Route path="canvases/:id/paintings/new" component={(routeInfo) => <div>Test</div>} /> 
      </Switch> 
    </div>
    )
  }
}